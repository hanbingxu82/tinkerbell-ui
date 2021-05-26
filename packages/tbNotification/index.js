/*
 * @Author: your name
 * @Date: 2021-05-26 13:28:04
 * @LastEditTime: 2021-05-26 15:18:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/packages/tbNotification/index.js
 */
import Notification from "./main.vue";
import Vue from "vue";

Notification.newInstance = (properties) => {
  const _props = properties || {};

  const Instance = new Vue({
    render(h) {
      return h(Notification, {
        props: _props,
      });
    },
  });

  const component = Instance.$mount();
  document.body.appendChild(component.$el);
  const notification = Instance.$children[0];

  return {
    notice(noticeProps) {
      notification.add(noticeProps);
    },
    remove(name) {
      notification.close(name);
    },
    component: notification,
    destroy(element) {
      notification.closeAll();
      setTimeout(function() {
        document.body.removeChild(document.getElementsByClassName(element)[0]);
      }, 500);
    },
  };
};

const prefixCls = "tb-notice";
const iconPrefixCls = "tb-icon";
const prefixKey = "tb_notice_key_";

let top = 24;
let defaultDuration = 4.5;
let noticeInstance;
let name = 1;

const iconTypes = {
  info: "icon-prompt-filling",
  primary: "icon-prompt-filling",
  success: "icon-success-filling",
  warning: "icon-help-filling",
  danger: "icon-delete-filling",
};

function getNoticeInstance() {
  noticeInstance =
    noticeInstance ||
    Notification.newInstance({
      prefixCls: prefixCls,
      styles: {
        top: `${top}px`,
        right: 0,
      },
    });

  return noticeInstance;
}

function notice(type, options) {
  const title = options.title || ""; // 标题
  const desc = options.desc || ""; // 内容
  const noticeKey = options.name || `${prefixKey}${name}`;
  const onClose = options.onClose || function() {};
  const render = options.render;
  // todo const btn = options.btn || null;
  const duration = options.duration === 0 ? 0 : options.duration || defaultDuration;

  name++;

  let instance = getNoticeInstance();

  let content;

  let withIcon;

  const withDesc = options.render && !title ? "" : desc || options.render ? ` ${prefixCls}-with-desc` : "";

  if (type === "normal") {
    withIcon = false;
    content = `
            <div class="${prefixCls}-custom-content ${prefixCls}-with-normal ${withDesc}">
                <div class="${prefixCls}-title">${title}</div>
                <div class="${prefixCls}-desc">${desc}</div>
            </div>
        `;
  } else {
    const iconType = iconTypes[type];
    withIcon = true;
    content = `
            <div class="${prefixCls}-custom-content ${prefixCls}-with-icon ${prefixCls}-with-${type} ${withDesc}">
                <span class="${prefixCls}-icon ${prefixCls}-icon-${type}">
                    <i class="iconfont ${iconType}"></i>
                </span>
                <div class="${prefixCls}-title">${title}</div>
                <div class="${prefixCls}-desc">${desc}</div>
            </div>
        `;
  }

  instance.notice({
    name: noticeKey.toString(),
    duration: duration, // 持续时间
    styles: {},
    transitionName: "move-right",
    content: content, // HTML内容
    withIcon: withIcon,
    render: render,// 自定义描述内容，使用 Vue 的 Render 函数
    hasTitle: !!title,
    onClose: onClose, // 关闭回调
    closable: true, // 是否显示x号
    type: "notice",
  });
}

export default {
  open(options) {
    return notice("normal", options);
  },
  info(options) {
    return notice("info", options);
  },
  primary(options) {
    return notice("primary", options);
  },
  success(options) {
    return notice("success", options);
  },
  warning(options) {
    return notice("warning", options);
  },
  danger(options) {
    return notice("danger", options);
  },
//   全局配置  top:距离顶部距离  duration:显示持续描述 
  config(options) {
    if (options.top) {
      top = options.top;
    }
    if (options.duration || options.duration === 0) {
      defaultDuration = options.duration;
    }
  },
  close(name) {
    if (name) {
      name = name.toString();
      if (noticeInstance) {
        noticeInstance.remove(name);
      }
    } else {
      return false;
    }
  },
  destroy() {
    let instance = getNoticeInstance();
    noticeInstance = null;
    instance.destroy("tb-notice");
  },
};
