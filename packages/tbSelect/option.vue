<!--
 * @Author: your name
 * @Date: 2021-06-16 16:00:21
 * @LastEditTime: 2021-06-17 11:48:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/packages/tbSelect/option.vue
-->
<template>
  <li
      :class="classes"
      @click.stop="select"
      @mousedown.prevent
  >
    <slot>{{ showLabel }}</slot>
  </li>
</template>
<script>
import Emitter from '../mixins/emitter'
import { findComponentUpward } from '../utils/utils'

const prefixCls = 'tb-select-item'

export default {
  name: 'tbOption',
  componentName: 'select-item',
  mixins: [Emitter],
  props: {
    value: {
      type: [String, Number],
      required: true
    },
    label: {
      type: [String, Number]
    },
    disabled: {
      type: Boolean,
      default: false
    },
    selected: {
      type: Boolean,
      default: false
    },
    isFocused: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      searchLabel: '', // the slot value (textContent)
      autoComplete: false
    }
  },
  computed: {
    classes() {
      return [
        `${prefixCls}`,
        {
          [`${prefixCls}-disabled`]: this.disabled,
          [`${prefixCls}-selected`]: this.selected && !this.autoComplete,
          [`${prefixCls}-focus`]: this.isFocused
        }
      ]
    },
    showLabel() {
      return (this.label) ? this.label : this.value
    },
    optionLabel() {
      return this.label || (this.$el && this.$el.textContent)
    }
  },
  methods: {
    select() {
      if (this.disabled) return false
      this.dispatch('tbSelect', 'select-selected', {
        value: this.value,
        label: this.optionLabel
      })

      this.$emit('select-selected', {
        value: this.value,
        label: this.optionLabel
      })
    }
  },
  mounted() {
    const Select = findComponentUpward(this, 'tbSelect')
    if (Select) this.autoComplete = Select.autoComplete
  }
}
</script>