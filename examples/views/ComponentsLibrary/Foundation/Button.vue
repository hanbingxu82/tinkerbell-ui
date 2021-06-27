<!--
 * @Author: your name
 * @Date: 2021-06-25 14:40:07
 * @LastEditTime: 2021-06-27 11:49:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/examples/views/ComponentsLibrary/Foundation/Button.vue
-->

<template>
  <div>
    <h2
      id="button-an-niu"
      style='box-sizing: border-box; margin: 0px; padding: 10px 0px; font-size: 28px; font-weight: 400; color: rgb(31, 47, 61); border-bottom: 1px solid rgb(197, 217, 232); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="https://wangbin3162.gitee.io/bin-ui/#button-an-niu" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;Button 按钮
    </h2>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      常用的操作按钮。
    </p>
    <h3
      id="ji-chu-yong-fa"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="https://wangbin3162.gitee.io/bin-ui/#ji-chu-yong-fa" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;基础用法
    </h3>
    <p>
      <br />
    </p>

    <Demo>
      使用type、plain、round和circle属性来定义 Button 的样式。
      <div slot="source">
        <tb-row>
          <tb-button>默认按钮</tb-button>
          <tb-button type="primary">主要按钮</tb-button>
          <tb-button type="success">成功按钮</tb-button>
          <tb-button type="info">信息按钮</tb-button>
          <tb-button type="warning">警告按钮</tb-button>
          <tb-button type="danger">危险按钮</tb-button>
        </tb-row>

        <tb-row>
          <tb-button plain>朴素按钮</tb-button>
          <tb-button type="primary" plain>主要按钮</tb-button>
          <tb-button type="success" plain>成功按钮</tb-button>
          <tb-button type="info" plain>信息按钮</tb-button>
          <tb-button type="warning" plain>警告按钮</tb-button>
          <tb-button type="danger" plain>危险按钮</tb-button>
        </tb-row>

        <tb-row>
          <tb-button round>圆角按钮</tb-button>
          <tb-button type="primary" round>主要按钮</tb-button>
          <tb-button type="success" round>成功按钮</tb-button>
          <tb-button type="info" round>信息按钮</tb-button>
          <tb-button type="warning" round>警告按钮</tb-button>
          <tb-button type="danger" round>危险按钮</tb-button>
        </tb-row>

        <tb-row>
          <tb-button icon="icon-add-bold" circle></tb-button>
          <tb-button type="primary" icon="icon-add-bold" circle></tb-button>
          <tb-button type="success" icon="icon-add-bold" circle></tb-button>
          <tb-button type="info" icon="icon-add-bold" circle></tb-button>
          <tb-button type="warning" icon="icon-add-bold" circle></tb-button>
          <tb-button type="danger" icon="icon-add-bold" circle></tb-button>
        </tb-row>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html4">
        </code>
      </pre>
    </Demo>

    <!-- <pre v-highlight>
        <code class="javascript"  v-text="html1">
        </code>
    </pre> -->
    <RightSmallNav :rightTitle="rightTitle" @goMeowPoint="goMeowPoint" />
  </div>
</template>

<script>
const rawHtml = `<template>
  <tb-row class="demo-avatar demo-basic">
    <tb-col :span="12">
      <div class="sub-title">circle</div>
      <div class="demo-basic--circle">
        <div class="block"><tb-avatar :size="50" :src="circleUrl"></tb-avatar></div>
        <div class="block" v-for="size in sizeList" :key="size">
          <tb-avatar :size="size" :src="circleUrl"></tb-avatar>
        </div>
      </div>
    </tb-col>  
    <tb-col :span="12">
      <div class="sub-title">square</div>
      <div class="demo-basic--circle">
        <div class="block"><tb-avatar shape="square" :size="50" :src="squareUrl"></tb-avatar></div>
        <div class="block" v-for="size in sizeList" :key="size">
          <tb-avatar shape="square" :size="size" :src="squareUrl"></tb-avatar>
        </div>
      </div>
    </tb-col> 
  </tb-row>
</template>
<script>
  export default {
    data () {
      return {
        circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
        squareUrl: "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
        sizeList: ["large", "medium", "small"]
      }
    }
  }
<\/script>
                `;
import useScroll from "../../../utils/mixins";
import RightSmallNav from "../../../components/RightSmallNav.vue";
export default {
  name: "Introductiontotheframework",
  components: { RightSmallNav },
  data() {
    return {
      html1: rawHtml,
      //   定义当前传递过来的数据是所有类型的数据
      rightTitle: [
        { title: "介绍", id: "jie-shao" },
        { title: "概述", id: "gai-shu" },
        { title: "最新版本", id: "zui-xin-ban-ben" },
        { title: "相关链接", id: "xiang-guan-lian-jie" },
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
  },
};
</script>
<style lang="less" scoped>
.tb-button{
  margin: 5px;
}
</style>
