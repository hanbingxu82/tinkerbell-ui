/*
 * @Author: your name
 * @Date: 2021-06-09 16:39:36
 * @LastEditTime: 2021-06-11 13:55:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/packages/mixins/scrollbar-mixin.js
 */
// used for Modal  & Drawer
import { getScrollBarWidth } from '../utils/dom'

export default {
  methods: {
    checkScrollBar() {
      let fullWindowWidth = window.innerWidth
      if (!fullWindowWidth) { // workaround for missing window.innerWidth in IE8
        const documentElementRect = document.documentElement.getBoundingClientRect()
        fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left)
      }
      this.bodyIsOverflowing = document.body.clientWidth < fullWindowWidth
      if (this.bodyIsOverflowing) {
        this.scrollBarWidth = getScrollBarWidth()
      }
    },
    checkMaskInVisible() {
      let masks = document.getElementsByClassName('tb-modal-mask') || []
      return Array.from(masks).every(m => m.style.display === 'none' || m.classList.contains('fade-in-linear-leave-to'))
    },
    setScrollBar() {
      if (this.bodyIsOverflowing && this.scrollBarWidth !== undefined) {
        document.body.style.paddingRight = `${this.scrollBarWidth}px`
      }
    },
    resetScrollBar() {
      document.body.style.paddingRight = ''
    },
    addScrollEffect() {
      this.checkScrollBar()
      this.setScrollBar()
      document.body.style.overflow = 'hidden'
    },
    removeScrollEffect() {
      if (this.checkMaskInVisible()) {
        document.body.style.overflow = ''
        this.resetScrollBar()
      }
    }
  }
}