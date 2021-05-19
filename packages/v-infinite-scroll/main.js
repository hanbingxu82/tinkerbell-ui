/*
 * @Author: ElemeFE  vue-infinite-scroll
 * @Date: 2021-05-19 09:25:14
 * @LastEditTime: 2021-05-19 10:00:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/packages/InfiniteScroll/main.js
 */
const ctx = "@@InfiniteScroll";

var throttle = function(fn, delay) {
  var now, lastExec, timer, context, args; //eslint-disable-line

  var execute = function() {
    fn.apply(context, args);
    lastExec = now;
  };

  return function() {
    context = this;
    args = arguments;

    now = Date.now();

    if (timer) {
      clearTimeout(timer);
      timer = null;
    }

    if (lastExec) {
      var diff = delay - (now - lastExec);
      if (diff < 0) {
        execute();
      } else {
        timer = setTimeout(() => {
          execute();
        }, diff);
      }
    } else {
      execute();
    }
  };
};

var getScrollTop = function(element) {
  if (element === window) {
    return Math.max(window.pageYOffset || 0, document.documentElement.scrollTop);
  }

  return element.scrollTop;
};

var getComputedStyle = document.defaultView.getComputedStyle;

var getScrollEventTarget = function(element) {
  var currentNode = element;
  // bugfix, see http://w3help.org/zh-cn/causes/SD9013 and http://stackoverflow.com/questions/17016740/onscroll-function-is-not-working-for-chrome
  while (currentNode && currentNode.tagName !== "HTML" && currentNode.tagName !== "BODY" && currentNode.nodeType === 1) {
    var overflowY = getComputedStyle(currentNode).overflowY;
    if (overflowY === "scroll" || overflowY === "auto") {
      return currentNode;
    }
    currentNode = currentNode.parentNode;
  }
  return window;
};

var getVisibleHeight = function(element) {
  if (element === window) {
    return document.documentElement.clientHeight;
  }

  return element.clientHeight;
};

var getElementTop = function(element) {
  if (element === window) {
    return getScrollTop(window);
  }
  return element.getBoundingClientRect().top + getScrollTop(window);
};

var isAttached = function(element) {
  var currentNode = element.parentNode;
  while (currentNode) {
    if (currentNode.tagName === "HTML") {
      return true;
    }
    if (currentNode.nodeType === 11) {
      return false;
    }
    currentNode = currentNode.parentNode;
  }
  return false;
};

var doBind = function() {
  if (this.binded) return; // eslint-disable-line
  this.binded = true;

  var directive = this;
  var element = directive.el;
  // 检查busy的值的时间间隔，默认值是200，因为vue-infinite-scroll的基础原理就是，vue-infinite-scroll会循环检查busy的值，以及是否滚动到底，只有当busy为false且滚动到底，回调函数才会执行。
  var throttleDelayExpr = element.getAttribute("infinite-scroll-throttle-delay");
  var throttleDelay = 200;
  if (throttleDelayExpr) {
    throttleDelay = Number(directive.vm[throttleDelayExpr] || throttleDelayExpr);
    if (isNaN(throttleDelay) || throttleDelay < 0) {
      throttleDelay = 200;
    }
  }
  directive.throttleDelay = throttleDelay;

  directive.scrollEventTarget = getScrollEventTarget(element);
  directive.scrollListener = throttle(doCheck.bind(directive), directive.throttleDelay);
  directive.scrollEventTarget.addEventListener("scroll", directive.scrollListener);

  this.vm.$on("hook:beforeDestroy", function() {
    directive.scrollEventTarget.removeEventListener("scroll", directive.scrollListener);
  });

  var disabledExpr = element.getAttribute("infinite-scroll-disabled");
  var disabled = false;
  // 此处值为是否执行当前的加载效果   因为并不是动态的 directive.vm[disabledExpr] 调用的就是当前组件中的对应数据
  // 对标的其实也就是buy的状态，因为我们用vue实例$watch进行了监听
  if (disabledExpr) {
    this.vm.$watch(disabledExpr, function(value) {
      directive.disabled = value;
      if (!value && directive.immediateCheck) {
        doCheck.call(directive);
      }
    });
    disabled = Boolean(directive.vm[disabledExpr]);
  }
  directive.disabled = disabled;

  // 这里决定了页面滚动到离页尾多少像素的时候触发回调函数。
  var distanceExpr = element.getAttribute("infinite-scroll-distance");
  var distance = 0;
  if (distanceExpr) {
    distance = Number(directive.vm[distanceExpr] || distanceExpr);
    if (isNaN(distance)) {
      distance = 0;
    }
  }
  directive.distance = distance;
  // 默认值为true，在绑定后立即检查busy的值和是否滚动到底。如果你的初始内容高度不够高、不足以填满可滚动的容器的话，你应设为true，这样会立即执行一次loadMore，会帮你填充一些初始内容。
  var immediateCheckExpr = element.getAttribute("infinite-scroll-immediate-check");
  var immediateCheck = true;
  if (immediateCheckExpr) {
    immediateCheck = Boolean(directive.vm[immediateCheckExpr]);
  }
  directive.immediateCheck = immediateCheck;
  // 为true立即调用
  if (immediateCheck) {
    doCheck.call(directive);
  }
  // 自绑事件  手动js触发当事件在Vue实例中发出时，无限滚动将再次检查。
  var eventName = element.getAttribute("infinite-scroll-listen-for-event");

  if (eventName) {
    directive.vm.$on(eventName, function() {
      doCheck.call(directive);
    });
  }
};

var doCheck = function(force) {
  var scrollEventTarget = this.scrollEventTarget;
  var element = this.el;
  var distance = this.distance;

  if (force !== true && this.disabled) return; //eslint-disable-line
  var viewportScrollTop = getScrollTop(scrollEventTarget);
  var viewportBottom = viewportScrollTop + getVisibleHeight(scrollEventTarget);

  var shouldTrigger = false;

  if (scrollEventTarget === element) {
    shouldTrigger = scrollEventTarget.scrollHeight - viewportBottom <= distance;
  } else {
    var elementBottom = getElementTop(element) - getElementTop(scrollEventTarget) + element.offsetHeight + viewportScrollTop;

    shouldTrigger = viewportBottom + distance >= elementBottom;
  }

  if (shouldTrigger && this.expression) {
    this.expression();
  }
};

export default {
  bind(el, binding, vnode) {
    el[ctx] = {
      el,
      vm: vnode.context,
      expression: binding.value,
    };
    const args = arguments;
    el[ctx].vm.$on("hook:mounted", function() {
      el[ctx].vm.$nextTick(function() {
        if (isAttached(el)) {
          doBind.call(el[ctx], args);
        }

        el[ctx].bindTryCount = 0;

        var tryBind = function() {
          if (el[ctx].bindTryCount > 10) return; //eslint-disable-line
          el[ctx].bindTryCount++;
          if (isAttached(el)) {
            doBind.call(el[ctx], args);
          } else {
            setTimeout(tryBind, 50);
          }
        };

        tryBind();
      });
    });
  },

  unbind(el) {
    if (el && el[ctx] && el[ctx].scrollEventTarget) el[ctx].scrollEventTarget.removeEventListener("scroll", el[ctx].scrollListener);
  },
};
