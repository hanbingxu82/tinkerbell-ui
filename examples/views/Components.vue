<!--
 * @Author: your name
 * @Date: 2021-06-24 13:12:07
 * @LastEditTime: 2021-08-26 16:27:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/examples/views/Components.vue
-->
<template>
  <div :class="[prefixCls]">
    <tb-container>
      <tb-aside style="width:240px">
        <tb-menu active-name="DevelopmentGuide" expand-all @select="menuSelect">
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
            <tb-menu-group title="表单">
              <tb-menu-item to="/Components/Radio" name="Radio">Radio 单选框</tb-menu-item>
              <tb-menu-item to="/Components/Checkbox" name="Checkbox">Checkbox 多选框</tb-menu-item>
              <tb-menu-item to="/Components/Input" name="Input">Input 输入框</tb-menu-item>
              <tb-menu-item to="/Components/InputNumber" name="InputNumber">InputNumber 计数器</tb-menu-item>
              <tb-menu-item to="/Components/Select" name="Select">Select 选择器</tb-menu-item>
              <tb-menu-item to="/Components/Cascader" name="Cascader">Cascader 级联选择器</tb-menu-item>
              <tb-menu-item to="/Components/Switch" name="Switch">Switch 开关</tb-menu-item>
              <tb-menu-item to="/Components/DatePicker" name="DatePicker">DatePicker 日期选择器</tb-menu-item>
              <tb-menu-item to="/Components/TimePicker" name="TimePicker">TimePicker 时间选择器</tb-menu-item>
              <tb-menu-item to="/Components/Upload" name="Upload">Upload 上传</tb-menu-item>
              <tb-menu-item to="/Components/Rate" name="Rate">Rate 评分</tb-menu-item>
              <tb-menu-item to="/Components/ColorPicker" name="ColorPicker">ColorPicker 颜色选择器</tb-menu-item>
              <tb-menu-item to="/Components/Form" name="Form">Form 表单</tb-menu-item>
            </tb-menu-group>
            <tb-menu-group title="数据">
              <tb-menu-item to="/Components/TableEazy" name="TableEazy">TableEazy 表格</tb-menu-item>
              <tb-menu-item to="/Components/Tag" name="Tag">Tag 标签</tb-menu-item>
              <tb-menu-item to="/Components/Progress" name="Progress">Progress 进度条</tb-menu-item>
              <tb-menu-item to="/Components/Pagination" name="Pagination">Pagination 分页</tb-menu-item>
              <tb-menu-item to="/Components/Badge" name="Badge">Badge 标记</tb-menu-item>
              <tb-menu-item to="/Components/Avatar" name="Avatar">Avatar 头像</tb-menu-item>
              <tb-menu-item to="/Components/Showmore" name="Showmore">Showmore 文本省略</tb-menu-item>
            </tb-menu-group>
            <tb-menu-group title="通知">
              <tb-menu-item to="/Components/Alert" name="Alert">Alert 警告</tb-menu-item>
              <tb-menu-item to="/Components/LoadingBar" name="LoadingBar">LoadingBar 加载条</tb-menu-item>
              <tb-menu-item to="/Components/Message" name="Message">Message 消息提示</tb-menu-item>
              <tb-menu-item to="/Components/MessageBox" name="MessageBox">MessageBox 弹框</tb-menu-item>
              <tb-menu-item to="/Components/Notification" name="Notification">Notification 通知</tb-menu-item>
            </tb-menu-group>
            <tb-menu-group title="导航">
              <tb-menu-item to="/Components/NavMenu" name="NavMenu">NavMenu 导航菜单</tb-menu-item>
              <tb-menu-item to="/Components/Tabs" name="Tabs">Tabs 标签页</tb-menu-item>
              <tb-menu-item to="/Components/Breadcrumb" name="Breadcrumb">Breadcrumb 面包屑</tb-menu-item>
              <tb-menu-item to="/Components/PageHeader" name="PageHeader">PageHeader 页头</tb-menu-item>
              <tb-menu-item to="/Components/Steps" name="Steps">Steps 步骤条</tb-menu-item>
            </tb-menu-group>
            <tb-menu-group title="其他">
              <tb-menu-item to="/Components/Modal" name="Modal">Modal 模态框</tb-menu-item>
              <tb-menu-item to="/Components/Popover" name="Popover">Popover 气泡弹窗</tb-menu-item>
              <tb-menu-item to="/Components/Popconfirm" name="Popconfirm">Popconfirm 气泡确认框</tb-menu-item>
              <tb-menu-item to="/Components/Card" name="Card">Card 卡片</tb-menu-item>
              <tb-menu-item to="/Components/Carousel" name="Carousel">Carousel 走马灯</tb-menu-item>
              <tb-menu-item to="/Components/Calendar" name="Calendar">Calendar 日历</tb-menu-item>
              <tb-menu-item to="/Components/Backtop" name="Backtop">Backtop 回到顶部</tb-menu-item>
                   <tb-menu-item to="/Components/Affix" name="Affix">Affix 图钉</tb-menu-item>
              <tb-menu-item to="/Components/InfiniteScroll" name="InfiniteScroll">InfiniteScroll 无限滚动</tb-menu-item>
              <!-- <tb-menu-item to="/Components/Drawer" name="Drawer">Drawer 抽屉</tb-menu-item> -->
            </tb-menu-group>
          </tb-submenu>
        </tb-menu>
      </tb-aside>
      <tb-main id="containers" ref="containers">
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
  methods: {
    /**
     * @description: 选择menu事件  每次选择时让对应的main区域滚动条置顶
     * @param {*} 
     * @return {*}
     */    
    menuSelect() {
      this.$refs["containers"].$el.scrollTop = 0
    },
  },
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
