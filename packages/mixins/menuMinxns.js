/*
 * @Author: your name
 * @Date: 2021-06-15 09:17:33
 * @LastEditTime: 2021-06-15 09:20:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/packages/mixins/menuMinxns.js
 */
import { findComponentUpward, findComponentsUpward } from '../utils/utils'

export default {
  data() {
    return {
      menu: findComponentUpward(this, 'BMenu')
    }
  },
  computed: {
    //   是否有parent  对应的submenu组件
    hasParentSubmenu() {
      return !!findComponentUpward(this, 'BSubmenu')
    },
    parentSubmenuNum() {
      return findComponentsUpward(this, 'BSubmenu').length
    },
    mode() {
      return this.menu.mode
    }
  }
}