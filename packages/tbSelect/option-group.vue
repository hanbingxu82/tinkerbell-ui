<!--
 * @Author: your name
 * @Date: 2021-06-16 16:00:33
 * @LastEditTime: 2021-06-17 09:36:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/packages/tbSelect/option-group.vue
-->
<template>
  <li :class="[prefixCls + '-wrap']" v-show="!hidden">
    <div :class="[prefixCls + '-title']">{{ label }}</div>
    <ul>
      <li :class="[prefixCls]" ref="options">
        <slot></slot>
      </li>
    </ul>
  </li>
</template>
<script>
const prefixCls = 'tb-select-group'

export default {
  name: 'tbOptionGroup',
  props: {
    label: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      prefixCls: prefixCls,
      hidden: false // for search
    }
  },
  methods: {
    queryChange() {
      this.$nextTick(() => {
        const options = this.$refs.options.querySelectorAll('.tb-select-item')
        let hasVisibleOption = false
        for (let i = 0; i < options.length; i++) {
          if (options[i].style.display !== 'none') {
            hasVisibleOption = true
            break
          }
        }
        this.hidden = !hasVisibleOption
      })
    }
  },
  mounted() {
    // 绑定query-change事件
    this.$on('query-change', () => {
      this.queryChange()
      return true
    })
  }
}
</script>