<!--
 * @Author: your name
 * @Date: 2021-06-06 18:40:25
 * @LastEditTime: 2021-07-01 16:44:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/packages/tbModal/main.vue
-->
<template>
  <div class="tb-modal">
    <transition name="fade-in-linear">
      <div class="tb-modal-mask" :style="wrapStyles" v-show="visible" v-if="showMask" @click.stop="handleMask"></div>
    </transition>
    <div :class="wrapClasses" :style="wrapStyles" @click.stop="handleWrapClick">
      <transition :name="transitionName ? transitionName : 'modal-fade'" @after-enter="animationEnter" @after-leave="animationFinish">
        <div :class="classes" :style="mainStyles" v-show="visible">
          <div :class="contentClasses" ref="content" :style="contentStyles" @click="handleClickModal">
            <a :class="[prefixCls + '-close']" v-if="closable" @click="close">
              <slot name="close">
                <i class="iconfont  icon-close"></i>
              </slot>
            </a>
            <div :class="[prefixCls + '-header']" @mousedown="handleMoveStart" v-if="showHead">
              <slot name="header">
                <div :class="[prefixCls + '-header-inner']">{{ title }}</div>
              </slot>
            </div>
            <div :class="[prefixCls + '-body']" :style="bodyStyles">
              <slot></slot>
            </div>
            <div :class="[prefixCls + '-footer']" v-if="!footerHide">
              <slot name="footer">
                <tb-button @click="cancel">{{ cancelText }}</tb-button>
                <tb-button type="primary" :loading="buttonLoading" @click="ok">{{ okText }}</tb-button>
              </slot>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
let modalIndex = 0;
import { on, off, hasClass } from "../utils/dom";
import scrollbarMixin from "../mixins/scrollbar-mixin";

let mousePosition = null;
// ref: https://github.com/ant-design/ant-design/issues/15795
const getClickPosition = (e) => {
  mousePosition = {
    x: e.pageX,
    y: e.pageY,
  };
  // 100ms 内发生过点击事件，则从点击位置动画展示
  // 否则直接 zoom 展示
  // 这样可以兼容非点击方式展开
  // eslint-disable-next-line no-unused-vars
  setTimeout(() => (mousePosition = null), 100);
};

// 用来检查,当前环境是下addEventListener是否支持passive 属性;
let supportsPassive = false;
try {
  let opts = Object.defineProperty({}, "passive", {
    get() {
      supportsPassive = true;
    },
  });
  // 总的来说这里其实主要视为了触发上方的  Object.defineProperty
  window.addEventListener("testPassive", null, opts);
  window.removeEventListener("testPassive", null, opts);
} catch (e) {}

function addEventListenerWrap(target, eventType, cb, option) {
  if (target.addEventListener) {
    let opt = option;
    if (opt === undefined && supportsPassive && (eventType === "touchstart" || eventType === "touchmove" || eventType === "wheel")) {
      opt = { passive: false };
    }
    target.addEventListener(eventType, cb, opt);
  }
  return {
    remove: () => {
      if (target.removeEventListener) {
        target.removeEventListener(eventType, cb);
      }
    },
  };
}

// 只有点击事件支持从鼠标位置动画展开
if (typeof window !== "undefined" && window.document && window.document.documentElement) {
  addEventListenerWrap(document.documentElement, "click", getClickPosition, true);
}

function getScroll(w, top) {
  // 获取 滚动宽高
  let ret = w[`page${top ? "Y" : "X"}Offset`];
  const method = `scroll${top ? "Top" : "Left"}`;
  if (typeof ret !== "number") {
    const d = w.document;
    ret = d.documentElement[method];
    if (typeof ret !== "number") {
      ret = d.body[method];
    }
  }
  return ret;
}
// 样式新增对应的  兼容效果
function setTransformOrigin(node, value) {
  const style = node.style;
  ["Webkit", "Moz", "Ms", "ms"].forEach((prefix) => {
    style[`${prefix}TransformOrigin`] = value;
  });
  style[`transformOrigin`] = value;
}

