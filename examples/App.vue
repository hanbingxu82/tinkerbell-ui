<!--
 * @Author: your name
 * @Date: 2021-03-16 13:46:44
 * @LastEditTime: 2021-04-29 17:01:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/examples/App.vue
-->
<template>
  <div id="app">
    <div>
      <!-- 完成  颜色选择器组件 -->
      <input type="text" id="color-picker" v-model="color" auto-complete="off" @focus="openPicker" :style="'background-color:' + color" />
      <tb-color ref="tbColor" :color="color" :targetElem="'#color-picker'" @onChange="onChange"> </tb-color>
      <tb-color-picker v-model="color" @change="headleChangeColor"></tb-color-picker>

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
    };
  },
  methods: {
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
