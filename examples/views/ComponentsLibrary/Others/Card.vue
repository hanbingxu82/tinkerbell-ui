<!--
 * @Author: your name
 * @Date: 2021-07-02 17:26:47
 * @LastEditTime: 2021-07-04 10:34:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/examples/views/ComponentsLibrary/Others/Card.vue
-->

<template>
  <div>
    <h2
      id="card-ka-pian"
      style='box-sizing: border-box; margin: 0px; padding: 10px 0px; font-size: 28px; font-weight: 400; color: rgb(31, 47, 61); border-bottom: 1px solid rgb(197, 217, 232); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#card-ka-pian" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;Card 卡片
    </h2>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      将信息聚合在卡片容器中展示。
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
      包含标题，内容和操作。
    </p>
    <p>
      <br />
    </p>
    <Demo>
      Card 组件包括header和body部分，header部分需要有显式具名 slot 分发，同时也是可选的。
      <div slot="source">
        <tb-card class="box-card">
          <div slot="header" class="clearfix">
            <span>卡片名称</span>
            <tb-button style="float: right; padding: 3px 0" type="text">操作按钮</tb-button>
          </div>
          <div v-for="o in 4" :key="o" class="text item">
            {{ "列表内容 " + o }}
          </div>
        </tb-card>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html1">
        </code>
      </pre>
    </Demo>
    <h3
      id="jian-dan-ka-pian"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#jian-dan-ka-pian" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;简单卡片
    </h3>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      卡片可以只有内容区域。
    </p>
    <p>
      <br />
    </p>

    <Demo>
      <div slot="source">
        <tb-card class="box-card">
          <div v-for="o in 4" :key="o" class="text item">
            {{ "列表内容 " + o }}
          </div>
        </tb-card>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html2">
        </code>
      </pre>
    </Demo>
    <h3
      id="dai-tu-pian"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#dai-tu-pian" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;带图片
    </h3>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      可配置定义更丰富的内容展示。
    </p>
    <p>
      <br />
    </p>

    <Demo>
      配置body-style属性来自定义body部分的style，我们还使用了布局组件。
      <div slot="source">
        <tb-row>
          <tb-col :span="8" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0">
            <tb-card :body-style="{ padding: '0px' }">
              <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image" />
              <div style="padding: 14px;">
                <span>好吃的汉堡</span>
                <div class="bottom clearfix">
                  <time class="time">{{ currentDate }}</time>
                  <tb-button type="text" class="button">操作按钮</tb-button>
                </div>
              </div>
            </tb-card>
          </tb-col>
        </tb-row>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html3">
        </code>
      </pre>
    </Demo>
    <h3
      id="ka-pian-yin-ying"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#ka-pian-yin-ying" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;卡片阴影
    </h3>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      可对阴影的显示进行配置。
    </p>
    <p>
      <br />
    </p>

    <Demo>
      通过shadow属性设置卡片阴影出现的时机：always、hover或never。
      <div slot="source">
        <tb-row :gutter="12">
          <tb-col :span="8">
            <tb-card shadow="always">
              总是显示
            </tb-card>
          </tb-col>
          <tb-col :span="8">
            <tb-card shadow="hover">
              鼠标悬浮时显示
            </tb-card>
          </tb-col>
          <tb-col :span="8">
            <tb-card shadow="never">
              从不显示
            </tb-card>
          </tb-col>
        </tb-row>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html4">
        </code>
      </pre>
    </Demo>
    <h3
      id="rowCard"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#rowCard" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;Card props
    </h3>
    <p>
      <br />
    </p>
    <tb-table-eazy :rows="rowCard" :cols="col"></tb-table-eazy>
    <RightSmallNav :rightTitle="rightTitle" @goMeowPoint="goMeowPoint" />
  </div>
</template>

<script>
import useScroll from "../../../utils/mixins";
import RightSmallNav from "../../../components/RightSmallNav.vue";
export default {
  name: "Card",
  components: { RightSmallNav },
  data() {
    return {
      currentDate: new Date(),
      rowCard: [
        {
          Parameters: "header",
          Explain: "设置 header，也可以通过 slot#header 传入 DOM",
          Types: "string",
          Optional: "-",
          Default: "-",
        },

        {
          Parameters: "body-style",
          Explain: "设置 body 的样式",
          Types: "object",
          Optional: "-",
          Default: "{ padding: '20px' }",
        },
        {
          Parameters: "shadow",
          Explain: "设置阴影显示时机",
          Types: "	string",
          Optional: "always / hover / never",
          Default: "always",
        },
      ],
      html1: `    <tb-card class="box-card">
        <div slot="header" class="clearfix">
            <span>卡片名称</span>
            <tb-button style="float: right; padding: 3px 0" type="text">操作按钮</tb-button>
        </div>
        <div v-for="o in 4" :key="o" class="text item">
            {{'列表内容 ' + o }}
        </div>
    </tb-card>

    <style>
        .text {
            font-size: 14px;
        }

        .item {
            margin-bottom: 18px;
        }

        .clearfix:before,
        .clearfix:after {
            display: table;
            content: "";
        }
        .clearfix:after {
            clear: both
        }

        .box-card {
            width: 480px;
        }
    </style>
              `,
      html2: `    <tb-card class="box-card">
        <div v-for="o in 4" :key="o" class="text item">
            {{'列表内容 ' + o }}
        </div>
    </tb-card>

    <style>
        .text {
            font-size: 14px;
        }

        .item {
            padding: 18px 0;
        }

        .box-card {
            width: 480px;
        }
    </style>
              `,
      html3: `    <tb-row>
        <tb-col :span="8" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0">
            <tb-card :body-style="{ padding: '0px' }">
            <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
            <div style="padding: 14px;">
                <span>好吃的汉堡</span>
                <div class="bottom clearfix">
                <time class="time">{{ currentDate }}</time>
                <tb-button type="text" class="button">操作按钮</tb-button>
                </div>
            </div>
            </tb-card>
        </tb-col>
    </tb-row>

    <style>
        .time {
            font-size: 13px;
            color: #999;
        }

        .bottom {
            margin-top: 13px;
            line-height: 12px;
        }

        .button {
            padding: 0;
            float: right;
        }

        .image {
            width: 100%;
            display: block;
        }

        .clearfix:before,
        .clearfix:after {
            display: table;
            content: "";
        }

        .clearfix:after {
            clear: both
        }
    </style>

    <script>
        export default {
        data() {
            return {
            currentDate: new Date()
            };
        }
        }
    <\/script>
              `,
      html4: `    <tb-row :gutter="12">
        <tb-col :span="8">
            <tb-card shadow="always">
            总是显示
            </tb-card>
        </tb-col>
        <tb-col :span="8">
            <tb-card shadow="hover">
            鼠标悬浮时显示
            </tb-card>
        </tb-col>
        <tb-col :span="8">
            <tb-card shadow="never">
            从不显示
            </tb-card>
        </tb-col>
    </tb-row>
              `,

      //   定义当前传递过来的数据是所有类型的数据
      rightTitle: [
        { title: "Card 卡片", id: "card-ka-pian" },
        { title: "基础用法", id: "ji-chu-yong-fa" },
        { title: "简单卡片", id: "jian-dan-ka-pian" },
        { title: "带图片", id: "dai-tu-pian" },
        { title: "卡片阴影", id: "ka-pian-yin-ying" },
        { title: "Card props", id: "rowCard" },
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
  },
};
</script>
<style lang="less" scoped>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 480px;
}
.time {
  font-size: 13px;
  padding:0;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
</style>
