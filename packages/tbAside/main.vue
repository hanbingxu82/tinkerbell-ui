<!--
 * @Author: your name
 * @Date: 2021-03-22 10:31:23
 * @LastEditTime: 2021-03-22 13:29:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/packages/tbAside/main.vue
-->
<template>
  <div v-on="$listeners" class="tb-aside aside" :style="`width:${width};`">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "tbAside",
  props: {
    width: {
      type: String,
      default: "300px",
    },
  },
};
</script>
<style scoped>
.aside {
  width: 100%;
}
</style>
