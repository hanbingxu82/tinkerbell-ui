<!--
 * @Author: your name
 * @Date: 2021-03-22 10:30:58
 * @LastEditTime: 2021-03-22 17:32:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/packages/tbHeader/main.vue
-->
<template>
  <div v-on="$listeners" class="tb-header header" :style="`height:${height}`">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "tbHeader",
  props: {
    height: {
      type: String,
      default: "60px",
    },
  },
};
</script>
<style scoped>
.header {
  width: 100%;
}
</style>
