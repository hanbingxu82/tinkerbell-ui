<!--
 * @Author: your name
 * @Date: 2021-05-18 09:48:12
 * @LastEditTime: 2021-05-18 16:40:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/packages/tbCard/main.vue
-->
<template>
  <div class="tb-card" :class="shadow ? 'is-' + shadow + '-shadow' : 'is-always-shadow'">
    <div class="tb-card__header" v-if="$slots.header || header">
      <slot name="header">{{ header }}</slot>
    </div>
    <div class="tb-card__body" :style="bodyStyle">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "tbCard",
  props: {
    // 头部内容
    header: {},
    // body 样式
    bodyStyle: {},
    // 阴影显示时机  always|一直 / hover|移入 / never|不显示
    shadow: {
      type: String,
    },
  },
};
</script>
<style scoped>
.tb-card {
  border-radius: 4px;
  border: 1px solid #ebeef5;
  background-color: #fff;
  overflow: hidden;
  color: #303133;
  transition: 0.3s;
}
.tb-card__header {
  padding: 18px 20px;
  border-bottom: 1px solid #ebeef5;
  box-sizing: border-box;
}
.tb-card__body {
  padding: 20px;
}
.tb-card.is-always-shadow,
.tb-card.is-hover-shadow:focus,
.tb-card.is-hover-shadow:hover {
  box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
}
</style>
