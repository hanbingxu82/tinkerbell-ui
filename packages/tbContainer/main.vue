<!--
 * @Author: your name
 * @Date: 2021-03-22 10:30:39
 * @LastEditTime: 2021-03-22 17:32:37
 * @LastEditors: Please set LastEditors
 * @Description: container容器  flex布局,header，footer都是flex1 独占一行
 * @FilePath: /hx/packages/tbContainer/main.vue
-->
<template>
  <div v-on="$listeners" :class="`tb-container ${direction === 'vertical' ? 'container-col' : 'container'}`">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "tbContainer",
  data() {
    return {
      direction: "horizontal",
    };
  },
  beforeMount() {
    // 如果插槽中有header  或者  footer说明是横向的
    this.$slots.default.forEach((element) => {
      if (/tbHeader|tbFooter/.test(element.tag)) {
        this.direction = "vertical";
      }
    });
  },
};
</script>
<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  flex: 1;
  align-content: flex-start;
}
.container-col {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  flex: 1;
  align-content: flex-start;
}
</style>
