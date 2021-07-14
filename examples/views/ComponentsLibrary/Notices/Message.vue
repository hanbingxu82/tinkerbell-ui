<!--
 * @Author: your name
 * @Date: 2021-07-01 13:38:16
 * @LastEditTime: 2021-07-14 13:48:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/examples/views/ComponentsLibrary/Notices.vue/Message.vue
-->

<template>
  <div>
    <h2
      id="message-ding-bu-jia-zai"
      style='box-sizing: border-box; margin: 0px; padding: 10px 0px; font-size: 28px; font-weight: 400; color: rgb(31, 47, 61); border-bottom: 1px solid rgb(197, 217, 232); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#message-ding-bu-jia-zai" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;Message 通知
    </h2>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      轻量级的信息反馈组件，在顶部居中显示，并自动消失。有多种不同的提示状态可选择。
    </p>
    <h3
      id="ji-chu-yong-fa"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#ji-chu-yong-fa" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp; 基础用法
    </h3>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      基本用法，默认在 3 秒后关闭
    </p>
    <p>
      <br />
    </p>

    <Demo>
      点击 Config 之后再次查看配置项一般默认即可
      <div slot="source">
        <tb-button @click="$message('this is default message')">默认提示</tb-button>
        <tb-button type="primary" @click="$message({ type: 'primary', content: 'primary 的提示' })">primary</tb-button>
        <tb-button type="success" @click="$message({ type: 'success', content: 'success 的提示' })">success</tb-button>
        <tb-button type="warning" @click="$message({ type: 'warning', content: 'warning 的提示' })">warning</tb-button>
        <tb-button type="danger" @click="$message({ type: 'danger', content: 'danger 的提示' })">danger</tb-button>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html1">
        </code>
      </pre>
    </Demo>
    <h3
      id="pei-zhi-can-shu"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#pei-zhi-can-shu" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;配置参数
    </h3>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      可以设置配置参数来渲染
    </p>
    <p>
      <br />
    </p>

    <Demo>
      <div slot="source">
        <tb-button type="default" @click="$message({ content: '我10秒消失', duration: 10 })">我10秒消失</tb-button>
        <tb-button type="default" @click="$message({ content: '我是可关闭的的提示', duration: 10, closable: true })">可关闭的</tb-button>
        <tb-button type="default" @click="$message({ content: '我永远不会关闭除非手动', duration: 0, closable: true, zIndex: 3000 })">不会关闭</tb-button>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html2">
        </code>
      </pre>
    </Demo>
    <h3
      id="render-han-shu-diao-yong"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#render-han-shu-diao-yong" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;render函数调用
    </h3>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      render函数调用
    </p>
    <p>
      <br />
    </p>

    <Demo>
      <div slot="source">
        <tb-button type="default" @click="renderFunc">render函数调用</tb-button>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html3">
        </code>
      </pre>
    </Demo>
    <h3
      id="API"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#API" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;API
    </h3>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      通过直接调用以下方法来使用组件：
    </p>

    <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html4">
        </code>
      </pre>

    <h3
      id="rowMessage"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#rowMessage" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;Message props
    </h3>
    <p>
      <br />
    </p>
    <tb-table-eazy :rows="rowMessage" :cols="col"></tb-table-eazy>
    <RightSmallNav :rightTitle="rightTitle" @goMeowPoint="goMeowPoint" />
  </div>
</template>

<script>
import useScroll from "../../../utils/mixins";
import RightSmallNav from "../../../components/RightSmallNav.vue";
export default {
  name: "Message",
  components: { RightSmallNav },
  data() {
    return {
      rowMessage: [
        {
          Parameters: "content",
          Explain: "提示内容",
          Types: "String",
          Optional: "-",
          Default: "-",
        },
        {
          Parameters: "type",
          Explain: "提示类别(primary,info,success,warning,danger)",
          Types: "String",
          Optional: "primary,info,success,warning,danger",
          Default: "primary",
        },
        {
          Parameters: "render",
          Explain: "自定义描述内容，使用 Vue 的 Render 函数",
          Types: "Function",
          Optional: "-",
          Default: "-",
        },
        {
          Parameters: "duration",
          Explain: "自动关闭的延时，单位秒，不关闭可以写 0",
          Types: "Number",
          Optional: "-",
          Default: "3",
        },
        {
          Parameters: "onClose",
          Explain: "关闭时的回调",
          Types: "Function",
          Optional: "—",
          Default: "—",
        },
        {
          Parameters: "closable",
          Explain: "是否显示关闭按钮",
          Types: "Boolean",
          Optional: "-",
          Default: "false",
        },
        {
          Parameters: "zIndex",
          Explain: "显示层级",
          Types: "Number",
          Optional: "-",
          Default: "2000",
        },
      ],
      html1: `    <tb-button @click="$message('this is default message')">默认提示</tb-button>
    <tb-button type="primary" @click="$message({type:'primary',content:'primary 的提示'})">primary</tb-button>
    <tb-button type="success" @click="$message({type:'success',content:'success 的提示'})">success</tb-button>
    <tb-button type="warning" @click="$message({type:'warning',content:'warning 的提示'})">warning</tb-button>
    <tb-button type="danger" @click="$message({type:'danger',content:'danger 的提示'})">danger</tb-button>
            `,
      html2: `    <tb-button type="default" @click="$message({ content: '我10秒消失', duration: 10 })">我10秒消失</tb-button>
    <tb-button type="default" @click="$message({ content: '我是可关闭的的提示', duration: 10, closable: true })">可关闭的</tb-button>
    <tb-button type="default" @click="$message({ content: '我永远不会关闭除非手动', duration: 0, closable: true, zIndex: 3000 })">不会关闭</tb-button>
              `,
      html3: `    <template>
        <tb-button type="default" @click="renderFunc">render函数调用</tb-button>
    </template>
    <script>
        export default {
            methods: {
            renderFunc () {
                this.$message({
                    render: (h) => {
                        return h("span", [
                            "This is created by ",
                            h("span", {
                            domProps: {
                                innerHTML: "render",
                            },
                            style: {
                                color: "red",
                            },
                            }),
                            " function",
                        ]);
                    },
                });
            }
            }
        }
    <\/script>
              `,
      html4: `    this.$message('这是一条普通的提示')

    this.$message({type:'success',content:'success 的提示'})
        
    this.$message({content:'我10秒消失',duration:10})
              `,

      //   定义当前传递过来的数据是所有类型的数据
      rightTitle: [
        { title: "Message 通知", id: "message-ding-bu-jia-zai" },
        { title: "基础用法", id: "ji-chu-yong-fa" },
        { title: "配置参数", id: "pei-zhi-can-shu" },
        { title: "render函数调用", id: "render-han-shu-diao-yong" },
        { title: "Message props", id: "rowMessage" },
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
    renderFunc() {
      this.$message({
        render: (h) => {
          return h("span", [
            "This is created by ",
            h("span", {
              domProps: {
                innerHTML: "render",
              },
              style: {
                color: "red",
              },
            }),
            " function",
          ]);
        },
      });
    },
  },
};
</script>
<style lang="less" scoped>
/deep/ .tb-button {
  margin: 5px;
}
</style>
