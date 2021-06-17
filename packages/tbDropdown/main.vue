<!--
 * @Author: your name
 * @Date: 2021-06-02 14:47:06
 * @LastEditTime: 2021-06-17 15:58:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/packages/tbDropdown/main.vue
-->
<template>
  <div :class="[prefixCls]" v-click-outside="onClickOutside" @mouseenter="handleMouseenter" @mouseleave="handleMouseleave">
    <div :class="relClasses" ref="reference" @click="handleClick" @contextmenu.prevent="handleRightClick">
      <slot></slot>
    </div>
    <transition name="zoom-in-top">
      <drop :class="dropdownCls" v-show="currentVisible" :placement="placement" ref="drop" @mouseenter.native="handleMouseenter" @mouseleave.native="handleMouseleave" :data-transfer="appendToBody" :transfer="appendToBody" v-transfer-dom>
        <slot name="list"></slot>
      </drop>
    </transition>
  </div>
</template>

<script>
import { oneOf, findComponentUpward } from "../utils/utils";
import ClickOutside from "../directive/clickoutside";
import TransferDom from "../directive/transferDom";
import Drop from "../select/drop";

const prefixCls = "tb-dropdown";
export default {
  name: "tbDropdown",
  directives: { ClickOutside, TransferDom },
  components: { Drop },
  props: {
    trigger: {
      validator(value) {
        return oneOf(value, ["click", "hover", "custom", "contextMenu"]);
      },
      default: "hover",
    },
    placement: {
      validator(value) {
        return oneOf(value, ["top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "left", "left-start", "left-end", "right", "right-start", "right-end"]);
      },
      default: "bottom",
    },
    visible: {
      type: Boolean,
      default: false,
    },
    appendToBody: Boolean, // 是否移动至body
    transferClassName: {
      // 包裹的样式名
      type: String,
    },
    stopPropagation: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      prefixCls: prefixCls,
      currentVisible: this.visible,
    };
  },
  watch: {
    visible(val) {
      this.currentVisible = val;
    },
    currentVisible(val) {
      if (val) {
        this.$refs.drop.update();
      }
      this.$emit("visible-change", val);
    },
  },
  methods: {
    handleClick() {
      if (this.trigger === "custom") return false;
      if (this.trigger !== "click") {
        return false;
      }
      this.currentVisible = !this.currentVisible;
    },
    handleRightClick() {
      if (this.trigger === "custom") return false;
      if (this.trigger !== "contextMenu") {
        return false;
      }
      this.currentVisible = !this.currentVisible;
    },
    handleMouseenter() {
      if (this.trigger === "custom") return false;
      if (this.trigger !== "hover") {
        return false;
      }
      if (this.timeout) clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        this.currentVisible = true;
      }, 250);
    },
    handleMouseleave() {
      if (this.trigger === "custom") return false;
      if (this.trigger !== "hover") {
        return false;
      }
      if (this.timeout) {
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          this.currentVisible = false;
        }, 150);
      }
    },
    onClickOutside(e) {
      this.handleClose();
      this.handleRightClose();
      if (this.currentVisible) this.$emit("click-outside", e);
    },
    handleClose() {
      if (this.trigger === "custom") return false;
      if (this.trigger !== "click") {
        return false;
      }
      this.currentVisible = false;
    },
    handleRightClose() {
      if (this.trigger === "custom") return false;
      if (this.trigger !== "contextMenu") {
        return false;
      }
      this.currentVisible = false;
    },
    hasParent() {
      const $parent = findComponentUpward(this, "BDropdown");
      if ($parent) {
        return $parent;
      } else {
        return false;
      }
    },
  },
  mounted() {
    this.$on("click", (key) => {
      if (this.stopPropagation) return;
      const $parent = this.hasParent();
      if ($parent) $parent.$emit("click", key);
    });
    this.$on("hover-click", () => {
      const $parent = this.hasParent();
      if ($parent) {
        this.$nextTick(() => {
          if (this.trigger === "custom") return false;
          this.currentVisible = false;
        });
        $parent.$emit("hover-click");
      } else {
        this.$nextTick(() => {
          if (this.trigger === "custom") return false;
          this.currentVisible = false;
        });
      }
    });
    this.$on("haschild-click", () => {
      this.$nextTick(() => {
        if (this.trigger === "custom") return false;
        this.currentVisible = true;
      });
      const $parent = this.hasParent();
      if ($parent) $parent.$emit("haschild-click");
    });
  },
  computed: {
    transition() {
      return ["bottom-start", "bottom", "bottom-end"].indexOf(this.placement) > -1 ? "slide-up" : "fade";
    },
    dropdownCls() {
      return {
        [prefixCls + "-transfer"]: this.appendToBody,
        [this.transferClassName]: this.transferClassName,
      };
    },
    relClasses() {
      return [
        `${prefixCls}-rel`,
        {
          [`${prefixCls}-rel-user-select-none`]: this.trigger === "contextMenu",
        },
      ];
    },
  },
};
</script>
<style lang="less">
.tb-dropdown {
  display: inline-block;
  .tb-dropdown {
    width: 100%;
  }
  &-rel {
    position: relative;
    &-user-select-none {
      user-select: none;
    }
  }
  &-menu {
    min-width: 100px;
  }
  &-transfer {
    width: auto;
    max-height: none;
  }
  &-item-selected,
  &-item&-item-selected:hover {
    background: #b3d8ff;
  }

  .tb-select-dropdown {
    overflow: visible;
    max-height: none;
    margin: 4px;
  }
}
.tb-dropdown-item {
  margin: 0;
  line-height: normal !important;
  padding: 6px 12px;
  clear: both;
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px !important;
  white-space: nowrap;
  list-style: none;
  cursor: pointer;
  transition: background 0.2s ease-in-out;
  .icon-arrow-right {
    position: relative;
    right: -6px;
  }
  &:hover {
    background: #f3f3f3;
  }
  &-disabled {
    color: #c5c8ce !important;
    cursor: not-allowed;
    &:hover {
      color: #c5c8ce !important;
      background-color: #fff;
      cursor: not-allowed;
    }
  }
  &-divided {
    margin-top: 5px;
    border-top: 1px solid #e8eaec;
  }
}
</style>
