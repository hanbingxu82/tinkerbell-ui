<!--
 * @Author: your name
 * @Date: 2021-06-18 15:50:47
 * @LastEditTime: 2021-06-18 16:22:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/packages/tbForm/form.vue
-->
<template>
  <form :class="classes" :autocomplete="autocomplete">
    <slot></slot>
  </form>
</template>
<script>
import { oneOf } from '../utils/utils'

const prefixCls = 'tb-form'

export default {
  name: 'tbForm',
  props: {
    model: {
      type: Object
    },
    rules: {
      type: Object
    },
    labelWidth: {
      type: Number
    },
    labelPosition: {
      validator(value) {
        return oneOf(value, ['left', 'right', 'top'])
      },
      default: 'right'
    },
    inline: {
      type: Boolean,
      default: false
    },
    showMessage: {
      type: Boolean,
      default: true
    },
    autocomplete: {
      validator(value) {
        return oneOf(value, ['on', 'off'])
      },
      default: 'off'
    },
    size: {
      validator(value) {
        return oneOf(value, ['medium', 'small', 'mini'])
      },
      default: 'medium'
    }
  },
  provide() {
    return { form: this }
  },
  data() {
    return {
      fields: []
    }
  },
  computed: {
    classes() {
      return [
        `${prefixCls}`,
        `${prefixCls}--${this.size}`,
        `${prefixCls}-label-${this.labelPosition}`,
        {
          [`${prefixCls}-inline`]: this.inline
        }
      ]
    }
  },
  methods: {
    resetFields() {
      this.fields.forEach(field => {
        field.resetField()
      })
    },
    validate(callback) {
      return new Promise(resolve => {
        let valid = true
        let count = 0
        this.fields.forEach(field => {
          field.validate('', errors => {
            if (errors) {
              valid = false
            }
            if (++count === this.fields.length) {
              // all finish
              resolve(valid)
              if (typeof callback === 'function') {
                callback(valid)
              }
            }
          })
        })
      })
    },
    validateField(prop, cb) {
      const field = this.fields.filter(field => field.prop === prop)[0]
      if (!field) {
        throw new Error('[tinkerbell-ui warn]: 必须使用有效的 props 字符串调用 validateField !')
      }
      field.validate('', cb)
    }
  },
  watch: {
    rules() {
      this.validate()
    }
  },
  created() {
    this.$on('form-item-add', (field) => {
      if (field) this.fields.push(field)
      return false
    })
    this.$on('form-item-remove', (field) => {
      if (field.prop) this.fields.splice(this.fields.indexOf(field), 1)
      return false
    })
  }
}
</script>
<style lang="less">
.tb-form {
  &--medium {
    .tb-form-item-label {
      height: 40px;
    }
    .tb-form-item-content {
      .tb-checkbox-group, .tb-radio-group {
        line-height: 38px;
      }
      .tb-slider-wrap {
        margin: 16px 0;
      }
    }
  }
  &--small {
    .tb-form-item-label {
      height: 35px;
    }
    .tb-form-item-content {
      .tb-checkbox-group, .tb-radio-group {
        line-height: 33px;
      }
      .tb-slider-wrap {
        margin: 12px 0;
      }
    }
  }
  &--mini {
    .tb-form-item-label {
      height: 30px;
    }

    .tb-form-item-content {
      .tb-checkbox-group, .tb-radio-group {
        line-height: 28px;
      }
      .tb-slider-wrap {
        margin: 10px 0;
      }
    }
  }
}
//item
.tb-form-item {
  display: flex;
  margin-bottom: 22px;
  vertical-align: top;
  &-label {
    display: inline-flex;
    align-items: center;
    justify-content: flex-end;
    font-size: 14px;
    color: rgba(0, 0, 0, .85);
    line-height: 1.5715;
    height: 32px;
    box-sizing: border-box;
    &::after {
      content: ':';
      position: relative;
      top: -0.5px;
      margin: 0 8px 0 2px;
    }
  }
  &-content {
    position: relative;
    line-height: 1.5715;
    font-size: 14px;
    .tb-checkbox-group, .tb-radio-group {
      line-height: 30px;
    }
    .tb-slider {
      margin: 0 4px;
    }
  }

}

.tb-form-item-required {
  .tb-form-item-label:before {
    content: "*";
    display: inline-block;
    margin-right: 4px;
    line-height: 1.5715;
    font-family: SimSun;
    font-size: 14px;
    color: #ff4d4f;
  }
}
.tb-form-item-error > .tb-form-item-content .tb-input {
  border: 1px solid #ff4d4f;
  &:focus {
    outline: 0;
    // box-shadow: 0 0 0 2px #ff4d4f;
  }
}
.tb-form-item-error > .tb-form-item-content .tb-date-picker-focused input {
  border: 1px solid #ff4d4f;
  box-shadow: none;
}

.tb-form-item-error-tip {
  position: absolute;
  top: 100%;
  left: 0;
  font-size: 12.5px;
  line-height: 1.5715;
  color: #ff4d4f;
}

.tb-form-inline .tb-form-item {
  display: inline-block;
  margin-right: 10px;
  vertical-align: top;
}
.tb-form-label-left .tb-form-item-label {
  justify-content: flex-start;
}
.tb-form-label-top {
  .tb-form-item {
    display: block;
    .tb-form-item-label {
      width: 100%;
      justify-content: flex-start;
    }
    .tb-form-item-label-empty {
      display: none;
    }
    .tb-form-item-content {
      flex: none;
      width: 100%;
    }
  }
}

.tb-form-item-error {
  .tb-date-picker .tb-input-suffix i {
    color: #ff4d4f;
  }
}
.tb-form-item-error > .tb-form-item-content .tb-ace-editor {
  border-color: #ff4d4f !important;
}
</style>