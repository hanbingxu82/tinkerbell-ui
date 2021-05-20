<!--
 * @Author: your name
 * @Date: 2021-05-20 14:14:56
 * @LastEditTime: 2021-05-20 16:14:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/packages/tbProgress/main.vue
-->
<template>
  <div class="tb-progress">
    <div class="tb-progress-outer">
      <div class="tb-progress-outer-bg" :class="border ? 'tb-progress-outer-bg-border' : ''" :style="getOuterStyle()"></div>
      <div :id="`tb-progress-line-${idNow}`" class="tb-progress-outer-line" :class="status ? 'tb-progress-outer-line-' + status : ''" :style="getLineStyle()">
        <div v-if="active" class="tb-progress-outer-line-active" :style="getActiveStyle()"></div>
      </div>
      <div v-if="type === 'lump'" class="tb-progress-outer-cut" :style="getCutStyle()">
        <div v-for="item in items" :key="item" :style="getCutBarStyle()"></div>
      </div>
    </div>
    <div class="tb-progress-text" v-if="showText">
      {{ content }}
    </div>
  </div>
</template>

<script>
export default {
  name: "tbProgress",
  props: {
    //   进度条显示的进度
    percent: {
      type: Number,
      default: 0,
      //   必填
      required: true,
      //   条件  必须>=0  并且<=100
      validator: (val) => val >= 0 && val <= 100,
    },
    // 是否显示进度条对应的文本百分比  默认是显示的
    showText: {
      type: Boolean,
      default: true,
    },
    // 动态动画
    active: {
      type: Boolean,
      default: false,
    },
    // 动态动画效果颜色
    activeColor: {
      type: [String, Array],
      default: "",
    },
    // 进度条背景底颜色
    bgColor: {
      type: String,
      default: "#ebeef5",
    },
    // lump类型 竖条的宽度
    cutWidth: {
      type: Number,
      default: 1,
    },
    // 进度条类型  lump是分格
    type: {
      type: String,
      default: "line",
      validator: (val) => ["line", "lump"].indexOf(val) > -1,
    },
    // lump类型 竖条的颜色
    cutColor: {
      type: String,
      default: "#ebeef5",
    },
    // 是否是圆角
    border: {
      type: Boolean,
      default: true,
    },
    // 进度条状态  其实也就是应该样式颜色
    status: {
      type: String,
      validator: (val) => ["success", "warning", "error"].indexOf(val) > -1,
    },
    // 进度条高度
    lineHeight: {
      type: Number,
      default: 6,
    },
    // 进度条颜色；当使用Array时，限制个数为 6；当使用 Function 时，参数为 percent
    color: {
      type: [String, Array, Function],
      default: "",
    },
    // 是否开启颜色流动
    colorFlow: {
      type: Boolean,
      default: false,
    },
    // 颜色流动所需时间，即时间越小，速度越快
    flowSecond: {
      type: Number,
      default: 5,
      validator: (val) => (val) => [1, 2, 3, 4, 5, 6].indexOf(val) > -1,
    },
    // 自定义文字显示，参数为 percent传入的百分比 或者你想要的文字 return返回值
    format: Function,
  },
  data() {
    return {
      items: [],
      idNow: "",
    };
  },
  computed: {
    // 用于获取对应自定义的文本 如果没有传递的话对应的就会展示传入进来的百分比
    content() {
      if (typeof this.format === "function") {
        return this.format(this.percent) || "";
      } else {
        return `${this.percent}%`;
      }
    },
  },
  mounted() {
    // 获取随机码  确保id是唯一的不重复的
    this.idNow = this.getUUID();
    // 如果是lump类型 就要对照显示小竖线
    if (this.type === "lump") {
      this.countCut();
    }
  },
  methods: {
    getOuterStyle() {
      // 设置底部背景颜色和高度
      let result = "";
      result += `background: ${this.bgColor};`;
      result += `height: ${this.lineHeight}px;`;
      return result;
    },
    getLineStyle() {
      let result = "";
      result += `width: ${this.percent}%;`;
      result += `height: ${this.lineHeight}px;margin-top: -${this.lineHeight}px;`;
      if (this.color) {
        if (typeof this.color === "string") {
          result += `background: ${this.color};`;
        } else if (Array.isArray(this.color) && this.color.length < 7) {
          // 只取 6 种颜色
          let colors = "";
          let i = this.color.length;
          this.color.map((co, index) => {
            index === i - 1 ? (colors += co) : (colors += co + ", ");
          });
          result += `background: linear-gradient(to right, ${colors});`;
        } else if (typeof this.color === "function") {
          result += `background: ${this.color(this.percent)};`;
        }
      }
      if (!this.border) {
        result += `border-radius: 0px;`;
      }
      if (this.colorFlow) {
        // 采用色调转换一直动态的变更背景色
        result += `animation: tb-flow ${this.flowSecond}s linear infinite;`;
      }
      return result;
    },
    getActiveStyle() {
      // 流体动画颜色样式
      let result = "";
      if (this.activeColor) {
        if (typeof this.activeColor === "string") {
          result = `background: ${this.activeColor};`;
        }
      }
      return result;
    },
    countCut() {
      const that = this;
      let tbl = document.getElementById(`tb-progress-line-${this.idNow}`);
      let tblSet = setInterval(() => {
        //   获取随机码拼接值
        tbl = document.getElementById(`tb-progress-line-${this.idNow}`);
        //   如果对应的dom节点有数据的话就说明有这个dom节点

        if (tbl) {
          clearInterval(tblSet);
          // 获取一个指定的偏移量
          let lno = parseInt(tbl.offsetWidth / (that.lineHeight + that.cutWidth));
          // 数字转换成对应长度的数组
          that.items = [...Array(lno).keys()];
        }
      }, 1);
    },
    getCutStyle() {
      // 设置lump的样式
      let result = "";
      result += `height: ${this.lineHeight}px; margin-top: -${this.lineHeight}px;`;
      return result;
    },
    getCutBarStyle() {
      let result = "";
      // 设置对应的lump宽度
      result += `width: ${this.lineHeight}px;`;
      result += `border-right: ${this.cutWidth}px solid ${this.cutColor};`;
      return result;
    },
    getUUID() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
        return (c === "x" ? (Math.random() * 16) | 0 : "r&0x3" | "0x8").toString(16);
      });
    },
  },
};
</script>
<style lang="less">
@default-color: #409eff;
@success-color: #67c23a;
@warning-color: #e6a23c;
@error-color: #f56c6c;

