<!--
 * @Author: your name
 * @Date: 2021-06-27 15:54:29
 * @LastEditTime: 2021-06-27 19:09:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/examples/views/ComponentsLibrary/Forms/Checkbox.vue
-->
<template>
  <div>
    <h2
      id="checkbox-dan-xuan-kuang"
      style='box-sizing: border-box; margin: 0px; padding: 10px 0px; font-size: 28px; font-weight: 400; color: rgb(31, 47, 61); border-bottom: 1px solid rgb(197, 217, 232); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#checkbox-dan-xuan-kuang" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;Checkbox 多选框
    </h2>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      在一组备选项中进行多选。
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
      单独使用可以表示两种状态之间的切换，写在标签中的内容为 checkbox 按钮后的介绍。
    </p>
    <p>
      <br />
    </p>
    <Demo>
      在tb-checkbox元素中定义v-model绑定变量，单一的checkbox中，默认绑定变量的值会是Boolean，选中为true。
      <div slot="source">
        <tb-checkbox v-model="checked">备选项</tb-checkbox>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html1">
        </code>
      </pre>
    </Demo>
    <h3
      id="jin-yong-zhuang-tai"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#jin-yong-zhuang-tai" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;禁用状态
    </h3>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      多选框不可用状态。
    </p>
    <p>
      <br />
    </p>

    <Demo>
      设置disabled属性即可。
      <div slot="source">
        <div>
          <tb-checkbox v-model="checked1" disabled>备选项1</tb-checkbox>
          <tb-checkbox v-model="checked2" disabled>备选项</tb-checkbox>
        </div>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html2">
        </code>
      </pre>
    </Demo>
    <h3
      id="duo-xuan-kuang-zu"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#duo-xuan-kuang-zu" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;多选框组
    </h3>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      适用于多个勾选框绑定到同一个数组的情景，通过是否勾选来表示这一组选项中选中的项。
    </p>
    <p>
      <br />
    </p>

    <Demo>
      checkbox-group元素能把多个 checkbox 管理为一组，只需要在 Group 中使用v-model绑定Array类型的变量即可。 tb-checkbox 的 label属性是该 checkbox 对应的值，若该标签中无内容，则该属性也充当 checkbox 按钮后的介绍。label与数组中的元素值相对应，如果存在指定的值则为选中状态，否则为不选中。
      <div slot="source">
        <div>
          <tb-checkbox-group v-model="checkList">
            <tb-checkbox label="多选框 A">多选框 A</tb-checkbox>
            <tb-checkbox label="多选框 B">多选框 B</tb-checkbox>
            <tb-checkbox label="多选框 C">多选框 C</tb-checkbox>
            <tb-checkbox label="禁用" disabled>禁用</tb-checkbox>
            <tb-checkbox label="选中且禁用" disabled>选中且禁用</tb-checkbox>
          </tb-checkbox-group>
        </div>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html3">
        </code>
      </pre>
    </Demo>
    <h3
      id="indeterminate-zhuang-tai"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#indeterminate-zhuang-tai" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;indeterminate 状态
    </h3>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      indeterminate 属性用以表示 checkbox 的不确定状态，一般用于实现全选的效果
    </p>
    <p>
      <br />
    </p>

    <Demo>
      <div slot="source">
        <tb-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</tb-checkbox>
        <div style="margin: 15px 0;"></div>
        <tb-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
          <tb-checkbox v-for="city in cities2" :label="city" :key="city">{{ city }}</tb-checkbox>
        </tb-checkbox-group>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html4">
        </code>
      </pre>
    </Demo>
    <h3
      id="max-length"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#max-length" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;可选项目数量的限制
    </h3>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      使用 min 和 max 属性能够限制可以被勾选的项目的数量。
    </p>
    <p>
      <br />
    </p>

    <Demo>
      <div slot="source">
        <tb-checkbox-group v-model="checkedCities1" :min="1" :max="2">
          <tb-checkbox v-for="city in cities1" :label="city" :key="city">{{ city }}</tb-checkbox>
        </tb-checkbox-group>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html5">
        </code>
      </pre>
    </Demo>
    <h3
      id="an-niu-yang-shi"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#an-niu-yang-shi" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;按钮样式
    </h3>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      按钮样式的多选组合。
    </p>
    <p>
      <br />
    </p>

    <Demo>
      只需要把tb-checkbox元素替换为tb-checkbox-button元素即可。此外，tinkerbell 还提供了size属性。
      <div slot="source">
        <div>
          <tb-checkbox-group v-model="checkboxGroup2" size="medium">
            <tb-checkbox-button v-for="city in cities" :label="city" :key="city">{{ city }}</tb-checkbox-button>
          </tb-checkbox-group>
        </div>
        <div style="margin-top: 20px">
          <tb-checkbox-group v-model="checkboxGroup3" size="small">
            <tb-checkbox-button v-for="city in cities" :label="city" :disabled="city === '北京'" :key="city">{{ city }}</tb-checkbox-button>
          </tb-checkbox-group>
        </div>
        <div style="margin-top: 20px">
          <tb-checkbox-group v-model="checkboxGroup4" size="mini" disabled>
            <tb-checkbox-button v-for="city in cities" :label="city" :key="city">{{ city }}</tb-checkbox-button>
          </tb-checkbox-group>
        </div>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html6">
        </code>
      </pre>
    </Demo>
    <h3
      id="dai-you-bian-kuang"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#dai-you-bian-kuang" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;带有边框
    </h3>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      带有边框的多选框。
    </p>
    <p>
      <br />
    </p>

    <Demo>
      设置border属性可以渲染为带有边框的多选框。
      <div slot="source">
        <div>
          <div>
            <tb-checkbox v-model="checked3" label="备选项1" border size="medium">备选项1</tb-checkbox>
            <tb-checkbox v-model="checked4" label="备选项2" border size="medium">备选项2</tb-checkbox>
          </div>
          <div style="margin-top: 20px">
            <tb-checkbox-group v-model="checkboxGroup1" size="small">
              <tb-checkbox label="备选项1" border>备选项1</tb-checkbox>
              <tb-checkbox label="备选项2" border disabled>备选项2</tb-checkbox>
            </tb-checkbox-group>
          </div>
          <div style="margin-top: 20px">
            <tb-checkbox-group v-model="checkboxGroup2" size="mini" disabled>
              <tb-checkbox label="备选项1" border>备选项1</tb-checkbox>
              <tb-checkbox label="备选项2" border>备选项2</tb-checkbox>
            </tb-checkbox-group>
          </div>
        </div>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html7">
        </code>
      </pre>
    </Demo>
    <h3
      id="rowCheckbox"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#rowCheckbox" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;Checkbox props
    </h3>
    <p>
      <br />
    </p>
    <tb-table-eazy :rows="rowCheckbox" :cols="col"></tb-table-eazy>
    <h3
      id="rowCheckboxEvent"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#rowCheckboxEvent" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;Checkbox events
    </h3>
    <p>
      <br />
    </p>
    <tb-table-eazy :rows="rowCheckboxEvent" :cols="colEvent"></tb-table-eazy>
    <h3
      id="rowCheckboxGroup"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#rowCheckboxGroup" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;CheckboxGroup props
    </h3>
    <p>
      <br />
    </p>
    <tb-table-eazy :rows="rowCheckboxGroup" :cols="col"></tb-table-eazy>
    <h3
      id="rowCheckboxGroupEvent"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#rowCheckboxGroupEvent" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;CheckboxGroup events
    </h3>
    <p>
      <br />
    </p>
    <tb-table-eazy :rows="rowCheckboxGroupEvent" :cols="colEvent"></tb-table-eazy>
    <h3
      id="rowCheckboxButton"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#rowCheckboxButton" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;CheckboxButton props
    </h3>
    <p>
      <br />
    </p>
    <tb-table-eazy :rows="rowCheckboxButton" :cols="col"></tb-table-eazy>

    <RightSmallNav :rightTitle="rightTitle" @goMeowPoint="goMeowPoint" />
  </div>
