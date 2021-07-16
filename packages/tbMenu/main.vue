<!--
 * @Author: your name
 * @Date: 2021-06-15 09:13:26
 * @LastEditTime: 2021-07-16 09:51:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/packages/tbMenu/main.vue
-->
<template>
  <ul :class="classes" :style="styles">
    <slot></slot>
  </ul>
</template>
<script>
import { oneOf, findComponentsDownward, findComponentsUpward } from "../utils/utils";
import Emitter from "../mixins/emitter";

const prefixCls = "tb-menu";

export default {
  name: "tbMenu",
  mixins: [Emitter],
  provide() {
    return {
      rootMenu: this,
    };
  },
  props: {
    // 判断是横向还是竖向  水平/垂直
    mode: {
      validator(value) {
        return oneOf(value, ["horizontal", "vertical"]);
      },
      default: "vertical",
    },
    // 判断主题类型
    theme: {
      validator(value) {
        return oneOf(value, ["light", "dark"]);
      },
      default: "light",
    },
    // 激活菜单的 name 值
    activeName: {
      type: [String, Number],
    },
    // 展开的 Submenu 的 name 集合
    openNames: {
      type: Array,
      default() {
        return [];
      },
    },
    // 展开所有的 Submenu
    expandAll: {
      type: Boolean,
    },
    // 是否开启手风琴模式
    accordion: {
      type: Boolean,
      default: false,
    },
    // 导航菜单的宽度，只在 mode="vertical" 时有效  默认是240px
    width: {
      type: String,
      default: "240px",
    },
  },
  data() {
    return {
      currentActiveName: this.activeName,
      openedNames: [],
    };
  },
  computed: {
    classes() {
      let theme = this.theme;
      return [
        `${prefixCls}`,
        `${prefixCls}-${theme}`,
        {
          [`${prefixCls}-${this.mode}`]: this.mode,
        },
      ];
    },
    styles() {
      let style = {};
      if (this.mode === "vertical") style.width = this.width;
      return style;
    },
  },
  methods: {
    updateActiveName() {
      if (this.currentActiveName === undefined) {
        this.currentActiveName = -1;
      }
      this.broadcast("tbSubmenu", "update-active-name", false);
      this.broadcast("tbMenuItem", "update-active-name", this.currentActiveName);
    },
    updateOpenKeys(name) {
      let names = [...this.openedNames];
      const index = names.indexOf(name);
      if (this.accordion) {
        findComponentsDownward(this, "tbSubmenu").forEach((item) => {
          item.opened = false;
        });
      }
      if (index >= 0) {
        let currentSubmenu = null;
        findComponentsDownward(this, "tbSubmenu").forEach((item) => {
          if (item.name === name) {
            currentSubmenu = item;
            item.opened = false;
          }
        });
        findComponentsUpward(currentSubmenu, "tbSubmenu").forEach((item) => {
          item.opened = true;
        });
        findComponentsDownward(currentSubmenu, "tbSubmenu").forEach((item) => {
          item.opened = false;
        });
      } else {
        if (this.accordion) {
          let currentSubmenu = null;
          findComponentsDownward(this, "tbSubmenu").forEach((item) => {
            if (item.name === name) {
              currentSubmenu = item;
              item.opened = true;
            }
          });
          findComponentsUpward(currentSubmenu, "tbSubmenu").forEach((item) => {
            item.opened = true;
          });
        } else {
          findComponentsDownward(this, "tbSubmenu").forEach((item) => {
            if (item.name === name) item.opened = true;
          });
        }
      }
      let openedNames = findComponentsDownward(this, "tbSubmenu")
        .filter((item) => item.opened)
        .map((item) => item.name);
      this.openedNames = [...openedNames];
      this.$emit("open-change", openedNames);
    },
    updateOpened() {
      const items = findComponentsDownward(this, "tbSubmenu");
      // 判断是否展开所有submenu，如展开则全部
      if (items.length) {
        items.forEach((item) => {
          item.opened = this.expandAll ? true : this.openedNames.indexOf(item.name) > -1;
        });
      }
      // 更新openedNames
      let openedNames = items.filter((item) => item.opened).map((item) => item.name);
      this.openedNames = [...openedNames];
    },
    handleEmitSelectEvent(name) {
      this.$emit("select", name);
    },
  },
  mounted() {
    this.openedNames = [...this.openNames];
    this.updateOpened();
    this.$nextTick(() => this.updateActiveName());
    this.$on("menu-item-select", (name) => {
      this.currentActiveName = name;
      this.$emit("select", name);
    });
  },
  watch: {
    openNames(names) {
      this.openedNames = names;
    },
    activeName(val) {
      this.currentActiveName = val;
    },
    currentActiveName() {
      this.updateActiveName();
    },
  },
};
</script>
<style lang="less">
// 菜单样式
.tb-menu-wrapper {
  position: relative;
  height: 60px;
  line-height: 60px;
  .nav-wrap {
    position: relative;
    height: 100%;
  }
  .scroll-container {
    white-space: nowrap;
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100%;
    .scroll-wrapper {
      position: absolute;
      -webkit-transition: 0.2s;
      transition: 0.2s;
    }
  }
}
.tb-menu {
  display: block;
  margin: 0;
  padding: 0;
  outline: 0;
  list-style: none;
  line-height: 2em;
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
  position: relative;
  &-horizontal {
    height: 60px;
    line-height: 60px;
    font-size: 0;
    // &.tb-menu-light {
    //   &:after {
    //     content: "";
    //     display: block;
    //     width: 100%;
    //     height: 1px;
    //     background: #dcdee2;
    //     position: absolute;
    //     bottom: 0;
    //     left: 0;
    //   }
    // }
  }
  &-vertical {
    &.tb-menu-light {
      &:after {
        content: "";
        display: block;
        width: 1px;
        height: 100%;
        background: #dcdee2;
        position: absolute;
        top: 0;
        bottom: 0;
        right: -1px;
        z-index: 1;
      }
    }
  }

  &-light {
    background: #ffffff;
  }
  &-dark {
    background: #001529;
  }
  &-item,
  &-submenu-title {
    display: block;
    outline: none;
    list-style: none;
    font-size: 14px;
    position: relative;
    z-index: 1;
    cursor: pointer;
  }
  a&-item {
    color: inherit;
    &:hover,
    &:active {
      color: inherit;
    }
  }
  &-item > i {
    margin-right: 6px;
  }
  &-submenu-title > i,
  &-submenu-title span > i {
    margin-right: 8px;
  }
  &-submenu-title > .icon-ios-arrow-down,
  &-submenu-title span > i.icon-ios-arrow-down {
    margin-right: 0;
  }

  &-submenu-title-icon {
    transition: transform 0.2s ease-in-out;
  }
  &-horizontal &-item,
  &-horizontal &-submenu {
    float: left;
    padding: 0 20px;
    position: relative;
    cursor: pointer;
    z-index: 3;
    transition: all 0.2s ease-in-out;
  }
  &-horizontal > &-item,
  &-horizontal > &-submenu {
    float: none;
    display: inline-block;
    vertical-align: bottom;
  }

  &-light&-horizontal &-item,
  &-light&-horizontal > &-submenu {
    box-sizing: border-box;
    height: inherit;
    line-height: inherit;
    border-bottom: 3px solid transparent;
    color: rgba(0, 0, 0, 0.65);
    &-active,
    &:hover {
      color: #1089ff;
      border-bottom: 3px solid #1089ff;
    }
  }
  &-light&-horizontal &-item {
    &-active {
      color: rgba(0, 0, 0, 0.65);
    }
  }
  &-dark&-horizontal &-item,
  &-dark&-horizontal > &-submenu {
    height: inherit;
    line-height: inherit;
    color: rgba(255, 255, 255, 0.65);
    &-active,
    &:hover {
      color: #ffffff;
    }
  }

  &-horizontal &-submenu .tb-select-dropdown {
    min-width: 100%;
    width: auto;
    max-height: none;
    .tb-menu-item {
      height: auto;
      line-height: normal;
      border-bottom: 0;
      float: none;
    }
  }

  &-horizontal &-opened > * > &-submenu-title-icon {
    transform: rotate(180deg);
  }
  &-item-group {
    line-height: normal;
    &-title {
      height: 30px;
      line-height: 30px;
      padding-left: 8px;
      font-size: 14px;
      color: #999;
    }

    & > ul {
      padding: 0 !important;
      list-style: none !important;
    }
  }

  // vertical
  &-vertical &-item,
  &-vertical &-submenu-title {
    padding: 10px 24px;
    position: relative;
    cursor: pointer;
    z-index: 1;
    transition: all 0.2s ease-in-out;
    &:hover {
      color: #1089ff;
    }
  }

  &-vertical &-submenu-title-icon {
    position: absolute;
    top: 50%;
    right: 24px;
    transform: translateY(-50%);
  }
  &-vertical &-opened > * > &-submenu-title-icon {
    transform: translateY(-50%) rotate(180deg);
  }
  &-vertical &-submenu {
    &-nested {
      padding-left: 20px;
    }
    .tb-menu-item {
      padding-left: 43px;
    }
  }
  &-vertical &-submenu {
    &-nested {
      padding-left: 20px;
    }
    .tb-menu-item {
      padding-left: 43px;
    }
  }
  &-vertical &-item-group {
    &-title {
      height: 48px;
      line-height: 48px;
      font-size: 14px;
      padding-left: 28px;
    }
  }
  &-dark&-vertical &-item-group {
    &-title {
      color: rgba(255, 255, 255, 0.65);
      background: #000c17;
    }
  }
  &-light&-vertical {
    .tb-menu-item-active:not(.tb-menu-submenu) {
      color: #1089ff;
      background: #e7f3ff;
      &:after {
        content: "";
        display: block;
        width: 2px;
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        background: #1089ff;
      }
    }
  }
  &-light&-vertical &-submenu {
    .tb-menu-item-active {
      color: #1089ff;
      background: #e7f3ff;
      z-index: 2;
      &:after {
        content: "";
        display: block;
        width: 2px;
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        background: #1089ff;
      }
    }
  }
  &-dark&-vertical &-item,
  &-dark&-vertical &-submenu-title {
    color: rgba(255, 255, 255, 0.65);
    &:hover {
      color: #ffffff;
    }
    &-active:not(.tb-menu-submenu) {
      color: #ffffff;
      background: #1089ff;
    }
  }

  &-dark&-vertical &-submenu {
    .tb-menu-submenu-title {
      background: #001529;
    }
    .tb-menu-submenu,
    .tb-menu-item {
      background: #000c17;
    }
    .tb-menu-item {
      &:hover {
        color: #ffffff;
      }
      &-active,
      &-active:hover {
        border-right: none;
        color: #ffffff;
        background: #1089ff !important;
      }
    }
  }

  &-dark&-vertical &-child-item-active > &-submenu-title {
    color: #ffffff;
  }

  &-dark&-vertical &-opened {
    .tb-menu-submenu-has-parent-submenu {
      .tb-menu-submenu-title {
        background: transparent;
      }
    }
  }

  .tb-menu-item,
  .tb-menu-submenu-title span,
  .tb-menu-submenu-title {
    > i:not(.icon-ios-arrow-down) {
      vertical-align: -1px;
      font-size: 18px;
    }
  }
}
// item样式
.tb-menu-horizontal .tb-menu-submenu .tb-select-dropdown {
  overflow: visible;
  max-height: none;
  .tb-menu-item,
  .tb-menu-submenu-has-parent-submenu {
    margin: 0;
    line-height: 36px;
    height: 36px;
    padding: 0 10px;
    clear: both;
    color: rgba(0, 0, 0, 0.65);
    font-size: 14px !important;
    white-space: nowrap;
    list-style: none;
    cursor: pointer;
    transition: background 0.2s ease-in-out;

    &:hover {
      color: #1089ff;
    }

    &-focus {
      background: #e7f3ff;
    }

    &-disabled {
      color: #c5c8ce;
      cursor: not-allowed;

      &:hover {
        color: #c5c8ce;
        background-color: #ffffff;
        cursor: not-allowed;
      }
    }

    &-selected,
    &-selected:hover {
      color: #1089ff;
      background: #e7f3ff;
    }

    &-divided {
      margin-top: 5px;
      border-top: 1px solid #d9d9d9;
      &:before {
        content: "";
        height: 5px;
        display: block;
        margin: 0 -16px;
        background-color: #ffffff;
        position: relative;
        top: -7px;
      }
    }
  }
  .tb-menu-submenu-has-parent-submenu {
    float: none;
    padding: 0;
    width: 100%;
    line-height: 36px;
    height: 36px;
    font-size: 14px;
    &.tb-menu-child-item-active {
      color: #1089ff;
    }
    .tb-menu-submenu-title {
      padding: 0 10px;
      position: relative;
      .iconfont.tb-menu-submenu-title-icon {
        position: absolute;
        top: 50%;
        right: 0;
        margin-top: -17px;
        font-size: 14px;
        transition: transform 0.2s;
      }
    }
  }
}

