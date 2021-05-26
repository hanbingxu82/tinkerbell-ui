<!--
 * @Author: your name
 * @Date: 2021-05-26 13:28:09
 * @LastEditTime: 2021-05-26 15:19:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/packages/tbNotification/main.vue
-->
<template>
  <div :class="classes" :style="wrapStyles">
    <notice v-for="notice in notices" :key="notice.name" :prefix-cls="prefixCls" :type="notice.type" :content="notice.content" :duration="notice.duration" :render="notice.render" :has-title="notice.hasTitle" :withIcon="notice.withIcon" :closable="notice.closable" :name="notice.name" :transition-name="notice.transitionName" :background="notice.background" :msg-type="notice.msgType" :on-close="notice.onClose"> </notice>
  </div>
</template>
<script>
import Notice from "./notice.vue";
let transferIndex = 0;
const prefixCls = "tb-notification";
let seed = 0;
const now = Date.now();

function getUuid() {
  return "tbNotification_" + now + "_" + seed++;
}

export default {
  components: { Notice },
  props: {
    prefixCls: {
      type: String,
      default: prefixCls,
    },
    styles: {
      type: Object,
      default: function() {
        return {
          top: "65px",
          left: "50%",
        };
      },
    },
    content: {
      type: String,
    },
    className: {
      type: String,
    },
  },
  data() {
    return {
      notices: [],
      tIndex: this.handleGetIndex(),
    };
  },
  computed: {
    classes() {
      return [
        `${this.prefixCls}`,
        {
          [`${this.className}`]: !!this.className,
        },
      ];
    },
    wrapStyles() {
      let styles = Object.assign({}, this.styles);
      styles["z-index"] = 2010 + this.tIndex;

      return styles;
    },
  },
  methods: {
    add(notice) {
      const name = notice.name || getUuid();

      let _notice = Object.assign(
        {
          styles: {
            right: "50%",
          },
          content: "",
          duration: 1.5,
          closable: false,
          name: name,
        },
        notice
      );

      this.notices.push(_notice);
      this.tIndex = this.handleGetIndex();
    },
    close(name) {
      const notices = this.notices;
      for (let i = 0; i < notices.length; i++) {
        if (notices[i].name === name) {
          this.notices.splice(i, 1);
          break;
        }
      }
    },
    closeAll() {
      this.notices = [];
    },
    handleGetIndex() {
      transferIndex++;
      return transferIndex;
    },
  },
};
</script>
<style lang="less">
.tb-notice {
  position: fixed;
  width: 335px;
  margin-right: 24px;
  z-index: 9999;
  &-content-with-icon {
    margin-left: 51px;
  }
  &-close {
    position: absolute;
    cursor: pointer;
    right: 8px;
    top: 18px;
    outline: none;
    i {
      font-size: 14px;
      color: #909399;
      position: relative;
      top: -2px;
    }
  }
  &-with-desc&-with-icon &-title {
    margin-left: 51px;
  }
  &-notice {
    font-size: 14px;
    text-align: justify;
    word-break: break-all;
    margin-bottom: 10px;
    padding: 16px 24px;
    border-radius: 2px;
    box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05);
    background: #fff;
    line-height: 1;
    position: relative;
    overflow: hidden;

    &-with-desc {
      .tb-notice-close {
        top: 11px;
      }
    }
  }
  &-content-with-render {
    .tb-notice-desc {
      display: none;
    }
  }

  &-content-with-render-notitle {
    margin-left: 26px;
  }
  &-title {
    font-size: 16px;
    line-height: 18px; //fixed the bug that the bottom of some letters were hidden just like 'g'
    // color: $color-text-default;
    padding-right: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  &-with-desc &-title {
    margin-bottom: 8px;
  }
  &-desc {
    font-size: 14px;
    // color: $color-text-default;
    line-height: 1.5715;
  }
  &-with-desc&-with-icon &-desc {
    margin-left: 51px;
  }

  &-with-icon &-title {
    margin-left: 26px;
  }

  &-icon {
    position: absolute;
    // top: -1px;
    top: 50%;
    transform: translate(0, -50%);
    i {
      font-size: 20px;
    }

    &-success {
      color: #67c23a;
    }
    &-primary {
      color: #409eff;
    }
    &-info {
      color: #909399;
    }
    &-warning {
      color: #e6a23c;
    }
    &-danger {
      color: #f56c6c;
    }
  }
  &-with-desc &-icon {
    i {
      font-size: 36px;
      // top: -6px;
      // top: 50%;
      // transform: translate(0, -50%);
    }
  }

  &-custom-content {
    // position: relative;
  }
}
// move-right
.move-right-enter-active,
.move-right-leave-active {
  transition: all 0.3s ease-in-out;
}
.move-right-enter,
.move-right-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
</style>
