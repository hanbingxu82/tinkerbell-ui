<!--
 * @Author: your name
 * @Date: 2021-06-23 15:28:49
 * @LastEditTime: 2021-07-16 09:51:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/examples/components/Nav.vue
-->
<template>
  <div class="nav">
    <tb-menu router :default-active="activeIndex" class="tb-menu-demo" mode="horizontal">
      <div>
        <img class="bar_img" src="../assets/iconLogo.png" alt="" />
        <span class="bar_text">Tinkerbell-UI</span>
      </div>
      <tb-menu-item v-show="!isShowNav" name="/" to="/">首页</tb-menu-item>
      <!-- <tb-menu-item v-show="!isShowNav" name="/Start">起步介绍</tb-menu-item> -->
      <tb-menu-item v-show="!isShowNav" name="/Components" to="/Components/Introduction">组件</tb-menu-item>
      <tb-submenu v-show="isShowNav" name="Components">
        <template slot="title"> <span class="downNav">导航</span> </template>
        <tb-menu-item style="color:rgba(0,0,0,0.65)!important;" name="/" to="/">首页</tb-menu-item>
        <tb-menu-item style="color:rgba(0,0,0,0.65)!important;" name="/Components/Introduction" to="/Components/Introduction">组件</tb-menu-item>
      </tb-submenu>
    </tb-menu>
  </div>
</template>

<script>
export default {
  name: "Nav",
  data() {
    return {
      activeIndex: "/Home",
      isShowNav: false,
    };
  },
  created() {
    console.log(123);
  },
  methods: {
    onResizeFun() {
      if (window.innerWidth <= 1200) {
        this.isShowNav = true;
      } else {
        this.isShowNav = false;
      }
    },
  },
  mounted() {
    // 页面加载完成之后就需要执行一次onResizeFun函数
    this.onResizeFun();
    /**
     * @description: 页面监听函数  用于处理isShowNav  一次来显示各种分辨率下的导航
     * @param {*} resize
     * @param {*} function
     * @return {*}
     */
    window.addEventListener("resize", this.onResizeFun);
  },
};
</script>
<style lang="less" scoped>

/deep/ .tb-menu-light.tb-menu-horizontal .tb-menu-item-active,
.tb-menu-light.tb-menu-horizontal > .tb-menu-submenu-active,
.tb-menu-light.tb-menu-horizontal .tb-menu-item:hover,
.tb-menu-light.tb-menu-horizontal > .tb-menu-submenu:hover {
  border-bottom: 3px solid #FFFFFF;
}
.downNav {
  color: #ffffff;
}
/deep/.downNav + .tb-menu-submenu-title-icon {
  color: #ffffff !important;
}
.bar_img {
  margin: auto;
  position: absolute;
  top: 0;
  left: 50px;
  bottom: 0;
  height: 60%;
  cursor: pointer;
}
.bar_text {
  position: absolute;
  top: 0;
  height: 100%;
  line-height: 60px;
  font-size: 30px;
  left: 100px;
  bottom: 0;
  font-weight: 500;
  font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, SimSun, sans-serif;
}
@media screen and (min-width: 1200px) and (max-width: 1920px) {
  .bar_img {
    height: 80%;
  }
}
@media screen and (min-width: 720px) and (max-width: 1200px) {
  .bar_img {
    height: 70%;
  }
}
@media screen and (min-width: 375px) and (max-width: 720px) {
  .bar_img {
    left: 5%;
    height: 60%;
  }
  .bar_text {
    left: 15%;
  }
}
.nav {
  width: 100%;
  z-index: 999;
  position: fixed;
  top: 0;
}

/deep/ .tb-menu {
  display: flex;
  justify-content: flex-end;
  padding: 0 5%;
  box-sizing: border-box;
  border-bottom: none;
  background-color: #2c98fe;
  color: #ffffff;
  //   box-shadow: 0px 1px 0px 0px #2c98fe;
}
.tb-menu-item {
  color: #ffffff !important;
}
</style>
