/*
 * @Author: your name
 * @Date: 2021-03-16 13:46:44
 * @LastEditTime: 2021-06-25 15:01:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/examples/main.js
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import './assets/styles.css'
import TinkerbellUI from "../packages/index";
Vue.use(TinkerbellUI);
Vue.config.productionTip = false;

import Demo from './components/Demo.vue'

Vue.component(Demo.name,Demo)

// import 'highlight.js/styles/googlecode.css' //样式文件
// import "highlight.js/styles/default.css"; // 代码高亮的样式
import "highlight.js/styles/github.css"; // 代码高亮的样式

import hljs from 'highlight.js'

Vue.directive('highlight',function (el) {
  let blocks = el.querySelectorAll('pre code');
  blocks.forEach((block)=>{
    hljs.highlightBlock(block)
  })
})

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
