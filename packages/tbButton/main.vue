<!--
 * @Author: your name
 * @Date: 2021-03-16 13:59:49
 * @LastEditTime: 2021-06-18 16:50:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/packages/table/table.vue
 * 除按钮组、autofocus、autofocus两个api属性 也未实现
-->
<template>
  <div v-on.prevent="$listeners" v-if="!tbIcon && type != 'text'" :class="`tb-div button ${tbSize} ${tbType} ${tbPlain} ${tbRound} ${tbDisabled} ${loading ? 'is_disabled' : ' '}`"><i v-if="loading" class="iconfont icon-loading load"></i><slot></slot></div>
  <div v-on.prevent="$listeners" v-else-if="tbIcon && type != 'text'" :class="`tb-button button ${tbIcon} ${tbSize} ${tbType} ${tbPlain} ${tbRound} ${tbDisabled}`"><slot></slot></div>
  <a v-on.prevent="$listeners" v-else-if="type == 'text'" :class="`tb-button ${tbType} ${tbDisabled}`"><slot></slot></a>
</template>

<script>
export default {
  name: "tbButton",
  props: {
    // 大小
    size: {
      type: String,
      default: "small",
    },
    // 颜色
    type: {
      type: String,
      default: "",
    },
    // 朴素
    plain: {
      type: Boolean,
      default: false,
    },
    // 圆角按钮
    round: {
      type: Boolean,
      default: false,
    },
    // 图标按钮
    icon: {
      type: String,
      default: "",
    },
    // 圆形
    circle: {
      type: Boolean,
      default: false,
    },
    // 禁用
    disabled: {
      type: Boolean,
      default: false,
    },
    // 加载
    loading: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      tbSize: "button_small",
      tbType: "",
      tbPlain: "",
      tbRound: "",
      tbIcon: "",
      tbDisabled: "",
    };
  },
  watch: {
    // size(newValue, oldValue) {
    //   console.log(newValue);
    // },
    loading(newValue, oldValue) {
      console.log(newValue);
    },
    disabled(){
      this.PDisabled();
    },
  },
  created() {
    this.Psize();
    this.Ptype();
    this.Pplain();
    this.Pround();
    this.Picon();
    this.PDisabled();
  },
  beforeMount() {},
  methods: {
    // 页面加载判断当前按钮大小
    Psize() {
      const vm = this;
      if (vm.size == "mini") {
        vm.tbSize = "button_mini";
      } else if (vm.size == "small") {
        vm.tbSize = "button_small";
      } else if (vm.size == "medium") {
        vm.tbSize = "button_medium";
      }
    },
    // 页面加载判断当前按钮类型
    Ptype() {
      const vm = this;
      if (vm.type == "primary") {
        vm.tbType = "button_primary";
      } else if (vm.type == "success") {
        vm.tbType = "button_success";
      } else if (vm.type == "info") {
        vm.tbType = "button_info";
      } else if (vm.type == "warning") {
        vm.tbType = "button_warning";
      } else if (vm.type == "danger") {
        vm.tbType = "button_danger";
      } else if (vm.type == "text") {
        vm.tbType = "button_text";
      }
    },
    // 页面加载判断当前是否是朴素按钮
    Pplain() {
      const vm = this;
      if (vm.plain) {
        vm.tbPlain = "is-plain";
      } else {
        vm.tbPlain = "";
      }
    },
    // 页面加载判断是否为圆角按钮
    Pround() {
      const vm = this;
      if (vm.round) {
        vm.tbRound = "is-round";
      } else {
        vm.tbRound = "";
      }
    },
    // 页面加载判断是否为图标按钮  和圆形按钮
    Picon() {
      const vm = this;
      if (vm.icon && vm.circle) {
        vm.tbIcon = "button_icon iconfont " + vm.icon;
      } else if (vm.circle) {
        vm.tbIcon = "button_icon ";
      } else if (vm.icon) {
        vm.tbIcon = " iconfont " + vm.icon;
      } else {
        vm.tbIcon = "";
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
    PiconReturnMethods() {},
  },
};
</script>

<style lang="less" scoped>
// 不考虑size大小问题
.button_icon {
  width: 35px !important;
  height: 35px !important;
  border-radius: 50% !important;
  padding: 0 !important;
}
// is_disabled 禁用
.is_disabled {
  pointer-events: none;
  // cursor:not-allowed!important;
  opacity: 0.6;
}
// 文字按钮
.button_text {
  color: #409eff;
  cursor: pointer;
}
// loading加载动画

/*---------自定义快速旋转（就是引用刚才自定义loading的动画）------*/
.load {
  animation: rotate 3s linear infinite;
  display: inline-block;
}

@keyframes rotate {
  0% {
    -webkit-transform: rotate(0deg);
  }
  25% {
    -webkit-transform: rotate(90deg);
  }
  50% {
    -webkit-transform: rotate(180deg);
  }
  75% {
    -webkit-transform: rotate(270deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}

.button {
  // margin: 0 2px;
  border-radius: 4px;
  background: #ffffff;
}
.button:focus,
.button:hover {
  color: #409eff;
  border-color: #c6e2ff;
  background-color: #ecf5ff;
}
.button.is-plain:focus,
.button.is-plain:hover {
  background: #fff;
  border-color: #409eff;
  color: #409eff;
}
.button.is-plain:focus,
.button.is-plain:hover {
  background: #fff;
  border-color: #409eff;
  color: #409eff;
}
.is-round {
  border-radius: 50px;
}
// 圆角按钮
.button_primary.is-round {
  border-radius: 50px;
}
.button_success.is-round {
  border-radius: 50px;
}
.button_info.is-round {
  border-radius: 50px;
}
.button_warning.is-round {
  border-radius: 50px;
}
.button_danger.is-round {
  border-radius: 50px;
}

// 朴素按钮
.button_primary.is-plain {
  color: #409eff;
  background: #ecf5ff;
  border-color: #b3d8ff;
}
.button_primary.is-plain:focus,
.button_primary.is-plain:hover {
  background: #409eff;
  border-color: #409eff;
  color: #fff;
}
.button_success.is-plain {
  color: #67c23a;
  background: #f0f9eb;
  border-color: #c2e7b0;
}
.button_success.is-plain:focus,
.button_success.is-plain:hover {
  background: #67c23a;
  border-color: #67c23a;
  color: #fff;
}
.button_info.is-plain {
  color: #909399;
  background: #f4f4f5;
  border-color: #d3d4d6;
}
.button_info.is-plain:focus,
.button_info.is-plain:hover {
  background: #909399;
  border-color: #909399;
  color: #fff;
}
.button_warning.is-plain {
  color: #e6a23c;
  background: #fdf6ec;
  border-color: #f5dab1;
}
.button_warning.is-plain:focus,
.button_warning.is-plain:hover {
  background: #e6a23c;
  border-color: #e6a23c;
  color: #fff;
}
.button_danger.is-plain {
  color: #f56c6c;
  background: #fef0f0;
  border-color: #fbc4c4;
}
.button_danger.is-plain:focus,
.button_danger.is-plain:hover {
  background: #f56c6c;
  border-color: #f56c6c;
  color: #fff;
}
// type样式
.button_primary {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
}
.button_primary:focus,
.button_primary:hover {
  background: #66b1ff;
  border-color: #66b1ff;
  color: #fff;
}
.button_success {
  color: #fff;
  background-color: #67c23a;
  border-color: #67c23a;
}
.button_success:focus,
.button_success:hover {
  background: #85ce61;
  border-color: #85ce61;
  color: #fff;
}

.button_info {
  color: #fff;
  background-color: #909399;
  border-color: #909399;
}
.button_info:focus,
.button_info:hover {
  background: #a6a9ad;
  border-color: #a6a9ad;
  color: #fff;
}
.button_warning {
  color: #fff;
  background-color: #e6a23c;
  border-color: #e6a23c;
}
.button_warning:focus,
.button_warning:hover {
  background: #ebb563;
  border-color: #ebb563;
  color: #fff;
}
.button_danger {
  color: #fff;
  background-color: #f56c6c;
  border-color: #f56c6c;
}
.button_danger:focus,
.button_danger:hover {
  background: #f78989;
  border-color: #f78989;
  color: #fff;
}
// size样式
.button_mini {
  height: 30px;
  font-size: 12px;
  display: inline-block;
  border: 1px solid #d9d9d9;
  line-height: 30px;
  text-align: center;
  padding: 0 16px;
  cursor: pointer;
}
.button_small {
  height: 35px;
  font-size: 14px;
  display: inline-block;
  border: 1px solid #d9d9d9;
  line-height: 35px;
  text-align: center;
  padding: 0 20px;
  cursor: pointer;
}
.button_medium {
  height: 40px;
  font-size: 16px;
  display: inline-block;
  border: 1px solid #d9d9d9;
  line-height: 40px;
  text-align: center;
  padding: 0 24px;
  cursor: pointer;
}
</style>
