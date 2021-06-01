/*
 * @Author: your name
 * @Date: 2021-05-27 16:59:29
 * @LastEditTime: 2021-06-01 14:38:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/packages/tbUpload/ajax.js
 */
// https://github.com/ElemeFE/element/blob/dev/packages/upload/src/ajax.js

/**
 * 
 * @param {*} action 
 * @param {*} option 
 * @param {*} xhr 几个对应的事件
 *  onloadstart	获取开始
    onprogress	数据传输进行中
    onabort	获取操作终止
    onerror	获取失败
    onload	获取成功
    ontimeout	获取操作在用户规定的时间内未完成
    onloadend	获取完成（不论成功与否）
 */

// 解析错误
function getError(action, option, xhr) {
  const msg = `fail to post ${action} ${xhr.status}`;
  const err = new Error(msg);
  err.status = xhr.status;
  err.method = "post";
  err.url = action;
  return err;
}

// 解析文本
function getBody(xhr) {
  const text = xhr.responseText || xhr.response;
  if (!text) {
    return text;
  }

  try {
    return JSON.parse(text);
  } catch (e) {
    return text;
  }
}

export default function upload(option) {
  // 如果没有 XMLHttpRequest 就直接抛个错误
  if (typeof XMLHttpRequest === "undefined") {
    return;
  }
  // new一个 ajax（XMLHttpRequest对象）
  const xhr = new XMLHttpRequest();
  // 获取上传的地址
  const action = option.action;

  // 返还上传进度
  if (xhr.upload) {
    // 手动重写上传进度事件
    xhr.upload.onprogress = function progress(e) {
      // loaded：整数，表示已经加载的量，默认是0。
      // total：整数，表示需要加载的总量，默认是0。
      if (e.total > 0) {
        // 判断用已经加载的数量/总量*100得到百分比
        e.percent = (e.loaded / e.total) * 100;
      }
      // 上传的时候就会执行这个事件回调
      option.onProgress(e);
    };
  }

  // new一个表单对象
  const formData = new FormData();

  // 判断传递进来的option是否有额外属性
  if (option.data) {
    // 如果有额外属性  遍历 填充进去formData中 key与值
    Object.keys(option.data).map((key) => {
      formData.append(key, option.data[key]);
    });
  }
  // 然后将对应的自定义name值  与文件流传递进去
  formData.append(option.filename, option.file);

  // 如果获取失败触发的事件
  xhr.onerror = function error(e) {
    // 触发失败回调，在触发钩子
    option.onError(e);
  };

  // 获取成功后执行的事件
  xhr.onload = function onload() {
    // 判断是否获取成功
    if (xhr.status < 200 || xhr.status >= 300) {
      // 如果失败了返回错误  并且执行回调错误钩子
      return option.onError(getError(action, option, xhr), getBody(xhr));
    }
    // 如果成功了就执行对应的成功事件  并且返回成功后的回调 res
    option.onSuccess(getBody(xhr));
  };

  // 初始化请求  第三个参数为是否异步
  xhr.open("post", action, true);

  //in的用法
  //in是用来判断对象或者数组中是否存在某个值的。
  if (option.withCredentials && "withCredentials" in xhr) {
    // withCredentials这个就是返还凭据信息的，因为其实在同域情况下配置与不配置效果都是一样的
    xhr.withCredentials = true;
  }
  // 获取请求头
  const headers = option.headers || {};

  // if (headers['X-Requested-With'] !== null) {
  //   xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
  // }

  // for in 请求头塞入对应的请求头项当中去
  for (let item in headers) {
    if (headers.hasOwnProperty(item) && headers[item] !== null) {
      xhr.setRequestHeader(item, headers[item]);
    }
  }
  // 发送请求
  xhr.send(formData);
}
