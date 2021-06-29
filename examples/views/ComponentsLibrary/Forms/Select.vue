<!--
 * @Author: your name
 * @Date: 2021-06-27 19:24:08
 * @LastEditTime: 2021-06-28 16:44:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/examples/views/ComponentsLibrary/Forms/Select.vue
-->

<template>
  <div>
    <h2
      id="select-shu-ru-kuang"
      style='box-sizing: border-box; margin: 0px; padding: 10px 0px; font-size: 28px; font-weight: 400; color: rgb(31, 47, 61); border-bottom: 1px solid rgb(197, 217, 232); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#select-shu-ru-kuang" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;Select 选择器
    </h2>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      当选项过多时，使用下拉菜单展示并选择内容。
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
      基本用法。可以使用 v-model 双向绑定数据。
    </p>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      单选时，value 只接受字符串和数字类型，多选时，只接受数组类型，组件会自动根据Option的value来返回选中的数据。
    </p>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      可以给Select添加 style 样式，比如宽度。
    </p>

    <p>
      <br />
    </p>
    <Demo>
      <div slot="source">
        <tb-select style="width:200px" v-model="select">
          <tb-option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</tb-option>
        </tb-select>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html1">
        </code>
      </pre>
    </Demo>
    <h3
      id="tu-biao-he-qing-kong"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#tu-biao-he-qing-kong" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;不同的大小
    </h3>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      提供额外3种尺寸进行配置 medium small 或 mini三种尺寸
    </p>
    <p>
      <br />
    </p>
    <Demo>
      <div slot="source">
        <tb-select style="width:100px" v-model="select" size="mini" clearable>
          <tb-option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</tb-option>
        </tb-select>
        <tb-select style="width:100px;margin-left: 20px;" v-model="select" size="small" clearable>
          <tb-option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</tb-option>
        </tb-select>

        <tb-select style="width:100px;margin-left: 20px;" v-model="select" size="medium" clearable>
          <tb-option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</tb-option>
        </tb-select>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html2">
        </code>
      </pre>
    </Demo>
    <h3
      id="qing-kong-fen-zu"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#qing-kong-fen-zu" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;可以清空、分组或者自定义模板
    </h3>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      通过设置属性clearable可以清空已选项，仅适用于单选模式。
    </p>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      使用OptionGroup可将选项进行分组
    </p>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      对于选项显示内容的逻辑：优先显示 slot 内容，如果没有定义 slot，则显示label的值，如果没有设置 label，则显示value的值。
    </p>
    <p>
      <br />
    </p>
    <Demo>
      <div slot="source">
        <div>
          <tb-select style="width:200px" v-model="select" clearable>
            <tb-option value="beijing" label="北京"></tb-option>
            <tb-option value="shanghai" label="上海"></tb-option>
            <tb-option value="xuzhou" label="徐州"></tb-option>
          </tb-select>
          <tb-select style="width:200px;margin-left: 20px;" v-model="select">
            <tb-option-group label="直辖市">
              <tb-option value="beijing" label="北京"></tb-option>
              <tb-option value="shanghai" label="上海"></tb-option>
            </tb-option-group>
            <tb-option-group label="热门城市">
              <tb-option value="xuzhou" label="徐州"></tb-option>
              <tb-option value="nanjing" label="南京"></tb-option>
            </tb-option-group>
          </tb-select>
          <tb-select style="width:200px;margin-left: 20px;" v-model="select">
            <tb-option value="beijing" label="北京">
              <span>北京</span>
              <span style="float:right;color:#ccc">beijing</span>
            </tb-option>
            <tb-option value="shanghai" label="上海">
              <span>上海</span>
              <span style="float:right;color:#ccc">shanghai</span>
            </tb-option>
            <tb-option value="xuzhou" label="徐州">
              <span>徐州</span>
              <span style="float:right;color:#ccc">xuzhou</span>
            </tb-option>
          </tb-select>
          &nbsp;&nbsp;
          <span>{{ select }}</span>
        </div>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html3">
        </code>
      </pre>
    </Demo>
    <h3
      id="qi-yong-jin-yong"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#qi-yong-jin-yong" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;启用禁用
    </h3>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      可以设置禁用状态
    </p>
    <p>
      <br />
    </p>

    <Demo>
      <div slot="source">
        <div>
          <tb-select style="width:200px" disabled>
            <tb-option value="beijing" label="北京"></tb-option>
            <tb-option value="shanghai" label="上海"></tb-option>
            <tb-option value="xuzhou" label="徐州"></tb-option>
          </tb-select>
          <tb-select style="width:200px;margin-left: 20px;">
            <tb-option value="beijing" label="北京"></tb-option>
            <tb-option value="shanghai" label="上海" disabled></tb-option>
            <tb-option value="xuzhou" label="徐州"></tb-option>
          </tb-select>
        </div>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html4">
        </code>
      </pre>
    </Demo>
    <h3
      id="duo-xuan-zhe-die"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#duo-xuan-zhe-die" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;多选和折叠
    </h3>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      可以开启属性multiple开启多选模式 max-tag-count max-tag-placeholder 可以对超出的部分做折叠显示
    </p>
    <p>
      <br />
    </p>

    <Demo>
      注意，多选的尺寸，mini型和small一样大小
      <div slot="source">
        <div>
          <tb-select style="width:200px" v-model="cites" multiple>
            <tb-option value="beijing" label="北京"></tb-option>
            <tb-option value="shanghai" label="上海"></tb-option>
            <tb-option value="xuzhou" label="徐州"></tb-option>
            <tb-option value="nanjing" label="南京"></tb-option>
          </tb-select>
          <tb-select style="width:300px" v-model="cites" multiple :max-tag-count="1">
            <tb-option value="beijing" label="北京"></tb-option>
            <tb-option value="shanghai" label="上海"></tb-option>
            <tb-option value="xuzhou" label="徐州"></tb-option>
            <tb-option value="nanjing" label="南京"></tb-option>
          </tb-select>
          <tb-select style="width:300px;margin-left: 20px;" v-model="cites" multiple :max-tag-count="2" :max-tag-placeholder="maxTagPlaceholder">
            <tb-option value="beijing" label="北京"></tb-option>
            <tb-option value="shanghai" label="上海"></tb-option>
            <tb-option value="xuzhou" label="徐州"></tb-option>
            <tb-option value="nanjing" label="南京"></tb-option>
          </tb-select>
        </div>
        <div class="mt-5">{{ cites }}</div>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html5">
        </code>
      </pre>
    </Demo>
    <h3
      id="qian-zhui-mo-shi"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#qian-zhui-mo-shi" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;前缀模式
    </h3>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      可以开启属性 prefix 开启前缀模式
    </p>
    <p>
      <br />
    </p>

    <Demo>
      <div slot="source">
        <div style="width:200px">
          <tb-select prefix="icon-home">
            <tb-option value="beijing" label="北京"></tb-option>
            <tb-option value="shanghai" label="上海"></tb-option>
            <tb-option value="xuzhou" label="徐州"></tb-option>
            <tb-option value="nanjing" label="南京"></tb-option>
          </tb-select>
        </div>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html6">
        </code>
      </pre>
    </Demo>
    <h3
      id="sou-suo-mo-shi"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#sou-suo-mo-shi" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;搜索模式
    </h3>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      通过设置属性filterable可以开启搜索模式。单选和多选都支持搜索模式
    </p>
    <p>
      <br />
    </p>

    <Demo>
      <div slot="source">
        <tb-select style="width:200px" filterable>
          <tb-option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</tb-option>
        </tb-select>
        <tb-select style="width:300px;margin-left: 20px;" v-model="cites" filterable multiple>
          <tb-option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</tb-option>
        </tb-select>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html7">
        </code>
      </pre>
    </Demo>
    <h3
      id="rowSelect"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#rowSelect" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;Select props
    </h3>
    <p>
      <br />
    </p>

    <tb-table-eazy :rows="rowSelect" :cols="col"></tb-table-eazy>
    <h3
      id="rowSelectEvent"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#rowSelectEvent" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;Select events
    </h3>
    <p>
      <br />
    </p>
    <tb-table-eazy :rows="rowSelectEvent" :cols="colEvent"></tb-table-eazy>
    <h3
      id="rowSelectSlot"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#rowSelectSlot" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;Select slots
    </h3>
    <p>
      <br />
    </p>
    <tb-table-eazy :rows="rowSelectSlot" :cols="colSlot"></tb-table-eazy>
    <h3
      id="rowOption"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#rowOption" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;Option props
    </h3>
    <p>
      <br />
    </p>
    <tb-table-eazy :rows="rowOption" :cols="col"></tb-table-eazy>
        <h3
      id="rowOptionGroup"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#rowOptionGroup" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;OptionGroup props
    </h3>
    <p>
      <br />
    </p>
    <tb-table-eazy :rows="rowOptionGroup" :cols="col"></tb-table-eazy>
    
    <RightSmallNav :rightTitle="rightTitle" @goMeowPoint="goMeowPoint" />
  </div>
