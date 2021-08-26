<!--
 * @Author: your name
 * @Date: 2021-08-26 16:21:55
 * @LastEditTime: 2021-08-26 16:46:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/packages/tbAffix/main.vue
-->
<template>
  <div>
    <div ref="point" :class="affixClass" :style="styles">
      <slot></slot>
    </div>
    <div v-show="slot" :style="slotStyle"></div>
  </div>
</template>

<script>
import { on, off } from "../utils/utils";
import { findComponentUpward, throttle } from "../utils/utils";

export default {
  name: "tbAffix",
  props: {
    nodeEl: {
      type: String,
      default: "",
    },
    offsetTop: {
      type: Number,
      default: 0,
    },
    offsetBottom: {
      type: Number,
      default: 0,
    },
    zIndex: {
      type: Number,
      default: 10,
    },
  },
  data() {
    return {
      affix: false,
      styles: {},
      slot: false,
      slotStyle: {},
    };
  },
  computed: {
    affixClass() {
      if (this.affix) {
        if (this.scroll) {
          return "tb-affix-abs";
        } else {
          return "tb-affix";
        }
      }
      return null;
    },
  },
  mounted() {
    // 查找最近的滚动组件
    this.domEl = this.nodeEl ? document.querySelector("#" + this.nodeEl) : window;
    this.scrollEvent = throttle(this.handleScroll, 10);
    on(this.domEl, "scroll", this.scrollEvent);
    on(window, "resize", this.scrollEvent);
    this.$nextTick(() => {
      this.handleScroll();
    });
  },
  beforeDestroy() {
    off(this.domEl, "scroll", this.scrollEvent);
    off(window, "resize", this.scrollEvent);
  },
  methods: {
    handleScroll() {
      const affix = this.affix;
      const scrollTop = this.domEl.pageYOffset || this.domEl.scrollTop;
      const oTop = this.$el.offsetTop;
      const oLeft = this.$el.offsetLeft;

      // Fixed Top
      if (oTop - this.offsetTop < scrollTop && !affix) {
        this.affix = true;
        this.slotStyle = {
          width: this.$refs.point.clientWidth + "px",
          height: this.$refs.point.clientHeight + "px",
        };
        this.slot = true;
        this.styles = {
          top: `${this.offsetTop}px`,
          left: `${oLeft}px`,
          width: `${this.$el.offsetWidth}px`,
          zIndex: this.zIndex,
        };
        this.$emit("change", true);
      } else if (oTop - this.offsetTop > scrollTop && affix) {
        this.slot = false;
        this.slotStyle = {};
        this.affix = false;
        this.styles = null;
        this.$emit("change", false);
      }
    },
  },
};
</script>
<style scoped>
.tb-affix {
  position: fixed;
  z-index: 100;
}
.tb-affix-abs {
  position: absolute;
  z-index: 100;
}
</style>
