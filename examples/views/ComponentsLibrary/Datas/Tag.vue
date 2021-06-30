<!--
 * @Author: your name
 * @Date: 2021-06-30 13:37:07
 * @LastEditTime: 2021-06-30 15:53:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/examples/views/ComponentsLibrary/Datas/Tag.vue
-->

<template>
  <div>
    <h2
      id="tag-biao-qian"
      style='box-sizing: border-box; margin: 0px; padding: 10px 0px; font-size: 28px; font-weight: 400; color: rgb(31, 47, 61); border-bottom: 1px solid rgb(197, 217, 232); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#tag-biao-qian" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;Tag 标签
    </h2>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      用于标记和选择。
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
      基础的标签用法。
    </p>
    <p>
      <br />
    </p>
    <Demo>
      由type属性来选择tag的类型，也可以通过color属性来自定义背景色。
      <div slot="source">
        <tb-tag>标签一</tb-tag>
        <tb-tag type="success">标签二</tb-tag>
        <tb-tag type="info">标签三</tb-tag>
        <tb-tag type="warning">标签四</tb-tag>
        <tb-tag type="danger">标签五</tb-tag>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html1">
        </code>
      </pre>
    </Demo>
    <h3
      id="ke-yi-chu-biao-qian"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#ke-yi-chu-biao-qian" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;可移除标签
    </h3>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      呈现删除标记的标签
    </p>
    <p>
      <br />
    </p>

    <Demo>
      设置closable属性可以定义一个标签是否可移除。
      <div slot="source">
        <tb-tag v-for="tag in tags" :key="tag.name" closable :type="tag.type">
          {{ tag.name }}
        </tb-tag>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html2">
        </code>
      </pre>
    </Demo>
    <h3
      id="dong-tai-bian-ji"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#dong-tai-bian-ji" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;动态编辑标签
    </h3>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      动态编辑标签可以通过点击标签关闭按钮后触发的 close 事件来实现
    </p>
    <p>
      <br />
    </p>

    <Demo>
      <div slot="source">
        <div flex="box:mean">
          <tb-tag :key="tag" v-for="tag in dynamicTags" closable :disable-transitions="false" @close="handleClose(tag)">
            {{ tag }}
          </tb-tag>
          <tb-input class="input-new-tag" v-if="inputVisible" v-model="inputValue" ref="saveTagInput" size="small" @keyup.enter.native="handleInputConfirm" @blur="handleInputConfirm"> </tb-input>
          <tb-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</tb-button>
        </div>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html3">
        </code>
      </pre>
    </Demo>
    <h3
      id="bu-tong-chi-cun"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#bu-tong-chi-cun" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;不同尺寸
    </h3>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      Tag 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸
    </p>
    <p>
      <br />
    </p>

    <Demo>
      额外的尺寸：medium、small、mini，通过设置size属性来配置它们。
      <div slot="source">
        <tb-tag size="medium" closable>中等标签</tb-tag>
        <tb-tag size="small" closable>小型标签</tb-tag>
        <tb-tag size="mini" closable>超小标签</tb-tag>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html4">
        </code>
      </pre>
    </Demo>
    <h3
      id="bu-tong-zhu-ti"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#bu-tong-zhu-ti" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;不同主题
    </h3>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      Tag 组件提供了三个不同的主题：dark、light 和 plain
    </p>
    <p>
      <br />
    </p>

    <Demo>
      通过设置effect属性来改变主题，默认为 light
      <div slot="source">
        <div flex="box:mean" class="tag-group">
          <span class="tag-group__title">Dark</span>
          <tb-tag v-for="item in items" :key="item.label" :type="item.type" effect="dark">
            {{ item.label }}
          </tb-tag>
        </div>
        <div class="tag-group">
          <span class="tag-group__title">Plain</span>
          <tb-tag v-for="item in items" :key="item.label" :type="item.type" effect="plain">
            {{ item.label }}
          </tb-tag>
        </div>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html5">
        </code>
      </pre>
    </Demo>
    <h3
      id="rowTag"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#rowTag" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;Tag props
    </h3>
    <p>
      <br />
    </p>
    <tb-table-eazy :rows="rowTag" :cols="col"></tb-table-eazy>
    <h3
      id="rowTagEvent"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#rowTagEvent" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;Tag events
    </h3>
    <p>
      <br />
    </p>
    <tb-table-eazy :rows="rowTagEvent" :cols="colEvent"></tb-table-eazy>
    <RightSmallNav :rightTitle="rightTitle" @goMeowPoint="goMeowPoint" />
  </div>
</template>

