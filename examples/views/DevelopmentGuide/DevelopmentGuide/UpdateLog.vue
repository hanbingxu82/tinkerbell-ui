<!--
 * @Author: your name
 * @Date: 2021-06-24 15:47:33
 * @LastEditTime: 2021-07-16 10:19:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/examples/views/DevelopmentGuide/DevelopmentGuide/UpdateLog.vue
-->

<template>
  <div>
    <h2 id="geng-xin-ri-zhi" style="box-sizing: border-box; margin: 0px; padding: 10px 0px; font-size: 28px; font-weight: 400; color: rgb(31, 47, 61); border-bottom: 1px solid rgb(197, 217, 232);">
      <a href="#geng-xin-ri-zhi" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;更新日志
    </h2>
    <p style="box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px;">
      版本更新
    </p>
    <ul class="bin-timeline list-paddingleft-2" style="list-style-type: none;">
      <li>
        <p>
          <span class="iconfont icon-ios-trophy" style="box-sizing: border-box; display: inline-block; vertical-align: middle; line-height: 1; font-size: 20px; -webkit-font-smoothing: antialiased; font-family: iconfont !important;"></span>
        </p>
      </li>
    </ul>
    <p>
      <br />
    </p>
    <tb-timeline>
            <tb-timeline-item color="success">
        <i class="iconfont icon-setting-filling" slot="dot"></i>
        <p class="version">0.5.9</p>
        <p class="time">2021-07-16</p>
        <p class="content">修调整官网 menu 样式底边框线变为白色 并为3px</p>
        <p class="content">调menu组件对应下边框改为 IE 盒子模型</p>
      </tb-timeline-item>
      <tb-timeline-item color="success">
        <i class="iconfont icon-setting-filling" slot="dot"></i>
        <p class="version">0.5.8</p>
        <p class="time">2021-07-14</p>
        <p class="content">修复官网每次切换menu时滚动条不置顶问题</p>
        <p class="content">调整tb-button按钮组件、禁用时鼠标移入不显示禁用符号</p>
      </tb-timeline-item>
      <tb-timeline-item color="success">
        <i class="iconfont icon-setting-filling" slot="dot"></i>
        <p class="version">0.5.7</p>
        <p class="time">2021-07-05</p>
        <p class="content">完成官网ui样式构建、字体大小</p>
        <p class="content">调整在编写官网时遇到的组件问题</p>
        <p class="content">button边框、icon图标不对齐，调整整体色彩样式等</p>
      </tb-timeline-item>
      <tb-timeline-item color="success">
        <i class="iconfont icon-setting-filling" slot="dot"></i>
        <p class="version">0.5.6</p>
        <p class="time">2021-06-29</p>
        <p class="content">完成官网基础部分 并调整基础类型组件样式style等</p>
      </tb-timeline-item>
      <tb-timeline-item color="success">
        <i class="iconfont icon-setting-filling" slot="dot"></i>
        <p class="version">0.5.5</p>
        <p class="time">2021-06-29</p>
        <p class="content">调整 tinkerbell-ui 主题颜色样式等</p>
      </tb-timeline-item>
      <tb-timeline-item>
        <i class="iconfont  icon-task-filling" slot="dot"></i>
        <p class="version">0.5.4</p>
        <p class="time">2021-06-27</p>
        <p class="content">完成 tinkerbell-ui 官网雏形</p>
      </tb-timeline-item>
      <tb-timeline-item>
        <i class="iconfont icon-task-filling" slot="dot"></i>
        <p class="version">0.5.3</p>
        <p class="time">2021-06-23</p>
        <p class="content">完成 tb-table-eazy 表格组件</p>
      </tb-timeline-item>
      <tb-timeline-item>
        <i class="iconfont icon-task-filling" slot="dot"></i>
        <p class="version">0.5.2</p>
        <p class="time">2021-06-23</p>
        <p class="content">完成 tb-pagination 分页组件</p>
      </tb-timeline-item>

      <tb-timeline-item>
        <i class="iconfont icon-task-filling" slot="dot"></i>
        <p class="version">0.5.1</p>
        <p class="time">2021-06-22</p>
        <p class="content">完成 tb-form、tb-form-item 表单组件</p>
      </tb-timeline-item>
      <tb-timeline-item>
        <i class="iconfont icon-task-filling" slot="dot"></i>
        <p class="version">0.5.0</p>
        <p class="time">2021-06-22</p>
        <p class="content">完成 tb-menu、tb-menu-group、tb-menu-item、tb-submenu 导航菜单组件</p>
      </tb-timeline-item>

      <tb-timeline-item>
        <i class="iconfont icon-task-filling" slot="dot"></i>
        <p class="version">0.4.9</p>
        <p class="time">2021-06-20</p>
        <p class="content">完成 tb-cascader 级联选择器组件</p>
      </tb-timeline-item>
      <tb-timeline-item>
        <i class="iconfont icon-task-filling" slot="dot"></i>
        <p class="version">0.4.8</p>
        <p class="time">2021-06-20</p>
        <p class="content">完成 tb-time-picker、tb-date-picker 时间、日期选择组件</p>
      </tb-timeline-item>
      <tb-timeline-item>
        <i class="iconfont icon-task-filling" slot="dot"></i>
        <p class="version">0.4.7</p>
        <p class="time">2021-06-20</p>
        <p class="content">完成 tb-select、tb-option、tb-option-group 下拉选择组件</p>
      </tb-timeline-item>
      <tb-timeline-item>
        <i class="iconfont icon-task-filling" slot="dot"></i>
        <p class="version">0.4.6</p>
        <p class="time">2021-06-20</p>
        <p class="content">完成 tb-input 文本输入框组件</p>
      </tb-timeline-item>
      <tb-timeline-item>
        <i class="iconfont icon-task-filling" slot="dot"></i>
        <p class="version">0.4.5</p>
        <p class="time">2021-05-30</p>
        <p class="content">完成 tb-modal、$alert、$confirm 弹出框组件</p>
      </tb-timeline-item>
      <tb-timeline-item>
        <i class="iconfont icon-task-filling" slot="dot"></i>
        <p class="version">0.4.4</p>
        <p class="time">2021-05-26</p>
        <p class="content">完成 tb-popover 提示弹出框组件</p>
      </tb-timeline-item>
      <tb-timeline-item>
        <i class="iconfont icon-task-filling" slot="dot"></i>
        <p class="version">0.4.3</p>
        <p class="time">2021-05-21</p>
        <p class="content">完成tb-tabs、tb-scroll-pane 标签页组件</p>
      </tb-timeline-item>
      <tb-timeline-item>
        <i class="iconfont icon-task-filling" slot="dot"></i>
        <p class="version">0.4.2</p>
        <p class="time">2021-05-20</p>
        <p class="content">完成 tb-upload、tb-upload-list（内置list展示组件） 上传组件</p>
      </tb-timeline-item>
      <tb-timeline-item>
        <i class="iconfont icon-task-filling" slot="dot"></i>
        <p class="version">0.4.1</p>
        <p class="time">2021-05-15</p>
        <p class="content">完成 tb-steps、tb-step步骤条组件</p>
      </tb-timeline-item>
      <tb-timeline-item>
        <i class="iconfont icon-task-filling" slot="dot"></i>
        <p class="version">0.4.0</p>
        <p class="time">2021-05-11</p>
        <p class="content">完成 this.$notify 右上角通知组件</p>
      </tb-timeline-item>
      <tb-timeline-item>
        <i class="iconfont icon-task-filling" slot="dot"></i>
        <p class="version">0.3.9</p>
        <p class="time">2021-04-26</p>
        <p class="content">完成 this.$message 弹窗组件</p>
      </tb-timeline-item>
      <tb-timeline-item>
        <i class="iconfont icon-task-filling" slot="dot"></i>
        <p class="version">0.3.8</p>
        <p class="time">2021-04-20</p>
        <p class="content">完成 tb-timeline、tb-timeline-item 时间线组件</p>
      </tb-timeline-item>
      <tb-timeline-item>
        <i class="iconfont icon-task-filling" slot="dot"></i>
        <p class="version">0.3.7</p>
        <p class="time">2021-04-10</p>
        <p class="content">完成 this.$loading 顶部加载进度条组件</p>
      </tb-timeline-item>
      <tb-timeline-item>
        <i class="iconfont icon-task-filling" slot="dot"></i>
        <p class="version">0.3.6</p>
        <p class="time">2021-03-31</p>
        <p class="content">完成 tb-switch 开关组件</p>
      </tb-timeline-item>
      <tb-timeline-item>
        <i class="iconfont icon-task-filling" slot="dot"></i>
        <p class="version">0.3.5</p>
        <p class="time">2021-03-21</p>
        <p class="content">完成 tb-input-number 计数器组件</p>
      </tb-timeline-item>
      <tb-timeline-item>
        <i class="iconfont icon-task-filling" slot="dot"></i>
        <p class="version">0.3.4</p>
        <p class="time">2021-03-20</p>
        <p class="content">完成 tb-progress 进度条组件</p>
      </tb-timeline-item>
      <tb-timeline-item>
        <i class="iconfont icon-task-filling" slot="dot"></i>
        <p class="version">0.3.3</p>
        <p class="time">2021-03-12</p>
        <p class="content">完成 tb-alert 警告提示组件</p>
      </tb-timeline-item>
      <tb-timeline-item>
        <i class="iconfont icon-task-filling" slot="dot"></i>
        <p class="version">0.3.2</p>
        <p class="time">2021-03-11</p>
        <p class="content">完成 tb-breadcrumb、tb-breadcrumb-item 面包屑组件</p>
      </tb-timeline-item>
      <tb-timeline-item>
        <i class="iconfont icon-task-filling" slot="dot"></i>
        <p class="version">0.3.1</p>
        <p class="time">2021-01-12</p>
        <p class="content">完成 tb-rate 评分组件</p>
      </tb-timeline-item>

      <tb-timeline-item>
        <i class="iconfont icon-task-filling" slot="dot"></i>
        <p class="version">0.3.0</p>
        <p class="time">2021-01-12</p>
        <p class="content">完成 tb-page-header 返回页头组件</p>
      </tb-timeline-item>
      <tb-timeline-item>
        <i class="iconfont icon-task-filling" slot="dot"></i>
        <p class="version">0.2.9</p>
        <p class="time">2021-01-12</p>
        <p class="content">完成 tb-showmore 收起、展示文本省略号组件</p>
      </tb-timeline-item>
      <tb-timeline-item>
        <i class="iconfont icon-task-filling" slot="dot"></i>
        <p class="version">0.2.8</p>
        <p class="time">2021-01-12</p>
        <p class="content">完成（新增）InfiniteScroll 无线滚动组件</p>
      </tb-timeline-item>
      <tb-timeline-item>
        <i class="iconfont icon-task-filling" slot="dot"></i>
        <p class="version">0.2.7</p>
        <p class="time">2021-01-12</p>
        <p class="content">完成 tb-card 卡片组件</p>
      </tb-timeline-item>
      <tb-timeline-item>
        <i class="iconfont icon-task-filling" slot="dot"></i>
        <p class="version">0.2.6</p>
        <p class="time">2021-01-12</p>
        <p class="content">完成 tb-carousel、tb-carousel-item 跑马灯轮播图组件</p>
      </tb-timeline-item>

      <tb-timeline-item>
        <i class="iconfont icon-task-filling" slot="dot"></i>
        <p class="version">0.2.5</p>
        <p class="time">2021-03-10</p>
        <p class="content">完成 tb-backtop 回到顶部组件</p>
      </tb-timeline-item>

      <tb-timeline-item>
        <i class="iconfont icon-task-filling" slot="dot"></i>
        <p class="version">0.2.4</p>
        <p class="time">2021-03-02</p>
        <p class="content">完成 tb-avatar 头像组件</p>
      </tb-timeline-item>
      <tb-timeline-item>
        <i class="iconfont icon-task-filling" slot="dot"></i>
        <p class="version">0.2.3</p>
        <p class="time">2021-03-01</p>
        <p class="content">完成 tb-badge 右上角小红点组件</p>
      </tb-timeline-item>
      <tb-timeline-item>
        <i class="iconfont icon-task-filling" slot="dot"></i>
        <p class="version">0.2.2</p>
        <p class="time">2021-02-26</p>
        <p class="content">完成 tb-divider 分割线组件</p>
      </tb-timeline-item>
      <tb-timeline-item>
        <i class="iconfont icon-task-filling" slot="dot"></i>
        <p class="version">0.2.1</p>
        <p class="time">2021-02-25</p>
        <p class="content">完成 tb-popconfirm 弹出确认框组件</p>
      </tb-timeline-item>
      <tb-timeline-item>
        <i class="iconfont icon-task-filling" slot="dot"></i>
        <p class="version">0.2.0</p>
        <p class="time">2021-02-18</p>
        <p class="content">完成 tb-calendar 日历组件</p>
      </tb-timeline-item>
      <tb-timeline-item>
        <i class="iconfont icon-task-filling" slot="dot"></i>
        <p class="version">0.1.9</p>
        <p class="time">2021-02-13</p>
        <p class="content">完成 tb-color-picker、tb-color 两个颜色选择器组件</p>
      </tb-timeline-item>
      <tb-timeline-item>
        <i class="iconfont icon-task-filling" slot="dot"></i>
        <p class="version">0.1.8</p>
        <p class="time">2021-02-10</p>
        <p class="content">完成 tb-tag 标签组件(使用 jsx)</p>
      </tb-timeline-item>

      <tb-timeline-item>
        <i class="iconfont icon-task-filling" slot="dot"></i>
        <p class="version">0.1.7</p>
        <p class="time">2021-02-03</p>
        <p class="content">完成 tb-checkbox、tb-checkbox-button、tb-checkbox-group 三个复选框组件</p>
      </tb-timeline-item>
      <tb-timeline-item>
        <i class="iconfont icon-task-filling" slot="dot"></i>
        <p class="version">0.1.6</p>
        <p class="time">2021-01-28</p>
        <p class="content">完成 tb-radio、tb-radio-button、tb-radio-group 三个单选框组件</p>
      </tb-timeline-item>
      <tb-timeline-item>
        <i class="iconfont icon-task-filling" slot="dot"></i>
        <p class="version">0.1.5</p>
        <p class="time">2021-01-21</p>
        <p class="content">完成 tb-container 布局容器组件</p>
      </tb-timeline-item>
      <tb-timeline-item>
        <i class="iconfont icon-task-filling" slot="dot"></i>
        <p class="version">0.1.4</p>
        <p class="time">2021-01-20</p>
        <p class="content">完成 tb-link 链接组件</p>
      </tb-timeline-item>
      <tb-timeline-item>
        <i class="iconfont icon-task-filling" slot="dot"></i>
        <p class="version">0.1.3</p>
        <p class="time">2021-01-12</p>
        <p class="content">完成 tb-row、tb-col 两布局组件</p>
      </tb-timeline-item>
      <tb-timeline-item>
        <i class="iconfont icon-task-filling" slot="dot"></i>
        <p class="version">0.1.2</p>
        <p class="time">2021-01-08</p>
        <p class="content">完成 tb-button 按钮、icon 图标组件</p>
      </tb-timeline-item>
    </tb-timeline>

    <!-- <pre v-highlight>
        <code class="javascript"  v-text="html1">
        </code>
    </pre> -->
    <!-- <RightSmallNav :rightTitle="rightTitle" @goMeowPoint="goMeowPoint" /> -->
  </div>
