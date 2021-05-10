<!--
 * @Author: your name
 * @Date: 2021-05-07 10:56:05
 * @LastEditTime: 2021-05-10 15:27:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/packages/tbPopconfirm/main.vue
-->
<script>
import { on, off } from "../utils/utils";
export default {
  name: "tbPopconfirm",

  render(h) {
    const data = {
      props: {
        ...this.$attrs,
      },
      on: {
        ...this.$listeners,
      },
    };
    let topStyle = {
      display: "none",
    };
    if (this.isTop) {
      topStyle.top = this.boxHeight;
    }
    console.log(topStyle);
    // 使用jsx 模板插槽的话  传入的slots.reference[0]其实就会将虚拟dom渲染到页面上
    return (
      // 外层嵌套一层
      <span class={"box"}>
        {/*点击之后下方的弹窗层弹出 */}
        <span
          onClick={(e) => {
            this.isNone(e);
          }}
          {...data}
        >
          {this.$slots.reference[0]}
        </span>
        {/*如果不是none就显示 */}
        <div style={{ ...topStyle }} ref="box" class={`${!this.isRight ? "tb-popover" : "tb-popover-right"}  confirmBox ${this.none ? "isNone" : "isBlock"} `}>
          <div class="tb-popconfirm">
            <p class="tb-popconfirm__main">
              {!this.hideIcon ? <i style={{ color: this.iconColor }} class={`iconfont  ${this.icon}`}></i> : ""}
              {this.title}
            </p>
            <div class="tb-popconfirm__action">
              <tb-button
                onClick={() => {
                  this.$emit("cancel");
                  this.none = false;
                }}
                size="mini"
                type={this.cancelButtonType}
              >
                {this.cancelButtonText}
              </tb-button>
              <tb-button
                onClick={() => {
                  this.$emit("confirm");
                  this.none = false;
                }}
                size="mini"
                type={this.confirmButtonType}
              >
                {this.confirmButtonText}
              </tb-button>
            </div>
          </div>
          {this.isTop ? <div class="popper__arrow_bottom"></div> : <div class="popper__arrow"></div>}
        </div>
      </span>
    );
  },
  data() {
    return {
      // 是不是点击显示或隐藏
      none: false,
      // 是不是右侧显示
      isRight: false,
      // 是不是上方显示
      isTop: false,
      // dom节点高度
      boxHeight: "",
      time: "",
    };
  },
  props: {
    // 动态标题
    title: {
      type: String,
      default: "这是一段内容确定删除吗？",
    },
    // 确认按钮文字
    confirmButtonText: {
      type: String,
      default: "确认",
    },
    // 取消按钮文字
    cancelButtonText: {
      type: String,
      default: "取消",
    },
    // 确认按钮类型
    confirmButtonType: {
      type: String,
      default: "primary",
    },
    // 取消按钮类型
    cancelButtonType: {
      type: String,
      default: "",
    },
    // icon图标
    icon: {
      type: String,
      default: "icon-prompt-filling",
    },
    // icon图标颜色
    iconColor: {
      type: String,
      default: "#f90",
    },
    // 是否隐藏icon
    hideIcon: {
      type: Boolean,
      default: false,
    },
  },
  created() {},
  mounted() {
    on(document, "click", this.documentClick);
  },
  methods: {
    isNone(e) {
      e.stopPropagation();
      this.$refs["box"].style.display = "block";
      clearTimeout(this.time);
      // 判断当前点击的位置距离上方向差多少
      console.log(e.clientX);
      // 获取可视区窗口宽、高度
      const viewWidth = document.documentElement.clientWidth;
      const viewHeight = document.documentElement.clientHeight;
      // 判断当前点击位置是与宽高是否大于150px
      if (viewWidth - e.clientX < 150) {
        this.isRight = true;
      } else {
        this.isRight = false;
      }
      if (viewHeight - e.clientY < 150) {
        this.isTop = true;
        // 高度默认为120px
        this.boxHeight = "-120px";
      } else {
        this.isTop = false;
      }

      this.none = !this.none;

      if (!this.none) {
        this.time = setTimeout(() => {
          this.$refs["box"].style.display = "none";
        }, 500);
      }
    },
    // 点击其他位置默认关闭
    documentClick() {
      this.none = false;
      this.time = setTimeout(() => {
        this.$refs["box"].style.display = "none";
      }, 500);
    },
  },
  destroyed() {
    off(document, "click", this.isNone);
  },
};
</script>
<style scoped>
.box {
  position: relative;
}
.isNone {
  visibility: visible;
  opacity: 1;
  transition: all 0.5s;
}
.isBlock {
  visibility: hidden;
  opacity: 0;
  transition: all 0.5s;
}
.confirmBox {
  position: absolute;
  border-radius: 4px;
  padding: 10px;
  z-index: 2000;
  font-size: 12px;
  line-height: 1.2;
  min-width: 10px;
  word-wrap: break-word;
}
.tb-popover {
  margin-top: 12px;
  position: absolute;

  background: #fff;
  min-width: 150px;
  border-radius: 4px;
  border: 1px solid #ebeef5;
  padding: 12px;
  z-index: 2000;
  color: #606266;
  line-height: 1.4;
  text-align: justify;
  font-size: 14px;
  box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
  word-break: break-all;
}
.tb-popover-right {
  margin-top: 12px;
  position: absolute;
  right: 0;
  background: #fff;
  min-width: 150px;
  border-radius: 4px;
  border: 1px solid #ebeef5;
  padding: 12px;
  z-index: 2000;
  color: #606266;
  line-height: 1.4;
  text-align: justify;
  font-size: 14px;
  box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
  word-break: break-all;
}
.tb-popconfirm__main {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}
.iconfont {
  margin-right: 5px;
}
.tb-popconfirm__action {
  text-align: right;
  margin: 0;
}
/* 三角上 */
.tb-popover .popper__arrow,
.tb-popover .popper__arrow::after {
  position: absolute;
  display: block;
  width: 0;
  height: 0;
  top: -12px;
  border-color: transparent;
  border-style: solid;
}
.tb-popover .popper__arrow::after {
  content: " ";
  border-width: 6px;
}
.tb-popover .popper__arrow::after {
  top: 1px;
  border-top-width: 0;
  border-bottom-color: #fff;
}
.tb-popover .popper__arrow {
  border-width: 6px;
  filter: drop-shadow(0 2px 12px rgba(0, 0, 0, 0.03));
}
.tb-popover-right .popper__arrow,
.tb-popover-right .popper__arrow::after {
  position: absolute;
  display: block;
  width: 0;
  height: 0;
  top: -12px;
  right: 0;
  border-color: transparent;
  border-style: solid;
}

