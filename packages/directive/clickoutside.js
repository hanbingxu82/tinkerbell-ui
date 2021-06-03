/*
 * @Author: your name
 * @Date: 2021-06-02 15:50:02
 * @LastEditTime: 2021-06-02 16:18:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/packages/directive/clickoutside.js
 */
import { on } from "../utils/dom";

const nodeList = [];
const ctx = "@@clickoutsideContext";
const isServer = typeof window === "undefined";
let startClick;
let seed = 0;

function createDocumentHandler(el, binding, vnode) {
  return function(mouseup = {}, mousedown = {}) {
    if (!vnode || !vnode.context || !mouseup.target || !mousedown.target || el.contains(mouseup.target) || el.contains(mousedown.target) || el === mouseup.target || (vnode.context.popperElm && (vnode.context.popperElm.contains(mouseup.target) || vnode.context.popperElm.contains(mousedown.target)))) {
      return;
    }

    if (binding.expression && el[ctx].methodName && vnode.context[el[ctx].methodName]) {
      vnode.context[el[ctx].methodName]();
    } else {
      el[ctx].bindingFn && el[ctx].bindingFn();
    }
  };
}

if (!isServer) {
  on(document, "mousedown", (e) => (startClick = e));
  on(document, "mouseup", (e) => {
    nodeList.forEach((node) => node[ctx].documentHandler(e, startClick));
  });
}

/**
 * v-clickoutside
 * @desc 点击元素外面才会触发的事件
 */
export default {
  bind(el, binding, vnode) {
    nodeList.push(el);
    const id = seed++;
    el[ctx] = {
      id,
      documentHandler: createDocumentHandler(el, binding, vnode),
      methodName: binding.expression,
      bindingFn: binding.value,
    };
  },

  update(el, binding, vnode) {
    el[ctx].documentHandler = createDocumentHandler(el, binding, vnode);
    el[ctx].methodName = binding.expression;
    el[ctx].bindingFn = binding.value;
  },

  unbind(el) {
    let len = nodeList.length;

    for (let i = 0; i < len; i++) {
      if (nodeList[i][ctx].id === el[ctx].id) {
        nodeList.splice(i, 1);
        break;
      }
    }
    delete el[ctx];
  },
};
