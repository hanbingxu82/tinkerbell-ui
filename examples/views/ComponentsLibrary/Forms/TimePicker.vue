<!--
 * @Author: your name
 * @Date: 2021-06-29 15:35:07
 * @LastEditTime: 2021-06-29 16:30:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/examples/views/ComponentsLibrary/Forms/TimePicker.vue
-->

<template>
  <div>
    <h2
      id="timepicker-shu-ru-kuang"
      style='box-sizing: border-box; margin: 0px; padding: 10px 0px; font-size: 28px; font-weight: 400; color: rgb(31, 47, 61); border-bottom: 1px solid rgb(197, 217, 232); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#timepicker-shu-ru-kuang" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;TimePicker 时间选择器
    </h2>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      用于选择或输入时间
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
      设置属性 type 为 time 或 timerange 分别显示选择单个时间和选择范围时间类型。
    </p>
    <p>
      <br />
    </p>
    <Demo>
      <div slot="source">
        <div flex="box:mean" style="width: 500px;">
          <div style="padding:0 10px;">
            <tb-time-picker type="time" placeholder="Select time"></tb-time-picker>
          </div>
          <div style="padding:0 10px;">
            <tb-time-picker type="timerange" placement="bottom-start" placeholder="Select time"></tb-time-picker>
          </div>
        </div>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html1">
        </code>
      </pre>
    </Demo>
    <h3
      id="shi-jian-ge-shi"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#shi-jian-ge-shi" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;时间格式
    </h3>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      设置属性 format 可以改变时间的显示格式
    </p>

    <p>
      <br />
    </p>
    <Demo>
      注意， format 只是改变显示的格式，并非改变 value 值。
      <div slot="source">
        <div flex="box:mean" style="width: 500px;">
          <div style="padding:0 10px;">
            <tb-time-picker type="time" value="09:41:00" format="HH点mm分ss秒" placeholder="Select time"></tb-time-picker>
          </div>
          <div style="padding:0 10px;">
            <tb-time-picker type="timerange" :value="['09:41:00', '12:00:00']" format="HH’mm’ss" placement="bottom-start" placeholder="Select time"></tb-time-picker>
          </div>
        </div>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html2">
        </code>
      </pre>
    </Demo>
    <h3
      id="xuan-ze-shi-fen"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#xuan-ze-shi-fen" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;选择时分
    </h3>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      组件浮层中的列会随着 format 变化，当略去 format 中的秒时，浮层中对应的列也会消失。
    </p>

    <p>
      <br />
    </p>
    <Demo>
      <div slot="source">
        <div flex="box:mean" style="width: 500px;">
          <div style="padding:0 10px;">
            <tb-time-picker type="time" format="HH:mm" placeholder="Select time"></tb-time-picker>
          </div>
          <div style="padding:0 10px;">
            <tb-time-picker type="timerange" format="HH:mm" placement="bottom-start" placeholder="Select time"></tb-time-picker>
          </div>
        </div>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html3">
        </code>
      </pre>
    </Demo>
    <h3
      id="shi-jian-jian-ge"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#shi-jian-jian-ge" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;时间间隔
    </h3>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      通过属性 steps 可以设置时间间隔。数组的三项分别对应小时、分钟、秒。
    </p>
    <p>
      <br />
    </p>

    <Demo>
      <div slot="source">
        <div style="padding:0 10px; width: 168px;">
          <tb-time-picker type="time" :steps="[1, 15, 15]" placeholder="Select time"></tb-time-picker>
        </div>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html4">
        </code>
      </pre>
    </Demo>
    <h3
      id="bu-ke-xuan-shi-jian"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#bu-ke-xuan-shi-jian" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;不可选时间
    </h3>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      可以使用 disabled-hours disabled-minutes disabled-seconds 组合禁止用户选择某个时间。
    </p>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      使用 hide-disabled-options 可以直接把不可选择的项隐藏。
    </p>
    <p>
      <br />
    </p>

    <Demo>
      <div slot="source">
        <div flex="box:mean" style="width: 500px;">
          <div style="padding:0 10px;">
            <tb-time-picker type="time" :disabled-hours="[1, 5, 10]" :disabled-minutes="[0, 10, 20]" placeholder="Select time"></tb-time-picker>
          </div>
          <div style="padding:0 10px;">
            <tb-time-picker type="timerange" hide-disabled-options :disabled-hours="[1, 5, 10]" :disabled-minutes="[0, 10, 20]" placement="bottom-start" placeholder="Select time"></tb-time-picker>
          </div>
        </div>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html5">
        </code>
      </pre>
    </Demo>
    <h3
      id="que-ren-cao-zuo"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#que-ren-cao-zuo" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;带有确认操作
    </h3>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      类似日期选择，可以带有确认操作confirm
    </p>
    <p>
      <br />
    </p>

    <Demo>
      <div slot="source">
        <div flex="box:mean" style="width: 500px;">
          <div style="padding:0 10px;">
            <tb-time-picker type="time" confirm placeholder="Select time"></tb-time-picker>
          </div>
          <div style="padding:0 10px;">
            <tb-time-picker type="timerange" confirm placement="bottom-start" placeholder="Select time"></tb-time-picker>
          </div>
        </div>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html6">
        </code>
      </pre>
    </Demo>
    <h3
      id="shou-dong-kong-zhi"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#shou-dong-kong-zhi" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;手动控制组件
    </h3>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      类似日期选择，可以定制化组件选择
    </p>

    <p>
      <br />
    </p>

    <Demo>
      format 只是改变显示的格式，并非改变 value 值。
      <div slot="source">
        <tb-time-picker :open="open" :value="value3" confirm @change="handleChange" @clear="handleClear" @ok="handleOk">
          <a href="javascript:void(0)" @click="handleClick">
            <template v-if="value3 === ''">Select time</template>
            <template v-else>{{ value3 }}</template>
          </a>
        </tb-time-picker>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html7">
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
      设置属性 size 可以调整输入选择框的尺寸，参考input尺寸
    </p>

    <p>
      <br />
    </p>

    <Demo>
      <div slot="source">
        <div flex="box:mean">
          <div style="padding:0 10px;">
            <tb-time-picker size="mini" placeholder="mini date"></tb-time-picker>
          </div>
          <div style="padding:0 10px;">
            <tb-time-picker size="small" placeholder="small date"></tb-time-picker>
          </div>

          <div style="padding:0 10px;">
            <tb-time-picker size="medium" placeholder="medium date"></tb-time-picker>
          </div>
        </div>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html8">
        </code>
      </pre>
    </Demo>

    <h3
      id="rowTimePicker"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#rowTimePicker" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;TimePicker props
    </h3>
    <p>
      <br />
    </p>

    <tb-table-eazy :rows="rowTimePicker" :cols="col"></tb-table-eazy>
    <h3
      id="rowTimePickerEvent"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#rowTimePickerEvent" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;TimePicker events
    </h3>
    <p>
      <br />
    </p>
    <tb-table-eazy :rows="rowTimePickerEvent" :cols="colEvent"></tb-table-eazy>
    <h3
      id="rowTimePickerSlot"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#rowTimePickerSlot" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;TimePicker slots
    </h3>
    <p>
      <br />
    </p>
    <tb-table-eazy :rows="rowTimePickerSlot" :cols="colSlot"></tb-table-eazy>

    <RightSmallNav :rightTitle="rightTitle" @goMeowPoint="goMeowPoint" />
  </div>
