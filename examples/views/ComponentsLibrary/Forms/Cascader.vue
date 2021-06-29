<!--
 * @Author: your name
 * @Date: 2021-06-28 15:45:37
 * @LastEditTime: 2021-06-29 13:15:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/examples/views/ComponentsLibrary/Forms/Cascader.vue
-->

<template>
  <div>
    <h2
      id="cascader-shu-ru-kuang"
      style='box-sizing: border-box; margin: 0px; padding: 10px 0px; font-size: 28px; font-weight: 400; color: rgb(31, 47, 61); border-bottom: 1px solid rgb(197, 217, 232); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#cascader-shu-ru-kuang" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;Cascade 级联选择器
    </h2>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      从一组相关联的数据集合中进行选择，常用于省市区、公司级层、事务分类等。
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
      级联选择器对数据有较严格要求，请参照示例的格式使用data，每项数据至少包含 value、label 两项，下一级使用 children
    </p>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      value 为当前选择的数据的 value 值的数组，比如 ['xuzhou', 'tongshan'] ，按照级联顺序依次排序，使用 v-model 进行双向绑定。
    </p>
    <p>
      <br />
    </p>
    <Demo>
      <div slot="source">
        <tb-row :gutter="20">
          <tb-col span="6">
            <tb-cascader :data="data" v-model="value1"></tb-cascader>
          </tb-col>
          <tb-col span="6">
            <span>{{ value1 }}</span>
          </tb-col>
        </tb-row>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html1">
        </code>
      </pre>
    </Demo>
    <h3
      id="she-zhi-default"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#she-zhi-default" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;设置默认值
    </h3>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      指定 value 默认值，组件会在初始化时选定数据。
    </p>
    <p>
      <br />
    </p>
    <Demo>
      <div slot="source">
        <div style="width:240px;">
          <tb-cascader :data="data" v-model="value2"></tb-cascader>
        </div>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html2">
        </code>
      </pre>
    </Demo>
    <h3
      id="xuan-ting-zhan-kai"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#xuan-ting-zhan-kai" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;悬停展开
    </h3>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      设置属性 trigger 为 hover，当鼠标悬停时就会展开子集。
    </p>

    <p>
      <br />
    </p>
    <Demo>
      <div slot="source">
        <div style="width:240px;">
          <tb-cascader :data="data" trigger="hover"></tb-cascader>
        </div>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html3">
        </code>
      </pre>
    </Demo>
    <h3
      id="zi-ding-yi-view"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#zi-ding-yi-view" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;自定义显示
    </h3>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      设置 slot 可以自定义显示内容，不局限于输入框。
    </p>
    <p>
      <br />
    </p>

    <Demo>
      <div slot="source">
        <div>
          <div>{{ text }}</div>
          <div style="width:240px;">
            <tb-cascader :data="data" @change="handleChange">
              <a href="javascript:void(0)">选择</a>
            </tb-cascader>
          </div>
        </div>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html4">
        </code>
      </pre>
    </Demo>
    <h3
      id="jin-yong-jin-yong-xiang"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#jin-yong-jin-yong-xiang" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;禁用和禁用项
    </h3>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      设置属性 disabled 可以禁用组件。给某项数据设置 disabled: true 可以禁用某一项。
    </p>
    <p>
      <br />
    </p>

    <Demo>
      <div slot="source">
        <div flex="main:justify" style="width: 500px;">
          <div style="width:240px;">
            <tb-cascader :data="data" v-model="value1" disabled></tb-cascader>
          </div>
          <div style="width:240px;">
            <tb-cascader :data="data2" v-model="value1"></tb-cascader>
          </div>
        </div>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html5">
        </code>
      </pre>
    </Demo>
    <h3
      id="ji-ke-xiang-ying"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#ji-ke-xiang-ying" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;即刻响应
    </h3>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      设置属性 change-on-select 点任何一级都可以选择。
    </p>
    <p>
      <br />
    </p>

    <Demo>
      <div slot="source">
        <div style="width:240px;">
          <tb-cascader :data="data" change-on-select></tb-cascader>
        </div>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html6">
        </code>
      </pre>
    </Demo>
    <h3
      id="zi-ding-yi-xuan-xiang"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#zi-ding-yi-xuan-xiang" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;自定义显示选项
    </h3>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      对于显示的结果，可以通过 render-format 接收一个函数来自定义。
    </p>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      其中第一个参数 labels 是当前选择的label的集合，第二个参数 selectedData 是当前选择的数据集合，可以利用它们组合出你想要显示的内容。
    </p>
    <p>
      <br />
    </p>

    <Demo>
      <div slot="source">
        <div style="width:240px;">
          <tb-cascader :data="data" :render-format="format"></tb-cascader>
        </div>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html7">
        </code>
      </pre>
    </Demo>
    <h3
      id="dong-tai-jia-zai"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#dong-tai-jia-zai" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;动态加载选项
    </h3>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      使用 load-data 属性可以异步加载子选项，需要给数据增加 loading 来标识当前是否在加载中。
    </p>
    <p>
      <br />
    </p>

    <Demo>
      <div slot="source">
        <div style="width:240px;">
          <tb-cascader :data="data4" :load-data="loadData"></tb-cascader>
        </div>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html8">
        </code>
      </pre>
    </Demo>
    <h3
      id="chi-cun"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#chi-cun" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;尺寸
    </h3>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      通过设置size属性为medium和small,mini
    </p>

    <p>
      <br />
    </p>

    <Demo>
      <div slot="source">
        <div flex="cross:center">
          <div style="width:120px;">
            <tb-cascader :data="data" size="mini"></tb-cascader>
          </div>
          <div style="width:120px;margin-left: 5px;">
            <tb-cascader :data="data" size="small"></tb-cascader>
          </div>

          <div style="width:120px;margin-left: 5px;">
            <tb-cascader :data="data" size="medium"></tb-cascader>
          </div>
        </div>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html9">
        </code>
      </pre>
    </Demo>
    <h3
      id="ke-yi-sou-suo"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#ke-yi-sou-suo" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;可以搜索
    </h3>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      使用属性 filterable 可直接搜索选项并选择。
    </p>

    <p>
      <br />
    </p>

    <Demo>
      <div slot="source">
        <div style="width:240px;">
          <tb-cascader :data="data" filterable></tb-cascader>
        </div>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html10">
        </code>
      </pre>
    </Demo>
    <h3
      id="rowCascader"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#rowCascader" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;Cascader props
    </h3>
    <p>
      <br />
    </p>

    <tb-table-eazy :rows="rowCascader" :cols="col"></tb-table-eazy>
    <h3
      id="rowCascaderEvent"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#rowCascaderEvent" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;Cascader events
    </h3>
    <p>
      <br />
    </p>
    <tb-table-eazy :rows="rowCascaderEvent" :cols="colEvent"></tb-table-eazy>
    <h3
      id="rowCascaderSlot"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#rowCascaderSlot" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;Cascader slots
    </h3>
    <p>
      <br />
    </p>
    <tb-table-eazy :rows="rowCascaderSlot" :cols="colSlot"></tb-table-eazy>

    <RightSmallNav :rightTitle="rightTitle" @goMeowPoint="goMeowPoint" />
  </div>
