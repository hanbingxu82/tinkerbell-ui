<!--
 * @Author: your name
 * @Date: 2021-06-22 16:16:36
 * @LastEditTime: 2021-06-30 13:54:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/packages/tbTableEazy/main.vue
-->
<template>
  <table :class="classy">
    <tr :class="[classy + '-row', '-header']">
      <th v-if="selectable" :class="[classy + '-cell', '-header', '-clickable']" @click.prevent="selectAll">
        <input type="checkbox" :class="[classy + '-select', '-all']" :checked="isSelectedAll" @click.stop="selectAll" />
      </th>

      <th v-for="(col, index) in cols" :key="index" :class="getClasses(index, 'header')" :style="getStyle(col)" :width="col.width || null" @click="$setSorter(index)">
        <span :class="classy + '-text'">{{ getText(col, "label") || empty }}</span>
        <slot  name="sort-icon" :sortment="sortment" :sorted="$isSorting(index)" :arrow="$getArrow(index)">
          <span v-show="isSort" :class="classy + '-icon'">{{ $getArrow(index) }}</span>
        </slot>
      </th>
    </tr>

    <tr v-for="(row, rowIndex) in $sortedRows" :key="rowIndex" :class="[classy + '-row', '-content']">
      <th v-if="selectable" :class="[classy + '-cell', '-content', '-clickable']" @click.prevent="select(row, $event)">
        <input type="checkbox" :class="[classy + '-select', '-all']" :checked="isSelected(row)" @click.stop="select(row, $event)" />
      </th>

      <slot name="row" :row="row" :index="rowIndex">
        <td v-for="(col, colIndex) in cols" :key="colIndex" :class="getClasses(colIndex, 'content')" :style="getStyle(col)" :width="col.width || null">
          <span :class="classy + '-text'">{{ getText(row, col.field) || empty }}</span>
        </td>
      </slot>
    </tr>
  </table>
</template>

<script>
import is from "./helpers/is";
import get from "./helpers/get";
import Alignable from "./mixins/Alignable";
import Selectable from "./mixins/Selectable";
import Sortable from "./mixins/Sortable";
import { isContent } from "./helpers/validators";
export default {
  name: "tbTableEazy",
  mixins: [Sortable(), Alignable(), Selectable()],
  props: {
    /**
     * 列头
     */
    cols: {
      type: Array,
      required: true,
      validator: isContent,
    },
    /**
     * 内容
     */
    rows: {
      type: Array,
      required: true,
      validator: isContent,
    },
    // 是否展示排序
    isSort: { type: Boolean, default: false },
    /**
     * 空单元格的字符。
     */
    empty: {
      type: String,
      default: "",
    },
    // selectable 复选框
    // sortExternal 不触发默认排序功能
    // @sort事件 column:Col, sortment:('ascending  升序'|'descending  降序')  排序触发事件  column是触发列，sortment是判断当前升还是降序
    // @select事件   arr 数组对应选取列数据

    // col:[
    // {
    //   label: "Birth Date", // 表格头名称
    //   align: "center", // 文本对齐方式 'center' | 'right' | 'left'
    //   hidden:false,// 是否隐藏列
    //   field: "birth_date", // 字段对应数组规则
    //   sort: (a, b) => new Date(a).getTime() - new Date(b).getTime(), // 排序规则
    //   headerClass:'reddddddd', // 表格头class
    //   contentClass:'reddddddd' // 表格列内容class
    // }]
  },
  data() {
    return {
      classy: "tb-table-eazy",
    };
  },
  methods: {
    /**
     * Get cell's classes.
     * @param {number} index
     * @param {('header'|'content')} type
     * @returns {(string|Object.<string, boolean>)[]}
     */
    getClasses(index, type) {
      const custom = this.cols[index][type + "Class"];
      const classes = [custom, "-" + type, this.classy + "-cell", this.$getSortClasses(index), "-" + this.$getAlignment(index)];
      return classes;
    },
    /**
     * Get cell's styles.
     * @param {{ hidden: boolean, align: align }} col
     * @returns {CSSStyleDeclaration}
     */
    getStyle(col) {
      const style = {
        textAlign: col.align || this.align,
        display: col.hidden ? "none" : undefined,
      };
      return style;
    },
    /**
     * Get value's label.
     * @param {*} value
     * @param {string} path
     * @returns {string}
     */
    getText: get,
  },
  /**
   * Install DataTablee components.
   * @param {Vue} Vue
   * @param {{ name: string }} [options]
   */
  // install (Vue, { name = 'tb-table-eazy' } = {}) {
  //   Vue.component(name, this)
  // }
};
</script>

<style lang="less">
//   @import url('https://fonts.googleapis.com/css?family=Nunito+Sans:400,700');
/* vietnamese */
@font-face {
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 400;
  src: url("../assets/woff2/woff_table01.woff2") format("woff2");
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 400;
  src: url("../assets/woff2/woff_table02.woff2") format("woff2");
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 400;
  src: url("../assets/woff2/woff_table03.woff2") format("woff2");
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* vietnamese */
@font-face {
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 700;
  src: url("../assets/woff2/woff_table04.woff2") format("woff2");
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 700;
  src: url("../assets/woff2/woff_table05.woff2") format("woff2");
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 700;
  src: url("../assets/woff2/woff_table06.woff2") format("woff2");
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
.tb-table-eazy {
  width: 100%;
  overflow: hidden;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  border-spacing: 0;
}
.tb-table-eazy-cell {
  position: relative;
  min-height: calc(27px + 4px);
  padding: 18px;
  border-top: 1px solid #d9d9d9;
  .tb-table-eazy-row:first-child > & {
    border-top: 0;
  }
  &::before {
    position: absolute;
    left: 0;
    top: 50%;
    display: block;
    width: 1px;
    height: 27px;
    background-color: #d9d9d9;
    transform: translateY(-50%);
    content: "";
  }
  &:first-child::before {
    content: none;
  }
  &.-right {
    text-align: right;
  }
  &.-left {
    text-align: left;
  }
  &.-center {
    text-align: center;
  }
  &.-clickable {
    cursor: pointer;
  }
}
.tb-table-eazy-text {
  font-size: 13px;
  font-family: "Nunito Sans", sans-serif;
  font-weight: 400;
  color: #5e6684;
}
.tb-table-eazy-cell.-header {
  background-color: #fafafa;
  & > .tb-table-eazy-text,
  & > .tb-table-eazy-icon {
    display: inline-block;
    font-size: 12px;
    font-family: "Nunito Sans", sans-serif;
    font-weight: 700;
    text-transform: uppercase;
    color: rgba(0, 0, 0, 0.65);
  }
  & > .tb-table-eazy-icon {
    opacity: 0;
    transition: opacity 0.3s ease, transform 0.3s ease;
  }
  &.-sortable {
    cursor: pointer;
    & > .tb-table-eazy-icon {
      opacity: 0.6;
    }
    &:hover > .tb-table-eazy-icon {
      opacity: 0.9;
    }
    &:active > .tb-table-eazy-icon {
      transition: transform 0.1s ease;
      transform: scale(1.5);
    }
    &.-right {
      padding-right: 6px;
    }
  }
  &.-sorting > .tb-table-eazy-icon {
    opacity: 1;
  }
}
.tb-table-eazy-text {
  line-height: 1;
}
</style>
