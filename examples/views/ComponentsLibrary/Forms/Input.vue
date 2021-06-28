<!--
 * @Author: your name
 * @Date: 2021-06-27 19:23:42
 * @LastEditTime: 2021-06-28 09:24:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/examples/views/ComponentsLibrary/Forms/Input.vue
-->

<template>
  <div>
    <h2
      id="input-shu-ru-kuang"
      style='box-sizing: border-box; margin: 0px; padding: 10px 0px; font-size: 28px; font-weight: 400; color: rgb(31, 47, 61); border-bottom: 1px solid rgb(197, 217, 232); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="https://wangbin3162.gitee.io/bin-ui/#input-shu-ru-kuang" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;Input 输入框
    </h2>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      基本表单组件，支持 input 和 textarea
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
      <div slot="source">
        <div style="margin-bottom: 10px;">输入的内容：{{ value }}</div>
        <tb-input v-model="value" placeholder="请输入一些文字..." class="input-item"></tb-input>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html1">
        </code>
      </pre>
    </Demo>
    <h3
      id="tu-biao-he-qing-kong"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="https://wangbin3162.gitee.io/bin-ui/#tu-biao-he-qing-kong" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;图标和清空
    </h3>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      设置 clearable 可以开启清空按钮,icon设置icon图标名称
    </p>
    <p>
      <br />
    </p>
    <Demo>
      <div slot="source">
        <div>
          <tb-input v-model="value" icon="icon-fabulous" class="input-item"></tb-input>
          <tb-input v-model="value1" clearable class="input-item"></tb-input>
        </div>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html2">
        </code>
      </pre>
    </Demo>
    <h3
      id="qian-zhi-hou-zhui"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="https://wangbin3162.gitee.io/bin-ui/#qian-zhi-hou-zhui" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;前置后缀
    </h3>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      提供两种方式来进行插入图标
    </p>
    <p>
      <br />
    </p>
    <Demo>
      <div slot="source">
        <div>
          Props：
          <tb-input prefix="icon-user" placeholder="Enter name" style="width: auto"></tb-input>
          <tb-input suffix="icon-search" placeholder="Enter text" style="width: auto"></tb-input>
        </div>
        <div style="margin-top: 6px">
          Slots：
          <tb-input placeholder="Enter name" style="width: auto">
            <i class="iconfont icon-user" slot="prefix"></i>
          </tb-input>
          <tb-input placeholder="Enter text" style="width: auto">
            <i class="iconfont icon-search" slot="suffix"></i>
          </tb-input>
        </div>
        <div style="margin-top: 6px">
          prepend/append：
          <tb-input placeholder="Enter text" style="width: auto">
            <template #prepend>
              <tb-button>prepend</tb-button>
            </template>
          </tb-input>
          &nbsp;
          <tb-input placeholder="Enter name" style="width: auto">
            <template #append>
              <tb-button>append</tb-button>
            </template>
          </tb-input>
        </div>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html3">
        </code>
      </pre>
    </Demo>
    <h3
      id="she-zhi-search"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#she-zhi-search" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;设置search
    </h3>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      可以设置查询和禁用状态
    </p>
    <p>
      <br />
    </p>

    <Demo>
      <div slot="source">
        <div>
          <tb-input search placeholder="Enter something..." class="input-item"></tb-input>
          <tb-input disabled placeholder="Enter something..." class="input-item"></tb-input>
        </div>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html4">
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
      提供额外3种尺寸进行配置 medium small 或 mini三种尺寸
    </p>
    <p>
      <br />
    </p>

    <Demo>
      <div slot="source">
        <div>
          <tb-row :gutter="10">
            <tb-col span="8">
              <tb-input size="medium" clearable prefix="icon-user" placeholder="medium input"></tb-input>
            </tb-col>
            <tb-col span="8">
              <tb-input size="small" clearable prefix="icon-user" placeholder="small input"></tb-input>
            </tb-col>
            <tb-col span="8">
              <tb-input size="mini" clearable prefix="icon-user" placeholder="mini input"></tb-input>
            </tb-col>
          </tb-row>
        </div>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html5">
        </code>
      </pre>
    </Demo>
    <h3
      id="she-zhi-textarea"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#she-zhi-textarea" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;设置textarea
    </h3>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      可以设置 type="textarea"开启文本域模式
    </p>
    <p>
      <br />
    </p>

    <Demo>
      <div slot="source">
        <div flex="box:mean">
          <div class="input-item">
            <tb-input type="textarea" :autosize="{ minRows: 2, maxRows: 6 }" placeholder="自动大小，可拖动，最大行数6"></tb-input>
          </div>
          <div class="input-item">
            <tb-input type="textarea" :rows="4" placeholder="禁用拖动，默认4行" no-resize></tb-input>
          </div>
        </div>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html6">
        </code>
      </pre>
    </Demo>
    <h3
      id="zi-shu-tong-ji"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#zi-shu-tong-ji" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;字数统计
    </h3>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      可以设置 show-word-count 开启字数统计
    </p>
    <p>
      <br />
    </p>

    <Demo>
      <div slot="source">
        <div flex="box:mean">
          <div class="input-item">
            <tb-input :maxlength="10" show-word-count></tb-input>
          </div>
          <div class="input-item">
            <tb-input type="textarea" :rows="2" no-resize show-word-count></tb-input>
          </div>
        </div>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html7">
        </code>
      </pre>
    </Demo>
    <h3
      id="rowInput"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#rowInput" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;Input props
    </h3>
    <p>
      <br />
    </p>

    <tb-table-eazy :rows="rowInput" :cols="col"></tb-table-eazy>
    <h3
      id="rowInputEvent"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#rowInputEvent" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;Input events
    </h3>
    <p>
      <br />
    </p>
    <tb-table-eazy :rows="rowInputEvent" :cols="colEvent"></tb-table-eazy>
    <h3
      id="rowInputSlot"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#rowInputSlot" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;Input slots
    </h3>
    <p>
      <br />
    </p>
    <tb-table-eazy :rows="rowInputSlot" :cols="colSlot"></tb-table-eazy>
    <h3
      id="rowInputMethod"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#rowInputMethod" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;Input Methods
    </h3>
    <p>
      <br />
    </p>
    <tb-table-eazy :rows="rowInputMethod" :cols="colEvent"></tb-table-eazy>
    <RightSmallNav :rightTitle="rightTitle" @goMeowPoint="goMeowPoint" />
  </div>
