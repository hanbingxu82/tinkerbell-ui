<!--
 * @Author: your name
 * @Date: 2021-07-02 17:27:27
 * @LastEditTime: 2021-07-04 16:16:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/examples/views/ComponentsLibrary/Others/Drawer.vue
-->
<template>
  <div>
    <h2
      id="drawer-chou-ti"
      style='box-sizing: border-box; margin: 0px; padding: 10px 0px; font-size: 28px; font-weight: 400; color: rgb(31, 47, 61); border-bottom: 1px solid rgb(197, 217, 232); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#drawer-chou-ti" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;Drawer 抽屉
    </h2>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      简易的抽屉用于展示或者快速弹出,可以根据是信息展示还是创建动态插入
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
      最简单的使用方法，通过控制属性value来显示 / 隐藏对话框。
    </p>
    <p>
      <br />
    </p>
    <Demo>
      <div slot="source">
        <tb-button type="primary" @click="value1 = true">open</tb-button>
        <tb-drawer v-model="value1" title="抽屉标题" append-to-body :closable="false">
          <p>我是抽屉内容</p>
        </tb-drawer>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html1">
        </code>
      </pre>
    </Demo>
    <h3
      id="zuo-ce-da-kai"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#zuo-ce-da-kai" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;左侧打开
    </h3>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      设置 placement="left"为左侧打开
    </p>
    <p>
      <br />
    </p>
    <Demo>
      <div slot="source">
        <tb-button type="primary" @click="value2 = true">左侧打开</tb-button>
        <tb-drawer v-model="value2" title="抽屉标题" placement="left" append-to-body width="500px">
          <p>我是左侧的抽屉</p>
        </tb-drawer>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html2">
        </code>
      </pre>
    </Demo>
    <h3
      id="inner-mo-shi"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#inner-mo-shi" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;inner 模式
    </h3>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      可以设置inner模式在某个容器内打开
    </p>
    <p>
      <br />
    </p>
    <Demo>
      <div slot="source">
        <div style="position:relative;height:400px;background: #eee;border:1px solid #eee;z-index: 2;">
          <tb-button type="primary" @click="valueInner = true">内部抽屉</tb-button>
          <tb-drawer v-model="valueInner" title="内部抽屉" inner :z-index="10">
            <p>我是内部的抽屉</p>
          </tb-drawer>
        </div>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html3">
        </code>
      </pre>
    </Demo>
    <h3
      id="xin-xi-liu-lan-kuang"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#xin-xi-liu-lan-kuang" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;信息预览框
    </h3>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      浏览个人信息的抽屉。
    </p>
    <p>
      <br />
    </p>

    <Demo>
      <div slot="source">
        <tb-button type="primary" @click="value3 = true">信息预览</tb-button>
        <tb-drawer v-model="value3" :closable="false" append-to-body width="640">
          <p :style="pStyle">用户信息</p>
          <p :style="pStyle">个人信息</p>
          <div class="demo-drawer-profile">
            <p flex="box:mean" class="mb-10"><span>名称: hanbingxu</span><span>手机号: +86 187312*****</span></p>
            <p flex="box:mean" class="mb-10"><span>城市: 天津市</span><span>区: 南开区</span></p>
            <p flex="box:mean" class="mb-10"><span>出生年月: 2000.08</span><span>职业: web前端</span></p>
            <p flex="box:mean" class="mb-10">
              个人主页:
              <a href="http://tinkerbell.top" target="_blank">http://tinkerbell.top</a>
            </p>
          </div>
          <tb-divider></tb-divider>
          <p :style="pStyle">公司</p>
          <div class="demo-drawer-profile">
            <p flex="box:mean" class="mb-10"><span>名称: xxxx有限公司</span><span>手机号: +86 187312*****</span></p>
            <p flex="box:mean" class="mb-10"><span>地址: 天津市xx区xx街道88号</span><span>电话: +86 187312*****</span></p>
          </div>
          <tb-divider></tb-divider>
          <p :style="pStyle">联系我们</p>
          <div class="demo-drawer-profile">
            <p flex="box:mean" class="mb-10"><span>Email: hbx831@126.com</span><span>手机号: +86 187312*****</span></p>
            <p class="mb-10">GitHub: <a href="https://github.com/hanbingxu82/tinkerbell-ui" target="_blank">https://github.com/hanbingxu82/tinkerbell-ui</a></p>
          </div>
        </tb-drawer>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html4">
        </code>
      </pre>
    </Demo>
    <h3
      id="bian-ji-chou-ti"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#bian-ji-chou-ti" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;编辑抽屉
    </h3>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      抽屉内放置表单。
    </p>
    <p>
      <br />
    </p>

    <Demo>
      <div slot="source">
        <tb-button type="primary" @click="value4 = true">编辑抽屉</tb-button>
        <tb-drawer v-model="value4" title="编辑对象" width="720" append-to-body :mask-closable="false">
          <tb-form :model="formInline" ref="form" label-position="top">
            <div flex="box:mean">
              <tb-form-item label="用户名" prop="name" class="mr-15">
                <tb-input v-model="formInline.name" placeholder="用户名"></tb-input>
              </tb-form-item>
              <tb-form-item label="邮箱" prop="mail">
                <tb-input v-model="formInline.mail" placeholder="邮箱"></tb-input>
              </tb-form-item>
            </div>
            <div flex="box:mean">
              <tb-form-item label="用户名" prop="name" class="mr-15">
                <tb-input v-model="formInline.name" placeholder="用户名"></tb-input>
              </tb-form-item>
              <tb-form-item label="邮箱" prop="mail">
                <tb-input v-model="formInline.mail" placeholder="邮箱"></tb-input>
              </tb-form-item>
            </div>
            <div flex="box:mean">
              <tb-form-item label="出生日期" prop="birthday" class="mr-15">
                <tb-date-picker type="date" v-model="formInline.birthday" placeholder="选择出生日期"></tb-date-picker>
              </tb-form-item>
              <tb-form-item label="时间" prop="time">
                <tb-time-picker v-model="formInline.time" placeholder="选择时间"></tb-time-picker>
              </tb-form-item>
            </div>
            <div flex="box:mean">
              <tb-form-item label="城市" prop="city" class="mr-15">
                <tb-select v-model="formInline.city" clearable>
                  <tb-option value="beijing" label="北京"></tb-option>
                  <tb-option value="shanghai" label="上海"></tb-option>
                  <tb-option value="xuzhou" label="徐州"></tb-option>
                </tb-select>
              </tb-form-item>
              <tb-form-item label="地址" prop="mail">
                <tb-input v-model="formInline.address" placeholder="地址"></tb-input>
              </tb-form-item>
            </div>
            <tb-form-item label="描述" prop="desc">
              <tb-input v-model="formInline.desc" type="textarea" :autosize="{ minRows: 2, maxRows: 5 }" placeholder="Enter something..."></tb-input>
            </tb-form-item>
          </tb-form>
          <div slot="footer">
            <tb-button @click="value4 = false">取 消</tb-button>
            <tb-button type="primary" @click="value4 = false">提 交</tb-button>
          </div>
        </tb-drawer>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html5">
        </code>
      </pre>
    </Demo>
    <h3
      id="qian-tao-chou-ti"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#qian-tao-chou-ti" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;嵌套抽屉
    </h3>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      抽屉可以互相嵌套，但一般不推荐这么使用避免层级过多影响用户交互
    </p>
    <p>
      <br />
    </p>
    <Demo>
      <div slot="source">
        <tb-button type="primary" @click="value5 = true">打开抽屉</tb-button>
        <tb-drawer title="一级抽屉" width="512" append-to-body :closable="false" v-model="value5">
          <tb-button @click="value6 = true" type="primary">打开二层抽屉</tb-button>
        </tb-drawer>
        <tb-drawer title="二级抽屉" :closable="false" v-model="value6" append-to-body>
          这是第二层抽屉
        </tb-drawer>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html6">
        </code>
      </pre>
    </Demo>
    <h3
      id="tuo-zhuai-chou-ti"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#tuo-zhuai-chou-ti" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;可拖拽宽度
    </h3>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      可以设置拖拽抽屉
    </p>
    <p>
      <br />
    </p>
    <Demo>
      <div slot="source">
        <tb-button type="primary" @click="value7 = true">open</tb-button>
        <tb-drawer v-model="value7" title="抽屉标题" append-to-body draggable>
          <p>我是抽屉内容</p>
        </tb-drawer>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html7">
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
      value1: false,
      value2: false,
      valueInner: false,
      value3: false,
      pStyle: {
        fontSize: "16px",
        color: "rgba(0,0,0,0.85)",
        lineHeight: "24px",
        marginBottom: "16px",
      },
      value4: false,
      formInline: {
        name: "",
        mail: "",
        birthday: "",
        time: "",
        city: "",
        address: "",
        desc: "",
      },
      value5: false,
      value6: false,
      value7: false,
      //   定义当前传递过来的数据是所有类型的数据
      rightTitle: [
        { title: "Popover 气泡弹窗", id: "drawer-chou-ti" },
        { title: "基础用法", id: "ji-chu-yong-fa" },
        { title: "左侧打开", id: "zuo-ce-da-kai" },
        { title: "inner 模式", id: "inner-mo-shi" },
        { title: "信息预览框", id: "xin-xi-liu-lan-kuang" },
        { title: "编辑抽屉", id: "bian-ji-chou-ti" },
        { title: "嵌套抽屉", id: "qian-tao-chou-ti" },
        { title: "可拖拽宽度", id: "tuo-zhuai-chou-ti" },
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
        <tb-button type="primary" @click="value1 = true">open</tb-button>
        <tb-drawer v-model="value1" title="抽屉标题" append-to-body :closable="false">
        <p>我是抽屉内容</p>
        </tb-drawer>
    </template>
    <script>
        export default {
        data () {
                return {
                value1:false
                }
        }
        }
    <\/script>
              `,
      html2: `    <template>
        <tb-button type="primary" @click="value2 = true">左侧打开</tb-button>
        <tb-drawer v-model="value2" title="抽屉标题" placement="left" append-to-body width="500px">
        <p>我是左侧的抽屉</p>
        </tb-drawer>
    </template>
    <script>
        export default {
        data () {
                return {
                value2:false
                }
            }
        }
    <\/script>
              `,
      html3: `    <template>
    <div style="position:relative;height:400px;background: #eee;border:1px solid #eee;z-index: 2;">
        <tb-button type="primary" @click="valueInner = true">内部抽屉</tb-button>
        <tb-drawer v-model="valueInner" title="内部抽屉" inner :z-index="10">
        <p>我是内部的抽屉</p>
        </tb-drawer>
    </div>
    </template>
    <script>
        export default {
        data () {
            return {
            valueInner:false
            }
        }
        }
    <\/script>
              `,
      html4: `    <template>
    <tb-button type="primary" @click="value3 = true">信息预览</tb-button>
        <tb-drawer v-model="value3" :closable="false" append-to-body width="640">
        <p :style="pStyle">用户信息</p>
        <p :style="pStyle">个人信息</p>
        <div class="demo-drawer-profile">
            <p flex="box:mean" class="mb-10">
            <span>名称: hanbingxu</span><span>手机号: +86 187312*****</span>
            </p>
            <p flex="box:mean" class="mb-10">
            <span>城市: 天津市</span><span>区: 南开区</span>
            </p>
            <p flex="box:mean" class="mb-10">
            <span>出生年月: 2000.08</span><span>职业: web前端</span>
            </p>
            <p flex="box:mean" class="mb-10">
            个人主页:
            <a href="http://tinkerbell.top" target="_blank">http://tinkerbell.top</a>
            </p>
        </div>
        <tb-divider></tb-divider>
        <p :style="pStyle">公司</p>
        <div class="demo-drawer-profile">
            <p flex="box:mean" class="mb-10">
            <span>名称: xxxx有限公司</span><span>手机号: +86 187312*****</span>
            </p>
            <p flex="box:mean" class="mb-10">
            <span>地址: 天津市xx区xx街道88号</span><span>电话: +86 187312*****</span>
            </p>
        </div>
        <tb-divider></tb-divider>
        <p :style="pStyle">联系我们</p>
        <div class="demo-drawer-profile">
            <p flex="box:mean" class="mb-10">
            <span>Email: hbx831@126.com</span><span>手机号: +86 187312*****</span>
            </p>
            <p class="mb-10">
            GitHub: <a href="https://github.com/hanbingxu82/tinkerbell-ui" target="_blank">https://github.com/hanbingxu82/tinkerbell-ui</a>
            </p>
        </div>
        </tb-drawer>
    </template>
    <script>
        export default {
        data () {
            return {
            value3:false,
            pStyle: {
                fontSize: '16px',
                color: 'rgba(0,0,0,0.85)',
                lineHeight: '24px',
                marginBottom: '16px'
            }
            }
            }
        }
    <\/script>
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
      html6: `    <template>
        <tb-button type="primary" @click="value5 = true">打开抽屉</tb-button>
        <tb-drawer title="一级抽屉" width="512" append-to-body :closable="false" v-model="value5">
            <tb-button @click="value6 = true" type="primary">打开二层抽屉</tb-button>
        </tb-drawer>
        <tb-drawer title="二级抽屉" :closable="false" v-model="value6" append-to-body >
            这是第二层抽屉
        </tb-drawer>
    </template>
    <script>
        export default {
        data () {
            return {
            value5:false,
            value6:false
            }
        }
        }
    <\/script>
        `,
      html7: `    <template>
        <tb-button type="primary" @click="value7 = true">open</tb-button>
        <tb-drawer v-model="value7" title="抽屉标题" append-to-body draggable>
        <p>我是抽屉内容</p>
        </tb-drawer>
    </template>
    <script>
        export default {
        data () {
            return {
            value7:false
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
.tb-button {
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
