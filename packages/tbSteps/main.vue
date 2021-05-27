<!--
 * @Author: your name
 * @Date: 2021-05-27 13:29:51
 * @LastEditTime: 2021-05-27 15:09:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/packages/tbSteps/main.vue
-->
<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>
<script>
import { oneOf } from "../utils/utils";

const prefixCls = "tb-steps";

function debounce(fn) {
  let waiting;
  return function() {
    if (waiting) return;
    waiting = true;
    const context = this;
    const args = arguments;
    const later = function() {
      waiting = false;
      fn.apply(context, args);
    };
    this.$nextTick(later);
  };
}

export default {
  name: "tbSteps",
  props: {
    current: {
      type: Number,
      default: 0,
    },
    // 当前步骤的状态
    status: {
      validator(value) {
        return oneOf(value, ["wait", "process", "finish", "error", "success"]);
      },
      default: "process",
    },
    // 判断大小
    size: {
      validator(value) {
        return oneOf(value, ["small"]);
      },
    },
    // 横向还是竖向显示
    direction: {
      validator(value) {
        return oneOf(value, ["horizontal", "vertical"]);
      },
      default: "horizontal",
    },
  },
  computed: {
    classes() {
        console.log(this.size)
      return [
        `${prefixCls}`,
        `${prefixCls}-${this.direction}`,
        {
          [`${prefixCls}-${this.size}`]: !!this.size,
        },
      ];
    },
  },
  methods: {
    updateChildProps(isInit) {
      const total = this.$children.length;
      this.$children.forEach((child, index) => {
        child.stepNumber = index + 1;
        if (this.direction === "horizontal") {
          child.total = total;
        }
        // 如果已存在status,且在初始化时,则略过
        // todo 如果当前是error,在current改变时需要处理
        if (!(isInit && child.currentStatus)) {
          if (index === this.current) {
            if (this.status !== "error") {
              child.currentStatus = "process";
            }
            if (this.status === "success") {
              child.currentStatus = "success";
            }
          } else if (index < this.current) {
            child.currentStatus = "finish";
          } else {
            child.currentStatus = "wait";
          }
        }

        if (child.currentStatus !== "error" && index !== 0) {
          this.$children[index - 1].nextError = false;
        }
      });
    },
    setNextError() {
      this.$children.forEach((child, index) => {
        if (child.currentStatus === "error" && index !== 0) {
          this.$children[index - 1].nextError = true;
        }
      });
    },
    updateCurrent(isInit) {
      // 防止溢出边界
      if (this.current < 0 || this.current >= this.$children.length) {
        return;
      }
      if (isInit) {
        if (!this.$children[this.current].currentStatus) {
          this.$children[this.current].currentStatus = this.status;
        }
      } else {
        this.$children[this.current].currentStatus = this.status;
      }
    },
    debouncedAppendRemove() {
      return debounce(function() {
        this.updateSteps();
      });
    },
    updateSteps() {
      this.updateChildProps(true);
      this.setNextError();
      this.updateCurrent(true);
    },
  },
  mounted() {
    this.updateSteps();
    this.$on("append", this.debouncedAppendRemove());
    this.$on("remove", this.debouncedAppendRemove());
  },
  watch: {
    current() {
      this.updateChildProps();
    },
    status() {
      this.updateCurrent();
    },
  },
};
</script>
<style lang="less">
.tb-steps {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  font-size: 0;
  line-height: 1.5;

  &-item {
    display: inline-block;
    position: relative;
    vertical-align: top;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    overflow: hidden;
    &:last-child {
      -webkit-box-flex: 0;
      -ms-flex: 0;
      flex: none;
    }

    &.tb-steps-status-wait {
      .tb-steps-head-inner {
        background-color: #fff;
        > .tb-steps-icon,
        span {
          color: #ccc;
        }
      }
      .tb-steps-title {
        color: #999;
      }
      .tb-steps-content {
        color: #999;
      }
      .tb-steps-tail > i {
        background-color: #e8eaec;
      }
    }
    &.tb-steps-status-process {
      .tb-steps-head-inner {
        border-color: #1089ff;
        background-color: #1089ff;
        > .tb-steps-icon,
        span {
          color: #fff;
        }
      }
      .tb-steps-title {
        color: #666;
      }
      .tb-steps-content {
        color: #666;
      }
      .tb-steps-tail > i {
        background-color: #e8eaec;
      }
    }
    &.tb-steps-status-finish {
      .tb-steps-head-inner {
        background-color: #fff;
        border-color: #1089ff;
        > .tb-steps-icon,
        span {
          color: #1089ff;
        }
      }
      .tb-steps-tail > i:after {
        width: 100%;
        background: #1089ff;
        transition: 0.2s ease-in-out;
        opacity: 1;
      }
      .tb-steps-title {
        color: #999;
      }
      .tb-steps-content {
        color: #999;
      }
    }
    &.tb-steps-status-success {
      .tb-steps-head-inner {
        background-color: #fff;
        border-color: #52c41a;
        > .tb-steps-icon {
          color: #52c41a;
        }
        span {
          color: #52c41a;
        }
      }
      .tb-steps-title {
        color: #52c41a;
      }
      .tb-steps-content {
        color: #52c41a;
      }
      .tb-steps-tail > i {
        background-color: #e8eaec;
      }
    }

    &.tb-steps-next-success {
      .tb-steps-tail > i,
      .tb-steps-tail > i:after {
        background-color: #52c41a;
      }
    }

    &.tb-steps-status-error {
      .tb-steps-head-inner {
        background-color: #fff;
        border-color: #ff4d4f;
        > .tb-steps-icon {
          color: #ff4d4f;
        }
      }
      .tb-steps-title {
        color: #ff4d4f;
      }
      .tb-steps-content {
        color: #ff4d4f;
      }
      .tb-steps-tail > i {
        background-color: #e8eaec;
      }
    }

    &.tb-steps-next-error {
      .tb-steps-tail > i,
      .tb-steps-tail > i:after {
        background-color: #ff4d4f;
      }
    }

    &.tb-steps-custom {
      .tb-steps-head-inner {
        background: none;
        border: 0;
        width: auto;
        height: auto;
        > .tb-steps-icon {
          font-size: 20px;
          top: 2px;
          width: 20px;
          height: 20px;
        }
      }
      &.tb-steps-status-process {
        .tb-steps-head-inner > .tb-steps-icon {
          color: #1089ff;
        }
      }
    }
  }
  &-item:last-child &-tail {
    display: none;
  }

  .tb-steps-head,
  .tb-steps-main {
    position: relative;
    display: inline-block;
    vertical-align: top;
  }
  .tb-steps-head {
    background: #fff;
  }

  .tb-steps-head-inner {
    display: block;
    width: 26px;
    height: 26px;
    line-height: 24px;
    margin-right: 8px;
    text-align: center;
    border: 1px solid #ccc;
    border-radius: 50%;
    font-size: 14px;
    transition: background-color 0.2s ease-in-out;

    > .tb-steps-icon {
      line-height: 1;
      position: relative;
      vertical-align: -1px;

      &.iconfont {
        font-size: 24px;
      }
      .icon-ios-checkmark-empty,
      .icon-ios-close-empty {
        font-weight: bold;
      }
    }
  }
  .tb-steps-main {
    margin-top: 2.5px;
    display: inline;
  }
  .tb-steps-custom .tb-steps-title {
    margin-top: 2.5px;
  }

  .tb-steps-title {
    display: inline-block;
    margin-bottom: 4px;
    padding-right: 10px;
    font-size: 14px;
    font-weight: bold;
    color: #666;
    background: #fff;

    > a:first-child:last-child {
      color: #666;
    }
  }
  .tb-steps-item-last {
    .tb-steps-title {
      padding-right: 0;
      width: 100%;
    }
  }
  .tb-steps-content {
    font-size: 12px;
    color: #999;
  }
  .tb-steps-tail {
    width: 100%;
    padding: 0 10px;
    position: absolute;
    left: 0;
    top: 13px;
    > i {
      display: inline-block;
      width: 100%;
      height: 1px;
      vertical-align: top;
      background: #e8eaec;
      border-radius: 1px;
      position: relative;
      &:after {
        content: "";
        width: 0;
        height: 100%;
        background: #e8eaec;
        opacity: 0;
        position: absolute;
        top: 0;
      }
    }
  }

  &.tb-steps-small {
    .tb-steps-head-inner {
      width: 18px;
      height: 18px;
      line-height: 16px;
      margin-right: 10px;
      text-align: center;
      border-radius: 50%;
      font-size: 12px;

      > .tb-steps-icon.iconfont {
        font-size: 16px;
        top: 0;
      }
    }
    .tb-steps-main {
      margin-top: 0;
    }
    .tb-steps-title {
      margin-bottom: 4px;
      margin-top: 0;
      color: #666;
      font-size: 12px;
      font-weight: bold;
    }
    .tb-steps-content {
      font-size: 12px;
      color: #999;
      padding-left: 30px;
    }
    .tb-steps-tail {
      top: 8px;
      padding: 0 8px;
      > i {
        height: 1px;
        width: 100%;
        border-radius: 1px;
      }
    }
  }

  &.tb-steps-small .tb-steps-item.tb-steps-custom .tb-steps-head-inner,
  .tb-steps-item.tb-steps-custom .tb-steps-head-inner {
    width: inherit;
    height: inherit;
    line-height: inherit;
    border-radius: 0;
    border: 0;
    background: none;
  }
}

