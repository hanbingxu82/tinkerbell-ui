<!--
 * @Author: your name
 * @Date: 2021-05-24 17:32:36
 * @LastEditTime: 2021-05-24 21:47:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/packages/tbTimelineItem/main.vue
-->
<template>
  <li :class="itemClasses">
    <div :class="tailClasses"></div>
    <div :class="headClasses" :style="customStyle" ref="dot">
      <slot name="dot"></slot>
    </div>
    <div :class="contentClasses">
      <slot></slot>
    </div>
  </li>
</template>
<script>
const prefixCls = "tb-timeline";
export default {
  name: "tbTimelineItem",
  props: {
    //  判断圆圈颜色  默认5中状态色  以及传递的颜色
    color: {
      type: String,
      default: "primary",
    },
    // 小圆点距顶部距离
    dotTop: String,
  },
  data() {
    return {
      dot: false,
    };
  },
  mounted() {
    this.dot = !!this.$refs.dot.innerHTML.length;
  },
  computed: {
    itemClasses() {
      return `${prefixCls}-item`;
    },
    tailClasses() {
      return `${prefixCls}-item-tail`;
    },
    headClasses() {
      return [
        `${prefixCls}-item-head`,
        {
          [`${prefixCls}-item-head-custom`]: this.dot,
          [`${prefixCls}-item-head-${this.color}`]: this.headColorShow,
        },
      ];
    },
    headColorShow() {
      return ["primary", "success", "info", "warning", "danger"].find((element) => {
        return element == this.color;
      });
    },
    customStyle() {
      let style = {};
      if (this.color) {
        if (!this.headColorShow) {
          style = {
            color: this.color,
            "border-color": this.color,
            top: this.dotTop,
          };
        } else {
          style = {
            top: this.dotTop,
          };
        }
      }
      return style;
    },
    contentClasses() {
      return `${prefixCls}-item-content`;
    },
  },
};
</script>
