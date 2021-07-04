<!--
 * @Author: your name
 * @Date: 2021-07-02 17:26:15
 * @LastEditTime: 2021-07-03 13:43:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/examples/views/ComponentsLibrary/Others/Modal.vue
-->

<template>
  <div>
    <h2
      id="modal-mo-tai-kuang"
      style='box-sizing: border-box; margin: 0px; padding: 10px 0px; font-size: 28px; font-weight: 400; color: rgb(31, 47, 61); border-bottom: 1px solid rgb(197, 217, 232); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#modal-mo-tai-kuang" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;Modal 模态框
    </h2>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      对话框/弹窗，在浮层中显示，引导用户进行相关操作。
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
        <tb-button type="primary" @click="modal1 = true">显示弹窗</tb-button>
        <tb-modal v-model="modal1" title="普通的模态框标题" @ok="$message('ok click')" @close="$message('close click', 'success')">
          <p>我是弹窗内容...</p>
          <p>我是弹窗内容...</p>
          <p>我是弹窗内容...</p>
        </tb-modal>
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
      <a href="#tu-biao-he-qing-kong" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;图标和清空
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
          <tb-button @click="modal2 = true">自定义页头页脚</tb-button>
          <tb-button @click="modal3 = true">不带标题栏和页脚</tb-button>
          <tb-button @click="modal4 = true">设置宽</tb-button>
          <tb-modal v-model="modal2">
            <p slot="header" style="color:#f60;text-align:center">
              <span>自定义页头</span>
            </p>
            <p>我是弹窗内容...</p>
            <p>我是弹窗内容...</p>
            <p>我是弹窗内容...</p>
            <div slot="footer">
              <tb-button type="danger" @click="$message('delete click', 'danger')">Delete</tb-button>
            </div>
          </tb-modal>
          <tb-modal v-model="modal3" footer-hide>
            <p>我是弹窗内容...</p>
            <p>我是弹窗内容...</p>
            <p>我是弹窗内容...</p>
          </tb-modal>
          <tb-modal v-model="modal4" title="自定义宽度" width="300">
            <p>自定义宽度，单位 px，默认 520px。 对话框的宽度是响应式的，当屏幕尺寸小于 768px 时，宽度会变为自动auto。</p>
          </tb-modal>
        </div>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html2">
        </code>
      </pre>
    </Demo>
    <h3
      id="zi-ding-yi-dong-hua"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#zi-ding-yi-dong-hua" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;自定义动画
    </h3>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      可以设置不同的弹窗动画，可以点击查看显示效果
    </p>
    <p>
      <br />
    </p>
    <Demo>
      <div slot="source">
        <tb-button @click="openModal('fade-down')">fade-down</tb-button>
        <tb-button @click="openModal('fade-in')">fade-in</tb-button>
        <tb-button @click="openModal('zoom-in')">zoom-in</tb-button>
        <tb-button @click="openModal('fade-transverse')">fade-transverse</tb-button>
        <tb-modal v-model="visible" title="不同的modal弹出动画" :transition-name="transitionName">
          <p>我是弹窗内容...</p>
          <p>我是弹窗内容...</p>
          <p>我是弹窗内容...</p>
        </tb-modal>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html3">
        </code>
      </pre>
    </Demo>
    <h3
      id="yi-bu-guan-bi"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#yi-bu-guan-bi" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;异步关闭
    </h3>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      给Modal添加属性loading后，点击确定按钮对话框不会自动消失，并显示 loading 状态， 需要手动关闭对话框，常用于表单提交。 这里建议自定义footer以达到更精确的按钮控制
    </p>
    <p>
      <br />
    </p>

    <Demo>
      <div slot="source">
        <div>
          <tb-button type="primary" @click="showModal">显示弹窗</tb-button>
          <tb-modal v-model="modal5" title="普通的模态框标题" :loading="loading" @ok="asyncOK">
            <tb-form :model="formInline" ref="form" :rules="ruleValidate" :label-width="80">
              <tb-form-item label="用户名" prop="name">
                <tb-input v-model="formInline.name" placeholder="请输入"></tb-input>
              </tb-form-item>
            </tb-form>
          </tb-modal>
        </div>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html4">
        </code>
      </pre>
    </Demo>
    <h3
      id="jin-yong-guan-bi"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#jin-yong-guan-bi" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;禁用关闭
    </h3>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      可以禁用关闭和遮罩层关闭。
    </p>
    <p>
      <br />
    </p>

    <Demo>
      <div slot="source">
        <tb-button @click="modal6 = true">禁用右上角关闭</tb-button>
        <tb-button @click="modal7 = true">禁用mask关闭</tb-button>
        <tb-modal v-model="modal6" title="普通的模态框标题" :closable="false">
          <p>禁用右上角关闭</p>
        </tb-modal>
        <tb-modal v-model="modal7" title="普通的模态框标题" :mask-closable="false">
          <p>禁用mask关闭</p>
        </tb-modal>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html5">
        </code>
      </pre>
    </Demo>
    <h3
      id="qian-tao"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#qian-tao" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;嵌套
    </h3>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      弹窗嵌套一般情况下不推荐嵌套，但也可以这么使用
    </p>
    <p>
      <br />
    </p>

    <Demo>
      <div slot="source">
        <div>
          <tb-button @click="modal10 = true">显示弹窗一</tb-button>
          <tb-button @click="modal12 = true">显示全屏弹窗</tb-button>
          <tb-button @click="openModal5">自定义弹窗</tb-button>
          <tb-modal v-model="modal10" title="弹窗一" footer-hide width="600">
            <p>我是弹窗内容...</p>
            <p>我是弹窗内容...</p>
            <p>我是弹窗内容...</p>
            <tb-button type="primary" @click="modal11 = true">打开嵌套弹窗</tb-button>
            <tb-modal v-model="modal11" title="嵌套弹窗">
              <p>我是弹窗内容...</p>
              <p>我是弹窗内容...</p>
              <p>我是弹窗内容...</p>
            </tb-modal>
          </tb-modal>
          <tb-modal v-model="modal12" title="全屏弹窗" footer-hide fullscreen>
            <p>我是弹窗内容...</p>
            <p>我是弹窗内容...</p>
            <p>我是弹窗内容...</p>
            <tb-button type="primary" @click="modal13 = true">打开嵌套弹窗</tb-button>
            <tb-modal v-model="modal13" title="全屏嵌套弹窗">
              <p>我是弹窗内容...</p>
              <p>我是弹窗内容...</p>
              <p>我是弹窗内容...</p>
            </tb-modal>
          </tb-modal>

          <transition name="move-right">
            <div
              v-show="modal14"
              style="
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          box-sizing: border-box;
          z-index: 1000;
          background-color: #fff;"
            >
              自定义弹窗内容
              <tb-button @click="closeModal5">关闭自定义弹窗</tb-button>
              <tb-button type="primary" @click="modal4 = true">打开嵌套弹窗</tb-button>
              <tb-modal v-model="modal4" title="全屏嵌套弹窗" stop-remove-scroll>
                <p>我是弹窗内容...</p>
                <p>我是弹窗内容...</p>
                <p>我是弹窗内容...</p>
              </tb-modal>
            </div>
          </transition>
        </div>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html6">
        </code>
      </pre>
    </Demo>
    <h3
      id="zi-ding-yi-wei-zhi"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#zi-ding-yi-wei-zhi" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;自定义位置
    </h3>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      可以自定义对话框的位置。
    </p>
    <p>
      <br />
    </p>

    <Demo>
      <div slot="source">
        <tb-button @click="modal8 = true">距离顶部200px</tb-button>
        <tb-button @click="modal9 = true">垂直居中</tb-button>
        <tb-modal v-model="modal8" title="距离顶部" :styles="{ top: '200px' }">
          <p>距离顶部200px</p>
        </tb-modal>
        <tb-modal v-model="modal9" title="垂直居中" class-name="vertical-center-modal">
          <p>垂直居中的模态框</p>
        </tb-modal>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html7">
        </code>
      </pre>
    </Demo>
    <h3
      id="rowModal"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#rowModal" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;Modal props
    </h3>
    <p>
      <br />
    </p>

    <tb-table-eazy :rows="rowModal" :cols="col"></tb-table-eazy>
    <h3
      id="rowModalEvent"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#rowModalEvent" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;Modal events
    </h3>
    <p>
      <br />
    </p>
    <tb-table-eazy :rows="rowModalEvent" :cols="colEvent"></tb-table-eazy>
    <h3
      id="rowModalSlot"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#rowModalSlot" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;Modal slots
    </h3>
    <p>
      <br />
    </p>
    <tb-table-eazy :rows="rowModalSlot" :cols="colSlot"></tb-table-eazy>
    <RightSmallNav :rightTitle="rightTitle" @goMeowPoint="goMeowPoint" />
  </div>
