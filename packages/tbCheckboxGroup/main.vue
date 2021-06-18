<!--
 * @Author: your name
 * @Date: 2021-03-24 10:42:30
 * @LastEditTime: 2021-06-18 16:32:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/packages/tbCheckboxGroup/main.vue
-->
<template>
  <div :class="`tb-checkbox-group ${tbDisabled}`"><slot></slot></div>
</template>

<script>
import Emitter from "../mixins/emitter";
export default {
  name: "tbCheckboxGroup",
  mixins: [Emitter],
  props: {
    value: {
      type: Array,
      default: function() {
        return [];
      },
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
    // 最小选中数量
    min: {
      type: Number,
      default: 0,
    },
    // 最大如果不传默认显示为9999
    max: {
      type: Number,
      default: 9999,
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
      checkboxGroup: this,
    };
  },
  created() {
    this.PDisabled();
  },

  methods: {
    //   子值变更触发父元素方法，形成传值，然后采用emit的方式字串符，实现孙子传爷爷值
    tbCheckboxGroupParentMethod(dom) {
      // 此时我们获取到了点击当前节点的元素,先判断是选中还是移除
      // 如果是新增
      let val = [...this.value];
      if (dom.checked) {
        val = [...this.value, dom.value];
      } else {
        val.forEach((item, index, arr) => {
          if (item === dom.value) {
            arr.splice(index, 1);
          }
        });
      }
      this.$emit("input", val);
      //   // 同时触发父元素的Change事件  对外暴露
      this.$emit("change", val);
      this.dispatch("tbFormItem", "form-change", val);
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
