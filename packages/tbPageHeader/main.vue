<!--
 * @Author: your name
 * @Date: 2021-05-19 14:08:17
 * @LastEditTime: 2021-05-19 14:28:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/packages/tbPageHeader/main.vue
-->
<template>
  <div class="tb-page-header">
    <div class="tb-page-header__left" @click="$emit('back')">
      <i class="iconfont icon-direction-left"></i>
      <div class="tb-page-header__title">
        <slot name="title">{{ title }}</slot>
      </div>
    </div>
    <div class="tb-page-header__content">
      <slot name="content">{{ content }}</slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "tbPageHeader",
  props: {
    title: {
      type: String,
      default() {
        return "返回";
      },
    },
    content: String,
  },
};
</script>
<style scoped>
.tb-page-header {
  display: flex;
  line-height: 24px;
}
.tb-page-header__left {
  display: flex;
  cursor: pointer;
  margin-right: 40px;
  position: relative;
}
.tb-page-header__left:after {
  content: "";
  position: absolute;
  width: 1px;
  height: 16px;
  right: -20px;
  top: 50%;
  transform: translateY(-50%);
  background-color: #dcdfe6;
}
.tb-page-header__left .icon-direction-left {
  font-size: 18px;
  margin-right: 6px;
  align-self: center;
}
.tb-page-header__title {
  font-size: 14px;
  font-weight: 500;
}
.tb-page-header__content {
  font-size: 18px;
  color: #303133;
}
</style>
