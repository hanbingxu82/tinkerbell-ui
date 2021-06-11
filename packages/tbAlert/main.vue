<!--
 * @Author: your name
 * @Date: 2021-05-20 10:23:44
 * @LastEditTime: 2021-06-10 16:47:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/packages/tbAlert/main.vue
-->
<template>
  <transition name="tb-alert-fade">
    <div class="tb-alert" :class="[typeClass, { 'is-center': center }]" v-show="visible">
      <i :class="`tb-alert__icon iconfont ${iconType} ${isBigIcon}`" v-if="showIcon"></i>
      <div class="tb-alert__content">
        <span class="tb-alert__title" :class="isBoldTitle" style="">{{ this.title }}</span>
        <p class="tb-alert__description" v-if="description">{{ description }}</p>
        <i v-if="closable" class="tb-alert__closebtn" :class="[closeText ? 'is-customed' : `iconfont icon-close-bold`]" @click="close">{{ closeText }}</i>
      </div>
    </div>
  </transition>
</template>
<script>
// 只允许传递一层文本
function isTextNode(vnode) {
  if (Array.isArray(vnode) && vnode.length === 1 && vnode[0].tag === undefined && vnode[0].text) {
    return true;
  } else {
    return false;
  }
}
export default {
  name: "tbAlert",
  props: {
    title: {
      type: String,
      requre: true,
      default() {
        // 判断是不是传递的单纯文本，只允许放置文本
        const defaultNode = this.$slots.default;
        return isTextNode(defaultNode) ? defaultNode[0].text : undefined;
      },
    },
    // 类型
    type: {
      type: String,
      default: "success",
    },
    // 是否显示图标
    showIcon: {
      type: Boolean,
      default: false,
    },
    // 是否文本居中显示
    center: {
      type: Boolean,
      default: false,
    },
    // 是否不是关闭图标而是文字
    closeText: {
      type: String,
    },
    // 是否有关闭按钮
    closable: {
      type: Boolean,
      default: true,
    },
    // 详情内容
    description: {
      type: String,
    },
    // 图标内容
    icon: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      visible: true,
    };
  },
  computed: {
    iconType() {
      // 如果传递进来的图标有值的话那就使用传递进来的icon
      if (this.icon) {
        return this.icon;
      } else if (this.type == "success") {
        return `icon-success-filling`;
      } else if (this.type == "info") {
        return `icon-prompt-filling`;
      } else if (this.type == "warning") {
        return `icon-help-filling`;
      } else if (this.type == "danger") {
        return `icon-delete-filling`;
      }
    },
    typeClass() {
      return `tb-alert--${this.type}`;
    },

    isBoldTitle() {
      return this.description ? "is-bold" : "";
    },
    isBigIcon() {
      return this.description ? "is-big" : "";
    },
  },
  methods: {
    close(e) {
      this.visible = false;
      this.$emit("close");
    },
  },
};
</script>
<style lang="less">
.tb-alert {
  padding: 8px 16px;
  border-radius: 4px;
  position: relative;
  transition: opacity 0.2s;
  opacity: 1;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
}
.tb-alert__content {
  padding: 0 8px;
}
.tb-alert__title {
  font-size: 13px;
  line-height: 18px;
}

.tb-alert__closebtn {
  font-size: 12px;
  color: #b4bccc;
  top: 12px;
  right: 15px;
  position: absolute;
  cursor: pointer;
}
.tb-alert--success {
  color: #67c23a;
  background-color: #f0f9eb;
}
.tb-alert--info {
  color: #909399;
  background-color: #f4f4f5;
}
.tb-alert--warning {
  color: #e6a23c;
  background-color: #fdf6ec;
}
.tb-alert--danger {
  color: #f56c6c;
  background-color: #fef0f0;
}
.tb-alert__icon {
  font-size: 16px;
  width: 16px;
}
.w-alert__closebtn.is-customed {
  font-style: normal;
  font-size: 13px;
  top: 9px;
}
.tb-alert.is-center {
  -ms-flex-pack: center;
  justify-content: center;
}
.tb-alert__title.is-bold {
  font-weight: 700;
}
.tb-alert__description {
  font-size: 13px;
  margin: 5px 0 0;
  color: inherit;
}
.tb-alert__icon.is-big {
  font-size: 28px;
  width: 28px;
}
.tb-alert-fade-enter,
.tb-alert-fade-leave-active {
  opacity: 0;
}
</style>