function offset(el) {
  // 获取当前属性对于页面的集合位置（视窗）
  const rect = el.getBoundingClientRect();
  const pos = {
    left: rect.left,
    top: rect.top,
  };
  const doc = el.ownerDocument;
  const w = doc.defaultView || doc.parentWindow;
  pos.left += getScroll(w, false);
  pos.top += getScroll(w, true);
  return pos;
}

const prefixCls = "tb-modal";
export default {
  name: "tbModal",
  mixins: [scrollbarMixin],
  props: {
    // 是否显示，可使用 v-model 双向绑定数据
    value: {
      type: Boolean,
      default: false,
    },
    // 右上角的关闭按钮是否显示
    closable: {
      type: Boolean,
      default: true,
    },
    // 是否允许点击遮罩层关闭
    maskClosable: {
      type: Boolean,
      default: true,
    },
    // 标题，如果使用 slot 自定义了页头，则 title 无效
    title: {
      type: String,
    },
    // 对话框宽度
    width: {
      type: [Number, String],
      default: 520,
    },
    // 确定按钮文字
    okText: {
      type: String,
      default: "确 定",
    },
    // 	取消按钮文字
    cancelText: {
      type: String,
      default: "取 消",
    },
    // 确定按钮时，确定按钮是否显示 loading 状态，开启则需手动设置value来关闭对话框
    loading: {
      type: Boolean,
      default: false,
    },
    // 设置浮层样式，调整浮层位置等
    styles: {
      type: Object,
    },
    // 设置body的样式,多用于设置自定义内边距
    bodyStyles: {
      type: Object,
    },
    // 设置对话框容器的类名
    className: {
      type: String,
    },
    // 不显示底部
    footerHide: {
      type: Boolean,
      default: false,
    },
    // 是否全屏显示
    fullscreen: {
      type: Boolean,
      default: false,
    },
    // 是否显示遮罩层，开启 draggable 时，强制不显示
    mask: {
      type: Boolean,
      default: true,
    },
    // 是否可以拖拽移动
    draggable: {
      type: Boolean,
      default: false,
    },
    // 层级
    zIndex: {
      type: Number,
      default: 2000,
    },
    scrollable: {
      type: Boolean,
      default: false,
    },
    // 是否将对话框放置于 body 内
    appendToBody: {
      type: Boolean,
      default: false,
    },
    // 是否阻止模态窗释放body滚动，多应用于多层嵌套
    stopRemoveScroll: {
      type: Boolean,
    },
    // 自定义动画名称，默认的modal-fade动画会自动追踪鼠标点击位置
    transitionName: {
      type: String,
    },
  },
  data() {
    return {
      prefixCls: prefixCls,
      wrapShow: false,
      showHead: true,
      buttonLoading: false, // 是否展示btn加载效果
      visible: this.value,
      dragData: {
        x: null,
        y: null,
        dragX: null,
        dragY: null,
        dragging: false,
      },
      modalIndex: this.handleGetModalIndex(), // z-index 层级 主要是为了多层嵌套
    };
  },
  computed: {
    wrapClasses() {
      return [
        `${prefixCls}-wrap`,
        {
          [`${prefixCls}-hidden`]: !this.wrapShow,
          [`${this.className}`]: !!this.className,
          [`${prefixCls}-no-mask`]: !this.showMask,
        },
      ];
    },
    wrapStyles() {
      return {
        zIndex: this.modalIndex + this.zIndex,
      };
    },
    classes() {
      return [
        `${prefixCls}-inner`,
        {
          [`${prefixCls}-fullscreen`]: this.fullscreen,
          [`${prefixCls}-fullscreen-no-header`]: this.fullscreen && !this.showHead,
          [`${prefixCls}-fullscreen-no-footer`]: this.fullscreen && this.footerHide,
        },
      ];
    },
    mainStyles() {
      let style = {};
      // 主要样式配置，配置宽度
      const width = parseInt(this.width);
      const styleWidth =
        this.dragData.x !== null
          ? {
              top: 0,
            }
          : {
              width: width <= 100 ? `${width}%` : `${width}px`,
            };

      const customStyle = this.styles ? this.styles : {};

      Object.assign(style, styleWidth, customStyle);

      return style;
    },
    contentClasses() {
      return [
        `${prefixCls}-content`,
        {
          [`${prefixCls}-content-no-mask`]: !this.showMask,
          [`${prefixCls}-content-drag`]: this.draggable,
          [`${prefixCls}-content-dragging`]: this.draggable && this.dragData.dragging,
        },
      ];
    },
    contentStyles() {
      let style = {};
      if (this.draggable) {
        if (this.dragData.x !== null) style.left = `${this.dragData.x}px`;
        if (this.dragData.y !== null) style.top = `${this.dragData.y}px`;
        const width = parseInt(this.width);
        const styleWidth = {
          width: width <= 100 ? `${width}%` : `${width}px`,
        };

        Object.assign(style, styleWidth);
      }
      return style;
    },
    showMask() {
      return this.draggable ? false : this.mask;
    },
  },
  mounted() {
    // 页面加载  是不是加载当前页面
    if (this.visible) {
      // 对应控制当 box层会展示
      this.wrapShow = true;
      // 是不是将 弹窗放置body内  主要是判断是不是第一次
      if (this.appendToBody && !this.hasMoveOut) {
        document.body.appendChild(this.$el);
        // 设置完成对应的状态也就变成了true
        this.hasMoveOut = true;
      }
    }
    /**
     * @description: 是否展示slot头  自定义slot头嘛
     * @param {*}
     * @return {*}
     */    
    let showHead = true;
    // 如果没有定义slot header  或者没有传递title  就不要展示对应的header区域了
    if (this.$slots.header === undefined && !this.title) {
      showHead = false;
    }
    this.showHead = showHead;
    this.$nextTick(() => {
      this.updateCallback(false);
    });
  },
  methods: {
    updateCallback(visible) {
      // 如果 this.transitionName有值 并且传递的不是 modal-fade就直接return就完了
      if (this.transitionName && this.transitionName !== "modal-fade") return;
      // 如果对应的 展示值为true
      if (this.value) {
        // 如果是初次渲染  或者是关闭的时候
        if (!visible) {
          // 获取整个dialog  ref节点
          const dialogNode = this.$refs.content;
          if (mousePosition) {
            // 获取我这个弹出框的这个位置
            const elOffset = offset(dialogNode);
            // 点击位置缩减弹出框位置
            setTransformOrigin(dialogNode, `${mousePosition.x - elOffset.left}px ${mousePosition.y - elOffset.top}px`);
          } else {
            setTransformOrigin(dialogNode, "");
          }
        }
      }
    },
    // 全局modal的索引
    handleGetModalIndex() {
      modalIndex++;
      return modalIndex;
    },
    handleWrapClick(event) {
      // 判断是不是有class属性  并且有-wrap  就会触发handleMask事件  判断当前点击的地方是否与遮罩层重合
      const className = event.target.getAttribute("class");
      console.log(className && className.indexOf(`${prefixCls}-wrap`))
      if (className && className.indexOf(`${prefixCls}-wrap`) > -1) this.handleMask();
    },
    // 点击取消触发的事件
    cancel() {
      // 触发关闭时间
      this.close();
    },
    ok() {
      if (this.loading) {
        this.buttonLoading = true;
      } else {
        this.visible = false;
        this.$emit("input", false);
      }
      this.$emit("ok");
    },
    // 点击遮罩层
    handleMask() {
      if (this.maskClosable && this.showMask) {
        // 如果成立的话会触发关闭事件
        this.close();
      }
    },
    handleClickModal() {
      if (this.draggable) {
        this.modalIndex = this.handleGetModalIndex();
      }
    },
    close() {
      // 触发关闭事件   因为是v-model  所以同样的也会触发input事件   并且抛出close回调
      this.visible = false;
      this.$emit("input", false);
      this.$emit("close");
    },
    // 动画完成
    animationEnter() {
      this.$emit("opened");
    },
    // 缩放动画结束
    animationFinish() {
      this.$emit("closed");
    },
    // 拖拽开始
    handleMoveStart(event) {
      if (!this.draggable) return false;

      const $content = this.$refs.content;
      const rect = $content.getBoundingClientRect();
      this.dragData.x = rect.x || rect.left;
      this.dragData.y = rect.y || rect.top;

      const distance = {
        x: event.clientX,
        y: event.clientY,
      };

      this.dragData.dragX = distance.x;
      this.dragData.dragY = distance.y;

      this.dragData.dragging = true;

      on(window, "mousemove", this.handleMoveMove);
      on(window, "mouseup", this.handleMoveEnd);
    },
    // 移动中
    handleMoveMove(event) {
      if (!this.dragData.dragging) return false;

      const distance = {
        x: event.clientX,
        y: event.clientY,
      };

      const diffDistance = {
        x: distance.x - this.dragData.dragX,
        y: distance.y - this.dragData.dragY,
      };

      this.dragData.x += diffDistance.x;
      this.dragData.y += diffDistance.y;

      this.dragData.dragX = distance.x;
      this.dragData.dragY = distance.y;
    },
    // 移动结束
    handleMoveEnd() {
      this.dragData.dragging = false;
      off(window, "mousemove", this.handleMoveMove);
      off(window, "mouseup", this.handleMoveEnd);
    },
  },
  watch: {
    // 对应js事件变更视图显示
    value(val) {
      this.visible = val;
      this.$nextTick(() => {
        // 触发弹出判断事件  刷新当前的效果  触发动画事件等
        this.updateCallback(!val);
      });
    },
    // 对应的视图变更 
    visible(val) {
      if (val === false) {
        // 如果是关闭
        this.buttonLoading = false;
        // 关闭内容显示
        this.timer = setTimeout(() => {
          this.wrapShow = false;
          // 如果父级组件为模态窗则不需要移除滚动效果
          if ((!hasClass(this.$parent.$el, "tb-modal") && !this.stopRemoveScroll) || this.$el === this.$parent.$el) {
            this.removeScrollEffect();
          }
        }, 300);
      } else {
        // 如果是打开
        this.modalIndex = this.handleGetModalIndex();
        // 清除事件
        if (this.timer) clearTimeout(this.timer);
        // 呈现展示class
        this.wrapShow = true;
        if (!this.scrollable && !this.draggable) {
          this.addScrollEffect();
        }
        if (this.appendToBody && !this.hasMoveOut) {
          document.body.appendChild(this.$el);
          this.hasMoveOut = true;
        }
        this.$emit("open");
      }
      this.$emit("visible-change", val);
    },
    scrollable(val) {
      if (!val) {
        this.addScrollEffect();
      } else {
        this.removeScrollEffect();
      }
    },
    // loading加载效果
    loading(val) {
      if (!val) {
        this.buttonLoading = false;
      }
    },
    // title变更的话会间接的改变
    title(val) {
      if (this.$slots.header === undefined) {
        this.showHead = !!val;
      }
    },
  },
  beforeDestroy() {
    // 如果有插入到body里 那么当销毁的时候也会 在body中移除当前节点
    if (this.appendToBody && this.$el && this.$el.parentNode) {
      this.$el.parentNode.removeChild(this.$el);
    }
  },
};
</script>
<style lang="less">
.iconfont{
  vertical-align: middle;
}
.tb-modal-mask {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  height: 100%;
  z-index: 1000;
}

