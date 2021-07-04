<!--
 * @Author: your name
 * @Date: 2021-06-02 16:01:34
 * @LastEditTime: 2021-07-03 14:51:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/packages/tbPopover/main.vue
-->
<template>
  <div :class="classes" @mouseenter="handleMouseenter" @mouseleave="handleMouseleave" v-click-outside="handleClose">
    <div :class="[prefixCls + '-rel']" ref="reference" @click="handleClick" @mousedown="handleFocus(false)" @mouseup="handleBlur(false)">
      <slot></slot>
    </div>
    <transition name="fade-in-linear">
      <div :class="popperClasses" :style="styles" ref="popper" v-show="visible" @click="handleTransferClick" @mouseenter="handleMouseenter" @mouseleave="handleMouseleave" :data-transfer="appendToBody" v-transfer-dom>
        <div :class="[prefixCls + '-content']">
          <div :class="[prefixCls + '-arrow']"></div>
          <div :class="[prefixCls + '-inner']" v-if="confirm">
            <div :class="[prefixCls + '-body']">
              <div :class="[prefixCls + '-body-message']">
                <i :class="`iconfont ${iconName}`" :style="iconStyles"></i>
                <slot name="title"
                  ><span class="message-title">{{ title }}</span></slot
                >
              </div>
              <div :class="[prefixCls + '-body-buttons']">
                <tb-button size="mini" @click="cancel">{{ cancelText }}</tb-button>
                <tb-button type="primary" size="mini" @click="ok">{{ okText }}</tb-button>
              </div>
            </div>
          </div>
          <div :class="[prefixCls + '-inner']" v-if="!confirm">
            <div :class="[prefixCls + '-title']" :style="contentPaddingStyle" v-if="showTitle" ref="title">
              <slot name="title">
                <div :class="[prefixCls + '-title-inner']">{{ title }}</div>
              </slot>
            </div>
            <div :class="[prefixCls + '-body']" :style="contentPaddingStyle">
              <div :class="contentClasses">
                <slot name="content">
                  <div :class="[prefixCls + '-body-content-inner']">{{ content }}</div>
                </slot>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
let transferIndex = 0
import Popper from "../mixins/popper";
import clickOutside from "../directive/clickoutside";
import TransferDom from "../directive/transferDom";
import { oneOf } from "../utils/utils";

const prefixCls = "tb-popover";

