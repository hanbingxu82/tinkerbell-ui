<!--
 * @Author: your name
 * @Date: 2021-06-15 09:13:26
 * @LastEditTime: 2021-06-15 09:47:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/packages/tbMenu/main.vue
-->
<template>
  <ul :class="classes" :style="styles">
    <slot></slot>
  </ul>
</template>
<script>
import { oneOf, findComponentsDownward, findComponentsUpward } from '../utils/utils'
import Emitter from '../mixins/emitter'

const prefixCls = 'bin-menu'

export default {
  name: 'BMenu',
  mixins: [Emitter],
  provide() {
    return {
      rootMenu: this
    }
  },
  props: {
    // 判断是横向还是竖向  水平/垂直  
    mode: {
      validator(value) {
        return oneOf(value, ['horizontal', 'vertical'])
      },
      default: 'vertical'
    },
    // 判断主题类型
    theme: {
      validator(value) {
        return oneOf(value, ['light', 'dark'])
      },
      default: 'light'
    },
    // 激活菜单的 name 值
    activeName: {
      type: [String, Number]
    },
    // 展开的 Submenu 的 name 集合
    openNames: {
      type: Array,
      default() {
        return []
      }
    },
    // 展开所有的 Submenu 
    expandAll: {
      type: Boolean
    },
    // 是否开启手风琴模式
    accordion: {
      type: Boolean,
      default: false
    },
    // 导航菜单的宽度，只在 mode="vertical" 时有效  默认是240px
    width: {
      type: String,
      default: '240px'
    }
  },
  data() {
    return {
      currentActiveName: this.activeName,
      openedNames: []
    }
  },
  computed: {
    classes() {
      let theme = this.theme
      return [
        `${prefixCls}`,
        `${prefixCls}-${theme}`,
        {
          [`${prefixCls}-${this.mode}`]: this.mode
        }
      ]
    },
    styles() {
      let style = {}
      if (this.mode === 'vertical') style.width = this.width
      return style
    }
  },
  methods: {
    updateActiveName() {
      if (this.currentActiveName === undefined) {
        this.currentActiveName = -1
      }
      this.broadcast('BSubmenu', 'update-active-name', false)
      this.broadcast('BMenuItem', 'update-active-name', this.currentActiveName)
    },
    updateOpenKeys(name) {
      let names = [...this.openedNames]
      const index = names.indexOf(name)
      if (this.accordion) {
        findComponentsDownward(this, 'BSubmenu').forEach(item => {
          item.opened = false
        })
      }
      if (index >= 0) {
        let currentSubmenu = null
        findComponentsDownward(this, 'BSubmenu').forEach(item => {
          if (item.name === name) {
            currentSubmenu = item
            item.opened = false
          }
        })
        findComponentsUpward(currentSubmenu, 'BSubmenu').forEach(item => {
          item.opened = true
        })
        findComponentsDownward(currentSubmenu, 'BSubmenu').forEach(item => {
          item.opened = false
        })
      } else {
        if (this.accordion) {
          let currentSubmenu = null
          findComponentsDownward(this, 'BSubmenu').forEach(item => {
            if (item.name === name) {
              currentSubmenu = item
              item.opened = true
            }
          })
          findComponentsUpward(currentSubmenu, 'BSubmenu').forEach(item => {
            item.opened = true
          })
        } else {
          findComponentsDownward(this, 'BSubmenu').forEach(item => {
            if (item.name === name) item.opened = true
          })
        }
      }
      let openedNames = findComponentsDownward(this, 'BSubmenu').filter(item => item.opened).map(item => item.name)
      this.openedNames = [...openedNames]
      this.$emit('open-change', openedNames)
    },
    updateOpened() {
      const items = findComponentsDownward(this, 'BSubmenu')
      // 判断是否展开所有submenu，如展开则全部
      if (items.length) {
        items.forEach(item => {
          item.opened = this.expandAll ? true : this.openedNames.indexOf(item.name) > -1
        })
      }
      // 更新openedNames
      let openedNames = items.filter(item => item.opened).map(item => item.name)
      this.openedNames = [...openedNames]
    },
    handleEmitSelectEvent(name) {
      this.$emit('select', name)
    }
  },
  mounted() {
    this.openedNames = [...this.openNames]
    this.updateOpened()
    this.$nextTick(() => this.updateActiveName())
    this.$on('menu-item-select', (name) => {
      this.currentActiveName = name
      this.$emit('select', name)
    })
  },
  watch: {
    openNames(names) {
      this.openedNames = names
    },
    activeName(val) {
      this.currentActiveName = val
    },
    currentActiveName() {
      this.updateActiveName()
    }
  }
}
</script>