<!--
 * @Author: your name
 * @Date: 2021-07-01 13:38:27
 * @LastEditTime: 2021-07-01 16:51:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/examples/views/ComponentsLibrary/Notices.vue/MessageBox.vue
-->
<template>
  <div>
    <h2
      id="messageBox-tan-kuang"
      style='box-sizing: border-box; margin: 0px; padding: 10px 0px; font-size: 28px; font-weight: 400; color: rgb(31, 47, 61); border-bottom: 1px solid rgb(197, 217, 232); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#messageBox-tan-kuang" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;MessageBox 弹框
    </h2>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      弹窗是为了模拟快速创建模态框准备的，基于Modal框生成的窗口实例。
    </p>
    <h3
      id="mo-ni-alert"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#mo-ni-alert" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp; 模拟alert
    </h3>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      只有确定按钮，可以直接使用 $alert 也可以个设置type或者直接使用快捷方法
    </p>
    <p>
      <br />
    </p>

    <Demo>
      点击 Config 之后再次查看配置项一般默认即可
      <div slot="source">
        <tb-button type="primary" @click="$alert({ type: 'primary', title: '标题', content: '我是弹窗内容', width: 500 })">Primary</tb-button>
        <tb-button type="success" @click="$alert({ type: 'success', title: '标题', content: '我是弹窗内容' })">Success</tb-button>
        <tb-button type="warning" @click="$alert.warning({ title: '标题', content: '我是弹窗内容' })">Warning</tb-button>
        <tb-button type="danger" @click="showAlert">Danger</tb-button>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html1">
        </code>
      </pre>
    </Demo>
    <h3
      id="mo-ni-confirm"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#mo-ni-confirm" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;模拟confirm
    </h3>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      模拟confirm提交选择
    </p>
    <p>
      <br />
    </p>

    <Demo>
      <div slot="source">
        <tb-button type="default" @click="$confirm({ title: '标题', content: '我是弹窗内容' })">标准</tb-button>
        <tb-button type="default" @click="$confirm({ iconName: 'success', title: '标题', content: '我是弹窗内容' })">更换图标</tb-button>
        <tb-button type="default" @click="$confirm({ iconName: 'icon-favorite-filling', iconType: 'danger', title: '标题', content: '我是弹窗内容' })">更换图标颜色</tb-button>
        <tb-button type="default" @click="$confirm({ title: '标题', content: '改变按钮文字', okText: 'OK', okType: 'danger', cancelText: 'Cancel', cancelType: 'info' })">
          改变按钮样式
        </tb-button>
        <tb-button type="default" @click="async">确定2s后关闭</tb-button>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html2">
        </code>
      </pre>
    </Demo>
    <h3
      id="render-han-shu-diao-yong"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#render-han-shu-diao-yong" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;render函数调用
    </h3>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      render函数调用
    </p>
    <p>
      <br />
    </p>

    <Demo>
      <div slot="source">
        <tb-button type="default" size="small" @click="handleRender">render</tb-button>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html3">
        </code>
      </pre>
    </Demo>
    <h3
      id="API"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#API" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;API
    </h3>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      通过直接调用以下方法来使用组件：
    </p>

    <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html4">
        </code>
      </pre>

    <h3
      id="rowMessageBox"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#rowMessageBox" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;MessageBox props
    </h3>
    <p>
      <br />
    </p>
    <tb-table-eazy :rows="rowMessageBox" :cols="col"></tb-table-eazy>
    <RightSmallNav :rightTitle="rightTitle" @goMeowPoint="goMeowPoint" />
  </div>
</template>

