<!--
 * @Author: your name
 * @Date: 2021-05-27 16:29:34
 * @LastEditTime: 2021-06-22 15:32:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/packages/tbPagination/main.vue
--><template>
  <ul :class="simpleWrapClasses" :style="styles" v-if="simple">
    <li title="上一页" :class="prevClasses" @click="prev">
      <a><i class="iconfont icon-arrow-left-bold"></i></a>
    </li>
    <li :class="simplePagerClasses" :title="currentPage + '/' + allPages"><label>
      <input
          type="text"
          :value="currentPage"
          autocomplete="off"
          spellcheck="false"
          @keydown="keyDown"
          @keyup="keyUp"
          @change="keyUp">
    </label>
      <span>/</span>
      {{ allPages }}
    </li>
    <li title="下一页" :class="nextClasses" @click="next">
      <a><i class="iconfont icon-arrow-right-bold"></i></a>
    </li>
  </ul>
  <ul :class="wrapClasses" :style="styles" v-else>
    <li v-if="showTotal" :class="[prefixCls + '-total']">
        <span>
            <slot>共 {{ total }} 条</slot>
        </span>
    </li>
    <li title="上一页" :class="prevClasses" @click="prev">
      <a>
        <template v-if="prevText !== ''">{{ prevText }}</template>
        <i v-else class="iconfont icon-arrow-left-bold"></i></a>
    </li>
    <li title="1" :class="firstPageClasses" @click="changePage(1)"><a>1</a></li>
    <li title="向前5页" v-if="currentPage > 5" :class="[prefixCls + '-item-jump-prev']" @click="fastPrev">
      <a><i class="iconfont icon-arrow-double-left"></i></a>
    </li>
    <li :title="currentPage - 3" v-if="currentPage === 5" :class="[prefixCls + '-item']"
        @click="changePage(currentPage - 3)">
      <a>{{ currentPage - 3 }}</a>
    </li>
    <li :title="currentPage - 2" v-if="currentPage - 2 > 1" :class="[prefixCls + '-item']"
        @click="changePage(currentPage - 2)">
      <a>{{ currentPage - 2 }}</a>
    </li>
    <li :title="currentPage - 1" v-if="currentPage - 1 > 1" :class="[prefixCls + '-item']"
        @click="changePage(currentPage - 1)">
      <a>{{ currentPage - 1 }}</a>
    </li>
    <li :title="currentPage" v-if="currentPage !== 1 && currentPage !== allPages"
        :class="[prefixCls + '-item',prefixCls + '-item-active']">
      <a>{{ currentPage }}</a>
    </li>
    <li :title="currentPage + 1" v-if="currentPage + 1 < allPages" :class="[prefixCls + '-item']"
        @click="changePage(currentPage + 1)">
      <a>{{ currentPage + 1 }}</a>
    </li>
    <li :title="currentPage + 2" v-if="currentPage + 2 < allPages" :class="[prefixCls + '-item']"
        @click="changePage(currentPage + 2)">
      <a>{{ currentPage + 2 }}</a>
    </li>
    <li :title="currentPage + 3" v-if="allPages - currentPage === 4" :class="[prefixCls + '-item']"
        @click="changePage(currentPage + 3)">
      <a>{{ currentPage + 3 }}</a>
    </li>
    <li title="向后5页" v-if="allPages - currentPage >= 5" :class="[prefixCls + '-item-jump-next']"
        @click="fastNext">
      <a><i class="iconfont icon-arrow-double-right"></i></a>
    </li>
    <li :title="allPages" v-if="allPages > 1" :class="lastPageClasses" @click="changePage(allPages)">
      <a>{{ allPages }}</a>
    </li>
    <li title="下一页" :class="nextClasses" @click="next">
      <a>
        <template v-if="nextText !== ''">{{ nextText }}</template>
        <i v-else class="iconfont icon-arrow-right-bold"></i></a>
    </li>
    <options
        :show-sizer="showSizer"
        :page-size="currentPageSize"
        :page-size-opts="pageSizeOpts"
        :placement="placement"
        :transfer="transfer"
        :show-elevator="showElevator"
        :current="currentPage"
        :all-pages="allPages"
        :is-small="isSmall"
        @size="onSize"
        @page="onPage">
    </options>
  </ul>
</template>
<script>
import { oneOf } from '../utils/utils'
import Options from './options.vue'

const prefixCls = 'tb-page'

