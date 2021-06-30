<!--
 * @Author: your name
 * @Date: 2021-06-30 13:36:16
 * @LastEditTime: 2021-06-30 14:52:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/examples/views/ComponentsLibrary/Datas/Table.vue
-->

<template>
  <div>
    <h2
      id="table-eazy-biao-ge"
      style='box-sizing: border-box; margin: 0px; padding: 10px 0px; font-size: 28px; font-weight: 400; color: rgb(31, 47, 61); border-bottom: 1px solid rgb(197, 217, 232); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#table-eazy-biao-ge" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;TableEazy 表格
    </h2>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      用于展示多条结构类似的数据，可对数据进行排序、筛选、对比或其他自定义操作。
    </p>
    <h3
      id="ji-chu-biao-ge"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#ji-chu-biao-ge" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;基础表格
    </h3>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      基础的表格展示用法。
    </p>
    <p>
      <br />
    </p>
    <Demo>
      <div slot="source">
        <tb-table-eazy :rows="tableData" :cols="tableCol"></tb-table-eazy>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html1">
        </code>
      </pre>
    </Demo>
    <h3
      id="duo-xuan-biao-ge"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#duo-xuan-biao-ge" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;多选表格
    </h3>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      选择多行数据时使用 selectable。
    </p>
    <p>
      <br />
    </p>

    <Demo>
      <div slot="source">
        <tb-table-eazy @select="selectMethod" selectable :rows="tableData" :cols="tableCol"></tb-table-eazy>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html2">
        </code>
      </pre>
    </Demo>
    <h3
      id="pai-xu-biao-ge"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#pai-xu-biao-ge" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;排序表格
    </h3>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      进行表格列的排序。
    </p>
    <p>
      <br />
    </p>

    <Demo>
      <div slot="source">
        <tb-table-eazy @sort="sortMethod" is-sort :rows="tableData" :cols="tableCol1"></tb-table-eazy>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html3">
        </code>
      </pre>
    </Demo>
    <h3
      id="rowTableEazy"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#rowTableEazy" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;TableEazy props
    </h3>
    <p>
      <br />
    </p>
    <tb-table-eazy :rows="rowTableEazy" :cols="col"></tb-table-eazy>
    <h3
      id="rowTableEazyEvent"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#rowTableEazyEvent" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;TableEazy Events
    </h3>
    <p>
      <br />
    </p>
    <tb-table-eazy :rows="rowTableEazyEvent" :cols="colEvent"></tb-table-eazy>
    <h3
      id="ColTableEazy"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#ColTableEazy" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;ColTableEazy props
    </h3>
    <p>
      <br />
    </p>
    <tb-table-eazy :rows="ColTableEazy" :cols="col"></tb-table-eazy>
    <RightSmallNav :rightTitle="rightTitle" @goMeowPoint="goMeowPoint" />
  </div>
</template>

