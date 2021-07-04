<!--
 * @Author: your name
 * @Date: 2021-07-02 17:27:01
 * @LastEditTime: 2021-07-04 13:25:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/examples/views/ComponentsLibrary/Others/Calendar.vue
-->

<template>
  <div>
    <h2
      id="calendar-ri-li"
      style='box-sizing: border-box; margin: 0px; padding: 10px 0px; font-size: 28px; font-weight: 400; color: rgb(31, 47, 61); border-bottom: 1px solid rgb(197, 217, 232); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#calendar-ri-li" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;Calendar 日历
    </h2>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      显示日期
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
      日历展示的基本用法
    </p>
    <p>
      <br />
    </p>
    <Demo>
      <div slot="source">
        <tb-calendar :options="calendarArr" class="calendar" @handleClickDay="handleClickDay" @handlePrevMonth="handlePrevMonth" @handleNextMonth="handleNextMonth" />
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html1">
        </code>
      </pre>
    </Demo>

    <h3
      id="rowCalendar"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#rowCalendar" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;Calendar props
    </h3>
    <p>
      <br />
    </p>

    <tb-table-eazy :rows="rowCalendar" :cols="col"></tb-table-eazy>
    <h3
      id="rowCalendarEvent"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#rowCalendarEvent" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;Calendar events
    </h3>
    <p>
      <br />
    </p>
    <tb-table-eazy :rows="rowCalendarEvent" :cols="colEvent"></tb-table-eazy>
    <RightSmallNav :rightTitle="rightTitle" @goMeowPoint="goMeowPoint" />
  </div>
</template>

<script>
import useScroll from "../../../utils/mixins";
import RightSmallNav from "../../../components/RightSmallNav.vue";
export default {
  name: "Calendar",
  components: { RightSmallNav },
  data() {
    return {
      // 日历options特定  样式
      calendarArr: {
        type: "combination", // 是否为特定的组合方式  header头默认设置样式
        // 如果不是特定的组合方式   那么下方的todayBtn、checkBtn样式就会起作用 两者最好不要一起使用
        headStyle: {
          todayBtn: "left",
          combination: "center",
          checkBtn: "left",
        },
        // 文本对齐位置
        viewStyle: {
          // 视图day天数  文本对齐位置
          day: "right",
        },
      },
      //   定义当前传递过来的数据是所有类型的数据
      rightTitle: [
        { title: "Calendar 日历", id: "calendar-ri-li" },
        { title: "基础用法", id: "ji-chu-yong-fa" },
        { title: "Calendar props", id: "rowCalendar" },
        { title: "Calendar events", id: "rowCalendarEvent" },
      ],
      visible: false,
      rowCalendar: [
        {
          Parameters: "options",
          Explain: "日历options特定  样式配置",
          Types: "Object",
          Optional: "-",
          Default: "-",
        },
      ],
      rowCalendarEvent: [
        {
          Parameters: "handleClickDay",
          Explain: "点击某一天触发的事件",
          Callback: "(day)",
        },
        {
          Parameters: "handlePrevMonth",
          Explain: "上一个月  time 是当前年月日  日期默认为1号",
          Callback: "(time)",
        },
        {
          Parameters: "handleNextMonth",
          Explain: "下一个月  time 是当前年月日  日期默认为1号",
          Callback: "(time)",
        },
      ],

      html1: `    <tb-calendar :options="calendarArr" class="calendar" @handleClickDay="handleClickDay" @handlePrevMonth="handlePrevMonth" @handleNextMonth="handleNextMonth" />
    <script>
      export default {
          data(){
            return{
                // 日历options特定  样式
                calendarArr: {
                    type: "combination", // 是否为特定的组合方式  header头默认设置样式
                    // 如果不是特定的组合方式   那么下方的todayBtn、checkBtn样式就会起作用 两者最好不要一起使用
                    headStyle: {
                    todayBtn: "left",
                    combination: "center",
                    checkBtn: "left",
                    },
                    // 文本对齐位置
                    viewStyle: {
                    // 视图day天数  文本对齐位置
                    day: "right",
                    },
                },
            }
          },
          methods: {
            // 点击某一天触发的事件
            handleClickDay(day) {
            console.log(day);
            },
            // 上一个月  time 是当前年月日  日期默认为1号
            handlePrevMonth(time) {
            console.log(time);
            },
            // 下一个月  time 是当前年月日  日期默认为1号
            handleNextMonth(time) {
            console.log(time);
            },
          }
      }
    <\/script>
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
    // 点击某一天触发的事件
    handleClickDay(day) {
      console.log(day);
    },
    // 上一个月  time 是当前年月日  日期默认为1号
    handlePrevMonth(time) {
      console.log(time);
    },
    // 下一个月  time 是当前年月日  日期默认为1号
    handleNextMonth(time) {
      console.log(time);
    },
  },
};
</script>
<style lang="less" scoped>
.tb-button {
  margin-right: 20px;
}
.top,
.center,
.bottom {
  text-align: center;
  overflow: hidden;
}
.center-left {
  float: left;
}
.center-right {
  float: right;
}
[flex] {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}
</style>
