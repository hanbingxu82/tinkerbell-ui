<!--
 * @Author: your name
 * @Date: 2021-05-12 21:58:57
 * @LastEditTime: 2021-05-12 22:24:17
 * @LastEditors: Please set LastEditors
 * @Description: 小红点图标组件
 * @FilePath: /hx/packages/tbBdage/main.vue
-->
<template>
  <div class="tb-badge">
    <slot></slot>
    <transition name="tb-zoom-in-center">
      <sup
        v-show="!hidden && (content || content === 0 || isDot)"
        v-text="content"
        class="tb-badge__content"
        :class="[
          'tb-badge__content--' + type,
          {
            'is-fixed': $slots.default,
            'is-dot': isDot,
          },
        ]"
      >
      </sup>
    </transition>
  </div>
</template>

<script>
export default {
  name: "tbBadge",
  props: {
    value: [String, Number],
    max: Number,
    isDot: Boolean,
    hidden: Boolean,
    type: {
      type: String,
      validator(val) {
        return ["primary", "success", "warning", "info", "danger"].indexOf(val) > -1;
      },
    },
  },
  computed: {
    content() {
      if (this.isDot) return;
      const value = this.value;
      const max = this.max;
      if (typeof value === "number" && typeof max === "number") {
        return max < value ? `${max}+` : value;
      }
      return value;
    },
  },
};
</script>
<style scoped>
.tb-badge {
  position: relative;
  vertical-align: middle;
  display: inline-block;
}

.tb-badge__content.is-dot {
  height: 8px;
  width: 8px;
  padding: 0;
  right: 0;
  border-radius: 50%;
}
.tb-badge__content.is-fixed {
  position: absolute;
  z-index: 2500;
  top: 0;
  right: 10px;
  transform: translateY(-50%) translateX(100%);
}
.tb-badge__content.is-fixed.is-dot {
  right: 5px;
}
.tb-badge__content {
  background-color: #ff4d4f;
  border-radius: 10px;
  color: #fff;
  display: inline-block;
  font-size: 12px;
  height: 18px;
  line-height: 18px;
  padding: 0 6px;
  text-align: center;
  white-space: nowrap;
  border: 1px solid #fff;
}
.tb-badge__content.tb-badge__content--warning {
  background-color: #fea638;
}
.tb-badge__content.tb-badge__content--primary {
  background-color: #1089ff;
}
.tb-badge__content.tb-badge__content--danger {
  background-color: #ff4d4f;
}
.tb-badge__content.tb-badge__content--info {
  background-color: #35495e;
}
.tb-badge__content.tb-badge__content--success {
  background-color: #52c41a;
}
.tb-zoom-in-center-enter-active,
.tb-zoom-in-center-leave-active {
  transition: all 0.3s cubic-bezier(0.55, 0, 0.1, 1);
}
.tb-zoom-in-center-enter,
.tb-zoom-in-center-leave-active {
  opacity: 0;
  transform: scaleX(0);
}
</style>
