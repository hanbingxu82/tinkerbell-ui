<!--
 * @Author: your name
 * @Date: 2021-06-25 14:40:07
 * @LastEditTime: 2021-06-27 14:24:47
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
      <a href="#button-an-niu" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;Button 按钮
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
      <a href="#ji-chu-yong-fa" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;基础用法
    </h3>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      基础的按钮用法。
    </p>
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
        <code class="javascript"  v-text="html1">
        </code>
      </pre>
    </Demo>
    <h3
      id="jin-yong-zhuang-tai"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#jin-yong-zhuang-tai" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;禁用状态
    </h3>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      按钮不可用状态。
    </p>
    <p>
      <br />
    </p>

    <Demo>
      你可以使用disabled属性来定义按钮是否可用，它接受一个Boolean值。
      <div slot="source">
        <tb-row>
          <tb-button disabled>默认按钮</tb-button>
          <tb-button type="primary" disabled>主要按钮</tb-button>
          <tb-button type="success" disabled>成功按钮</tb-button>
          <tb-button type="info" disabled>信息按钮</tb-button>
          <tb-button type="warning" disabled>警告按钮</tb-button>
          <tb-button type="danger" disabled>危险按钮</tb-button>
        </tb-row>

        <tb-row>
          <tb-button plain disabled>朴素按钮</tb-button>
          <tb-button type="primary" plain disabled>主要按钮</tb-button>
          <tb-button type="success" plain disabled>成功按钮</tb-button>
          <tb-button type="info" plain disabled>信息按钮</tb-button>
          <tb-button type="warning" plain disabled>警告按钮</tb-button>
          <tb-button type="danger" plain disabled>危险按钮</tb-button>
        </tb-row>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html2">
        </code>
      </pre>
    </Demo>
    <h3
      id="wen-zi-an-niu"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#wen-zi-an-niu" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;文字按钮
    </h3>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      没有边框和背景色的按钮。
    </p>
    <p>
      <br />
    </p>

    <Demo>
      你可以使用disabled属性来定义按钮是否可用，它接受一个Boolean值。
      <div slot="source">
        <tb-button type="text">文字按钮</tb-button>
        <tb-button type="text" disabled>文字按钮</tb-button>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html2">
        </code>
      </pre>
    </Demo>
    <h3
      id="tu-biao-an-niu"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#tu-biao-an-niu" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;图标按钮
    </h3>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      带图标的按钮可增强辨识度（有文字）或节省空间（无文字）。
    </p>
    <p>
      <br />
    </p>

    <Demo>
      设置icon属性即可，icon 的列表可以参考 tinkerbell-ui 的 icon 组件，也可以设置在文字右边的 icon ，只要使用i标签class='iconfont'即可，可以使用自定义图标。
      <div slot="source">
        <tb-button type="primary" icon="icon-layers"></tb-button>
        <tb-button type="primary" icon="icon-lock"></tb-button>
        <tb-button type="primary" icon="icon-fullscreen-expand"></tb-button>
        <tb-button type="primary" icon="icon-search">搜索</tb-button>
        <tb-button type="primary">上传<i class="iconfont icon-rise-filling"></i></tb-button>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html4">
        </code>
      </pre>
    </Demo>
    <h3
      id="jia-zai-zhong"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#jia-zai-zhong" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;加载中
    </h3>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      点击按钮后进行数据加载操作，在按钮上显示加载状态。
    </p>
    <p>
      <br />
    </p>

    <Demo>
      要设置为 loading 状态，只要设置loading属性为true即可。
      <div slot="source">
        <tb-button type="primary" :loading="true">加载中</tb-button>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html5">
        </code>
      </pre>
    </Demo>
    <h3
      id="bu-tong-chi-cun"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#bu-tong-chi-cun" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;不同尺寸
    </h3>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      Button 组件提供三种尺寸，可以在不同场景下选择合适的按钮尺寸 默认为small尺寸。
    </p>
    <p>
      <br />
    </p>

    <Demo>
      尺寸：medium、small、mini，通过设置size属性来配置它们。
      <div slot="source">
        <tb-row>
          <tb-button size="medium">中等按钮</tb-button>
          <tb-button size="small">小型按钮</tb-button>
          <tb-button size="mini">超小按钮</tb-button>
        </tb-row>
        <tb-row>
          <tb-button size="medium" round>中等按钮</tb-button>
          <tb-button size="small" round>小型按钮</tb-button>
          <tb-button size="mini" round>超小按钮</tb-button>
        </tb-row>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html6">
        </code>
      </pre>
    </Demo>
    <h3
      id="rowButton"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#rowButton" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;Button props
    </h3>
    <p>
      <br />
    </p>
    <tb-table-eazy :rows="rowButton" :cols="col"></tb-table-eazy>
    <RightSmallNav :rightTitle="rightTitle" @goMeowPoint="goMeowPoint" />
  </div>
