/*
 * @Author: your name
 * @Date: 2021-03-16 13:46:44
 * @LastEditTime: 2021-05-25 09:21:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/examples/main.js
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import TinkerbellUI from "../packages/index";
Vue.use(TinkerbellUI);
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