</template>

<script>
const rawHtml = `<template>
  <el-row class="demo-avatar demo-basic">
    <el-col :span="12">
      <div class="sub-title">circle</div>
      <div class="demo-basic--circle">
        <div class="block"><el-avatar :size="50" :src="circleUrl"></el-avatar></div>
        <div class="block" v-for="size in sizeList" :key="size">
          <el-avatar :size="size" :src="circleUrl"></el-avatar>
        </div>
      </div>
    </el-col>  
    <el-col :span="12">
      <div class="sub-title">square</div>
      <div class="demo-basic--circle">
        <div class="block"><el-avatar shape="square" :size="50" :src="squareUrl"></el-avatar></div>
        <div class="block" v-for="size in sizeList" :key="size">
          <el-avatar shape="square" :size="size" :src="squareUrl"></el-avatar>
        </div>
      </div>
    </el-col> 
  </el-row>
</template>
<script>
  export default {
    data () {
      return {
        circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
        squareUrl: "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
        sizeList: ["large", "medium", "small"]
      }
    }
  }
<\/script>
                `;
import useScroll from "../../../utils/mixins";
import RightSmallNav from "../../../components/RightSmallNav.vue";
export default {
  name: "UpdateLog",
  components: { RightSmallNav },
  data() {
    return {
      html1: rawHtml,
      //   定义当前传递过来的数据是所有类型的数据
      rightTitle: [
        { title: "安装", id: "an-zhuang" },
        { title: "CDN 安装", id: "cdn-an-zhuang" },
        { title: "NPM 安装", id: "npm-an-zhuang" },
      ],
    };
  },
  /**
   * @description: 引入minxns   src/utils/mixins.ts
   * @param {rightTitle}  rightTitle:右侧right浮起框数据
   * @return {*}
   */
  // mixins: [useScroll],
  methods: {
    /**
     * @description: 点击右侧区域跳转至对应的html区域
     * @param {id:string} id:id节点地址
     * @return {*}
     */
    goMeowPoint(id) {
      const containern = window.document.querySelector("#" + id);
      containern.scrollIntoView(true);
    },
  },
};
</script>
<style lang="less" scoped></style>
