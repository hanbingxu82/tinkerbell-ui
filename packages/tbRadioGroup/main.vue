<!--
 * @Author: your name
 * @Date: 2021-03-22 18:19:59
 * @LastEditTime: 2021-03-23 13:30:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/packages/tbRadioGroup/main.vue
-->
<template>
  <div :class="`tb-radio-group ${tbDisabled}`"><slot></slot></div>
</template>

<script>
export default {
  name: "tbRadioGroup",
  props: {
    value: {
      type: String | Number | Boolean,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      tbDisabled: "",
    };
  },
  watch: {
    disabled(val, oldVal) {
      this.PDisabled();
    },
  },
  provide() {
    return {
      radioGroup: this,
    };
  },
  created() {
    this.PDisabled();
  },

  methods: {
    //   子值变更触发父元素方法，形成传值，然后采用emit的方式字串符，实现孙子传爷爷值
    tbRadioGroupParentMethod(value) {
      this.$emit("input", value);
      // 同时触发父元素的Change事件
      this.$emit("change", value);
    },
    // 判断是否是禁用
    PDisabled() {
      let vm = this;
      if (this.disabled) {
        vm.tbDisabled = " is_disabled ";
      } else {
        vm.tbDisabled = " ";
      }
    },
  },
};
</script>

<style>
.is_disabled {
  pointer-events: none;
  /* cursor: not-allowed !important; */
  opacity: 0.6;
}
</style>
