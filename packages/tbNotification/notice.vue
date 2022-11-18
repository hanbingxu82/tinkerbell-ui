<!--
 * @Author: your name
 * @Date: 2021-05-26 13:35:15
 * @LastEditTime: 2021-05-26 15:19:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/packages/tbNotification/notice.vue
-->
<template>
  <transition :name="transitionName" @enter="handleEnter" @leave="handleLeave" appear>
    <!-- 如果是通知类型的话 -->
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
    <template v-else>
      <div :class="classes">
        <div :class="[baseClass + '-content', `${baseClass}-${type}`]" ref="content">
          <div :class="[baseClass + '-content-text']" v-if="content">
            <b-icon :name="iconTypes"></b-icon>
            <span>{{ content }}</span>
          </div>
          <div :class="[baseClass + '-content-text']"></div>
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
    
    duration: {
      type: Number,
      default: 3,
    },
    type: {
      type: String,
    },
    content: {
      type: String,
      default: "",
    },
    render: {
      type: Function,
    },
    closable: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
      required: true,
    },
    withIcon: Boolean,
    hasTitle: Boolean,
    onClose: {
      type: Function,
    },
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
