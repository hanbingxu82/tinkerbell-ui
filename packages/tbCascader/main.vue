<!--
 * @Author: your name
 * @Date: 2021-06-18 13:10:39
 * @LastEditTime: 2021-06-18 13:37:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/packages/tbCascader/main.vue
-->
<template>
  <div :class="classes" v-click-outside="handleClose">
    <div :class="[prefixCls + '-rel']" @click="toggleOpen" ref="reference">
      <input type="hidden" :name="name" :value="currentValue">
      <slot>
        <tb-input
            :element-id="elementId"
            ref="input"
            :readonly="!filterable"
            :disabled="disabled"
            :value="displayInputRender"
            @change="handleInput"
            :size="size"
            :placeholder="inputPlaceholder"></tb-input>
        <div :class="[prefixCls + '-label']" v-show="filterable && query === ''" @click="handleFocus">
          {{ displayRender }}
        </div>
        <i class="iconfont  icon-error " :class="[prefixCls + '-arrow']" @click.stop="clearSelect" v-show="showCloseIcon"></i>  
        <i class="iconfont  icon-arrow-down" :class="[prefixCls + '-arrow']"></i>

        
      </slot>
    </div>
    <transition name="zoom-in-top">
      <drop
          v-show="visible"
          :class="{ [prefixCls + '-transfer']: transfer }"
          ref="drop"
          :data-transfer="transfer"
          :transfer="transfer"
          v-transfer-dom>
        <div>
          <cas-panel
              v-show="!filterable || (filterable && query === '')"
              ref="caspanel"
              :prefix-cls="prefixCls"
              :data="data"
              :disabled="disabled"
              :change-on-select="changeOnSelect"
              :trigger="trigger"></cas-panel>
          <div :class="[prefixCls + '-dropdown']" v-show="filterable && query !== '' && querySelections.length">
            <ul :class="[selectPrefixCls + '-dropdown-list']">
              <li :class="[selectPrefixCls + '-item', { [selectPrefixCls + '-item-disabled']: item.disabled }]"
                  v-for="(item, index) in querySelections" :key="index"
                  @click="handleSelectItem(index)" v-html="item.display"></li>
            </ul>
          </div>
          <ul v-show="(filterable && query !== '' && !querySelections.length) || !data.length"
              :class="[prefixCls + '-not-found-tip']">
            <li>{{ notFoundText }}</li>
          </ul>
        </div>
      </drop>
    </transition>
  </div>
</template>

<script>
import Drop from '../tbSelect/drop.vue'
import CasPanel from './cas-panel.vue'
import TransferDom from '../directive/transferDom'
import ClickOutside from '../directive/clickoutside'
import { oneOf } from '../utils/utils'
import Emitter from '../mixins/emitter'

const prefixCls = 'tb-cascader'
const selectPrefixCls = 'tb-select'

