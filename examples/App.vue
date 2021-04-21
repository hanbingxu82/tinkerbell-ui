<!--
 * @Author: your name
 * @Date: 2021-03-16 13:46:44
 * @LastEditTime: 2021-04-21 23:12:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/examples/App.vue
-->
<template>
  <div id="app">
    <!-- <div>
      <tb-checkbox v-model="checkbox" border>小仙子</tb-checkbox>
      <tb-checkbox v-model="checkbox" border>小仙子</tb-checkbox>
      <tb-checkbox v-model="checkbox" border>小仙子</tb-checkbox>
      <tb-checkbox v-model="checkbox" border>小仙子</tb-checkbox>
    </div>

    <tb-checkbox v-model="checkAll" :indeterminate="isIndeterminate" @change="handleCheckAllChange">小仙子</tb-checkbox>
    <div>
      <tb-checkbox-group :min="1" :max="2" v-model="checkedCities" @change="handleCheckedCitiesChange">
        <tb-checkbox v-for="city in cities" :label="city" :key="city">{{ city }}</tb-checkbox>
      </tb-checkbox-group> -->
      <tb-checkbox-group :min="1" :max="2" v-model="checkedCities" @change="handleCheckedCitiesChange">
        <tb-checkbox-button v-for="city in cities" :label="city" :key="city">{{ city }}</tb-checkbox-button>
      </tb-checkbox-group>
    </div>
  </div>
</template>
<script>
const cityOptions = ["上海", "北京", "广州", "深圳"];
export default {
  data() {
    return {
      checkbox: false,
      checkAll: false,
      checkedCities: ["上海", "北京"],
      cities: cityOptions,
      isIndeterminate: true,
    };
  },
  methods: {
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
