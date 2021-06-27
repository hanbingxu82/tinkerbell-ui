<!--
 * @Author: your name
 * @Date: 2021-06-24 16:43:56
 * @LastEditTime: 2021-06-25 09:45:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/examples/components/RightSmallNav.vue
-->
<template>
  <div class="right_list_screen">
    <div class="right_list">
      <div v-for="item in rightTitle" :key="item.id" :class="'slider_li ' + item.id" @click="goMeowPoint(item.id)">{{ item.title }}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "RightSmallNav",
  props: ["rightTitle"],
  methods: {
    goMeowPoint(id) {
      this.$emit("goMeowPoint", id);
      /**
       * @description: 触发父元素函数
       * @param {id} id:当前点击对应的id
       * @return {*}
       */
      setTimeout(() => {
        const nodes = document.querySelectorAll(".slider_li");
        this.$nextTick(() => {
          nodes.forEach((item) => {
            item.style.color = "#606266";
          });
          const nodeSelect = document.querySelector("." + id);
          nodeSelect.style.color = "#409eff";
        });
      }, 0);
    },
  },

};
</script>
<style lang="less" scope>
.right_list_screen {
  position: fixed;
  right: 50px;
  top: 20%;
  padding: 5px 0;
  width: 200px;
}
.right_list {
  width: 100%;
  height: 300px;
  overflow: auto;
  overflow-x: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  position: relative;
  -ms-overflow-style: none;
  overflow: -moz-scrollbars-none;
}
.right_list::-webkit-scrollbar {
  width: 0 !important;
}
.slider_li {
  padding-left: 30px;
  font-size: 14px;
  box-sizing: border-box;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;
  border-left: 1px solid #d8d8d8;
  color: #606266;
}
</style>