export default {
  name: 'tbCascader',
  mixins: [Emitter],
  components: { Drop, CasPanel },
  directives: { ClickOutside, TransferDom },
  props: {
    data: {
      type: Array,
      default() {
        return []
      }
    },
    value: {
      type: Array,
      default() {
        return []
      }
    },
    disabled: {
      type: Boolean,
      default: false
    },
    clearable: {
      type: Boolean,
      default: true
    },
    placeholder: {
      type: String,
      default: '请选择'
    },
    size: {
      validator(value) {
        return oneOf(value, ['small', 'medium', 'mini'])
      },
      default: 'small'
    },
    trigger: {
      validator(value) {
        return oneOf(value, ['click', 'hover'])
      },
      default: 'click'
    },
    changeOnSelect: {
      type: Boolean,
      default: false
    },
    renderFormat: {
      type: Function,
      default(label) {
        return label.join(' / ')
      }
    },
    loadData: {
      type: Function
    },
    filterable: {
      type: Boolean,
      default: false
    },
    notFoundText: {
      type: String,
      default: '暂无匹配数据'
    },
    transfer: {
      type: Boolean,
      default: false
    },
    name: {
      type: String
    },
    elementId: {
      type: String
    }
  },
  data() {
    return {
      prefixCls: prefixCls,
      selectPrefixCls: selectPrefixCls,
      visible: false,
      selected: [],
      tmpSelected: [],
      updatingValue: false, // to fix set value in changeOnSelect type
      currentValue: this.value,
      query: '',
      validDataStr: '',
      isLoadedChildren: false
    }
  },
  computed: {
    classes() {
      return [
        `${prefixCls}`,
        {
          [`${prefixCls}-show-clear`]: this.showCloseIcon,
          [`${prefixCls}-size-${this.size}`]: !!this.size,
          [`${prefixCls}-visible`]: this.visible,
          [`${prefixCls}-disabled`]: this.disabled,
          [`${prefixCls}-not-found`]: this.filterable && this.query !== '' && !this.querySelections.length
        }
      ]
    },
    showCloseIcon() {
      return this.currentValue && this.currentValue.length && this.clearable && !this.disabled
    },
    displayRender() {
      let label = []
      for (let i = 0; i < this.selected.length; i++) {
        label.push(this.selected[i].label)
      }

      return this.renderFormat(label, this.selected)
    },
    displayInputRender() {
      return this.filterable ? '' : this.displayRender
    },
    inputPlaceholder() {
      return this.filterable && this.currentValue.length ? null : this.placeholder
    },
    querySelections() {
      let selections = []

      function getSelections(arr, label, value) {
        for (let i = 0; i < arr.length; i++) {
          let item = arr[i]
          item.__label = label ? label + ' / ' + item.label : item.label
          item.__value = value ? value + ',' + item.value : item.value

          if (item.children && item.children.length) {
            getSelections(item.children, item.__label, item.__value)
            delete item.__label
            delete item.__value
          } else {
            selections.push({
              label: item.__label,
              value: item.__value,
              display: item.__label,
              item: item,
              disabled: !!item.disabled
            })
          }
        }
      }

      getSelections(this.data)
      selections = selections.filter(item => {
        return item.label ? item.label.indexOf(this.query) > -1 : false
      }).map(item => {
        item.display = item.display.replace(new RegExp(this.query, 'g'), `<span>${this.query}</span>`)
        return item
      })
      return selections
    }
  },
  methods: {
    clearSelect() {
      if (this.disabled) return false
      const oldVal = JSON.stringify(this.currentValue)
      this.currentValue = this.selected = this.tmpSelected = []
      this.handleClose()
      this.emitValue(this.currentValue, oldVal)
      this.broadcast('CasPanel', 'clear')
    },
    handleClose() {
      this.visible = false
    },
    toggleOpen() {
      if (this.disabled) return false
      if (this.visible) {
        if (!this.filterable) this.handleClose()
      } else {
        this.onFocus()
      }
    },
    onFocus() {
      this.visible = true
      if (!this.currentValue.length) {
        this.broadcast('CasPanel', 'clear')
      }
    },
    updateResult(result) {
      this.tmpSelected = result
    },
    updateSelected(init = false, changeOnSelectDataChange = false) {
      // #2793 当数据更改并设置值时，changeOnSelectDataChange用于changeOnSelect
      if (!this.changeOnSelect || init || changeOnSelectDataChange) {
        this.broadcast('CasPanel', 'find-selected', {
          value: this.currentValue
        })
      }
    },
    emitValue(val, oldVal) {
      if (JSON.stringify(val) !== oldVal) {
        this.$emit('change', this.currentValue, JSON.parse(JSON.stringify(this.selected)))
        this.$nextTick(() => {
          this.dispatch('BFormItem', 'form-change', {
            value: this.currentValue,
            selected: JSON.parse(JSON.stringify(this.selected))
          })
        })
      }
    },
    handleInput(event) {
      this.query = event.target.value
    },
    handleSelectItem(index) {
      const item = this.querySelections[index]

      if (item.item.disabled) return false
      this.query = ''
      this.$refs.input.currentValue = ''
      const oldVal = JSON.stringify(this.currentValue)
      this.currentValue = item.value.split(',')
      // use setTimeout for #4786, can not use nextTick, because @find-selected use nextTick
      setTimeout(() => {
        this.emitValue(this.currentValue, oldVal)
        this.handleClose()
      }, 0)
    },
    handleFocus() {
      this.$refs.input.focus()
    },
    // 排除 loading 后的 data，避免重复触发 updateSelect
    getValidData(data) {
      function deleteData(item) {
        const newItem = Object.assign({}, item)
        if ('loading' in newItem) {
          delete newItem.loading
        }
        if ('__value' in newItem) {
          delete newItem.__value
        }
        if ('__label' in newItem) {
          delete newItem.__label
        }
        if ('children' in newItem && newItem.children.length) {
          newItem.children = newItem.children.map(i => deleteData(i))
        }
        return newItem
      }

      return data.map(item => deleteData(item))
    }
  },
  created() {
    this.validDataStr = JSON.stringify(this.getValidData(this.data))
    this.$on('result-change', (params) => {
      // lastValue: is click the final val
      // fromInit: is this emit from update value
      const lastValue = params.lastValue
      const changeOnSelect = params.changeOnSelect
      const fromInit = params.fromInit

      if (lastValue || changeOnSelect) {
        const oldVal = JSON.stringify(this.currentValue)
        this.selected = this.tmpSelected

        let newVal = []
        this.selected.forEach((item) => {
          newVal.push(item.value)
        })

        if (!fromInit) {
          this.updatingValue = true
          this.currentValue = newVal
          this.emitValue(this.currentValue, oldVal)
        }
      }
      if (lastValue && !fromInit) {
        this.handleClose()
      }
    })
  },
  mounted() {
    this.updateSelected(true)
  },
  watch: {
    visible(val) {
      if (val) {
        if (this.currentValue.length) {
          this.updateSelected()
        }
        if (this.transfer) {
          this.$refs.drop.update()
        }
        this.broadcast('Drop', 'update-popper')
      } else {
        if (this.filterable) {
          this.query = ''
          this.$refs.input.currentValue = ''
        }
        if (this.transfer) {
          this.$refs.drop.destroy()
        }
        this.broadcast('Drop', 'destroy-popper')
      }
      this.$emit('visible-change', val)
    },
    value(val) {
      this.currentValue = val
      if (!val.length) this.selected = []
    },
    currentValue() {
      this.$emit('input', this.currentValue)
      if (this.updatingValue) {
        this.updatingValue = false
        return
      }
      this.updateSelected(true)
    },
    data: {
      deep: true,
      handler() {
        const validDataStr = JSON.stringify(this.getValidData(this.data))
        if (validDataStr !== this.validDataStr) {
          this.validDataStr = validDataStr
          if (!this.isLoadedChildren) {
            this.$nextTick(() => this.updateSelected(false, this.changeOnSelect))
          }
          this.isLoadedChildren = false
        }
      }
    }
  }
}
</script>
<style lang="less">
.tb-cascader {
  position: relative;
  width: 100%;
  display: inline-block;
  box-sizing: border-box;
  vertical-align: middle;
  color: rgba(0, 0, 0, .65);
  font-size: 14px;
  line-height: 1.5715;
  &-rel {
    display: inline-block;
    width: 100%;
    position: relative;
  }
  &-panel {
    display: flex;
  }
  .tb-input {
    padding-right: 24px;
    display: block;
    cursor: pointer;
  }
  &-disabled .tb-input {
    cursor: not-allowed;
  }

  &-label {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    line-height: 32px;
    padding: 0 15px;
    box-sizing: border-box;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    cursor: pointer;
    font-size: 14px;
  }
  &-size-medium &-label {
    line-height: 40px;
    font-size: 14px;
  }
  &-size-small &-label {
    line-height: 35px;
  }
  &-size-mini &-label {
    line-height: 30px;
  }

  .tb-cascader-arrow:nth-of-type(1) {
    display: none;
    cursor: pointer;
  }

  &:hover {
    .tb-cascader-arrow:nth-of-type(1) {
      display: inline-block;
    }
  }
  &-show-clear:hover .tb-cascader-arrow:nth-of-type(2) {
    display: none;
  }

  &-arrow {
    position: absolute;
    top: 50%;
    right: 8px;
    line-height: 1;
    transform: translateY(-50%);
    font-size: 14px;
    color: #808695;
    transition: all 0.2s ease-in-out;
  }
  &-visible &-arrow:nth-of-type(2) {
    transform: translateY(-50%) rotate(180deg);
  }

  .tb-select-dropdown {
    width: auto;
    padding: 0;
    white-space: nowrap;
    overflow: visible;
  }
  // menu-item
  .tb-cascader-menu-item {
    margin: 0;
    line-height: normal;
    padding: 7px 16px;
    clear: both;
    color: rgba(0, 0, 0, .65);
    font-size: 14px !important;
    white-space: nowrap;
    list-style: none;
    cursor: pointer;
    transition: background 0.2s ease-in-out;

    &:hover {
      background: #f3f3f3;
      color: rgba(0, 0, 0, .65);
    }

    &-focus {
      background: #f3f3f3;
          color: rgba(0, 0, 0, .65);
    }

    &-disabled {
      color: #c5c8ce;
      cursor: not-allowed;

      &:hover {
        color: #c5c8ce;
        background-color: #fff;
        cursor: not-allowed;
      }
    }

    &-selected, &-selected:hover {
      color: #1089ff;
    }
    &-divided {
      margin-top: 5px;
      border-top: 1px solid #d9d9d9;
      &:before {
        content: '';
        height: 5px;
        display: block;
        margin: 0 -16px;
        background-color: #fff;
        position: relative;
        top: -7px;
      }
    }
  }

  .tb-cascader-medium .tb-cascader-menu-item {
    padding: 7px 16px 8px;
    font-size: 14px !important;
  }

  // menu-item end
  .tb-select-item span {
    color: #ff4d4f;
  }

  &-dropdown {
    padding: 5px 0;
    .tb-select-dropdown-list {
      max-height: 190px;
      box-sizing: border-box;
      overflow: auto;
    }
  }

  &-not-found-tip {
    padding: 5px 0;
    text-align: center;
    color: #c5c8ce;
    min-width: 120px;
    li:not([class^=tb-]) {
      list-style: none;
      margin-bottom: 0;
    }
  }
  &-not-found .tb-select-dropdown {
    width: inherit;
  }

  &-menu {
    display: inline-block;
    min-width: 120px;
    height: 180px;
    margin: 0;
    padding: 5px 0 !important;
    vertical-align: top;
    list-style: none;
    border-right: 1px solid #f0f0f0;
    overflow: auto;

    &:first-child {

    }
    &:last-child {
      border-right-color: transparent;
      margin-right: -1px;
    }
    &:only-child {

    }

    & &-item {
      position: relative;
      padding-right: 36px;
      transition: all 0.2s ease-in-out;
      i {
        position: absolute;
        right: 15px;
        top: 10px;
        font-size: 14px;
      }
      &-loading {
        margin-top: -6px;
      }
      &-active {
        background-color: #1089ff;
        
        color: #ffffff;
      }
    }
  }
}


