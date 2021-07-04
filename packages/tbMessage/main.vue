<!--
 * @Author: your name
 * @Date: 2021-05-25 11:25:19
 * @LastEditTime: 2021-07-03 13:17:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/packages/tbMessage/main.vue
-->
<template>
  <div class="tb-message" :style="wrapStyles">
    <notice v-for="notice in notices" :key="notice.name" :type="notice.type" :render="notice.render" :content="notice.content" :closable="notice.closable" :transition-name="notice.transitionName" :duration="notice.duration" :name="notice.name" :on-close="notice.onClose"></notice>
  </div>
</template>

<script>
import Notice from "./notice.vue";
let transferIndex = 0;
let seed = 0;
const now = Date.now();

// 用时间戳设置为uuid
function getUuid() {
  return "tbMessage_" + now + "_" + seed++;
}

export default {
  components: { Notice },
  props: {
    // 默认样式
    styles: {
      type: Object,
      default: function() {
        return {
          top: "65px",
          left: "50%",
        };
      },
    },
  },
  data() {
    return {
      // 所有push的数据
      notices: [],
      zIndex: 2050,
      tIndex: this.handleGetIndex(),
    };
  },
  computed: {
    // 样式
    wrapStyles() {
      let styles = Object.assign({}, this.styles);
      styles["z-index"] = this.zIndex + this.tIndex;
      return styles;
    },
  },
  methods: {
    // 新增方法
    add(notice) {
      // 此处用于确保唯一值
      const name = notice.name || getUuid();
      this.zIndex = notice.zIndex || 2050;
      let _notice = Object.assign(
        {
          styles: {
            right: "50%",
          },
          name: name,
        },
        notice
      );
      // 新增push数据
      this.notices.push(_notice);
      this.tIndex = this.handleGetIndex();
    },
    close(name) {
      // 点击x号删除对应的数据
      const notices = this.notices;
      for (let i = 0; i < notices.length; i++) {
        if (notices[i].name === name) {
          this.notices.splice(i, 1);
          break;
        }
      }
    },
    closeAll() {
      // 清除所有的数据
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
.tb-message {
  font-size: 14;
  position: fixed;
  z-index: 2050;
  width: 100%;
  top: 30px;
  left: 0;
  pointer-events: none;
}
.tb-message-notice {
  box-sizing: border-box;
  padding: 8px;
  text-align: center;
  transition: height 0.2s ease-in-out, padding 0.2s ease-in-out;
}

.tb-message-notice-content {
  display: inline-block;
  pointer-events: all;
  padding: 10px 16px;
  border-radius: 2px;
  box-shadow: 0 1px 6px 1px rgba(0, 0, 0, 0.15);
  background: #fff;
  position: relative;
  &-text {
    display: flex;
    align-items: center;
  }
  i {
    font-size: 18px;
    vertical-align: baseline;
    margin-right: 8px;
  }
}

.tb-message-notice-close {
  position: absolute;
  right: 0;
  top: 15px;
  //   color: ;
  outline: 0;
  cursor: pointer;
  i {
    font-size: 14px;
    color: #35495e;
    transition: color 0.2s ease;
    position: relative;
    top: -2px;
  }
}

.tb-message-notice-closable {
  .tb-message-notice-content {
    position: relative;
    padding-right: 32px;
  }
}
.tb-message-notice-primary i {
  color: #1089ff;
}
.tb-message-notice-success i {
  color: #52c41a;
}
.tb-message-notice-warning i {
  color: #fea638;
}
.tb-message-notice-danger i {
  color: #ff4d4f;
}
// move-up
.move-up-enter-active,
.move-up-leave-active {
  transition: all 0.2s cubic-bezier(0.55, 0, 0.1, 1);
}
.move-up-enter,
.move-up-leave-to {
  transform-origin: 0 0;
  transform: translateY(-100%);
  opacity: 0;
}
</style>
