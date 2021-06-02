<!--
 * @Author: your name
 * @Date: 2021-06-01 15:09:43
 * @LastEditTime: 2021-06-02 13:58:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/packages/tbTabs/tbScrollPane.vue
-->
<template>
  <div class="nav-wrap" :class="{ 'is-scrollable': isScrollable }">
    <template v-if="!hideArrow && isScrollable">
      <span class="nav-prev" @click="handlePrev" v-if="!hidePrev">
        <i class="iconfont icon-arrow-left-bold"></i>
      </span>
      <span class="nav-next" @click="handleNext" v-if="!hideNext">
        <i class="iconfont icon-arrow-right-bold"></i>
      </span>
    </template>
    <div class="scroll-container" ref="scrollContainer" @wheel.prevent="handleScroll">
      <div class="scroll-wrapper" ref="scrollWrapper" :style="{ transform: `translateX(${left}px)` }">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
const padding = 16; // tag's padding
export default {
  name: "tbScrollPane",
  props: {
    hideArrow: {
      type: Boolean,
    },
  },
  data() {
    return {
      left: 0,
      isScrollable: false,
    };
  },
  mounted() {
    this.calcWidth();
  },
  computed: {
    // 判断是否左箭头隐藏
    hidePrev() {
      return this.left === 0;
    },
    // 判断是否右箭头隐藏
    hideNext() {
      const $container = this.$refs.scrollContainer;
      const $containerWidth = $container.offsetWidth;
      const $wrapper = this.$refs.scrollWrapper;
      const $wrapperWidth = $wrapper.offsetWidth;
      return this.left === $containerWidth - $wrapperWidth - padding;
    },
  },
  methods: {
    handleScroll(e) {
      // 滚轮滚动  判断向上滚动还是向下
      const eventDelta = e.wheelDelta * 0.5 || -e.deltaY * 3;
      const $container = this.$refs.scrollContainer;
      const $containerWidth = $container.offsetWidth;
      const $wrapper = this.$refs.scrollWrapper;
      const $wrapperWidth = $wrapper.offsetWidth;
      this.moveStep(eventDelta, $containerWidth, $wrapperWidth);
    },
    // 判断是否
    calcWidth() {
      const $container = this.$refs.scrollContainer;
      const $containerWidth = $container.offsetWidth;
      const $wrapper = this.$refs.scrollWrapper;
      const $wrapperWidth = $wrapper.offsetWidth;
      this.isScrollable = $wrapperWidth > $containerWidth - padding;
      if (!this.isScrollable) {
        this.left = 0;
      }
    },
    // 下标蓝线移动到指定位置
    moveToTarget($target) {
      const $container = this.$refs.scrollContainer;
      const $containerWidth = $container.offsetWidth;
      const $wrapper = this.$refs.scrollWrapper;
      const $wrapperWidth = $wrapper.offsetWidth;
      const $targetLeft = $target.offsetLeft;
      const $targetWidth = $target.offsetWidth;
      this.isScrollable = $wrapperWidth > $containerWidth - padding;

      if ($targetLeft < -this.left) {
        // tag in the left
        this.left = -$targetLeft + padding;
      } else if ($targetLeft + padding > -this.left && $targetLeft + $targetWidth < -this.left + $containerWidth - padding) {
        // tag in the current view
        // eslint-disable-line
      } else {
        // tag in the right
        this.left = $containerWidth - $wrapperWidth - padding;
      }
      if (!this.isScrollable) {
        this.left = 0;
      }
    },
    // 根据步数计算为止
    moveStep(step, containerWidth, wrapperWidth) {
      if (step > 0) {
        this.left = Math.min(0, this.left + step);
      } else {
        if (containerWidth - padding < wrapperWidth) {
          if (this.left < -(wrapperWidth - containerWidth + padding)) {
            // this.left = this.left
          } else {
            this.left = Math.max(this.left + step, containerWidth - wrapperWidth - padding);
          }
        } else {
          this.left = 0;
        }
      }
    },
    // 向前
    handlePrev() {
      const $container = this.$refs.scrollContainer;
      const $containerWidth = $container.offsetWidth;
      const $wrapper = this.$refs.scrollWrapper;
      const $wrapperWidth = $wrapper.offsetWidth;
      // 缓存容器宽度
      let moveWidth = $containerWidth - padding * 0.5;
      this.moveStep(moveWidth, $containerWidth, $wrapperWidth);
    },
    // 向后
    handleNext() {
      const $container = this.$refs.scrollContainer;
      const $containerWidth = $container.offsetWidth;
      const $wrapper = this.$refs.scrollWrapper;
      const $wrapperWidth = $wrapper.offsetWidth;
      // 缓存容器宽度
      let moveWidth = $containerWidth - padding * 0.5;
      this.moveStep(-moveWidth, $containerWidth, $wrapperWidth);
    },
  },
};
</script>
