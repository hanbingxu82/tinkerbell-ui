<!--
 * @Author: your name
 * @Date: 2021-06-29 15:36:14
 * @LastEditTime: 2021-06-30 09:47:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/examples/views/ComponentsLibrary/Forms/Rate.vue
-->

<template>
  <div>
    <h2
      id="rate-ping-fen"
      style='box-sizing: border-box; margin: 0px; padding: 10px 0px; font-size: 28px; font-weight: 400; color: rgb(31, 47, 61); border-bottom: 1px solid rgb(197, 217, 232); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#rate-ping-fen" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;Rate 评分
    </h2>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      文字超链接。
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
      基础的评分用法。
    </p>
    <p>
      <br />
    </p>
    <Demo>
      <div slot="source">
        <tb-rate v-model="myCurrentRate" :length="5" :ratedesc="desc" />
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html1">
        </code>
      </pre>
    </Demo>
    <h3
      id="jin-yong-zhi-du-zhuang-tai"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#jin-yong-zhi-du-zhuang-tai" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;禁用只读状态
    </h3>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      评分不可用状态。
    </p>
    <p>
      <br />
    </p>

    <Demo>
      <div slot="source">
        <div>
          <tb-rate :length="5" :value="3" disabled />
          <tb-rate :length="5" :value="3" readonly />
          <!-- <tb-rate :length="5" :value="2" @before-rate="onBeforeRate" @after-rate="onAftereRate" :ratedesc="desc" /> -->
        </div>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html2">
        </code>
      </pre>
    </Demo>
    <h3
      id="ping-fen-tu-biao"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#ping-fen-tu-biao" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;评分图标
    </h3>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      更改评分的图标
    </p>
    <p>
      <br />
    </p>

    <Demo>
      <div slot="source">
        <div>
          <tb-rate :length="5" iconref="icon-smile-filling" :activecolor="activecolor" />
        </div>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html3">
        </code>
      </pre>
    </Demo>
    <h3
      id="rowRate"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#rowRate" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;Rate props
    </h3>
    <p>
      <br />
    </p>
    <tb-table-eazy :rows="rowRate" :cols="col"></tb-table-eazy>
    <h3
      id="rowRateEvent"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#rowRateEvent" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;Rate events
    </h3>
    <p>
      <br />
    </p>
    <tb-table-eazy :rows="rowRateEvent" :cols="colEvent"></tb-table-eazy>
    <RightSmallNav :rightTitle="rightTitle" @goMeowPoint="goMeowPoint" />
  </div>
</template>

<script>
import useScroll from "../../../utils/mixins";
import RightSmallNav from "../../../components/RightSmallNav.vue";
export default {
  name: "Rate",
  components: { RightSmallNav },
  data() {
    return {
      myCurrentRate: 3,
      desc: ["非常糟糕", "糟糕", "正常", "良好", "非常良好"],
      activecolor: "red",
      rowRate: [
        {
          Parameters: "value / v-model",
          Explain: "默认选中值",
          Types: "Number、String",
          Optional: "-",
          Default: "-",
        },

        {
          Parameters: "name",
          Explain: "name字段",
          Types: "String",
          Optional: "-",
          Default: "rate",
        },
        {
          Parameters: "length",
          Explain: "评分个数",
          Types: "Number",
          Optional: "-",
          Default: "-",
        },
        {
          Parameters: "showcount",
          Explain: "鼠标移入对应的星号上时，显示对应的index",
          Types: "Boolean",
          Optional: "-",
          Default: "false",
        },
        {
          Parameters: "required",
          Explain: "必选  对标form对应的required",
          Types: "Boolean",
          Optional: "-",
          Default: "-",
        },
        {
          Parameters: "ratedesc",
          Explain: "描述 将对应的index变为对应的下标字段  如['非常糟糕'，'糟糕'，'正常'，'良好'，'非常良好']",
          Types: "Array",
          Optional: "-",
          Default: "[]",
        },
        {
          Parameters: "activecolor",
          Explain: "选中颜色",
          Types: "string",
          Optional: "-",
          Default: "#efc20f",
        },

        {
          Parameters: "disabled",
          Explain: "是否禁用",
          Types: "Boolean",
          Optional: "-",
          Default: "false",
        },
        {
          Parameters: "readonly",
          Explain: "是否只读",
          Types: "Boolean",
          Optional: "-",
          Default: "false",
        },
        {
          Parameters: "iconref",
          Explain: "符号图标",
          Types: "String",
          Optional: "-",
          Default: "icon-favorite-filling",
        },
      ],
      rowRateEvent: [
        {
          Parameters: "before-rate",
          Explain: "评分变更之前",
          Callback: "index、图表对应索引",
        },
        {
          Parameters: "onAftereRate",
          Explain: "评分变更之后",
          Callback: "index、图表对应索引",
        },
      ],
      html1: `    <template>
        <div>
           <tb-rate v-model="myCurrentRate" :length="5"  :ratedesc="desc" />
        </div>
    </template>
    <script>
    export default {
        data(){
            return{
                myCurrentRate: 3,
                desc: ["非常糟糕", "糟糕", "正常", "良好", "非常良好"],
            }
        }
        }
    <\/script>
              `,
      html2: `    <tb-rate :length="5" :value="3" disabled />
    <tb-rate :length="5" :value="3" readonly />
              `,
      html3: `    <template>
        <div>
           <tb-rate :length="5"  iconref="icon-smile-filling" :activecolor="activecolor"/>
        </div>
    </template>
    <script>
    export default {
        data(){
            return{
                activecolor: "red"
            }
        }
        }
    <\/script>
              `,

      //   定义当前传递过来的数据是所有类型的数据
      rightTitle: [
        { title: "Rate 评分", id: "rate-ping-fen" },
        { title: "基础用法", id: "ji-chu-yong-fa" },
        { title: "禁用状态", id: "jin-yong-zhi-du-zhuang-tai" },
        { title: "评分图标", id: "ping-fen-tu-biao" },
        { title: "Rate props", id: "rowRate" },
        { title: "Rate events", id: "rowRateEvent" },
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
    onBeforeRate(rate) {
      alert(rate);
    },
    onAftereRate(rate) {
      alert(rate);
      debugger;
    },
  },
};
</script>
<style lang="less" scoped>
.tb-link {
  margin: 5px;
}
</style>
