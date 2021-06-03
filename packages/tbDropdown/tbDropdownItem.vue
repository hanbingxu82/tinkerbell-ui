<!--
 * @Author: your name
 * @Date: 2021-06-02 15:03:44
 * @LastEditTime: 2021-06-02 15:57:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/packages/tbDropdown/tbDropdownItem.vue
-->
<template>
  <li :class="classes" @click="handleClick">
    <slot></slot>
  </li>
</template>

<script>
import { findComponentUpward } from "../utils/util";

const prefixCls = "tb-dropdown-item";

export default {
  name: "tbDropdownItem",
  props: {
    name: {
      type: [String, Number],
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    selected: {
      type: Boolean,
      default: false,
    },
    divided: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classes() {
      return [
        `${prefixCls}`,
        {
          [`${prefixCls}-disabled`]: this.disabled,
          [`${prefixCls}-selected`]: this.selected,
          [`${prefixCls}-divided`]: this.divided,
        },
      ];
    },
  },
  methods: {
    handleClick() {
      const $parent = findComponentUpward(this, "tbDropdown");
      const hasChildren = this.$parent && this.$parent.$options.name === "tbDropdown";
      if (this.disabled) {
        this.$nextTick(() => {
          $parent.currentVisible = true;
        });
        return;
      } else if (hasChildren) {
        this.$parent.$emit("haschild-click");
      } else {
        if ($parent && $parent.$options.name === "tbDropdown") {
          $parent.$emit("hover-click");
        }
      }
      $parent.$emit("click", this.name);
    },
  },
};
</script>