</template>

<script>
import useScroll from "../../../utils/mixins";
import RightSmallNav from "../../../components/RightSmallNav.vue";
export default {
  name: "Cascader",
  components: { RightSmallNav },
  data() {
    return {
      //   定义当前传递过来的数据是所有类型的数据
      rightTitle: [
        { title: "Cascader 选择器", id: "cascader-shu-ru-kuang" },
        { title: "基础用法", id: "ji-chu-yong-fa" },
        { title: "设置默认值", id: "she-zhi-default" },
        { title: "悬停展开", id: "xuan-ting-zhan-kai" },
        { title: "自定义显示", id: "zi-ding-yi-view" },
        { title: "禁用 禁用项", id: "jin-yong-jin-yong-xiang" },
        { title: "即刻响应", id: "ji-ke-xiang-ying" },
        { title: "自定义显示选项", id: "zi-ding-yi-xuan-xiang" },
        { title: "动态加载选项", id: "dong-tai-jia-zai" },
        { title: "尺寸", id: "chi-cun" },
        { title: "可以搜索", id: "ke-yi-sou-suo" },
        { title: "Cascader props", id: "rowCascader" },
        { title: "Cascader events", id: "rowCascaderEvent" },
        { title: "Cascader slots", id: "rowCascaderSlot" },
      ],

      value1: [],
      value2: ["xuzhou", "tongshan"],
      text: "未选择",
      data: [
        {
          value: "nanjing",
          label: "南京",
          children: [
            {
              value: "xuanwu",
              label: "玄武区",
            },
            {
              value: "gulou",
              label: "鼓楼区",
            },
            {
              value: "jianye",
              label: "建邺区",
            },
          ],
        },
        {
          value: "xuzhou",
          label: "徐州",
          children: [
            {
              value: "tongshan",
              label: "铜山区",
            },
            {
              value: "gulou",
              label: "鼓楼区",
            },
            {
              value: "yunlong",
              label: "云龙区",
            },
            {
              value: "jiawang",
              label: "贾汪区",
            },
          ],
        },
      ],
      data2: [
        {
          value: "nanjing",
          label: "南京",
          disabled: true,
          children: [
            {
              value: "xuanwu",
              label: "玄武区",
            },
            {
              value: "gulou",
              label: "鼓楼区",
            },
            {
              value: "jianye",
              label: "建邺区",
            },
          ],
        },
        {
          value: "xuzhou",
          label: "徐州",
          children: [
            {
              value: "tongshan",
              label: "铜山区",
            },
            {
              value: "gulou",
              label: "鼓楼区",
            },
            {
              value: "yunlong",
              label: "云龙区",
            },
            {
              value: "jiawang",
              label: "贾汪区",
            },
          ],
        },
      ],
              data4: [
          {
            value: 'nanjing',
            label: '南京',
            children: [],
            loading: false
          },
          {
            value: 'xuzhou',
            label: '徐州',
            children: [],
            loading: false
          }
        ],
      rowCascader: [
        {
          Parameters: "data",
          Explain: "可选项的数据源，格式参照示例说明",
          Types: "Array",
          Optional: "-",
          Default: "[]",
        },

        {
          Parameters: "value",
          Explain: "当前已选项的数据，格式参照示例说明",
          Types: "Array",
          Optional: "-",
          Default: "[]",
        },
        {
          Parameters: "disabled",
          Explain: "是否禁用",
          Types: "Boolean",
          Optional: "-",
          Default: "false",
        },
        {
          Parameters: "clearable",
          Explain: "是否支持清除",
          Types: "Boolean",
          Optional: "-",
          Default: "true",
        },
        {
          Parameters: "placeholder",
          Explain: "输入框占位符",
          Types: "String",
          Optional: "-",
          Default: "请选择",
        },
        {
          Parameters: "change-on-select",
          Explain: "开启改变即时选择",
          Types: "Boolean",
          Optional: "-",
          Default: "false",
        },
        {
          Parameters: "trigger",
          Explain: "菜单展开方式",
          Types: "String",
          Optional: "click 或 hover",
          Default: "click",
        },
        {
          Parameters: "size",
          Explain: "选择器大小",
          Types: "String",
          Optional: "medium/small/mini",
          Default: "small",
        },
        {
          Parameters: "load-data",
          Explain: "动态获取数据，数据源需标识 loading",
          Types: "Function",
          Optional: "-",
          Default: "-",
        },
        {
          Parameters: "render-format",
          Explain: "选择后展示的函数，用于自定义显示格式",
          Types: "Function",
          Optional: "-",
          Default: "label => label.join(' / ')",
        },

        {
          Parameters: "filterable",
          Explain: "是否支持搜索",
          Types: "Boolean",
          Optional: "-",
          Default: "false",
        },
        {
          Parameters: "not-found-text",
          Explain: "当搜索列表为空时显示的内容",
          Types: "String",
          Optional: "-",
          Default: "暂无匹配数据",
        },
        {
          Parameters: "transfer",
          Explain: "是否将弹层放置于 body 内",
          Types: "Boolean",
          Optional: "-",
          Default: "false",
        },
        {
          Parameters: "element-id",
          Explain: "给表单元素设置 id，详见 Form 用法",
          Types: "String",
          Optional: "-",
          Default: "-",
        },
      ],
      rowCascaderEvent: [
        {
          Parameters: "change",
          Explain: "选择完成后的回调，返回值 value 即已选值 value，selectedData 为已选项的具体数据",
          Callback: "value, selectedData",
        },
        {
          Parameters: "visible-change",
          Explain: "展开和关闭弹窗时触发",
          Callback: "显示状态，Boolean",
        },
      ],
      rowCascaderSlot: [
        {
          Parameters: "default",
          Explain: "自定义替换掉选择",
        },
      ],

      html1: `    <template>
        <tb-row :gutter="20" >
            <tb-col span="6">
                <tb-cascader :data="data" v-model="value1"></tb-cascader>
            </tb-col>
            <tb-col span="6">
                <span>{{value1}}</span>
            </tb-col>
        </tb-row>
    </template>
    <script>
        export default {
            data() {
            return {
                value1: [],
                data: [
                {
                    value: 'nanjing',
                    label: '南京',
                    children: [
                    {
                        value: 'xuanwu',
                        label: '玄武区'
                    },
                    {
                        value: 'gulou',
                        label: '鼓楼区'
                    },
                    {
                        value: 'jianye',
                        label: '建邺区'
                    }
                    ]
                },
                {
                    value: 'xuzhou',
                    label: '徐州',
                    children: [
                    {
                        value: 'tongshan',
                        label: '铜山区'
                    },
                    {
                        value: 'gulou',
                        label: '鼓楼区'
                    },
                    {
                        value: 'yunlong',
                        label: '云龙区'
                    },
                    {
                        value: 'jiawang',
                        label: '贾汪区'
                    }
                    ]
                }
                ]
            }
            }
        }
<\/script>
`,
      html2: `     <template>
    <div style="width:240px;">
      <tb-cascader :data="data" v-model="value2"></tb-cascader>
    </div>
  </template>
  <script>
    export default {
      data() {
        return {
          value2: ['xuzhou', 'tongshan'],
          data: [
            {
              value: 'nanjing',
              label: '南京',
              children: [
                {
                  value: 'xuanwu',
                  label: '玄武区'
                },
                {
                  value: 'gulou',
                  label: '鼓楼区'
                },
                {
                  value: 'jianye',
                  label: '建邺区'
                }
              ]
            },
            {
              value: 'xuzhou',
              label: '徐州',
              children: [
                {
                  value: 'tongshan',
                  label: '铜山区'
                },
                {
                  value: 'gulou',
                  label: '鼓楼区'
                },
                {
                  value: 'yunlong',
                  label: '云龙区'
                },
                {
                  value: 'jiawang',
                  label: '贾汪区'
                }
              ]
            }
          ]
        }
      }
    }
  <\/script>
              `,
      html3: `    <template>
        <div style="width:240px;">
            <tb-cascader :data="data" trigger="hover"></tb-cascader>
        </div>
    </template>
    <script>
        export default {
            data() {
            return {
                data: [
                {
                    value: 'nanjing',
                    label: '南京',
                    children: [
                    {
                        value: 'xuanwu',
                        label: '玄武区'
                    },
                    {
                        value: 'gulou',
                        label: '鼓楼区'
                    },
                    {
                        value: 'jianye',
                        label: '建邺区'
                    }
                    ]
                },
                {
                    value: 'xuzhou',
                    label: '徐州',
                    children: [
                    {
                        value: 'tongshan',
                        label: '铜山区'
                    },
                    {
                        value: 'gulou',
                        label: '鼓楼区'
                    },
                    {
                        value: 'yunlong',
                        label: '云龙区'
                    },
                    {
                        value: 'jiawang',
                        label: '贾汪区'
                    }
                    ]
                }
                ]
            }
            }
        }
    <\/script>
              `,
      html4: `    <template>
        <div>
            <div>{{ text }}</div>
            <div style="width:240px;">
                <tb-cascader :data="data" @change="handleChange">
                    <a href="javascript:void(0)">选择</a>
                </tb-cascader>
            </div>
        </div>
    </template>
    <script>
        export default {
            data() {
            return {
                text: '未选择',
                data: [
                {
                    value: 'nanjing',
                    label: '南京',
                    children: [
                    {
                        value: 'xuanwu',
                        label: '玄武区'
                    },
                    {
                        value: 'gulou',
                        label: '鼓楼区'
                    },
                    {
                        value: 'jianye',
                        label: '建邺区'
                    }
                    ]
                },
                {
                    value: 'xuzhou',
                    label: '徐州',
                    children: [
                    {
                        value: 'tongshan',
                        label: '铜山区'
                    },
                    {
                        value: 'gulou',
                        label: '鼓楼区'
                    },
                    {
                        value: 'yunlong',
                        label: '云龙区'
                    },
                    {
                        value: 'jiawang',
                        label: '贾汪区'
                    }
                    ]
                }
                ]
            }
            },
            methods: {
            handleChange(value, selectedData) {
                this.text = selectedData.map(o => o.label).join(', ');
            }
            }
        }
    <\/script>
              `,
      html5: `    <template>
        <div flex="main:justify" style="width: 500px;">
            <div style="width:240px;">
                <tb-cascader :data="data" v-model="value1" disabled></tb-cascader>
            </div>
            <div style="width:240px;">
                <tb-cascader :data="data2" v-model="value1"></tb-cascader>
            </div>
        </div>
    </template>
    <script>
        export default {
            data() {
            return {
                value1: [],
                data: [
                {
                    value: 'nanjing',
                    label: '南京',
                    children: [
                    {
                        value: 'xuanwu',
                        label: '玄武区'
                    },
                    {
                        value: 'gulou',
                        label: '鼓楼区'
                    },
                    {
                        value: 'jianye',
                        label: '建邺区'
                    }
                    ]
                },
                {
                    value: 'xuzhou',
                    label: '徐州',
                    children: [
                    {
                        value: 'tongshan',
                        label: '铜山区'
                    },
                    {
                        value: 'gulou',
                        label: '鼓楼区'
                    },
                    {
                        value: 'yunlong',
                        label: '云龙区'
                    },
                    {
                        value: 'jiawang',
                        label: '贾汪区'
                    }
                    ]
                }
                ],
                data2: [
                {
                    value: 'nanjing',
                    label: '南京',
                    disabled: true,
                    children: [
                    {
                        value: 'xuanwu',
                        label: '玄武区'
                    },
                    {
                        value: 'gulou',
                        label: '鼓楼区'
                    },
                    {
                        value: 'jianye',
                        label: '建邺区'
                    }
                    ]
                },
                {
                    value: 'xuzhou',
                    label: '徐州',
                    children: [
                    {
                        value: 'tongshan',
                        label: '铜山区'
                    },
                    {
                        value: 'gulou',
                        label: '鼓楼区'
                    },
                    {
                        value: 'yunlong',
                        label: '云龙区'
                    },
                    {
                        value: 'jiawang',
                        label: '贾汪区'
                    }
                    ]
                }
                ]
            }
            },
            methods: {
            handleChange(value, selectedData) {
                this.text = selectedData.map(o => o.label).join(', ');
            }
            }
        }
    <\/script>
              `,
      html6: `    <template>
        <div style="width:240px;">
            <tb-cascader :data="data" change-on-select></tb-cascader>
        </div>
    </template>
    <script>
        export default {
            data() {
            return {
                data: [
                {
                    value: 'nanjing',
                    label: '南京',
                    children: [
                    {
                        value: 'xuanwu',
                        label: '玄武区'
                    },
                    {
                        value: 'gulou',
                        label: '鼓楼区'
                    },
                    {
                        value: 'jianye',
                        label: '建邺区'
                    }
                    ]
                },
                {
                    value: 'xuzhou',
                    label: '徐州',
                    children: [
                    {
                        value: 'tongshan',
                        label: '铜山区'
                    },
                    {
                        value: 'gulou',
                        label: '鼓楼区'
                    },
                    {
                        value: 'yunlong',
                        label: '云龙区'
                    },
                    {
                        value: 'jiawang',
                        label: '贾汪区'
                    }
                    ]
                }
                ]
            }
            }
        }
    <\/script>
              `,
      html7: `    <template>
        <div style="width:240px;">
            <tb-cascader :data="data" :render-format="format"></tb-cascader>
        </div>
    </template>
    <script>
        export default {
            data() {
            return {
                data: [
                {
                    value: 'nanjing',
                    label: '南京',
                    children: [
                    {
                        value: 'xuanwu',
                        label: '玄武区'
                    },
                    {
                        value: 'gulou',
                        label: '鼓楼区'
                    },
                    {
                        value: 'jianye',
                        label: '建邺区'
                    }
                    ]
                },
                {
                    value: 'xuzhou',
                    label: '徐州',
                    children: [
                    {
                        value: 'tongshan',
                        label: '铜山区'
                    },
                    {
                        value: 'gulou',
                        label: '鼓楼区'
                    },
                    {
                        value: 'yunlong',
                        label: '云龙区'
                    },
                    {
                        value: 'jiawang',
                        label: '贾汪区'
                    }
                    ]
                }
                ]
            }
            },
            methods: {
                format(labels, selectedData) {
                    const index = labels.length - 1;
                    const data = selectedData[index] || false;
                    if (data && data.value) {
                    return labels[index] + ' - ' + data.value;
                    }
                    return labels[index];
                }
            }
        }
    <\/script>
              `,
      html8: `    <template>
        <div style="width:240px;">
            <tb-cascader :data="data4" :load-data="loadData"></tb-cascader>
        </div>
    </template>
    <script>
        export default {
            data() {
            return {
                data4: [
                {
                    value: 'nanjing',
                    label: '南京',
                    children: [],
                    loading: false
                },
                {
                    value: 'xuzhou',
                    label: '徐州',
                    children: [],
                    loading: false
                }
                ]
            }
            },
            methods: {
            loadData(item, callback) {
                item.loading = true;
                setTimeout(() => {
                if (item.value === 'nanjing') {
                    item.children = [
                    {
                        value: 'xuanwu',
                        label: '玄武区'
                    },
                    {
                        value: 'gulou',
                        label: '鼓楼区'
                    },
                    {
                        value: 'jianye',
                        label: '建邺区'
                    }
                    ];
                } else if (item.value === 'xuzhou') {
                    item.children = [
                    {
                        value: 'tongshan',
                        label: '铜山区'
                    },
                    {
                        value: 'gulou',
                        label: '鼓楼区'
                    },
                    {
                        value: 'yunlong',
                        label: '云龙区'
                    },
                    {
                        value: 'jiawang',
                        label: '贾汪区'
                    }
                    ];
                }
                item.loading = false;
                callback();
                }, 1000);
            }
            }
        }
    <\/script>
            `,
      html9: `    <template>
        <div flex="cross:center">
            <div style="width:120px;">
                <tb-cascader :data="data" size="mini"></tb-cascader>
            </div>
            <div style="width:120px;margin-left: 5px;">
                <tb-cascader :data="data" size="small"></tb-cascader>
            </div>
            <div style="width:120px;margin-left: 5px;">
                <tb-cascader :data="data" size="medium"></tb-cascader>
            </div>
        </div>
    </template>
    <script>
        export default {
            data() {
            return {
                data: [
                {
                    value: 'nanjing',
                    label: '南京',
                    children: [
                    {
                        value: 'xuanwu',
                        label: '玄武区'
                    },
                    {
                        value: 'gulou',
                        label: '鼓楼区'
                    },
                    {
                        value: 'jianye',
                        label: '建邺区'
                    }
                    ]
                },
                {
                    value: 'xuzhou',
                    label: '徐州',
                    children: [
                    {
                        value: 'tongshan',
                        label: '铜山区'
                    },
                    {
                        value: 'gulou',
                        label: '鼓楼区'
                    },
                    {
                        value: 'yunlong',
                        label: '云龙区'
                    },
                    {
                        value: 'jiawang',
                        label: '贾汪区'
                    }
                    ]
                }
                ]
            }
            }
        }
    <\/script>
            `,
      html10: `    <template>
        <div style="width:240px;">
            <tb-cascader :data="data" filterable></tb-cascader>
        </div>
    </template>
    <script>
        export default {
            data() {
            return {
                data: [
                {
                    value: 'nanjing',
                    label: '南京',
                    children: [
                    {
                        value: 'xuanwu',
                        label: '玄武区'
                    },
                    {
                        value: 'gulou',
                        label: '鼓楼区'
                    },
                    {
                        value: 'jianye',
                        label: '建邺区'
                    }
                    ]
                },
                {
                    value: 'xuzhou',
                    label: '徐州',
                    children: [
                    {
                        value: 'tongshan',
                        label: '铜山区'
                    },
                    {
                        value: 'gulou',
                        label: '鼓楼区'
                    },
                    {
                        value: 'yunlong',
                        label: '云龙区'
                    },
                    {
                        value: 'jiawang',
                        label: '贾汪区'
                    }
                    ]
                }
                ]
            }
            }
        }
    <\/script>
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
    maxTagPlaceholder(num) {
      return "more " + num;
    },
    handleChange(value, selectedData) {
      this.text = selectedData.map((o) => o.label).join(", ");
    },

    format(labels, selectedData) {
      const index = labels.length - 1;
      const data = selectedData[index] || false;
      if (data && data.value) {
        return labels[index] + " - " + data.value;
      }
      return labels[index];
    },
    loadData(item, callback) {
      item.loading = true;
      setTimeout(() => {
        if (item.value === "nanjing") {
          item.children = [
            {
              value: "xuanwu",
              label: "玄武区",
            },
            {
              value: "gulou",
              label: "鼓楼区",
            },
            {
              value: "jianye",
              label: "建邺区",
            },
          ];
        } else if (item.value === "xuzhou") {
          item.children = [
            {
              value: "tongshan",
              label: "铜山区",
            },
            {
              value: "gulou",
              label: "鼓楼区",
            },
            {
              value: "yunlong",
              label: "云龙区",
            },
            {
              value: "jiawang",
              label: "贾汪区",
            },
          ];
        }
        item.loading = false;
        callback();
      }, 1000);
    },
  },
};
</script>
<style lang="less" scoped>
.input-item {
  width: 300px;
  margin-right: 20px;
}
[flex] {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}
</style>
