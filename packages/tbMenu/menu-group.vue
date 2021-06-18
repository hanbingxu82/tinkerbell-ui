<!--
 * @Author: your name
 * @Date: 2021-06-18 14:15:39
 * @LastEditTime: 2021-06-18 15:03:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/packages/tbMenu/menu-group.vue
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
import mixin from './mixin'

const prefixCls = 'tb-menu'

export default {
  name: 'tbMenuGroup',
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
