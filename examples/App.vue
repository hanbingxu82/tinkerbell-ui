<!--
 * @Author: your name
 * @Date: 2021-03-16 13:46:44
 * @LastEditTime: 2021-05-20 09:57:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/examples/App.vue
-->
<template>
  <div id="app">
    <!-- <tb-breadcrumb separator="/" separator-class="icon-mic">
      <tb-breadcrumb-item :to="{ path: '/' }" replace>首页</tb-breadcrumb-item>
      <tb-breadcrumb-item><a href="/">活动管理</a></tb-breadcrumb-item>
      <tb-breadcrumb-item :to="{ path: '/' }" replace>活动列表</tb-breadcrumb-item>
      <tb-breadcrumb-item>活动详情</tb-breadcrumb-item>
    </tb-breadcrumb> -->
    <!-- <tb-rate v-model="myCurrentRate" :length="5" :activecolor="activecolor" />

    <tb-rate :length="5" :value="3" />

    <tb-rate :length="5" :showcount="true" />

    <tb-rate showcount :length="5" :value="3" />

    <tb-rate :length="5" :ratedesc="desc" iconref="icon-mic"/>

    <tb-rate readonly :length="5" :value="3" :ratedesc="desc" />

    <tb-rate showcount disabled :length="5" />

    <tb-rate disabled :length="5" :value="3" />

    <tb-rate disabled showcount :length="5" :value="3" />

    <tb-rate disabled :length="5" :value="3" :ratedesc="desc" /> -->

    <!-- <tb-page-header @back="goBack" content="详情页面"> </tb-page-header> -->
    <!-- <div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
      <div v-for="item in data" :key="item.name">
        {{ item.name }}
      </div>
    </div> -->
    <tb-button @click="activecolor = 'green'">123</tb-button>
    <tb-showmore :len="10" text="文本超出显示长度，折叠起来，通过len属性显示从何处开始折叠"> </tb-showmore>
    <tb-showmore allowFold :len="10" show-text="show" hidden-text="hidden" text="文本超出显示长度，折叠起来，通过len属性显示从何处开始折叠"> </tb-showmore>
    <!-- <div class="demo">
      <tb-carousel ref="tbCarousel" @change="carouselChange" trigger="click" :interval="7000" height="260px" type="card" arrow="never">
        <tb-carousel-item :name="'小仙男' + i"  v-for="i in 6" :key="i">
          <h1 v-text="i"></h1>
        </tb-carousel-item>
      </tb-carousel>
      <tbCarousel :interval="7000" height="300px" arrow="always">
        <tbCarouselItem v-for="i in 6" :key="i">
          <h1 v-text="i"></h1>
        </tbCarouselItem>
      </tbCarousel>
    </div>
    <tb-button type="primary" @click="next">1111</tb-button>
    <tb-button type="primary" @click="prev">2222</tb-button>
    <tb-button type="primary" @click="setActiveItem">3333</tb-button> -->

    <!-- <tb-backtop text="小仙男" :visibleY="460" :duration="300" @scrolledOnTop="yourFunction()"> </tb-backtop>
    <div style="height:3000px;background:green;">
      <div @click="yourFunction" class="gotop">
        123
      </div>
    </div> -->
    <!-- <tb-avatar :size="60" src="https://empty" :error="errorHandler">
      <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png" />
    </tb-avatar> -->
    <!-- 
    <div class="block" v-for="fit in fits" :key="fit">
      <span class="title">{{ fit }}</span>
      <tb-avatar shape="square" :size="100" :fit="fit" :src="url"></tb-avatar>
    </div> -->
    <!-- <div>
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
      </div> -->

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
</template>
<script>
const cityOptions = ["上海", "北京", "广州", "深圳"];
window.COUNT = 1;
let count = 1;
export default {
  data() {
    return {
      myCurrentRate: 3,
      desc: ["非常糟糕", "糟糕", "正常", "良好", "非常良好"],
      currentDate: new Date(),
      fits: ["fill", "contain", "cover", "none", "scale-down"],
      url: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
      circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      squareUrl: "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
      sizeList: ["large", "medium", "small"],
      color: "#DDDDDD",
      checkbox: false,
      checkAll: false,
      checkedCities: ["上海", "北京"],
      cities: cityOptions,
      isIndeterminate: true,
      list: [],
      activecolor: "red",
      data: [],
      busy: false,
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
  created() {
    for (var i = 0; i < 200; i++) {
      this.list.push({
        title: "item " + COUNT++,
      });
    }
  },
  methods: {
    goBack() {
      console.log("go back");
    },
    loadMore: function() {
      this.busy = true;
      setTimeout(() => {
        for (var i = 0, j = 200; i < j; i++) {
          this.data.push({ name: count++ });
        }
        this.busy = false;
      }, 0);
    },
    setData(data) {
      this.data = data;
    },
    carouselChange(data) {
      console.log(data);
    },
    setActiveItem(e) {
      this.$refs.tbCarousel.setActiveItem("小仙男6");
    },
    prev(e) {
      this.$refs.tbCarousel.prev();
    },
    next(e) {
      this.$refs.tbCarousel.next();
    },
    yourFunction() {
      document.scrollingElement.scrollTop = 0;
    },
    errorHandler() {
      console.log("我是abc！");
      return false;
    },
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
.item {
  margin-top: 10px;
  margin-right: 40px;
}
.demo-avatar.demo-basic .demo-basic--circle,
.demo-avatar.demo-basic .demo-basic--square {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.gotop {
  position: fixed;
  bottom: 0;
  right: 5px;
  background: red;
}
.demo {
  width: 800px;
  margin: 0 auto;
}
h1 {
  height: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  background: linear-gradient(90deg, rgba(88, 140, 236, 1), rgba(106, 106, 207, 1));
}
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

// .button {
//   padding: 0;
//   float: right;
// }

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 480px;
}
</style>
