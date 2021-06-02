<!--
 * @Author: your name
 * @Date: 2021-06-01 15:09:08
 * @LastEditTime: 2021-06-02 14:27:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/packages/tbTabs/main.vue
-->
<template>
  <div class="tb-tabs-wrapper" :class="[type, { closable: closable }]">
    <tb-scroll-pane class="nav-wrapper" ref="tbScrollPane">
      <div class="tab-list">
        <!--下标-->
        <div v-if="type === 'default'" class="tabs-active-bar" :style="activeBarStyle"></div>
        <span v-for="(tab, index) in data" :key="tab.key || 'tab-' + index" class="tab-item" :id="tab.key" ref="tabs" :class="[{ 'width-icon': tab.icon }, { 'no-close': tab.noClose }, { active: isActive(tab) }]" @click.stop="handleSelectTab(tab)" @contextmenu.stop.prevent="openMenu(tab, $event)">
          <i v-if="tab.icon" :class="`iconfont ${tab.icon}`" class="custom-icon"></i>
          {{ tab.title }}
          <i v-if="type !== 'default' && closable && !tab.noClose" class="iconfont icon-close" @click.prevent.stop="closeSelectedTab(tab)"></i>
        </span>
      </div>
    </tb-scroll-pane>
    <template v-if="contextMenu">
      <transition name="zoom-in-top">
        <ul class="contextmenu" v-show="visible" :style="{ left: left + 'px', top: top + 'px' }">
          <slot name="menu"><li>自定义插入li标签</li></slot>
        </ul>
      </transition>
    </template>
  </div>
</template>

