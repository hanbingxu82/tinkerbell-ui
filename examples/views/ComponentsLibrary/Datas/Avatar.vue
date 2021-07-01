<!--
 * @Author: your name
 * @Date: 2021-06-30 13:39:12
 * @LastEditTime: 2021-07-01 11:18:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/examples/views/ComponentsLibrary/Datas/Avatar.vue
-->
<template>
  <div>
    <h2
      id="avatar-tou-xiang"
      style='box-sizing: border-box; margin: 0px; padding: 10px 0px; font-size: 28px; font-weight: 400; color: rgb(31, 47, 61); border-bottom: 1px solid rgb(197, 217, 232); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#avatar-tou-xiang" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;Avatar 头像
    </h2>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      用图标、图片或者字符的形式展示用户或事物信息。
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
      通过 shape 和 size 设置头像的形状和大小。
    </p>
    <p>
      <br />
    </p>
    <Demo>
      <div slot="source">
        <tb-row>
          <tb-col :span="12">
            <div class="title">circle</div>
            <div flex="box:mean">
              <div><tb-avatar :size="50" :src="circleUrl"></tb-avatar></div>
              <div v-for="size in sizeList" :key="size">
                <tb-avatar :size="size" :src="circleUrl"></tb-avatar>
              </div>
            </div>
          </tb-col>
          <tb-col :span="12">
            <div class="title">square</div>
            <div flex="box:mean">
              <div><tb-avatar shape="square" :size="50" :src="squareUrl"></tb-avatar></div>
              <div v-for="size in sizeList" :key="size">
                <tb-avatar shape="square" :size="size" :src="squareUrl"></tb-avatar>
              </div>
            </div>
          </tb-col>
        </tb-row>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html1">
        </code>
      </pre>
    </Demo>
    <h3
      id="zhan-shi-lei-xing"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#zhan-shi-lei-xing" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;展示类型
    </h3>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      支持三种类型：图标、图片和字符
    </p>
    <p>
      <br />
    </p>
    <Demo>
      <div slot="source">
        <div flex="box:mean">
          <div>
            <tb-avatar icon="icon-user"></tb-avatar>
          </div>
          <div>
            <tb-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></tb-avatar>
          </div>
          <div>
            <tb-avatar> user </tb-avatar>
          </div>
        </div>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html2">
        </code>
      </pre>
    </Demo>
    <h3
      id="error-callback"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#error-callback" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;图片加载失败的 fallback 行为
    </h3>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      当展示类型为图片的时候，图片加载失败的 fallback 行为
    </p>
    <p>
      <br />
    </p>
    <Demo>
      <div slot="source">
        <div flex="box:mean">
          <tb-avatar :size="60" src="https://empty" @error="errorHandler">
            <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png" />
          </tb-avatar>
        </div>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html3">
        </code>
      </pre>
    </Demo>
    <h3
      id="image-shi-ying"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#image-shi-ying" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;图片如何适应容器框
    </h3>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      当展示类型为图片的时候，使用 fit 属性定义图片如何适应容器框，同原生 object-fit。
    </p>
    <p>
      <br />
    </p>
    <Demo>
      <div slot="source">
        <div flex="box:mean">
          <div class="block" v-for="fit in fits" :key="fit">
            <div class="title">{{ fit }}</div>
            <tb-avatar shape="square" :size="100" :fit="fit" :src="url"></tb-avatar>
          </div>
        </div>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html4">
        </code>
      </pre>
    </Demo>
    <h3
      id="rowAvatar"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#rowAvatar" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;Avatar props
    </h3>
    <p>
      <br />
    </p>
    <tb-table-eazy :rows="rowAvatar" :cols="col"></tb-table-eazy>
    <h3
      id="rowAvatarEvent"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#rowAvatar" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;Avatar events
    </h3>
    <p>
      <br />
    </p>
    <tb-table-eazy :rows="rowAvatarEvent" :cols="colEvent"></tb-table-eazy>
    <h3
      id="rowAvatarSlot"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#rowAvatarSlot" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;Avatar slots
    </h3>
    <p>
      <br />
    </p>
    <tb-table-eazy :rows="rowAvatarSlot" :cols="colSlot"></tb-table-eazy>
    <RightSmallNav :rightTitle="rightTitle" @goMeowPoint="goMeowPoint" />
  </div>
</template>

