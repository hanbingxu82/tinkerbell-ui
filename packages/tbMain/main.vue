<!--
 * @Author: your name
 * @Date: 2021-03-22 10:31:09
 * @LastEditTime: 2021-03-22 17:32:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/packages/tbMain/main.vue
-->
<template>
  <div v-on="$listeners" class="tb-main main">
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
