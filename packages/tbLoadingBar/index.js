/*
 * @Author: your name
 * @Date: 2021-05-24 09:26:57
 * @LastEditTime: 2021-05-24 14:52:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/packages/tbLoadingBar/index.js
 */
// 导入组件，组件必须声明 name
import Vue from "vue";
import LoadingBar from "./main.vue";
// 为组件添加 install 方法，用于按需引入
// LoadingBar.install = function(Vue) {
//   Vue.component(LoadingBar.name, LoadingBar);
// };
// export default tbMain;

/**
 * @description: 此步用于获取实例   Vue.extend(LoadingBar) 用于构建模板：但注意此时对应的数据还并没有实例化就相当于  是Vue 还没有new
 * @param {*}
 * @return {*}
 */
let LoadingBarConstructor = Vue.extend(LoadingBar);

let timer = null;
let removeTimer = null;

/**
 * @description: 返还的是一个实例化对象  也就是相当于返还了一个组件  可以这样去理解
 * @param {*}
 * @return {*}
 */

let tbLoadingBar = () => {
  return new LoadingBarConstructor();
};

/**
 * @description:
 * @param {*} options 参数为一个对象，注意 prototype中的this指向的便是实例化后 的this 所以我们就可以在这里使用this 进行变更组件中data的值
 * @return {*}
 */
LoadingBarConstructor.prototype.config = function(options) {
  // 便利对应的
  Object.keys(options).forEach((key) => {
    // 在这里我们不能让其传入对应的isError  和  totalProgress  因为这两个参数分别代表了错误状态以及对应的加载进度条行走进度
    if (key === "isError" || key === "totalProgress") {
      // 抛出错误
      throw new Error("配置传递错误!");
    }
    // 对应data中的配置值  也就等于我们自己定义的key值
    this[key] = options[key];
  });
  // 完成之后调用一次this.start()
  this.start();
};

/**
 * @description: 此处用于初始化对应的vue模板 将对应的挂载的模板真正的追加到document.body文档当中，因为样式我们已经写好所以 不用考虑冲突的问题
 * @param {*}
 * @return {*}
 */
LoadingBarConstructor.prototype.init = function() {
  // 首先初始化我们要做的就是清空对应的计时器 相当于一个节流，主要为了用于防止重复点击
  clearTimeout(timer);
  // 进度初始值变为0
  this.totalProgress = 0;

  // 是否错误状态设置为false初始值
  this.isError = false;
  // 手动挂载将一个模板，new出来成为一个实例  对应的返回值就是这个vue实例  对应的我们挂载到this.vm上面
  this.vm = this.$mount();
  // 因为我们已经实例化了，所以我们就可以调用this.vm.$el  这样的话就相当于于将一个creatElement 填充到document上面
  /**
   * Vue2 官网实例  所以我们就可以采用在文档之外渲染并且随后挂载的方式进行挂载
   *  同理注意 我们的this.$mount 其实就相当于实例化之后的new MyComponent()
   *  var MyComponent = Vue.extend({
        template: '<div>Hello!</div>'
      })

      // 创建并挂载到 #app (会替换 #app)
      new MyComponent().$mount('#app')

      // 同上
      new MyComponent({ el: '#app' })

      // 或者，在文档之外渲染并且随后挂载
      var component = new MyComponent().$mount()
      document.getElementById('app').appendChild(component.$el)
   */
  // 追加
  document.body.appendChild(this.vm.$el);
  // debugger
  return this;
};

/**
 * @description: 特定开始api
 * @param {*}
 * @return {*}
 */
LoadingBarConstructor.prototype.start = function() {
  // 每次开始的时候我们调用对应的初始化api 进行初始化
  this.init();
  /**
   * @description: 定时器  可以理解为每次点击按钮的时候每次重置
   * @param {*} setInterval
   * @return {*}
   */
  timer = setInterval(() => {
    // 每次都要判断  最多到90  因为我们要的其实只是一个状态，真正关闭的时候  通常一个ajax关闭是需要在调用完毕之后再去调用对应的end关闭方法
    if (this.totalProgress < 90) {
      // 如果有传递进来的值 就用传递进来的值，反之就用随机值 * 每毫秒加载几个格
      this.totalProgress += (this.percentNum || Math.random()) * this.speed;
    }
  }, 100);
};
/**
 * @description: 特定结束api
 * @param {*}
 * @return {*}
 */
LoadingBarConstructor.prototype.end = function() {
  // 主要用于判断是不是已经开始了  因为只有开始了timer才会有值  可以根据它进行判断 走init
  timer || this.init();
  // 外层使用定时器包裹主要是想要
  setTimeout(() => {
    // 如果是结束的话那么对应的总进度就要立刻变更为100
    this.totalProgress = 100;
    // 每次结束的时候同样也要清除定时器  防止重复点击
    clearTimeout(removeTimer);
    // 200毫秒之后立即清除掉对应的进度条
    removeTimer = setTimeout(() => {
      // 同样的结束之后我们没有必要在使用timer计时器了，可以清除了
      clearTimeout(timer);
      // timer此时可以置空
      timer = null;
      // 同样的将数据在文档中删除
      document.body.removeChild(this.vm.$el);
    }, 200);
  }, 0);
  // clearTimeout(newTimer);
};

LoadingBarConstructor.prototype.error = function() {
  /**
   * @description: 注意此时调用的end其实是内部有异步操作的
   * @param {*}
   * @return {*}
   */

  this.end();
  // 此步其实可有也可无  初始化后立即变为100 之后便在200ms后isError 颜色为红色 对应的操作走完移除
  // this.totalProgress = 100;
  this.isError = true;
};

// 抛出函数运行后的结果
export default tbLoadingBar();
