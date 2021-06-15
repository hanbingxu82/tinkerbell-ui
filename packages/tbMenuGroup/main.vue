<!--
 * @Author: your name
 * @Date: 2021-06-15 09:13:32
 * @LastEditTime: 2021-06-15 10:20:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/packages/tbMenuGroup/main.vue
-->
<template>
  <li :class="[prefixCls + '-item-group']">
    <div :class="[prefixCls + '-item-group-title']" :style="groupStyle">{{ title }}</div>
    <ul>
      <slot></slot>
    </ul>
  </li>
</template>
<script>
import mixin from "../mixins/menuMinxns";

const prefixCls = 'bin-menu'

export default {
  name: 'BMenuGroup',
  mixins: [mixin],
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      prefixCls: prefixCls
    }
  },
  computed: {
    groupStyle() {
      return this.hasParentSubmenu && this.mode !== 'horizontal' ? {
        paddingLeft: 43 + (this.parentSubmenuNum - 1) * 28 + 'px'
      } : {}
    }
  }
}
</script>