.tb-menu-dark.tb-menu-horizontal {
  .tb-select-dropdown {
    background: #001529;
    .tb-menu-item,
    .tb-menu-submenu-has-parent-submenu {
      color: rgba(255, 255, 255, 0.65);

      &:hover {
        color: #ffffff;
      }

      &-focus {
        background: #e7f3ff;
      }

      &-disabled {
        color: #c5c8ce;
        cursor: not-allowed;

        &:hover {
          color: #c5c8ce;
          background-color: #ffffff;
          cursor: not-allowed;
        }
      }

      &-selected,
      &-selected:hover {
        color: #ffffff;
        background: #1089ff;
      }
    }
  }
}

// append-to-body item
.tb-menu-horizontal-dropdown {
  min-width: 100%;
  width: auto;
  max-height: none;
  overflow: visible;
  .tb-menu-item {
    height: auto;
    line-height: normal;
    border-bottom: 0;
    float: none;
  }
  .tb-menu-item,
  .tb-menu-submenu-has-parent-submenu {
    margin: 0;
    line-height: 36px;
    height: 36px;
    padding: 0 10px;
    clear: both;
    color: rgba(0, 0, 0, 0.65);
    font-size: 14px !important;
    white-space: nowrap;
    list-style: none;
    cursor: pointer;
    transition: background 0.2s ease-in-out;

    &:hover {
      color: #1089ff;
    }

    &-focus {
      background: #e7f3ff;
    }

    &-disabled {
      color: #c5c8ce;
      cursor: not-allowed;

      &:hover {
        color: #c5c8ce;
        background-color: #ffffff;
        cursor: not-allowed;
      }
    }

    &-selected,
    &-selected:hover {
      color: #1089ff;
      background: #e7f3ff;
    }

    &-divided {
      margin-top: 5px;
      border-top: 1px solid #d9d9d9;
      &:before {
        content: "";
        height: 5px;
        display: block;
        margin: 0 -16px;
        background-color: #ffffff;
        position: relative;
        top: -7px;
      }
    }
  }
  .tb-menu-submenu-has-parent-submenu {
    float: none;
    padding: 0;
    width: 100%;
    line-height: 36px;
    height: 36px;
    font-size: 14px;
    &.tb-menu-child-item-active {
      color: #1089ff;
    }
    .tb-menu-submenu-title {
      padding: 0 10px;
      position: relative;
      .iconfont.tb-menu-submenu-title-icon {
        position: absolute;
        top: 50%;
        right: 0;
        margin-top: -7px;
        font-size: 14px;
        transition: transform 0.2s;
      }
    }
  }
  &.dark {
    background: #001529;
    .tb-menu-item,
    .tb-menu-submenu-has-parent-submenu {
      color: rgba(255, 255, 255, 0.65);

      &:hover {
        color: #ffffff;
      }

      &-focus {
        background: #e7f3ff;
      }

      &-disabled {
        color: #c5c8ce;
        cursor: not-allowed;

        &:hover {
          color: #c5c8ce;
          background-color: #ffffff;
          cursor: not-allowed;
        }
      }

      &-selected,
      &-selected:hover {
        color: #ffffff;
        background: #1089ff;
      }
    }
  }
}
//  下拉动画
.collapse-transition {
  transition: 0.3s height ease-in-out, 0.3s padding-top ease-in-out, 0.3s padding-bottom ease-in-out;
}
.horizontal-collapse-transition {
  transition: 0.3s width ease-in-out, 0.3s padding-left ease-in-out, 0.3s padding-right ease-in-out;
}
</style>