</template>

<script>
import useScroll from "../../../utils/mixins";
import RightSmallNav from "../../../components/RightSmallNav.vue";
export default {
  name: "Button",
  components: { RightSmallNav },
  data() {
    return {
      //   定义当前传递过来的数据是所有类型的数据
      rightTitle: [
        { title: "Button 按钮", id: "button-an-niu" },
        { title: "基础用法", id: "ji-chu-yong-fa" },
        { title: "禁用状态", id: "jin-yong-zhuang-tai" },
        { title: "文字按钮", id: "wen-zi-an-niu" },
        { title: "图标按钮", id: "tu-biao-an-niu" },
        { title: "加载中", id: "jia-zai-zhong" },
        { title: "不同尺寸", id: "bu-tong-chi-cun" },
        { title: "Button props", id: "rowButton" },
      ],
      rowButton: [
        {
          Parameters: "size",
          Explain: "尺寸",
          Types: "string",
          Optional: "medium / small / mini",
          Default: "small",
        },
        {
          Parameters: "type",
          Explain: "类型",
          Types: "string",
          Optional: "primary / success / warning / danger / info / text",
          Default: "-",
        },
        {
          Parameters: "plain",
          Explain: "是否朴素按钮",
          Types: "boolean",
          Optional: "-",
          Default: "false",
        },
        {
          Parameters: "round",
          Explain: "是否圆角按钮",
          Types: "boolean",
          Optional: "-",
          Default: "false",
        },
        {
          Parameters: "circle",
          Explain: "是否圆形按钮",
          Types: "boolean",
          Optional: "-",
          Default: "false",
        },
        {
          Parameters: "loading",
          Explain: "是否加载中状态",
          Types: "boolean",
          Optional: "-",
          Default: "false",
        },
        {
          Parameters: "disabled",
          Explain: "是否禁用状态",
          Types: "boolean",
          Optional: "-",
          Default: "false",
        },
        {
          Parameters: "icon",
          Explain: "图标类名",
          Types: "string",
          Optional: "-",
          Default: "-",
        },
      ],
      html1: `    <tb-row>
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
                `,
      html2: `    <tb-row>
      <tb-button disabled>默认按钮</tb-button>
      <tb-button type="primary" disabled>主要按钮</tb-button>
      <tb-button type="success" disabled>成功按钮</tb-button>
      <tb-button type="info" disabled>信息按钮</tb-button>
      <tb-button type="warning" disabled>警告按钮</tb-button>
      <tb-button type="danger" disabled>危险按钮</tb-button>
    </tb-row>

    <tb-row>
      <tb-button plain disabled>朴素按钮</tb-button>
      <tb-button type="primary" plain disabled>主要按钮</tb-button>
      <tb-button type="success" plain disabled>成功按钮</tb-button>
      <tb-button type="info" plain disabled>信息按钮</tb-button>
      <tb-button type="warning" plain disabled>警告按钮</tb-button>
      <tb-button type="danger" plain disabled>危险按钮</tb-button>
    </tb-row>
                `,
      html3: `    <tb-button type="text">文字按钮</tb-button>
    <tb-button type="text" disabled>文字按钮</tb-button>
                `,
      html4: `    <tb-button type="primary" icon="icon-layers"></tb-button>
    <tb-button type="primary" icon="icon-lock"></tb-button>
    <tb-button type="primary" icon="icon-fullscreen-expand"></tb-button>
    <tb-button type="primary" icon="icon-search">搜索</tb-button>
    <tb-button type="primary">上传<i class="iconfont icon-rise-filling"></i></tb-button>
                `,
      html5: `    <tb-button type="primary" :loading="true">加载中</tb-button>
                `,
      html6: `    <tb-row>
      <tb-button size="medium">中等按钮</tb-button>
      <tb-button size="small">小型按钮</tb-button>
      <tb-button size="mini">超小按钮</tb-button>
    </tb-row>
    <tb-row>
      <tb-button size="medium" round>中等按钮</tb-button>
      <tb-button size="small" round>小型按钮</tb-button>
      <tb-button size="mini" round>超小按钮</tb-button>
    </tb-row>
                `,
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
.tb-button {
  margin: 5px;
}
</style>
