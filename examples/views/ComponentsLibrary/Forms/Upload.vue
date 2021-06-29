<!--
 * @Author: your name
 * @Date: 2021-06-29 15:35:28
 * @LastEditTime: 2021-06-29 17:35:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/examples/views/ComponentsLibrary/Forms/Upload.vue
-->

<template>
  <div>
    <h2
      id="upload-shang-chuan"
      style='box-sizing: border-box; margin: 0px; padding: 10px 0px; font-size: 28px; font-weight: 400; color: rgb(31, 47, 61); border-bottom: 1px solid rgb(197, 217, 232); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#upload-shang-chuan" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;Upload 上传
    </h2>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      文件选择上传按钮，实现简单的上传封装
    </p>
    <h3
      id="ji-chu-yong-fa"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#ji-chu-yong-fa" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;基础用法
    </h3>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      最基本用法，点击上传，一次选择一个文件。
    </p>
    <p>
      <br />
    </p>
    <Demo>
      <div slot="source">
        <div style="width: 400px;">
          <tb-upload action="//jsonplaceholder.typicode.com/posts/">
            <tb-button icon="icon-upload" plain type="primary"> 点击上传</tb-button>
          </tb-upload>
        </div>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html1">
        </code>
      </pre>
    </Demo>

    <h3
      id="duo-xuan-shang-chuan"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#duo-xuan-shang-chuan" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;多选
    </h3>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      可以开启多选模式来一次选择多个
    </p>
    <p>
      <br />
    </p>

    <Demo>
      <div slot="source">
        <div style="width: 400px;">
          <tb-upload action="//jsonplaceholder.typicode.com/posts/" multiple>
            <tb-button icon="ios-cloud-upload" plain type="primary"> 点击上传</tb-button>
          </tb-upload>
        </div>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html2">
        </code>
      </pre>
    </Demo>
    <h3
      id="shou-dong-shang-chuan"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#shou-dong-shang-chuan" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;手动上传
    </h3>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      绑定 before-upload，并返回false，可以阻止默认上传流程，手动控制文件上传。
    </p>
    <p>
      <br />
    </p>

    <Demo>
      <div slot="source">
        <div>
          <div style="width: 400px;">
            <tb-upload action="//jsonplaceholder.typicode.com/posts/" :before-upload="handleUpload"> </tb-upload>
            <div v-if="file !== null">
              Upload file: {{ file.name }}
              <tb-button type="text" @click="upload" :loading="loadingStatus">
                {{ loadingStatus ? "Uploading" : "Click to upload" }}
              </tb-button>
            </div>
          </div>
        </div>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html3">
        </code>
      </pre>
    </Demo>
    <h3
      id="tuo-zhuai-shang-chuan"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#tuo-zhuai-shang-chuan" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;拖拽上传
    </h3>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      设置属性 type 为 drag，可以拖拽上传。
    </p>
    <p>
      <br />
    </p>

    <Demo>
      <div slot="source">
        <div style="width: 400px;">
          <tb-upload action="//jsonplaceholder.typicode.com/posts/" multiple type="drag">
            <div style="padding: 20px 0;border:1px dashed #eee;cursor: pointer;" flex="dir:top main:center cross:center">
              <p style="margin:5px auto;text-align:center;"><i class="iconfont icon-upload" style="color: #3399ff;font-size:52px"></i></p>
              <p style="margin:5px auto;text-align:center;">Click or drag files here to upload</p>
            </div>
          </tb-upload>
        </div>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html4">
        </code>
      </pre>
    </Demo>
    <h3
      id="rowUpload"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#rowUpload" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;Upload props
    </h3>
    <p>
      <br />
    </p>
    <tb-table-eazy :rows="rowUpload" :cols="col"></tb-table-eazy>
        <h3
      id="rowUploadMethod"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#rowUploadMethod" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;Upload methods
    </h3>
    <p>
      <br />
    </p>
    <tb-table-eazy :rows="rowUploadMethod" :cols="colEvent"></tb-table-eazy>
        <h3
      id="rowUploadSlot"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#rowUploadSlot" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;Upload slots
    </h3>
    <p>
      <br />
    </p>
    <tb-table-eazy :rows="rowUploadSlot" :cols="colSlot"></tb-table-eazy>
    <RightSmallNav :rightTitle="rightTitle" @goMeowPoint="goMeowPoint" />
  </div>