.tb-steps-vertical {
  display: block;
  .tb-steps-item {
    display: block;
    overflow: visible;
  }

  .tb-steps-tail {
    position: absolute;
    left: 13px;
    top: 0;
    height: 100%;
    width: 1px;
    padding: 30px 0 4px 0;
    > i {
      height: 100%;
      width: 1px;
      &:after {
        height: 0;
        width: 100%;
      }
    }
  }

  .tb-steps-status-finish {
    .tb-steps-tail > i:after {
      height: 100%;
    }
  }

  .tb-steps-head {
    float: left;
    &-inner {
      margin-right: 16px;
    }
  }

  .tb-steps-main {
    min-height: 47px;
    overflow: hidden;
    display: block;
    .tb-steps-title {
      line-height: 26px;
    }
    .tb-steps-content {
      padding-bottom: 12px;
      padding-left: 0;
    }
  }

  .tb-steps-custom .tb-steps-icon {
    left: 4px;
  }
  &.tb-steps-small .tb-steps-custom .tb-steps-icon {
    left: 0;
  }
}

.tb-steps-vertical.tb-steps-small {
  .tb-steps-tail {
    position: absolute;
    left: 9px;
    top: 0;
    padding: 22px 0 4px 0;
    > i {
      height: 100%;
    }
  }

  .tb-steps-title {
    line-height: 18px;
  }
}

.tb-steps-horizontal {
  &.tb-steps-hidden {
    visibility: hidden;
  }
  .tb-steps-content {
    //max-width: 100px;
    padding-left: 35px;
  }
  .tb-steps-item:not(:first-child) .tb-steps-head {
    padding-left: 10px;
    margin-left: -10px;
  }
}
</style>
