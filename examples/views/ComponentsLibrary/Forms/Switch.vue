<!--
 * @Author: your name
 * @Date: 2021-06-28 15:45:46
 * @LastEditTime: 2021-06-29 13:06:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/examples/views/ComponentsLibrary/Forms/Switch.vue
-->

<template>
  <div>
    <h2
      id="link-an-niu"
      style='box-sizing: border-box; margin: 0px; padding: 10px 0px; font-size: 28px; font-weight: 400; color: rgb(31, 47, 61); border-bottom: 1px solid rgb(197, 217, 232); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#link-an-niu" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;Switch 开关
    </h2>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      表示两种相互对立的状态间的切换，多用于触发「开/关」。
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
      基础的开关用法。
    </p>
    <p>
      <br />
    </p>
    <Demo>
      <div slot="source">
        <tb-switch @change="change" v-model="value" checked-text="开" unchecked-text="关" />
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
      开关不可用状态。
    </p>
    <p>
      <br />
    </p>

    <Demo>
      <div slot="source">
        <tb-switch disabled v-model="value" />
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html2">
        </code>
      </pre>
    </Demo>

    <h3
      id="tu-biao-biao-qing"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#tu-biao-biao-qing" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;图标表情
    </h3>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      带图标表情的的开关。
    </p>
    <p>
      <br />
    </p>

    <Demo>
      <div slot="source">
        <div>
          <tb-switch v-model="value" checked-text="😁" unchecked-text="😞"> </tb-switch>
        </div>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html3">
        </code>
      </pre>
    </Demo>
    <h3
      id="rowSwitch"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#rowSwitch" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;Switch props
    </h3>
    <p>
      <br />
    </p>
    <tb-table-eazy :rows="rowSwitch" :cols="col"></tb-table-eazy>
    <RightSmallNav :rightTitle="rightTitle" @goMeowPoint="goMeowPoint" />
  </div>
</template>

<script>
import useScroll from "../../../utils/mixins";
import RightSmallNav from "../../../components/RightSmallNav.vue";
export default {
  name: "SwitchOn",
  components: { RightSmallNav },
  data() {
    return {
      value: false,
      rowSwitch: [
        {
          Parameters: "value",
          Explain: "切换按钮的初始状态",
          Types: "Boolean",
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
          Parameters: "reverse",
          Explain: "反向切换到从右到左",
          Types: "Boolean",
          Optional: "-",
          Default: "false",
        },
        {
          Parameters: "height",
          Explain: "拨入高度 px",
          Types: "String/Number",
          Optional: "-",
          Default: "25",
        },
        {
          Parameters: "checked-text",
          Explain: "选中切换后的可选文本",
          Types: "String",
          Optional: "-",
          Default: "-",
        },
        {
          Parameters: "unchecked-text",
          Explain: "取消选中时的可选文本x",
          Types: "String",
          Optional: "-",
          Default: "-",
        },
        {
          Parameters: "checked-bg",
          Explain: "选中切换后的背景色",
          Types: "String",
          Optional: "-",
          Default: "#1089ff",
        },
        {
          Parameters: "unchecked-bg",
          Explain: "未选中的背景色",
          Types: "String",
          Optional: "-",
          Default: "#939393",
        },
        {
          Parameters: "checked-color",
          Explain: "选中后的文字颜色",
          Types: "String",
          Optional: "-",
          Default: "#fff",
        },

        {
          Parameters: "unchecked-color",
          Explain: "未选中的文字颜色",
          Types: "String",
          Optional: "-",
          Default: "#fff",
        },
        {
          Parameters: "dot-color",
          Explain: "小圆点的颜色",
          Types: "String",
          Optional: "-",
          Default: "#fff",
        },
        {
          Parameters: "font-size",
          Explain: "文字大小",
          Types: "Number、String",
          Optional: "-",
          Default: "12",
        },
        {
          Parameters: "font-weight",
          Explain: "字型粗细",
          Types: "Number、String",
          Optional: "-",
          Default: "normal",
        },
      ],
      html1: `    <template>
        <div>
            <tb-switch @change="change" v-model="value" checked-text="开" unchecked-text="关" />
        </div>
    </template>
    <script>
    export default {
        data(){
            return{
                value:false
            }
        },
        methods: {
            change(data) {
                console.log(data);
            },
        }
        }
    <\/script>
              `,
      html2: `    <template>
        <div>
            <tb-switch  v-model="value" disabled />
        </div>
    </template>
    <script>
    export default {
        data(){
            return{
                value:false
            }
        }
        }
    <\/script>
              `,
      html3: `    <template>
        <div>
            <tb-switch v-model="value" checked-text="😁" unchecked-text="😞"> </tb-switch>
        </div>
    </template>
    <script>
    export default {
        data(){
            return{
                value:false
            }
        }
        }
    <\/script>
              `,
      html4: `    <div>
      <tb-link icon="iconfont icon-edit">编辑</tb-link>
      <tb-link>查看<i class="iconfont icon-browse"></i> </tb-link>
    </div>
              `,

      //   定义当前传递过来的数据是所有类型的数据
      rightTitle: [
        { title: "Switch 按钮", id: "link-an-niu" },
        { title: "基础用法", id: "ji-chu-yong-fa" },
        { title: "禁用状态", id: "jin-yong-zhuang-tai" },
        { title: "图标表情", id: "tu-biao-biao-qing" },
        { title: "Switch props", id: "rowSwitch" },
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
    change(data) {
      console.log(data);
    },
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
.tb-link {
  margin: 5px;
}
</style>
