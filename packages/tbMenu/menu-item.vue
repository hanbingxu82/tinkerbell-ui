<!--
 * @Author: your name
 * @Date: 2021-06-18 14:15:14
 * @LastEditTime: 2021-06-18 15:16:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/packages/tbMenu/menu-item.vue
-->
<template>
  <a v-if="to"
     :href="linkUrl"
     :target="target"
     :class="classes"
     @click.exact="handleClickItem($event, false)"
     @click.ctrl="handleClickItem($event, true)"
     @click.meta="handleClickItem($event, true)"
     :style="itemStyle">
    <slot></slot>
  </a>
  <li v-else :class="classes" @click.stop="handleClickItem" :style="itemStyle">
    <slot></slot>
  </li>
</template>
<script>
import Emitter from '../mixins/emitter'
import { findComponentUpward } from '../utils/utils'
import mixin from './mixin'
import mixinsLink from '../mixins/link'

const prefixCls = 'tb-menu'

export default {
  name: 'tbMenuItem',
  mixins: [Emitter, mixin, mixinsLink],
  props: {
    name: {
      type: [String, Number],
      required: true
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      active: false
    }
  },
  computed: {
    classes() {
      return [
        `${prefixCls}-item`,
        {
          [`${prefixCls}-item-active`]: this.active,
          [`${prefixCls}-item-selected`]: this.active,
          [`${prefixCls}-item-disabled`]: this.disabled
        }
      ]
    },
    itemStyle() {
      return this.hasParentSubmenu && this.mode !== 'horizontal' ? {
        paddingLeft: 43 + (this.parentSubmenuNum - 1) * 24 + 'px'
      } : {}
    }
  },
  methods: {
    handleClickItem(event, newWindow = false) {
      if (this.disabled) return

      if (newWindow || this.target === '_blank') {
        // 如果是 new_window，直接新开窗口就行，无需发送状态
        this.handleCheckClick(event, newWindow)
        let parentMenu = findComponentUpward(this, 'tbMenu')
        if (parentMenu) {
          parentMenu.handleEmitSelectEvent(this.name)
        }
      } else {
        let parent = findComponentUpward(this, 'tbSubmenu')

        if (parent) {
          this.dispatch('tbSubmenu', 'menu-item-select', this.name)
        } else {
          this.dispatch('tbMenu', 'menu-item-select', this.name)
        }

        this.handleCheckClick(event, newWindow)
      }
    }
  },
  mounted() {
    this.$on('update-active-name', (name) => {
      if (this.name === name) {
        this.active = true
        this.dispatch('tbSubmenu', 'update-active-name', name)
      } else {
        this.active = false
      }
    })
  }
}
</script>
