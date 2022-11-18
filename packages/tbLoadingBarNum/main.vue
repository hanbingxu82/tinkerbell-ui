<!--
 * @Description: Loadingbar加载条组件
 * @Version: 1.0
 * @Author: hanbingxu
 * @Date: 2022-08-20 12:00:47
 * @LastEditTime: 2022-08-25 09:11:08
 * @LastEditors: hanbingxu
 * @FilePath: /hx/packages/tbLoadingBarNum/main.vue
-->
<template>
  <div class="tb__loading-bar">
    <div
      class="tb__loading-bar--bar"
      :class="isError ? 'tb__loading-bar--error' : ''"
      role="bar"
      :style="{ width:(totalProgress * 2)+'px' }"
    ></div>
    <div class="tb__loading-bar--spinner" role="spinner" v-if="showSpinner">
      <div
        class="spinner-icon"
        :class="isError ? 'spinner-icon--error' : ''"
        :style="{ animation: 'tb-spinner 400ms ' + easing + ' infinite' }"
      ></div>
    </div>
    <div class="tb__loading-bar--num">{{Math.ceil(totalProgress)}}%</div>
    <!-- 遮罩层 -->
    <div class="tb__loading-bar--mask"></div>
  </div>
</template>

<script>
export default {
  name: 'tbLoadingBarNum',
  props: {
    type: {
      type: Number,
      default: 1
    }
  },
  data () {
    return {
      // 200ms进度 格  越大一次性进度越多0-100
      speed: 1,
      // 小圆圈动画样式  linear   ease   ease-in   ease-out   ease-in-out   cubic-bezier(n,n,n,n)
      easing: 'linear',
      // 速率0-1
      percentNum: 0,
      // 进度条长度
      totalProgress: 0,
      // 是否显示圆圈动画
      showSpinner: true,
      // 是否为错误error
      isError: false
    }
  }
}
</script>
<style lang="less" >
.tb__loading-bar {
  &--bar {
    position: absolute;
    margin-top: 20px;
    top: 50%;
    left: calc(50% - 100px);
    transform: translate(-50%, -50%);
    width: 50%;
    height: 2px;
    z-index: 9999;
    transition: all 200ms ease;
    transform: translate3d(0, 0, 0);
    background: #1089ff;
  }
  &--error {
    background: #ff4d4f;
  }
  &--spinner {
    display: block;
    position: absolute;
    z-index: 2031;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .spinner-icon {
      display: inline-block;
      width: 18px;
      height: 18px;
      box-sizing: border-box;
      border: solid 2px transparent;
      border-top-color: #1089ff;
      border-left-color: #1089ff;
      border-radius: 50%;
    }
    .spinner-icon--error {
      border-top-color: #ff4d4f;
      border-left-color: #ff4d4f;
    }
  }
  &--num {
    position: absolute;
    z-index: 2031;
    top: 50%;
    margin-top: 14px;
    left: calc(50% + 100px);
    color: white;
  }
  &--mask {
    background: rgba(0, 0, 0, 0.7);
    position: absolute;
    z-index: 2008;
    width: 99999px;
    height: 99999px;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
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
