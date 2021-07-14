<!--
 * @Author: your name
 * @Date: 2021-07-02 17:26:31
 * @LastEditTime: 2021-07-03 15:22:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/examples/views/ComponentsLibrary/Others/Popover.vue
-->

<template>
  <div>
    <h2
      id="popover-qi-pao-tan-chuang"
      style='box-sizing: border-box; margin: 0px; padding: 10px 0px; font-size: 28px; font-weight: 400; color: rgb(31, 47, 61); border-bottom: 1px solid rgb(197, 217, 232); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#popover-qi-pao-tan-chuang" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;Popover 气泡弹窗
    </h2>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      气泡类型的弹窗,用于放置更多信息或询问流程等。
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
      气泡弹窗基本用法
    </p>
    <p>
      <br />
    </p>
    <Demo>
      <div slot="source">
        <div>
          <tb-popover trigger="hover" title="Title" content="content">
            <tb-button>Hover</tb-button>
          </tb-popover>
          <tb-popover trigger="click" title="Title" content="content">
            <tb-button>Click</tb-button>
          </tb-popover>
          <tb-popover trigger="focus" title="Title" content="content">
            <tb-button>Focus</tb-button>
          </tb-popover>
        </div>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html1">
        </code>
      </pre>
    </Demo>
    <h3
      id="duo-zhong-xuan-ting"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#duo-zhong-xuan-ting" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;多种悬停方式
    </h3>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      可以设置不同悬停方式
    </p>
    <p>
      <br />
    </p>
    <Demo>
      <div slot="source">
        <div style="width:450px;margin: auto;">
          <div class="top">
            <tb-popover title="Title" content="Top Left text" placement="top-start"> <tb-button>上左</tb-button>&nbsp;&nbsp; </tb-popover>
            <tb-popover title="Title" content="Top Center text" placement="top"> <tb-button>上边</tb-button>&nbsp;&nbsp; </tb-popover>
            <tb-popover title="Title" content="Top Right text" placement="top-end">
              <tb-button>上右</tb-button>
            </tb-popover>
          </div>
          <div class="center">
            <div class="center-left">
              <tb-popover title="Title" content="Left Top text" placement="left-start"> <tb-button>左上</tb-button> </tb-popover><br /><br />
              <tb-popover title="Title" content="Left Center text" placement="left"> <tb-button>左边</tb-button> </tb-popover><br /><br />
              <tb-popover title="Title" content="Left Bottom text" placement="left-end">
                <tb-button>左下</tb-button>
              </tb-popover>
            </div>
            <div class="center-right">
              <tb-popover title="Title" content="Right Top text" placement="right-start"> <tb-button>右上</tb-button> </tb-popover><br /><br />
              <tb-popover title="Title" content="Right Center text" placement="right"> <tb-button>右边</tb-button> </tb-popover><br /><br />
              <tb-popover title="Title" content="Right Bottom text" placement="right-end">
                <tb-button>右下</tb-button>
              </tb-popover>
            </div>
          </div>
          <div class="bottom">
            <tb-popover title="Title" content="Bottom Left text" placement="bottom-start"> <tb-button>下左</tb-button>&nbsp;&nbsp; </tb-popover>
            <tb-popover title="Title" content="Bottom Center text" placement="bottom"> <tb-button>下边</tb-button>&nbsp;&nbsp; </tb-popover>
            <tb-popover title="Title" content="Bottom Right text" placement="bottom-end">
              <tb-button>下右</tb-button>
            </tb-popover>
          </div>
        </div>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html2">
        </code>
      </pre>
    </Demo>
    <h3
      id="fu-ceng-nei-guan-bi"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#fu-ceng-nei-guan-bi" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;浮层内关闭
    </h3>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      带有关闭效果的浮层弹窗。
    </p>
    <p>
      <br />
    </p>
    <Demo>
      <div slot="source">
        <tb-popover v-model="visible">
          <a style="margin-left: 30px;color:blue;">Click</a>
          <div slot="title">标题slot</div>
          <div slot="content">
            <a @click="close">关闭</a>
          </div>
        </tb-popover>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html3">
        </code>
      </pre>
    </Demo>
    <h3
      id="geng-duo-nei-rong"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#geng-duo-nei-rong" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;更多内容
    </h3>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      内容很长的文本弹出框。
    </p>
    <p>
      <br />
    </p>

    <Demo>
      <div slot="source">
        <div>
          <tb-popover placement="top" width="200" word-wrap>
            <tb-button>长文本</tb-button>
            <div slot="content">
              <div>这是一段很长很长很长很长很长很长很长很长很长很长很长很长很长很长的描述</div>
            </div>
          </tb-popover>
          <tb-popover placement="right" width="300">
            <tb-button>更多内容</tb-button>
            <div slot="content">
              <div>这是自定义内容~这是自定义内容~这是自定义内容~这是自定义内容~</div>
              <div>这是自定义内容~这是自定义内容~这是自定义内容~这是自定义内容~</div>
            </div>
          </tb-popover>
        </div>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html4">
        </code>
      </pre>
    </Demo>
    <h3
      id="que-ren-qi-pao-kuang"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#que-ren-qi-pao-kuang" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;确认气泡框
    </h3>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      通过设置属性confirm开启确认框模式。确认框只会以 click 的形式激活，并且只会显示 title 的内容，忽略 content。
    </p>
    <p>
      <br />
    </p>

    <Demo>
      <div slot="source">
        <div >
          <tb-popover confirm title="警告:您确认删除此项数据吗?" @ok="ok" @cancel="cancel"> <tb-button type="danger" plain>删 除</tb-button> </tb-popover>&nbsp;&nbsp;
          <tb-popover confirm title="Are you sure delete this item?" ok-text="Yes" cancel-text="No" @ok="ok" @cancel="cancel"> <tb-button type="danger" plain>自定义文字</tb-button> </tb-popover>&nbsp;&nbsp;
          <tb-popover confirm icon-name="icon-task-filling" :icon-styles="{ color: '#f5222d' }" title="Are you sure delete this item?" @ok="ok" @cancel="cancel">
            <tb-button type="danger" plain>自定义图标</tb-button>
          </tb-popover>
        </div>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html5">
        </code>
      </pre>
    </Demo>
    <h3
      id="rowPopover"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#rowPopover" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;Popover props
    </h3>
    <p>
      <br />
    </p>

    <tb-table-eazy :rows="rowPopover" :cols="col"></tb-table-eazy>
    <h3
      id="rowPopoverEvent"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#rowPopoverEvent" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;Popover events
    </h3>
    <p>
      <br />
    </p>
    <tb-table-eazy :rows="rowPopoverEvent" :cols="colEvent"></tb-table-eazy>
    <h3
      id="rowPopoverSlot"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#rowPopoverSlot" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;Popover slots
    </h3>
    <p>
      <br />
    </p>
    <tb-table-eazy :rows="rowPopoverSlot" :cols="colSlot"></tb-table-eazy>
    <RightSmallNav :rightTitle="rightTitle" @goMeowPoint="goMeowPoint" />
  </div>
