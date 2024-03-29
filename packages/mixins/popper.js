/*
 * @Author: your name
 * @Date: 2021-06-02 16:09:47
 * @LastEditTime: 2021-06-03 13:14:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/packages/mixins/popper.js
 */
/**
 * https://github.com/freeze-component/vue-popper
 * */
import Vue from 'vue'

const isServer = Vue.prototype.$isServer
const Popper = isServer ? function () {} : require('popper.js/dist/umd/popper.js')  // eslint-disable-line

export default {
  props: {
    placement: {
      type: String,
      default: 'bottom'
    },
    boundariesPadding: {
      type: Number,
      default: 5
    },
    reference: Object,
    popper: Object,
    offset: {
      default: 0
    },
    value: {
      type: Boolean,
      default: false
    },
    transition: String,
    options: {
      type: Object,
      default() {
        return {
          modifiers: {
            computeStyle: {
              gpuAcceleration: false
            },
            preventOverflow: {
              boundariesElement: 'window'
            }
          }
        }
      }
    }
  },
  data() {
    return {
      visible: this.value
    }
  },
  watch: {
    value: {
      immediate: true,
      handler(val) {
        this.visible = val
        this.$emit('input', val)
      }
    },
    visible(val) {
      if (val) {
        if (this.handleIndexIncrease) this.handleIndexIncrease() // just use for PopTip
        this.updatePopper()
        this.$emit('popper-show')
      } else {
        this.$emit('popper-hide')
      }
      this.$emit('input', val)
    }
  },
  methods: {
    createPopper() {
      if (!/^(top|bottom|left|right)(-start|-end)?$/g.test(this.placement)) {
        return
      }
      const options = this.options
      const popper = this.popper || this.$refs.popper
      const reference = this.reference || this.$refs.reference

      if (!popper || !reference) return

      if (this.popperJS && this.popperJS.hasOwnProperty('destroy')) {
        this.popperJS.destroy()
      }

      options.placement = this.placement

      if (!options.modifiers.offset) {
        options.modifiers.offset = {}
      }
      options.modifiers.offset.offset = this.offset
      options.onCreate = () => {
        this.$nextTick(this.updatePopper)
        this.$emit('created', this)
      }
      this.popperJS = new Popper(reference, popper, options)
    },
    // 每次触发回调事件的时候就会执行下方操作
    updatePopper() {
      this.popperJS ? this.popperJS.update() : this.createPopper()
    },
    doDestroy() {
      if (this.visible) return
      this.popperJS.destroy()
      this.popperJS = null
    }
  },
  updated() {
    this.$nextTick(() => this.updatePopper())
  },
  beforeDestroy() {
    if (this.popperJS) {
      this.popperJS.destroy()
    }
  }
}