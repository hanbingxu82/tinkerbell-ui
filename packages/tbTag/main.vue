<!--
 * @Author: your name
 * @Date: 2021-04-29 11:29:18
 * @LastEditTime: 2021-05-24 17:23:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/packages/tbTag/main.vue
-->
<script>
export default {
  name: "tbTag",

  render(h) {
    const data = {
      props: {
        ...this.$attrs,
      },
      on: {
        ...this.$listeners,
      },
    };

    // 使用jsx 模板插槽的话  用default[0]即可
    return (
      <div {...data} style={this.color ? `background-color:${this.color}` : ""} class={`tb-tag tag  ${this.tbType} ${this.tbSize} ${this.tbEffect}`}>
        {this.$slots.default[0]}{" "}
        <i
          vOn:click_stop={() => {
            this.$emit("close");
          }}
          class="iconfont icon-close-bold bold"
          style="margin-left:2px;"
        ></i>
      </div>
    );
  },
  data() {
    return {
      tbSize: "tag_small",
      tbType: "",
      tbEffect: "",
      isCloseble: "",
    };
  },
  props: {
    // 颜色
    type: {
      type: String,
      default: "primary",
    },
    // 大小
    size: {
      type: String,
      default: "small",
    },
    // 三种样式一种是  light也就是默认  发浅色  dark:实心   plain:镂空
    effect: {
      type: String,
      default: "light",
    },
    // 自定义背景颜色
    color: {
      type: String,
      default: "",
    },
    // 关闭标签
    closable: {
      type: Boolean,
      default: false,
    },
  },
  created() {
    this.Ptype();
    this.Psize();
    this.Peffect();
    this.Pclosable();
  },
  methods: {
    // 页面加载判断当前标签是否存在关闭小图标
    Pclosable() {
      const vm = this;
      if (vm.closable) {
        vm.isCloseble = true;
      } else {
        vm.isCloseble = false;
      }
    },
    // 页面加载判断当前是何种样式
    Peffect() {
      const vm = this;
      if (vm.effect == "light") {
        vm.tbEffect = "tag_effect_light";
      } else if (vm.effect == "dark") {
        vm.tbEffect = "tag_effect_dark";
      } else if (vm.effect == "plain") {
        vm.tbEffect = "tag_effect_plain";
      }
    },
    // 页面加载判断当前按钮大小
    Psize() {
      const vm = this;
      if (vm.size == "mini") {
        vm.tbSize = "tag_mini";
      } else if (vm.size == "small") {
        vm.tbSize = "tag_small";
      } else if (vm.size == "medium") {
        vm.tbSize = "tag_medium";
      }
    },
    // 页面加载判断当前按钮类型
    Ptype() {
      const vm = this;
      if (vm.type == "primary") {
        vm.tbType = "tag_primary";
      } else if (vm.type == "success") {
        vm.tbType = "tag_success";
      } else if (vm.type == "info") {
        vm.tbType = "tag_info";
      } else if (vm.type == "warning") {
        vm.tbType = "tag_warning";
      } else if (vm.type == "danger") {
        vm.tbType = "tag_danger";
      }
    },
  },
};
</script>
<style scoped>
.bold {
  cursor: pointer;
}
.tag {
  margin: 0 2px;
  border-radius: 4px;
  background: #ffffff;
}
/* .tag:focus,
.tag:hover {
  color: #409eff;
  border-color: #c6e2ff;
  background-color: #ecf5ff;
} */

/* size 样式 */
.tag_mini {
  height: 30px;
  font-size: 12px;
  display: inline-block;
  border: 1px solid #eeeeee;
  line-height: 30px;
  text-align: center;
  padding: 0 16px;
  /* cursor: pointer; */
}
.tag_small {
  height: 35px;
  font-size: 14px;
  display: inline-block;
  border: 1px solid #eeeeee;
  line-height: 35px;
  text-align: center;
  padding: 0 20px;
  /* cursor: pointer; */
}
.tag_medium {
  height: 40px;
  font-size: 16px;
  display: inline-block;
  border: 1px solid #eeeeee;
  line-height: 40px;
  text-align: center;
  padding: 0 24px;
  /* cursor: pointer; */
}
/* effect 按钮样式 */
.tag_primary {
  color: #409eff;
  background-color: #ecf5ff;
  border-color: #d9ecff;
}
.tag_success {
  color: #67c23a;
  background-color: #f0f9eb;
  border-color: #e1f3d8;
}
.tag_info {
  color: #909399;
  background-color: #f4f4f5;
  border-color: #e9e9eb;
}
.tag_warning {
  color: #e6a23c;
  background-color: #fdf6ec;
  border-color: #faecd8;
}
.tag_danger {
  color: #f56c6c;
  background-color: #fef0f0;
  border-color: #fde2e2;
}