<script>
import tbScrollPane from "./tbScrollPane";
import { deepCopy, oneOf } from "../utils/utils";
import { on, off } from "../utils/dom";
import throttle from "throttle-debounce/throttle";
export default {
  name: "tbTabs",
  props: {
    value: {
      type: String,
    },
    // tabs数组结构,必传，切结构遵循{key:'',title:''} key为唯一标识，title为标签生成名称，且可以设置icon来扩展图标，noClose移除删除
    data: {
      type: Array,
      required: true,
    },
    // 默认、卡片、标签模式
    type: {
      validator(value) {
        return oneOf(value, ["default", "card", "tag"]);
      },
      // 默认为普通样式
      default: "default",
    },
    // 是否可关闭
    closable: {
      type: Boolean,
      default: false,
    },
    // 是否开启右键选择
    contextMenu: Boolean,
  },
  data() {
    return {
      visible: false, // 选中面板右键弹出
      top: 0, // 选中面板右键top
      left: 0, // 选中面板右键left
      selectedTag: {}, // 选中的tag
      activeBarStyle: {},
    };
  },
  watch: {
    // 每次当右键菜单展开时，对应的就给document新增一个点击事件   点击关闭我们的   visible右键面板
    visible(value) {
      if (value) {
        document.body.addEventListener("click", this.closeMenu);
      } else {
        document.body.removeEventListener("click", this.closeMenu);
      }
    },
    value: {
      handler() {
        // 根据key值改变来设置移动至当前位置
        this.moveToCurrentTab();
        this.$nextTick(() => {
          // 计算bar位置
          this.calcBar();
        });
      },
    },
    data() {
      this.$nextTick(() => {
        this.calcScrollWidth();
      });
    },
  },
  methods: {
    // 选择点击当前tab
    handleSelectTab(tab) {
      // 将对应的传递进来的data中对应点击的tabs浅拷贝一下
      this.selectedTag = { ...tab };
      // 触发v-model  变更父组件的值
      this.emitInput();
      this.$nextTick(() => {
        // 计算bar位置
        this.calcBar();
      });
    },
    // 更新选中active  v-model的值 并且触发回调事件
    emitInput() {
      this.$emit("input", this.selectedTag.key);
      this.$emit("change", this.selectedTag);
    },
    // 是否是启用状态
    isActive(tab) {
      return this.value === tab.key;
    },
    // 移动到当前的tag
    moveToCurrentTab() {
      const tabs = this.$refs.tabs;
      this.$nextTick(() => {
        for (const tab of tabs) {
          // 找到切换到的目标path和路由匹配的
          if (tab.id === this.value) {
            this.$refs.tbScrollPane.moveToTarget(tab);
            break;
          }
        }
      });
    },
    // 关闭当前的tab页签
    closeSelectedTab(view) {
      // 缓存tabs
      let visitedViews = deepCopy(this.data);
      if (this.isActive(view)) {
        this.toLastView(visitedViews, view);
      }
      // 触发关闭tab页事件
      this.$emit("tab-close", view);
    },
    // 移动焦点至后一个view
    toLastView(visitedViews, view) {
      this.selectedTag = { key: "" };
      const currentIndex = visitedViews.findIndex((t) => t.key === view.key);
      // 前后的索引缓存
      let prev = currentIndex - 1;
      let next = currentIndex + 1;
      // 如果下一个索引小于数组长度
      if (next < visitedViews.length) {
        this.selectedTag = { ...visitedViews[next] };
      } else if (next === visitedViews.length) {
        // 如果当前关闭的是最后一个tag，则判断其前一个索引是否存在，如存在则跳至前一个
        if (prev >= 0) {
          this.selectedTag = { ...visitedViews[prev] };
        }
      }
      this.emitInput();
    },
    // 计算导航条样式属性
    calcBar() {
      let style = {};
      let width = 0;
      let offset = 0;
      let tabsLength = this.data.length;
      // 获取选中的el的宽度
      this.data.every((tab) => {
        let tabs = this.$refs.tabs || [];
        // 找到指定的那个节点
        let $el = tabs.find((t) => t.id === tab.key);
        // 没找到就返回个false
        if (!$el) {
          return false;
        }
        // 判断是否有active这个属性
        let isActive = $el.classList.contains("active");
        if (!isActive) {
          // 当前元素的宽
          offset += $el["clientWidth"];
          return true;
        } else {
          // 当前元素的宽
          width = $el["clientWidth"];
          return false;
        }
      });
      // 平移加动画
      const transform = `translateX(${offset}px)`;
      style.width = `${width}px`;
      style.transform = transform;
      style.msTransform = transform;
      style.webkitTransform = transform;
      this.activeBarStyle = style;
    },
    // 计算滚动宽度
    calcScrollWidth() {
      // 计算滚动宽度，然后判断是否需要出现右侧箭头
      this.$refs.tbScrollPane && this.$refs.tbScrollPane.calcWidth();
    },
    // 打开右键菜单选择
    openMenu(tab, e) {
      if (this.contextMenu) {
        this.visible = true;
        this.selectedTag = tab;
        this.left = e.clientX;
        this.top = e.clientY;
        // 触发点击右键回调
        this.$emit("tab-select", tab);
      }
    },
    // 关闭右键弹窗回调
    closeMenu() {
      this.visible = false;
    },
  },
  mounted() {
    // 初始化计算导航条
    this.calcBar();
    this.calcEvent = throttle(10, this.calcScrollWidth);
    on(window, "resize", this.calcEvent);
    this.$nextTick(() => {
      this.calcScrollWidth();
    });
  },
  beforeDestroy() {
    off(window, "resize", this.calcEvent);
  },
  components: {
    tbScrollPane,
  },
};
</script>
<style lang="less">
.tb-tabs-wrapper {
  position: relative;
  .nav-wrap {
    position: relative;
    z-index: 2;
    &.is-scrollable {
      padding: 0 20px;
      box-sizing: border-box;
      .nav-next,
      .nav-prev {
        position: absolute;
        cursor: pointer;
        line-height: 36px;
        width: 20px;
        font-size: 14px;
        color: rgba(0, 0, 0, 0.65);
        z-index: 1;
      }
      .nav-prev {
        left: 0;
      }
      .nav-next {
        right: 0;
      }
    }
  }
  .scroll-container {
    white-space: nowrap;
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100%;
    .scroll-wrapper {
      position: absolute;
      transition: 0.2s;
    }
  }
  .nav-wrapper {
    height: 36px;
    .tab-item {
      display: inline-block;
      position: relative;
      cursor: pointer;
      color: rgba(0, 0, 0, 0.65);
      height: 36px;
      line-height: 36px;
      padding: 0 18px;
      font-size: 14px;
      transition: 0.2s;
      .iconfont:not(.icon-close) {
        position: relative;
        top: 1px;
        font-size: 16px;
        height: 16px;
        line-height: 16px;
        margin-right: 6px;
        color: rgba(0, 0, 0, 0.65);
        transition: 0.2s;
      }
      .icon-close {
        width: 0;
        overflow: hidden;
        font-size: 12px;
        border-radius: 50%;
        text-align: center;
        height: 16px;
        line-height: 16px;
        color: rgba(0, 0, 0, 0.65);
        transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
        &:before {
          display: inline-block;
        }
        &:hover {
          background-color: rgba(0, 0, 0, 0.45);
          color: #ffffff;
        }
      }
      &:hover {
        color: #409eff;
        > i:not(.icon-close) {
          color: #409eff;
        }
        .icon-close {
          width: 16px;
          margin-left: 5px;
        }
      }
      &.active {
        color: #409eff;
        &:hover {
          padding: 0 18px;
        }
        > i:not(.icon-close) {
          color: #409eff;
        }
        .icon-close {
          width: 16px;
          margin-left: 5px;
        }
      }
      &.no-close:hover {
        padding: 0 18px;
      }
    }
    .tabs-active-bar {
      position: absolute;
      bottom: 0;
      left: 0;
      height: 2px;
      background-color: #409eff;
      z-index: 10;
      transition: transform 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
      list-style: none;
    }
  }
  .contextmenu {
    margin: 0;
    background: #fff;
    z-index: 9999;
    position: fixed;
    left: 0;
    top: 0;
    list-style-type: none;
    padding: 5px 0;
    border-radius: 2px;
    font-size: 14px;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.65);
    border: 1px solid #cfd7e5;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    li {
      margin: 0;
      padding: 9px 16px;
      cursor: pointer;
      line-height: 1.2em;
      color: rgba(0, 0, 0, 0.65);
      &:hover {
        background: #409eff;
        color: #409eff;
      }
    }
  }
  &.default:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: #e4e7ed;
    z-index: 1;
  }
  &.card {
    border-bottom: 1px solid #e4e7ed;
    .nav-wrapper {
      height: 37px;
      z-index: 1;
      bottom: -1px;
    }
    .tab-list {
      border: 1px solid #e4e7ed;
      border-bottom: none;
      border-radius: 2px 2px 0 0;
      box-sizing: border-box;
      overflow: hidden;
    }
    .tab-item {
      background: #fff;
      border-bottom: 1px solid #e4e7ed;
      border-left: 1px solid #e4e7ed;
      transition: color 0.2s, padding 0.2s;
      &:first-child {
        border-left: none;
      }
      &.active {
        border-bottom-color: #fff;
      }
    }
    &.closable .tab-item {
      &:hover {
        padding: 0 12px;
      }
      &.no-close:hover {
        padding: 0 18px;
      }
    }
  }
  &.tag {
    .scroll-wrapper {
      height: 32px;
    }
    .tab-item {
      background: #fff;
      height: 34px;
      line-height: 33px;
      border-radius: 2px;
      padding: 0 12px;
      border: 1px solid #e8eaec;
      margin-right: 10px;
      font-size: 14px;
      &::before {
        content: "";
        background: #e1e1e1;
        display: inline-block;
        position: relative;
        top: 1px;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        margin-right: 8px;
      }
      &.width-icon::before {
        display: none;
      }
      &.active {
        &:hover {
          padding: 0 12px;
        }
        &::before {
          background: #409eff;
        }
        .custom-icon {
          color: #409eff;
        }
      }
      &.no-close:hover {
        padding: 0 12px;
      }
    }
    .nav-wrap.is-scrollable {
      .nav-next,
      .nav-prev {
        line-height: 36px;
      }
    }
  }
}
</style>
