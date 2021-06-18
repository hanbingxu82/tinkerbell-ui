/*
 * @Author: your name
 * @Date: 2021-06-18 14:15:33
 * @LastEditTime: 2021-06-18 14:21:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/packages/tbMenu/mixin.js
 */
import { findComponentUpward, findComponentsUpward } from '../utils/utils'

export default {
  data() {
    return {
      menu: findComponentUpward(this, 'tbMenu')
    }
  },
  computed: {
    hasParentSubmenu() {
      return !!findComponentUpward(this, 'tbSubmenu')
    },
    parentSubmenuNum() {
      return findComponentsUpward(this, 'tbSubmenu').length
    },
    mode() {
      return this.menu.mode
    }
  }
}