/* .tag_primary:focus,
.tag_primary:hover {
  color: #409eff;
  background-color: #ecf5ff;
  border-color: #d9ecff;
}

.tag_success:focus,
.tag_success:hover {
  color: #67c23a;
  background-color: #f0f9eb;
  border-color: #e1f3d8;
}

.tag_info:focus,
.tag_info:hover {
  color: #909399;
  background-color: #f4f4f5;
  border-color: #e9e9eb;
}

.tag_warning:focus,
.tag_warning:hover {
  color: #e6a23c;
  background-color: #fdf6ec;
  border-color: #faecd8;
}

.tag_danger:focus,
.tag_danger:hover {
  color: #f56c6c;
  background-color: #fef0f0;
  border-color: #fde2e2;
} */

.tag_primary.tag_effect_dark {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
}
/* .tag_primary.tag_effect_dark:focus,
.tag_primary.tag_effect_dark:hover {
  background: #66b1ff;
  border-color: #66b1ff;
  color: #fff;
} */
.tag_success.tag_effect_dark {
  color: #fff;
  background-color: #67c23a;
  border-color: #67c23a;
}
/* .tag_success.tag_effect_dark:focus,
.tag_success.tag_effect_dark:hover {
  background: #85ce61;
  border-color: #85ce61;
  color: #fff;
} */

.tag_info.tag_effect_dark {
  color: #fff;
  background-color: #909399;
  border-color: #909399;
}
/* .tag_info.tag_effect_dark:focus,
.tag_info.tag_effect_dark:hover {
  background: #a6a9ad;
  border-color: #a6a9ad;
  color: #fff;
} */
.tag_warning.tag_effect_dark {
  color: #fff;
  background-color: #e6a23c;
  border-color: #e6a23c;
}
/* .tag_warning.tag_effect_dark:focus,
.tag_warning.tag_effect_dark:hover {
  background: #ebb563;
  border-color: #ebb563;
  color: #fff;
} */
.tag_danger.tag_effect_dark {
  color: #fff;
  background-color: #f56c6c;
  border-color: #f56c6c;
}
/* .tag_danger.tag_effect_dark:focus,
.tag_danger.tag_effect_dark:hover {
  background: #f78989;
  border-color: #f78989;
  color: #fff;
} */
.tag_primary.tag_effect_plain {
  color: #409eff;
  background: #ffffff;
  border-color: #b3d8ff;
}
/* .tag_primary.tag_effect_plain:focus,
.tag_primary.tag_effect_plain:hover {
  background: #409eff;
  border-color: #409eff;
  color: #fff;
} */
.tag_success.tag_effect_plain {
  color: #67c23a;
  background: #ffffff;
  border-color: #c2e7b0;
}
/* .tag_success.tag_effect_plain:focus,
.tag_success.tag_effect_plain:hover {
  background: #67c23a;
  border-color: #67c23a;
  color: #fff;
} */
.tag_info.tag_effect_plain {
  color: #909399;
  background: #ffffff;
  border-color: #d3d4d6;
}
/* .tag_info.tag_effect_plain:focus,
.tag_info.tag_effect_plain:hover {
  background: #909399;
  border-color: #909399;
  color: #fff;
} */
.tag_warning.tag_effect_plain {
  color: #e6a23c;
  background: #ffffff;
  border-color: #f5dab1;
}
/* .tag_warning.tag_effect_plain:focus,
.tag_warning.tag_effect_plain:hover {
  background: #e6a23c;
  border-color: #e6a23c;
  color: #fff;
} */
.tag_danger.tag_effect_plain {
  color: #f56c6c;
  background: #ffffff;
  border-color: #fbc4c4;
}
/* .tag_danger.tag_effect_plain:focus,
.tag_danger.tag_effect_plain:hover {
  background: #f56c6c;
  border-color: #f56c6c;
  color: #fff;
} */
</style>
