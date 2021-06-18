<!--
 * @Author: your name
 * @Date: 2021-06-18 13:12:05
 * @LastEditTime: 2021-06-18 13:19:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/packages/tbCascader/cas-item.vue
-->
<template>
  <li :class="classes">
    {{ data.label }}
    <i class="iconfont icon-arrow-right" v-if="showArrow"></i>
    <i v-if="showLoading" class="iconfont icon-loading load tb-cascade-menu-item-loading" ></i>
  </li>
</template>
<script>
export default {
  name: "CasItem",
  props: {
    data: Object,
    prefixCls: String,
    tmpItem: Object,
  },
  computed: {
    classes() {
      return [
        `${this.prefixCls}-menu-item`,
        {
          [`${this.prefixCls}-menu-item-active`]: this.tmpItem.value === this.data.value,
          [`${this.prefixCls}-menu-item-disabled`]: this.data.disabled,
        },
      ];
    },
    showArrow() {
      return (this.data.children && this.data.children.length) || ("loading" in this.data && !this.data.loading);
    },
    showLoading() {
      return "loading" in this.data && this.data.loading;
    },
  },
};
</script>
<style>
/*---------自定义快速旋转（就是引用刚才自定义loading的动画）------*/
.load {
  animation: rotate 3s linear infinite;
  display: inline-block;
}

@keyframes rotate {
  0% {
    -webkit-transform: rotate(0deg);
  }
  25% {
    -webkit-transform: rotate(90deg);
  }
  50% {
    -webkit-transform: rotate(180deg);
  }
  75% {
    -webkit-transform: rotate(270deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}
</style>
