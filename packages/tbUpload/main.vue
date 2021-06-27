<!--
 * @Author: your name
 * @Date: 2021-05-27 17:00:50
 * @LastEditTime: 2021-06-23 21:09:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/packages/tbUpload/main.vue
-->
<template>
  <div :class="[prefixCls]">
    <!--      drop：在可拖动元素放置在 <div> 元素中时执行     paste：在元素粘贴时触发（ @paste="handlePaste" 粘贴功能无法触发）      dragover：在元素正在拖动到放置目标时触发     dragleave：在可拖动的元素移出放置目标时执行 -->
    <div :class="classes" @click="handleClick" @drop.prevent="onDrop" @dragover.prevent="dragOver = true" @dragleave.prevent="dragOver = false">
      <input ref="input" type="file" :class="[prefixCls + '-input']" @change="handleChange" :multiple="multiple" :accept="accept" />
      <slot>
        <tb-button icon="icon-upload"> 点击上传</tb-button>
      </slot>
    </div>
    <!--slot="tip"，说明插槽-->
    <slot name="tip"></slot>
    <!-- 是否需要展示 showFileList、fileList（列表）、 handleRemove（列表中单个文件删除）、handlePreview（列表中单个文件进行点击）-->
    <tb-upload-list v-if="showFileList" :files="fileList" @file-remove="handleRemove" @file-preview="handlePreview"></tb-upload-list>
  </div>
</template>

<script>
import { oneOf } from "../utils/utils";
import ajax from "./ajax";
import Emitter from "../mixins/emitter";
import tbUploadList from "./tbUploadList.vue";