</template>

<script>
import useScroll from "../../../utils/mixins";
import RightSmallNav from "../../../components/RightSmallNav.vue";
export default {
  name: "Upload",
  components: { RightSmallNav },
  data() {
    return {
      file: null,
      loadingStatus: false,
      rowUpload: [
        {
          Parameters: "action",
          Explain: "上传的地址，必填",
          Types: "string",
          Optional: "-",
          Default: "-",
        },

        {
          Parameters: "headers",
          Explain: "上传的请求头",
          Types: "Object",
          Optional: "-",
          Default: "{}",
        },
        {
          Parameters: "multiple",
          Explain: "是否支持多选",
          Types: "boolean",
          Optional: "-",
          Default: "false",
        },
        {
          Parameters: "paste",
          Explain: "是否支持粘贴上传",
          Types: "Boolean",
          Optional: "-",
          Default: "false",
        },
        {
          Parameters: "disabled",
          Explain: "禁用",
          Types: "Boolean",
          Optional: "-",
          Default: "false",
        },
        {
          Parameters: "data",
          Explain: "上传时附带的额外参数",
          Types: "Object",
          Optional: "-",
          Default: "-",
        },
        {
          Parameters: "name",
          Explain: "上传的文件字段名",
          Types: "String",
          Optional: "-",
          Default: "file",
        },
        {
          Parameters: "with-credentials",
          Explain: "支持发送 cookie 凭证信息",
          Types: "Boolean",
          Optional: "-",
          Default: "false",
        },

        {
          Parameters: "show-upload-list",
          Explain: "是否显示已上传文件列表",
          Types: "Boolean",
          Optional: "-",
          Default: "true",
        },
        {
          Parameters: "type",
          Explain: "上传控件的类型",
          Types: "string",
          Optional: "select（选择），drag（支持拖拽）",
          Default: "select",
        },
        {
          Parameters: "accept",
          Explain: "接受上传的文件类型,input 标签原生的 accept 属性，会在选择文件时过滤",
          Types: "string",
          Optional: "-",
          Default: "-",
        },
        {
          Parameters: "format",
          Explain: "支持的文件类型，与 accept 不同的是，format 是识别文件的后缀名",
          Types: "string",
          Optional: "-",
          Default: "-",
        },
        {
          Parameters: "max-size",
          Explain: "文件大小限制，单位 kb",
          Types: "Number",
          Optional: "-",
          Default: "-",
        },

        {
          Parameters: "before-upload",
          Explain: "上传文件之前的钩子，参数为上传的文件,若返回 false 或者 Promise 则停止上传",
          Types: "Function",
          Optional: "-",
          Default: "-",
        },
        {
          Parameters: "on-progress",
          Explain: "文件上传时的钩子，返回字段为 event, file, fileList",
          Types: "Function",
          Optional: "-",
          Default: "-",
        },

        {
          Parameters: "on-success",
          Explain: "文件上传成功时的钩子，返回字段为 response, file, fileList",
          Types: "Function",
          Optional: "-",
          Default: "-",
        },
        {
          Parameters: "on-error",
          Explain: "文件上传失败时的钩子，返回字段为 error, file, fileList",
          Types: "Function",
          Optional: "-",
          Default: "-",
        },
        {
          Parameters: "on-preview",
          Explain: "点击已上传的文件链接时的钩子，返回字段为 file， 可以通过 file.response 拿到服务端返回数据",
          Types: "Function",
          Optional: "-",
          Default: "-",
        },
        {
          Parameters: "on-remove",
          Explain: "文件列表移除文件时的钩子，返回字段为 file, fileList",
          Types: "Function",
          Optional: "-",
          Default: "-",
        },
        {
          Parameters: "on-format-error",
          Explain: "文件格式验证失败时的钩子，返回字段为 file, fileList",
          Types: "Function",
          Optional: "-",
          Default: "-",
        },
        {
          Parameters: "on-exceeded-size",
          Explain: "文件超出指定大小限制时的钩子，返回字段为 file, fileList",
          Types: "Function",
          Optional: "-",
          Default: "-",
        },
        {
          Parameters: "default-file-list",
          Explain: "默认已上传的文件列表，例如：[{name: 'img1.jpg',url: 'http://www.xxx.com/img1.jpg' }, { name: 'img2.jpg', url: 'http://www.xxx.com/img2.jpg' }]",
          Types: "Array",
          Optional: "-",
          Default: "[]",
        },
      ],
      rowUploadMethod: [
        {
          Parameters: "clearFiles",
          Explain: "清空已上传的列表",
          Callback: "-",
        },
      ],
      rowUploadSlot: [
        {
          Parameters: "default",
          Explain: "触发上传组件的控件，默认是一个按钮",
        },
        {
          Parameters: "tip",
          Explain: "辅助的提示消息，如：单个文件不能超过2M",
        },
      ],
      html1: `    <template>
        <div style="width: 400px;">
            <tb-upload action="//jsonplaceholder.typicode.com/posts/">
                <tb-button icon="ios-cloud-upload" plain type="primary"> 点击上传</tb-button>
            </tb-upload>
        </div>
    </template>
              `,
      html2: `    <template>
        <div style="width: 400px;">
            <tb-upload action="//jsonplaceholder.typicode.com/posts/" multiple>
                <tb-button icon="ios-cloud-upload" plain type="primary"> 点击上传</tb-button>
            </tb-upload>
        </div>
    </template>
              `,
      html3: `    <template>
        <div style="width: 400px;">
            <tb-upload action="//jsonplaceholder.typicode.com/posts/" :before-upload="handleUpload">
            </tb-upload>
            <div v-if="file !== null">Upload file: {{ file.name }} 
                <tb-button type="text" @click="upload" :loading="loadingStatus">
                {{ loadingStatus ? 'Uploading' : 'Click to upload' }}
                </tb-button>
            </div>
        </div>
    </template>
    <script>
        export default {
            data () {
                return {
                    file: null,
                    loadingStatus: false
                }
            },
            methods: {
                handleUpload (file) {
                    this.file = file;
                    return false;
                },
                upload () {
                    this.loadingStatus = true;
                    setTimeout(() => {
                        this.file = null;
                        this.loadingStatus = false;
                        this.$message({type:'success',content:'上传成功'})
                    }, 1500);
                }
            }
        }
    <\/script>
              `,
      html4: `    <template>
        <div style="width: 400px;">
            <tb-upload action="//jsonplaceholder.typicode.com/posts/"
                    multiple type="drag">
                <div style="padding: 20px 0;border:1px dashed #eee;cursor: pointer;" 
                flex="dir:top main:center cross:center">
                    <p> <i class="iconfont icon-upload" style="color: #3399ff;font-size:52px"></i> </p>
                    <p>Click or drag files here to upload</p>
                </div>
            </tb-upload>
        </div>
    </template>
              `,

      //   定义当前传递过来的数据是所有类型的数据
      rightTitle: [
        { title: "Upload 上传", id: "upload-shang-chuan" },
        { title: "基础用法", id: "ji-chu-yong-fa" },
        { title: "多选", id: "duo-xuan-shang-chuan" },
        { title: "手动上传", id: "shou-dong-shang-chuan" },
        { title: "拖拽上传", id: "tuo-zhuai-shang-chuan" },
        { title: "Upload props", id: "rowUpload" },
        { title: "Upload methods", id: "rowUploadMethod" },
        { title: "Upload slots", id: "rowUploadSlot" },
      ],
    };
  },
  /**
   * @description: 引入minxns   src/utils/mixins.ts
   * @param {rightTitle}  rightTitle:右侧right浮起框数据
   * @return {*}
   */
  mixins: [useScroll],
  methods: {
    /**
     * @description: 点击右侧区域跳转至对应的html区域
     * @param {id:string} id:id节点地址
     * @return {*}
     */
    goMeowPoint(id) {
      const containern = window.document.querySelector("#" + id);
      containern.scrollIntoView(true);
    },
    handleUpload(file) {
      this.file = file;
      return false;
    },
    upload() {
      this.loadingStatus = true;
      setTimeout(() => {
        this.file = null;
        this.loadingStatus = false;
        this.$message({ type: "success", content: "上传成功" });
      }, 1500);
    },
  },
};
</script>
<style lang="less" scoped>
.tb-link {
  margin: 5px;
}
</style>
