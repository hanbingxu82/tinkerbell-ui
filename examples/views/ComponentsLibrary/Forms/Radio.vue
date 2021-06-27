<!--
 * @Author: your name
 * @Date: 2021-06-27 15:45:46
 * @LastEditTime: 2021-06-27 17:36:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/examples/views/ComponentsLibrary/Forms/Radio.vue
-->

<template>
  <div>
    <h2
      id="radio-dan-xuan-kuang"
      style='box-sizing: border-box; margin: 0px; padding: 10px 0px; font-size: 28px; font-weight: 400; color: rgb(31, 47, 61); border-bottom: 1px solid rgb(197, 217, 232); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#radio-dan-xuan-kuang" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;Radio 单选框
    </h2>

    <h3
      id="ji-chu-yong-fa"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#ji-chu-yong-fa" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;基础用法
    </h3>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      基本组件-单选框。主要用于一组可选项单项选择，或者单独用于切换到选中状态。
    </p>
    <p>
      <br />
    </p>
    <Demo>
      要使用 Radio 组件，只需要设置v-model绑定变量，选中意味着变量的值为相应 Radio label属性的值，label可以是String、Number或Boolean。
      <div slot="source">
        <tb-radio v-model="radios" label="1">备选项</tb-radio>
        <tb-radio v-model="radios" label="2">备选项</tb-radio>
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
      单选框不可用的状态。
    </p>
    <p>
      <br />
    </p>

    <Demo>
      只要在tb-radio元素中设置disabled属性即可，它接受一个Boolean，true为禁用。
      <div slot="source">
        <div>
          <tb-radio disabled v-model="radioBoolean" label="禁用">备选项</tb-radio>
          <tb-radio disabled v-model="radioBoolean" label="选中且禁用">备选项</tb-radio>
        </div>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html2">
        </code>
      </pre>
    </Demo>
    <h3
      id="dan-xuan-kuang-zu"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#dan-xuan-kuang-zu" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;单选框组
    </h3>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      适用于在多个互斥的选项中选择的场景
    </p>
    <p>
      <br />
    </p>

    <Demo>
      结合tb-radio-group元素和子元素tb-radio可以实现单选组，在tb-radio-group中绑定v-model，在tb-radio中设置好label即可，无需再给每一个tb-radio绑定变量，另外，还提供了change事件来响应变化，它会传入一个参数value。
      <div slot="source">
        <div>
          <tb-radio-group v-model="radio">
            <tb-radio :label="3">备选项</tb-radio>
            <tb-radio :label="6">备选项</tb-radio>
            <tb-radio :label="9">备选项</tb-radio>
          </tb-radio-group>
        </div>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html3">
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
      按钮样式的单选组合。
    </p>
    <p>
      <br />
    </p>

    <Demo>
      只需要把tb-radio元素换成tb-radio-button元素即可，此外，Tinkerbell 还提供了size属性。
      <div slot="source">
        <div>
          <tb-radio-group v-model="radio2" size="medium">
            <tb-radio-button label="上海">上海</tb-radio-button>
            <tb-radio-button label="北京">北京</tb-radio-button>
            <tb-radio-button label="广州">广州</tb-radio-button>
            <tb-radio-button label="深圳">深圳</tb-radio-button>
          </tb-radio-group>
        </div>
        <div style="margin-top: 20px">
          <tb-radio-group v-model="radio3" size="small">
            <tb-radio-button label="上海">上海</tb-radio-button>
            <tb-radio-button disabled label="北京">北京</tb-radio-button>
            <tb-radio-button label="广州">广州</tb-radio-button>
            <tb-radio-button label="深圳">深圳</tb-radio-button>
          </tb-radio-group>
        </div>
        <div style="margin-top: 20px">
          <tb-radio-group v-model="radio4" disabled size="mini">
            <tb-radio-button label="上海">上海</tb-radio-button>
            <tb-radio-button label="北京">北京</tb-radio-button>
            <tb-radio-button label="广州">广州</tb-radio-button>
            <tb-radio-button label="深圳">深圳</tb-radio-button>
          </tb-radio-group>
        </div>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html4">
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
      带有边框的单选框。
    </p>
    <p>
      <br />
    </p>

    <Demo>
      设置border属性可以渲染为带有边框的单选框。
      <div slot="source">
        <div>
          <div>
            <tb-radio v-model="radio5" label="1" border size="medium">备选项1</tb-radio>
            <tb-radio v-model="radio5" label="2" border size="medium">备选项2</tb-radio>
          </div>
          <div style="margin-top: 20px">
            <tb-radio-group v-model="radio6" size="small">
              <tb-radio label="1" border>备选项1</tb-radio>
              <tb-radio label="2" border disabled>备选项2</tb-radio>
            </tb-radio-group>
          </div>
          <div style="margin-top: 20px">
            <tb-radio-group v-model="radio7" size="mini" disabled>
              <tb-radio label="1" border>备选项1</tb-radio>
              <tb-radio label="2" border>备选项2</tb-radio>
            </tb-radio-group>
          </div>
        </div>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html5">
        </code>
      </pre>
    </Demo>
    <h3
      id="rowRadio"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#rowRadio" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;Radio props
    </h3>
    <p>
      <br />
    </p>
    <tb-table-eazy :rows="rowRadio" :cols="col"></tb-table-eazy>
    <h3
      id="rowRadioEvent"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#rowRadioEvent" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;Radio events
    </h3>
    <p>
      <br />
    </p>
    <tb-table-eazy :rows="rowRadioEvent" :cols="colEvent"></tb-table-eazy>
    <h3
      id="rowRadioGroup"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#rowRadioGroup" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;RadioGroup props
    </h3>
    <p>
      <br />
    </p>
    <tb-table-eazy :rows="rowRadioGroup" :cols="col"></tb-table-eazy>
    <h3
      id="rowRadioGroupEvent"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#rowRadioGroupEvent" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;RadioGroup events
    </h3>
    <p>
      <br />
    </p>
    <tb-table-eazy :rows="rowRadioGroupEvent" :cols="colEvent"></tb-table-eazy>
    <h3
      id="rowRadioButton"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#rowRadioButton" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;RadioButton events
    </h3>
    <p>
      <br />
    </p>
    <tb-table-eazy :rows="rowRadioButton" :cols="col"></tb-table-eazy>

    <RightSmallNav :rightTitle="rightTitle" @goMeowPoint="goMeowPoint" />
  </div>