</template>

<script>
import useScroll from "../../../utils/mixins";
import RightSmallNav from "../../../components/RightSmallNav.vue";
export default {
  name: "Select",
  components: { RightSmallNav },
  data() {
    return {
      //   定义当前传递过来的数据是所有类型的数据
      rightTitle: [
        { title: "Select 选择器", id: "select-shu-ru-kuang" },
        { title: "基础用法", id: "ji-chu-yong-fa" },
        { title: "清空、分组", id: "qing-kong-fen-zu" },
        { title: "启用禁用", id: "qi-yong-jin-yong" },
        { title: "多选折叠", id: "duo-xuan-zhe-die" },
        { title: "前缀模式", id: "qian-zhui-mo-shi" },
        { title: "搜索模式", id: "sou-suo-mo-shi" },
        { title: "Select props", id: "rowSelect" },
        { title: "Select events", id: "rowSelectEvent" },
        { title: "Select slots", id: "rowSelectSlot" },
        { title: "Select methods", id: "rowOption" },
      ],
       cites:[],
      cityList: [
        {
          value: "New York",
          label: "New York",
        },
        {
          value: "London",
          label: "London",
        },
        {
          value: "Sydney",
          label: "Sydney",
        },
        {
          value: "Ottawa",
          label: "Ottawa",
        },
        {
          value: "Paris",
          label: "Paris",
        },
        {
          value: "Canberra",
          label: "Canberra",
        },
      ],
      select: "",
      rowSelect: [
        {
          Parameters: "value / v-model",
          Explain: "指定选中项目的 value 值，可以使用 v-model 双向绑定数据。",
          Types: "string/number",
          Optional: "-",
          Default: "-",
        },

        {
          Parameters: "multiple",
          Explain: "多选",
          Types: "boolean",
          Optional: "-",
          Default: "false",
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
          Explain: "清空选项，只在单选时有效",
          Types: "Boolean",
          Optional: "-",
          Default: "false",
        },
        {
          Parameters: "filterable",
          Explain: "是否支持搜索",
          Types: "Boolean",
          Optional: "-",
          Default: "false",
        },
        {
          Parameters: "size",
          Explain: "选择框大小",
          Types: "string",
          Optional: "medium、small、default",
          Default: "small",
        },
        {
          Parameters: "placeholder",
          Explain: "选择框默认文字",
          Types: "string",
          Optional: "-",
          Default: "请选择",
        },
        {
          Parameters: "not-found-text",
          Explain: "没有数据显示",
          Types: "String",
          Optional: "-",
          Default: "没有数据",
        },
        {
          Parameters: "label-in-value",
          Explain: "在返回选项时，是否将 label 和 value 一并返回,默认只返回 value",
          Types: "Boolean",
          Optional: "-",
          Default: "false",
        },
        {
          Parameters: "placement",
          Explain: "弹窗的展开方向",
          Types: "String",
          Optional: "top、bottom、top-start、bottom-start、top-end、bottom-end",
          Default: "bottom-start",
        },

        {
          Parameters: "appendToBody",
          Explain: "是否将弹层放置于 body 内",
          Types: "Boolean",
          Optional: "-",
          Default: "false",
        },
        {
          Parameters: "max-tag-count",
          Explain: "多选时最多显示多少个 tag",
          Types: "Number",
          Optional: "-",
          Default: "-",
        },
        {
          Parameters: "max-tag-placeholder",
          Explain: "隐藏 tag 时显示的内容，参数是剩余项数量",
          Types: "Function",
          Optional: "-",
          Default: "-",
        },
      ],
      rowSelectEvent: [
        {
          Parameters: "change",
          Explain: "选中的Option变化时触发，默认返回 value，如需返回 label，详见 label-in-value 属性",
          Callback: "当前选中项",
        },
        {
          Parameters: "clear",
          Explain: "点击清空按钮时触发",
          Callback: "-",
        },
        {
          Parameters: "query-change",
          Explain: "搜索词改变时触发",
          Callback: "query",
        },
        {
          Parameters: "open-change",
          Explain: "下拉框展开或收起时触发",
          Callback: "true / false",
        },
      ],
      rowSelectSlot: [
        {
          Parameters: "prefix",
          Explain: "自定义 Select 内头部图标",
        },
      ],
      rowOption: [
        {
          Parameters: "value",
          Explain: "选项值，默认根据此属性值进行筛选，必填",
          Types: "string/number",
          Optional: "-",
          Default: "-",
        },
        {
          Parameters: "label",
          Explain: "选项显示的内容，默认会读取 slot，无 slot 时，优先读取该 label 值，无 label 时，读取 value。",
          Types: "string",
          Optional: "-",
          Default: "-",
        },
        {
          Parameters: "disabled",
          Explain: "是否禁用当前项",
          Types: "Boolean",
          Optional: "-",
          Default: "false",
        },
      ],
      rowOptionGroup: [
        {
          Parameters: "label",
          Explain: "分组组名",
          Types: "string",
          Optional: "-",
          Default: "-",
        },
      ],
      html1: `    <template>
        <div>
            <tb-select style="width:200px" v-model="select">
                <tb-option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</tb-option>
            </tb-select>
        </div>
    </template>
    <script>
    export default {
        data(){
            return{
            cityList: [
                {
                    value: 'New York',
                    label: 'New York'
                },
                {
                    value: 'London',
                    label: 'London'
                },
                {
                    value: 'Sydney',
                    label: 'Sydney'
                },
                {
                    value: 'Ottawa',
                    label: 'Ottawa'
                },
                {
                    value: 'Paris',
                    label: 'Paris'
                },
                {
                    value: 'Canberra',
                    label: 'Canberra'
                }
            ],
            select:''
            }
        }
        }
    <\/script>
              `,
      html2: `    <template>
    <div>
        <tb-select style="width:100px" v-model="select" size="mini" clearable>
            <tb-option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</tb-option> 
        </tb-select>
        <tb-select style="width:100px;margin-left: 20px;" v-model="select" size="small" clearable>
            <tb-option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</tb-option> 
        </tb-select>
        <tb-select style="width:100px;margin-left: 20px;" v-model="select" size="medium" clearable>
            <tb-option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</tb-option> 
        </tb-select>
    </div>
    </template>
    <script>
        export default {
        data(){
            return{
            cityList: [
                {
                    value: 'New York',
                    label: 'New York'
                },
                {
                    value: 'London',
                    label: 'London'
                },
                {
                    value: 'Sydney',
                    label: 'Sydney'
                },
                {
                    value: 'Ottawa',
                    label: 'Ottawa'
                },
                {
                    value: 'Paris',
                    label: 'Paris'
                },
                {
                    value: 'Canberra',
                    label: 'Canberra'
                }
            ],
            select:''
            }
        }
        }
    <\/script>
              `,
      html3: `    <template>
    <div>
        <tb-select style="width:200px" v-model="select" clearable>
            <tb-option value="beijing" label="北京"></tb-option>
            <tb-option value="shanghai" label="上海"></tb-option>
            <tb-option value="xuzhou" label="徐州"></tb-option> 
        </tb-select>
        <tb-select style="width:200px;margin-left: 20px;" v-model="select">
            <tb-option-group label="直辖市">
                <tb-option value="beijing" label="北京"></tb-option>
                <tb-option value="shanghai" label="上海"></tb-option>
            </tb-option-group>
            <tb-option-group label="热门城市">
                <tb-option value="xuzhou" label="徐州"></tb-option> 
                <tb-option value="nanjing" label="南京"></tb-option> 
            </tb-option-group>
        </tb-select>
        <tb-select style="width:200px;margin-left: 20px;" v-model="select">
            <tb-option value="beijing" label="北京">
                <span>北京</span>
                <span style="float:right;color:#ccc">beijing</span>
            </tb-option>
            <tb-option value="shanghai" label="上海">
                <span>上海</span>
                <span style="float:right;color:#ccc">shanghai</span>
            </tb-option>
            <tb-option value="xuzhou" label="徐州">
                <span>徐州</span>
                <span style="float:right;color:#ccc">xuzhou</span>
            </tb-option> 
        </tb-select> 
        &nbsp;&nbsp;
        <span>{{ select }}</span>
        </div>
    </template>
    <script>
        export default {
        data(){
            return {
            select:''
            }
        }
        }
    <\/script>
              `,
      html4: `    <template>
        <div>
            <tb-select style="width:200px" disabled>
                <tb-option  value="beijing" label="北京"></tb-option>
                <tb-option  value="shanghai" label="上海"></tb-option>
                <tb-option  value="xuzhou" label="徐州"></tb-option> 
            </tb-select>
            <tb-select style="width:200px;margin-left: 20px;">
                <tb-option  value="beijing" label="北京"></tb-option>
                <tb-option  value="shanghai" label="上海" disabled></tb-option>
                <tb-option  value="xuzhou" label="徐州"></tb-option> 
            </tb-select>
        </div>
    </template>
              `,
      html5: `    <template>
    <div>
        <div>
            <tb-select style="width:200px" v-model="cites" multiple>
                <tb-option value="beijing" label="北京"></tb-option>
                <tb-option value="shanghai" label="上海"></tb-option>
                <tb-option value="xuzhou" label="徐州"></tb-option> 
                <tb-option value="nanjing" label="南京"></tb-option> 
            </tb-select>
            <tb-select style="width:300px" v-model="cites" multiple :max-tag-count="1">
                <tb-option value="beijing" label="北京"></tb-option>
                <tb-option value="shanghai" label="上海"></tb-option>
                <tb-option value="xuzhou" label="徐州"></tb-option> 
                <tb-option value="nanjing" label="南京"></tb-option> 
            </tb-select>
            <tb-select style="width:300px;margin-left: 20px;" v-model="cites" multiple :max-tag-count="2" :max-tag-placeholder="maxTagPlaceholder">
                <tb-option value="beijing" label="北京"></tb-option>
                <tb-option value="shanghai" label="上海"></tb-option>
                <tb-option value="xuzhou" label="徐州"></tb-option> 
                <tb-option value="nanjing" label="南京"></tb-option> 
            </tb-select>
        </div>
        <div class="mt-5">{{ cites }}</div>
    </div>
    </template>
    <script>
        export default {
        data(){
            return {
            cites:[]
            }
        },
        methods: {
            maxTagPlaceholder (num) {
                return 'more '+ num;
            }
        }
        }
    <\/script>
              `,
      html6: `    <template>
        <div style="width:200px">
            <tb-select prefix="ios-home">
                <tb-option value="beijing" label="北京"></tb-option>
                <tb-option value="shanghai" label="上海"></tb-option>
                <tb-option value="xuzhou" label="徐州"></tb-option> 
                <tb-option value="nanjing" label="南京"></tb-option> 
            </tb-select>
        </div>
    </template>
              `,
      html7: `    <template>
    <div>
        <tb-select style="width:200px" filterable>
            <tb-option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</tb-option>
        </tb-select>
        <tb-select style="width:300px;margin-left: 20px;" v-model="cites" filterable multiple>
            <tb-option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</tb-option>
        </tb-select>
    </div>
    </template>
    <script>
        export default {
        data(){
            return{
            cityList: [
                {
                    value: 'New York',
                    label: 'New York'
                },
                {
                    value: 'London',
                    label: 'London'
                },
                {
                    value: 'Sydney',
                    label: 'Sydney'
                },
                {
                    value: 'Ottawa',
                    label: 'Ottawa'
                },
                {
                    value: 'Paris',
                    label: 'Paris'
                },
                {
                    value: 'Canberra',
                    label: 'Canberra'
                }
            ],
            cites:[]
            }
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
    maxTagPlaceholder(num) {
      return "more " + num;
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
