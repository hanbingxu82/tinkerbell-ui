<!--
 * @Author: your name
 * @Date: 2021-05-21 14:44:05
 * @LastEditTime: 2021-06-29 13:00:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/packages/tbSwitch/main.vue
-->
<template>
  <span class="tb-switch" :style="bgStyle" tabindex="0" @click="!disabled ? $emit('input', !value) : null" @keyup.enter.prevent="!disabled ? $emit('input', !value) : null" @keyup.space.prevent="!disabled ? $emit('input', !value) : null">
    <input type="checkbox" :name="name" style="display:none;" v-model="value" />
    <span :style="dotStyle" class="dot">
      <span v-show="checkedText && value" :style="textStyle" class="text">
        {{ checkedText }}
      </span>
      <span v-show="uncheckedText && !value" :style="textStyle" class="text">
        {{ uncheckedText }}
      </span>
    </span>
  </span>
</template>

<script>
export default {
  name: "tbSwitch",
  props: {
    // 按钮状态
    value: {
      type: Boolean,
      default: false,
    },
    // 表单name
    name: {
      type: String,
      default: "switch",
    },
    // 禁用
    disabled: {
      type: Boolean,
      default: false,
    },
    // 翻转效果由从左到右  变为从右到左
    reverse: {
      type: Boolean,
      default: false,
    },
    // 整体宽度
    width: {
      type: [Number, String],
      default: 75,
    },
    // 整体高度
    height: {
      type: [Number, String],
      default: 25,
    },
    // 选中时对应的文本
    checkedText: {
      type: String,
      default: null,
    },
    // 未选中时对应的文本
    uncheckedText: {
      type: String,
      default: null,
    },
    // 选中后的背景色
    checkedBg: {
      type: String,
      default: "#1089ff",
    },
    // 未选中的背景色
    uncheckedBg: {
      type: String,
      default: "#939393",
    },
    // 选中后的文字颜色
    checkedColor: {
      type: String,
      default: "#fff",
    },
    // 未选中的文字颜色
    uncheckedColor: {
      type: String,
      default: "#fff",
    },
    // 小圆点的颜色
    dotColor: {
      type: String,
      default: "#fff",
    },
    // 文字大小
    fontSize: {
      type: [Number, String],
      default: "12",
    },
    // 字体粗细
    fontWeight: {
      type: [Number, String],
      default: "normal",
    },
  },
  watch: {
    // 监听value变化  触发change事件
    value: function(newVal, oldVal) {
      this.$emit("change", newVal);
    },
  },
  computed: {
    // 元素大小样式
    bgStyle() {
      const styles = {
        // 配置对应的宽高
        width: `${this.width}px`,
        height: `${this.height}px`,
        // 判断是不是禁用如果是禁用的话即使是选中状态也要设置成 不选中的背景
        background: this.value && !this.disabled ? this.checkedBg : (this.disabled?'#93939393':this.uncheckedBg),
      };
      return styles;
    },
    // 小圆点样式设置
    dotStyle() {
      const styles = {
        // 小圆点元素背景颜色
        background: this.dotColor,
        // 宽高 依据高度来走 来一些边距
        width: `${this.height - 8}px`,
        height: `${this.height - 8}px`,
        "min-width": `${this.height - 8}px`,
        "min-height": `${this.height - 8}px`,
        // 根据状态判断
        "margin-left": this.value ? `${this.width - (this.height - 3)}px` : "5px",
      };
      // 如果要是反转  要对应的进行反转样式
      if ((!this.value && this.reverse) || (this.value && !this.reverse)) {
        styles.marginLeft = `${this.width - (this.height - 3)}px`;
      } else if ((this.value && this.reverse) || (!this.value && !this.reverse)) {
        styles.marginLeft = "5px";
      }
      return styles;
    },
    // 文本样式设置
    textStyle() {
      // 文字大小 与 加粗
      const styles = {
        "font-weight": this.fontWeight,
        "font-size": `${this.fontSize}px`,
        color: this.value && !this.disabled ? this.checkedColor : this.uncheckedColor,
        // 文本位置
        right: this.value ? `${this.height - 3}px` : "auto",
        left: this.value ? "auto" : `${this.height - 3}px`,
      };
      // 反转后对应文本位置
      if (!this.value && this.reverse) {
        styles.right = `${this.height - 3}px`;
        styles.left = "auto";
      } else if (this.value && this.reverse) {
        styles.left = `${this.height - 3}px`;
        styles.right = "auto";
      }
      return styles;
    },
  },
};
</script>

<style>
.tb-switch {
  cursor: pointer;
  display: flex;
  align-items: center;
  border-radius: 9999px;
  overflow: hidden;
  transition: background-color ease 0.2s, width ease 0.2s, height ease 0.2s;
}
.tb-switch .dot {
  position: relative;
  display: flex;
  align-items: center;
  border-radius: 9999px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  transition: margin ease 0.2s;
}
.tb-switch .text {
  position: absolute;
  font-family: inherit;
  user-select: none;
  white-space: nowrap;
}
@media all and (-ms-high-contrast: none) {
  .tb-switch .text {
    top: 50%;
    transform: translateY(-50%);
  }
}
@media (prefers-reduced-motion) {
  .tb-switch,
  .tb-switch *,
  .tb-switch *::before,
  .tb-switch *::after {
    animation: none !important;
    transition: none !important;
    transition-duration: none !important;
  }
}
</style>
