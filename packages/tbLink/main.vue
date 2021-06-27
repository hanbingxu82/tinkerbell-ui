<!--
 * @Author: your name
 * @Date: 2021-03-22 08:27:45
 * @LastEditTime: 2021-03-22 10:08:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/packages/tbLink/main.vue
-->

<template>
  <a v-if="!tbIcon && href" :target="target" v-on="$listeners" :href="href" :class="`tb-link ${tbType} ${tbDisabled} ${tbUnderline}`"> <slot></slot> </a>
  <a v-else-if="tbIcon && href" :target="target" v-on="$listeners" :href="href" :class="`tb-link ${tbIcon} ${tbType} ${tbDisabled} ${tbUnderline}`"> <slot></slot> </a>
  <span v-else-if="tbIcon && !href" v-on="$listeners" :class="`tb-link ${tbIcon} ${tbType} ${tbDisabled} ${tbUnderline}`"> <slot></slot></span>
  <span v-else v-on="$listeners" :class="`tb-link ${tbType} ${tbDisabled} ${tbUnderline}`"> <slot></slot></span>
  <!-- <div :class="`tb-row`" :style="`${tbjustify} ${tbalign}`"><slot></slot></div> -->
</template>
<script>
export default {
  name: "tbLink",
  data() {
    return {
      tbType: "",
      tbDisabled: "",
      tbUnderline: "",
      tbIcon: "",
    };
  },
  props: {
    // 颜色
    type: {
      type: String,
      default: "",
    },
    // 链接
    href: {
      type: String,
      default: "",
    },
    // 模式
    target: {
      type: String,
      default: "_blank",
    },
    // 禁用
    disabled: {
      type: Boolean,
      default: false,
    },
    // 下划线
    underline: {
      type: Boolean,
      default: true,
    },
    // 图标按钮
    icon: {
      type: String,
      default: "",
    },
  },
  created() {
    this.Ptype();
    this.PDisabled();
    this.Punderline();
    this.Picon();
  },
  methods: {
    // 页面加载判断当前按钮类型
    Ptype() {
      const vm = this;
      if (vm.type == "primary") {
        vm.tbType = "a_primary";
      } else if (vm.type == "success") {
        vm.tbType = "a_success";
      } else if (vm.type == "info") {
        vm.tbType = "a_info";
      } else if (vm.type == "warning") {
        vm.tbType = "a_warning";
      } else if (vm.type == "danger") {
        vm.tbType = "a_danger";
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
    // 判断是否有下划线
    Punderline() {
      let vm = this;
      console.log(this.underline);
      if (!this.underline) {
        vm.tbUnderline = " is_underline ";
      } else {
        vm.tbUnderline = " ";
      }
    },
    // 页面加载判断是否为图标按钮
    Picon() {
      const vm = this;
      if (vm.icon && vm.circle) {
        vm.tbIcon = "a_icon iconfont " + vm.icon;
      } else if (vm.icon) {
        vm.tbIcon = " iconfont " + vm.icon;
      } else {
        vm.tbIcon = "";
      }
    },
  },
};
</script>
<style scoped>
/* icon按钮 */
.a_icon {
  width: 35px !important;
  height: 35px !important;
  border-radius: 50% !important;
  padding: 0 !important;
}
/* is_disabled 禁用 */
.is_disabled {
  pointer-events: none;
  /* cursor:not-allowed!important; */
  opacity: 0.6;
}
/* is_underline 下划线 */
.is_underline {
  text-decoration: none !important;
}
.tb-link {
  color: #606266;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  position: relative;
  text-decoration: none;
  outline: none;
  cursor: pointer;
  padding: 1px;
  font-size: 14px;
  font-weight: 500;
  box-sizing: border-box;
  -webkit-tap-highlight-color: #606266;
}
.tb-link:focus,
.tb-link:hover {
  color: #1089ff;
  text-decoration: underline;
}
/* .tb-link:visited,
.tb-link:active {
  text-decoration: none;
} */
/* type样式 */
.tb-link.a_primary {
  color: #1089ff;
}
.tb-link.a_primary:focus,
.tb-link.a_primary:hover {
  color:#3fa0ff;
}
.tb-link.a_success {
  color: #52c41a;
}
.tb-link.a_success:focus,
.tb-link.a_success:hover {
  color: #74cf47;
}

.tb-link.a_info {
  color: #35495e;
}
.tb-link.a_info:focus,
.tb-link.a_info:hover {
  color: #5d6d7e;
}
.tb-link.a_warning {
  color: #fea638;
}
.tb-link.a_warning:focus,
.tb-link.a_warning:hover {
  color: #feb75f;
}
.tb-link.a_danger {
  color: #ff4d4f;
}
.tb-link.a_danger:focus,
.tb-link.a_danger:hover {
  color: #ff7072;
}
</style>