</template>

<script>
import useScroll from "../../../utils/mixins";
import RightSmallNav from "../../../components/RightSmallNav.vue";
export default {
  name: "Input",
  components: { RightSmallNav },
  data() {
    return {
      //   定义当前传递过来的数据是所有类型的数据
      rightTitle: [
        { title: "Input 输入框", id: "input-shu-ru-kuang" },
        { title: "基础用法", id: "ji-chu-yong-fa" },
        { title: "前置后缀", id: "qian-zhi-hou-zhui" },
        { title: "设置 search", id: "she-zhi-search" },
        { title: "不同尺寸", id: "bu-tong-chi-cun" },
        { title: "设置 textarea", id: "she-zhi-textarea" },
        { title: "字数统计", id: "zi-shu-tong-ji" },
        { title: "Input props", id: "rowInput" },
        { title: "Input events", id: "rowInputEvent" },
        { title: "Input slots", id: "rowInputSlot" },
        { title: "Input methods", id: "rowInputMethod" },
      ],
      value: "",
      value1: "",
      rowInput: [
        {
          Parameters: "type",
          Explain: "输入框类型",
          Types: "string",
          Optional: "text、password、textarea、url、email、date、number、tel",
          Default: "-",
        },

        {
          Parameters: "value",
          Explain: "绑定的值，可使用 v-model 双向绑定",
          Types: "String / Number",
          Optional: "-",
          Default: "—",
        },
        {
          Parameters: "size",
          Explain: "输入框尺寸",
          Types: "medium、small、mini",
          Optional: "-",
          Default: "small",
        },
        {
          Parameters: "placeholder",
          Explain: "占位文本",
          Types: "string",
          Optional: "-",
          Default: "-",
        },
        {
          Parameters: "clearable",
          Explain: "是否显示清空按钮",
          Types: "boolean",
          Optional: "-",
          Default: "false",
        },
        {
          Parameters: "disabled",
          Explain: "禁用状态",
          Types: "boolean",
          Optional: "-",
          Default: "false",
        },
        {
          Parameters: "readonly",
          Explain: "只读模式",
          Types: "boolean",
          Optional: "-",
          Default: "false",
        },
        {
          Parameters: "maxlength",
          Explain: "最大输入长度",
          Types: "number",
          Optional: "-",
          Default: "-",
        },
        {
          Parameters: "icon",
          Explain: "输入框尾部图标，仅在 text 类型下有效",
          Types: "string",
          Optional: "-",
          Default: "-",
        },
        {
          Parameters: "prefix",
          Explain: "输入框头部图标",
          Types: "string",
          Optional: "-",
          Default: "-",
        },

        {
          Parameters: "suffix",
          Explain: "输入框尾部图标",
          Types: "string",
          Optional: "-",
          Default: "-",
        },
        {
          Parameters: "search",
          Explain: "是否显示为搜索型输入框",
          Types: "boolean",
          Optional: "-",
          Default: "false",
        },
        {
          Parameters: "rows",
          Explain: "文本域默认行数，仅在 textarea 类型下有效",
          Types: "number",
          Optional: "-",
          Default: "2",
        },
        {
          Parameters: "autosize",
          Explain: "自适应内容高度，仅在 textarea 类型下有效，可传入对象，如 { minRows: 2, maxRows: 6 }",
          Types: "Boolean/Object",
          Optional: "-",
          Default: "false",
        },
        {
          Parameters: "number",
          Explain: "将用户的输入转换为 Number 类型",
          Types: "Boolean",
          Optional: "-",
          Default: "false",
        },
        {
          Parameters: "autofocus",
          Explain: "自动获取焦点",
          Types: "Boolean",
          Optional: "-",
          Default: "false",
        },
        {
          Parameters: "autocomplete",
          Explain: "原生的自动完成功能，可选值为 off 和 on",
          Types: "string",
          Optional: "-",
          Default: "off",
        },
        {
          Parameters: "element-id",
          Explain: "给表单元素设置 id，详见 Form 用法。",
          Types: "String",
          Optional: "-",
          Default: "-",
        },
        {
          Parameters: "wrap",
          Explain: "原生的 wrap 属性，可选值为 hard 和 soft，仅在 textarea 下生效",
          Types: "string",
          Optional: "-",
          Default: "soft",
        },
        {
          Parameters: "no-resize",
          Explain: "禁用文本域resize ，仅在 textarea 下生效",
          Types: "boolean",
          Optional: "-",
          Default: "false",
        },
        {
          Parameters: "show-word-count",
          Explain: "显示文本字数统计，仅在 textarea 下生效",
          Types: "boolean",
          Optional: "-",
          Default: "false",
        },
      ],
      rowInputEvent: [
        {
          Parameters: "enter",
          Explain: "按下回车键时触发",
          Callback: "-",
        },
        {
          Parameters: "click",
          Explain: "设置 icon 属性后，点击图标时触发",
          Callback: "-",
        },
        {
          Parameters: "change",
          Explain: "数据改变时触发",
          Callback: "event",
        },
        {
          Parameters: "focus",
          Explain: "输入框聚焦时触发",
          Callback: "-",
        },
        {
          Parameters: "blur",
          Explain: "输入框失去焦点时触发",
          Callback: "-",
        },
        {
          Parameters: "keyup",
          Explain: "原生的 keyup 事件",
          Callback: "event",
        },
        {
          Parameters: "keydown",
          Explain: "原生的 keydown 事件",
          Callback: "event",
        },
        {
          Parameters: "keypress",
          Explain: "原生的 keypress 事件",
          Callback: "event",
        },
        {
          Parameters: "search",
          Explain: "开启 search 时可用，点击搜索或按下回车键时触发",
          Callback: "value",
        },
        {
          Parameters: "clear",
          Explain: "开启 clearable 时可用，点击清空按钮时触发",
          Callback: "-",
        },
      ],
      rowInputSlot: [
        {
          Parameters: "prepend",
          Explain: "前置内容，仅在 text 类型下有效",
        },
        {
          Parameters: "append",
          Explain: "后置内容，仅在 text 类型下有效",
        },
        {
          Parameters: "prefix",
          Explain: "输入框头部图标",
        },
        {
          Parameters: "suffix",
          Explain: "输入框尾部图标",
        },
      ],
      rowInputMethod: [
        {
          Parameters: "focus",
          Explain: "手动聚焦输入框",
          Callback: "-",
        },
      ],
      html1: `    <template>
        <div>
            <div style="margin-bottom: 10px;">输入的内容：{{value}}</div>
            <tb-input v-model="value" placeholder="请输入一些文字..." class="input-item"></tb-input>
        </div>
    </template>
    <script>
        export default {
            data() {
            return {
                value: ''
            }
            }
        }
    <\/script>
              `,
      html2: `    <template>
        <div>
            <tb-input v-model="value" icon="logo-chrome" class="input-item"></tb-input>
            <tb-input v-model="value1" clearable class="input-item"></tb-input>
        </div>
    </template>
    <script>
        export default {
            data() {
            return {
                value: '',
                value1: '我可以被清空',
            }
            }
        }
    <\/script>
              `,
      html3: `    <template>
        <div>
            Props：
            <tb-input prefix="icon-user" placeholder="Enter name" style="width: auto"></tb-input>
            <tb-input suffix="icon-search" placeholder="Enter text" style="width: auto"></tb-input>
        </div>
        <div style="margin-top: 6px">
            Slots：
          <tb-input placeholder="Enter name" style="width: auto">
            <i class="iconfont icon-user" slot="prefix"></i>
          </tb-input>
          <tb-input placeholder="Enter text" style="width: auto">
            <i class="iconfont icon-search" slot="suffix"></i>
          </tb-input>
        </div>
        <div style="margin-top: 6px">
            prepend/append：
            <tb-input placeholder="Enter text" style="width: auto">
            <template #prepend>
                <tb-button>prepend</tb-button>
            </template>
            </tb-input>
            <tb-input placeholder="Enter name" style="width: auto">
            <template #append>
                <tb-button>append</tb-button>
            </template>
            </tb-input>
        </div>
    </template>
              `,
      html4: `    <template>
        <div>
            <tb-input search placeholder="Enter something..." class="input-item"></tb-input>
            <tb-input disabled placeholder="Enter something..." class="input-item"></tb-input>
        </div>
    </template>
              `,
      html5: `    <template>
        <tb-row :gutter="10">
            <tb-col span="8">
                <tb-input size="medium" clearable prefix="icon-user" placeholder="medium input"></tb-input>
            </tb-col>
            <tb-col span="8">
                <tb-input size="small" clearable prefix="icon-user" placeholder="small input"></tb-input>
            </tb-col>
            <tb-col span="8">
                <tb-input size="mini" clearable prefix="icon-user" placeholder="mini input"></tb-input>
            </tb-col>
        </tb-row>
    </template>
              `,
      html6: `    <template>
        <div flex="box:mean">
            <div class="input-item">
                <tb-input type="textarea" :autosize="{minRows:2,maxRows:6}" placeholder="自动大小，可拖动，最大行数6"></tb-input>
            </div>
            <div class="input-item">
                <tb-input type="textarea" :rows="4" placeholder="禁用拖动，默认4行" no-resize></tb-input>
            </div>
        </div>
    </template>
              `,
      html7: `    <template>
        <div flex="box:mean">
            <div class="input-item">
                <tb-input :maxlength="10" show-word-count></tb-input>
            </div>
            <div class="input-item">
                <tb-input type="textarea" :rows="2" no-resize show-word-count></tb-input>
            </div>
        </div>
    </template>
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
