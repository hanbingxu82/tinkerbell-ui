<!--
 * @Author: your name
 * @Date: 2021-06-16 15:59:57
 * @LastEditTime: 2021-06-17 10:24:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/package/tbSelect/select-head.vue
 select head 头部对应设置
-->

<template>
<!-- 每次点击当前这个头部的时候就会触发对应的展开事件 其实同样的就会 父元素事件 -->
  <div @click="onHeaderClick" :class="headCls">
      <span :class="[prefixCls + '-prefix']" v-if="$slots.prefix || prefix">
        <slot name="prefix">
            <i :class="`iconfont ${prefix}`" v-if="prefix"></i>
        </slot>
      </span>
    <template v-for="(item, index) in selectedMultiple">
      <div class="tb-tag tb-tag-checked" v-if="maxTagCount === undefined || index < maxTagCount" :key="index">
        <span class="tb-tag-text">{{ item.label }}</span>
        <i class="iconfont icon-close-bold" @click.stop="removeTag(item)"></i>
      </div>
    </template>
    <div class="tb-tag tb-tag-checked" v-if="maxTagCount !== undefined && selectedMultiple.length > maxTagCount">
      <span class="tb-tag-text tb-select-max-tag">
          <template v-if="maxTagPlaceholder">{{ maxTagPlaceholder(selectedMultiple.length - maxTagCount) }}</template>
          <template v-else>+ {{ selectedMultiple.length - maxTagCount }}...</template>
      </span>
    </div>
    <span :class="singleDisplayClasses" v-show="singleDisplayValue">{{ singleDisplayValue }}</span>
    <label>
      <input :id="inputElementId" type="text" v-if="filterable" v-model="query" :disabled="disabled"
             :class="[prefixCls + '-input']" :placeholder="showPlaceholder ? placeholder : ''" :style="inputStyle"
             autocomplete="off" spellcheck="false"
             @keydown="resetInputState"
             @keydown.delete="handleInputDelete"
             @focus="onInputFocus"
             @blur="onInputBlur"
             ref="input">
    </label>
    <!-- icon-arrow-up-bold -->
    <i :class="['iconfont','icon-error',prefixCls + '-arrow']" v-if="resetSelect"
            @click.stop="onClear"></i>
    <i  :class="['iconfont','icon-arrow-down-bold', prefixCls + '-arrow']"
            v-if="!resetSelect && !remote"></i>
  </div>
</template>

<script>
import Emitter from '../mixins/emitter'

const prefixCls = 'tb-select'

export default {
  name:'tbSelectHead',
  mixins: [Emitter],
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    filterable: {
      type: Boolean,
      default: false
    },
    multiple: {
      type: Boolean,
      default: false
    },
    remote: {
      type: Boolean,
      default: false
    },
    initialLabel: {
      type: [String, Number, Array]
    },
    values: {
      type: Array,
      default: () => []
    },
    clearable: {
      type: [Function, Boolean],
      default: false
    },
    inputElementId: {
      type: String
    },
    placeholder: {
      type: String
    },
    queryProp: {
      type: String,
      default: ''
    },
    prefix: {
      type: String
    },
    maxTagCount: {
      type: Number
    },
    maxTagPlaceholder: {
      type: Function
    }
  },
  data() {
    return {
      prefixCls: prefixCls,
      query: '',
      inputLength: 20,
      remoteInitialLabel: this.initialLabel,
      preventRemoteCall: false
    }
  },
  computed: {
    singleDisplayClasses() {
      const { filterable, multiple, showPlaceholder } = this
      return [{
        [prefixCls + '-placeholder']: showPlaceholder && !filterable,
        [prefixCls + '-selected-value']: !showPlaceholder && !multiple && !filterable
      }]
    },
    singleDisplayValue() {
      if ((this.multiple && this.values.length > 0) || this.filterable) return ''
      return `${this.selectedSingle}` || this.placeholder
    },
    showPlaceholder() {
      let status = false
      if (!this.multiple) {
        const value = this.values[0]
        if (typeof value === 'undefined' || String(value).trim() === '') {
          status = !this.remoteInitialLabel
        }
      } else {
        if (!this.values.length > 0) {
          status = true
        }
      }
      return status
    },
    resetSelect() {
      return !this.showPlaceholder && this.clearable
    },
    inputStyle() {
      let style = {}

      if (this.multiple) {
        if (this.showPlaceholder) {
          style.width = '100%'
        } else {
          style.width = `${this.inputLength}px`
        }
      }

      return style
    },
    selectedSingle() {
      const selected = this.values[0]
      return selected ? selected.label : (this.remoteInitialLabel || '')
    },
    selectedMultiple() {
      return this.multiple ? this.values : []
    },
    // 使用 prefix 时，在 filterable
    headCls() {
      return [
        {
          [`${prefixCls}-head-flex`]: this.filterable && (this.$slots.prefix || this.prefix),
          [prefixCls + '-head-with-prefix']: this.$slots.prefix || this.prefix
        },
        { 'head-multiple-wrap': this.multiple }
      ]
    }
  },
  methods: {
    onInputFocus() {
      this.$emit('input-focus')
    },
    onInputBlur() {
      if (!this.values.length) this.query = '' // #5155
      this.$emit('input-blur')
    },
    removeTag(value) {
      if (this.disabled) return false
      this.dispatch('tbSelect', 'select-selected', value)
    },
    resetInputState() {
      this.inputLength = this.$refs.input.value.length * 12 + 20
      this.$emit('keydown')
    },
    handleInputDelete() {
      if (this.multiple && this.selectedMultiple.length && this.query === '') {
        this.removeTag(this.selectedMultiple[this.selectedMultiple.length - 1])
      }
    },
    onHeaderClick(e) {
      if (this.filterable && e.target === this.$el) {
        this.$refs.input.focus()
      }
    },
    onClear() {
      this.$emit('clear')
    }
  },
  watch: {
    values([value]) {
      if (!this.filterable) return
      this.preventRemoteCall = true
      if (this.multiple) {
        this.query = ''
        this.preventRemoteCall = false // this should be after the query change setter above
        return
      }
      // #982
      if (typeof value === 'undefined' || value === '' || value === null) {
        this.query = ''
      } else {
        this.query = value.label
      }
      this.$nextTick(() => {
        this.preventRemoteCall = false
      }) // this should be after the query change setter above
    },
    query(val) {
      if (this.preventRemoteCall) {
        this.preventRemoteCall = false
        return
      }

      this.$emit('query-change', val)
    },
    queryProp(query) {
      if (query !== this.query) this.query = query
    }
  }
}
</script>