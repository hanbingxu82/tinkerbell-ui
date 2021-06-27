<!--
 * @Author: your name
 * @Date: 2021-03-16 13:46:44
 * @LastEditTime: 2021-06-24 13:33:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit'
 * @FilePath: /hx/examples/App.vue
-->
<template>
  <div id="app">
    <Nav />
    <router-view />
  </div>
</template>
<script>
import Nav from "./components/Nav.vue";
export default {
  data() {
    return {};
  },
  components: { Nav },
  created() {},
  methods: {},
};
</script>

<style lang="less">
// body{
//   overflow: hidden;
// }
#app{
  height: 100%;
}
</style>
