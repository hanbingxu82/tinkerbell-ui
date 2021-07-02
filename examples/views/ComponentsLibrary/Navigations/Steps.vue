<!--
 * @Author: your name
 * @Date: 2021-07-01 22:09:34
 * @LastEditTime: 2021-07-02 13:32:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/examples/views/ComponentsLibrary/Navigations/Steps.vue
-->

<template>
  <div>
    <h2
      id="steps-bu-zhou-tiao"
      style='box-sizing: border-box; margin: 0px; padding: 10px 0px; font-size: 28px; font-weight: 400; color: rgb(31, 47, 61); border-bottom: 1px solid rgb(197, 217, 232); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#steps-bu-zhou-tiao" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;Steps 步骤条
    </h2>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      引导用户按照流程完成任务的分步导航条，可根据实际应用场景设定步骤，步骤不得少于 2 步。
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
      简单的步骤条。
    </p>
    <p>
      <br />
    </p>
    <Demo>
      <div slot="source">
        <tb-steps :current="current">
          <tb-step title="已完成" content="这里是该步骤的描述信息"></tb-step>
          <tb-step title="进行中" content="这里是该步骤的描述信息"></tb-step>
          <tb-step title="待进行" content="这里是该步骤的描述信息"></tb-step>
          <tb-step title="待进行" content="这里是该步骤的描述信息"></tb-step>
        </tb-steps>
        <tb-button type="primary" @click="next">下一步</tb-button>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html1">
        </code>
      </pre>
    </Demo>
    <h3
      id="xiao-xing-bu-zhou-tiao"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#xiao-xing-bu-zhou-tiao" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;小型步骤条
    </h3>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      设置 size="small"开启显示小型步骤条
    </p>
    <p>
      <br />
    </p>

    <Demo>
      <div slot="source">
        <tb-steps :current="2" size="small">
          <tb-step title="已完成"></tb-step>
          <tb-step title="进行中"></tb-step>
          <tb-step title="待进行"></tb-step>
          <tb-step title="待进行"></tb-step>
        </tb-steps>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html2">
        </code>
      </pre>
    </Demo>
    <h3
      id="zi-ding-yi-tu-biao"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#zi-ding-yi-tu-biao" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;自定义图标
    </h3>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      设置 icon自定义设置图标
    </p>
    <p>
      <br />
    </p>

    <Demo>
      <div slot="source">
        <tb-steps :current="1">
          <tb-step title="已完成" icon="icon-dynamic-filling"></tb-step>
          <tb-step title="进行中" icon="icon-favorite-filling"></tb-step>
          <tb-step title="待进行" icon="icon-task-filling"></tb-step>
        </tb-steps>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html3">
        </code>
      </pre>
    </Demo>
    <h3
      id="shu-xing-bu-zhou"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#shu-xing-bu-zhou" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;竖型步骤
    </h3>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      设置direction="vertical"可以开启竖向的步骤
    </p>
    <p>
      <br />
    </p>

    <Demo>
      <div slot="source">
        <tb-steps :current="current" direction="vertical">
          <tb-step title="已完成" content="这里是该步骤的描述信息"></tb-step>
          <tb-step title="进行中" content="这里是该步骤的描述信息"></tb-step>
          <tb-step title="待进行" content="这里是该步骤的描述信息"></tb-step>
          <tb-step title="待进行" content="这里是该步骤的描述信息"></tb-step>
        </tb-steps>
        <tb-button type="primary" @click="next">下一步</tb-button>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html4">
        </code>
      </pre>
    </Demo>
    <h3
      id="she-zhi-zhuang-tai"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#she-zhi-zhuang-tai" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;设置状态
    </h3>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      基本用法，组件会根据current自动判断各步骤状态。
    </p>
    <p>
      <br />
    </p>

    <Demo>
      <div slot="source">
        <tb-steps :current="2" status="error">
          <tb-step title="已完成" content="这里是该步骤的描述信息"></tb-step>
          <tb-step title="进行中" content="这里是该步骤的描述信息"></tb-step>
          <tb-step title="待进行" content="这里是该步骤的描述信息"></tb-step>
          <tb-step title="待进行" content="这里是该步骤的描述信息"></tb-step>
        </tb-steps>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html5">
        </code>
      </pre>
    </Demo>
    <h3
      id="rowSteps"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#rowSteps" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;Steps props
    </h3>
    <p>
      <br />
    </p>
    <tb-table-eazy :rows="rowSteps" :cols="col"></tb-table-eazy>
    <h3
      id="rowStep"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#rowStep" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;Step props
    </h3>
    <p>
      <br />
    </p>
    <tb-table-eazy :rows="rowStep" :cols="col"></tb-table-eazy>
    <h3
      id="rowStepSlot"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#rowStepSlot" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;Step slots
    </h3>
    <p>
      <br />
    </p>
    <tb-table-eazy :rows="rowStepSlot" :cols="colSlot"></tb-table-eazy>
    <RightSmallNav :rightTitle="rightTitle" @goMeowPoint="goMeowPoint" />
  </div>
</template>

