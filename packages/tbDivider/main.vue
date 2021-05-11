<!--
 * @Author: your name
 * @Date: 2021-05-11 13:28:07
 * @LastEditTime: 2021-05-11 13:52:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/packages/tbDivider/main.vue
-->
<template >
  <div v-bind="$attrs" v-on="$listeners" :class="['tb-divider', `tb-divider--${direction}`]">
    <div v-if="$slots.default && direction !== 'vertical'" :class="['tb-divider__text', `is-${contentPosition}`]">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "tbDivider",
  props: {
    direction: {
      type: String,
      default: "horizontal",
      validator(val) {
        return ["horizontal", "vertical"].indexOf(val) !== -1;
      },
    },
    contentPosition: {
      type: String,
      default: "center",
      validator(val) {
        return ["left", "center", "right"].indexOf(val) !== -1;
      },
    },
  },
};
</script>
<style scoped>
.tb-divider--horizontal {
  display: block;
  height: 1px;
  width: 100%;
  margin: 24px 0;
}
.tb-divider {
  background-color: #dcdfe6;
  position: relative;
}
.tb-divider__text.is-left {
  left: 20px;
  transform: translateY(-50%);
}
.tb-divider__text.is-right {
  right: 20px;
  transform: translateY(-50%);
}
.tb-divider__text.is-center {
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
}
.tb-divider__text {
  position: absolute;
  background-color: #fff;
  padding: 0 20px;
  font-weight: 500;
  color: #303133;
  font-size: 14px;
}
.tb-divider--vertical {
  display: inline-block;
  width: 1px;
  height: 1em;
  margin: 0 8px;
  vertical-align: middle;
  position: relative;
}
</style>