const prefixCls = "tb-upload";
export default {
  name: "tbUpload",
  mixins: [Emitter],
  components: { tbUploadList },
  props: {
    // 上传地址
    action: {
      type: String,
      required: true,
    },
    // 上传请求头
    headers: {
      type: Object,
      default() {
        return {};
      },
    },
    // 是否多选，采用input file上传原型的multiple
    multiple: {
      type: Boolean,
      default: false,
    },
    // 上传时附带的参数
    data: {
      type: Object,
    },
    // 上传文件的字段名
    name: {
      type: String,
      default: "file",
    },
    // 也可以简单的理解为，当前请求为跨域类型时是否在请求中协带cookie。 支持发送 cookie 凭证信息  当配置了xhr.withCredentials = true时，必须在后端增加 response 头信息Access-Control-Allow-Origin，且必须指定域名，而不能指定为*。
    withCredentials: {
      type: Boolean,
      default: false,
    },
    // 是否需要展示fileList上传列表
    showFileList: {
      type: Boolean,
      default: true,
    },
    // 上传控件的类型，一种是选择select  一种是拖拽drag  默认我们将其设置为select选择
    type: {
      type: String,
      validator(value) {
        return oneOf(value, ["select", "drag"]);
      },
      default: "select",
    },
    // 选择 支持的文件类型，与 accept 不同的是，format 是识别文件的后缀名
    format: {
      type: Array,
      default() {
        return [];
      },
    },
    // 接受上传的文件类型,input 标签原生的 accept 属性，会在选择文件时过滤 但是注意 此处如果配置选择所有文件会失败
    accept: {
      type: String,
    },
    // 文件大小限制，单位 KB
    maxSize: {
      type: Number,
    },
    // 上传文件之前的钩子，参数为上传的文件,若返回 false 或者 Promise 则停止上传
    beforeUpload: Function,
    // 文件上传时的钩子，返回字段为 event, file, fileList
    onProgress: {
      type: Function,
      default() {
        return {};
      },
    },
    // 文件上传成功时的钩子，返回字段为 response, file, fileList
    onSuccess: {
      type: Function,
      default() {
        return {};
      },
    },
    // 文件上传失败时的钩子，返回字段为 error, file, fileList
    onError: {
      type: Function,
      default() {
        return {};
      },
    },
    // 文件列表移除文件时的钩子，返回字段为 file, fileList
    onRemove: {
      type: Function,
      default() {
        return {};
      },
    },
    // 点击已上传的文件链接时的钩子，返回字段为 file， 可以通过 file.response 拿到服务端返回数据
    onPreview: {
      type: Function,
      default() {
        return {};
      },
    },
    // 文件超出指定大小限制时的钩子，返回字段为 file, fileList
    onExceededSize: {
      type: Function,
      default() {
        return {};
      },
    },
    // 文件格式验证失败时的钩子，返回字段为 file, fileList
    onFormatError: {
      type: Function,
      default() {
        return {};
      },
    },
    // 默认已上传的文件列表，例如：[{name: 'img1.jpg',url: 'http://www.xxx.com/img1.jpg' }, { name: 'img2.jpg', url: 'http://www.xxx.com/img2.jpg' }]
    defaultFileList: {
      type: Array,
      default() {
        return [];
      },
    },
    // 禁用
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      prefixCls: prefixCls,
      dragOver: false,
      fileList: [],
      tempIndex: 1,
    };
  },
  computed: {
    // 样式 根据传入的type类型来走 判断
    classes() {
      return [
        `${prefixCls}`,
        {
          [`${prefixCls}-select`]: this.type === "select",
          [`${prefixCls}-drag`]: this.type === "drag",
          // 如果文件移入进来的话（但是鼠标没有松开）就会  呈现一个文件移入的样式 我们可以通过这个样式去配置一系列的样式
          [`${prefixCls}-dragOver`]: this.type === "drag" && this.dragOver,
        },
      ];
    },
  },
  methods: {
    // 点击上传部分触发上传勾选文件事件
    handleClick() {
      if (this.disabled) return;
      this.$refs.input.click();
    },
    // 选取完文件时触发的事件  这个时候
    handleChange(e) {
      const files = e.target.files;
      if (!files) {
        return;
      }
      // 判断获取选取的文件然后触发上传事件
      this.uploadFiles(files);
      // 将所选择的file也就是值置空  以便重新选择
      this.$refs.input.value = null;
    },
    // 当文件拖入进来的时候执行   拖入进去之后this.dragOver就变为了false  以便控制样式
    onDrop(e) {
      this.dragOver = false;
      // 如果是禁用那就不要继续向下执行了
      if (this.disabled) return;
      // 如果不是禁用的话  可以获取到当前拖入的文件们 DataTransfer.files 获取的就是拖入进来的文件列表们  对应的也触发上传事件
      this.uploadFiles(e.dataTransfer.files);
    },
    
    // 上传文件事件
    uploadFiles(files) {
      // 参数为文件列表  Array.prototype.slice.call  浅拷贝
      let postFiles = Array.prototype.slice.call(files);
      // 如果不是多选的话那就只取第一项
      if (!this.multiple) postFiles = postFiles.slice(0, 1);

      // 如果没有文件的话那就return停止运行
      if (postFiles.length === 0) return;

      // 此处如果是多文件的话就循环遍历调用上传接口，单文件因为返还的是一个对象所以只会执行单次
      postFiles.forEach((file) => {
        this.upload(file);
      });
    },
    // 上传接口
    upload(file) {
      // 如果没有传递 beforeUpload 上传之前的钩子的话那么就可以直接执行 this.post 调用上传接口了
      if (!this.beforeUpload) {
        return this.post(file);
      }
      // 当然如果有 beforeUpload 的话那么就执行上传之前触发的事件，也就是触发上传之前的回调
      const before = this.beforeUpload(file);
      // 如果return的是一个promise 那么对应的 会触发他的.then事件  然后走上传，其实就是相当于手动手写一个ajax
      if (before && before.then) {
        // 如果.then 传递的是一个resolve（file）文件的话就会触发if事件，将传入的文件放进请求当中
        before.then(
          (processedFile) => {
            if (Object.prototype.toString.call(processedFile) === "[object File]") {
              this.post(processedFile);
            } else {
              this.post(file);
            }
          },
          () => {
            // 出错捕获
            // this.$emit('cancel', file);
          }
        );
      } else if (before !== false) {
        // 如果before里面没有返还 false 的话那么就可以走上传了
        this.post(file);
      } else {
        // 此处停止上传
        // this.$emit('cancel', file);
      }
    },
    // 上传接口
    post(file) {
      // 上传文件 校验 传递的是一个数组
      if (this.format.length) {
        // 拆分文件
        const fileFormat = file.name
          .split(".")
          .pop()
          .toLocaleLowerCase();
        // 用于判断传输的后缀  是否存在于format列表当中
        const checked = this.format.some((item) => item.toLocaleLowerCase() === fileFormat);
        // 如果不存在那就报错,触发文件格式验证失败时的钩子
        if (!checked) {
          this.onFormatError(file, this.fileList);
          return false;
        }
      }

      // 判断传输大小
      if (this.maxSize) {
        // 获取当前上传文件的大小，与之我们传入的maxSize进行对比  如果大于我们传入的最大值 那么就会触发文件超出指定大小限制时的钩子，返回字段为 file, fileList
        if (file.size > this.maxSize * 1024) {
          this.onExceededSize(file, this.fileList);
          return false;
        }
      }
      // 如果正确的话  那么这个时候就可以传递进入fileList列表中了   开始走 tb-upload-list 组件流程
      this.handleStart(file);
      // 构建表单文件  后期可改造为  单次上传多个file文件
      // let formData = new FormData();
      // formData.append(this.name, file);

      /**
       * @description: 调用ajax上传接口  以此上传我们的文件
       * @param {*}
       * @return {*}
       */      
      ajax({
        headers: this.headers, // 自定义的请求头
        withCredentials: this.withCredentials, // 当前请求为跨域类型时是否在请求中协带cookie
        file: file, // 文件
        data: this.data, //附带参数
        filename: this.name, // 上传文件的key值
        action: this.action, // 上传地址
        // 上传时的钩子
        onProgress: (e) => {
          this.handleProgress(e, file);
        },
        // 上传成功的钩子
        onSuccess: (res) => {
          this.handleSuccess(res, file);
        },
        // 上传失败触发的钩子
        onError: (err, response) => {
          this.handleError(err, response, file);
        },
      });
    },
    // 上传初始化，塞入到对应的fileList当中
    handleStart(file) {
      file.uid = Date.now() + this.tempIndex++;
      const _file = {
        status: "uploading",// 上传加载中
        name: file.name,
        size: file.size,
        percentage: 0,
        uid: file.uid,
        showProgress: true,
      };

      this.fileList.push(_file);
    },
    getFile(file) {
      const fileList = this.fileList;
      let target;
      // 判断数组所有项返还的是不是true，找到当前上传文件对应的fileList对应的上传文件
      fileList.every((item) => {
        target = file.uid === item.uid ? item : null;
        return !target;
      });
      return target;
    },
    /**
     * @description: 文件上传时触发事件
     * @param {*} e
     * @param {*} file
     * @return {*}
     */    
    handleProgress(e, file) {
      const _file = this.getFile(file);
      // 触发文件上传时的钩子，将我们在fileList中对应的那个file塞给this.onProgress上传时钩子
      this.onProgress(e, _file, this.fileList);
      // 将上传得值实时传递给子组件  也就是对应上传的那个值  如果没有就判定为0 其实就相当于失败了
      _file.percentage = e.percent || 0;
    },
    handleSuccess(res, file) {
      // 寻找对应的fileList中的file对应上传的那个文件
      const _file = this.getFile(file);

      // 如果有这个文件说明是通过了上传校验的
      if (_file) {
        // 文件上传状态变更为finished完成
        _file.status = "finished";
        // 在文件上传成功之后，文件当中也塞入对应的上传回调
        _file.response = res;
        this.onSuccess(res, _file, this.fileList);
        // 触发向上查找，form-change事件  此处可以暂时屏蔽
        this.dispatch("tbFormItem", "form-change", _file);

        setTimeout(() => {
          // 上传成功500ms之后对应的上传进度条就不要在展示了
          _file.showProgress = false;
        }, 500);
      }
    },
    handleError(err, response, file) {
      // 获取到指定的file
      const _file = this.getFile(file);
      const fileList = this.fileList;
      // 更改上传文件为失败文件
      _file.status = "fail";
      // 删除这个文件
      fileList.splice(fileList.indexOf(_file), 1);
      // 触发上传失败的钩子
      this.onError(err, response, file);
    },

    // fileList 点击x号删除时触发的事件
    handleRemove(file) {
      const fileList = this.fileList;
      fileList.splice(fileList.indexOf(file), 1);
      // 触发文件移除列表时事件
      this.onRemove(file, fileList);
    },
    // 点击 fileList 单项触发的事件
    handlePreview(file) {
      // 如果状态是已完成
      if (file.status === "finished") {
        // 触发点击fileList单项 单击事件
        this.onPreview(file);
      }
    },
    // 移除fileList列表事件   使用父组件  this.$refs['upload(ref值)'].clearFiles()  就会移除所有的file文件
    clearFiles() {
      this.fileList = [];
    },
  },
  watch: {
    // 侦听上传列表
    defaultFileList: {
      immediate: true,
      handler(fileList) {
        // 如果传递了  那么根据map  首次状态一定就会是成功的  包括进度percentage也会是100   uid同样会给与初始值，这样就会展示在页面上
        this.fileList = fileList.map((item) => {
          item.status = "finished";
          item.percentage = 100;
          item.uid = Date.now() + this.tempIndex++;
          return item;
        });
      },
    },
  },
};
</script>
<style lang="less">
.tb-upload {
  input[type="file"] {
    display: none;
  }
  &-select {
    display: inline-block;
  }
  &-list {
    margin-top: 8px;

    &-file {
      padding: 4px;
      color: #515a6e;
      border-radius: 4px;
      line-height: 1.5em;
      font-size: 12px;
      transition: background-color 0.2s ease-in-out;
      overflow: hidden;
      position: relative;

      & > span {
        cursor: pointer;
        transition: color 0.2s ease-in-out;
        i {
          display: inline-block;
          vertical-align: baseline;
          width: 12px;
          height: 12px;
          color: #515a6e;
          text-align: center;
        }
      }

      &:hover {
        background: #f3f3f3;
        & > span {
          color: #409eff;
          i {
            color: #515a6e;
          }
        }
        .tb-upload-list-remove {
          opacity: 1;
        }
      }
    }
    &-remove {
      opacity: 0;
      font-size: 18px;
      cursor: pointer;
      float: right;
      margin-right: 4px;
      color: #999;
      transition: all 0.2s ease;
      &:hover {
        color: #444;
      }
    }
  }
}
</style>