<script>
import useScroll from "../../../utils/mixins";
import RightSmallNav from "../../../components/RightSmallNav.vue";
export default {
  name: "TableEazy",
  components: { RightSmallNav },
  data() {
    return {
      tableCol: [
        {
          label: "姓名",
          align: "center",
          field: "name",
        },
        {
          label: "年龄",
          align: "center",
          field: "age",
        },
        {
          label: "生日",
          align: "center",
          field: "birthday",
        },
        {
          label: "地址",
          align: "center",
          field: "address",
        },
      ],
      tableCol1: [
        {
          label: "姓名",
          align: "center",
          field: "name",
        },
        {
          label: "年龄",
          align: "center",
          field: "age",
          sort: true,
        },
        {
          label: "生日",
          align: "center",
          field: "birthday",
        },
        {
          label: "地址",
          align: "center",
          field: "address",
        },
      ],
      tableData: [
        {
          name: "王小帅",
          age: 24,
          birthday: "1998-05-20",
          address: "天津市南开区红旗南路1号",
        },
        {
          name: "王小帅",
          age: 25,
          birthday: "1997-05-20",
          address: "天津市南开区红旗南路2号",
        },
        {
          name: "王小帅",
          age: 26,
          birthday: "1996-05-20",
          address: "天津市南开区红旗南路3号",
        },
        {
          name: "王小帅",
          age: 27,
          birthday: "1995-05-20",
          address: "天津市南开区红旗南路4号",
        },
        {
          name: "王小帅",
          age: 28,
          birthday: "1994-05-20",
          address: "天津市南开区红旗南路5号",
        },
      ],
      rowTableEazy: [
        {
          Parameters: "cols",
          Explain: "列头数据列表",
          Types: "Array",
          Optional: "-",
          Default: "[]",
        },

        {
          Parameters: "rows",
          Explain: "展示信息数据列表",
          Types: "Array",
          Optional: "-",
          Default: "[]",
        },
        {
          Parameters: "align",
          Explain: "全局表格内容对齐方式",
          Types: "String",
          Optional: "center、right、left",
          Default: "left",
        },
        {
          Parameters: "empty",
          Explain: "如果对应单元格是空项 显示内容文本",
          Types: "String",
          Optional: "-",
          Default: "''",
        },
        {
          Parameters: "selectable",
          Explain: "是否新增选项进行多选",
          Types: "Boolean",
          Optional: "-",
          Default: "false",
        },
        {
          Parameters: "selectable",
          Explain: "是否新增选项进行多选",
          Types: "Boolean",
          Optional: "-",
          Default: "false",
        },
        {
          Parameters: "is-sort",
          Explain: "是否展示sort图标，子项设置sort后 需设置is-sort",
          Types: "Boolean",
          Optional: "-",
          Default: "false",
        },
        {
          Parameters: "sortExternal",
          Explain: "只改变排序和箭头。用于排序外部组件。",
          Types: "Boolean",
          Optional: "-",
          Default: "false",
        },
      ],
      rowTableEazyEvent: [
        {
          Parameters: "select",
          Explain: "在选择行（selectable选项）触发事件",
          Callback: "[...row]",
        },
        {
          Parameters: "sort",
          Explain: "排序时触发事件，可配合sortExternal进行手动排序",
          Callback: "(col, sortment:('ascending'|'descending'))",
        },
      ],
      ColTableEazy: [
        {
          Parameters: "label",
          Explain: "列头文本内容",
          Types: "String",
          Optional: "-",
          Default: "-",
        },

        {
          Parameters: "field",
          Explain: "表格列对应rows字段",
          Types: "String",
          Optional: "-",
          Default: "-",
        },
        {
          Parameters: "align",
          Explain: "单个表格内容对齐方式",
          Types: "String",
          Optional: "center、right、left",
          Default: "left",
        },
        {
          Parameters: "width",
          Explain: "表格列对应宽度",
          Types: "Number",
          Optional: "-",
          Default: "-",
        },
        {
          Parameters: "hidden",
          Explain: "是否隐藏当前列",
          Types: "Boolean",
          Optional: "-",
          Default: "false",
        },
        {
          Parameters: "headerClass",
          Explain: "列头class名称",
          Types: "String",
          Optional: "-",
          Default: "-",
        },
        {
          Parameters: "contentClass",
          Explain: "表格列class名称",
          Types: "String",
          Optional: "-",
          Default: "-",
        },
        {
          Parameters: "sort",
          Explain: "是否对当前列进行排序",
          Types: "Boolean、Function",
          Optional: "-",
          Default: "false",
        },
      ],
      html1: `    <template>
      <div >
          <tb-table-eazy :rows="tableData" :cols="tableCol"></tb-table-eazy>
      </div>
    </template>
    <script>
      export default {
        data() {
          return {
            tableCol: [
            {
              label: "姓名",
              align: "center",
              field: "name",
            },
            {
              label: "年龄",
              align: "center",
              field: "age",
            },
            {
              label: "生日",
              align: "center",
              field: "birthday",
            },
            {
              label: "地址",
              align: "center",
              field: "address",
            },
          ],
          tableData: [
            {
              name: "王小帅",
              age: 24,
              birthday: "1998-05-20",
              address: "天津市南开区红旗南路1号",
            },
            {
              name: "王小帅",
              age: 25,
              birthday: "1997-05-20",
              address: "天津市南开区红旗南路2号",
            },
            {
              name: "王小帅",
              age: 26,
              birthday: "1996-05-20",
              address: "天津市南开区红旗南路3号",
            },
            {
              name: "王小帅",
              age: 27,
              birthday: "1995-05-20",
              address: "天津市南开区红旗南路4号",
            },
            {
              name: "王小帅",
              age: 28,
              birthday: "1994-05-20",
              address: "天津市南开区红旗南路5号",
            },
          ],
          }
        }
      }
    <\/script>
              `,
      html2: `    <template>
      <div >
          <tb-table-eazy @select="selectMethod" selectable :rows="tableData" :cols="tableCol"></tb-table-eazy>
      </div>
    </template>
    <script>
      export default {
        data() {
          return {
            tableCol: [
            {
              label: "姓名",
              align: "center",
              field: "name",
            },
            {
              label: "年龄",
              align: "center",
              field: "age",
            },
            {
              label: "生日",
              align: "center",
              field: "birthday",
            },
            {
              label: "地址",
              align: "center",
              field: "address",
            },
          ],
          tableData: [
            {
              name: "王小帅",
              age: 24,
              birthday: "1998-05-20",
              address: "天津市南开区红旗南路1号",
            },
            {
              name: "王小帅",
              age: 25,
              birthday: "1997-05-20",
              address: "天津市南开区红旗南路2号",
            },
            {
              name: "王小帅",
              age: 26,
              birthday: "1996-05-20",
              address: "天津市南开区红旗南路3号",
            },
            {
              name: "王小帅",
              age: 27,
              birthday: "1995-05-20",
              address: "天津市南开区红旗南路4号",
            },
            {
              name: "王小帅",
              age: 28,
              birthday: "1994-05-20",
              address: "天津市南开区红旗南路5号",
            },
          ],
          }
        },
        methods:{
          selectMethod(cols) {
            console.log(cols);
          },
        }
      }
    <\/script>
              `,
      html3: `    <template>
      <div >
          <tb-table-eazy @sort="sortMethod"  :rows="tableData" :cols="tableCol"></tb-table-eazy>
      </div>
    </template>
    <script>
      export default {
        data() {
          return {
            tableCol: [
            {
              label: "姓名",
              align: "center",
              field: "name",
            },
            {
              label: "年龄",
              align: "center",
              field: "age",
              sort: true
            },
            {
              label: "生日",
              align: "center",
              field: "birthday",
            },
            {
              label: "地址",
              align: "center",
              field: "address",
            },
          ],
          tableData: [
            {
              name: "王小帅",
              age: 24,
              birthday: "1998-05-20",
              address: "天津市南开区红旗南路1号",
            },
            {
              name: "王小帅",
              age: 25,
              birthday: "1997-05-20",
              address: "天津市南开区红旗南路2号",
            },
            {
              name: "王小帅",
              age: 26,
              birthday: "1996-05-20",
              address: "天津市南开区红旗南路3号",
            },
            {
              name: "王小帅",
              age: 27,
              birthday: "1995-05-20",
              address: "天津市南开区红旗南路4号",
            },
            {
              name: "王小帅",
              age: 28,
              birthday: "1994-05-20",
              address: "天津市南开区红旗南路5号",
            },
          ],
          }
        },
        methods:{
          sortMethod(col,sortment){
            console.log(col,sortment)
          },
        }
      }
    <\/script>
              `,
      //   定义当前传递过来的数据是所有类型的数据
      rightTitle: [
        { title: "TableEazy 表格", id: "table-eazy-biao-ge" },
        { title: "基础表格", id: "ji-chu-biao-ge" },
        { title: "多选表格", id: "duo-xuan-biao-ge" },
        { title: "排序表格", id: "pai-xu-biao-ge" },
        { title: "TableEazy props", id: "rowTableEazy" },
        { title: "TableEazy events", id: "rowTableEazyEvent" },
        { title: "ColTableEazy props", id: "ColTableEazy" },
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
    selectMethod(cols) {
      console.log(cols);
    },
    sortMethod(col, sortment) {
      console.log(col, sortment);
    },
  },
};
</script>
<style lang="less" scoped>
.tb-link {
  margin: 5px;
}
</style>
