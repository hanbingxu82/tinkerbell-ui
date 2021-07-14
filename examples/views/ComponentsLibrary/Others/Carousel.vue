<!--
 * @Author: your name
 * @Date: 2021-07-02 17:26:54
 * @LastEditTime: 2021-07-04 12:14:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/examples/views/ComponentsLibrary/Others/Carousel.vue
-->

<template>
  <div>
    <h2
      id="carousel-zou-ma-deng"
      style='box-sizing: border-box; margin: 0px; padding: 10px 0px; font-size: 28px; font-weight: 400; color: rgb(31, 47, 61); border-bottom: 1px solid rgb(197, 217, 232); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#carousel-zou-ma-deng" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;Carousel 走马灯
    </h2>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      在有限空间内，循环播放同一类型的图片、文字等内容
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
      基本的轮播图用法
    </p>
    <p>
      <br />
    </p>
    <Demo>
      <div slot="source">
        <div class="demo">
          <tb-carousel ref="tbCarousel" @change="carouselChange" trigger="click" height="260px" type="card" arrow="never">
            <tb-carousel-item :name="'小仙男' + i" v-for="i in 6" :key="i">
              <h1 class="h1Bg" v-text="i"></h1>
            </tb-carousel-item>
          </tb-carousel>
          <div style="margin:10px 0;">
            <tb-button @click="next">next</tb-button>
            <tb-button @click="prev">prev</tb-button>
            <tb-button @click="setActiveItem">setActiveItem(小仙男6)</tb-button>
          </div>

          <tb-carousel height="300px" arrow="always">
            <tb-carousel-item v-for="i in 6" :key="i">
              <h1 class="h1Bg" v-text="i"></h1>
            </tb-carousel-item>
          </tb-carousel>
        </div>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html1">
        </code>
      </pre>
    </Demo>

    <h3
      id="rowCarousel"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#rowCarousel" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;Carousel props
    </h3>
    <p>
      <br />
    </p>

    <tb-table-eazy :rows="rowCarousel" :cols="col"></tb-table-eazy>
    <h3
      id="rowCarouselEvent"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#rowCarouselEvent" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;Carousel events
    </h3>
    <p>
      <br />
    </p>
    <tb-table-eazy :rows="rowCarouselEvent" :cols="colEvent"></tb-table-eazy>
    <h3
      id="rowCarouselSlot"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#rowCarouselSlot" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;Carousel slots
    </h3>
    <p>
      <br />
    </p>
    <tb-table-eazy :rows="rowCarouselSlot" :cols="colSlot"></tb-table-eazy>
    <h3
      id="rowCarouselItem"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#rowCarouselItem" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;CarouselItem props
    </h3>
    <p>
      <br />
    </p>

    <tb-table-eazy :rows="rowCarouselItem" :cols="col"></tb-table-eazy>
    <RightSmallNav :rightTitle="rightTitle" @goMeowPoint="goMeowPoint" />
  </div>
</template>

