<!--
 * @Author: your name
 * @Date: 2021-07-01 13:38:01
 * @LastEditTime: 2021-07-01 15:36:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/examples/views/ComponentsLibrary/Notices.vue/LoadingBar.vue
-->

<template>
  <div>
    <h2
      id="loadingBar-ding-bu-jia-zai"
      style='box-sizing: border-box; margin: 0px; padding: 10px 0px; font-size: 28px; font-weight: 400; color: rgb(31, 47, 61); border-bottom: 1px solid rgb(197, 217, 232); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#loadingBar-ding-bu-jia-zai" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;LoadingBar 顶部加载
    </h2>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      全局创建一个显示页面加载、异步请求、文件上传等的加载进度条。
    </p>
    <h3
      id="lu-you-shi-yong"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#lu-you-shi-yong" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;在路由中使用
    </h3>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      LoadingBar 只会在全局创建一个，因此在任何位置调用的方法都会控制这同一个组件。 主要使用场景是路由切换和Ajax，因为这两者都不能拿到精确的进度，LoadingBar 会模拟进度，具体见API。
    </p>

    <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html1">
        </code>
      </pre>
    <h3
      id="dai-ma-shi-li"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#dai-ma-shi-li" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp; 代码实例
    </h3>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      点击 Start 开始进度，点击 Done 结束。在调用start()方法后，组件会自动模拟进度，当调用done()或error()时，补全进度并自动消失。
    </p>
    <p>
      <br />
    </p>

    <Demo>
      点击 Config 之后再次查看配置项一般默认即可
      <div slot="source">
        <tb-button style="margin-right:10px" @click="start">开始</tb-button>
        <tb-button style="margin-right:10px" @click="end">结束</tb-button>
        <tb-button @click="error">错误</tb-button>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html2">
        </code>
      </pre>
    </Demo>
    <h3
      id="chang-gui-pei-zhi"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#chang-gui-pei-zhi" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;常规配置
    </h3>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      提供 LoadingBar 的全局配置，使用方法如下
    </p>
    <p>
      <br />
    </p>

    <Demo>
      <div slot="source">
        <tb-button style="margin-right:10px" @click="setSpeed">设置speed速度</tb-button>
        <tb-button style="margin-right:10px" @click="setSpinner">设置spinner动画效果</tb-button>
        <tb-button style="margin-right:10px" @click="setPercentNum">设置percentNum每次加载的比例</tb-button>
        <tb-button style="margin-right:10px" @click="setShowSpinner">设置是否显示spinner</tb-button>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html3">
        </code>
      </pre>
    </Demo>
    <h3
      id="rowLoadingBarEvent"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#rowLoadingBarEvent" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;LoadingBar events
    </h3>
    <p>
      <br />
    </p>
    <tb-table-eazy :rows="rowLoadingBarEvent" :cols="colEvent"></tb-table-eazy>
    <h3
      id="rowLoadingBarConfig"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#rowLoadingBarConfig" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;LoadingBarConfig props
    </h3>
    <p>
      <br />
    </p>
    <tb-table-eazy :rows="rowLoadingBarConfig" :cols="col"></tb-table-eazy>
    <RightSmallNav :rightTitle="rightTitle" @goMeowPoint="goMeowPoint" />
  </div>
</template>