</template>

<script>
import useScroll from "../../../utils/mixins";
import RightSmallNav from "../../../components/RightSmallNav.vue";
const cityOptions = ["上海", "北京", "广州", "深圳"];
export default {
  name: "Checkbox",
  components: { RightSmallNav },
  data() {
    return {
      //   定义当前传递过来的数据是所有类型的数据
      rightTitle: [
        { title: "Checkbox 多选框", id: "checkbox-dan-xuan-kuang" },
        { title: "基础用法", id: "ji-chu-yong-fa" },
        { title: "禁用状态", id: "jin-yong-zhuang-tai" },
        { title: "多选框组", id: "duo-xuan-kuang-zu" },
        { title: "按钮样式", id: "an-niu-yang-shi" },
        { title: "带有边框", id: "dai-you-bian-kuang" },
        { title: "Checkbox props", id: "rowCheckbox" },
        { title: "Checkbox events", id: "rowCheckboxEvent" },
        { title: "CheckboxGroup props", id: "rowCheckboxGroup" },
        { title: "CheckboxGroup events", id: "rowCheckboxGroupEvent" },
        { title: "CheckboxButton props", id: "rowCheckboxButton" },
      ],
      rowCheckbox: [
        {
          Parameters: "value / v-model",
          Explain: "绑定值",
          Types: "string / number / boolean",
          Optional: "-",
          Default: "-",
        },
        {
          Parameters: "label",
          Explain: "选中状态的值（只有在checkbox-group或者绑定对象类型为array时有效）",
          Types: "string / number / boolean",
          Optional: "-",
          Default: "-",
        },
        {
          Parameters: "disabled",
          Explain: "是否禁用",
          Types: "boolean",
          Optional: "-",
          Default: "false",
        },
        {
          Parameters: "border",
          Explain: "是否显示边框",
          Types: "boolean",
          Optional: "-",
          Default: "false",
        },
        {
          Parameters: "size",
          Explain: "Checkbox 的尺寸，仅在 border 为真时有效",
          Types: "string",
          Optional: "medium / small / mini",
          Default: "-",
        },
        {
          Parameters: "name",
          Explain: "原生 name 属性",
          Types: "string",
          Optional: "-",
          Default: "-",
        },
        {
          Parameters: "checked",
          Explain: "当前是否勾选",
          Types: "boolean",
          Optional: "-",
          Default: "false",
        },
        {
          Parameters: "indeterminate",
          Explain: "设置 indeterminate 状态，只负责样式控制",
          Types: "boolean",
          Optional: "-",
          Default: "false",
        },
      ],
      rowCheckboxEvent: [
        {
          Parameters: "change",
          Explain: "绑定值变化时触发的事件",
          Callback: "选中的 Checkbox label 值",
        },
      ],
      rowCheckboxGroup: [
        {
          Parameters: "value / v-model",
          Explain: "绑定值",
          Types: "string / number / boolean",
          Optional: "-",
          Default: "-",
        },
        {
          Parameters: "size",
          Explain: "多选框组尺寸，仅对按钮形式的 Checkbox 或带有边框的 Checkbox 有效",
          Types: "string",
          Optional: "medium / small / mini",
          Default: "-",
        },
        {
          Parameters: "disabled",
          Explain: "是否禁用",
          Types: "boolean",
          Optional: "-",
          Default: "false",
        },
        {
          Parameters: "min",
          Explain: "可被勾选的 checkbox 的最小数量",
          Types: "number",
          Optional: "-",
          Default: "-",
        },
        {
          Parameters: "max",
          Explain: "可被勾选的 checkbox 的最大数量",
          Types: "number",
          Optional: "-",
          Default: "-",
        },
      ],
      rowCheckboxGroupEvent: [
        {
          Parameters: "change",
          Explain: "绑定值变化时触发的事件",
          Callback: "	选中的 Checkbox label 值",
        },
      ],
      rowCheckboxButton: [
        {
          Parameters: "label",
          Explain: "选中状态的值（只有在checkbox-group或者绑定对象类型为array时有效）",
          Types: "string / number / boolean",
          Optional: "-",
          Default: "-",
        },
        {
          Parameters: "disabled",
          Explain: "是否禁用",
          Types: "boolean",
          Optional: "-",
          Default: "false",
        },
        {
          Parameters: "name",
          Explain: "原生 name 属性",
          Types: "string",
          Optional: "-",
          Default: "-",
        },
        {
          Parameters: "checked",
          Explain: "当前是否勾选",
          Types: "boolean",
          Optional: "-",
          Default: "false",
        },
      ],
      checked: true,
      checked1: false,
      checked2: true,
      checked3: true,
      checked4: true,
      checkList: ["选中且禁用", "多选框 A"],
      checkboxGroup1: ["上海"],
      checkboxGroup2: ["上海"],
      checkboxGroup3: ["上海"],
      checkboxGroup4: ["上海"],
      checkedCities: ["上海", "北京"],
      cities: [...cityOptions],
      cities1: [...cityOptions],
      checkAll: false,
      checkedCities1: ["上海", "北京"],
      cities2: [...cityOptions],
      isIndeterminate: true,
      html1: `    <template>
      <!-- 'checked' 为 true 或 false -->
      <tb-checkbox v-model="checked">备选项</tb-checkbox>
    </template>
    <script>
      export default {
        data() {
          return {
            checked: true
          };
        }
      };
    <\/script>
              `,
      html2: `    <template>
      <tb-checkbox v-model="checked1" disabled>备选项1</tb-checkbox>
      <tb-checkbox v-model="checked2" disabled>备选项</tb-checkbox>
    </template>
    <script>
      export default {
        data() {
          return {
            checked1: false,
            checked2: true
          };
        }
      };
    <\/script>
              `,
      html3: `    <template>
      <tb-checkbox-group v-model="checkList">
        <tb-checkbox label="多选框 A">多选框 A</tb-checkbox>
        <tb-checkbox label="多选框 B">多选框 B</tb-checkbox>
        <tb-checkbox label="多选框 C">多选框 C</tb-checkbox>
        <tb-checkbox label="禁用" disabled>禁用" disabled</tb-checkbox>
        <tb-checkbox label="选中且禁用" disabled>选中且禁用" disabled</tb-checkbox>
      </tb-checkbox-group>
    </template>

    <script>
      export default {
        data () {
          return {
            checkList: ['选中且禁用','多选框 A']
          };
        }
      };
    <\/script>
              `,
      html4: `    <template>
      <tb-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</tb-checkbox>
      <div style="margin: 15px 0;"></div>
      <tb-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
        <tb-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</tb-checkbox>
      </tb-checkbox-group>
    </template>
    <script>
      const cityOptions = ['上海', '北京', '广州', '深圳'];
      export default {
        data() {
          return {
            checkAll: false,
            checkedCities: ['上海', '北京'],
            cities: cityOptions,
            isIndeterminate: true
          };
        },
        methods: {
          handleCheckAllChange(val) {
            this.checkedCities = val ? cityOptions : [];
            this.isIndeterminate = false;
          },
          handleCheckedCitiesChange(value) {
            let checkedCount = value.length;
            this.checkAll = checkedCount === this.cities.length;
            this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
          }
        }
      };
    <\/script>
              `,
      html5: `    <template>
      <tb-checkbox-group 
        v-model="checkedCities"
        :min="1"
        :max="2">
        <tb-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</tb-checkbox>
      </tb-checkbox-group>
    </template>
    <script>
      const cityOptions = ['上海', '北京', '广州', '深圳'];
      export default {
        data() {
          return {
            checkedCities: ['上海', '北京'],
            cities: cityOptions
          };
        }
      };
    <\/script>
              `,
      html6: `    <template>
      <div>
        <tb-checkbox-group v-model="checkboxGroup1" size="medium">
          <tb-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</tb-checkbox-button>
        </tb-checkbox-group>
      </div>
      <div style="margin-top: 20px">
        <tb-checkbox-group v-model="checkboxGroup2" size="small">
          <tb-checkbox-button v-for="city in cities" :label="city" :disabled="city === '北京'" :key="city">{{city}}</tb-checkbox-button>
        </tb-checkbox-group>
      </div>
      <div style="margin-top: 20px">
        <tb-checkbox-group v-model="checkboxGroup3" size="mini" disabled>
          <tb-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</tb-checkbox-button>
        </tb-checkbox-group>
      </div>
    </template>
    <script>
      const cityOptions = ['上海', '北京', '广州', '深圳'];
      export default {
        data () {
          return {
            checkboxGroup1: ['上海'],
            checkboxGroup2: ['上海'],
            checkboxGroup3: ['上海'],
     
            cities: cityOptions
          };
        }
      }
    <\/script>
              `,
      html7: `    <template>
      <div >
        <tb-checkbox v-model="checked3" label="备选项1" border size="medium">备选项1</tb-checkbox>
        <tb-checkbox v-model="checked4" label="备选项2" border size="medium">备选项2</tb-checkbox>
      </div>
      <div style="margin-top: 20px">
        <tb-checkbox-group v-model="checkboxGroup1" size="small">
          <tb-checkbox label="备选项1" border>备选项1</tb-checkbox>
          <tb-checkbox label="备选项2" border disabled>备选项2</tb-checkbox>
        </tb-checkbox-group>
      </div>
      <div style="margin-top: 20px">
        <tb-checkbox-group v-model="checkboxGroup2" size="mini" disabled>
          <tb-checkbox label="备选项1" border>备选项1</tb-checkbox>
          <tb-checkbox label="备选项2" border>备选项2</tb-checkbox>
        </tb-checkbox-group>
      </div>
    </template>

    <script>
      export default {
        data () {
          return {
            checked1: true,
            checked2: false,
            checked3: false,
            checked4: true,
            checkboxGroup1: [],
            checkboxGroup2: []
          };
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
    handleCheckAllChange(val) {
      this.checkedCities = val ? cityOptions : [];
      this.isIndeterminate = false;
    },
    handleCheckedCitiesChange(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.cities2.length;
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities2.length;
    },
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
.tb-link {
  margin: 5px;
}
</style>
