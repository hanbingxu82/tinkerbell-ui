<!--
 * @Author: your name
 * @Date: 2021-05-25 11:29:53
 * @LastEditTime: 2021-05-25 15:33:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/packages/tbMessage/notic.vue
-->
<template>
  <transition :name="transitionName" @enter="handleEnter" @leave="handleLeave" appear>
    <!-- Vnode类型 -->
    <template v-if="type === 'notice'">
      <div :class="noticeClasses">
        <div :class="['tb-notice-content', this.render !== undefined ? `tb-notice-content-with-render` : '']" ref="content" v-html="content"></div>
        <div :class="contentWithIcon">
          <render-cell :render="renderFunc"></render-cell>
        </div>
        <a class="tb-notice-close" @click="close" v-if="closable">
          <i class="iconfont icon-close-bold"></i>
        </a>
      </div>
    </template>
    <!-- 正常弹窗类型 -->
    <template v-else>
      <div :class="classes">
        <div :class="[baseClass + '-content', `${baseClass}-${type}`]" ref="content">
          <div :class="[baseClass + '-content-text']" v-if="content">
            <i :class="`iconfont ${iconTypes}`"></i>
            <span>{{ content }}</span>
          </div>
          <div :class="[baseClass + '-content-text']">
            <render-cell :render="renderFunc"></render-cell>
          </div>
          <a :class="[baseClass + '-close']" @click="close" v-if="closable">
            <i class="iconfont icon-close-bold"></i>
          </a>
        </div>
      </div>
    </template>
  </transition>
</template>

<script>
import RenderCell from "./render";

const prefixCls = "tb-message";
export default {
  components: {
    RenderCell,
  },
  props: {
    // 自动关闭的延时，单位秒，默认3秒  如果不关闭就给个0
    duration: {
      type: Number,
      default: 3,
    },
    // 提示类别 primary,info,success,warning,danger 5种类型    以及vnode弹窗类型
    type: {
      type: String,
    },
    // 弹窗内容
    content: {
      type: String,
      default: "",
    },
    // vue自定义描述的内容
    render: {
      type: Function,
    },
    // 是否展示x号
    closable: {
      type: Boolean,
      default: false,
    },
    // 父组件传递进来的name值
    name: {
      type: String,
      required: true,
    },
    // 暂时不考虑以下几个api
    withIcon: Boolean,
    hasTitle: Boolean,
    // 关闭时的回调
    onClose: {
      type: Function,
    },
    // 过渡类名，如果想自己配置也可以  默认即可
    transitionName: {
      type: String,
    },
  },
  computed: {
    classes() {
      return [
        this.baseClass,
        {
          [`${this.className}`]: !!this.className,
          [`${this.baseClass}-closable`]: this.closable,
        },
      ];
    },
    noticeClasses() {
      return [
        "tb-notice-notice",
        {
          [`${this.className}`]: !!this.className,
          "tb-notice-closable": this.closable,
        },
      ];
    },
    contentWithIcon() {
      return [this.withIcon ? `tb-notice-content-with-icon` : "", !this.hasTitle && this.withIcon ? `tb-notice-content-with-render-notitle` : ""];
    },
    baseClass() {
      return `${prefixCls}-notice`;
    },
    renderFunc() {
      return this.render || function() {};
    },
    iconTypes() {
      const iconMap = {
        info: "icon-prompt-filling",
        primary: "icon-prompt-filling",
        success: "icon-success-filling",
        warning: "icon-help-filling",
        danger: "icon-delete-filling",
      };
      return iconMap[this.type];
    },
  },
  methods: {
    clearCloseTimer() {
      if (this.closeTimer) {
        clearTimeout(this.closeTimer);
        this.closeTimer = null;
      }
    },
    close() {
      this.clearCloseTimer();
      this.onClose();
      // 删除当前的子组件
      this.$parent.close(this.name);
    },
    handleEnter(el) {
      if (this.type === "notice") {
        return;
      }
      el.style.height = el.scrollHeight + "px";
    },
    handleLeave(el) {
      if (this.type === "notice") {
        return;
      }
      // 优化一下，如果当前只有一个 Message，则不使用 js 过渡动画，这样更优美
      if (document.getElementsByClassName("tb-message-notice").length !== 1) {
        el.style.height = 0;
        el.style.paddingTop = 0;
        el.style.paddingBottom = 0;
      }
    },
  },
  mounted() {
    // 组件移除根据秒数移除
    this.clearCloseTimer();
    if (this.duration !== 0) {
      this.closeTimer = setTimeout(() => {
        this.close();
      }, this.duration * 1000);
    }
  },
  beforeDestroy() {
    this.clearCloseTimer();
  },
};
</script>
