<!--
 * @Author: your name
 * @Date: 2021-03-22 10:30:49
 * @LastEditTime: 2021-03-22 13:29:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/packages/tbFooter/main.vue
-->
<template>
  <div class="tb-footer footer" :style="`height:${height}`">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "tbFooter",
  props: {
    height: {
      type: String,
      default: "60px",
    },
  },
};
</script>
<style scoped>
.footer {
  width: 100%;
}
</style>