<script>
import useScroll from "../../../utils/mixins";
import RightSmallNav from "../../../components/RightSmallNav.vue";
export default {
  name: "Steps",
  components: { RightSmallNav },
  data() {
    return {
      current: 0,
      rowSteps: [
        {
          Parameters: "current",
          Explain: "当前步骤",
          Types: "Number",
          Optional: "-",
          Default: "0",
        },

        {
          Parameters: "status",
          Explain: "当前步骤的状态",
          Types: "String",
          Optional: "wait、process、finish、error、success",
          Default: "process",
        },
        {
          Parameters: "size",
          Explain: "大小",
          Types: "String",
          Optional: "small",
          Default: "-",
        },
        {
          Parameters: "direction",
          Explain: "方向",
          Types: "String",
          Optional: "horizontal（水平）或vertical（垂直）",
          Default: "horizontal",
        },
      ],
      rowStep: [
        {
          Parameters: "title",
          Explain: "标题",
          Types: "String",
          Optional: "-",
          Default: "-",
        },
        {
          Parameters: "status",
          Explain: "当前步骤的状态",
          Types: "String",
          Optional: "wait、process、finish、error、success",
          Default: "process",
        },
        {
          Parameters: "content",
          Explain: "详细内容(可选)",
          Types: "String",
          Optional: "-",
          Default: "-",
        },
        {
          Parameters: "icon",
          Explain: "自定义图标",
          Types: "String",
          Optional: "-",
          Default: "-",
        },
      ],
      rowStepSlot: [
        {
          Parameters: "title",
          Explain: "标题",
        },
        {
          Parameters: "content",
          Explain: "详细内容",
        },
        {
          Parameters: "icon",
          Explain: "自定义图标",
        },
      ],
      html1: `    <template>
        <tb-steps :current="current">
            <tb-step title="已完成" content="这里是该步骤的描述信息"></tb-step>
            <tb-step title="进行中" content="这里是该步骤的描述信息"></tb-step>
            <tb-step title="待进行" content="这里是该步骤的描述信息"></tb-step>
            <tb-step title="待进行" content="这里是该步骤的描述信息"></tb-step>
        </tb-steps>
        <tb-button type="primary" @click="next">下一步</tb-button>
    </template>
    <script>
        export default {
            data () {
                return {
                    current: 0
                }
            },
            methods: {
                next () {
                    if (this.current === 3) {
                        this.current = 0;
                    } else {
                        this.current += 1;
                    }
                }
            }
        }
    <\/script>
              `,
      html2: `    <template>
        <tb-steps :current="2" size="small">
            <tb-step title="已完成"></tb-step>
            <tb-step title="进行中"></tb-step>
            <tb-step title="待进行"></tb-step>
            <tb-step title="待进行"></tb-step>
        </tb-steps>
    </template>
              `,
      html3: `    <template>
        <tb-steps :current="1">
            <tb-step title="已完成" icon="icon-dynamic-filling"></tb-step>
            <tb-step title="进行中" icon="icon-favorite-filling"></tb-step>
            <tb-step title="待进行" icon="icon-task-filling"></tb-step>
        </tb-steps>
    </template>
              `,
      html4: `    <template>
        <tb-steps :current="current" direction="vertical">
            <tb-step title="已完成" content="这里是该步骤的描述信息"></tb-step>
            <tb-step title="进行中" content="这里是该步骤的描述信息"></tb-step>
            <tb-step title="待进行" content="这里是该步骤的描述信息"></tb-step>
            <tb-step title="待进行" content="这里是该步骤的描述信息"></tb-step>
        </tb-steps>
        <tb-button type="primary" @click="next">下一步</tb-button>
    </template>
    <script>
        export default {
            data () {
                return {
                    current: 0
                }
            },
            methods: {
                next () {
                    if (this.current === 3) {
                        this.current = 0;
                    } else {
                        this.current += 1;
                    }
                }
            }
        }
    <\/script>
              `,
      html5: `    <tb-steps :current="2" status="error">
        <tb-step title="已完成" content="这里是该步骤的描述信息"></tb-step>
        <tb-step title="进行中" content="这里是该步骤的描述信息"></tb-step>
        <tb-step title="待进行" content="这里是该步骤的描述信息"></tb-step>
        <tb-step title="待进行" content="这里是该步骤的描述信息"></tb-step>
    </tb-steps>
              `,

      //   定义当前传递过来的数据是所有类型的数据
      rightTitle: [
        { title: "Steps 步骤条", id: "steps-bu-zhou-tiao" },
        { title: "基础用法", id: "ji-chu-yong-fa" },
        { title: "小型步骤条", id: "xiao-xing-bu-zhou-tiao" },
        { title: "自定义图标", id: "zi-ding-yi-tu-biao" },
        { title: "竖行步骤", id: "shu-xing-bu-zhou" },
        { title: "设置状态", id: "she-zhi-zhuang-tai" },
        { title: "Steps props", id: "rowSteps" },
        { title: "Step props", id: "rowStep" },
        { title: "Step slots", id: "rowStepSlot" },
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
    hello() {
      this.$message("hello");
    },
    next() {
      if (this.current === 3) {
        this.current = 0;
      } else {
        this.current += 1;
      }
    },
  },
};
</script>
<style lang="less" scoped>
.tb-alert {
  margin: 10px 0;
}
</style>