.tb-cascader-transfer {
  z-index: 1060;
  width: auto;
  padding: 0;
  white-space: nowrap;
  overflow: visible;
  // menu-item
  .tb-cascader-menu-item {
    margin: 0;
    line-height: normal;
    padding: 7px 16px;
    clear: both;
    color: rgba(0, 0, 0, .65);
    font-size: 14px !important;
    white-space: nowrap;
    list-style: none;
    cursor: pointer;
    transition: background 0.2s ease-in-out;

    &:hover {
      background: #f5f5f5;
    }

    &-focus {
      background: #f5f5f5;
    }

    &-disabled {
      color: rgba(0, 0, 0, .25);
      cursor: not-allowed;

      &:hover {
        color: rgba(0, 0, 0, .25);
        background-color: #fff;
        cursor: not-allowed;
      }
    }

    &-selected, &-selected:hover {
      color: #1089ff;
    }
    &-divided {
      margin-top: 5px;
      border-top: 1px solid #d9d9d9;
      &:before {
        content: '';
        height: 5px;
        display: block;
        margin: 0 -16px;
        background-color: #fff;
        position: relative;
        top: -7px;
      }
    }
  }

  .tb-cascader-medium .tb-cascader-menu-item {
    padding: 7px 16px 8px;
    font-size: 14px !important;
  }

  // menu-item end
  .tb-select-item span {
    color: #ff4d4f;
  }
  .tb-cascader {
    &-menu {
      &-item {
        padding-right: 24px;
        transition: all 0.2s ease-in-out;
        &-active {
          background-color: #1089ff;
          color: #ffffff;
        }
      }
    }
  }
}

.tb-form-item-error {
  .tb-cascader {
    &-arrow {
      color: #ff4d4f;
    }
  }
}
</style>