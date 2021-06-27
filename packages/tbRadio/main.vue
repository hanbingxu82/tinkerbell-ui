<!--
 * @Author: your name
 * @Date: 2021-03-22 13:47:52
 * @LastEditTime: 2021-06-18 16:55:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/packages/tbRadio/main.vue
-->

<template>
  <div :class="`tb-radio radio ${tbDisabled} ${tbBorder} ${tbSize} ${tbBorder && labelChecked ? 'is-boder-active' : ''}`" v-inpClick>
    <div class="radio-box ">
      <input v-on:click.stop :name="name || radioGroup.name" v-if="!radioGroupValue&&!radioGroup" :class="`${tbDisabled}`" :disabled="disabled" :checked="labelChecked" :value="label" @change="radioChange" type="radio" />
      <input v-on:click.stop :name="name || radioGroup.name" v-else :class="`${tbDisabled}`" :disabled="disabled" :checked="labelChecked" :value="label" @change="tbRadioGroupParentMethod($event.target.value)" type="radio" />
      <span :class="`radio-text ${labelChecked ? 'check-this' : ''}`"><slot></slot></span>
    </div>
  </div>
</template>

<script>
import Emitter from "../mixins/emitter";
export default {
  name: "tbRadio",
  mixins: [Emitter],
  //   特定  如复选框  单选框有特定的model对象键值，
  model: {
    prop: "checked",
    event: "change",
  },
  props: {
    name: {
      type: String,
      default: "",
    },
    size: {
      type: String,
      default: "",
    },
    // label单选框value值
    label: {
      type: Number | String,
      default: "",
    },
    // v-model双绑的值value
    checked: {
      type: Boolean | Number | String,
      default: "",
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
    radioGroup: { default: "" },
  },
  computed: {
    // 计算属性的 getter
    radioGroupValue: function() {
      this.isGroup();
      return this.radioGroup.value;
    },
  },
  watch: {
    checked(val, oldVal) {
      this.isGroup();
    },
    disabled(val, oldVal) {
      this.PDisabled();
    },
    border(val, oldVal) {
      this.PBorder();
    },
  },
  data() {
    return {
      labelChecked: false,
      tbDisabled: "",
      tbBorder: "",
      tbSize: "",
    };
  },
  created() {
    // console.log(this.radioGroup);
    this.isGroup();
    this.PDisabled();
    this.PBorder();
    this.Psize();
  },
  methods: {
    radioChange(event) {
      debugger
      this.$emit("change", event.target.value);
      this.dispatch("tbFormItem", "form-change", event.target.value);
    },
    // 页面加载判断当前按钮大小
    Psize() {
      const vm = this;
      if (vm.size == "mini" || vm.radioGroup.size == "mini") {
        vm.tbSize = "radio_mini";
      } else if (vm.size == "small" || vm.radioGroup.size == "small") {
        vm.tbSize = "radio_small";
      } else if (vm.size == "medium" || vm.radioGroup.size == "medium") {
        vm.tbSize = "radio_medium";
      } else {
        vm.tbSize = "";
      }
    },
    // 判断是否为tb-radio-group子项
    isGroup() {
      if (this.radioGroup.value) {
        // 如果是调用radio组判断的选中方法
        this.isGroupChecked();
      } else {
        this.isChecked();
      }
    },
    // radio组    v-model 选中判断的
    isGroupChecked() {
      const vm = this;
      // 判断传入的两值是否相等  如果相等 labelChecked变为true
      if (this.radioGroup.value === this.label) {
        vm.labelChecked = true;
      } else {
        vm.labelChecked = false;
      }
    },
    // 单个radio   v-model 选中判断的
    isChecked() {
      const vm = this;
      // 判断传入的两值是否相等  如果相等 labelChecked变为true
      if (this.checked === this.label) {
        vm.labelChecked = true;
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
    // 变更调用父元素方法
    tbRadioGroupParentMethod(value) {
      this.radioGroup.tbRadioGroupParentMethod(value);
    },
  },
};
</script>

<style scoped>
.radio-box {
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
  border: 1px solid #1089ff;
  padding: 12px 20px;
  box-sizing: border-box;
  margin: auto;
}
.radio_mini.is_border {
  padding: 6px 15px;
}
.radio_mini.is-boder-active {
  padding: 6px 15px;
}
.radio_small.is_border {
  padding: 8px 15px;
}
.radio_small.is-boder-active {
  padding: 8px 15px;
}
.radio_medium.is_border {
  padding: 10px 20px;
}
.radio_medium.is-boder-active {
  padding: 10px 20px;
}
.check-this {
  color: #1089ff;
}
input[type="radio" i] {
  margin: 0;
  /* width: 100%;
  height: 100%; */
  left: 0;
  top: 50%;
  color: #1089ff;
  transform: translate(0%, -50%);
  position: absolute;
}
input[type="radio"] {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
input[type="radio"]:after {
  position: absolute;
  left: 0;
  top: 50%;
  transform: translate(0%, -50%);
  content: "";
  border: 1px solid #dcdfe6;
  border-radius: 100%;
  width: 14px;
  height: 14px;
  background-color: #fff;
  cursor: pointer;
  display: inline-block;
  box-sizing: border-box;
}
input[type="radio"]:checked:after {
  position: absolute;
  left: 0;
  top: 50%;
  transform: translate(0%, -50%);
  content: "";
  border: 6px solid #1089ff;
  border-radius: 100%;
  width: 14px;
  height: 14px;
  background-color: #fff;
  cursor: pointer;
  display: inline-block;
}

.radio {
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
.radio-text {
  display: inline-block;
  margin-left: 20px;
}
</style>
