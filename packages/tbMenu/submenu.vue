<!--
 * @Author: your name
 * @Date: 2021-06-18 14:15:26
 * @LastEditTime: 2021-06-18 15:34:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/packages/tbMenu/submenu.vue
-->
<template>
  <li :class="classes" @mouseenter="handleMouseenter" @mouseleave="handleMouseleave">
    <div :class="[prefixCls + '-submenu-title']" ref="reference" @click.stop="handleClick" :style="titleStyle">
      <slot name="title"></slot>
      <i :class="[prefixCls + '-submenu-title-icon', 'iconfont', arrowName]"></i>
    </div>
    <collapse-transition v-if="mode === 'vertical'">
      <ul :class="[prefixCls]" v-show="opened">
        <slot></slot>
      </ul>
    </collapse-transition>
    <transition name="zoom-in-top" v-else>
      <drop v-show="opened" :placement="placement" :class-name="`tb-menu-horizontal-dropdown ${rootMenu.theme}`" ref="drop" :style="dropStyle" :data-transfer="transfer" :transfer="transfer" v-transfer-dom @mouseenter.native="handleMouseenter" @mouseleave.native="handleMouseleave">
        <ul :class="[prefixCls + '-drop-list']">
          <slot></slot>
        </ul>
      </drop>
    </transition>
  </li>
</template>

<script>
import CollapseTransition from "../base/collapse-transition";
import Drop from "../tbSelect/drop.vue";
import { findComponentUpward, findComponentsDownward } from "../utils/utils";
import { getStyle } from "../utils/dom";
import Emitter from "../mixins/emitter";
import Mixin from "./mixin";
import TransferDom from "../directive/transferDom";

const prefixCls = "tb-menu";

export default {
  name: "tbSubmenu",
  mixins: [Emitter, Mixin],
  inject: ["rootMenu"],
  directives: { TransferDom },
  components: { Drop, CollapseTransition },
  props: {
    name: {
      type: [String, Number],
      required: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    transfer: Boolean, // 是否移动至body
  },
  data() {
    return {
      prefixCls: prefixCls,
      active: false,
      opened: false,
      dropWidth: parseFloat(getStyle(this.$el, "width")),
      placement: "bottom",
      arrowName: "icon-arrow-down",
    };
  },
  computed: {
    classes() {
      return [
        `${prefixCls}-submenu`,
        {
          [`${prefixCls}-item-active`]: this.active && !this.hasParentSubmenu,
          [`${prefixCls}-opened`]: this.opened,
          [`${prefixCls}-submenu-disabled`]: this.disabled,
          [`${prefixCls}-submenu-has-parent-submenu`]: this.hasParentSubmenu,
          [`${prefixCls}-child-item-active`]: this.active,
        },
      ];
    },
    accordion() {
      return this.menu.accordion;
    },
    dropStyle() {
      let style = {};

      if (this.dropWidth) style.minWidth = `${this.dropWidth}px`;
      return style;
    },
    titleStyle() {
      return this.hasParentSubmenu && this.mode !== "horizontal"
        ? {
            paddingLeft: 43 + (this.parentSubmenuNum - 1) * 24 + "px",
          }
        : {};
    },
  },
  methods: {
    handleMouseenter() {
      if (this.disabled) return;
      if (this.mode === "vertical") return;

      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        this.menu.updateOpenKeys(this.name);
        this.opened = true;
      }, 250);
    },
    handleMouseleave() {
      if (this.disabled) return;
      if (this.mode === "vertical") return;

      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        this.menu.updateOpenKeys(this.name);
        this.opened = false;
      }, 150);
    },
    handleClick() {
      if (this.disabled) return;
      if (this.mode === "horizontal") return;
      const opened = this.opened;
      if (this.accordion) {
        this.$parent.$children.forEach((item) => {
          if (item.$options.name === "tbSubmenu") item.opened = false;
        });
      }
      this.opened = !opened;
      this.menu.updateOpenKeys(this.name);
    },
  },
  watch: {
    mode(val) {
      if (val === "horizontal") {
 
        this.$refs.drop.update();
      }
    },
    opened(val) {
      if (this.mode === "vertical") return;
      if (val) {
        // set drop a width to fixed when menu has fixed position
        this.dropWidth = parseFloat(getStyle(this.$el, "width"));
        this.$refs.drop.update();
      } else {
        this.$refs.drop.destroy();
      }
    },
  },
  mounted() {
    console.log(this.mode)
    this.$on("menu-item-select", (name) => {
      if (this.mode === "horizontal") this.opened = false;
      this.dispatch("tbMenu", "menu-item-select", name);
      return true;
    });
    this.$on("update-active-name", (status) => {
      if (findComponentUpward(this, "tbSubmenu")) {
        this.dispatch("tbSubmenu", "update-active-name", status);
      }
      if (findComponentsDownward(this, "tbSubmenu")) {
        findComponentsDownward(this, "tbSubmenu").forEach((item) => {
          item.active = false;
        });
      }
      this.active = status;
    });
    if (this.hasParentSubmenu && this.mode === "horizontal") {
      this.placement = "right-start";
      this.arrowName = "icon-arrow-right";
    }
  },
};
</script>
<style>
</style>
