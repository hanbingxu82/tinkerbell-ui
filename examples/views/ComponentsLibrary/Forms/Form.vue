<!--
 * @Author: your name
 * @Date: 2021-06-29 15:36:31
 * @LastEditTime: 2021-06-29 15:54:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/examples/views/ComponentsLibrary/Forms/Form.vue
-->

<template>
  <div>
    <h2
      id="datepicker-shu-ru-kuang"
      style='box-sizing: border-box; margin: 0px; padding: 10px 0px; font-size: 28px; font-weight: 400; color: rgb(31, 47, 61); border-bottom: 1px solid rgb(197, 217, 232); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#datepicker-shu-ru-kuang" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;DatePicker 日期选择器
    </h2>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      用于选择或输入日期
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
      设置type 为 date 或 daterange 分别显示选择单日和选择范围类型。
    </p>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      设置属性 placement 可以更改选择器出现的方向
    </p>
    <p>
      <br />
    </p>
    <Demo>
      <div slot="source">
        <div flex="box:mean" style="width: 500px;">
          <div style="padding:0 10px;">
            <tb-date-picker type="date" placeholder="Select date"></tb-date-picker>
          </div>
          <div style="padding:0 10px;">
            <tb-date-picker type="daterange" placement="bottom-start" placeholder="Select date"></tb-date-picker>
          </div>
        </div>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html1">
        </code>
      </pre>
    </Demo>
    <h3
      id="kuai-jie-fang-shi"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#kuai-jie-fang-shi" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;快捷方式
    </h3>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      options 对象中的 shortcuts
    </p>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      其中 value 为函数，必须返回一个日期，如果是 daterange 类型，需要返回一个数组。
    </p>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      value 接收任何正确的日期格式，比如 2016-12-24 或 12/24/16 都是正确的。
    </p>
    <p>
      <br />
    </p>
    <Demo>
      <div slot="source">
        <div flex="box:mean" style="width: 500px;">
          <div style="padding:0 10px;">
            <tb-date-picker type="date" placeholder="Select date" :options="options1"></tb-date-picker>
          </div>
          <div style="padding:0 10px;">
            <tb-date-picker type="daterange" placement="bottom-start" placeholder="Select date" :options="options2"></tb-date-picker>
          </div>
        </div>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html2">
        </code>
      </pre>
    </Demo>
    <h3
      id="bu-lian-dong-he-duo-xuan"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#bu-lian-dong-he-duo-xuan" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;不联动和多选
    </h3>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      设置属性 daterange 时 split-panels 可以将左右面板联动关闭。multiple 后，可以多选。
    </p>

    <p>
      <br />
    </p>
    <Demo>
      <div slot="source">
        <div flex="box:mean" style="width: 500px;">
          <div style="padding:0 10px;">
            <tb-date-picker type="daterange" split-panels placeholder="Select date"></tb-date-picker>
          </div>
          <div style="padding:0 10px;">
            <tb-date-picker type="date" multiple placeholder="Select date"></tb-date-picker>
          </div>
        </div>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html3">
        </code>
      </pre>
    </Demo>
    <h3
      id="xian-shi-xing-qi-shu"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#xian-shi-xing-qi-shu" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;显示星期数
    </h3>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      设置属性 show-week-numbers 可以显示星期数。
    </p>
    <p>
      <br />
    </p>

    <Demo>
      <div slot="source">
        <div>
          <div flex="box:mean" style="width: 500px;">
            <div style="padding:0 10px;">
              <tb-date-picker type="date" show-week-numbers placeholder="Select date"></tb-date-picker>
            </div>
            <div style="padding:0 10px;">
              <tb-date-picker type="daterange" show-week-numbers placeholder="Select date"></tb-date-picker>
            </div>
          </div>
        </div>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html4">
        </code>
      </pre>
    </Demo>
    <h3
      id="qi-shi-ri-qi"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#qi-shi-ri-qi" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;起始日期
    </h3>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      设置属性 start-date 可以将默认显示的日期面板设置为指定日期。
    </p>
    <p>
      <br />
    </p>

    <Demo>
      <div slot="source">
        <div flex="box:mean" style="width: 500px;">
          <div style="padding:0 10px;">
            <tb-date-picker type="date" :start-date="new Date(2000, 8, 2)" placeholder="Select date"></tb-date-picker>
          </div>
          <div style="padding:0 10px;">
            <tb-date-picker type="daterange" :start-date="new Date(2000, 8, 2)" placeholder="Select date"></tb-date-picker>
          </div>
        </div>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html5">
        </code>
      </pre>
    </Demo>
    <h3
      id="nian-yue-xuan-ze"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#nian-yue-xuan-ze" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;年月选择
    </h3>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      设置属性 type 为 year 或 month 可以使用选择年或月的功能。
    </p>
    <p>
      <br />
    </p>

    <Demo>
      <div slot="source">
        <div flex="box:mean" style="width: 500px;">
          <div style="padding:0 10px;">
            <tb-date-picker type="year" placeholder="Select year"></tb-date-picker>
          </div>
          <div style="padding:0 10px;">
            <tb-date-picker type="month" placeholder="Select year"></tb-date-picker>
          </div>
        </div>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html6">
        </code>
      </pre>
    </Demo>
    <h3
      id="ri-qi-ge-shi"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#ri-qi-ge-shi" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;日期格式
    </h3>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      设置属性 format 变日期的显示格式
    </p>

    <p>
      <br />
    </p>

    <Demo>
      format 只是改变显示的格式，并非改变 value 值。
      <div slot="source">
        <div flex="box:mean" style="width: 500px;">
          <div style="padding:0 10px;">
            <tb-date-picker type="date" value="2016-01-01" format="yyyy年MM月dd日" placeholder="Select date"></tb-date-picker>
          </div>
          <div style="padding:0 10px;">
            <tb-date-picker type="daterange" :value="['2016-01-01', '2016-02-15']" format="yyyy/MM/dd" placeholder="Select date"></tb-date-picker>
          </div>
        </div>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html7">
        </code>
      </pre>
    </Demo>
    <h3
      id="bu-ke-xuan-ri-qi"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#bu-ke-xuan-ri-qi" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;不可选日期
    </h3>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      设置属性 options 对象中的 disabledDate 可以设置不可选择的日期。
    </p>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      disabledDate 是函数，参数为当前的日期，需要返回 Boolean 是否禁用这天。
    </p>
    <p>
      <br />
    </p>

    <Demo>
      <div slot="source">
        <div flex="box:mean" style="width: 500px;">
          <div style="padding:0 10px;">
            <tb-date-picker type="date" :options="options3" placeholder="Select date"></tb-date-picker>
          </div>
          <div style="padding:0 10px;">
            <tb-date-picker type="date" :options="options4" placeholder="Select date"></tb-date-picker>
          </div>
        </div>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html8">
        </code>
      </pre>
    </Demo>
    <h3
      id="cao-zuo-lan-tan-chu"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#cao-zuo-lan-tan-chu" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;带有操作栏的弹出
    </h3>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      设置属性 confirm 选择日期后，户确认后才可关闭。
    </p>

    <p>
      <br />
    </p>

    <Demo>
      <div slot="source">
        <div flex="box:mean" style="width: 500px;">
          <div style="padding:0 10px;">
            <tb-date-picker type="date" confirm placeholder="Select date"></tb-date-picker>
          </div>
          <div style="padding:0 10px;">
            <tb-date-picker type="daterange" confirm placeholder="Select date"></tb-date-picker>
          </div>
        </div>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html9">
        </code>
      </pre>
    </Demo>
    <h3
      id="shou-dong-cha-ru"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#shou-dong-cha-ru" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;手动插入选择组件
    </h3>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      可以使用 slot 配合参数 open 及事件来手动控制组件的显示状态
    </p>

    <p>
      <br />
    </p>

    <Demo>
      <div slot="source">
        <div style="width: 500px;">
          <tb-date-picker :open="open" :value="value3" confirm type="date" @change="handleChange" @clear="handleClear" @ok="handleOk">
            <a href="javascript:void(0)" @click="handleClick">
              <template v-if="value3 === ''">Select date</template>
              <template v-else>{{ value3 }}</template>
            </a>
          </tb-date-picker>
        </div>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html10">
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
            <tb-date-picker size="mini" type="date" placeholder="Select date"></tb-date-picker>
          </div>
          <div style="padding:0 10px;">
            <tb-date-picker size="small" type="date" placeholder="Select date"></tb-date-picker>
          </div>
          <div style="padding:0 10px;">
            <tb-date-picker size="medium" type="date" placeholder="Select date"></tb-date-picker>
          </div>
        </div>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html11">
        </code>
      </pre>
    </Demo>
    <h3
      id="ri-qi-shi-jian-xuan-ze"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#ri-qi-shi-jian-xuan-ze" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;日期时间选择
    </h3>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      type 为 datetime 或 datetimerange 可以选择时间。
    </p>

    <p>
      <br />
    </p>

    <Demo>
      设置 format 并且忽略秒，可以只设置小时和分钟维度。
      <div slot="source">
        <div flex="box:mean">
          <tb-date-picker type="datetime" placeholder="选择日期时间" style="padding-right: 20px;"></tb-date-picker>
          <tb-date-picker type="datetime" format="yyyy-MM-dd HH:mm" placeholder="选择日期时间(忽略秒)" style="padding-right: 20px;"></tb-date-picker>
          <tb-date-picker type="datetimerange" placeholder="选择日期时间" style="padding-right: 20px;"></tb-date-picker>
          <tb-date-picker type="datetimerange" format="yyyy-MM-dd HH:mm" placeholder="选择日期时间(忽略秒)"></tb-date-picker>
        </div>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html12">
        </code>
      </pre>
    </Demo>
    <h3
      id="rowDatePicker"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#rowDatePicker" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;DatePicker props
    </h3>
    <p>
      <br />
    </p>

    <tb-table-eazy :rows="rowDatePicker" :cols="col"></tb-table-eazy>
    <h3
      id="rowDatePickerEvent"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#rowDatePickerEvent" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;DatePicker events
    </h3>
    <p>
      <br />
    </p>
    <tb-table-eazy :rows="rowDatePickerEvent" :cols="colEvent"></tb-table-eazy>
    <h3
      id="rowDatePickerSlot"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#rowDatePickerSlot" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;DatePicker slots
    </h3>
    <p>
      <br />
    </p>
    <tb-table-eazy :rows="rowDatePickerSlot" :cols="colSlot"></tb-table-eazy>
    <h3
      id="rowDatePickerOption"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#rowDatePickerOption" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;DatePicker options
    </h3>
    <p>
      <br />
    </p>
    <tb-table-eazy :rows="rowDatePickerOption" :cols="col"></tb-table-eazy>

    <RightSmallNav :rightTitle="rightTitle" @goMeowPoint="goMeowPoint" />
  </div>