.tb-modal-wrap {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  outline: 0;
  overflow: auto;
  &.tb-modal-hidden {
    display: none !important;
  }
  * {
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
  }
}
.tb-modal {
  box-sizing: border-box;
  padding: 0;
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5715;
  p {
    margin: 0;
  }
}
.tb-modal-inner {
  width: auto;
  margin: 0 auto;
  position: relative;
  outline: 0;
  top: 100px;
}
.tb-modal-content {
  position: relative;
  background-color: #ffffff;
  border: 0;
  border-radius: 2px;
  background-clip: padding-box;
  box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05);
}

.tb-modal-close {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 10;
  padding: 0;
  color: rgba(0, 0, 0, 0.45);
  line-height: 1;
  text-decoration: none;
  background: transparent;
  border: 0;
  outline: 0;
  cursor: pointer;
  transition: color 0.2s;
  .icon-close {
    display: block;
    width: 56px;
    height: 56px;
    font-style: normal;
    line-height: 56px;
    text-align: center;
    text-transform: none;
    text-rendering: auto;
    font-size: 20px;
    color: rgba(0, 0, 0, 0.45);
    transition: color 0.2s ease;
    &:hover {
      color: rgba(0, 0, 0, 0.65);
    }
  }
}

.tb-modal-header {
  border-bottom: 1px solid #f0f0f0;
  padding: 16px 24px;
  height: 55px;
  .tb-modal-header-inner,
  .tb-modal-header p {
    width: 100%;
    font-size: 16px;
    // color: #1089ff;
    font-weight: 500;
    line-height: 22px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}

.tb-modal-body {
  padding: 24px;
  font-size: 14px;
  line-height: 1.5715;
  word-wrap: break-word;
}
.tb-modal-footer {
  border-top: 1px solid #f0f0f0;
  padding: 10px 16px;
  text-align: right;
}

.modal-fade-enter-active {
  animation: modal-fade-in 0.3s;
  .tb-modal-content {
    animation: dialog-fade-in 0.3s;
  }
}

.modal-fade-leave-active {
  animation: modal-fade-out 0.3s;
  .tb-modal-content {
    animation: dialog-fade-out 0.3s;
  }
}

@keyframes dialog-fade-in {
  0% {
    transform: none;
    opacity: 0;
  }
  5% {
    transform: scale(0.2);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes dialog-fade-out {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0.2);
    opacity: 0;
  }
}

@keyframes modal-fade-in {
  0% {
    opacity: 0;
  }
  100% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}

@keyframes modal-fade-out {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
//  垂直居中
.vertical-center-modal {
  display: flex;
  align-items: center;
  justify-content: center;
  .tb-modal-inner {
    top: 0;
  }
}
//  全屏
.tb-modal-fullscreen {
  width: 100% !important;
  top: 0;
  bottom: 0;
  position: absolute;
  > .tb-modal-content {
    width: 100%;
    border-radius: 0;
    position: absolute;
    top: 0;
    bottom: 0;
    > .tb-modal-body {
      width: 100%;
      position: absolute;
      top: 55px;
      bottom: 53px;
      overflow: auto;
    }
    > .tb-modal-footer {
      position: absolute;
      width: 100%;
      bottom: 0;
    }
  }

  &.tb-modal-fullscreen-no-footer > .tb-modal-content > .tb-modal-body {
    bottom: 0;
  }
}

//  可拖拽时
.tb-modal-content-drag .tb-modal-header {
  cursor: move;
}
.tb-modal-no-mask {
  pointer-events: none;
}
.tb-modal-content-no-mask {
  pointer-events: auto;
}
.tb-modal-content-drag {
  position: absolute;
}
//  confirm弹窗的样式
.tb-modal-confirm {
  padding: 0;
}
.tb-modal-confirm-head {
  padding: 0 12px 0 0;
}
.tb-modal-confirm-head-icon {
  display: inline-block;
  font-size: 28px;
  vertical-align: middle;
  position: relative;
  top: -2px;
  .iconfont {
    font-size: 28px;
  }
}
.tb-modal-confirm-head-icon-confirm {
  color: #1089ff;
}
.tb-modal-confirm-head-icon-primary {
  color: #1089ff;
}
.tb-modal-confirm-head-icon-info {
  color: #35495e;
}
.tb-modal-confirm-head-icon-success {
  color: #52c41a;
}
.tb-modal-confirm-head-icon-warning {
  color: #fea638;
}
.tb-modal-confirm-head-icon-danger {
  color: #ff4d4f;
}
.tb-modal-confirm-head-title {
  display: inline-block;
  vertical-align: middle;
  margin-left: 12px;
  font-size: 16px;
  // color: #1089ff;
}

.tb-modal-confirm-body {
  padding-left: 42px;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.65);
  position: relative;
  p {
    margin: 0;
    padding: 0;
  }
}
.tb-modal-confirm-footer {
  margin-top: 10px;
  text-align: right;
  .tb-button{
    margin: 0 5px;
  }
}
</style>