<script>
import useScroll from "../../../utils/mixins";
import RightSmallNav from "../../../components/RightSmallNav.vue";
export default {
  name: "Carousel",
  components: { RightSmallNav },
  data() {
    return {
      //   定义当前传递过来的数据是所有类型的数据
      rightTitle: [
        { title: "Carousel 跑马灯", id: "carousel-zou-ma-deng" },
        { title: "基础用法", id: "ji-chu-yong-fa" },
        { title: "Carousel props", id: "rowCarousel" },
        { title: "Carousel events", id: "rowCarouselEvent" },
        { title: "Carousel slots", id: "rowCarouselSlot" },
        { title: "CarouselItem props", id: "rowCarouselItem" },
      ],
      visible: false,
      rowCarousel: [
        {
          Parameters: "height",
          Explain: "走马灯的高度",
          Types: "String",
          Optional: "-",
          Default: "-",
        },

        {
          Parameters: "initial-index",
          Explain: "初始状态激活的幻灯片的索引，从 0 开始",
          Types: "number",
          Optional: "-",
          Default: "0",
        },
        {
          Parameters: "trigger",
          Explain: "指示器的触发方式",
          Types: "string",
          Optional: "click / hover",
          Default: "hover",
        },
        {
          Parameters: "autoplay",
          Explain: "是否自动切换",
          Types: "boolean",
          Optional: "-",
          Default: "true",
        },
        {
          Parameters: "interval",
          Explain: "自动切换的时间间隔，单位为毫秒",
          Types: "number",
          Optional: "-",
          Default: "3000",
        },
        {
          Parameters: "indicator-position",
          Explain: "指示器的位置",
          Types: "string",
          Optional: "outside/none",
          Default: "-",
        },
        {
          Parameters: "arrow",
          Explain: "切换箭头的显示时机",
          Types: "string",
          Optional: "always/hover/never",
          Default: "hover",
        },
        {
          Parameters: "type",
          Explain: "走马灯的类型",
          Types: "string",
          Optional: "card",
          Default: "-",
        },
        {
          Parameters: "loop",
          Explain: "是否循环显示",
          Types: "boolean",
          Optional: "-",
          Default: "true",
        },
      ],
      rowCarouselEvent: [
        {
          Parameters: "change",
          Explain: "幻灯片切换时触发",
          Callback: "目前激活的幻灯片的索引，原幻灯片的索引",
        },
      ],
      rowCarouselSlot: [
        {
          Parameters: "setActiveItem",
          Explain: "手动切换幻灯片(需要切换的幻灯片的索引，从 0 开始；或相应 tb-carousel-item 的 name 属性值)",
        },
        {
          Parameters: "prev",
          Explain: "切换至上一张幻灯片",
        },
        {
          Parameters: "next",
          Explain: "切换至下一张幻灯片",
        },
      ],
      rowCarouselItem: [
        {
          Parameters: "name",
          Explain: "幻灯片的名字，可用作 setActiveItem 的参数",
          Types: "string",
          Optional: "-",
          Default: "-",
        },

        {
          Parameters: "label",
          Explain: "该幻灯片所对应指示器的文本",
          Types: "string",
          Optional: "-",
          Default: "-",
        },
      ],
      html1: `    <div class="demo">
      <tb-carousel ref="tbCarousel" @change="carouselChange" trigger="click" height="260px" type="card" arrow="never">
        <tb-carousel-item :name="'小仙男' + i" v-for="i in 6" :key="i">
          <h1 class="h1Bg" v-text="i"></h1>
        </tb-carousel-item>
      </tb-carousel>
      <div style="margin:10px 0;">
        <tb-button @click="next">next</tb-button>
        <tb-button @click="prev">prev</tb-button>
        <tb-button @click="setActiveItem">setActiveItem(小仙男6)</tb-button>
      </div>
      <tb-carousel height="300px" arrow="always">
        <tb-carousel-item v-for="i in 6" :key="i">
          <h1 class="h1Bg" v-text="i"></h1>
        </tb-carousel-item>
      </tb-carousel>
    </div>
    <script>
      export default {
          methods: {
            setActiveItem(e) {
              this.$refs.tbCarousel.setActiveItem("小仙男6");
            },
            prev(e) {
              this.$refs.tbCarousel.prev();
            },
            next(e) {
              this.$refs.tbCarousel.next();
            },
            carouselChange(data) {
              console.log(data);
            },
          }
      }
    <\/script>
    <style>
      .demo {
        width: 500px;
        margin: 0 auto;
      }
      .h1Bg {
        height: 100%;
        padding: 0;
        margin: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        background: linear-gradient(90deg, rgba(88, 140, 236, 1), rgba(106, 106, 207, 1));
      }
    </style>

              `,
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
    setActiveItem(e) {
      this.$refs.tbCarousel.setActiveItem("小仙男6");
    },
    prev(e) {
      this.$refs.tbCarousel.prev();
    },
    next(e) {
      this.$refs.tbCarousel.next();
    },
    carouselChange(data) {
      console.log(data);
    },
  },
};
</script>
<style lang="less" scoped>
.tb-button-box {
  margin-right: 20px;
}
.demo {
  width: 500px;
  margin: 0 auto;
}
.h1Bg {
  height: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  background: linear-gradient(90deg, rgba(88, 140, 236, 1), rgba(106, 106, 207, 1));
}
</style>
