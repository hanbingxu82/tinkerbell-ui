<!--
 * @Author: your name
 * @Date: 2021-07-01 22:08:45
 * @LastEditTime: 2021-07-01 22:50:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/examples/views/ComponentsLibrary/Navigations/Navmenu.vue
-->

<template>
  <div>
    <h2
      id="navMenu-dao-hang-cai-dan"
      style='box-sizing: border-box; margin: 0px; padding: 10px 0px; font-size: 28px; font-weight: 400; color: rgb(31, 47, 61); border-bottom: 1px solid rgb(197, 217, 232); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#navMenu-dao-hang-cai-dan" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;NavMenu 导航菜单
    </h2>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      为网站提供导航功能的菜单。
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
      适用广泛的基础用法。
    </p>
    <p>
      <br />
    </p>
    <Demo>
      <div slot="source">
        <div>
          <tb-menu mode="horizontal" :theme="theme1" active-name="1">
            <tb-menu-item name="1"><i class="iconfont icon-home-filling"></i>首页</tb-menu-item>
            <tb-submenu name="2">
              <template slot="title"><i class="iconfont icon-file-common-filling"></i>我的工作台</template>
              <tb-menu-item name="2-1"><i class="iconfont icon-decline-filling"></i>选项1</tb-menu-item>
              <tb-submenu name="2-2">
                <template slot="title"> <i class="iconfont icon-file-common-filling"></i>选项2 </template>
                <tb-menu-item name="2-2-1"><i class="iconfont icon-news-filling"></i>选项2-2-1</tb-menu-item>
                <tb-menu-item name="2-2-2"><i class="iconfont icon-history-filling"></i>选项2-2-2</tb-menu-item>
              </tb-submenu>
              <tb-menu-item name="2-3"><i class="iconfont icon-user-filling"></i>选项3</tb-menu-item>
            </tb-submenu>
            <tb-submenu name="3">
              <template slot="title"><i class="iconfont icon-folder-filling"></i>统计分析</template>
              <tb-menu-group title="使用">
                <tb-menu-item name="3-1">新增和启动</tb-menu-item>
                <tb-menu-item name="3-2">活跃分析</tb-menu-item>
                <tb-menu-item name="3-3">时段分析</tb-menu-item>
              </tb-menu-group>
            </tb-submenu>
            <tb-menu-item name="4"><i class="iconfont icon-setting-filling"></i>系统设置</tb-menu-item>
          </tb-menu>
        </div>
        <br />
        <tb-radio-group v-model="theme1">
          <tb-radio label="light">light</tb-radio>
          <tb-radio label="dark">dark</tb-radio>
        </tb-radio-group>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html1">
        </code>
      </pre>
    </Demo>
    <h3
      id="shu-xiang-she-zhi"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#shu-xiang-she-zhi" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;竖向设置
    </h3>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      竖向展示菜单。
    </p>
    <p>
      <br />
    </p>

    <Demo>
      <div slot="source">
        <tb-menu :theme="theme2" active-name="1" accordion>
          <tb-menu-item name="1"><i class="iconfont icon-home-filling"></i>首页</tb-menu-item>
          <tb-submenu name="2">
            <template slot="title"><i class="iconfont icon-file-common-filling"></i>我的工作台</template>
            <tb-menu-item name="2-1"><i class="iconfont icon-decline-filling"></i>选项1</tb-menu-item>
            <tb-submenu name="2-2">
              <template slot="title"> <i class="iconfont icon-file-common-filling"></i>选项2 </template>
              <tb-menu-item name="2-2-1"><i class="iconfont icon-news-filling"></i>选项2-2-1</tb-menu-item>
              <tb-menu-item name="2-2-2"><i class="iconfont icon-history-filling"></i>选项2-2-2</tb-menu-item>
            </tb-submenu>
            <tb-menu-item name="2-3"><i class="iconfont icon-user-filling"></i>选项3</tb-menu-item>
          </tb-submenu>
          <tb-submenu name="3">
            <template slot="title"><i class="iconfont icon-folder-filling"></i>统计分析</template>
            <tb-menu-group title="使用">
              <tb-menu-item name="3-1">新增和启动</tb-menu-item>
              <tb-menu-item name="3-2">活跃分析</tb-menu-item>
              <tb-menu-item name="3-3">时段分析</tb-menu-item>
            </tb-menu-group>
          </tb-submenu>
          <tb-menu-item name="4"><i class="iconfont icon-setting-filling"></i>系统设置</tb-menu-item>
        </tb-menu>
        <br />
        <tb-radio-group v-model="theme2">
          <tb-radio label="light">light</tb-radio>
          <tb-radio label="dark">dark</tb-radio>
        </tb-radio-group>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html2">
        </code>
      </pre>
    </Demo>
    <h3
      id="wai-lian"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#wai-lian" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;外链
    </h3>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      链接外部地址。
    </p>
    <p>
      <br />
    </p>
    <Demo>
      <div slot="source">
        <tb-menu active-name="1" accordion>
          <tb-menu-item name="1"><i class="iconfont icon-home"></i> 首页</tb-menu-item>
          <tb-menu-item name="2" to="https://www.baidu.com" target="_blank"> <i class="iconfont icon-navigation"> </i> 百度 </tb-menu-item>
          <tb-menu-item name="3" to="https://www.zhihu.com" target="_blank"> <i class="iconfont icon-link"> </i> 知乎 </tb-menu-item>
        </tb-menu>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html3">
        </code>
      </pre>
    </Demo>
    <h3
      id="rowNavMenu"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#rowNavMenu" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;NavMenu props
    </h3>
    <p>
      <br />
    </p>
    <tb-table-eazy :rows="rowNavMenu" :cols="col"></tb-table-eazy>
    <h3
      id="rowNavMenuEvent"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#rowNavMenuEvent" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;NavMenu events
    </h3>
    <p>
      <br />
    </p>
    <tb-table-eazy :rows="rowNavMenuEvent" :cols="colEvent"></tb-table-eazy>
    <h3
      id="rowNavMenuMethod"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#rowNavMenuMethod" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;NavMenu methods
    </h3>
    <p>
      <br />
    </p>
    <tb-table-eazy :rows="rowNavMenuMethod" :cols="colEvent"></tb-table-eazy>
    <h3
      id="rowNavMenuItem"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#rowNavMenuItem" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;NavMenuItem props
    </h3>
    <p>
      <br />
    </p>
    <tb-table-eazy :rows="rowNavMenuItem" :cols="col"></tb-table-eazy>
    <h3
      id="rowSubmenu"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#rowSubmenu" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;Submenu props
    </h3>
    <p>
      <br />
    </p>
    <tb-table-eazy :rows="rowSubmenu" :cols="col"></tb-table-eazy>
    <h3
      id="rowSubmenuSlot"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#rowSubmenuSlot" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;Submenu slots
    </h3>
    <p>
      <br />
    </p>
    <tb-table-eazy :rows="rowSubmenuSlot" :cols="colSlot"></tb-table-eazy>
    <h3
      id="rowMenuGroup"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#rowMenuGroup" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;MenuGroup props
    </h3>
    <p>
      <br />
    </p>
    <tb-table-eazy :rows="rowMenuGroup" :cols="col"></tb-table-eazy>
    <RightSmallNav :rightTitle="rightTitle" @goMeowPoint="goMeowPoint" />
  </div>
