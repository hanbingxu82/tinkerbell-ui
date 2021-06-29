<!--
 * @Author: your name
 * @Date: 2021-05-21 13:13:23
 * @LastEditTime: 2021-06-28 15:23:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/packages/tbInputNumber/main.vue
-->
<template>
  <div class="tb-input-number">
    <div @click="decreaseNumber" @mousedown="whileMouseDown(decreaseNumber)" @mouseup="clearTimer" :class="buttonClass">-</div>
    <input type="number" v-bind:value="numericValue" @keypress="validateInput" @input="inputValue" :class="inputClass" :min="min" :max="max" debounce="500" />
    <div @click="increaseNumber" @mousedown="whileMouseDown(increaseNumber)" @mouseup="clearTimer" :class="buttonClass">+</div>
  </div>
</template>

<script>
require("../utils/utils");
import Emitter from "../mixins/emitter";
export default {
  name: "tbInputNumber",
  mixins: [Emitter],
  data: function() {
    return {
      numericValue: this.value,
      timer: null,
    };
  },
  props: {
    //   v-model绑定值
    value: {
      type: Number,
      default: 0,
    },
    // 最小传输值
    min: {
      default: 0,
      type: Number,
    },
    // 最大传输值
    max: {
      default: 100,
      type: Number,
    },
    // 步数，每次行走的步数  步数小数点最好不要超过15位小数  如果超过就会失去精度
    step: {
      default: 1,
      type: Number,
    },
    // 鼠标按下的时间间隔多长时间毫秒涨一次步数
    mouseDownSpeed: {
      default: 100,
      type: Number,
    },
    // 文本框的样式
    inputClass: {
      default: "tb-input-number__input",
      type: String,
    },
    // 两个按钮的样式class
    buttonClass: {
      default: "tb-input-number__button",
      type: String,
    },
    /**
     * @description: 是否是整数  如果为true 就不能输入小数点
     * @param {*}
     * @return {*}
     */

    integerOnly: {
      default: false,
      type: Boolean,
    },
  },
  methods: {
    /**
     * @description: 鼠标抬起后清除定时器
     * @param {*}
     * @return {*}
     */

    clearTimer() {
      if (this.timer) {
        clearInterval(this.timer);
        this.timer = null;
      }
    },
    /**
     * @description: 鼠标长按加减对应触发事件
     * @param {*} callback
     * @return {*}
     */

    whileMouseDown(callback) {
      if (this.timer === null) {
        this.timer = setInterval(() => {
          callback();
        }, this.mouseDownSpeed);
      }
    },
    /**
     * @description: 点击加号触发的事件
     * @param {*}
     * @return {*}
     */

    increaseNumber() {
      this.numericValue = Number.prototype.add(this.numericValue, this.step);
    },
    /**
     * @description: 点击减号触发的事件
     * @param {*}
     * @return {*}
     */

    decreaseNumber() {
      this.numericValue = Number.prototype.sub(this.numericValue, this.step);
    },
    isInteger(evt) {
      evt = evt ? evt : window.event;
      let key = evt.keyCode || evt.which;
      key = String.fromCharCode(key);
      const regex = /[0-9]/;
      //   键盘码转数值  判断是不是0-9
      if (!regex.test(key)) {
        evt.returnValue = false;
        // 禁止默认行为也就是禁止输入
        if (evt.preventDefault) evt.preventDefault();
      }
    },
    isNumber(evt) {
      // 获取键盘码
      evt = evt ? evt : window.event;
      var charCode = evt.which ? evt.which : evt.keyCode;
      // 判断
      if (charCode > 31 && (charCode < 48 || charCode > 57) && charCode !== 46) {
        // 禁止默认行为也就是禁止输入
        evt.preventDefault();
      } else {
        return true;
      }
    },
    /**
     * @description: 鼠标按下事件
     * @param {*} evt
     * @return {*}
     */

    validateInput(evt) {
      if (this.integerOnly === true) {
        this.isInteger(evt);
      } else {
        this.isNumber(evt);
      }
    },
    inputValue(evt) {
      this.numericValue = evt.target.value ? Number.prototype.add(evt.target.value, 0) : this.min;
    },
  },
  watch: {
    value: function(val, oldVal) {
      this.numericValue = val;
    },
    numericValue: function(val, oldVal) {
      // 小于或等于最小值,就变更为最小值
      if (val == "") return;
      if (val <= this.min) {
        this.numericValue = Number.prototype.add(this.min, 0);
      }
      if (val >= this.max) {
        this.numericValue = Number.prototype.add(this.max, 0);
      }
      if (val <= this.max && val >= this.min) {
        this.$emit("input", val, oldVal);
        this.dispatch("tbFormItem", "form-change", val);
      }
    },
  },
};
</script>

<style lang="less">
.tb-input-number {
  overflow: hidden;
  &__input {
    -webkit-appearance: none;
    border: 1px solid #d9d9d9;
    float: left;
    font-size: 16px;
    height: 40px;
    margin: 0;
    outline: none;
    text-align: center;
    width: calc(100% - 80px);
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
  }
  &__button {
    text-align: center;
    -webkit-appearance: none;
    transition: background 0.5s ease;
    background: #dcdfe6;
    border: 0;
    color: #606266;
    cursor: pointer;
    float: left;
    font-size: 20px;
    height: 40px;
    line-height: 40px;
    margin: 0;
    width: 40px;
  }
}
</style>
