<!--
 * @Author: your name
 * @Date: 2021-05-27 16:32:55
 * @LastEditTime: 2021-06-22 15:08:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/packages/tbPagination/options.vue
-->
<template>
  <div v-if="showSizer || showElevator" :class="optsClasses">
    <div v-if="showSizer" :class="sizerClasses">
      <tb-select v-model="currentPageSize" :size="size" :placement="placement" :transfer="transfer"
                @change="changeSize">
        <tb-option v-for="item in pageSizeOpts" :key="item" :value="item" style="text-align:center;">
          {{ item }} 条/页
        </tb-option>
      </tb-select>
    </div>
    <div v-if="showElevator" :class="ElevatorClasses">
      跳至
      <label>
        <input
            type="text"
            :value="currentTo"
            autocomplete="off"
            spellcheck="false"
            @keyup.enter="changePage"
        >
      </label>
      页
    </div>
  </div>
</template>
<script>
const prefixCls = 'tb-page'

function isValueNumber(value) {
  return (/^[1-9][0-9]*$/).test(value + '')
}

export default {
  name: 'PageOption',
  props: {
    pageSizeOpts: Array,
    showSizer: Boolean,
    showElevator: Boolean,
    current: Number,
    currentTo: Number,
    pageSize: Number,
    allPages: Number,
    isSmall: Boolean,
    placement: String,
    transfer: Boolean
  },
  data() {
    return {
      currentPageSize: this.pageSize
    }
  },
  watch: {
    pageSize(val) {
      this.currentPageSize = val
    }
  },
  computed: {
    size() {
      return this.isSmall ? 'mini' : 'small'
    },
    optsClasses() {
      return [
        `${prefixCls}-options`
      ]
    },
    sizerClasses() {
      return [
        `${prefixCls}-options-sizer`
      ]
    },
    ElevatorClasses() {
      return [
        `${prefixCls}-options-elevator`
      ]
    }
  },
  methods: {
    changeSize() {
      this.$emit('size', this.currentPageSize)
    },
    changePage(event) {
      let val = event.target.value.trim()
      let page = 0

      if (isValueNumber(val)) {
        val = Number(val)
        if (val !== this.current) {
          const allPages = this.allPages

          if (val > allPages) {
            page = allPages
          } else {
            page = val
          }
        }
      } else {
        page = 1
      }

      if (page) {
        this.$emit('page', page)
        event.target.value = page
      }
    }
  }
}
</script>