</template>

<script>
import useScroll from "../../../utils/mixins";
import RightSmallNav from "../../../components/RightSmallNav.vue";
export default {
  name: "NavMenu",
  components: { RightSmallNav },
  data() {
    return {
      theme1: "light",
      theme2: "light",
      isCollapse: true,
      rowNavMenu: [
        {
          Parameters: "mode",
          Explain: "菜单类型",
          Types: "string",
          Optional: "horizontal（水平） 和 vertical（垂直）",
          Default: "vertical",
        },

        {
          Parameters: "theme",
          Explain: "主题",
          Types: "string",
          Optional: "light、dark",
          Default: "light",
        },
        {
          Parameters: "active-name",
          Explain: "激活菜单的 name 值",
          Types: "String/ Number",
          Optional: "-",
          Default: "-",
        },
        {
          Parameters: "open-names",
          Explain: "展开的 Submenu 的 name 集合",
          Types: "Array",
          Optional: "-",
          Default: "-",
        },
        {
          Parameters: "expand-all",
          Explain: "展开所有的 Submenu 的",
          Types: "Boolean",
          Optional: "-",
          Default: "false",
        },
        {
          Parameters: "accordion",
          Explain: "是否开启手风琴模式",
          Types: "Boolean",
          Optional: "-",
          Default: "false",
        },
        {
          Parameters: "width",
          Explain: "导航菜单的宽度，只在 mode='vertical' 时有效",
          Types: "String",
          Optional: "-",
          Default: "240px",
        },
      ],
      rowNavMenuEvent: [
        {
          Parameters: "select",
          Explain: "选择菜单（MenuItem）时触发",
          Callback: "name",
        },
        {
          Parameters: "on-open-change",
          Explain: "展开/收起 子菜单时触发",
          Callback: "当前展开的 Submenu 的 name 值数组",
        },
      ],
      rowNavMenuMethod: [
        {
          Parameters: "updateOpened",
          Explain: "手动更新展开的子目录，注意要在 $nextTick 里调用",
          Callback: "-",
        },
        {
          Parameters: "updateActiveName",
          Explain: "手动更新当前选择项，注意要在 $nextTick 里调用",
          Callback: "-",
        },
      ],
      rowNavMenuItem: [
        {
          Parameters: "name",
          Explain: "菜单项的唯一标识，必填",
          Types: "String / Number",
          Optional: "-",
          Default: "-",
        },
        {
          Parameters: "to",
          Explain: "跳转的链接，支持 vue-router 对象",
          Types: "String / Object",
          Optional: "-",
          Default: "-",
        },
        {
          Parameters: "replace",
          Explain: "路由跳转时，开启 replace 将不会向 history 添加新记录",
          Types: "Boolean",
          Optional: "-",
          Default: "false",
        },
        {
          Parameters: "target",
          Explain: "相当于 a 链接的 target 属性",
          Types: "String",
          Optional: "-",
          Default: "_self",
        },
      ],
      rowSubmenu: [
        {
          Parameters: "name",
          Explain: "子菜单的唯一标识，必填",
          Types: "String/Number",
          Optional: "-",
          Default: "-",
        },
        {
          Parameters: "transfer",
          Explain: "子菜单是否移动至body ,需配合menu的scrollable属性使用",
          Types: "Boolean",
          Optional: "-",
          Default: "-",
        },
      ],
      rowSubmenuSlot: [
        {
          Parameters: "-",
          Explain: "菜单项",
        },
        {
          Parameters: "title",
          Explain: "子菜单标题",
        },
      ],
      rowMenuGroup: [
        {
          Parameters: "title",
          Explain: "分组标题",
          Types: "String",
          Optional: "-",
          Default: "-",
        },
      ],
      html1: `    <template>
        <div>
            <tb-menu mode="horizontal" :theme="theme1" active-name="1">
                <tb-menu-item name="1"><i class="iconfont icon-home-filling"></i>首页</tb-menu-item>
                <tb-submenu name="2">
                <template slot="title"><i class="iconfont icon-file-common-filling"></i>我的工作台</template>
                <tb-menu-item name="2-1"><i class="iconfont icon-decline-filling"></i>选项1</tb-menu-item>
                <tb-submenu name="2-2">
                    <template slot="title"> <i class="iconfont icon-file-common-filling"></i>选项2 </template>
                    <tb-menu-item name="2-2-1"><i class="iconfont icon-news-filling"></i>选项2-2-1</tb-menu-item>
                    <tb-menu-item name="2-2-2"><i class="iconfont icon-history-filling"></i>选项2-2-2</tb-menu-item>
                </tb-submenu>
                <tb-menu-item name="2-3"><i class="iconfont icon-user-filling"></i>选项3</tb-menu-item>
                </tb-submenu>
                <tb-submenu name="3">
                <template slot="title"><i class="iconfont icon-folder-filling"></i>统计分析</template>
                <tb-menu-group title="使用">
                    <tb-menu-item name="3-1">新增和启动</tb-menu-item>
                    <tb-menu-item name="3-2">活跃分析</tb-menu-item>
                    <tb-menu-item name="3-3">时段分析</tb-menu-item>
                </tb-menu-group>
                </tb-submenu>
                <tb-menu-item name="4"><i class="iconfont icon-setting-filling"></i>系统设置</tb-menu-item>
            </tb-menu>
        </div>
        <br>
        <tb-radio-group v-model="theme1">
            <tb-radio label="light">light</tb-radio>
            <tb-radio label="dark">dark</tb-radio>
        </tb-radio-group>
    </template>
    <script>
        export default {
            data() {
            return {
                theme1: 'light',
                theme2: 'light',
                isCollapse: true
            };
            }
        }
    <\/script>
              `,
      html2: `    <template>
        <tb-menu :theme="theme2" active-name="1" accordion>
            <tb-menu-item name="1"><i class="iconfont icon-home-filling"></i>首页</tb-menu-item>
            <tb-submenu name="2">
              <template slot="title"><i class="iconfont icon-file-common-filling"></i>我的工作台</template>
              <tb-menu-item name="2-1"><i class="iconfont icon-decline-filling"></i>选项1</tb-menu-item>
              <tb-submenu name="2-2">
                <template slot="title"> <i class="iconfont icon-file-common-filling"></i>选项2 </template>
                <tb-menu-item name="2-2-1"><i class="iconfont icon-news-filling"></i>选项2-2-1</tb-menu-item>
                <tb-menu-item name="2-2-2"><i class="iconfont icon-history-filling"></i>选项2-2-2</tb-menu-item>
              </tb-submenu>
              <tb-menu-item name="2-3"><i class="iconfont icon-user-filling"></i>选项3</tb-menu-item>
            </tb-submenu>
            <tb-submenu name="3">
              <template slot="title"><i class="iconfont icon-folder-filling"></i>统计分析</template>
              <tb-menu-group title="使用">
                <tb-menu-item name="3-1">新增和启动</tb-menu-item>
                <tb-menu-item name="3-2">活跃分析</tb-menu-item>
                <tb-menu-item name="3-3">时段分析</tb-menu-item>
              </tb-menu-group>
            </tb-submenu>
            <tb-menu-item name="4"><i class="iconfont icon-setting-filling"></i>系统设置</tb-menu-item>
        </tb-menu>
        <br>
        <tb-radio-group v-model="theme2">
        <tb-radio label="light">light</tb-radio>
        <tb-radio label="dark">dark</tb-radio>
        </tb-radio-group>
    </template>
    <script>
        export default {
            data() {
            return {
                theme2: 'light'
            };
            }
        }
    <\/script>
              `,
      html3: `    <template>
        <tb-menu active-name="1" accordion>
        <tb-menu-item name="1"><i class="iconfont icon-home"></i> 首页</tb-menu-item>
        <tb-menu-item name="2" to="https://www.baidu.com" target="_blank">
            <i class="iconfont icon-navigation"> </i>   百度
        </tb-menu-item>
        <tb-menu-item name="3" to="https://www.zhihu.com" target="_blank">
            <i class="iconfont icon-navigation"> </i>  知乎
        </tb-menu-item>
        </tb-menu>
    </template>
              `,
      html4: `    <div>
      <tb-link icon="iconfont icon-edit">编辑</tb-link>
      <tb-link>查看<i class="iconfont icon-browse"></i> </tb-link>
    </div>
              `,

      //   定义当前传递过来的数据是所有类型的数据
      rightTitle: [
        { title: "NavMenu 导航菜单", id: "navMenu-dao-hang-cai-dan" },
        { title: "基础用法", id: "ji-chu-yong-fa" },
        { title: "竖向设置", id: "shu-xiang-she-zhi" },
        { title: "外链", id: "wai-lian" },
        { title: "NavMenu props", id: "rowNavMenu" },
        { title: "NavMenu events", id: "rowNavMenuEvent" },
        { title: "NavMenu methods", id: "rowNavMenuMethod" },
        { title: "NavMenuItem props", id: "rowNavMenuItem" },
        { title: "Submenu props", id: "rowSubmenu" },
        { title: "Submenu slots", id: "rowSubmenuSlot" },
        { title: "MenuGroup props", id: "rowMenuGroup" },
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
  },
};
</script>
<style lang="less" scoped>
.tb-link {
  margin: 5px;
}
</style>
