<!--
 * @Author: your name
 * @Date: 2021-06-30 13:36:43
 * @LastEditTime: 2021-07-01 10:11:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/examples/views/ComponentsLibrary/Datas/Page.vue
-->

<template>
  <div>
    <h2
      id="Pagination-fen-ye"
      style='box-sizing: border-box; margin: 0px; padding: 10px 0px; font-size: 28px; font-weight: 400; color: rgb(31, 47, 61); border-bottom: 1px solid rgb(197, 217, 232); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#Pagination-fen-ye" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;Pagination 分页
    </h2>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      当数据量过多时，使用分页分解数据。
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
      分页的基本用法
    </p>
    <p>
      <br />
    </p>
    <Demo>
      <div slot="source">
        <div>
          基本分页
        </div>
        <tb-pagination :total="100" :current.sync="current"></tb-pagination>
        <div style="margin-top:20px;">
          每页数量
        </div>
        <tb-pagination :total="100" show-sizer></tb-pagination>
        <div style="margin-top:20px;">
          快捷跳转
        </div>
        <tb-pagination :total="100" show-elevator></tb-pagination>
        <div style="margin-top:20px;">
          总数
        </div>
        <tb-pagination :total="100" show-total></tb-pagination>
        <div style="margin-top:20px;">
          自定义文本
        </div>
        <tb-pagination :total="40" prev-text="上一页" next-text="下一页"></tb-pagination>
        <div style="margin-top:20px;">
          简洁模式
        </div>
        <tb-pagination :current="2" :total="50" simple></tb-pagination>
        <div style="margin-top:20px;">
          完整类型
        </div>
        <tb-pagination size="mini" @change="handleCurrentChange" @size-change="handleSizeChange" :total="100" show-elevator show-sizer show-total></tb-pagination>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html1">
        </code>
      </pre>
    </Demo>
    <h3
      id="rowPagination"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#rowPagination" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;Pagination props
    </h3>
    <p>
      <br />
    </p>
    <tb-table-eazy :rows="rowPagination" :cols="col"></tb-table-eazy>
    <h3
      id="rowPaginationEvent"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#rowPagination" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;Pagination events
    </h3>
    <p>
      <br />
    </p>
    <tb-table-eazy :rows="rowPaginationEvent" :cols="colEvent"></tb-table-eazy>
    <h3
      id="rowPaginationSlot"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#rowPaginationSlot" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;Pagination slots
    </h3>
    <p>
      <br />
    </p>
    <tb-table-eazy :rows="rowPaginationSlot" :cols="colSlot"></tb-table-eazy>
    <RightSmallNav :rightTitle="rightTitle" @goMeowPoint="goMeowPoint" />
  </div>
</template>

<script>
import useScroll from "../../../utils/mixins";
import RightSmallNav from "../../../components/RightSmallNav.vue";
export default {
  name: "Pagination",
  components: { RightSmallNav },
  data() {
    return {
      current: 2,
      rowPagination: [
        {
          Parameters: "current",
          Explain: "当前页码 支持.sync修饰",
          Types: "Number",
          Optional: "-",
          Default: "1",
        },

        {
          Parameters: "total",
          Explain: "数据总数",
          Types: "Number",
          Optional: "-",
          Default: "0",
        },
        {
          Parameters: "page-size",
          Explain: "每页条数",
          Types: "Number",
          Optional: "-",
          Default: "10",
        },
        {
          Parameters: "page-size-opts",
          Explain: "每页条数切换的配置",
          Types: "Array",
          Optional: "-",
          Default: "[10, 20, 30, 40]",
        },
        {
          Parameters: "placement",
          Explain: "条数切换弹窗的展开方向",
          Types: "String",
          Optional: "bottom 和 top",
          Default: "bottom",
        },
        {
          Parameters: "size",
          Explain: "可选值为mini（迷你版）或不填（默认）",
          Types: "String",
          Optional: "-",
          Default: "-",
        },
        {
          Parameters: "simple",
          Explain: "简洁版",
          Types: "Boolean",
          Optional: "-",
          Default: "false",
        },
        {
          Parameters: "show-total",
          Explain: "显示总数",
          Types: "Boolean",
          Optional: "-",
          Default: "false",
        },

        {
          Parameters: "show-elevator",
          Explain: "显示快捷跳转，可以快速切换到某一页",
          Types: "Boolean",
          Optional: "-",
          Default: "false",
        },
        {
          Parameters: "show-sizer",
          Explain: "显示分页，用来改变page-size",
          Types: "Boolean",
          Optional: "-",
          Default: "false",
        },
        {
          Parameters: "class-name",
          Explain: "自定义 class 名称",
          Types: "String",
          Optional: "-",
          Default: "-",
        },
        {
          Parameters: "styles",
          Explain: "自定义 style 样式",
          Types: "Object",
          Optional: "-",
          Default: "-",
        },
        {
          Parameters: "prev-text",
          Explain: "替代图标显示的上一页文字",
          Types: "String",
          Optional: "-",
          Default: "-",
        },
        {
          Parameters: "next-text",
          Explain: "替代图标显示的下一页文字",
          Types: "String",
          Optional: "-",
          Default: "-",
        },
      ],
      rowPaginationEvent: [
        {
          Parameters: "change",
          Explain: "页码改变的回调，返回改变后的页码",
          Callback: "页码",
        },
        {
          Parameters: "size-change",
          Explain: "切换每页条数时的回调，返回切换后的每页条数",
          Callback: "page-size",
        }
      ],
      rowPaginationSlot: [
        {
          Parameters: "default",
          Explain: "自定义显示总数的内容",
        },
      ],
      html1: `    <template>
        <div>
            <div>
            基本分页
            </div>
            <tb-pagination :total="100" :current.sync="current"></tb-pagination>
            <div>
            每页数量
            </div>
            <tb-pagination :total="100" show-sizer></tb-pagination>
            <div>
            快捷跳转
            </div>
            <tb-pagination :total="100" show-elevator></tb-pagination>
            <div>
            总数
            </div>
            <tb-pagination :total="100" show-total></tb-pagination>
            <div>
            自定义文本
            </div>
            <tb-pagination :total="40" prev-text="上一页" next-text="下一页"></tb-pagination>
            <div>
            简洁模式
            </div>
            <tb-pagination :current="2" :total="50" simple></tb-pagination>
            <div>
            完整类型
            </div>
            <tb-pagination size="mini" @change="handleCurrentChange" @size-change="handleSizeChange" :total="100" show-elevator show-sizer show-total></tb-pagination>
        </div>
    </template>

    <script>
        export default {
            methods: {
                handleSizeChange(val) {
                    console.log('每页'+val+'条');
                },
                handleCurrentChange(val) {
                    console.log('当前页:'+val);
                },
            },
        }
    <\/script>
              `,
      //   定义当前传递过来的数据是所有类型的数据
      rightTitle: [
        { title: "Pagination 分页", id: "Pagination-fen-ye" },
        { title: "基础用法", id: "ji-chu-yong-fa" },
        { title: "Pagination props", id: "rowPagination" },
        { title: "Pagination events", id: "rowPaginationEvent" },
        { title: "Pagination slots", id: "rowPaginationSlot" },
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

    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
  },
};
</script>
<style lang="less" scoped></style>
