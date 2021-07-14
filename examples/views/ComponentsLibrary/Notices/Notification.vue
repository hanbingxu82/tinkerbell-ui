<!--
 * @Author: your name
 * @Date: 2021-07-01 13:38:39
 * @LastEditTime: 2021-07-01 17:15:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/examples/views/ComponentsLibrary/Notices.vue/Notification.vue
-->

<template>
  <div>
    <h2
      id="Notification-tong-zhi"
      style='box-sizing: border-box; margin: 0px; padding: 10px 0px; font-size: 28px; font-weight: 400; color: rgb(31, 47, 61); border-bottom: 1px solid rgb(197, 217, 232); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#Notification-tong-zhi" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;Notification 通知
    </h2>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      悬浮出现在页面角落，显示全局的通知提醒消息。
    </p>
    <h3
      id="ji-ben-yong-fa"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#ji-ben-yong-fa" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp; 基本用法
    </h3>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      通知弹窗的基本用法。
    </p>
    <p>
      <br />
    </p>

    <Demo>
      点击 Config 之后再次查看配置项一般默认即可
      <div slot="source">
        <tb-button @click="open(false)">提醒</tb-button>
        <tb-button @click="open(true)">打开提醒(仅标题)</tb-button>
        <tb-button @click="time">自定义时长</tb-button>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html1">
        </code>
      </pre>
    </Demo>
    <h3
      id="dai-tu-biao"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#dai-tu-biao" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;带图标
    </h3>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      带有图标的通知
    </p>
    <p>
      <br />
    </p>

    <Demo>
      <div slot="source">
        <div style="padding: 5px 0;">带描述</div>
        <tb-button @click="primary(false)">primary</tb-button>
        <tb-button @click="success(false)">Success</tb-button>
        <tb-button @click="warning(false)">Warning</tb-button>
        <tb-button @click="danger(false)">danger</tb-button>
        <div style="padding: 5px 0;">仅标题</div>
        <tb-button @click="primary(true)">primary</tb-button>
        <tb-button @click="success(true)">Success</tb-button>
        <tb-button @click="warning(true)">Warning</tb-button>
        <tb-button @click="danger(true)">danger</tb-button>
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
        <tb-button type="small" @click="renderFunc">render函数调用</tb-button>
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
      id="rowNotification"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#rowNotification" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;Notification props
    </h3>
    <p>
      <br />
    </p>
    <tb-table-eazy :rows="rowNotification" :cols="col"></tb-table-eazy>
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
      rowNotification: [
        {
          Parameters: "title",
          Explain: "通知提醒的标题",
          Types: "String",
          Optional: "-",
          Default: "-",
        },
        {
          Parameters: "desc",
          Explain: "通知提醒的内容，为空或不填时，自动应用仅标题模式下的样式",
          Types: "String",
          Optional: "-",
          Default: "-",
        },
        {
          Parameters: "render",
          Explain: "自定义描述内容，使用 Vue 的 Render 函数",
          Types: "Function",
          Optional: "-",
          Default: "-",
        },
        {
          Parameters: "duration",
          Explain: "自动关闭的延时，单位秒，不关闭可以写 0",
          Types: "Number",
          Optional: "-",
          Default: "3",
        },
        {
          Parameters: "onClose",
          Explain: "关闭时的回调",
          Types: "Function",
          Optional: "—",
          Default: "-",
        },
        {
          Parameters: "name",
          Explain: "当前通知的唯一标识",
          Types: "String",
          Optional: "-",
          Default: "-",
        },
      ],
      html1: `    <template>
        <tb-button @click="open(false)">提醒</tb-button>
        <tb-button @click="open(true)">打开提醒(仅标题)</tb-button>
        <tb-button @click="time">自定义时长</tb-button>
    </template>
    <script>
        export default {
            methods: {
            open (nodesc) {
                this.$notify.open({
                    title: 'Notice 标题',
                    desc: nodesc ? '' : '这是通知内容,这是通知内容. 这是通知内容,这是通知内容.'
                });
            },
            time () {
                    this.$notify.open({
                    title: 'Notice 标题',
                    desc: '这是通知内容,这是通知内容. 这是通知内容,这是通知内容.',
                    duration: 0
                    })
                }
            }
        }
    <\/script>
            `,
      html2: `    <template>
    <div>
    <div style="padding: 5px 0;">带描述</div>
        <tb-button @click="primary(false)">primary</tb-button>
        <tb-button @click="success(false)">Success</tb-button>
        <tb-button @click="warning(false)">Warning</tb-button>
        <tb-button @click="danger(false)">danger</tb-button>
    <div style="padding: 5px 0;">仅标题</div>
        <tb-button @click="primary(true)">primary</tb-button>
        <tb-button @click="success(true)">Success</tb-button>
        <tb-button @click="warning(true)">Warning</tb-button>
        <tb-button @click="danger(true)">danger</tb-button>
    </div>
    </template>
    <script>
        export default {
            methods: {
            primary (nodesc) {
                this.$notify.primary({
                    title: 'Notice 标题',
                    desc: nodesc ? '' : '这是通知内容,这是通知内容. 这是通知内容,这是通知内容.'
                });
            },
            success (nodesc) {
                this.$notify.success({
                    title: 'Notice 标题',
                    desc: nodesc ? '' : '这是通知内容,这是通知内容. 这是通知内容,这是通知内容.'
                });
            },
            warning (nodesc) {
                this.$notify.warning({
                    title: 'Notice 标题',
                    desc: nodesc ? '' : '这是通知内容,这是通知内容. 这是通知内容,这是通知内容.'
                });
            },
            danger (nodesc) {
                this.$notify.danger({
                    title: 'Notice 标题',
                    desc: nodesc ? '' : '这是通知内容,这是通知内容. 这是通知内容,这是通知内容.'
                });
            }
            }
        }
    <\/script>
              `,
      html3: `    <template>
        <tb-button type="default"
            @click="renderFunc">render函数调用</tb-button>
    </template>
    <script>
        export default {
            methods: {
            renderFunc () {
                this.$notify.primary({
                    title: '标题',
                    desc: '使用render函数时会忽略desc',
                    render: h => {
                        return h('span', [
                            'This is created by ',
                            h('a', 'render'),
                            ' function'
                        ])
                    }
                });
            }
            }
        }
    <\/script>
              `,
      html4: `    this.$notify.open(config)
    this.$notify.primary(config)
    this.$notify.success(config)
    this.$notify.warning(config)
    this.$notify.error(config)
              `,

      //   定义当前传递过来的数据是所有类型的数据
      rightTitle: [
        { title: "Notification 通知", id: "Notification-tong-zhi" },
        { title: "基本用法", id: "ji-ben-yong-fa" },
        { title: "带图标", id: "dai-tu-biao" },
        { title: "render函数调用", id: "render-han-shu-diao-yong" },
        { title: "Notification props", id: "rowNotification" },
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
    open(nodesc) {
      this.$notify.open({
        title: "Notice 标题",
        desc: nodesc ? "" : "这是通知内容,这是通知内容. 这是通知内容,这是通知内容.",
      });
    },
    time() {
      this.$notify.open({
        title: "Notice 标题",
        desc: "这是通知内容,这是通知内容. 这是通知内容,这是通知内容.",
        duration: 0,
      });
    },
    primary(nodesc) {
      this.$notify.primary({
        title: "Notice 标题",
        desc: nodesc ? "" : "这是通知内容,这是通知内容. 这是通知内容,这是通知内容.",
      });
    },
    success(nodesc) {
      this.$notify.success({
        title: "Notice 标题",
        desc: nodesc ? "" : "这是通知内容,这是通知内容. 这是通知内容,这是通知内容.",
      });
    },
    warning(nodesc) {
      this.$notify.warning({
        title: "Notice 标题",
        desc: nodesc ? "" : "这是通知内容,这是通知内容. 这是通知内容,这是通知内容.",
      });
    },
    danger(nodesc) {
      this.$notify.danger({
        title: "Notice 标题",
        desc: nodesc ? "" : "这是通知内容,这是通知内容. 这是通知内容,这是通知内容.",
      });
    },

    renderFunc() {
      this.$notify.primary({
        title: "标题",
        desc: "使用render函数时会忽略desc",
        render: (h) => {
          return h("span", ["This is created by ", h("a", "render"), " function"]);
        },
      });
    },
  },
};
</script>
<style lang="less" scoped>
/deep/ .tb-button {
  margin: 5px;
}
</style>
