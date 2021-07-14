<!--
 * @Author: your name
 * @Date: 2021-05-13 13:56:42
 * @LastEditTime: 2021-07-14 14:04:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/packages/tbBackTop/main.vue
-->
<template>
  <div class="tb-backtop tb-div-wrapper">
    <transition name="fade">
      <tb-button :style="`bottom:${bottom}px;right:${right}px;`" circle icon="icon-arrow-up-filling" class="tb-scroll-button" v-if="tbIsVisible && !text" @click="tbGoToTop(duration)"></tb-button>
      <tb-button :style="`bottom:${bottom}px;right:${right}px;`" class="tb-scroll-button" v-if="tbIsVisible && text" @click="tbGoToTop(duration)">{{ this.text }}</tb-button>
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
    bottom: {
      type: String | Number,
      default: 30,
    },
    right: {
      type: String | Number,
      default: 30,
    },
    // 滚动条卷起高度  显示对应goTop  默认设置为200
    visibleY: {
      type: Number,
      default: 200,
    },
    // 到顶部动画时间600毫秒
    duration: {
      type: Number,
      default: 600,
    },
    target: {
      type: String,
    },
  },
  data() {
    return {
      tbIsVisible: false,
    };
  },
  mounted() {
    if (this.target) {
      document.querySelector(this.target).addEventListener("scroll", this.tbScrollEvent);
      console.log(document.querySelector(this.target));
    } else {
      // 滚动事件监听  addEventListener用此标签防止onScroll清除其他的事件
      window.addEventListener("scroll", this.tbScrollEvent);
    }
  },
  destroyed() {
    if (this.target) {
      document.querySelector(this.target).removeEventListener("scroll", this.tbScrollEvent);
    } else {
      // 销毁滚动事件
      window.removeEventListener("scroll", this.tbScrollEvent);
    }
  },
  methods: {
    tbScrollEvent() {
      // 被卷曲的高度是否大于我们设置的值
      this.tbIsVisible = this.visibleY < (this.target ? document.querySelector(this.target).scrollTop : window.scrollY);
    },
    // 点击 触发回滚事件
    tbGoToTop(duration) {
      const vm = this;
      // 如果是传递节点式
      if (this.target) {
        if (document.querySelector(this.target).scrollTop === 0) return;
        const totalScrollDistance = document.querySelector(this.target).scrollTop;
        let scrollY = totalScrollDistance;
        let oldTimestamp = null;
        function step(newTimestamp) {
          // requestAnimationFrame默认参数  类似于一个执行时间的这样一个时间戳 当前执行时间  和上一次执行时间  /  一个固定的值也就是传进来的时间值，从而也就实现了效果
          if (oldTimestamp !== null) {
            // 一个指定的计算计算公式
            scrollY -= (totalScrollDistance * (newTimestamp - oldTimestamp)) / duration;
            if (scrollY <= 0) return (document.querySelector(vm.target).scrollTop = 0);
            document.querySelector(vm.target).scrollTop = scrollY;
          }
          oldTimestamp = newTimestamp;
          // 每zhen  不会有视觉差
          window.requestAnimationFrame(step);
        }
        window.requestAnimationFrame(step);
        // 当页面滚动到顶部时触发功能
        this.$emit("scrolledOnTop");
      } else {
        if (document.scrollingElement.scrollTop === 0) return;
        const totalScrollDistance = document.scrollingElement.scrollTop;
        let scrollY = totalScrollDistance;
        let oldTimestamp = null;
        function step(newTimestamp) {
          // requestAnimationFrame默认参数  类似于一个执行时间的这样一个时间戳 当前执行时间  和上一次执行时间  /  一个固定的值也就是传进来的时间值，从而也就实现了效果
          if (oldTimestamp !== null) {
            // 一个指定的计算计算公式
            scrollY -= (totalScrollDistance * (newTimestamp - oldTimestamp)) / duration;
            if (scrollY <= 0) return (document.scrollingElement.scrollTop = 0);
            document.scrollingElement.scrollTop = scrollY;
          }
          oldTimestamp = newTimestamp;
          // 每zhen  不会有视觉差
          window.requestAnimationFrame(step);
        }
        window.requestAnimationFrame(step);
        // 当页面滚动到顶部时触发功能
        this.$emit("scrolledOnTop");
      }
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
  /* padding: 8px; */
  /* background-color: black; */
  color: #409eff;
  outline: none;
}
/* .tb-scroll-button:hover {
  box-shadow: 0 12px 13px -6px black;
  transition: 0.5s;
} */
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