</template>

<script>
import useScroll from "../../../utils/mixins";
import RightSmallNav from "../../../components/RightSmallNav.vue";
export default {
  name: "Modal",
  components: { RightSmallNav },
  data() {
    return {
      //   定义当前传递过来的数据是所有类型的数据
      rightTitle: [
        { title: "Modal 模态框", id: "modal-mo-tai-kuang" },
        { title: "基础用法", id: "ji-chu-yong-fa" },
        { title: "自定义动画", id: "zi-ding-yi-dong-hua" },
        { title: "异步关闭", id: "yi-bu-guan-bi" },
        { title: "禁用关闭", id: "jin-yong-guan-bi" },
        { title: "嵌套", id: "qian-tao" },
        { title: "自定义位置", id: "zi-ding-yi-wei-zhi" },
        { title: "Modal props", id: "rowModal" },
        { title: "Modal events", id: "rowModalEvent" },
        { title: "Modal slots", id: "rowModalSlot" },
      ],
      modal1: false,
      modal2: false,
      modal3: false,
      modal4: false,
      modal5: false,
      modal6: false,
      modal7: false,
      modal8: false,
      modal9: false,
      modal10: false,
      modal11: false,
      modal12: false,
      modal13: false,
      modal14: false,
      loading: true,
      formInline: {
        name: "",
      },
      ruleValidate: {
        name: [{ required: true, message: "用户名不能为空", trigger: "blur" }],
      },
      visible: false,
      transitionName: "",
      rowModal: [
        {
          Parameters: "value",
          Explain: "是否显示，可使用 v-model 双向绑定数据。",
          Types: "Boolean",
          Optional: "-",
          Default: "false",
        },

        {
          Parameters: "title",
          Explain: "标题，如果使用 slot 自定义了页头，则 title 无效",
          Types: "String",
          Optional: "-",
          Default: "—",
        },
        {
          Parameters: "closable",
          Explain: "右上角的关闭按钮",
          Types: "Boolean",
          Optional: "-",
          Default: "true",
        },
        {
          Parameters: "mask-closable",
          Explain: "是否允许点击遮罩层关闭",
          Types: "Boolean",
          Optional: "-",
          Default: "true",
        },
        {
          Parameters: "loading",
          Explain: "确定按钮时，确定按钮是否显示 loading 状态，开启则需手动设置value来关闭对话框",
          Types: "Boolean",
          Optional: "-",
          Default: "false",
        },
        {
          Parameters: "fullscreen",
          Explain: "是否全屏显示",
          Types: "Boolean",
          Optional: "-",
          Default: "false",
        },
        {
          Parameters: "draggable",
          Explain: "是否可以拖拽移动",
          Types: "Boolean",
          Optional: "-",
          Default: "false",
        },
        {
          Parameters: "mask",
          Explain: "是否显示遮罩层，开启 draggable 时，强制不显示",
          Types: "Boolean",
          Optional: "-",
          Default: "true",
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
          Parameters: "width",
          Explain: "对话框宽度",
          Types: "Number/ String",
          Optional: "-",
          Default: "520",
        },
        {
          Parameters: "footer-hide",
          Explain: "不显示底部",
          Types: "Boolean",
          Optional: "-",
          Default: "false",
        },
        {
          Parameters: "styles",
          Explain: "设置浮层样式，调整浮层位置等",
          Types: "Object",
          Optional: "-",
          Default: "-",
        },
        {
          Parameters: "body-styles",
          Explain: "设置body的样式,多用于设置自定义内边距",
          Types: "Object",
          Optional: "-",
          Default: "-",
        },
        {
          Parameters: "class-name",
          Explain: "设置对话框容器的类名",
          Types: "String",
          Optional: "-",
          Default: "-",
        },
        {
          Parameters: "z-index",
          Explain: "层级",
          Types: "Number",
          Optional: "-",
          Default: "2000",
        },
        {
          Parameters: "append-to-body",
          Explain: "是否将对话框放置于 body 内",
          Types: "Boolean",
          Optional: "-",
          Default: "false",
        },
        {
          Parameters: "stop-remove-scroll",
          Explain: "是否阻止模态窗释放body滚动，多应用于多层嵌套",
          Types: "Boolean",
          Optional: "-",
          Default: "false",
        },
        {
          Parameters: "transition-name",
          Explain: "自定义动画名称，默认的modal-fade动画会自动追踪鼠标点击位置",
          Types: "String",
          Optional: "-",
          Default: "modal-fade",
        },
      ],
      rowModalEvent: [
        {
          Parameters: "ok",
          Explain: "点击确定的回调",
          Callback: "-",
        },
        {
          Parameters: "open",
          Explain: "modal打开回调",
          Callback: "-",
        },
        {
          Parameters: "opened",
          Explain: "打开动画完成回调",
          Callback: "event",
        },
        {
          Parameters: "close",
          Explain: "modal关闭回调",
          Callback: "-",
        },
        {
          Parameters: "closed",
          Explain: "关闭动画结束回调",
          Callback: "-",
        },
        {
          Parameters: "visible-change",
          Explain: "显示状态发生变化时触发",
          Callback: "true / false",
        },
      ],
      rowModalSlot: [
        {
          Parameters: "header",
          Explain: "自定义页头",
        },
        {
          Parameters: "footer",
          Explain: "自定义页脚内容",
        },
        {
          Parameters: "close",
          Explain: "自定义右上角关闭内容",
        },
      ],
      html1: `    <template>
        <tb-button type="primary" @click="modal1 = true">显示弹窗</tb-button>
        <tb-modal v-model="modal1" title="普通的模态框标题"
                @ok="$message('ok click')" @close="$message('close click','success')">
            <p>我是弹窗内容...</p>
            <p>我是弹窗内容...</p>
            <p>我是弹窗内容...</p>
        </tb-modal>
    </template>
    <script>
        export default {
            data() {
            return {
                modal1: false
            }
            }
        }
    <\/script>
              `,
      html2: `    <template>
        <tb-button @click="modal2 = true">自定义页头页脚</tb-button>
        <tb-button @click="modal3 = true">不带标题栏和页脚</tb-button>
        <tb-button @click="modal4 = true">设置宽</tb-button>
        <tb-modal v-model="modal2">
            <p slot="header" style="color:#f60;text-align:center">
            <span>自定义页头</span>
            </p>
            <p>我是弹窗内容...</p>
            <p>我是弹窗内容...</p>
            <p>我是弹窗内容...</p>
            <div slot="footer">
            <tb-button type="danger" @click="$message('delete click','danger')">Delete</tb-button>
            </div>
        </tb-modal>
        <tb-modal v-model="modal3" footer-hide>
            <p>我是弹窗内容...</p>
            <p>我是弹窗内容...</p>
            <p>我是弹窗内容...</p>
        </tb-modal>
        <tb-modal v-model="modal4"
                title="自定义宽度"
                width="300">
            <p> 自定义宽度，单位 px，默认 520px。
            对话框的宽度是响应式的，当屏幕尺寸小于 768px 时，宽度会变为自动auto。</p>
        </tb-modal>
    </template>
    <script>
        export default {
            data() {
            return {
                modal2: false,
                modal3: false,
                modal4: false
            }
            }
        }
    <\/script>
              `,
      html3: `    <template>
        <tb-button @click="openModal('fade-down')">fade-down</tb-button>
        <tb-button @click="openModal('fade-in')">fade-in</tb-button>
        <tb-button @click="openModal('zoom-in')">zoom-in</tb-button>
        <tb-button @click="openModal('fade-transverse')">fade-transverse</tb-button>
        <tb-modal v-model="visible" title="不同的modal弹出动画" :transition-name="transitionName">
            <p>我是弹窗内容...</p>
            <p>我是弹窗内容...</p>
            <p>我是弹窗内容...</p>
        </tb-modal>
    </template>
    <script>
        export default {
            data() {
            return {
                visible: false,
                transitionName:''
            }
            },
            methods: {
            openModal(name){
                this.transitionName = name
                this.visible = true
            }
            }
        }
    <\/script>
              `,
      html4: `    <template>
        <tb-button type="primary" @click="showModal">显示弹窗</tb-button>
        <tb-modal v-model="modal5" title="普通的模态框标题"
                :loading="loading"
                @ok="asyncOK">
            <tb-form :model="formInline" ref="form" :rules="ruleValidate" :label-width="80">
            <tb-form-item label="用户名" prop="name">
                <tb-input v-model="formInline.name" placeholder="请输入"></tb-input>
            </tb-form-item>
            </tb-form>
        </tb-modal>
    </template>
    <script>
        export default {
            data() {
            return {
                modal5: false,
                loading: true,
                formInline: {
                name: ''
                },
                ruleValidate: {
                name: [{ required: true, message: '用户名不能为空', trigger: 'blur' }]
                }
            }
            },
            methods: {
            showModal() {
                this.modal5 = true
                this.loading = true
                this.formInline.name = ''
                this.$nextTick(() => {
                this.$refs.form.resetFields();
                })
            },
            asyncOK() {
                this.$refs.form.validate((valid) => {
                if (valid) {
                    setTimeout(() => {
                    this.$message({ type: 'success', content: '表单提交成功' });
                    this.modal5 = false;
                    }, 2000);
                } else {
                    this.$message({ type: 'danger', content: '表单校验失败' });
                    this.loading = false
                    setTimeout(() => {
                    this.loading = true
                    }, 200);
                }
                })
            }
            }
        }
    <\/script>
              `,
      html5: `    <template>
        <tb-button @click="modal6 = true">禁用右上角关闭</tb-button>
        <tb-button @click="modal7 = true">禁用mask关闭</tb-button>
        <tb-modal v-model="modal6" title="普通的模态框标题" :closable="false">
            <p>禁用右上角关闭</p>
        </tb-modal>
        <tb-modal v-model="modal7" title="普通的模态框标题" :mask-closable="false">
            <p>禁用mask关闭</p>
        </tb-modal>
    </template>
    <script>
        export default {
            data() {
            return {
                modal6: false,
                modal7: false
            }
            }
        }
    <\/script>
              `,
      html6: `    <template>
        <div>
            <tb-button @click="modal1 = true">显示弹窗一</tb-button>
            <tb-button @click="modal3 = true">显示全屏弹窗</tb-button>
            <tb-button @click="openModal5">自定义弹窗</tb-button>
            <tb-modal v-model="modal1" title="弹窗一" footer-hide width="600">
            <p>我是弹窗内容...</p>
            <p>我是弹窗内容...</p>
            <p>我是弹窗内容...</p>
            <tb-button type="primary" @click="modal2 = true">打开嵌套弹窗</tb-button>
            <tb-modal v-model="modal2" title="嵌套弹窗">
                <p>我是弹窗内容...</p>
                <p>我是弹窗内容...</p>
                <p>我是弹窗内容...</p>
            </tb-modal>
            </tb-modal>
            <tb-modal v-model="modal3" title="全屏弹窗" footer-hide fullscreen>
            <p>我是弹窗内容...</p>
            <p>我是弹窗内容...</p>
            <p>我是弹窗内容...</p>
            <tb-button type="primary" @click="modal4 = true">打开嵌套弹窗</tb-button>
            <tb-modal v-model="modal4" title="全屏嵌套弹窗">
                <p>我是弹窗内容...</p>
                <p>我是弹窗内容...</p>
                <p>我是弹窗内容...</p>
            </tb-modal>
            </tb-modal>

            <transition name="move-right">
            <div v-show="modal5"
                style="
                position: fixed;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                box-sizing: border-box;
                z-index: 1000;
                background-color: #fff;">
                自定义弹窗内容
                <tb-button @click="closeModal5">关闭自定义弹窗</tb-button>
                <tb-button type="primary" @click="modal4 = true">打开嵌套弹窗</tb-button>
                <tb-modal v-model="modal4" title="全屏嵌套弹窗" stop-remove-scroll>
                <p>我是弹窗内容...</p>
                <p>我是弹窗内容...</p>
                <p>我是弹窗内容...</p>
                </tb-modal>
            </div>
            </transition>
        </div>
    </template>
    <script>
        export default {
            data() {
            return {
                modal1: false,
                modal2: false,
                modal3: false,
                modal4: false,
                modal5: false
            }
            },
            methods: {
            openModal5() {
                this.modal5 = true
                // 模拟移除滚动条
                document.body.style.paddingRight = '15px'
                document.body.style.overflow = 'hidden'
            },
            closeModal5() {
                this.modal5 = false
                this.timer = setTimeout(() => {
                // 添加滚动条
                document.body.style.paddingRight = ''
                document.body.style.overflow = ''
                }, 300)
            }
            }
        }
    <\/script>
              `,
      html7: `    <template>
        <tb-button @click="modal8 = true">距离顶部200px</tb-button>
        <tb-button @click="modal9 = true">垂直居中</tb-button>
        <tb-modal v-model="modal8" title="距离顶部" :styles="{top: '200px'}">
            <p>距离顶部200px</p>
        </tb-modal>
        <tb-modal v-model="modal9" title="垂直居中" class-name="vertical-center-modal">
            <p>垂直居中的模态框</p>
        </tb-modal>
    </template>
    <script>
        export default {
            data() {
            return {
                modal8: false,
                modal9: false
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
    showModal() {
      this.modal5 = true;
      this.loading = true;
      this.formInline.name = "";
      this.$nextTick(() => {
        this.$refs.form.resetFields();
      });
    },
    asyncOK() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          setTimeout(() => {
            this.$message({ type: "success", content: "表单提交成功" });
            this.modal5 = false;
          }, 2000);
        } else {
          this.$message({ type: "danger", content: "表单校验失败" });
          this.loading = false;
          setTimeout(() => {
            this.loading = true;
          }, 200);
        }
      });
    },
    openModal(name) {
      this.transitionName = name;
      this.visible = true;
    },
    openModal5() {
      this.modal14 = true;
      // 模拟移除滚动条
      document.body.style.paddingRight = "15px";
      document.body.style.overflow = "hidden";
    },
    closeModal5() {
      this.modal14 = false;
      this.timer = setTimeout(() => {
        // 添加滚动条
        document.body.style.paddingRight = "";
        document.body.style.overflow = "";
      }, 300);
    },
  },
};
</script>
<style lang="less" scoped>
.tb-button {
  margin-right: 20px;
}
[flex] {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}
</style>
