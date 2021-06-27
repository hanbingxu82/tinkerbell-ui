<!--
 * @Author: your name
 * @Date: 2021-06-25 14:40:17
 * @LastEditTime: 2021-06-27 11:25:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/examples/views/ComponentsLibrary/Foundation/Container.vue
-->

<template>
  <div>
    <h2
      id="container-bu-jv-rong-qi"
      style='box-sizing: border-box; margin: 0px; padding: 10px 0px; font-size: 28px; font-weight: 400; color: rgb(31, 47, 61); border-bottom: 1px solid rgb(197, 217, 232); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#ontainer-bu-jv-rong-qi" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;Container 布局容器
    </h2>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      用于布局的容器组件，方便快速搭建页面的基本结构：
    </p>
    tb-container、tb-header、tb-aside、tb-main、tb-footer

    <h3
      id="chang-jian-ye-mian-bu-jv"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#chang-jian-ye-mian-bu-jv" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;常见页面布局
    </h3>
    <p>
      <br />
    </p>
    <Demo>
      <div slot="source">
        <tb-container>
          <tb-header>Header</tb-header>
          <tb-main>Main</tb-main>
        </tb-container>

        <tb-container>
          <tb-header>Header</tb-header>
          <tb-main>Main</tb-main>
          <tb-footer>Footer</tb-footer>
        </tb-container>

        <tb-container>
          <tb-aside width="200px">Aside</tb-aside>
          <tb-main>Main</tb-main>
        </tb-container>

        <tb-container>
          <tb-header>Header</tb-header>
          <tb-container>
            <tb-aside width="200px">Aside</tb-aside>
            <tb-main>Main</tb-main>
          </tb-container>
        </tb-container>

        <tb-container>
          <tb-header>Header</tb-header>
          <tb-container>
            <tb-aside width="200px">Aside</tb-aside>
            <tb-container>
              <tb-main>Main</tb-main>
              <tb-footer>Footer</tb-footer>
            </tb-container>
          </tb-container>
        </tb-container>

        <tb-container>
          <tb-aside width="200px">Aside</tb-aside>
          <tb-container>
            <tb-header>Header</tb-header>
            <tb-main>Main</tb-main>
          </tb-container>
        </tb-container>

        <tb-container>
          <tb-aside width="200px">Aside</tb-aside>
          <tb-container>
            <tb-header>Header</tb-header>
            <tb-main>Main</tb-main>
            <tb-footer>Footer</tb-footer>
          </tb-container>
        </tb-container>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html1">
        </code>
      </pre>
    </Demo>
    <h3
      id="rowContainer"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#rowContainer" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;Container props
    </h3>
    <p>
      <br />
    </p>
    <tb-table-eazy :rows="rowContainer" :cols="col"></tb-table-eazy>
    <h3
      id="rowHeader"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#rowHeader" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;Header props
    </h3>
    <p>
      <br />
    </p>
    <tb-table-eazy :rows="rowHeader" :cols="col"></tb-table-eazy>
    <h3
      id="rowAside"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#rowAside" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;Aside props
    </h3>
    <p>
      <br />
    </p>
    <tb-table-eazy :rows="rowAside" :cols="col"></tb-table-eazy>
    <h3
      id="rowFooter"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#rowFooter" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;Footer props
    </h3>
    <p>
      <br />
    </p>
    <tb-table-eazy :rows="rowFooter" :cols="col"></tb-table-eazy>
    <RightSmallNav :rightTitle="rightTitle" @goMeowPoint="goMeowPoint" />
  </div>
</template>

<script>
import useScroll from "../../../utils/mixins";
import RightSmallNav from "../../../components/RightSmallNav.vue";
export default {
  name: "Container",
  components: { RightSmallNav },
  data() {
    return {
      rowFooter: [
        {
          Parameters: "height",
          Explain: "底栏高度",
          Types: "string",
          Optional: "—",
          Default: "60px",
        },
      ],
      rowAside: [
        {
          Parameters: "width",
          Explain: "侧边栏宽度",
          Types: "string",
          Optional: "—",
          Default: "300px",
        },
      ],
      rowHeader: [
        {
          Parameters: "height",
          Explain: "顶栏高度",
          Types: "string",
          Optional: "—",
          Default: "60px",
        },
      ],
      rowContainer: [
        {
          Parameters: "direction",
          Explain: "子元素的排列方向",
          Types: "string",
          Optional: "horizontal / vertical",
          Default: "子元素中有 tb-header 或 tb-footer 时为 vertical，否则为 horizontal",
        },
      ],
      html1: `  <tb-container>
    <tb-header>Header</tb-header>
    <tb-main>Main</tb-main>
  </tb-container>

  <tb-container>
    <tb-header>Header</tb-header>
    <tb-main>Main</tb-main>
    <tb-footer>Footer</tb-footer>
  </tb-container>

  <tb-container>
    <tb-aside width="200px">Aside</tb-aside>
    <tb-main>Main</tb-main>
  </tb-container>

  <tb-container>
    <tb-header>Header</tb-header>
    <tb-container>
      <tb-aside width="200px">Aside</tb-aside>
      <tb-main>Main</tb-main>
    </tb-container>
  </tb-container>

  <tb-container>
    <tb-header>Header</tb-header>
    <tb-container>
      <tb-aside width="200px">Aside</tb-aside>
      <tb-container>
        <tb-main>Main</tb-main>
        <tb-footer>Footer</tb-footer>
      </tb-container>
    </tb-container>
  </tb-container>

  <tb-container>
    <tb-aside width="200px">Aside</tb-aside>
    <tb-container>
      <tb-header>Header</tb-header>
      <tb-main>Main</tb-main>
    </tb-container>
  </tb-container>

  <tb-container>
    <tb-aside width="200px">Aside</tb-aside>
    <tb-container>
      <tb-header>Header</tb-header>
      <tb-main>Main</tb-main>
      <tb-footer>Footer</tb-footer>
    </tb-container>
  </tb-container>

  <style>
    .tb-header, .tb-footer {
      background-color: #B3C0D1;
      color: #333;
      text-align: center;
      line-height: 60px;
    }
    
    .tb-aside {
      background-color: #D3DCE6;
      color: #333;
      text-align: center;
      line-height: 160px;
    }
    
    .tb-main {
      background-color: #E9EEF3;
      color: #333;
      text-align: center;
      line-height: 160px;
    }
    
    body > .tb-container {
      margin-bottom: 40px;
    }
    
    .tb-container:nth-child(5) .tb-aside,
    .tb-container:nth-child(6) .tb-aside {
      line-height: 220px;
    }
    
    .tb-container:nth-child(7) .tb-aside {
      line-height: 280px;
    }
  </style>`,
      //   定义当前传递过来的数据是所有类型的数据
      rightTitle: [
        { title: "Container 布局容器", id: "container-bu-jv-rong-qi" },
        { title: "常见页面布局", id: "chang-jian-ye-mian-bu-jv" },
        { title: "Container props", id: "rowContainer" },
        { title: "Header props", id: "rowHeader" },
        { title: "Aside props", id: "rowAside" },
        { title: "Footer props", id: "rowFooter" },
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
.tb-header,
.tb-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.tb-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 160px;
}

.tb-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .tb-container {
  margin-bottom: 40px;
}

.tb-container:nth-child(5) .tb-aside,
.tb-container:nth-child(6) .tb-aside {
  line-height: 220px;
}

.tb-container:nth-child(7) .tb-aside {
  line-height: 280px;
}
</style>