<script>
import useScroll from "../../../utils/mixins";
import RightSmallNav from "../../../components/RightSmallNav.vue";
export default {
  name: "Message",
  components: { RightSmallNav },
  data() {
    return {
      rowMessageBox: [
        {
          Parameters: "title",
          Explain: "标题",
          Types: "String /Element String",
          Optional: "-",
          Default: "-",
        },
        {
          Parameters: "content",
          Explain: "内容",
          Types: "String /Element String",
          Optional: "-",
          Default: "-",
        },
        {
          Parameters: "render",
          Explain: "自定义内容，使用后不再限制类型",
          Types: "Function",
          Optional: "-",
          Default: "-",
        },
        {
          Parameters: "width",
          Explain: "宽度，单位 px",
          Types: "Number / String",
          Optional: "-",
          Default: "416",
        },
        {
          Parameters: "okText",
          Explain: "确定按钮的文字",
          Types: "String",
          Optional: "—",
          Default: "确定",
        },
        {
          Parameters: "cancelText",
          Explain: "取消按钮的文字，只在$confirm()下有效",
          Types: "String",
          Optional: "-",
          Default: "取消",
        },
        {
          Parameters: "loading",
          Explain: "显示 loading 状态，需手动调用Modal.remove()来关闭对话框",
          Types: "Boolean",
          Optional: "-",
          Default: "false",
        },

        {
          Parameters: "scrollable",
          Explain: "页面是否可以滚动",
          Types: "Boolean",
          Optional: "-",
          Default: "false",
        },
        {
          Parameters: "onOk",
          Explain: "点击确定的回调",
          Types: "Function",
          Optional: "-",
          Default: "-",
        },
        {
          Parameters: "onCancel",
          Explain: "点击取消的回调，只在Modal.confirm()下有效",
          Types: "Function",
          Optional: "-",
          Default: "—",
        },
      ],
      html1: `    <template>
        <tb-button type="primary" 
        @click="$alert({title: '标题',content: '我是弹窗内容',width:500})">Info</tb-button>
        <tb-button type="success" 
        @click="$alert({type:'success',title: '标题',content: '我是弹窗内容'})">Success</tb-button>
        <tb-button type="warning" 
        @click="$alert.warning({title: '标题',content: '我是弹窗内容'})">Warning</tb-button>
        <tb-button type="danger" @click="showAlert">Danger</tb-button>
    </template>
    <script>
    export default {
        methods:{
        showAlert(){
            this.$alert({type:'danger',title: '标题',content: '我是弹窗内容',
            onOk:()=>{
            this.$message('点击了确定关闭弹窗')
            }})
        }
        }
    }
    <\/script>
            `,
      html2: `    <template>
        <tb-button type="default" 
        @click="$confirm({title: '标题',content: '我是弹窗内容'})">标准</tb-button>
        <tb-button type="default" 
        @click="$confirm({iconName:'success',title: '标题',content: '我是弹窗内容'})">更换图标</tb-button>
        <tb-button type="default" 
        @click="$confirm({iconName:'icon-favorite-filling',iconType:'danger',title: '标题',content: '我是弹窗内容'})">更换图标颜色</tb-button>
        <tb-button type="default" 
        @click="$confirm({title: '标题',content: '改变按钮文字',okText: 'OK',okType: 'danger',cancelText: 'Cancel',cancelType: 'info'})">
        改变按钮样式
        </tb-button>
        <tb-button type="default" 
        @click="async">确定2s后关闭</tb-button>
    </template>
    <script>
    export default {
        methods:{
        async () {
            this.$confirm({
                title: '标题',
                content: '<p>这个弹窗会在点击2秒后关闭</p>',
                loading: true,
                onOk: () => {
                    setTimeout(() => {
                        this.$modal.remove();
                        this.$message('模态框已经关闭');
                    }, 2000);
                }
            });
        }
        }
    }
    <\/script>
              `,
      html3: `    <template>
        <tb-button type="default" size="small" 
        @click="handleRender">render</tb-button>
    </template>
    <script>
        export default {
            methods:{
            handleRender () {
                this.$confirm({
                    render: (h) => {
                        return h('div', {},'我是render函数渲染的')
                    }
                })
            }
            }
        }
    <\/script>
              `,
      html4: `    this.$alert(config)
    this.$alert.success(config)
    this.$alert.warning(config)
    this.$alert.danger(config)
    this.$confirm(config)
              `,

      //   定义当前传递过来的数据是所有类型的数据
      rightTitle: [
        { title: "MessageBox 弹框", id: "messageBox-tan-kuang" },
        { title: "模拟alert", id: "mo-ni-alert" },
        { title: "模拟confirm", id: "mo-ni-confirm" },
        { title: "render函数调用", id: "render-han-shu-diao-yong" },
        { title: "MessageBox props", id: "rowMessageBox" },
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

    showAlert() {
      this.$alert({
        type: "danger",
        title: "标题",
        content: "我是弹窗内容",
        onOk: () => {
          this.$message("点击了确定关闭弹窗");
        },
      });
    },
    async() {
      this.$confirm({
        title: "标题",
        content: "<p>这个弹窗会在点击2秒后关闭</p>",
        loading: true,
        onOk: () => {
          setTimeout(() => {
            this.$modal.remove();
            this.$message("模态框已经关闭");
          }, 2000);
        },
      });
    },
    handleRender() {
      this.$confirm({
        render: (h) => {
          return h("div", {}, "我是render函数渲染的");
        },
      });
    },
  },
};
</script>
<style lang="less" scoped>
.tb-button {
  margin: 5px;
}
</style>