.tb-progress {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: #606266;
  font-size: 14px;
  margin-right: 8px;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  &-outer {
    width: 100%;
    display: inline-block;
    vertical-align: middle;
    box-sizing: border-box;
    margin-right: -55px;
    padding-right: 50px;
    &-bg {
      width: 100%;
      position: relative;
      &-border {
        border-radius: 100px;
      }
    }
    &-line {
      position: relative;
      background: @default-color;
      border-radius: 100px;
      transition: all 0.4s cubic-bezier(0.08, 0.82, 0.17, 1) 0s;
      &-success {
        background: @success-color;
      }
      &-warning {
        background: @warning-color;
      }
      &-error {
        background: @error-color;
      }
      &-active {
        background: #fff;
        height: inherit;
        border-radius: 10px;
        opacity: 0;
        animation: tb-active 2.4s cubic-bezier(0, 0, 0.2, 1) infinite;
        content: "";
      }
    }
    &-cut {
      position: relative;
      display: flex;
    }
  }

  &-text {
    margin-left: 10px;
    display: inline-block;
    vertical-align: middle;
    text-align: left;
    word-break: keep-all;
  }
}

@keyframes tb-active {
  0% {
    width: 0;
    opacity: 0.2;
  }
  30% {
    width: 0;
    opacity: 0.6;
  }
  100% {
    width: 100%;
    opacity: 0;
  }
}

// 360度色调转换
@keyframes tb-flow {
  from {
    filter: hue-rotate(0deg);
  }
  to {
    filter: hue-rotate(360deg);
  }
}
</style>