<script>
import useScroll from "../../../utils/mixins";
import RightSmallNav from "../../../components/RightSmallNav.vue";
export default {
  name: "LoadingBar",
  components: { RightSmallNav },
  data() {
    return {
      rowLoadingBarEvent: [
        {
          Parameters: "start",
          Explain: "开始从 0 显示进度条，并自动加载进度",
          Callback: "-",
        },
        {
          Parameters: "end",
          Explain: "结束进度条，自动补全剩余进度",
          Callback: "-",
        },
        {
          Parameters: "error",
          Explain: "以错误的类型结束进度条，自动补全剩余进度",
          Callback: "-",
        },
      ],
      rowLoadingBarConfig: [
        {
          Parameters: "speed",
          Explain: "加载速度",
          Types: "Number",
          Optional: "0-100",
          Default: "5",
        },

        {
          Parameters: "easing",
          Explain: "spinner加载动画",
          Types: "String",
          Optional: "linear, ease, cubic-bezier...",
          Default: "贝萨尔曲线值",
        },
        {
          Parameters: "percentNum",
          Explain: "每次前进的百分比",
          Types: "Float",
          Optional: "0-1",
          Default: "-",
        },
        {
          Parameters: "showSpinner",
          Explain: "是否显示spinner",
          Types: "Boolean",
          Optional: "-",
          Default: "-",
        },
      ],
      html1: `    import tinkerbellUI from 'tinkerbell-ui'
      
    router.beforeEach((to, from, next) => {
    tinkerbellUI.tbLoadingBar.start();
    next();
    });
    router.afterEach(() => {
    tinkerbellUI.tbLoadingBar.end();
    });
            `,
      html2: `    <tb-button @click="start">开始</tb-button>
    <tb-button @click="end">结束</tb-button>
    <tb-button @click="error">错误</tb-button>
    <script>
        export default{
            methods: {
            start () {
                this.$loading.start()
            },
            end () {
                this.$loading.end()
            },
            error () {
                this.$loading.error()
            }
            }
        }
    <\/script>
              `,
      html3: `    <tb-button @click="setSpeed">设置speed速度</tb-button>
    <tb-button @click="setSpinner">设置spinner动画效果</tb-button>
    <tb-button @click="setPercentNum">设置percentNum每次加载的比例</tb-button>
    <tb-button @click="setShowSpinner">设置是否显示spinner</tb-button>
    <script>
        export default{
            methods: {
            setSpeed () {
                this.$loading.config({
                    speed: 10
                })
                },
                setSpinner () {
                this.$loading.config({
                    easing: 'ease'
                })
                },
                setPercentNum () {
                this.$loading.config({
                    percentNum: 0.1
                })
                },
                setShowSpinner () {
                this.$loading.config({
                    showSpinner: false
                })
                }
            }
        }
    <\/script>
              `,

      //   定义当前传递过来的数据是所有类型的数据
      rightTitle: [
        { title: "LoadingBar 顶部加载", id: "loadingBar-ding-bu-jia-zai" },
        { title: "在路由中使用", id: "lu-you-shi-yong" },
        { title: "代码实例", id: "dai-ma-shi-li" },
        { title: "常规配置", id: "chang-gui-pei-zhi" },
        { title: "LoadingBarEvent props", id: "rowLoadingBarEvent" },
        { title: "LoadingBarConfig props", id: "rowLoadingBarConfig" },
      ],
    };
  },
  /**
   * @description: 引入minxns   src/utils/mixins.ts
   * @param {rightTitle}  rightTitle:右侧right浮起框数据
   * @return {*}
   */
  mixins: [useScroll],
  methods: {
    /**
     * @description: 点击右侧区域跳转至对应的html区域
     * @param {id:string} id:id节点地址
     * @return {*}
     */
    goMeowPoint(id) {
      const containern = window.document.querySelector("#" + id);
      containern.scrollIntoView(true);
    },
    start() {
      this.$loading.start();
    },
    end() {
      this.$loading.end();
    },
    error() {
      this.$loading.error();
    },
    setSpeed() {
      this.$loading.config({
        speed: 10,
      });
    },
    setSpinner() {
      this.$loading.config({
        easing: "ease",
      });
    },
    setPercentNum() {
      this.$loading.config({
        percentNum: 0.1,
      });
    },
    setShowSpinner() {
      this.$loading.config({
        showSpinner: false,
      });
    },
  },
};
</script>
<style lang="less" scoped>
.tb-loadingBar {
  margin: 5px;
}
</style>