</template>

<script>
import useScroll from "../../../utils/mixins";
import RightSmallNav from "../../../components/RightSmallNav.vue";
export default {
  name: "TimePicker",
  components: { RightSmallNav },
  data() {
    return {
      //   定义当前传递过来的数据是所有类型的数据
      rightTitle: [
        { title: "TimePicker 日期选择器", id: "timepicker-shu-ru-kuang" },
        { title: "基础用法", id: "ji-chu-yong-fa" },
        { title: "时间格式", id: "shi-jian-ge-shi" },
        { title: "选择时分", id: "xuan-ze-shi-fen" },
        { title: "时间间隔", id: "shi-jian-jian-ge" },
        { title: "不可选时间", id: "bu-ke-xuan-shi-jian" },
        { title: "带有确认操作", id: "que-ren-cao-zuo" },
        { title: "手动控制组件", id: "shou-dong-kong-zhi" },
        { title: "不同尺寸", id: "bu-tong-chi-cun" },
        { title: "TimePicker props", id: "rowTimePicker" },
        { title: "TimePicker events", id: "rowTimePickerEvent" },
        { title: "TimePicker slots", id: "rowTimePickerSlot" },
      ],
      options1: {
        shortcuts: [
          {
            text: "今天",
            value() {
              return new Date();
            },
            onClick: (picker) => {
              this.$message("Click today");
            },
          },
          {
            text: "昨天",
            value() {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              return date;
            },
            onClick: (picker) => {
              this.$message("Click yesterday");
            },
          },
          {
            text: "一周",
            value() {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              return date;
            },
            onClick: (picker) => {
              this.$message("Click a week ago");
            },
          },
        ],
      },
      options2: {
        shortcuts: [
          {
            text: "近一周",
            value() {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              return [start, end];
            },
          },
          {
            text: "最近一个月",
            value() {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              return [start, end];
            },
          },
          {
            text: "最近三个月",
            value() {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              return [start, end];
            },
          },
        ],
      },
      options3: {
        disabledDate(date) {
          return date && date.valueOf() < Date.now() - 86400000;
        },
      },
      options4: {
        disabledDate(date) {
          const disabledDay = date.getDate();
          return disabledDay === 15;
        },
      },
      open: false,
      value3: "",

      rowTimePicker: [
        {
          Parameters: "type",
          Explain: "显示类型",
          Types: "string",
          Optional: "time、timerange",
          Default: "time",
        },

        {
          Parameters: "value",
          Explain: "日期",
          Types: "Date",
          Optional: "JavaScript 的 Date，也可以是标准的日期格式,注意：value 使用 v-model 时，值是 Date 类型，可以配合 @change 使用",
          Default: "-",
        },
        {
          Parameters: "format",
          Explain: "日期的格式化",
          Types: "Date",
          Optional: "-",
          Default: "HH:mm:ss",
        },
        {
          Parameters: "steps",
          Explain: "下拉列表的时间间隔，数组的三项分别对应小时、分钟、秒。例如设置为 [1, 15] 时，分钟会显示：00、15、30、45。",
          Types: "Array",
          Optional: "—",
          Default: "[]",
        },
        {
          Parameters: "placement",
          Explain: "日期选择器出现的位置",
          Types: "string",
          Optional: "top,top-start,top-end,bottom,bottom-start,bottom-end,left,left-start,left-end,right,right-start,right-end",
          Default: "bottom-start",
        },
        {
          Parameters: "placeholder",
          Explain: "提示文本",
          Types: "string",
          Optional: "-",
          Default: "-",
        },
        {
          Parameters: "confirm",
          Explain: "显示底部控制栏，开启后，选择完日期，需确认后关闭。",
          Types: "Boolean",
          Optional: "—",
          Default: "false",
        },
        {
          Parameters: "open",
          Explain: "手动控制日期选择器的显示状态，true 为显示，false 为收起。使用该属性后，选择器不会主动关闭。建议配合 slot 及 confirm 和相关事件一起使用。",
          Types: "Boolean",
          Optional: "—",
          Default: "-",
        },
        {
          Parameters: "size",
          Explain: "尺寸",
          Types: "string",
          Optional: "medium、small、mini",
          Default: "small",
        },
        {
          Parameters: "disabled",
          Explain: "是否禁用",
          Types: "Boolean",
          Optional: "-",
          Default: "false",
        },

        {
          Parameters: "clearable",
          Explain: "是否显示清除按钮",
          Types: "Boolean",
          Optional: "-",
          Default: "true",
        },
        {
          Parameters: "readonly",
          Explain: "完全只读，开启后不会弹出选择器,只在没有设置 open 属性下生效",
          Types: "Boolean",
          Optional: "-",
          Default: "false",
        },
        {
          Parameters: "editable",
          Explain: "文本框是否可以输入，只在没有使用 slot 时有效",
          Types: "Boolean",
          Optional: "—",
          Default: "true",
        },
        {
          Parameters: "appendToBody",
          Explain: "是否将弹层放置于 body 内",
          Types: "Boolean",
          Optional: "-",
          Default: "false",
        },
        {
          Parameters: "element-id",
          Explain: "给表单元素设置 id，详见 Form 用法。",
          Types: "String",
          Optional: "-",
          Default: "-",
        },
        {
          Parameters: "separator",
          Explain: "两个时间间的分隔符",
          Types: "String",
          Optional: "-",
          Default: "-",
        },
      ],
      rowTimePickerEvent: [
        {
          Parameters: "change",
          Explain: "时间发生变化时触发",
          Callback: "已经格式化后的时间，比如 09:41:00",
        },
        {
          Parameters: "open-change",
          Explain: "弹出浮层和关闭浮层时触发",
          Callback: "true / false",
        },
        {
          Parameters: "ok",
          Explain: "在 confirm 模式下有效，点击确定按钮时触发",
          Callback: "-",
        },
        {
          Parameters: "clear",
          Explain: "清空日期时触发",
          Callback: "-",
        },
      ],
      rowTimePickerSlot: [
        {
          Parameters: "default",
          Explain: "自定义选择器的显示内容，建议与 open 等参数一起使用，详见示例",
        },
      ],

      html1: `    <template>
        <div flex="box:mean" style="width: 500px;">
            <div style="padding:0 10px;">
                <tb-time-picker type="time" placeholder="Select time"></tb-time-picker>
            </div>
            <div style="padding:0 10px;">
                <tb-time-picker type="timerange" placement="bottom-start" placeholder="Select time"></tb-time-picker>
            </div>
        </div>
    </template>
            `,
      html2: `    <template>
        <div flex="box:mean" style="width: 500px;">
            <div style="padding:0 10px;">
                <tb-time-picker type="time" value="09:41:00" format="HH点mm分ss秒" placeholder="Select time"></tb-time-picker>
            </div>
            <div style="padding:0 10px;">
                <tb-time-picker type="timerange" :value="['09:41:00', '12:00:00']" format="HH’mm’ss" placement="bottom-start" placeholder="Select time"></tb-time-picker>
            </div>
        </div>
    </template>
              `,
      html3: `    <template>
        <div flex="box:mean" style="width: 500px;">
            <div style="padding:0 10px;">
                <tb-time-picker type="time" format="HH:mm" placeholder="Select time"></tb-time-picker>
            </div>
            <div style="padding:0 10px;">
                <tb-time-picker type="timerange" format="HH:mm" placement="bottom-start" placeholder="Select time"></tb-time-picker>
            </div>
        </div>
    </template>
              `,
      html4: `    <template>
        <div style="padding:0 10px; width: 168px;">
            <tb-time-picker type="time" :steps="[1, 15, 15]" placeholder="Select time"></tb-time-picker>
        </div>
    </template>
              `,
      html5: `    <template>
        <div flex="box:mean" style="width: 500px;">
            <div style="padding:0 10px;">
                <tb-time-picker type="time" :disabled-hours="[1,5,10]" :disabled-minutes="[0,10,20]" placeholder="Select time"></tb-time-picker>
            </div>
            <div style="padding:0 10px;">
                <tb-time-picker type="timerange"
                            hide-disabled-options
                            :disabled-hours="[1,5,10]"
                            :disabled-minutes="[0,10,20]"
                            placement="bottom-start" placeholder="Select time"></tb-time-picker>
            </div>
        </div>
    </template>
              `,
      html6: `    <template>
        <div flex="box:mean" style="width: 500px;">
            <div style="padding:0 10px;">
                <tb-time-picker type="time" confirm  placeholder="Select time"></tb-time-picker>
            </div>
            <div style="padding:0 10px;">
                <tb-time-picker type="timerange" confirm  placement="bottom-start" placeholder="Select time"></tb-time-picker>
            </div>
        </div>
    </template>
              `,
      html7: `    <template>
        <tb-time-picker
                :open="open"
                :value="value3"
                confirm
                @change="handleChange"
                @clear="handleClear"
                @ok="handleOk">
                <a href="javascript:void(0)" @click="handleClick">
                    <template v-if="value3 === ''">Select time</template>
                    <template v-else>{{ value3 }}</template>
                </a>
            </tb-time-picker>
    </template>
    <script>
        export default {
            data () {
                return {
                    open: false,
                    value3: ''
                }
            },
            methods: {
                handleClick () {
                    this.open = !this.open;
                },
                handleChange (time) {
                    this.value3 = time;
                },
                handleClear () {
                    this.open = false;
                },
                handleOk () {
                    this.open = false;
                }
            }
        }
    <\/script>
              `,
      html8: `    <template>
        <div flex="box:mean">
            <div style="padding:0 10px;">
                <tb-time-picker size="mini" placeholder="mini date"></tb-time-picker>
            </div>
            <div style="padding:0 10px;">
                <tb-time-picker size="small" placeholder="small date"></tb-time-picker>
            </div>
            <div style="padding:0 10px;">
                <tb-time-picker size="medium" placeholder="medium date"></tb-time-picker>
            </div>
        </div>
    </template>
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
    handleClick() {
      this.open = !this.open;
    },
    handleChange(date) {
      this.value3 = date;
    },
    handleClear() {
      this.open = false;
    },
    handleOk() {
      this.open = false;
    },
  },
};
</script>
<style lang="less" scoped>
.input-item {
  width: 300px;
  margin-right: 20px;
}
[flex] {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}
</style>
