<!--
 * @Author: your name
 * @Date: 2021-06-18 15:50:55
 * @LastEditTime: 2021-06-18 16:04:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/packages/tbForm/form-item.vue
-->
<template>
  <div :class="classes">
    <label :class="[prefixCls + '-label']" :for="labelFor" :style="labelStyles" v-if="label || $slots.label">
      <slot name="label">{{ label }}</slot>
    </label>
    <label :class="[prefixCls + '-label-empty']" v-else :style="labelStyles"/>
    <div :class="[prefixCls + '-content']" :style="contentStyles">
      <slot></slot>
      <transition name="zoom-in-top">
        <div :class="[prefixCls + '-error-tip']" v-if="validateState === 'error' && showMessage && form.showMessage">{{
            validateMessage
          }}
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
import AsyncValidator from 'async-validator'
import Emitter from '../mixins/emitter'

const prefixCls = 'tb-form-item'

function getPropByPath(obj, path) {
  let tempObj = obj
  path = path.replace(/\[(\w+)\]/g, '.$1')
  path = path.replace(/^\./, '')

  let keyArr = path.split('.')
  let i = 0

  for (let len = keyArr.length; i < len - 1; ++i) {
    let key = keyArr[i]
    if (key in tempObj) {
      tempObj = tempObj[key]
    } else {
      throw new Error('[tinkerbell-ui warn]: please transfer a valid prop path to form item!')
    }
  }
  return {
    o: tempObj,
    k: keyArr[i],
    v: tempObj[keyArr[i]]
  }
}

export default {
  name: 'tbFormItem',
  mixins: [Emitter],
  props: {
    label: {
      type: String,
      default: ''
    },
    labelWidth: {
      type: Number
    },
    prop: {
      type: String
    },
    required: {
      type: Boolean,
      default: false
    },
    rules: {
      type: [Object, Array]
    },
    error: {
      type: String
    },
    validateStatus: {
      type: Boolean
    },
    showMessage: {
      type: Boolean,
      default: true
    },
    labelFor: {
      type: String
    }
  },
  data() {
    return {
      prefixCls: prefixCls,
      isRequired: false,
      validateState: '',
      validateMessage: '',
      validator: {}
    }
  },
  watch: {
    error: {
      handler(val) {
        this.validateMessage = val
        this.validateState = val ? 'error' : ''
      },
      immediate: true
    },
    validateStatus(val) {
      this.validateState = val
    },
    rules() {
      this.setRules()
    }
  },
  inject: ['form'],
  computed: {
    classes() {
      return [
        `${prefixCls}`,
        {
          [`${prefixCls}-required`]: this.required || this.isRequired,
          [`${prefixCls}-error`]: this.validateState === 'error',
          [`${prefixCls}-validating`]: this.validateState === 'validating'
        }
      ]
    },
    fieldValue() {
      const model = this.form.model
      if (!model || !this.prop) {
        return
      }

      let path = this.prop
      if (path.indexOf(':') !== -1) {
        path = path.replace(/:/, '.')
      }

      return getPropByPath(model, path).v
    },
    labelStyles() {
      let style = {}
      if (this.form.labelPosition === 'top') {
        return style
      }
      const labelWidth = this.labelWidth === 0 || this.labelWidth ? this.labelWidth : this.form.labelWidth

      if (labelWidth || labelWidth === 0) {
        style.width = `${labelWidth}px`
      }
      return style
    },
    contentStyles() {
      return {
        width: (this.form.labelPosition === 'top' || this.labelStyles.width === '0px')
            ? null : `calc(100% - ${this.labelStyles.width})`
      }
    }
  },
  methods: {
    setRules() {
      let rules = this.getRules()
      if (rules.length && this.required) {
        return
      } else if (rules.length) {
        rules.every((rule) => {
          this.isRequired = rule.required
        })
      } else if (this.required) {
        this.isRequired = this.required
      }
      this.$off('form-blur', this.onFieldBlur)
      this.$off('form-change', this.onFieldChange)
      this.$on('form-blur', this.onFieldBlur)
      this.$on('form-change', this.onFieldChange)
    },
    getRules() {
      let formRules = this.form.rules
      const selfRules = this.rules

      formRules = formRules ? formRules[this.prop] : []

      return [].concat(selfRules || formRules || [])
    },
    getFilteredRule(trigger) {
      const rules = this.getRules()

      return rules.filter(rule => !rule.trigger || rule.trigger.indexOf(trigger) !== -1)
    },
    validate(trigger, callback = function () {
    }) {
      let rules = this.getFilteredRule(trigger)
      if (!rules || rules.length === 0) {
        if (!this.required) {
          callback()
          return true
        } else {
          rules = [{ required: true }]
        }
      }

      this.validateState = 'validating'

      let descriptor = {}
      descriptor[this.prop] = rules

      const validator = new AsyncValidator(descriptor)
      let model = {}

      model[this.prop] = this.fieldValue

      validator.validate(model, { firstFields: true }, errors => {
        this.validateState = !errors ? 'success' : 'error'
        this.validateMessage = errors ? errors[0].message : ''

        callback(this.validateMessage)
      })
    },
    resetField() {
      this.validateState = ''
      this.validateMessage = ''

      let model = this.form.model
      let value = this.fieldValue
      let path = this.prop
      if (path.indexOf(':') !== -1) {
        path = path.replace(/:/, '.')
      }

      let prop = getPropByPath(model, path)

      if (Array.isArray(value)) {
        prop.o[prop.k] = [].concat(this.initialValue)
      } else {
        prop.o[prop.k] = this.initialValue
      }
    },
    onFieldBlur() {
      this.validate('blur')
    },
    onFieldChange() {
      this.validate('change')
    }
  },
  mounted() {
    if (this.prop) {
      this.dispatch('tbForm', 'form-item-add', this)

      Object.defineProperty(this, 'initialValue', {
        value: this.fieldValue
      })

      this.setRules()
    }
  },
  beforeDestroy() {
    this.dispatch('tbForm', 'form-item-remove', this)
  }
}
</script>