<!--
 * @Author: your name
 * @Date: 2021-03-22 10:31:09
 * @LastEditTime: 2021-03-22 13:25:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/packages/tbMain/main.vue
-->
<template>
  <div class="tb-main main">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "tbMain",
};
</script>
<style scoped>
.main {
  flex: 1;
  width: 100%;
}
</style>
