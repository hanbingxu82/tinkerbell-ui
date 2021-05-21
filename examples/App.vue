<!--
 * @Author: your name
 * @Date: 2021-03-16 13:46:44
 * @LastEditTime: 2021-05-21 14:20:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/examples/App.vue
-->
<template>
  <div id="app">
    <!-- <tb-progress :percent="10"></tb-progress>
    <tb-progress :percent="20" status="success"></tb-progress>
    <tb-progress :percent="30" status="warning" :border="false"></tb-progress>
    <tb-progress :percent="40" status="error"></tb-progress>
    <tb-progress :percent="50" color="#9254de"></tb-progress>
    <tb-progress :percent="60" :color="['#f5af19', '#f12711', '#9254de', '#40a9ff', '#5cdbd3']" :border="false"></tb-progress>
    <tb-progress :percent="70" :color="['#40a9ff', '#5cdbd3']" bg-color="#d9f7be"></tb-progress>
    <tb-progress :percent="percent" :color="getColor"></tb-progress> -->
    <!-- <tb-progress :percent="40" active></tb-progress>
    <tb-progress :percent="60" active active-color="#f12711"></tb-progress>
    <tb-progress :percent="80" active :color="['#f5af19', '#f12711', '#9254de', '#40a9ff', '#5cdbd3']"></tb-progress>
    <tb-progress :percent="100" :color-flow="true"></tb-progress> -->
    <!-- <tb-progress :percent="20"></tb-progress>
    <tb-progress :percent="40" status="success" type="lump"></tb-progress>
    <tb-progress :percent="60" :line-height="10" status="warning" type="lump" active :border="false"></tb-progress>
    <tb-progress :percent="80" :color="['#40a9ff', '#5cdbd3']" type="lump" :cut-width="2" cut-color="#389e0d"></tb-progress>
    <tb-progress :percent="50"></tb-progress>
    <tb-progress :percent="60" status="success" :show-text="false"></tb-progress>
    <tb-progress :percent="80" status="warning" :format="format"></tb-progress>
    <tb-progress :percent="100" status="error" :format="format"></tb-progress> -->
    <tb-input-number :min="0" :max="100" :step="0.111111111111111"  v-model="yourVModel" />
  </div>
</template>
<script>
let count = 1;
export default {
  data() {
    return {
      percent: 10,
      ifUp: true,
      yourVModel: 0,
    };
  },
  created() {
    const timer = setInterval(() => {
      if (this.ifUp) {
        this.percent = this.percent + 10;
        this.percent == 100 ? (this.ifUp = false) : (this.ifUp = true);
      } else {
        this.percent = this.percent - 10;
        this.percent == 10 ? (this.ifUp = true) : (this.ifUp = false);
      }
    }, 1000);
    this.$once("hook:beforeDestroy", () => clearInterval(timer));
  },
  methods: {
    format(percent) {
      if (percent == 100) {
        return "^_^";
      }
      return "QAQ";
    },
    getColor(percent) {
      if (percent < 40) {
        return "#ffc069";
      } else if (percent < 60) {
        return "#fadb14";
      } else if (percent < 80) {
        return "#13c2c2";
      } else {
        return "#389e0d";
      }
    },
  },
};
</script>

<style lang="less"></style>
