<!--
 * @Author: your name
 * @Date: 2021-06-17 14:49:19
 * @LastEditTime: 2021-06-17 16:53:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/packages/tbDatePicker/base/confirm.vue
-->
<template>
  <div :class="[prefixCls + '-confirm']" @keydown.tab.capture="handleTab">
    <tb-button type="text" :class="timeClasses"   :disabled="timeDisabled" v-if="showTime"
              @click="handleToggleTime">
      {{ this.isTime ? '选择日期' : '选择时间' }}
    </tb-button>
    <tb-button type="text"  @click="handleClear" @keydown.enter.native="handleClear">
      清空
    </tb-button>
    <tb-button type="text"  @click="handleSuccess" @keydown.enter.native="handleSuccess">
      确定
    </tb-button>
  </div>
</template>
<script>
import tbButton from '../../tbButton/main.vue'
import Emitter from '../../mixins/emitter'

const prefixCls = 'tb-picker'

export default {
  mixins: [Emitter],
  components: { tbButton },
  props: {
    showTime: Boolean,
    isTime: Boolean,
    timeDisabled: Boolean
  },
  data() {
    return {
      prefixCls: prefixCls
    }
  },
  computed: {
    timeClasses() {
      return `${prefixCls}-confirm-time`
    }
  },
  methods: {
    handleClear() {
      this.$emit('pick-clear')
    },
    handleSuccess() {
      this.$emit('pick-success')
    },
    handleToggleTime() {
      if (this.timeDisabled) return
      this.$emit('pick-toggle-time')
      this.dispatch('tbDatePicker', 'focus-input')
      this.dispatch('tbDatePicker', 'update-popper')
    },
    handleTab(e) {
      const tabbables = [...this.$el.children]
      const expectedFocus = tabbables[e.shiftKey ? 'shift' : 'pop']()

      if (document.activeElement === expectedFocus) {
        e.preventDefault()
        e.stopPropagation()
        this.dispatch('tbDatePicker', 'focus-input')
      }
    }
  }
}
</script>
