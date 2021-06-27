<!--
 * @Author: your name
 * @Date: 2021-06-24 13:12:07
 * @LastEditTime: 2021-06-27 14:14:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/examples/views/Components.vue
-->
<template>
  <div :class="[prefixCls]">
    <tb-container>
      <tb-aside style="width:240px">
        <tb-menu active-name="DevelopmentGuide" expand-all>
          <tb-submenu name="DevelopmentGuide">
            <template slot="title">开发指南</template>
            <tb-menu-item to="/Components/Introduction" name="Introduction">介绍</tb-menu-item>
            <tb-menu-item to="/Components/Installs" name="Installs">安装</tb-menu-item>
            <tb-menu-item to="/Components/QuickStart" name="QuickStart">快速开始</tb-menu-item>
            <tb-menu-item to="/Components/UpdateLog" name="UpdateLog">更新日志</tb-menu-item>
          </tb-submenu>
          <tb-submenu name="ComponentsLibrary">
            <template slot="title">组件</template>
            <tb-menu-group title="基础">
              <tb-menu-item to="/Components/Layout" name="Layout">Layout 布局</tb-menu-item>
              <tb-menu-item to="/Components/Container" name="Container">Container 布局容器</tb-menu-item>
              <tb-menu-item to="/Components/Icon" name="Icon">Icon 图标</tb-menu-item>
              <tb-menu-item to="/Components/Button" name="Button">Button 按钮</tb-menu-item>
              <tb-menu-item to="/Components/Link" name="Link">Link 文字链接</tb-menu-item>
            </tb-menu-group>
          </tb-submenu>
          
        </tb-menu>
      </tb-aside>
      <tb-main id="containers">
        <router-view />
      </tb-main>
    </tb-container>
  </div>
</template>
<script>
const prefixCls = "Components";
export default {
  name: "Components",
  data() {
    return {
      prefixCls: prefixCls,
    };
  },
  mounted() {},
};
</script>
<style lang="less">
#containers {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  box-sizing: border-box;
  padding: 20px;
  padding-right: 280px;
}
.Components {
  box-sizing: border-box;
  height: 100%;
  padding-top: 60px;
  .tb-container {
    height: 100%;
    .tb-aside {
      border-right: 1px solid #dcdee2;
      height: 100%;
      .tb-menu {
        &::-webkit-scrollbar {
          width: 0 !important;
        }
        -ms-overflow-style: none;
        overflow: -moz-scrollbars-none;
        overflow-x: hidden;
        overflow-y: auto;
        width: 100% !important;
        height: 100%;
      }
    }
    .tb-main {
      height: 100%;
    }
  }
}
</style>
