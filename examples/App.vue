<!--
 * @Author: your name
 * @Date: 2021-03-16 13:46:44
 * @LastEditTime: 2021-05-11 13:54:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/examples/App.vue
-->
<template>
  <div id="app">
    <div>
      <div>
        <span>头上一片晴天，心中一个想念</span>
        <tb-divider content-position="left">少年包青天</tb-divider>
        <span>饿了别叫妈, 叫饿了么</span>
        <tb-divider><i class="iconfont icon-smile"></i></tb-divider>
        <span>为了无法计算的价值</span>
        <tb-divider content-position="right">阿里云</tb-divider>
      </div>
      <div>
        <span>雨纷纷</span>
        <tb-divider direction="vertical"></tb-divider>
        <span>旧故里</span>
        <tb-divider direction="vertical"></tb-divider>
        <span>草木深</span>
      </div>

      <!-- <tb-popconfirm @confirm="confirm" @cancel="cancel" confirm-button-text="111" cancel-button-text="222" confirm-button-type="success" cancel-button-type="danger" title="我是不是一个？" icon="icon-unlock" icon-color="red" >
        <tb-button slot="reference">123</tb-button>
      </tb-popconfirm> -->
      <!-- <tb-calendar :options="calendarArr" class="calendar" @handleClickDay="handleClickDay" @handlePrevMonth="handlePrevMonth" @handleNextMonth="handleNextMonth" /> -->

      <!-- 完成  颜色选择器组件 -->
      <!-- <input type="text" id="color-picker" v-model="color" auto-complete="off" @focus="openPicker" :style="'background-color:' + color" />
      <tb-color ref="tbColor" :color="color" :targetElem="'#color-picker'" @onChange="onChange"> </tb-color>
      <tb-color-picker v-model="color" @change="headleChangeColor"></tb-color-picker> -->

      <!-- <tb-tag effect="dark">蓝色</tb-tag>
      <tb-tag size="mini" type="success" >绿色</tb-tag>
      <tb-tag @click="click1" @close="close" size="medium" type="warning">黄色</tb-tag>
      <tb-tag @close="close" type="info">灰色</tb-tag>
      <tb-tag effect="plain" type="danger">红色</tb-tag> -->

      <!-- <tb-checkbox v-model="checkbox" border>小仙子</tb-checkbox>
      <tb-checkbox v-model="checkbox" border>小仙子</tb-checkbox>
      <tb-checkbox v-model="checkbox" border>小仙子</tb-checkbox>
      <tb-checkbox v-model="checkbox" border>小仙子</tb-checkbox>
    </div>

    <tb-checkbox v-model="checkAll" :indeterminate="isIndeterminate" @change="handleCheckAllChange">小仙子</tb-checkbox>
    <div>
      <tb-checkbox-group :min="1" :max="2" v-model="checkedCities" @change="handleCheckedCitiesChange">
        <tb-checkbox v-for="city in cities" :label="city" :key="city">{{ city }}</tb-checkbox>
      </tb-checkbox-group>
      <tb-checkbox-group :min="1" :max="2" v-model="checkedCities" @change="handleCheckedCitiesChange">
        <tb-checkbox-button v-for="city in cities" :label="city" :key="city">{{ city }}</tb-checkbox-button>
      </tb-checkbox-group> -->
    </div>
  </div>
</template>
<script>
const cityOptions = ["上海", "北京", "广州", "深圳"];
export default {
  data() {
    return {
      color: "#DDDDDD",
      checkbox: false,
      checkAll: false,
      checkedCities: ["上海", "北京"],
      cities: cityOptions,
      isIndeterminate: true,

      // 日历options特定  样式
      calendarArr: {
        type: "combination", // 是否为特定的组合方式
        // 如果不是特定的组合方式   那么下方的todayBtn、checkBtn样式就会起作用 两者最好不要一起使用
        headStyle: {
          todayBtn: "left",
          combination: "center",
          checkBtn: "left",
        },
        // 文本对齐位置
        viewStyle: {
          // 视图day天数  文本对齐位置
          day: "right",
        },
      },
    };
  },
  methods: {
    confirm() {
      console.log("成功");
    },
    cancel() {
      console.log("取消");
    },
    // 点击某一天触发的事件
    handleClickDay(day) {
      // console.log(day);
    },
    // 上一个月  time 是当前年月日  日期默认为1号
    handlePrevMonth(time) {
      console.log(time);
    },
    // 下一个月  time 是当前年月日  日期默认为1号
    handleNextMonth(time) {
      console.log(time);
    },
    headleChangeColor(val) {
      console.log(val);
    },
    openPicker(event) {
      this.$refs.tbColor.openPicker();
      this.$refs.tbColor.updateValue(event);
    },
    closePicker() {
      //this.$refs.colorPicker.closePicker();
    },
    onChange(color) {
      this.color = color;
    },
    click1() {
      console.log("我点击了按钮");
    },
    close() {
      console.log("我点击了关闭");
    },
    handleCheckAllChange(val) {
      this.checkedCities = val ? cityOptions : [];
      this.isIndeterminate = false;
    },
    handleCheckedCitiesChange(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.cities.length;
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
    },
  },
};
</script>

<style lang="less">
.tb-container,
.tb-aside,
.tb-main {
  height: 100%;
}
</style>
