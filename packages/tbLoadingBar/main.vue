<!--
 * @Author: your name
 * @Date: 2021-05-24 09:26:52
 * @LastEditTime: 2021-05-24 15:08:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/packages/tbLoadingBar/main.vue
-->
<template>
  <div class="tb__loading-bar">
    <div class="tb__loading-bar--bar" :class="isError ? 'tb__loading-bar--error' : ''" role="bar" :style="{ transform: 'translate3d(-' + (100 - totalProgress) + '%, 0, 0)' }">
      <div class="tb__loading-bar--peg"></div>
    </div>
    <div class="tb__loading-bar--spinner" role="spinner" v-if="showSpinner">
      <div class="spinner-icon" :class="isError ? 'spinner-icon--error' : ''" :style="{ animation: 'tb-spinner 400ms ' + easing + ' infinite' }"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "tbLoadingBar",
  props: {
    type: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      // 200ms进度 格  越大一次性进度越多0-100
      speed: 1,
      // 小圆圈动画样式  linear   ease   ease-in   ease-out   ease-in-out   cubic-bezier(n,n,n,n)
      easing: "linear",
      // 速率0-1
      percentNum: 0,
      // 进度条长度
      totalProgress: 0,
      // 是否显示圆圈动画
      showSpinner: true,
      // 是否为错误error
      isError: false,
    };
  },
};
</script>
<style lang="less">
.tb__loading-bar {
  &--bar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    z-index: 9999;
    transition: all 200ms ease;
    transform: translate3d(-100%, 0, 0);
    background: #409eff;
  }
  &--error {
    background: #f56c6c;
  }
  &--peg {
    display: block;
    position: absolute;
    right: 0;
    width: 100px;
    height: 100%;
    box-shadow: 0 0 10px #e6a23c, 0 0 5px #e6a23c;
    opacity: 1;
    transform: rotate(3deg) translate(0px, -4px);
  }
  &--spinner {
    display: block;
    position: fixed;
    z-index: 1031;
    top: 15px;
    right: 15px;
    .spinner-icon {
      width: 18px;
      height: 18px;
      box-sizing: border-box;
      border: solid 2px transparent;
      border-top-color: #409eff;
      border-left-color: #409eff;
      border-radius: 50%;
    }
    .spinner-icon--error {
      border-top-color: #f56c6c;
      border-left-color: #f56c6c;
    }
  }
}
@keyframes tb-spinner {
  0% {
    transform: rotate(0);
  }
  to {
    // 转一圈
    transform: rotate(1turn);
  }
}
</style>
