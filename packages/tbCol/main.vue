<!--
 * @Author: your name
 * @Date: 2021-03-19 17:32:10
 * @LastEditTime: 2021-03-22 08:34:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/packages/tbCol/main.vue
-->
<template>
  <div v-on="$listeners" :class="`tb-col ${tbxs} ${tbsm} ${tbmd} ${tblg} ${tbxl} `" :style="`width:${num * span}%;${gutter ? gutter + ';' : ''} ${tbOffset} ${tbPush} ${tbPull}`"><slot></slot></div>
</template>
<script>
export default {
  name: "tbCol",
  props: {
    span: {
      type: Number,
      default: 0,
    },
    // 栅格左侧的间隔格数
    offset: {
      type: Number,
      default: 0,
    },
    // 栅格向右移动格数
    push: {
      type: Number,
      default: 0,
    },
    // 栅格向左移动格数
    pull: {
      type: Number,
      default: 0,
    },
    xs: {
      type: Number | Object,
      // 对象或数组默认值必须从一个工厂函数获取
      default: function() {
        return 0;
      },
    },
    sm: {
      type: Number | Object,
      // 对象或数组默认值必须从一个工厂函数获取
      default: function() {
        return 0;
      },
    },
    md: {
      type: Number | Object,
      // 对象或数组默认值必须从一个工厂函数获取
      default: function() {
        return 0;
      },
    },
    lg: {
      type: Number | Object,
      // 对象或数组默认值必须从一个工厂函数获取
      default: function() {
        return 0;
      },
    },
    xl: {
      type: Number | Object,
      // 对象或数组默认值必须从一个工厂函数获取
      default: function() {
        return 0;
      },
    },
  },
  data() {
    return {
      gutter: "",
      num: 0, // 等份  24/份  100
      tbspan: "",
      tbOffset: "",
      tbPush: "",
      tbPull: "",
      color: "red",
      tbxs: "",
      tbsm:"",
      tbmd:"",
      tblg:"",
      tbxl:""
    };
  },
  inject: ["tbrow"],
  created() {
    this.num = 4.1666;
    this.Pspan(this.span);
    this.Poffset(this.offset);
    this.Ppush(this.push);
    this.Ppull(this.pull);
    this.Pxs()
    this.Psm()
    this.Pmd()
    this.Plg()
    this.Pxl()
  },
  beforeMount() {
    const vm = this;
    // 判断如果tb-row传递了gutter才会有  才会进入这个条件
    if (vm.tbrow.gutter) {
      vm.gutter = "padding:0 " + vm.tbrow.gutter / 2 + "px";
    }
  },
  methods: {
    Pxs() {
      // 判断数据类型
      const vm = this;
      // 如果是数值类型
      // console.log(/ Number/.test(Object.prototype.toString.call(vm.xs)))
      if (vm.xs > 0 && / Number/.test(Object.prototype.toString.call(vm.xs))) {
        vm.tbxs = "tb-col-xs-" + vm.xs;
      } else if (vm.xs && / Object/.test(Object.prototype.toString.call(vm.xs))) {
        vm.tbxs = "tb-col-xs-" + vm.xs.span +" tb-col-xs-offset-"+vm.xs.span;
        // vm.Poffset(vm.xs.offset);
        // console.log(123123)
      } else {
        vm.tbxs = "";
      }
      console.log()
    },
    Psm() {
      // 判断数据类型
      const vm = this;
      // 如果是数值类型
      if (vm.sm > 0 && / Number/.test(Object.prototype.toString.call(vm.sm))) {
        vm.tbsm = "tb-col-sm-" + vm.sm;
      } else if (vm.sm && / Object/.test(Object.prototype.toString.call(vm.sm))) {
        vm.tbsm = "tb-col-sm-" + vm.sm.span+" tb-col-sm-offset-"+vm.sm.span;;
        // vm.Poffset(vm.sm.offset);
      } else {
        vm.tbsm = "";
      }
    },
    Pmd() {
      // 判断数据类型
      const vm = this;
      // 如果是数值类型
      if (vm.md > 0 && / Number/.test(Object.prototype.toString.call(vm.md))) {
        vm.tbmd = "tb-col-md-" + vm.md;
      } else if (vm.md && / Object/.test(Object.prototype.toString.call(vm.md))) {
        vm.tbmd = "tb-col-md-" + vm.md.span+" tb-col-md-offset-"+vm.md.span;;
        // vm.Poffset(vm.md.offset);
      } else {
        vm.tbmd = "";
      }
    },
    Plg() {
      // 判断数据类型
      const vm = this;
      // 如果是数值类型
      if (vm.lg > 0 && / Number/.test(Object.prototype.toString.call(vm.lg))) {
        vm.tblg = "tb-col-lg-" + vm.lg;
      } else if (vm.lg && / Object/.test(Object.prototype.toString.call(vm.lg))) {
        vm.tblg = "tb-col-lg-" + vm.lg.span+" tb-col-lg-offset-"+vm.lg.span;;
        // vm.Poffset(vm.lg.offset);
      } else {
        vm.tblg = "";
      }
    },
    Pxl() {
      // 判断数据类型
      const vm = this;
      // 如果是数值类型
      if (vm.xl > 0 && / Number/.test(Object.prototype.toString.call(vm.xl))) {
        vm.tbxl = "tb-col-xl-" + vm.xl;
      } else if (vm.xl && / Object/.test(Object.prototype.toString.call(vm.xl))) {
        vm.tbxl = "tb-col-xl-" + vm.xl.span+" tb-col-xl-offset-"+vm.xl.span;;
        // vm.Poffset(vm.xl.offset);
      } else {
        vm.tbxl = "";
      }
    },
    Poffset(offset) {
      const vm = this;
      if (vm.offset > 0) {
        vm.tbOffset = "margin-left:" + vm.num * offset + "%;";
      }
      console.log(vm.tbOffset);
    },
    Ppush(push) {
      const vm = this;
      if (vm.push > 0) {
        vm.tbPush = "margin-right:" + vm.num * push + "%;";
      }
    },
    Ppull(pull) {
      const vm = this;
      if (vm.pull > 0) {
        vm.tbPull = "margin-left:" + vm.num * pull + "%;";
      }
    },
    Pspan(span) {
      const vm = this;
      if (vm.span > 0) {
        vm.tbspan = "width:" + vm.num * span + "%;";
      }
    },
  },
};
</script>
<style scoped vars="{ color }">
.tb-col {
  max-width: 100%;
  min-height: 36px;
  /* background: brown; */
  /* padding: 30px; */
  box-sizing: border-box;
}
@media only screen and (max-width: 767px) {
    .tb-col-xs-offset-1 {
    margin-left: calc(4.1666% * 1) !important;
  }
  .tb-col-xs-offset-2 {
    margin-left: calc(4.1666% * 2) !important;
  }
  .tb-col-xs-offset-3 {
    margin-left: calc(4.1666% * 3) !important;
  }
  .tb-col-xs-offset-4 {
    margin-left: calc(4.1666% * 4) !important;
  }
  .tb-col-xs-offset-5 {
    margin-left: calc(4.1666% * 5) !important;
  }
  .tb-col-xs-offset-6 {
    margin-left: calc(4.1666% * 6) !important;
  }
  .tb-col-xs-offset-7 {
    margin-left: calc(4.1666% * 7) !important;
  }
  .tb-col-xs-offset-8 {
    margin-left: calc(4.1666% * 8) !important;
  }
  .tb-col-xs-offset-9 {
    margin-left: calc(4.1666% * 9) !important;
  }
  .tb-col-xs-offset-10 {
    margin-left: calc(4.1666% * 10) !important;
  }
  .tb-col-xs-offset-11 {
    margin-left: calc(4.1666% * 11) !important;
  }
  .tb-col-xs-offset-12 {
    margin-left: calc(4.1666% * 12) !important;
  }
  .tb-col-xs-offset-13 {
    margin-left: calc(4.1666% * 13) !important;
  }
  .tb-col-xs-offset-14 {
    margin-left: calc(4.1666% * 14) !important;
  }
  .tb-col-xs-offset-15 {
    margin-left: calc(4.1666% * 15) !important;
  }
  .tb-col-xs-offset-16 {
    margin-left: calc(4.1666% * 16) !important;
  }
  .tb-col-xs-offset-17 {
    margin-left: calc(4.1666% * 17) !important;
  }
  .tb-col-xs-offset-18 {
    margin-left: calc(4.1666% * 18) !important;
  }
  .tb-col-xs-offset-19 {
    margin-left: calc(4.1666% * 19) !important;
  }
  .tb-col-xs-offset-20 {
    margin-left: calc(4.1666% * 20) !important;
  }
  .tb-col-xs-offset-21 {
    margin-left: calc(4.1666% * 21) !important;
  }
  .tb-col-xs-offset-22 {
    margin-left: calc(4.1666% * 22) !important;
  }
  .tb-col-xs-offset-23 {
    margin-left: calc(4.1666% * 23) !important;
  }
  .tb-col-xs-offset-24 {
    margin-left: calc(4.1666% * 24) !important;
  }
  
  .tb-col-xs-1 {
    width: calc(4.1666% * 1) !important;
  }
  .tb-col-xs-2 {
    width: calc(4.1666% * 2) !important;
  }
  .tb-col-xs-3 {
    width: calc(4.1666% * 3) !important;
  }
  .tb-col-xs-4 {
    width: calc(4.1666% * 4) !important;
  }
  .tb-col-xs-5 {
    width: calc(4.1666% * 5) !important;
  }
  .tb-col-xs-6 {
    width: calc(4.1666% * 6) !important;
  }
  .tb-col-xs-7 {
    width: calc(4.1666% * 7) !important;
  }
  .tb-col-xs-8 {
    width: calc(4.1666% * 8) !important;
  }
  .tb-col-xs-9 {
    width: calc(4.1666% * 9) !important;
  }
  .tb-col-xs-10 {
    width: calc(4.1666% * 10) !important;
  }
  .tb-col-xs-11 {
    width: calc(4.1666% * 11) !important;
  }
  .tb-col-xs-12 {
    width: calc(4.1666% * 12) !important;
  }
  .tb-col-xs-13 {
    width: calc(4.1666% * 13) !important;
  }
  .tb-col-xs-14 {
    width: calc(4.1666% * 14) !important;
  }
  .tb-col-xs-15 {
    width: calc(4.1666% * 15) !important;
  }
  .tb-col-xs-16 {
    width: calc(4.1666% * 16) !important;
  }
  .tb-col-xs-17 {
    width: calc(4.1666% * 17) !important;
  }
  .tb-col-xs-18 {
    width: calc(4.1666% * 18) !important;
  }
  .tb-col-xs-19 {
    width: calc(4.1666% * 19) !important;
  }
  .tb-col-xs-20 {
    width: calc(4.1666% * 20) !important;
  }
  .tb-col-xs-21 {
    width: calc(4.1666% * 21) !important;
  }
  .tb-col-xs-22 {
    width: calc(4.1666% * 22) !important;
  }
  .tb-col-xs-23 {
    width: calc(4.1666% * 23) !important;
  }
  .tb-col-xs-24 {
    width: calc(4.1666% * 24) !important;
  }
}
@media only screen and (min-width: 768px) {

  .tb-col-sm-offset-1 {
    margin-left: calc(4.1666% * 1) !important;
  }
  .tb-col-sm-offset-2 {
    margin-left: calc(4.1666% * 2) !important;
  }
  .tb-col-sm-offset-3 {
    margin-left: calc(4.1666% * 3) !important;
  }
  .tb-col-sm-offset-4 {
    margin-left: calc(4.1666% * 4) !important;
  }
  .tb-col-sm-offset-5 {
    margin-left: calc(4.1666% * 5) !important;
  }
  .tb-col-sm-offset-6 {
    margin-left: calc(4.1666% * 6) !important;
  }
  .tb-col-sm-offset-7 {
    margin-left: calc(4.1666% * 7) !important;
  }
  .tb-col-sm-offset-8 {
    margin-left: calc(4.1666% * 8) !important;
  }
  .tb-col-sm-offset-9 {
    margin-left: calc(4.1666% * 9) !important;
  }
  .tb-col-sm-offset-10 {
    margin-left: calc(4.1666% * 10) !important;
  }
  .tb-col-sm-offset-11 {
    margin-left: calc(4.1666% * 11) !important;
  }
  .tb-col-sm-offset-12 {
    margin-left: calc(4.1666% * 12) !important;
  }
  .tb-col-sm-offset-13 {
    margin-left: calc(4.1666% * 13) !important;
  }
  .tb-col-sm-offset-14 {
    margin-left: calc(4.1666% * 14) !important;
  }
  .tb-col-sm-offset-15 {
    margin-left: calc(4.1666% * 15) !important;
  }
  .tb-col-sm-offset-16 {
    margin-left: calc(4.1666% * 16) !important;
  }
  .tb-col-sm-offset-17 {
    margin-left: calc(4.1666% * 17) !important;
  }
  .tb-col-sm-offset-18 {
    margin-left: calc(4.1666% * 18) !important;
  }
  .tb-col-sm-offset-19 {
    margin-left: calc(4.1666% * 19) !important;
  }
  .tb-col-sm-offset-20 {
    margin-left: calc(4.1666% * 20) !important;
  }
  .tb-col-sm-offset-21 {
    margin-left: calc(4.1666% * 21) !important;
  }
  .tb-col-sm-offset-22 {
    margin-left: calc(4.1666% * 22) !important;
  }
  .tb-col-sm-offset-23 {
    margin-left: calc(4.1666% * 23) !important;
  }
  .tb-col-sm-offset-24 {
    margin-left: calc(4.1666% * 24) !important;
  }
  
  .tb-col-sm-1 {
    width: calc(4.1666% * 1) !important;
  }
  .tb-col-sm-2 {
    width: calc(4.1666% * 2) !important;
  }
  .tb-col-sm-3 {
    width: calc(4.1666% * 3) !important;
  }
  .tb-col-sm-4 {
    width: calc(4.1666% * 4) !important;
  }
  .tb-col-sm-5 {
    width: calc(4.1666% * 5) !important;
  }
  .tb-col-sm-6 {
    width: calc(4.1666% * 6) !important;
  }
  .tb-col-sm-7 {
    width: calc(4.1666% * 7) !important;
  }
  .tb-col-sm-8 {
    width: calc(4.1666% * 8) !important;
  }
  .tb-col-sm-9 {
    width: calc(4.1666% * 9) !important;
  }
  .tb-col-sm-10 {
    width: calc(4.1666% * 10) !important;
  }
  .tb-col-sm-11 {
    width: calc(4.1666% * 11) !important;
  }
  .tb-col-sm-12 {
    width: calc(4.1666% * 12) !important;
  }
  .tb-col-sm-13 {
    width: calc(4.1666% * 13) !important;
  }
  .tb-col-sm-14 {
    width: calc(4.1666% * 14) !important;
  }
  .tb-col-sm-15 {
    width: calc(4.1666% * 15) !important;
  }
  .tb-col-sm-16 {
    width: calc(4.1666% * 16) !important;
  }
  .tb-col-sm-17 {
    width: calc(4.1666% * 17) !important;
  }
  .tb-col-sm-18 {
    width: calc(4.1666% * 18) !important;
  }
  .tb-col-sm-19 {
    width: calc(4.1666% * 19) !important;
  }
  .tb-col-sm-20 {
    width: calc(4.1666% * 20) !important;
  }
  .tb-col-sm-21 {
    width: calc(4.1666% * 21) !important;
  }
  .tb-col-sm-22 {
    width: calc(4.1666% * 22) !important;
  }
  .tb-col-sm-23 {
    width: calc(4.1666% * 23) !important;
  }
  .tb-col-sm-24 {
    width: calc(4.1666% * 24) !important;
  }
}
@media only screen and (min-width: 992px) {
    .tb-col-md-offset-1 {
    margin-left: calc(4.1666% * 1) !important;
  }
  .tb-col-md-offset-2 {
    margin-left: calc(4.1666% * 2) !important;
  }
  .tb-col-md-offset-3 {
    margin-left: calc(4.1666% * 3) !important;
  }
  .tb-col-md-offset-4 {
    margin-left: calc(4.1666% * 4) !important;
  }
  .tb-col-md-offset-5 {
    margin-left: calc(4.1666% * 5) !important;
  }
  .tb-col-md-offset-6 {
    margin-left: calc(4.1666% * 6) !important;
  }
  .tb-col-md-offset-7 {
    margin-left: calc(4.1666% * 7) !important;
  }
  .tb-col-md-offset-8 {
    margin-left: calc(4.1666% * 8) !important;
  }
  .tb-col-md-offset-9 {
    margin-left: calc(4.1666% * 9) !important;
  }
  .tb-col-md-offset-10 {
    margin-left: calc(4.1666% * 10) !important;
  }
  .tb-col-md-offset-11 {
    margin-left: calc(4.1666% * 11) !important;
  }
  .tb-col-md-offset-12 {
    margin-left: calc(4.1666% * 12) !important;
  }
  .tb-col-md-offset-13 {
    margin-left: calc(4.1666% * 13) !important;
  }
  .tb-col-md-offset-14 {
    margin-left: calc(4.1666% * 14) !important;
  }
  .tb-col-md-offset-15 {
    margin-left: calc(4.1666% * 15) !important;
  }
  .tb-col-md-offset-16 {
    margin-left: calc(4.1666% * 16) !important;
  }
  .tb-col-md-offset-17 {
    margin-left: calc(4.1666% * 17) !important;
  }
  .tb-col-md-offset-18 {
    margin-left: calc(4.1666% * 18) !important;
  }
  .tb-col-md-offset-19 {
    margin-left: calc(4.1666% * 19) !important;
  }
  .tb-col-md-offset-20 {
    margin-left: calc(4.1666% * 20) !important;
  }
  .tb-col-md-offset-21 {
    margin-left: calc(4.1666% * 21) !important;
  }
  .tb-col-md-offset-22 {
    margin-left: calc(4.1666% * 22) !important;
  }
  .tb-col-md-offset-23 {
    margin-left: calc(4.1666% * 23) !important;
  }
  .tb-col-md-offset-24 {
    margin-left: calc(4.1666% * 24) !important;
  }
  .tb-col-md-1 {
    width: calc(4.1666% * 1) !important;
  }
  .tb-col-md-2 {
    width: calc(4.1666% * 2) !important;
  }
  .tb-col-md-3 {
    width: calc(4.1666% * 3) !important;
  }
  .tb-col-md-4 {
    width: calc(4.1666% * 4) !important;
  }
  .tb-col-md-5 {
    width: calc(4.1666% * 5) !important;
  }
  .tb-col-md-6 {
    width: calc(4.1666% * 6) !important;
  }
  .tb-col-md-7 {
    width: calc(4.1666% * 7) !important;
  }
  .tb-col-md-8 {
    width: calc(4.1666% * 8) !important;
  }
  .tb-col-md-9 {
    width: calc(4.1666% * 9) !important;
  }
  .tb-col-md-10 {
    width: calc(4.1666% * 10) !important;
  }
  .tb-col-md-11 {
    width: calc(4.1666% * 11) !important;
  }
  .tb-col-md-12 {
    width: calc(4.1666% * 12) !important;
  }
  .tb-col-md-13 {
    width: calc(4.1666% * 13) !important;
  }
  .tb-col-md-14 {
    width: calc(4.1666% * 14) !important;
  }
  .tb-col-md-15 {
    width: calc(4.1666% * 15) !important;
  }
  .tb-col-md-16 {
    width: calc(4.1666% * 16) !important;
  }
  .tb-col-md-17 {
    width: calc(4.1666% * 17) !important;
  }
  .tb-col-md-18 {
    width: calc(4.1666% * 18) !important;
  }
  .tb-col-md-19 {
    width: calc(4.1666% * 19) !important;
  }
  .tb-col-md-20 {
    width: calc(4.1666% * 20) !important;
  }
  .tb-col-md-21 {
    width: calc(4.1666% * 21) !important;
  }
  .tb-col-md-22 {
    width: calc(4.1666% * 22) !important;
  }
  .tb-col-md-23 {
    width: calc(4.1666% * 23) !important;
  }
  .tb-col-md-24 {
    width: calc(4.1666% * 24) !important;
  }
}
@media only screen and (min-width: 1200px) {
      .tb-col-lg-offset-1 {
    margin-left: calc(4.1666% * 1) !important;
  }
  .tb-col-lg-offset-2 {
    margin-left: calc(4.1666% * 2) !important;
  }
  .tb-col-lg-offset-3 {
    margin-left: calc(4.1666% * 3) !important;
  }
  .tb-col-lg-offset-4 {
    margin-left: calc(4.1666% * 4) !important;
  }
  .tb-col-lg-offset-5 {
    margin-left: calc(4.1666% * 5) !important;
  }
  .tb-col-lg-offset-6 {
    margin-left: calc(4.1666% * 6) !important;
  }
  .tb-col-lg-offset-7 {
    margin-left: calc(4.1666% * 7) !important;
  }
  .tb-col-lg-offset-8 {
    margin-left: calc(4.1666% * 8) !important;
  }
  .tb-col-lg-offset-9 {
    margin-left: calc(4.1666% * 9) !important;
  }
  .tb-col-lg-offset-10 {
    margin-left: calc(4.1666% * 10) !important;
  }
  .tb-col-lg-offset-11 {
    margin-left: calc(4.1666% * 11) !important;
  }
  .tb-col-lg-offset-12 {
    margin-left: calc(4.1666% * 12) !important;
  }
  .tb-col-lg-offset-13 {
    margin-left: calc(4.1666% * 13) !important;
  }
  .tb-col-lg-offset-14 {
    margin-left: calc(4.1666% * 14) !important;
  }
  .tb-col-lg-offset-15 {
    margin-left: calc(4.1666% * 15) !important;
  }
  .tb-col-lg-offset-16 {
    margin-left: calc(4.1666% * 16) !important;
  }
  .tb-col-lg-offset-17 {
    margin-left: calc(4.1666% * 17) !important;
  }
  .tb-col-lg-offset-18 {
    margin-left: calc(4.1666% * 18) !important;
  }
  .tb-col-lg-offset-19 {
    margin-left: calc(4.1666% * 19) !important;
  }
  .tb-col-lg-offset-20 {
    margin-left: calc(4.1666% * 20) !important;
  }
  .tb-col-lg-offset-21 {
    margin-left: calc(4.1666% * 21) !important;
  }
  .tb-col-lg-offset-22 {
    margin-left: calc(4.1666% * 22) !important;
  }
  .tb-col-lg-offset-23 {
    margin-left: calc(4.1666% * 23) !important;
  }
  .tb-col-lg-offset-24 {
    margin-left: calc(4.1666% * 24) !important;
  }
  .tb-col-lg-1 {
    width: calc(4.1666% * 1) !important;
  }
  .tb-col-lg-2 {
    width: calc(4.1666% * 2) !important;
  }
  .tb-col-lg-3 {
    width: calc(4.1666% * 3) !important;
  }
  .tb-col-lg-4 {
    width: calc(4.1666% * 4) !important;
  }
  .tb-col-lg-5 {
    width: calc(4.1666% * 5) !important;
  }
  .tb-col-lg-6 {
    width: calc(4.1666% * 6) !important;
  }
  .tb-col-lg-7 {
    width: calc(4.1666% * 7) !important;
  }
  .tb-col-lg-8 {
    width: calc(4.1666% * 8) !important;
  }
  .tb-col-lg-9 {
    width: calc(4.1666% * 9) !important;
  }
  .tb-col-lg-10 {
    width: calc(4.1666% * 10) !important;
  }
  .tb-col-lg-11 {
    width: calc(4.1666% * 11) !important;
  }
  .tb-col-lg-12 {
    width: calc(4.1666% * 12) !important;
  }
  .tb-col-lg-13 {
    width: calc(4.1666% * 13) !important;
  }
  .tb-col-lg-14 {
    width: calc(4.1666% * 14) !important;
  }
  .tb-col-lg-15 {
    width: calc(4.1666% * 15) !important;
  }
  .tb-col-lg-16 {
    width: calc(4.1666% * 16) !important;
  }
  .tb-col-lg-17 {
    width: calc(4.1666% * 17) !important;
  }
  .tb-col-lg-18 {
    width: calc(4.1666% * 18) !important;
  }
  .tb-col-lg-19 {
    width: calc(4.1666% * 19) !important;
  }
  .tb-col-lg-20 {
    width: calc(4.1666% * 20) !important;
  }
  .tb-col-lg-21 {
    width: calc(4.1666% * 21) !important;
  }
  .tb-col-lg-22 {
    width: calc(4.1666% * 22) !important;
  }
  .tb-col-lg-23 {
    width: calc(4.1666% * 23) !important;
  }
  .tb-col-lg-24 {
    width: calc(4.1666% * 24) !important;
  }
}
@media only screen and (min-width: 1920px) {
      .tb-col-xl-offset-1 {
    margin-left: calc(4.1666% * 1) !important;
  }
  .tb-col-xl-offset-2 {
    margin-left: calc(4.1666% * 2) !important;
  }
  .tb-col-xl-offset-3 {
    margin-left: calc(4.1666% * 3) !important;
  }
  .tb-col-xl-offset-4 {
    margin-left: calc(4.1666% * 4) !important;
  }
  .tb-col-xl-offset-5 {
    margin-left: calc(4.1666% * 5) !important;
  }
  .tb-col-xl-offset-6 {
    margin-left: calc(4.1666% * 6) !important;
  }
  .tb-col-xl-offset-7 {
    margin-left: calc(4.1666% * 7) !important;
  }
  .tb-col-xl-offset-8 {
    margin-left: calc(4.1666% * 8) !important;
  }
  .tb-col-xl-offset-9 {
    margin-left: calc(4.1666% * 9) !important;
  }
  .tb-col-xl-offset-10 {
    margin-left: calc(4.1666% * 10) !important;
  }
  .tb-col-xl-offset-11 {
    margin-left: calc(4.1666% * 11) !important;
  }
  .tb-col-xl-offset-12 {
    margin-left: calc(4.1666% * 12) !important;
  }
  .tb-col-xl-offset-13 {
    margin-left: calc(4.1666% * 13) !important;
  }
  .tb-col-xl-offset-14 {
    margin-left: calc(4.1666% * 14) !important;
  }
  .tb-col-xl-offset-15 {
    margin-left: calc(4.1666% * 15) !important;
  }
  .tb-col-xl-offset-16 {
    margin-left: calc(4.1666% * 16) !important;
  }
  .tb-col-xl-offset-17 {
    margin-left: calc(4.1666% * 17) !important;
  }
  .tb-col-xl-offset-18 {
    margin-left: calc(4.1666% * 18) !important;
  }
  .tb-col-xl-offset-19 {
    margin-left: calc(4.1666% * 19) !important;
  }
  .tb-col-xl-offset-20 {
    margin-left: calc(4.1666% * 20) !important;
  }
  .tb-col-xl-offset-21 {
    margin-left: calc(4.1666% * 21) !important;
  }
  .tb-col-xl-offset-22 {
    margin-left: calc(4.1666% * 22) !important;
  }
  .tb-col-xl-offset-23 {
    margin-left: calc(4.1666% * 23) !important;
  }
  .tb-col-xl-offset-24 {
    margin-left: calc(4.1666% * 24) !important;
  }
  .tb-col-xl-1 {
    width: calc(4.1666% * 1) !important;
  }
  .tb-col-xl-2 {
    width: calc(4.1666% * 2) !important;
  }
  .tb-col-xl-3 {
    width: calc(4.1666% * 3) !important;
  }
  .tb-col-xl-4 {
    width: calc(4.1666% * 4) !important;
  }
  .tb-col-xl-5 {
    width: calc(4.1666% * 5) !important;
  }
  .tb-col-xl-6 {
    width: calc(4.1666% * 6) !important;
  }
  .tb-col-xl-7 {
    width: calc(4.1666% * 7) !important;
  }
  .tb-col-xl-8 {
    width: calc(4.1666% * 8) !important;
  }
  .tb-col-xl-9 {
    width: calc(4.1666% * 9) !important;
  }
  .tb-col-xl-10 {
    width: calc(4.1666% * 10) !important;
  }
  .tb-col-xl-11 {
    width: calc(4.1666% * 11) !important;
  }
  .tb-col-xl-12 {
    width: calc(4.1666% * 12) !important;
  }
  .tb-col-xl-13 {
    width: calc(4.1666% * 13) !important;
  }
  .tb-col-xl-14 {
    width: calc(4.1666% * 14) !important;
  }
  .tb-col-xl-15 {
    width: calc(4.1666% * 15) !important;
  }
  .tb-col-xl-16 {
    width: calc(4.1666% * 16) !important;
  }
  .tb-col-xl-17 {
    width: calc(4.1666% * 17) !important;
  }
  .tb-col-xl-18 {
    width: calc(4.1666% * 18) !important;
  }
  .tb-col-xl-19 {
    width: calc(4.1666% * 19) !important;
  }
  .tb-col-xl-20 {
    width: calc(4.1666% * 20) !important;
  }
  .tb-col-xl-21 {
    width: calc(4.1666% * 21) !important;
  }
  .tb-col-xl-22 {
    width: calc(4.1666% * 22) !important;
  }
  .tb-col-xl-23 {
    width: calc(4.1666% * 23) !important;
  }
  .tb-col-xl-24 {
    width: calc(4.1666% * 24) !important;
  }
}


  


</style>