<script>
import useScroll from "../../../utils/mixins";
import RightSmallNav from "../../../components/RightSmallNav.vue";
export default {
  name: "Tag",
  components: { RightSmallNav },
  data() {
    return {
      items: [
        { type: "primary", label: "标签一" },
        { type: "success", label: "标签二" },
        { type: "info", label: "标签三" },
        { type: "danger", label: "标签四" },
        { type: "warning", label: "标签五" },
      ],
      tags: [
        { name: "标签一", type: "primary" },
        { name: "标签二", type: "success" },
        { name: "标签三", type: "info" },
        { name: "标签四", type: "warning" },
        { name: "标签五", type: "danger" },
      ],
      dynamicTags: ["标签一", "标签二", "标签三"],
      inputVisible: false,
      inputValue: "",
      rowTag: [
        {
          Parameters: "type",
          Explain: "类型",
          Types: "string",
          Optional: "primary / success / warning / danger / info",
          Default: "-",
        },

        {
          Parameters: "closable",
          Explain: "是否可关闭",
          Types: "boolean",
          Optional: "-",
          Default: "false",
        },
        {
          Parameters: "color",
          Explain: "背景色",
          Types: "string",
          Optional: "-",
          Default: "-",
        },
        {
          Parameters: "size",
          Explain: "尺寸",
          Types: "string",
          Optional: "medium / small / mini",
          Default: "-",
        },
        {
          Parameters: "effect",
          Explain: "主题",
          Types: "string",
          Optional: "dark / light / plain",
          Default: "light",
        },
      ],
      rowTagEvent: [
        {
          Parameters: "click",
          Explain: "点击 Tag 时触发的事件",
          Callback: "-",
        },
        {
          Parameters: "close",
          Explain: "关闭 Tag 时触发的事件",
          Callback: "-",
        },
      ],
      html1: `          <tb-tag>标签一</tb-tag>
        <tb-tag type="success">标签二</tb-tag>
        <tb-tag type="info">标签三</tb-tag>
        <tb-tag type="warning">标签四</tb-tag>
        <tb-tag type="danger">标签五</tb-tag>
              `,
      html2: `    <tb-tag
    v-for="tag in tags"
    :key="tag.name"
    closable
    :type="tag.type">
    {{tag.name}}
    </tb-tag>

    <script>
        export default {
            data() {
            return {
                tags: [
                { name: '标签一', type: 'primary' },
                { name: '标签二', type: 'success' },
                { name: '标签三', type: 'info' },
                { name: '标签四', type: 'warning' },
                { name: '标签五', type: 'danger' }
                ]
            };
            }
        }
    <\/script>
              `,
      html3: `    <tb-tag
    :key="tag"
    v-for="tag in dynamicTags"
    closable
    :disable-transitions="false"
    @close="handleClose(tag)">
    {{tag}}
    </tb-tag>
    <tb-input
    class="input-new-tag"
    v-if="inputVisible"
    v-model="inputValue"
    ref="saveTagInput"
    size="small"
    @keyup.enter.native="handleInputConfirm"
    @blur="handleInputConfirm"
    >
    </tb-input>
    <tb-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</tb-button>
    
    <script>
        export default {
            data() {
            return {
                dynamicTags: ['标签一', '标签二', '标签三'],
                inputVisible: false,
                inputValue: ''
            };
            },
            methods: {
            handleClose(tag) {
                this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
            },

            showInput() {
                this.inputVisible = true;
                this.$nextTick(_ => {
                this.$refs.saveTagInput.$refs.input.focus();
                });
            },

            handleInputConfirm() {
                let inputValue = this.inputValue;
                if (inputValue) {
                this.dynamicTags.push(inputValue);
                }
                this.inputVisible = false;
                this.inputValue = '';
            }
            }
        }
    <\/script>
    
    <style>
    .tb-tag + .tb-tag {
        margin-left: 10px;
    }
    .button-new-tag {
        margin-left: 10px;
        padding-top: 0;
        padding-bottom: 0;
    }
    .input-new-tag {
        width: 90px;
        margin-left: 10px;
        vertical-align: bottom;
    }
    </style>
              `,
      html4: `    <tb-tag size="medium" closable>中等标签</tb-tag>
    <tb-tag size="small" closable>小型标签</tb-tag>
    <tb-tag size="mini" closable>超小标签</tb-tag>
              `,
      html5: `    <div class="tag-group">
        <span class="tag-group__title">Dark</span>
        <tb-tag
            v-for="item in items"
            :key="item.label"
            :type="item.type"
            effect="dark">
            {{ item.label }}
        </tb-tag>
    </div>
    <div class="tag-group">
        <span class="tag-group__title">Plain</span>
        <tb-tag
            v-for="item in items"
            :key="item.label"
            :type="item.type"
            effect="plain">
            {{ item.label }}
        </tb-tag>
    </div>

    <script>
        export default {
            data() {
            return {
                items: [
                { type: 'primary', label: '标签一' },
                { type: 'success', label: '标签二' },
                { type: 'info', label: '标签三' },
                { type: 'danger', label: '标签四' },
                { type: 'warning', label: '标签五' }
                ]
            }
            }
        }
    <\/script>
              `,

      //   定义当前传递过来的数据是所有类型的数据
      rightTitle: [
        { title: "Tag 标签", id: "tag-biao-qian" },
        { title: "基础用法", id: "ji-chu-yong-fa" },
        { title: "可移除标签", id: "ke-yi-chu-biao-qian" },
        { title: "动态编辑标签", id: "dong-tai-bian-ji" },
        { title: "不同尺寸", id: "bu-tong-chi-cun" },
        { title: "不同主题", id: "bu-tong-zhu-ti" },
        { title: "Tag props", id: "rowTag" },
        { title: "Tag events", id: "rowTagEvent" },
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
    handleClose(tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
    },

    showInput() {
      this.inputVisible = true;
      this.$nextTick((_) => {
        this.$refs.saveTagInput.$refs.input.focus();
      });
    },

    handleInputConfirm() {
      let inputValue = this.inputValue;
      if (inputValue) {
        this.dynamicTags.push(inputValue);
      }
      this.inputVisible = false;
      this.inputValue = "";
    },
  },
};
</script>
<style lang="less" scoped>
.tb-link {
  margin: 5px;
}
.tb-tag + .tb-tag {
  margin-left: 10px;
}
.button-new-tag {
  margin-left: 10px;
  padding-top: 0;
  padding-bottom: 0;
}
.input-new-tag {
  width: 90px;
  margin-left: 10px;
  vertical-align: bottom;
}
[flex] {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  align-items: center;
  margin: 10px 0;
  flex-wrap: wrap;
}
</style>
