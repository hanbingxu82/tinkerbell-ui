<!--
 * @Author: your name
 * @Date: 2021-03-24 08:09:09
 * @LastEditTime: 2021-06-18 16:01:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/packages/tbCheckbox/main.vue
-->
<template>
  <div :class="`tb-checkbox checkbox ${tbDisabled} ${tbBorder} ${tbSize} ${tbBorder && labelChecked ? 'is-boder-active' : ''}`" v-inpClick>
    <div class="checkbox-box ">
      <input v-if="!checkboxGroupValue && !indeterminate" v-on:click.stop :class="`${tbDisabled}`" :disabled="disabled" :checked="labelChecked" @change="checkboxMethodsChange" type="checkbox" />
      <input v-else-if="checkboxGroupValue && !indeterminate" :name="name || checkboxGroup.name" v-on:click.stop :class="`${tbDisabled}`" :disabled="disabled" :checked="labelChecked" :value="label" @change="tbCheckboxGroupParentMethod($event.target)" type="checkbox" />
      <input ref="indeterminate" v-else v-on:click.stop :class="`${tbDisabled}`" :indeterminate="indeterminate" :disabled="disabled" :checked="labelChecked" @change="checkboxMethodsChange" type="checkbox" />
      <span :class="`checkbox-text ${labelChecked && !disabled ? 'check-this' : ''}`"
        ><span v-if="label">{{ label }}</span
        ><slot v-else></slot
      ></span>
    </div>
  </div>
</template>
<script>
import Emitter from "../mixins/emitter";
export default {
  name: "tbCheckbox",
  mixins: [Emitter],
  model: {
    prop: "checked",
    event: "change",
  },
  props: {
    name: {
      type: String,
      default: "",
    },
    indeterminate: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: "",
    },
    // label复选框value值
    label: {
      type: Boolean | String | Number,
      default: false,
    },
    // v-model双绑的值value
    checked: {
      type: Boolean | String,
      default: false,
    },
    // 是否禁用
    disabled: {
      type: Boolean,
      default: false,
    },
    border: {
      type: Boolean,
      default: false,
    },
  },
  inject: {
    checkboxGroup: { default: "" },
  },
  data() {
    return {
      labelChecked: false,
      tbDisabled: "",
      tbSize: "",
      tbBorder: "",
    };
  },
  watch: {
    checked(val, oldVal) {
      this.isChecked();
    },
    disabled(val, oldVal) {
      this.PDisabled();
    },
    border(val, oldVal) {
      this.PBorder();
    },
  },
  computed: {
    checkboxGroupValue: function() {
      this.isGroup();
      // 每次变更需要触发一下min max
      this.isMinMax();
      return this.checkboxGroup.value;
    },
  },
  created() {
    this.isGroup();
    this.PDisabled();
    this.PBorder();
    // this.Psize()
    this.isMinMax();
  },
  mounted() {},
  methods: {
    checkboxMethodsChange(event) {
      $emit("change", event.target.checked);
           this.dispatch("tbFormItem", "form-change", event.target.value);
    },
    // 页面加载时判断最小选中值 和最大选中值   以及每次触发选中事件时也同样要触发这个事件
    isMinMax() {
      const vm = this;
      if (this.checkboxGroup.value) {
        // 如果是的话才会去调用筛选min  和  max
        // this.checkboxGroup.min, this.checkboxGroup.max
        // 判断this.checkboxGroup.value的长度
        vm.checkboxGroup.value.forEach((element) => {
          if (vm.checkboxGroup.value.length >= vm.checkboxGroup.max) {
            if (vm.labelChecked) {
              vm.tbDisabled = "  ";
            } else {
              vm.tbDisabled = " is_disabled ";
            }
          } else if (vm.checkboxGroup.value.length <= vm.checkboxGroup.min) {
            // 此处需要判断
            if (vm.labelChecked) {
              vm.tbDisabled = " is_disabled ";
            } else {
              vm.tbDisabled = " ";
            }
          } else {
            vm.tbDisabled = " ";
          }
        });
      }
    },
    // 页面加载判断当前按钮大小
    Psize() {
      const vm = this;
      if (vm.size == "mini" || vm.radioGroup.size == "mini") {
        vm.tbSize = "checkbox_mini";
      } else if (vm.size == "small" || vm.checkboxGroup.size == "small") {
        vm.tbSize = "checkbox_small";
      } else if (vm.size == "medium" || vm.checkboxGroup.size == "medium") {
        vm.tbSize = "checkbox_medium";
      } else {
        vm.tbSize = "";
      }
    },
    // 判断是否为tb-checkbox-group子项
    isGroup() {
      if (this.checkboxGroup.value) {
        // 如果是调用checkbox组判断的选中方法
        this.isGroupChecked();
      } else {
        this.isChecked();
      }
    },
    // 单个checkbox   v-model 选中判断的
    isChecked() {
      const vm = this;
      // 判断传入的两值是否相等  如果相等 labelChecked变为true
      if (/ Boolean/.test(Object.prototype.toString.call(vm.checked))) {
        vm.checked ? (vm.labelChecked = true) : (vm.labelChecked = false);
      } else {
        vm.labelChecked = false;
      }
    },
    isGroupChecked() {
      const vm = this;
      // 判断传入的两值是否相等  如果相等 labelChecked变为true
      if (vm.checkboxGroup.value.length > 0 && / Array/.test(Object.prototype.toString.call(vm.checkboxGroup.value))) {
        vm.labelChecked = false;
        vm.checkboxGroup.value.forEach((element) => {
          if (element == vm.label) {
            vm.labelChecked = true;
          }
        });
      } else {
        vm.labelChecked = false;
      }
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
    // 判断是否有border
    PBorder() {
      let vm = this;
      if (this.border) {
        vm.tbBorder = " is_border ";
      } else {
        vm.tbBorder = "";
      }
    },
    checkboxChange($event) {
      this.$emit("change", $event.target.checked);
    },
    // 变更调用父元素方法
    tbCheckboxGroupParentMethod(dom) {
      this.checkboxGroup.tbCheckboxGroupParentMethod(dom);
    },
  },
};
</script>
<style scoped>
.checkbox-box {
  position: relative;
}
.is_border {
  border: 1px solid #dcdfe6;
  padding: 12px 20px;
  box-sizing: border-box;
  margin: auto;
  border-radius: 4px;
}
.is-boder-active {
  border: 1px solid #409eff;
  padding: 12px 20px;
  box-sizing: border-box;
  margin: auto;
}
.checkbox_mini.is_border {
  padding: 6px 15px;
}
.checkbox_mini.is-boder-active {
  padding: 6px 15px;
}
.checkbox_small.is_border {
  padding: 8px 15px;
}
.checkbox_small.is-boder-active {
  padding: 8px 15px;
}
.checkbox_medium.is_border {
  padding: 10px 20px;
}
.checkbox_medium.is-boder-active {
  padding: 10px 20px;
}
.check-this {
  color: #409eff;
}
input[type="checkbox" i] {
  margin: 0;
  /* width: 100%;
  height: 100%; */
  left: 0;
  top: 50%;
  color: #409eff;
  transform: translate(0%, -50%);
  position: absolute;
}

.checkbox {
  /* overflow: hidden; */
  position: relative;
  /* padding-left: 20px; */
  display: inline-block;
  /* vertical-align: text-bottom; */
  margin: 0 10px;

  cursor: pointer;
}
.is_disabled {
  /* pointer-events: none; */
  cursor: not-allowed !important;
  opacity: 0.6;
}
.checkbox-text {
  display: inline-block;
  margin-left: 20px;
}
</style>