</template>

<script>
import useScroll from "../../../utils/mixins";
import RightSmallNav from "../../../components/RightSmallNav.vue";
export default {
  name: "Popover",
  components: { RightSmallNav },
  data() {
    return {
      //   定义当前传递过来的数据是所有类型的数据
      rightTitle: [
        { title: "Popover 气泡弹窗", id: "popover-qi-pao-tan-chuang" },
        { title: "基础用法", id: "ji-chu-yong-fa" },
        { title: "多种悬停方式", id: "duo-zhong-xuan-ting" },
        { title: "浮层内关闭", id: "fu-ceng-nei-guan-bi" },
        { title: "更多内容", id: "geng-duo-nei-rong" },
        { title: "确认气泡框", id: "que-ren-qi-pao-kuang" },
        { title: "Popover props", id: "rowPopover" },
        { title: "Popover events", id: "rowPopoverEvent" },
        { title: "Popover slots", id: "rowPopoverSlot" },
      ],
      visible: false,
      rowPopover: [
        {
          Parameters: "trigger",
          Explain: "触发方式",
          Types: "string",
          Optional: "hover（悬停）click（点击）focus（聚焦）",
          Default: "click",
        },

        {
          Parameters: "title",
          Explain: "标题",
          Types: "string",
          Optional: "-",
          Default: "—",
        },
        {
          Parameters: "content",
          Explain: "显示的内容",
          Types: "string",
          Optional: "-",
          Default: "-",
        },
        {
          Parameters: "placement",
          Explain: "提示框出现的位置",
          Types: "string",
          Optional: "top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end",
          Default: "—",
        },
        {
          Parameters: "disabled",
          Explain: "是否禁用提示框",
          Types: "Boolean",
          Optional: "-",
          Default: "false",
        },
        {
          Parameters: "width",
          Explain: "宽度",
          Types: "string/number",
          Optional: "-",
          Default: "-",
        },
        {
          Parameters: "confirm",
          Explain: "是否开启对话框模式",
          Types: "Boolean",
          Optional: "-",
          Default: "false",
        },
        {
          Parameters: "appendToBody",
          Explain: "是否将弹层放置于 body 内",
          Types: "Boolean",
          Optional: "-",
          Default: "false",
        },
        {
          Parameters: "ok-text",
          Explain: "确定按钮文字",
          Types: "String",
          Optional: "-",
          Default: "确定",
        },
        {
          Parameters: "cancel-text",
          Explain: "取消按钮文字",
          Types: "String",
          Optional: "-",
          Default: "取消",
        },

        {
          Parameters: "popper-class",
          Explain: "给 Popover 设置 class-name，在使用 transfer appendToBody",
          Types: "string",
          Optional: "-",
          Default: "-",
        },
        {
          Parameters: "padding",
          Explain: "自定义间距值",
          Types: "string",
          Optional: "-",
          Default: "8px 16px",
        },
        {
          Parameters: "icon-name",
          Explain: "自定义图标名称",
          Types: "string",
          Optional: "-",
          Default: "-",
        },
        {
          Parameters: "icon-styles",
          Explain: "自定义图标样式",
          Types: "Object",
          Optional: "-",
          Default: "-",
        },
      ],
      rowPopoverEvent: [
        {
          Parameters: "popper-show",
          Explain: "在提示框显示时触发",
          Callback: "-",
        },
        {
          Parameters: "popper-hide",
          Explain: "在提示框消失时触发",
          Callback: "-",
        },
        {
          Parameters: "ok",
          Explain: "点击确定的回调 ,只在 confirm 模式下有效",
          Callback: "-",
        },
        {
          Parameters: "cancel",
          Explain: "点击取消的回调,只在 confirm 模式下有效",
          Callback: "-",
        },
      ],
      rowPopoverSlot: [
        {
          Parameters: "title",
          Explain: "提示框标题，定义此 slot 时，会覆盖 props title。",
        },
        {
          Parameters: "content",
          Explain: "提示框的内容，定义此 slot 时，会覆盖 props content。",
        },
      ],
      html1: `    <template>
        <div>
        <tb-popover trigger="hover" title="Title" content="content">
            <tb-button>Hover</tb-button>
        </tb-popover>
        <tb-popover trigger="click" title="Title" content="content">
            <tb-button>Click</tb-button>
        </tb-popover>
        <tb-popover trigger="focus" title="Title" content="content">
            <tb-button>Focus</tb-button>
        </tb-popover>
        </div>
    </template>
              `,
      html2: `    <template>
        <div class="top">
            <tb-popover title="Title" content="Top Left text" placement="top-start">
                <tb-button>上左</tb-button>&nbsp;&nbsp;
            </tb-popover>
            <tb-popover title="Title" content="Top Center text" placement="top">
                <tb-button>上边</tb-button>&nbsp;&nbsp;
            </tb-popover>
            <tb-popover title="Title" content="Top Right text" placement="top-end">
                <tb-button>上右</tb-button>
            </tb-popover>
        </div>
        <div class="center">
            <div class="center-left">
                <tb-popover title="Title" content="Left Top text" placement="left-start">
                    <tb-button>左上</tb-button> 
                </tb-popover><br><br>
                <tb-popover title="Title" content="Left Center text" placement="left">
                    <tb-button>左边</tb-button> 
                </tb-popover><br><br>
                <tb-popover title="Title" content="Left Bottom text" placement="left-end">
                    <tb-button>左下</tb-button>
                </tb-popover>
            </div>
            <div class="center-right">
                <tb-popover title="Title" content="Right Top text" placement="right-start">
                    <tb-button>右上</tb-button>
                </tb-popover><br><br>
                <tb-popover title="Title" content="Right Center text" placement="right">
                    <tb-button>右边</tb-button>
                </tb-popover><br><br>
                <tb-popover title="Title" content="Right Bottom text" placement="right-end">
                    <tb-button>右下</tb-button>
                </tb-popover>
            </div>
        </div>
        <div class="bottom">
            <tb-popover title="Title" content="Bottom Left text" placement="bottom-start">
                <tb-button>下左</tb-button>&nbsp;&nbsp;
            </tb-popover>
            <tb-popover title="Title" content="Bottom Center text" placement="bottom">
                <tb-button>下边</tb-button>&nbsp;&nbsp;
            </tb-popover>
            <tb-popover title="Title" content="Bottom Right text" placement="bottom-end">
                <tb-button>下右</tb-button>
            </tb-popover>
        </div>
    </template>
              `,
      html3: `    <template>   
        <tb-popover v-model="visible">
        <a style="margin-left: 30px;">Click</a>
        <div slot="title">标题slot</div>
        <div slot="content">
            <a @click="close">关闭</a>
        </div>
        </tb-popover>
    </template>
    <script>
        export default {
            data () {
                return {
                    visible: false
                }
            },
            methods: {
                close () {
                    this.visible = false;
                }
            }
        }
    <\/script>
              `,
      html4: `    <template>
        <div>
        <tb-popover placement="top" width="200" word-wrap>
            <tb-button>长文本</tb-button>
            <div slot="content">
            <div>这是一段很长很长很长很长很长很长很长很长很长很长很长很长很长很长的描述</div>
            </div>
        </tb-popover>
        <tb-popover placement="right" width="300">
            <tb-button>更多内容</tb-button>
            <div slot="content">
            <div>这是自定义内容~这是自定义内容~这是自定义内容~这是自定义内容~</div>
            <div>这是自定义内容~这是自定义内容~这是自定义内容~这是自定义内容~</div>
            </div>
        </tb-popover>
        </div>
    </template>
              `,
      html5: `    <template>
        <div style="padding-left:50px;">
        <tb-popover
            confirm
            title="确认删除此项吗?"
            @ok="ok"
            @cancel="cancel">
            <tb-button type="danger" plain>删 除</tb-button>
        </tb-popover>&nbsp;&nbsp;
        <tb-popover
            confirm
            title="Are you sure delete this item?"
            ok-text="Yes" cancel-text="No"
            @ok="ok"
            @cancel="cancel">
            <tb-button type="danger" plain>自定义文字</tb-button>
        </tb-popover>&nbsp;&nbsp;
        <tb-popover
            confirm icon-name="ios-trash" :icon-styles="{color:'#f5222d'}"
            title="Are you sure delete this item?"
            @ok="ok"
            @cancel="cancel">
            <tb-button type="danger" plain>自定义图标</tb-button>
        </tb-popover>
        </div>
    </template>
    <script>
        export default {
        methods: {
            ok () {
                this.$message('点击了确定');
            },
            cancel () {
                this.$message('点击了取消');
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
    ok() {
      this.$message("点击了确定");
    },
    cancel() {
      this.$message("点击了取消");
    },
    close() {
      this.visible = false;
    },
  },
};
</script>
<style lang="less" scoped>
.tb-button-box {
  margin-right: 20px;
}
.top,
.center,
.bottom {
  text-align: center;
  overflow: hidden;
}
.center-left {
  float: left;
}
.center-right {
  float: right;
}
[flex] {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}
</style>