.tb-popover-right .popper__arrow::after {
  content: " ";
  border-width: 6px;
}
.tb-popover-right .popper__arrow::after {
  top: 1px;
  border-top-width: 0;
  border-bottom-color: #fff;
}
.tb-popover-right .popper__arrow {
  border-width: 6px;
  filter: drop-shadow(0 2px 12px rgba(0, 0, 0, 0.03));
}

/* 三角⏬ */
.tb-popover .popper__arrow_bottom,
.tb-popover .popper__arrow_bottom::after {
  position: absolute;
  display: block;
  width: 0;
  height: 0;
  bottom: -6px;
  border-color: transparent;
  border-style: solid;
}
.tb-popover .popper__arrow_bottom::after {
  content: " ";
  border-width: 6px;
}
.tb-popover .popper__arrow_bottom::after {
  bottom: -6px;
  margin-left: -6px;
  border-top-color: #fff;
  border-bottom-width: 0;
}
.tb-popover .popper__arrow_bottom {
  border-width: 6px;
  filter: drop-shadow(0 2px 12px rgba(0, 0, 0, 0.03));
}
.tb-popover-right .popper__arrow_bottom,
.tb-popover-right .popper__arrow_bottom::after {
  position: absolute;
  display: block;
  width: 0;
  height: 0;
  bottom: -6px;
  right: 0;
  border-color: transparent;
  border-style: solid;
}

.tb-popover-right .popper__arrow_bottom::after {
  content: " ";
  border-width: 6px;
}
.tb-popover-right .popper__arrow_bottom::after {
  bottom: -6px;
  margin-left: -6px;
  border-top-color: #fff;
  border-bottom-width: 0;
}
.tb-popover-right .popper__arrow_bottom {
  border-width: 6px;
  filter: drop-shadow(0 2px 12px rgba(0, 0, 0, 0.03));
}
</style>