</template>

<script>
import useScroll from "../../../utils/mixins";
import RightSmallNav from "../../../components/RightSmallNav.vue";
export default {
  name: "DatePicker",
  components: { RightSmallNav },
  data() {
    return {
      //   定义当前传递过来的数据是所有类型的数据
      rightTitle: [
        { title: "DatePicker 日期选择器", id: "datepicker-shu-ru-kuang" },
        { title: "基础用法", id: "ji-chu-yong-fa" },
        { title: "快捷方式", id: "kuai-jie-fang-shi" },
        { title: "不联动和多选", id: "bu-lian-dong-he-duo-xuan" },
        { title: "显示星期数", id: "xian-shi-xing-qi-shu" },
        { title: "起始日期", id: "qi-shi-ri-qi" },
        { title: "年月选择", id: "nian-yue-xuan-ze" },
        { title: "日期格式", id: "ri-qi-ge-shi" },
        { title: "不可选日期", id: "bu-ke-xuan-ri-qi" },
        { title: "带有操作栏的弹出", id: "cao-zuo-lan-tan-chu" },
        { title: "手动插入选择组件", id: "shou-dong-cha-ru" },
        { title: "DatePicker props", id: "rowDatePicker" },
        { title: "DatePicker events", id: "rowDatePickerEvent" },
        { title: "DatePicker slots", id: "rowDatePickerSlot" },
        { title: "DatePicker options", id: "rowDatePickerOption" },
      ],
      open: false,
      value3: "",
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

      rowDatePicker: [
        {
          Parameters: "type",
          Explain: "显示类型",
          Types: "string",
          Optional: "date、daterange、datetime、datetimerange、year、month",
          Default: "date",
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
          Default: "date/daterange：yyyy-MM-dd, datetime/datetimerange：yyyy-MM-dd HH:mm:ss,year：yyyy,month：yyyy-MM",
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
          Default: "—",
        },
        {
          Parameters: "options",
          Explain: "选择器额外配置，比如不可选日期与快捷选项，具体项详见下表",
          Types: "Object",
          Optional: "-",
          Default: "-",
        },
        {
          Parameters: "split-panels",
          Explain: "开启后，左右面板不联动，仅在 daterange 和 datetimerange 下可用。",
          Types: "Boolean",
          Optional: "—",
          Default: "false",
        },
        {
          Parameters: "multiple",
          Explain: "开启后，可以选择多个日期，仅在 date 下可用。",
          Types: "Boolean",
          Optional: "—",
          Default: "false",
        },
        {
          Parameters: "show-week-numbers",
          Explain: "显示星期数。",
          Types: "Boolean",
          Optional: "-",
          Default: "false",
        },
        {
          Parameters: "start-date",
          Explain: "默认显示的起始日期。",
          Types: "Date",
          Optional: "-",
          Default: "—",
        },

        {
          Parameters: "confirm",
          Explain: "显示底部控制栏，开启后，选择完日期，需确认后关闭。",
          Types: "Boolean",
          Optional: "-",
          Default: "false",
        },
        {
          Parameters: "open",
          Explain: "手动控制日期选择器的显示状态，true 为显示，false 为收起。使用该属性后，选择器不会主动关闭。建议配合 slot 及 confirm 和相关事件一起使用。",
          Types: "Boolean",
          Optional: "-",
          Default: "-",
        },
        {
          Parameters: "size",
          Explain: "尺寸",
          Types: "string",
          Optional: "medium、small、size",
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
          Optional: "-",
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
          Parameters: "time-picker-options",
          Explain: "可以在 type 为 datetime 和 datetimerange 下，配置 TimePicker 的属性，比如时间间隔 steps：:time-picker-options='{steps: [1, 10, 10]}'。",
          Types: "Object",
          Optional: "-",
          Default: "{}",
        },
        {
          Parameters: "separator",
          Explain: "两个日期间的分隔符",
          Types: "String",
          Optional: "-",
          Default: "~",
        },
      ],
      rowDatePickerEvent: [
        {
          Parameters: "change",
          Explain: "日期发生变化时触发",
          Callback: "返回两个值，已经格式化后的日期，比如 2016-01-01，和当前的日期类型，比如 date",
        },
        {
          Parameters: "open-change",
          Explain: "弹出日历和关闭日历时触发",
          Callback: "true / false",
        },
        {
          Parameters: "ok",
          Explain: "在 confirm 模式下有效，点击确定按钮时触发",
          Callback: "-",
        },
        {
          Parameters: "clear",
          Explain: "在 confirm 模式或 clearable = true 时有效，在清空日期时触发",
          Callback: "-",
        },
        {
          Parameters: "click-outside",
          Explain: "点击外部关闭下拉菜单时触发",
          Callback: "event",
        },
      ],
      rowDatePickerSlot: [
        {
          Parameters: "default",
          Explain: "自定义选择器的显示内容，建议与 open 等参数一起使用，详见示例",
        },
      ],
      rowDatePickerOption: [
        {
          Parameters: "shortcuts",
          Explain: "设置快捷选项，每项内容：",
          Types: "Array",
          Optional: "text/String：显示的文案,value /Function：返回指定的日期，如需自己控制逻辑，可不设置，并使用 onClick 回调 onClick /Function：点击时的回调，参数为当前日期选择器的 Vue 实例，当需要自定义复杂操作时，可以使用",
          Default: "-",
        },
        {
          Parameters: "disabledDate",
          Explain: "设置不可选择的日期，参数为当前的日期，需要返回 Boolean 是否禁用这天",
          Types: "Function",
          Optional: "-",
          Default: "-",
        },
      ],

      html1: `    <template>
        <div flex="box:mean" style="width: 500px;">
            <div style="padding:0 10px;">
                <tb-date-picker type="date" placeholder="Select date"></tb-date-picker>
            </div>
            <div style="padding:0 10px;">
                <tb-date-picker type="daterange" placement="bottom-start" placeholder="Select date"></tb-date-picker>
            </div>
        </div>
    </template>
            `,
      html2: `    <template>
        <div flex="box:mean" style="width: 500px;">
            <div style="padding:0 10px;">
                <tb-date-picker type="date" placeholder="Select date" :options="options1" ></tb-date-picker>
            </div>
            <div style="padding:0 10px;">
                <tb-date-picker type="daterange" placement="bottom-start" placeholder="Select date" :options="options2"></tb-date-picker>
            </div>
        </div>
    </template>
    <script>
        export default {
            data () {
                return {
                    options1: {
                        shortcuts: [
                            {
                                text: '今天',
                                value () {
                                    return new Date();
                                },
                                onClick: (picker) => {
                                    this.$message('Click today');
                                }
                            },
                            {
                                text: '昨天',
                                value () {
                                    const date = new Date();
                                    date.setTime(date.getTime() - 3600 * 1000 * 24);
                                    return date;
                                },
                                onClick: (picker) => {
                                    this.$message('Click yesterday');
                                }
                            },
                            {
                                text: '一周',
                                value () {
                                    const date = new Date();
                                    date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                                    return date;
                                },
                                onClick: (picker) => {
                                    this.$message('Click a week ago');
                                }
                            }
                        ]
                    },
                    options2: {
                        shortcuts: [
                            {
                                text: '近一周',
                                value () {
                                    const end = new Date();
                                    const start = new Date();
                                    start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                                    return [start, end];
                                }
                            },
                            {
                                text: '最近一个月',
                                value () {
                                    const end = new Date();
                                    const start = new Date();
                                    start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                                    return [start, end];
                                }
                            },
                            {
                                text: '最近三个月',
                                value () {
                                    const end = new Date();
                                    const start = new Date();
                                    start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                                    return [start, end];
                                }
                            }
                        ]
                    }
                }
            }
        }
    <\/script>
              `,
      html3: `    <template>
        <div flex="box:mean" style="width: 500px;">
            <div style="padding:0 10px;">
                <tb-date-picker type="daterange" split-panels placeholder="Select date"></tb-date-picker>
            </div>
            <div style="padding:0 10px;">
                <tb-date-picker type="date" multiple placeholder="Select date"></tb-date-picker>
            </div>
        </div>
    </template>
              `,
      html4: `    <template>
        <div flex="box:mean" style="width: 500px;">
            <div style="padding:0 10px;">
                <tb-date-picker type="date" show-week-numbers placeholder="Select date"></tb-date-picker>
            </div>
            <div style="padding:0 10px;">
                <tb-date-picker type="daterange" show-week-numbers placeholder="Select date"></tb-date-picker>
            </div>
        </div>
    </template>
              `,
      html5: `    <template>
        <div flex="box:mean" style="width: 500px;">
            <div style="padding:0 10px;">
                <tb-date-picker type="date" :start-date="new Date(2000,8,2)" placeholder="Select date"></tb-date-picker>
            </div>
            <div style="padding:0 10px;">
                <tb-date-picker type="daterange" :start-date="new Date(2000,8,2)" placeholder="Select date"></tb-date-picker>
            </div>
        </div>
    </template>
              `,
      html6: `    <template>
        <div flex="box:mean" style="width: 500px;">
            <div style="padding:0 10px;">
                <tb-date-picker type="year" placeholder="Select year"></tb-date-picker>
            </div>
            <div style="padding:0 10px;">
                <tb-date-picker type="month" placeholder="Select year"></tb-date-picker>
            </div>
        </div>
    </template>
              `,
      html7: `    <template>
        <div flex="box:mean" style="width: 500px;">
            <div style="padding:0 10px;">
                <tb-date-picker type="date" value="2016-01-01" format="yyyy年MM月dd日" placeholder="Select date"></tb-date-picker>
            </div>
            <div style="padding:0 10px;">
                <tb-date-picker type="daterange" :value="['2016-01-01', '2016-02-15']" format="yyyy/MM/dd" placeholder="Select date"></tb-date-picker>
            </div>
        </div>
    </template>
              `,
      html8: `    <template>
        <div flex="box:mean" style="width: 500px;">
            <div style="padding:0 10px;">
                <tb-date-picker type="date" :options="options3" placeholder="Select date"></tb-date-picker>
            </div>
            <div style="padding:0 10px;">
                <tb-date-picker type="date" :options="options4" placeholder="Select date"></tb-date-picker>
            </div>
        </div>
    </template>
    <script>
        export default {
            data () {
                return {
                    options3: {
                        disabledDate (date) {
                            return date && date.valueOf() < Date.now() - 86400000;
                        }
                    },
                    options4: {
                        disabledDate (date) {
                            const disabledDay = date.getDate();
                            return disabledDay === 15;
                        }
                    }
                }
            }
        }
<\/script>
`,
      html9: `
<template>
  <div flex="box:mean" style="width: 500px;">
    <div style="padding:0 10px;">
      <tb-date-picker type="date" confirm placeholder="Select date"></tb-date-picker>
    </div>
    <div style="padding:0 10px;">
      <tb-date-picker type="daterange" confirm placeholder="Select date"></tb-date-picker>
    </div>
  </div>
</template>
`,
      html10: `
    <template>
    <div style="width: 500px;">
        <tb-date-picker :open="open" :value="value3" confirm type="date" @change="handleChange" @clear="handleClear" @ok="handleOk">
        <a href="javascript:void(0)" @click="handleClick">
            <template v-if="value3 === ''">Select date</template>
            <template v-else>{{ value3 }}</template>
        </a>
        </tb-date-picker>
    </div>
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
                handleChange (date) {
                    this.value3 = date;
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
      html11: `    <template>
        <div flex="box:mean">
            <div style="padding:0 10px;">
                <tb-date-picker size="mini" type="date" placeholder="Select date"></tb-date-picker>
            </div>
            <div style="padding:0 10px;">
                <tb-date-picker size="small" type="date" placeholder="Select date"></tb-date-picker>
            </div>
            <div style="padding:0 10px;">
                <tb-date-picker size="medium" type="date" placeholder="Select date"></tb-date-picker>
            </div>
        </div>
    </template>
            `,
      html12: `    <template>
        <div flex="box:mean">
            <tb-date-picker type="datetime" placeholder="选择日期时间" style="padding-right: 20px;"></tb-date-picker>
            <tb-date-picker type="datetime" format="yyyy-MM-dd HH:mm" placeholder="选择日期时间(忽略秒)" style="padding-right: 20px;"></tb-date-picker>
            <tb-date-picker type="datetimerange" placeholder="选择日期时间" style="padding-right: 20px;"></tb-date-picker>
            <tb-date-picker type="datetimerange" format="yyyy-MM-dd HH:mm" placeholder="选择日期时间(忽略秒)"></tb-date-picker>
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