export default {
  name: 'tbPagination',
  components: { Options },
  props: {
    current: {
      type: Number,
      default: 1
    },
    total: {
      type: Number,
      default: 0
    },
    pageSize: {
      type: Number,
      default: 10
    },
    pageSizeOpts: {
      type: Array,
      default() {
        return [10, 20, 30, 40]
      }
    },
    placement: {
      validator(value) {
        return oneOf(value, ['top', 'bottom'])
      },
      default: 'bottom'
    },
    transfer: Boolean,
    size: {
      validator(value) {
        return oneOf(value, ['mini'])
      }
    },
    simple: {
      type: Boolean,
      default: false
    },
    showTotal: {
      type: Boolean,
      default: false
    },
    showElevator: {
      type: Boolean,
      default: false
    },
    showSizer: {
      type: Boolean,
      default: false
    },
    className: {
      type: String
    },
    styles: {
      type: Object
    },
    prevText: {
      type: String,
      default: ''
    },
    nextText: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      prefixCls: prefixCls,
      currentPage: this.current,
      currentPageSize: this.pageSize
    }
  },
  watch: {
    total(val) {
      let maxPage = Math.ceil(val / this.currentPageSize)
      if (maxPage < this.currentPage) {
        this.currentPage = (maxPage === 0 ? 1 : maxPage)
      }
    },
    current(val) {
      this.currentPage = val
    },
    pageSize(val) {
      this.currentPageSize = val
    }
  },
  computed: {
    isSmall() {
      return !!this.size
    },
    allPages() {
      const allPage = Math.ceil(this.total / this.currentPageSize)
      return (allPage === 0) ? 1 : allPage
    },
    simpleWrapClasses() {
      return [
        `${prefixCls}`,
        `${prefixCls}-simple`,
        {
          [`${this.className}`]: !!this.className
        }
      ]
    },
    simplePagerClasses() {
      return `${prefixCls}-simple-pager`
    },
    wrapClasses() {
      return [
        `${prefixCls}`,
        {
          [`${this.className}`]: !!this.className,
          'mini': !!this.size
        }
      ]
    },
    prevClasses() {
      return [
        `${prefixCls}-prev`,
        {
          [`${prefixCls}-disabled`]: this.currentPage === 1,
          [`${prefixCls}-custom-text`]: this.prevText !== ''
        }
      ]
    },
    nextClasses() {
      return [
        `${prefixCls}-next`,
        {
          [`${prefixCls}-disabled`]: this.currentPage === this.allPages,
          [`${prefixCls}-custom-text`]: this.nextText !== ''
        }
      ]
    },
    firstPageClasses() {
      return [
        `${prefixCls}-item`,
        {
          [`${prefixCls}-item-active`]: this.currentPage === 1
        }
      ]
    },
    lastPageClasses() {
      return [
        `${prefixCls}-item`,
        {
          [`${prefixCls}-item-active`]: this.currentPage === this.allPages
        }
      ]
    }
  },
  methods: {
    changePage(page) {
      if (this.currentPage !== page) {
        this.currentPage = page
        this.$emit('update:current', page)
        this.$emit('change', page)
      }
    },
    prev() {
      const current = this.currentPage
      if (current <= 1) {
        return false
      }
      this.changePage(current - 1)
    },
    next() {
      const current = this.currentPage
      if (current >= this.allPages) {
        return false
      }
      this.changePage(current + 1)
    },
    fastPrev() {
      const page = this.currentPage - 5
      if (page > 0) {
        this.changePage(page)
      } else {
        this.changePage(1)
      }
    },
    fastNext() {
      const page = this.currentPage + 5
      if (page > this.allPages) {
        this.changePage(this.allPages)
      } else {
        this.changePage(page)
      }
    },
    onSize(pageSize) {
      this.currentPageSize = pageSize
      this.$emit('size-change', pageSize)
      this.changePage(1)
    },
    onPage(page) {
      this.changePage(page)
    },
    keyDown(e) {
      const key = e.keyCode
      const condition = (key >= 48 && key <= 57) || (key >= 96 && key <= 105) || key === 8 || key === 37 || key === 39

      if (!condition) {
        e.preventDefault()
      }
    },
    keyUp(e) {
      const key = e.keyCode
      const val = parseInt(e.target.value)

      if (key === 38) {
        this.prev()
      } else if (key === 40) {
        this.next()
      } else if (key === 13) {
        let page = 1

        if (val > this.allPages) {
          page = this.allPages
        } else if (val <= 0 || !val) {
          page = 1
        } else {
          page = val
        }

        e.target.value = page
        this.changePage(page)
      }
    }
  }
}
</script>
<style lang="less">
.tb-page {
  color: rgba(0, 0, 0, .65);
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5715;
  &:after {
    content: '';
    display: block;
    height: 0;
    clear: both;
    overflow: hidden;
    visibility: hidden;
  }
  &-item {
    display: inline-block;
    box-sizing: border-box;
    vertical-align: middle;
    min-width: 32px;
    height: 32px;
    line-height: 30px;
    margin-right: 4px;
    text-align: center;
    list-style: none;
    background-color: #ffffff;
    user-select: none;
    cursor: pointer;
    font-family: Arial;
    border: 1px solid #d9d9d9;
    border-radius: 2px;
    transition: border 0.2s ease-in-out, color 0.2s ease-in-out;
    a {
      font-family: Monospaced Number;
      margin: 0 6px;
      text-decoration: none;
      color: rgba(0, 0, 0, .65);
    }
    &:hover {
      border-color: #1089ff;
      a {
        color: #1089ff;
      }
    }
    &-active {
      border-color: #1089ff;
      a, &:hover a {
        color: #1089ff;
      }
    }
  }
  &-item-jump-prev, &-item-jump-next {
    margin-right: 4px;
    &:after {
      content: "•••";
      display: block;
      letter-spacing: 1px;
      color: rgba(0, 0, 0, .25);
      text-align: center;
    }
    i {
      display: none;
    }
    &:hover {
      &:after {
        display: none;
      }
      i {
        display: inline;
        font-size: rgba(0, 0, 0, .25);
      }
    }
  }

  &-prev {
    margin-right: 4px;
  }
  &-prev, &-next, &-item-jump-prev, &-item-jump-next {
    display: inline-block;
    vertical-align: middle;
    user-select: none;
    min-width: 32px;
    height: 32px;
    line-height: 30px;
    list-style: none;
    text-align: center;
    cursor: pointer;
    color: #666;
    font-family: Arial;
    border: 1px solid #d9d9d9;
    border-radius: 2px;
    transition: all 0.2s ease-in-out;
  }

  &-item-jump-prev, &-item-jump-next {
    border-color: transparent;
  }
  &-item-jump-prev:hover a, &-item-jump-next:hover a {
    color: #1089ff;
  }

  &-prev, &-next {
    background-color: #ffffff;
    padding: 0 5px;
    a {
      color: rgba(0, 0, 0, .45);
      font-size: 14px;
      display: inline-flex;
      align-items: center;
      height: 100%;
      .iconfont {
        font-size: 14px;
      }
    }
    &:hover {
      border-color: #1089ff;
      a {
        color: #1089ff;
      }
    }
  }

  &-disabled {
    cursor: not-allowed;
    a {
      color: rgba(0, 0, 0, .25);
    }
    &:hover {
      border-color: #dcdee2;
      a {
        color: rgba(0, 0, 0, .25);
        cursor: not-allowed;
      }
    }
  }
  &-options {
    display: inline-block;
    vertical-align: middle;
    margin-left: 15px;
    &-sizer {
      display: inline-block;
      margin-right: 10px;
    }
    &-elevator {
      display: inline-block;
      vertical-align: middle;
      height: 32px;
      line-height: 30px;
      input {
        display: inline-block;
        margin: 0 8px;
        width: 50px;
        height: 32px;
        line-height: 1.5;
        padding: 0 11px;
        font-size: 14px;
        border: 1px solid #d9d9d9;
        border-radius: 2px;
        color: rgba(0, 0, 0, .65);
        background-color: #ffffff;
        background-image: none;
        position: relative;
        cursor: text;
        transition: border 0.2s ease-in-out, background 0.2s ease-in-out, box-shadow 0.2s ease;
        // placeholder()
        &:focus, &:hover {
          border-color: #1089ff;
        }
        &:focus {
          outline: 0;
          // box-shadow: 0 0 0 2px $color-input-shadow;
        }
      }
    }
  }
  &-total {
    display: inline-block;
    height: 32px;
    line-height: 32px;
    margin-right: 10px;
    font-size: 14px;
  }
  &-simple &-prev, &-simple &-next {
    margin: 0;
    border: 0;
    height: 24px;
    line-height: normal;
    font-size: 18px;
  }

  &-simple &-simple-pager {
    display: inline-block;
    margin-right: 8px;
    vertical-align: middle;
    input {
      width: 30px;
      height: 24px;
      margin: 0 8px;
      padding: 5px 8px;
      text-align: center;
      box-sizing: border-box;
      background-color: #ffffff;
      outline: none;
      border: 1px solid #d9d9d9;
      border-radius: 2px;
      transition: border 0.2s ease-in-out, background 0.2s ease-in-out, box-shadow 0.2s ease;
      &:hover {
        border-color: #1089ff;
      }
    }
    span {
      padding: 0 8px 0 2px;
    }
  }
}

//  mini模式
.tb-page {
  &.mini &-total {
    height: 24px;
    line-height: 24px;
  }
  &.mini &-item {
    border-color: transparent;
    margin: 0;
    min-width: 24px;
    height: 24px;
    line-height: 23px;
    border-radius: 2px;
    &-active {
      border-color: #1089ff;
    }
  }
  &.mini &-prev, &.mini &-next {
    margin: 0;
    min-width: 24px;
    height: 24px;
    line-height: 22px;
    border: 0;
    a {
      i {
        vertical-align: middle;
      }
    }
  }
  &.mini &-item-jump-prev, &.mini &-item-jump-next {
    height: 24px;
    line-height: 24px;
    border: none;
    margin-right: 0;
  }
  &.mini &-options {
    margin-left: 8px;
    &-elevator {
      height: 24px;
      line-height: 24px;
      input {
        height: 24px;
        width: 44px;
      }
    }
  }
}
</style>