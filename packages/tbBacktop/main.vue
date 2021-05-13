<!--
 * @Author: your name
 * @Date: 2021-05-13 13:56:42
 * @LastEditTime: 2021-05-13 14:24:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/packages/tbBackTop/main.vue
-->
<template>
  <div class="tb-backtop tb-div-wrapper">
    <transition name="fade">
      <tb-button circle icon="icon-arrow-up-filling" class="tb-scroll-button" v-if="isVisible && !text" @click="goToTop(duration)"></tb-button>
      <tb-button class="tb-scroll-button" v-if="isVisible && text" @click="goToTop(duration)">{{ this.text }}</tb-button>
    </transition>
  </div>
</template>

<script>
export default {
  name: "tbBacktop",
  props: {
    // 文本slot内容
    text: {
      type: String,
      default: "",
    },
    // 滚动条卷起高度  显示对应goTop  默认设置为460
    visibleY: {
      type: Number,
      default: 460,
    },
    // 到顶部动画时间600毫秒
    duration: {
      type: Number,
      default: 600,
    },
  },
  data() {
    return {
      isVisible: false,
    };
  },
  created() {
    // 滚动事件监听  addEventListener用此标签防止onScroll清除其他的事件
    window.addEventListener("scroll", this.scrollEvent);
  },
  destroyed() {
    // 销毁滚动事件
    window.removeEventListener("scroll", this.scrollEvent);
  },
  methods: {
    scrollEvent() {
      // 被卷曲的高度是否大于我们设置的值
      this.isVisible = this.visibleY < window.scrollY;
    },
    // 点击 触发回滚事件
    goToTop(duration) {
      if (document.scrollingElement.scrollTop === 0) return;
      const totalScrollDistance = document.scrollingElement.scrollTop;
      let scrollY = totalScrollDistance;
      let oldTimestamp = null;
      function step(newTimestamp) {
        if (oldTimestamp !== null) {
          scrollY -= (totalScrollDistance * (newTimestamp - oldTimestamp)) / duration;
          if (scrollY <= 0) return (document.scrollingElement.scrollTop = 0);
          document.scrollingElement.scrollTop = scrollY;
        }
        oldTimestamp = newTimestamp;
        window.requestAnimationFrame(step);
      }
      window.requestAnimationFrame(step);
      // 当页面滚动到顶部时触发功能
      this.$emit("scrolledOnTop");
    },
  },
};
</script>

<style>
.tb-scroll-button {
  cursor: pointer;
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 2501;
  margin-top: 30px;
  border-radius: 20px;
  border: none;
  padding: 8px;
  background-color: black;
  color: #409eff;
  outline: none;
}
.tb-scroll-button:hover {
  box-shadow: 0 12px 13px -6px black;
  transition: 0.5s;
}
.tb-div-wrapper {
  text-align: center;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