</template>

<script>
import useScroll from "../../../utils/mixins";
import RightSmallNav from "../../../components/RightSmallNav.vue";
export default {
  name: "Radio",
  components: { RightSmallNav },
  data() {
    return {
      //   定义当前传递过来的数据是所有类型的数据
      rightTitle: [
        { title: "Radio 单选框", id: "radio-dan-xuan-kuang" },
        { title: "基础用法", id: "ji-chu-yong-fa" },
        { title: "禁用状态", id: "jin-yong-zhuang-tai" },
        { title: "单选框组", id: "dan-xuan-kuang-zu" },
        { title: "按钮样式", id: "an-niu-yang-shi" },
        { title: "带有边框", id: "dai-you-bian-kuang" },
        { title: "Radio props", id: "rowRadio" },
        { title: "Radio events", id: "rowRadioEvent" },
        { title: "RadioGroup props", id: "rowRadioGroup" },
        { title: "RadioGroup events", id: "rowRadioGroupEvent" },
        { title: "RadioButton props", id: "rowRadioButton" },
      ],
      rowRadio: [
        {
          Parameters: "value / v-model",
          Explain: "绑定值",
          Types: "string / number / boolean",
          Optional: "-",
          Default: "-",
        },
        {
          Parameters: "label",
          Explain: "Radio 的 value",
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
          Explain: "Radio 的尺寸，仅在 border 为真时有效",
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
      ],
      rowRadioEvent: [
        {
          Parameters: "change",
          Explain: "绑定值变化时触发的事件",
          Callback: "选中的 Radio label 值",
        },
      ],
      rowRadioGroup: [
        {
          Parameters: "value / v-model",
          Explain: "绑定值",
          Types: "string / number / boolean",
          Optional: "-",
          Default: "-",
        },
        {
          Parameters: "size",
          Explain: "单选框组尺寸，仅对按钮形式的 Radio 或带有边框的 Radio 有效",
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
      ],
      rowRadioGroupEvent: [
        {
          Parameters: "change",
          Explain: "绑定值变化时触发的事件",
          Callback: "	选中的 Radio label 值",
        },
      ],
      rowRadioButton: [
        {
          Parameters: "label",
          Explain: "Radio 的 value",
          Types: "string / number",
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
      ],
      radios: "1",
      radioBoolean: "选中且禁用",
      radio: "3",
      radio1: "上海",
      radio2: "上海",
      radio3: "上海",
      radio4: "上海",
      radio5: "1",
      radio6: "1",
      radio7: "1",
      radio8: "1",

      html1: `    <template>
        <tb-radio v-model="radio" label="1">备选项</tb-radio>
        <tb-radio v-model="radio" label="2">备选项</tb-radio>
    </template>

    <script>
        export default {
            data () {
            return {
                radio: '1'
            };
            }
        }
    <\script>
              `,
      html2: `    <template>
        <tb-radio disabled v-model="radio" label="禁用">备选项</tb-radio>
        <tb-radio disabled v-model="radio" label="选中且禁用">备选项</tb-radio>
    </template>

    <script>
        export default {
            data () {
            return {
                radio: '选中且禁用'
            };
            }
        }
    <\/script>
              `,
      html3: `    <template>
        <tb-radio-group v-model="radio">
            <tb-radio :label="3">备选项</tb-radio>
            <tb-radio :label="6">备选项</tb-radio>
            <tb-radio :label="9">备选项</tb-radio>
        </tb-radio-group>
    </template>

    <script>
        export default {
            data () {
            return {
                radio: 3
            };
            }
        }
    <\/script>
              `,
      html4: `    <template>
        <div >
            <tb-radio-group v-model="radio2" size="medium">
                <tb-radio-button label="上海" >上海</tb-radio-button>
                <tb-radio-button label="北京">北京</tb-radio-button>
                <tb-radio-button label="广州">广州</tb-radio-button>
                <tb-radio-button label="深圳">深圳</tb-radio-button>
            </tb-radio-group>
        </div>
        <div style="margin-top: 20px">
            <tb-radio-group v-model="radio3" size="small">
                <tb-radio-button label="上海">上海</tb-radio-button>
                <tb-radio-button label="北京" disabled >北京</tb-radio-button>
                <tb-radio-button label="广州">广州</tb-radio-button>
                <tb-radio-button label="深圳">深圳</tb-radio-button>
            </tb-radio-group>
        </div>
        <div style="margin-top: 20px">
            <tb-radio-group v-model="radio4" disabled size="mini">
                <tb-radio-button label="上海">上海</tb-radio-button>
                <tb-radio-button label="北京">北京</tb-radio-button>
                <tb-radio-button label="广州">广州</tb-radio-button>
                <tb-radio-button label="深圳">深圳</tb-radio-button>
            </tb-radio-group>
        </div>
    </template>

    <script>
        export default {
            data () {
            return {
                radio1: '上海',
                radio2: '上海',
                radio3: '上海',
                radio4: '上海'
            };
            }
        }
    <\/script>
              `,
      html5: `    <template>
        <div >
            <tb-radio v-model="radio2" label="1" border size="medium">备选项1</tb-radio>
            <tb-radio v-model="radio2" label="2" border size="medium">备选项2</tb-radio>
        </div>
        <div style="margin-top: 20px">
            <tb-radio-group v-model="radio3" size="small">
            <tb-radio label="1" border>备选项1</tb-radio>
            <tb-radio label="2" border disabled>备选项2</tb-radio>
            </tb-radio-group>
        </div>
        <div style="margin-top: 20px">
            <tb-radio-group v-model="radio4" size="mini" disabled>
            <tb-radio label="1" border>备选项1</tb-radio>
            <tb-radio label="2" border>备选项2</tb-radio>
            </tb-radio-group>
        </div>
    </template>

    <script>
        export default {
            data () {
            return {
                radio1: '1',
                radio2: '1',
                radio3: '1',
                radio4: '1'
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
