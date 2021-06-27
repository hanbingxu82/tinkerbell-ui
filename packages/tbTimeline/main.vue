<!--
 * @Author: your name
 * @Date: 2021-05-24 17:23:04
 * @LastEditTime: 2021-05-24 21:50:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/packages/tbTimeline/main.vue
-->
<template>
  <ul :class="classes">
    <slot></slot>
  </ul>
</template>
<script>
const prefixCls = "tb-timeline";
export default {
  name: "tbTimeline",
  props: {
    // 判断最后一行是不是虚线
    pending: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classes() {
      return [`${prefixCls}`, { [`${prefixCls}-pending`]: this.pending }];
    },
  },
};
</script>
<style lang="less">
.tb-timeline {
  list-style: none;
  margin: 0;
  padding: 0;
  &-item {
    margin: 0 !important;
    padding: 0 0 12px 0;
    list-style: none;
    position: relative;
    line-height: 20px;
    &-tail {
      position: absolute;
      left: 6px;
      top: 3px;
      height: 100%;
      border-left: 1px solid #e8eaec;
    }
    &-pending &-tail {
      display: none;
    }
    &-head {
      position: absolute;
      top: 1px;
      width: 13px;
      height: 13px;
      background-color: #fff;
      border-radius: 50%;
      border: 1px solid transparent;
      &-primary {
        border-color: #1089ff;
        color: #1089ff;
      }
      &-success {
        border-color: #52c41a;
        color: #52c41a;
      }
      &-info {
        border-color: #35495e;
        color: #35495e;
      }
      &-warning {
        border-color: #fea638;
        color: #fea638;
      }
      &-danger {
        border-color: #ff4d4f;
        color: #ff4d4f;
      }
    }

    &-head-custom {
      width: 40px;
      height: auto;
      padding: 2px 0;
      text-align: center;
      line-height: 1;
      border: 0;
      border-radius: 0;
      font-size: 14px;
      position: absolute;
      left: -13px;
      top: 8px;
      transform: translateY(-50%);
      .iconfont {
        font-size: 18px;
      }
    }
    &-content {
      padding: 1px 1px 10px 24px;
      font-size: 14px;
      position: relative;
      top: -3px;
      line-height: 1.5em;
    }

    &:last-child {
      .tb-timeline-item-tail {
        display: none;
      }
    }
  }
  
  &-pending &-item:nth-last-of-type(2) {
    .tb-timeline-item-tail {
      border-left: 1px dotted #e8eaec;
    }
    .tb-timeline-item-content {
      min-height: 48px;
    }
  }
}
</style>