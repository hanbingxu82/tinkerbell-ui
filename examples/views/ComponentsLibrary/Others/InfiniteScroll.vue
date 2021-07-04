<!--
 * @Author: your name
 * @Date: 2021-07-02 17:27:18
 * @LastEditTime: 2021-07-04 15:53:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/examples/views/ComponentsLibrary/Others/InfiniteScroll.vue
-->

<template>
  <div>
    <h2
      id="infiniteScroll-wu-xian-gun-dong"
      style='box-sizing: border-box; margin: 0px; padding: 10px 0px; font-size: 28px; font-weight: 400; color: rgb(31, 47, 61); border-bottom: 1px solid rgb(197, 217, 232); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#infiniteScroll-wu-xian-gun-dong" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;InfiniteScroll 无限滚动
    </h2>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      滚动至底部时，加载更多数据。
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
      在要实现滚动加载的列表上上添加v-infinite-scroll，并赋值相应的加载方法，可实现滚动到底部时自动执行加载方法。
    </p>
    <p>
      <br />
    </p>
    <Demo>
      <div slot="source">
        <ul class="infinite-list" v-infinite-scroll="load" style="overflow:auto">
          <li v-for="i in count" class="infinite-list-item">{{ i }}</li>
        </ul>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html1">
        </code>
      </pre>
    </Demo>
    <h3
      id="jin-yong-jia-zai"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#jin-yong-jia-zai" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;禁用加载
    </h3>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      禁止滚动加载
    </p>
    <p>
      <br />
    </p>
    <Demo>
      <div slot="source">
        <div class="infinite-list-wrapper" style="overflow:auto">
          <ul class="list" v-infinite-scroll="load1" infinite-scroll-disabled="disabled">
            <li v-for="i in count1" class="list-item">{{ i }}</li>
          </ul>
          <p v-if="loading">加载中...</p>
          <p v-if="noMore">没有更多了</p>
        </div>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html2">
        </code>
      </pre>
    </Demo>

    <h3
      id="rowInfiniteScroll"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#rowInfiniteScroll" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;InfiniteScroll props
    </h3>
    <p>
      <br />
    </p>

    <tb-table-eazy :rows="rowInfiniteScroll" :cols="col"></tb-table-eazy>
    <RightSmallNav :rightTitle="rightTitle" @goMeowPoint="goMeowPoint" />
  </div>
</template>

<script>
import useScroll from "../../../utils/mixins";
import RightSmallNav from "../../../components/RightSmallNav.vue";
export default {
  name: "InfiniteScroll",
  components: { RightSmallNav },
  computed: {
    noMore() {
      return this.count >= 20;
    },
    disabled() {
      return this.loading || this.noMore;
    },
  },
  data() {
    return {
      count: 10,
      count1: 10,
      loading: false,
      //   定义当前传递过来的数据是所有类型的数据
      rightTitle: [
        { title: "InfiniteScroll 无限滚动", id: "infiniteScroll-wu-xian-gun-dong" },
        { title: "基础用法", id: "ji-chu-yong-fa" },
        { title: "禁用加载", id: "jin-yong-jia-zai" },
        { title: "InfiniteScroll props", id: "rowInfiniteScroll" },
      ],
      visible: false,
      rowInfiniteScroll: [
        {
          Parameters: "infinite-scroll-disabled",
          Explain: "是否禁用",
          Types: "boolean",
          Optional: "-",
          Default: "false",
        },
        {
          Parameters: "infinite-scroll-delay",
          Explain: "节流时延，单位为ms",
          Types: "number",
          Optional: "-",
          Default: "200",
        },
        {
          Parameters: "infinite-scroll-distance",
          Explain: "触发加载的距离阈值，单位为px",
          Types: "number",
          Optional: "-",
          Default: "0",
        },
        {
          Parameters: "infinite-scroll-immediate",
          Explain: "是否立即执行加载方法，以防初始状态下内容无法撑满容器。",
          Types: "boolean",
          Optional: "-",
          Default: "true",
        },
      ],

      html1: `    <template>
        <ul class="infinite-list" v-infinite-scroll="load" style="overflow:auto">
            <li v-for="i in count" class="infinite-list-item">{{ i }}</li>
        </ul>
    </template>

    <script>
        export default {
            data () {
            return {
                count: 10
            }
            },
            methods: {
            load () {
                this.count += 2
            }
            }
        }
    <\/script>
                `,
      html2: `    <template>
    <div class="infinite-list-wrapper" style="overflow:auto">
        <ul
        class="list"
        v-infinite-scroll="load"
        infinite-scroll-disabled="disabled">
        <li v-for="i in count" class="list-item">{{ i }}</li>
        </ul>
        <p v-if="loading">加载中...</p>
        <p v-if="noMore">没有更多了</p>
    </div>
    </template>

    <script>
    export default {
        data () {
        return {
            count: 10,
            loading: false
        }
        },
        computed: {
        noMore () {
            return this.count >= 20
        },
        disabled () {
            return this.loading || this.noMore
        }
        },
        methods: {
        load () {
            this.loading = true
            setTimeout(() => {
            this.count += 2
            this.loading = false
            }, 2000)
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
    load() {
      this.count += 2;
    },
    load1() {
      this.loading = true;
      setTimeout(() => {
        this.count += 2;
        this.loading = false;
      }, 2000);
    },
  },
};
</script>
<style lang="less" scoped>
.infinite-list {
  height: 300px;
  padding: 0;
  margin: 0;
  list-style: none;
}
.infinite-list .infinite-list-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  background: #e8f3fe;
  margin: 10px;
  color: #7dbcfc;
}
.infinite-list-wrapper {
  height: 300px;
  text-align: center;
}
.infinite-list-wrapper .list-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin: 10px;
  background: #fff6f6;
  color: #ff8484;
}
</style>