export default {
  name: "tbPopover",
  mixins: [Popper],
  directives: { clickOutside, TransferDom },
  props: {
    trigger: {
      validator(value) {
        return oneOf(value, ["click", "focus", "hover"]);
      },
      default: "click",
    },
    placement: {
      validator(value) {
        return oneOf(value, ["top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "left", "left-start", "left-end", "right", "right-start", "right-end"]);
      },
      default: "top",
    },
    title: {
      type: [String, Number],
    },
    content: {
      type: [String, Number],
      default: "",
    },
    width: {
      type: [String, Number],
    },
    confirm: {
      type: Boolean,
      default: false,
    },
    okText: {
      type: String,
      default: "确定",
    },
    cancelText: {
      type: String,
      default: "取消",
    },
    appendToBody: {
      type: Boolean,
    },
    popperClass: {
      type: String,
    },
    wordWrap: {
      type: Boolean,
      default: false,
    },
    padding: {
      type: String,
    },
    iconName: {
      type: String,
      default: "icon-help-filling",
    },
    iconStyles: {
      type: Object,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      prefixCls: prefixCls,
      showTitle: true,
      isInput: false,
      disableCloseUnderTransfer: false, // transfer 模式下，点击 slot 也会触发关闭
      tIndex: this.handleGetIndex(),
    };
  },
  computed: {
    classes() {
      return [
        `${prefixCls}`,
        {
          [`${prefixCls}-confirm`]: this.confirm,
        },
      ];
    },
    popperClasses() {
      return [
        `${prefixCls}-popper`,
        {
          [`${prefixCls}-confirm`]: this.appendToBody && this.confirm,
          [`${this.popperClass}`]: !!this.popperClass,
        },
      ];
    },
    styles() {
      let style = {};
      if (this.width) {
        style.width = `${this.width}px`;
      }
      if (this.appendToBody) style["z-index"] = 2060 + this.tIndex;
      return style;
    },
    contentClasses() {
      return [
        `${prefixCls}-body-content`,
        {
          [`${prefixCls}-body-content-word-wrap`]: this.wordWrap,
        },
      ];
    },
    contentPaddingStyle() {
      const styles = {};
      if (this.padding !== "") styles["padding"] = this.padding;
      return styles;
    },
  },
  methods: {
    handleClick() {
      if (this.disabled) return;

      if (this.confirm) {
        this.visible = !this.visible;
        return true;
      }
      if (this.trigger !== "click") {
        return false;
      }
      this.visible = !this.visible;
    },
    handleTransferClick() {
      if (this.appendToBody) this.disableCloseUnderTransfer = true;
    },
    handleClose() {
      if (this.disableCloseUnderTransfer) {
        this.disableCloseUnderTransfer = false;
        return false;
      }
      if (this.confirm) {
        this.visible = false;
        return true;
      }
      if (this.trigger !== "click") {
        return false;
      }
      this.visible = false;
    },
    handleFocus(fromInput = true) {
      if (this.disabled) return;

      if (this.trigger !== "focus" || this.confirm || (this.isInput && !fromInput)) {
        return false;
      }
      this.visible = true;
    },
    handleBlur(fromInput = true) {
      if (this.trigger !== "focus" || this.confirm || (this.isInput && !fromInput)) {
        return false;
      }
      this.visible = false;
    },
    handleMouseenter() {
      if (this.disabled) return;

      if (this.trigger !== "hover" || this.confirm) {
        return false;
      }
      if (this.enterTimer) clearTimeout(this.enterTimer);
      this.enterTimer = setTimeout(() => {
        this.visible = true;
      }, 100);
    },
    handleMouseleave() {
      if (this.trigger !== "hover" || this.confirm) {
        return false;
      }
      if (this.enterTimer) {
        clearTimeout(this.enterTimer);
        this.enterTimer = setTimeout(() => {
          this.visible = false;
        }, 100);
      }
    },
    cancel() {
      this.visible = false;
      this.$emit("cancel");
    },
    ok() {
      this.visible = false;
      this.$emit("ok");
    },
    getInputChildren() {
      const $input = this.$refs.reference.querySelectorAll("input");
      const $textarea = this.$refs.reference.querySelectorAll("textarea");
      let $children = null;

      if ($input.length) {
        $children = $input[0];
      } else if ($textarea.length) {
        $children = $textarea[0];
      }

      return $children;
    },
    handleGetIndex() {

      transferIndex++
      return transferIndex;
    },
    handleIndexIncrease() {
      this.tIndex = this.handleGetIndex();
    },
  },
  mounted() {
    if (!this.confirm) {
      this.showTitle = this.$slots.title !== undefined || this.title;
    }
    if (this.trigger === "focus") {
      this.$nextTick(() => {
        const $children = this.getInputChildren();
        if ($children) {
          this.isInput = true;
          $children.addEventListener("focus", this.handleFocus, false);
          $children.addEventListener("blur", this.handleBlur, false);
        }
      });
    }
  },
  beforeDestroy() {
    const $children = this.getInputChildren();
    if ($children) {
      $children.removeEventListener("focus", this.handleFocus, false);
      $children.removeEventListener("blur", this.handleBlur, false);
    }
  },
};
</script>
<style lang="less">
@arrow-width : 5px;
@arrow-distance : @arrow-width - 1 + 4;
.tb-popover {
  display: inline-block;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, .65);
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5715;
  list-style: none;
  -webkit-font-feature-settings: 'tnum';
  font-feature-settings: 'tnum';
  z-index: 1030;
  font-weight: normal;
  white-space: normal;
  text-align: left;
  cursor: auto;
  user-select: text;
  &-rel {
    display: inline-block;
    position: relative;
  }
  &-popper {
    min-width: 150px;
    font-size: 14px;
    &[x-placement^="top"] {
      padding: @arrow-width 0 @arrow-distance 0;
    }
    &[x-placement^="right"] {
      padding: 0 @arrow-width 0 @arrow-distance;
    }
    &[x-placement^="bottom"] {
      padding: @arrow-distance 0 @arrow-width 0;
    }
    &[x-placement^="left"] {
      padding: 0 @arrow-distance 0 @arrow-width;
    }

    &[x-placement^="top"] .tb-popover-arrow {
      bottom: 5px;
      border-top-color: transparent;
      border-right-color: #fff;
      border-bottom-color: #fff;
      border-left-color: transparent;
      -webkit-box-shadow: 3px 3px 7px rgba(0, 0, 0, 0.07);
      box-shadow: 3px 3px 7px rgba(0, 0, 0, 0.07);
      transform: translateX(-50%) rotate(45deg);
    }
    &[x-placement="top"] .tb-popover-arrow {
      left: 50%;
    }
    &[x-placement="top-start"] .tb-popover-arrow {
      left: 16px;
    }
    &[x-placement="top-end"] .tb-popover-arrow {
      right: 16px;
    }

    &[x-placement^="right"] .tb-popover-arrow {
      left: 5px;
      border-top-color: transparent;
      border-right-color: transparent;
      border-bottom-color: #fff;
      border-left-color: #fff;
      -webkit-box-shadow: -3px 3px 7px rgba(0, 0, 0, 0.07);
      box-shadow: -3px 3px 7px rgba(0, 0, 0, 0.07);
    }
    &[x-placement="right"] .tb-popover-arrow {
      top: 50%;
    }
    &[x-placement="right-start"] .tb-popover-arrow {
      top: 12px;
    }
    &[x-placement="right-end"] .tb-popover-arrow {
      bottom: 12px;
    }

    &[x-placement^="left"] .tb-popover-arrow {
      right: 5px;
      border-top-color: #fff;
      border-right-color: #fff;
      border-bottom-color: transparent;
      border-left-color: transparent;
      -webkit-box-shadow: 3px -3px 7px rgba(0, 0, 0, 0.07);
      box-shadow: 3px -3px 7px rgba(0, 0, 0, 0.07);
    }
    &[x-placement="left"] .tb-popover-arrow {
      top: 50%;
    }
    &[x-placement="left-start"] .tb-popover-arrow {
      top: 12px;
    }
    &[x-placement="left-end"] .tb-popover-arrow {
      bottom: 12px;
    }

    &[x-placement^="bottom"] .tb-popover-arrow {
      top: 5px;
      border-top-color: #fff;
      border-right-color: transparent;
      border-bottom-color: transparent;
      border-left-color: #fff;
      -webkit-box-shadow: -2px -2px 5px rgba(0, 0, 0, 0.06);
      box-shadow: -2px -2px 5px rgba(0, 0, 0, 0.06);
    }
    &[x-placement="bottom"] .tb-popover-arrow {
      left: 50%;
      margin-left: - @arrow-width;
    }
    &[x-placement="bottom-start"] .tb-popover-arrow {
      left: 16px;
    }
    &[x-placement="bottom-end"] .tb-popover-arrow {
      right: 16px;
    }
  }

  &-title {
    width: 100%;
    // min-height: 32px;
    margin: 0;
    padding: 5px 16px 4px;
    color: #1089ff;
    font-weight: 500;
    border-bottom: 1px solid  #f0f0f0;

    &:after {
      content: '';
      display: block;
      height: 1px;
      position: absolute;
      left: 8px;
      right: 8px;
      bottom: 0;
      background-color: #f0f0f0;
    }

    &-inner {
      color: rgb(0, 0, 0);
      font-size: 14px;
      font-weight: 500;
    }
  }

  &-body {
    padding: 8px 16px;
    &-content {
      overflow: auto;
      &-word-wrap {
        white-space: pre-wrap;
        text-align: justify;
      }
      &-inner {
        color: rgba(0, 0, 0, .65);
      }
    }
  }
  &-inner {
    width: 100%;
    background-color: #ffffff;
    background-clip: padding-box;
    border-radius: 2px;
    box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05);
    white-space: nowrap;
  }

  &-arrow {
    position: absolute;
    display: block;
    width: 8.48528137px;
    height: 8.48528137px;
    background: transparent;
    border-style: solid;
    border-width: 4.24264069px;
    transform: rotate(45deg);
  }
  &-confirm &-popper {
    max-width: 300px;
  }
  &-confirm &-inner {
    white-space: normal;
  }

  &-confirm &-body {
    padding: 12px 16px;
    &-message {
      display: inline-flex;
      padding: 4px 0 12px;
      color: rgba(0, 0, 0, .65);
      font-size: 14px;
      .iconfont {
        position: relative;
        top: -2px;
        font-size: 18px;
        color: #fea638;
        margin-right: 8px;
      }
    }
    &-buttons {
      text-align: right;
      .tb-button{
        margin-left: 10px;
      }
    }
  }
}

</style>