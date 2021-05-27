<!--
 * @Author: your name
 * @Date: 2021-05-27 13:29:44
 * @LastEditTime: 2021-05-27 15:08:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/packages/tbStep/main.vue
-->
<template>
  <div :class="wrapClasses">
    <div :class="[prefixCls + '-tail']"><i></i></div>
    <div :class="[prefixCls + '-head']">
      <div :class="[prefixCls + '-head-inner']">
        <span v-if="!icon && !$slots.icon && currentStatus !== 'finish' && currentStatus !== 'error'">
          {{ stepNumber }}
        </span>
        <span v-else-if="$slots.icon" class="tb-steps-icon"><slot name="icon"></slot></span>
        <span v-else :class="iconClasses"></span>
      </div>
    </div>
    <div :class="[prefixCls + '-main']">
      <div :class="[prefixCls + '-title']">
        <slot name="title">{{ title }}</slot>
      </div>
      <div :class="[prefixCls + '-content']" v-if="content || $slots.content">
        <slot name="content">{{ content }}</slot>
      </div>
    </div>
  </div>
</template>
<script>
import Emitter from "../mixins/emitter";
const prefixCls = "tb-steps";

export default {
  name: "tbStep",
  mixins: [Emitter],
  props: {
    //   单个样式
    status: {
      validator(value) {
        return ["wait", "process", "finish", "error", "success"].indexOf(value) > -1;
      },
    },
    // 标题
    title: {
      type: String,
      default: "",
    },
    // 内容
    content: {
      type: String,
    },
    // 图标
    icon: {
      type: String,
    },
  },
  data() {
    return {
      prefixCls: prefixCls,
      stepNumber: "",
      nextError: false,
      total: 1,
      currentStatus: "",
    };
  },
  computed: {
    wrapClasses() {
      return [
        `${prefixCls}-item`,
        `${prefixCls}-status-${this.currentStatus}`,
        {
          [`${prefixCls}-custom`]: !!this.icon || !!this.$slots.icon,
          [`${prefixCls}-next-error`]: this.nextError,
        },
      ];
    },
    iconClasses() {
      let icon = "";
      if (this.icon) {
        icon = this.icon;
      } else {
        if (this.currentStatus === "finish") {
          icon = "icon-select";
        } else if (this.currentStatus === "success") {
          icon = "icon-select";
        } else if (this.currentStatus === "error") {
          icon = "icon-close";
        }
      }

      return [
        `${prefixCls}-icon`,
        `iconfont`,
        {
          [`${icon}`]: icon !== "",
        },
      ];
    },
  },
  watch: {
    status(val) {
      this.currentStatus = val;
      if (this.currentStatus === "error") {
        this.$parent.setNextError();
      }
    },
  },
  created() {
    this.currentStatus = this.status;
  },
  mounted() {
    this.dispatch("tbSteps", "append");
  },
  beforeDestroy() {
    this.dispatch("tbSteps", "remove");
  },
};
</script>
