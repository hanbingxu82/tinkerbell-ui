<!--
 * @Author: your name
 * @Date: 2021-05-19 10:54:05
 * @LastEditTime: 2021-07-01 12:18:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/packages/tbShowmore/main.vue
-->
<template>
  <span class="tb__show-more">
    <span>{{ text | filterText(tbTextLen) }}</span>
    <a class="tb__show" @click="showMore" v-if="tbTextLen !== -1 && tbTextLen < text.length">{{ showText }}</a>
    <a class="tb__hidden" @click="showMore" v-if="tbTextLen !== -1 && tbTextLen === text.length && allowFold">{{ hiddenText }}</a>
  </span>
</template>

<script>
export default {
  name: "tbShowmore",
  props: {
    // 显示文本的长度  默认不折叠
    len: {
      type: Number,
      default: -1,
    },
    // 文本
    text: {
      type: String,
      default: "",
    },
    // 折叠时需要显示文案
    showText: {
      type: String,
      default: "显示更多",
    },
    // 隐藏时需要显示文案
    hiddenText: {
      type: String,
      default: "收起",
    },
    // 是否需要展示hiddenText  收起效果
    allowFold: Boolean,
  },
  data() {
    return {
      tbTextLen: this.len,
    };
  },
  methods: {
    showMore() {
      this.tbTextLen = this.tbTextLen === this.text.length ? this.len : this.text.length;
    },
  },
  filters: {
    filterText(value, tbTextLen) {
      if (tbTextLen !== -1 && tbTextLen < value.length) {
        return value.substring(0, tbTextLen) + "...";
      }
      return value;
    },
  },
};
</script>
<style scoped>
.tb__show-more {
  font-size: 14px;
  color: #000;
}
.tb__show {
  color: #1089ff;
  cursor: pointer;
}
.tb__hidden {
  color: #1089ff;
  cursor: pointer;
}
</style>