<script>
import useScroll from "../../../utils/mixins";
import RightSmallNav from "../../../components/RightSmallNav.vue";
export default {
  name: "Avatar",
  components: { RightSmallNav },
  data() {
    return {
      current: 2,
      circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      squareUrl: "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
      sizeList: ["large", "medium", "small"],
      fits: ["fill", "contain", "cover", "none", "scale-down"],
      url: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
      rowAvatar: [
        {
          Parameters: "icon",
          Explain: "设置头像的图标类型，参考 Icon 组件",
          Types: "string",
          Optional: "-",
          Default: "-",
        },

        {
          Parameters: "size",
          Explain: "设置头像的大小",
          Types: "number/string",
          Optional: "number / large / medium / small",
          Default: "large",
        },
        {
          Parameters: "shape",
          Explain: "设置头像的形状",
          Types: "string",
          Optional: "circle / square",
          Default: "circle",
        },
        {
          Parameters: "src",
          Explain: "图片头像的资源地址",
          Types: "string",
          Optional: "-",
          Default: "-",
        },
        {
          Parameters: "srcSet",
          Explain: "以逗号分隔的一个或多个字符串列表表明一系列用户代理使用的可能的图像",
          Types: "String",
          Optional: "-",
          Default: "-",
        },
        {
          Parameters: "alt",
          Explain: "描述图像的替换文本",
          Types: "String",
          Optional: "-",
          Default: "-",
        },
        {
          Parameters: "fit",
          Explain: "当展示类型为图片的时候，设置图片如何适应容器框",
          Types: "string",
          Optional: "fill / contain / cover / none / scale-down	",
          Default: "cover",
        },
      ],
      rowAvatarEvent: [
        {
          Parameters: "error",
          Explain: "图片类头像加载失败的回调， 返回 false 会关闭组件默认的 fallback 行为",
          Callback: "(e: Event)",
        },
      ],
      rowAvatarSlot: [
        {
          Parameters: "default",
          Explain: "自定义头像展示内容",
        },
      ],
      html1: `    <template>
        <div>
            <tb-row>
            <tb-col :span="12">
                <div class="title">circle</div>
                <div flex="box:mean">
                <div ><tb-avatar :size="50" :src="circleUrl"></tb-avatar></div>
                <div  v-for="size in sizeList" :key="size">
                    <tb-avatar :size="size" :src="circleUrl"></tb-avatar>
                </div>
                </div>
            </tb-col>
            <tb-col :span="12">
                <div class="title">square</div>
                <div flex="box:mean">
                <div ><tb-avatar shape="square" :size="50" :src="squareUrl"></tb-avatar></div>
                <div  v-for="size in sizeList" :key="size">
                    <tb-avatar shape="square" :size="size" :src="squareUrl"></tb-avatar>
                </div>
                </div>
            </tb-col>
            </tb-row>
        </div>
    </template>

    <script>
        export default {
            data () {
                return {
                    circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
                    squareUrl: "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
                    sizeList: ["large", "medium", "small"]
                }
            }
        }
    <\/script>
              `,
      html2: `    <template>
        <div flex="box:mean">
          <div>
            <tb-avatar icon="icon-user"></tb-avatar>
          </div>
          <div>
            <tb-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></tb-avatar>
          </div>
          <div>
            <tb-avatar> user </tb-avatar>
          </div>
        </div>
    </template>
              `,
      html3: `    <template>
        <div class="demo-type">
            <el-avatar :size="60" src="https://empty" @error="errorHandler">
            <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"/>
            </el-avatar>
        </div>
    </template>
    <script>
        export default {
            methods: {
            errorHandler() {
                return true
            }
            }
        }
    <\/script>
              `,
      html4: `    <template>
        <div flex="box:mean">
            <div class="block" v-for="fit in fits" :key="fit">
                <div class="title">{{ fit }}</div>
                <tb-avatar shape="square" :size="100" :fit="fit" :src="url"></tb-avatar>
            </div>
        </div>
    </template>
    <script>
        export default {
            data() {
            return {
                fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
                url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
            }
            }
        }
    <\/script>
              `,
      //   定义当前传递过来的数据是所有类型的数据
      rightTitle: [
        { title: "Avatar 头像", id: "avatar-tou-xiang" },
        { title: "基础用法", id: "ji-chu-yong-fa" },
        { title: "展示类型", id: "zhan-shi-lei-xing" },
        { title: "图片 error", id: "error-callback" },
        { title: "图片适应方式", id: "image-shi-ying" },
        { title: "Avatar props", id: "rowAvatar" },
        { title: "Avatar events", id: "rowAvatarEvent" },
        { title: "Avatar slots", id: "rowAvatarSlot" },
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
    errorHandler() {
      return true;
    },
  },
};
</script>
<style lang="less" scoped>
[flex] {
  padding: 30px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.title {
  text-align: center;
}
</style>
