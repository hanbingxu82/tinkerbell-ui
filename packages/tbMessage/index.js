/*
 * @Author: your name
 * @Date: 2021-05-25 11:25:14
 * @LastEditTime: 2021-05-25 15:33:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/packages/tbMessage/index.js
 */
import Vue from "vue";
import Message from "./main.vue";

Message.newInstance = (properties) => {
  const _props = properties || {};
  // 创建一个实例  这个实例其实也就相当于将我们手写的main.vue 填充到变更为一个子实例，方便传参
  const Instance = new Vue({
    name: "parentVue",
    render(h) {
      return h(Message, {
        props: _props,
      });
    },
  });
  // 绑定组件实例
  const component = Instance.$mount();
  // 添加到dom
  document.body.appendChild(component.$el);
  // 这个message即是返回的Vnode  因为我们现在采用的是new Vue()的方式,其实对应的我们真正想要的那个Message其实是new Vue的子组件
  const message = Instance.$children[0];

  // 返回一个vnode对象
  return {
    notice(noticeProps) {
      // 调用实例message 组件的add方法 会传递name值
      message.add(noticeProps);
    },
    remove(name) {
      // 调用实例message 组件的close方法
      message.close(name);
    },
    component: message,
    destroy(element) {
      // 调用实例message 组件的closeAll方法
      message.closeAll();
      setTimeout(function() {
        document.body.removeChild(document.getElementsByClassName(element)[0]);
      }, 500);
    },
  };
};
const prefixKey = "tb_message_key_";
let messageInstance;
let name = 1;

// 获取一个实例
function getMessageInstance() {
  messageInstance =
    messageInstance ||
    Message.newInstance({
      styles: {
        top: "24px",
      },
    });
  return messageInstance;
}

// 提示方法
function notice(options) {
  let instance = getMessageInstance();
  // 这里的name值  其实也就相当于子项的key值
  let _notice = Object.assign({ name: `${prefixKey}${name}` }, options);
  // 实例弹出提示
  instance.notice(_notice);
  // 用于手动消除
  return (function() {
    let target = name++;
    return function() {
      // 我们如果想要手动js 删除当前这个指定name数据的话  this.$message({ type: "success", duration: 0, content: "look" })()  立即执行即可
      instance.remove(`${prefixKey}${target}`);
    };
  })();
}

let defaultOption = {
  transitionName: "move-up",
  type: "primary",
  content: "",
  duration: 3,
  closable: false,
  render: function() {},
  onClose: function() {},
};
// 暴露出去一个对象，最终绑定的其实也就是这个对象
export default {
  name: "Message",
  // message方法options其实就相当于与传入的内容配置项等等
  message(options) {
    // 如果第一个是默认字符
    let _option = {};
    if (typeof options === "string") {
      _option = Object.assign({}, defaultOption, { content: options });
      return notice(_option);
    }
    // 配置项传入的是对象
    _option = Object.assign({}, defaultOption, options);
    return notice(_option);
  },
  destroy() {
    let instance = getMessageInstance();
    messageInstance = null;
    instance.destroy("tb-message");
  },
};
