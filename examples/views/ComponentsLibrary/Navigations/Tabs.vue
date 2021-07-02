<!--
 * @Author: your name
 * @Date: 2021-07-01 22:08:53
 * @LastEditTime: 2021-07-02 11:27:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/examples/views/ComponentsLibrary/Navigations/Tabs.vue
-->

<template>
  <div>
    <h2
      id="tabs-biao-qian-ye"
      style='box-sizing: border-box; margin: 0px; padding: 10px 0px; font-size: 28px; font-weight: 400; color: rgb(31, 47, 61); border-bottom: 1px solid rgb(197, 217, 232); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#tabs-biao-qian-ye" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;Tabs 标签页
    </h2>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      显示标签,由于标签内容定制化比较多，这里就预留给后续内容判定，这里只做标签的切换功能。内容可根据实际需求自行实现。
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
      基础的简洁的标签页
    </p>
    <p>
      <br />
    </p>
    <Demo>
      <div slot="source">
        <tb-tabs v-model="activeTab" :data="tabs"></tb-tabs>
        <p v-show="activeTab === 'tab1'">用户管理</p>
        <p v-show="activeTab === 'tab2'">组织管理</p>
        <p v-show="activeTab === 'tab3'">系统管理</p>
        <p v-show="activeTab === 'tab4'">目录模块配置</p>
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
      <a href="#jin-yong-zhuang-tai" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;卡片模式
    </h3>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      可以设置基本的卡片模式
    </p>
    <p>
      <br />
    </p>

    <Demo>
      卡片模式可以给tab项设置icon图标
      <div slot="source">
        <div>
          <tb-tabs v-model="activeTab" :data="tabs" type="card"></tb-tabs>
          <p v-show="activeTab === 'tab1'">用户管理</p>
          <p v-show="activeTab === 'tab2'">组织管理</p>
          <p v-show="activeTab === 'tab3'">系统管理</p>
          <p v-show="activeTab === 'tab4'">目录模块配置</p>
        </div>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html2">
        </code>
      </pre>
    </Demo>
    <h3
      id="add-delete"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#add-delete" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;增加和移除
    </h3>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      可以关闭，同时可以通过自定义事件来增加标签页，关闭按钮只能在card和tag模式下使用,默认超出宽度，可以滚动移动
    </p>
    <p>
      <br />
    </p>

    <Demo>
      tabs中的项设置noClose可以排除关闭按钮，主要是为了部分可固定标签设置使用
      <div slot="source">
        <div class="mb-15"><tb-button type="primary" plain size="small" @click="handleAdd">add tab</tb-button></div>
        <tb-tabs v-model="activeTab" :data="tabs" type="card" closable @tab-close="handleTabClose"></tb-tabs>
        <p>开启的tab：{{ activeTab }}</p>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html3">
        </code>
      </pre>
    </Demo>
    <h3
      id="ContextMenu"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#ContextMenu" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;ContextMenu
    </h3>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      配合可以关闭，可以开启右键菜单实现更多的配置信息，开启右键菜单需要手动插入右键菜单的按钮列表标签为 li ,并需要配合tab-select事件
    </p>
    <p>
      <br />
    </p>

    <Demo>
      <div slot="source">
        <tb-tabs v-model="activeTab" :data="tabs" type="card" closable context-menu ref="tabs" @tab-close="handleTabClose" @tab-select="handleSelect">
          <template v-slot:menu>
            <li @click="refreshSelected">刷新</li>
            <li @click="closeSelected">关闭</li>
            <li @click="closeOthers">关闭其他</li>
            <li @click="closeAll">关闭所有</li>
          </template>
        </tb-tabs>
        <p>开启的tab：{{ activeTab }}</p>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html4">
        </code>
      </pre>
    </Demo>
    <h3
      id="biao-qian-mo-shi"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#biao-qian-mo-shi" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;标签模式
    </h3>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      除了卡片模式也可以设置成tag标签模式，这种模式更独立也更像标签导航。根据需求选择使用
    </p>
    <p>
      <br />
    </p>

    <Demo>
      <div slot="source">
        <div class="mb-15"><tb-button type="primary" plain size="small" @click="handleAdd">add tab</tb-button></div>
        <tb-tabs v-model="activeTab" :data="tabs" type="tag" closable context-menu ref="tabs" @tab-close="handleTabClose" @tab-select="handleSelect">
          <template v-slot:menu>
            <li @click="refreshSelected">刷新</li>
            <li @click="closeSelected">关闭</li>
            <li @click="closeOthers">关闭其他</li>
            <li @click="closeAll">关闭所有</li>
          </template>
        </tb-tabs>
        <p>开启的tab：{{ activeTab }}</p>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html5">
        </code>
      </pre>
    </Demo>
    <h3
      id="rowTabs"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#rowTabs" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;Tabs props
    </h3>
    <p>
      <br />
    </p>
    <tb-table-eazy :rows="rowTabs" :cols="col"></tb-table-eazy>
    <h3
      id="rowTabsEvent"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#rowTabsEvent" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;Tabs events
    </h3>
    <p>
      <br />
    </p>
    <tb-table-eazy :rows="rowTabsEvent" :cols="colEvent"></tb-table-eazy>

    <RightSmallNav :rightTitle="rightTitle" @goMeowPoint="goMeowPoint" />
  </div>
</template>

<script>
import useScroll from "../../../utils/mixins";
import RightSmallNav from "../../../components/RightSmallNav.vue";
export default {
  name: "Tabs",
  components: { RightSmallNav },
  created() {
    this.activeTab = "tab3";
  },
  data() {
    return {
      //   定义当前传递过来的数据是所有类型的数据
      rightTitle: [
        { title: "Tabs 标签页", id: "tabs-biao-qian-ye" },
        { title: "基础用法", id: "ji-chu-yong-fa" },
        { title: "卡片模式", id: "jin-yong-zhuang-tai" },
        { title: "增加和移除", id: "add-delete" },
        { title: "ContextMenu", id: "ContextMenu" },
        { title: "标签模式", id: "biao-qian-mo-shi" },
        { title: "Tabs props", id: "rowTabs" },
        { title: "Tabs events", id: "rowTabsEvent" },
      ],
      rowTabs: [
        {
          Parameters: "data",
          Explain: "tabs数组结构,必传，切结构遵循{key:'',title:''} key为唯一标识，title为标签生成名称，切可以设置icon来扩展图标",
          Types: "Array",
          Optional: "-",
          Default: "[]",
        },
        {
          Parameters: "closable",
          Explain: "是否可关闭",
          Types: "boolean",
          Optional: "-",
          Default: "false",
        },
        {
          Parameters: "type",
          Explain: "tab类型",
          Types: "string",
          Optional: "default / card / tag'",
          Default: "default",
        },
      ],
      rowTabsEvent: [
        {
          Parameters: "change",
          Explain: "绑定事件改变事件",
          Callback: "当前选中的tab",
        },
        {
          Parameters: "tab-close",
          Explain: "关闭一个tab事件",
          Callback: "当前关闭的tab",
        },
        {
          Parameters: "tab-select",
          Explain: "右键选中事件回调，用于配合右键系统缓存点击的tag",
          Callback: "右键选中的tab",
        },
      ],
      tabs: [
        { key: "tab1", title: "用户管理", icon: "icon-user" },
        { key: "tab2", title: "组织管理" },
        { key: "tab3", title: "系统管理" },
        { key: "tab4", title: "目录模块配置" },
      ],
      activeTab: "tab1",

      html1: `    <template>
        <tb-tabs v-model="activeTab" :data="tabs"></tb-tabs>
        <p v-show="activeTab==='tab1'">用户管理</p>
        <p v-show="activeTab==='tab2'">组织管理</p>
        <p v-show="activeTab==='tab3'">系统管理</p>
        <p v-show="activeTab==='tab4'">目录模块配置</p>
    </template>
    <script>
        export default {
        data(){
            return {
            tabs:[
                {key:'tab1',title:'用户管理'},
                {key:'tab2',title:'组织管理'},
                {key:'tab3',title:'系统管理'},
                {key:'tab4',title:'目录模块配置'}
            ],
            activeTab: 'tab1'
            }
        },
        created(){
            this.activeTab = 'tab3'
        }
        }
    <\/script>
              `,
      html2: `    <template>
        <tb-tabs v-model="activeTab" :data="tabs" type="card"></tb-tabs>
        <p v-show="activeTab==='tab1'">用户管理</p>
        <p v-show="activeTab==='tab2'">组织管理</p>
        <p v-show="activeTab==='tab3'">系统管理</p>
        <p v-show="activeTab==='tab4'">目录模块配置</p>
    </template>
    <script>
        export default {
        data(){
            return {
            tabs:[
                {key:'tab1',title:'用户管理',icon:'icon-user'},
                {key:'tab2',title:'组织管理'},
                {key:'tab3',title:'系统管理'},
                {key:'tab4',title:'目录模块配置'}
            ],
            activeTab: 'tab1'
            }
        }
        }
    <\/script>
              `,
      html3: `    <template>
    <div class="mb-15"><tb-button type="primary" plain size="small" @click="handleAdd">add tab</tb-button></div>
    <tb-tabs v-model="activeTab" :data="tabs" type="card" closable
        @tab-close="handleTabClose"></tb-tabs>
    <p>开启的tab：{{ activeTab }}</p>
    </template>
    <script>
        export default {
        data(){
            return {
            tabs:[
                {key:'tab0',title:'首页',noClose:true},
                {key:'tab1',title:'用户管理'},
                {key:'tab2',title:'组织管理'},
                {key:'tab3',title:'系统管理'},
                {key:'tab4',title:'目录模块配置'}
            ],
            activeTab: 'tab2'
            }
        },
        methods:{
            handleAdd(){
            // 这里需要保证key值唯一否则会影响渲染显示
            const newTab = { key:'tab'+new Date(),title:'New Tab' }
            this.tabs.push(newTab)
            // 增加完毕后通常默认选中这个新的tab，当然，你也可以不设置选中新的tab
            this.activeTab = newTab.key
            },
            handleTabClose(tab){
            this.tabs.splice(this.tabs.findIndex(t => t.key === tab.key), 1)
            }
        }
        }
    <\/script>
              `,
      html4: `    <template>
        <tb-tabs v-model="activeTab" :data="tabs" type="card" closable context-menu
            ref="tabs" @tab-close="handleTabClose" @tab-select="handleSelect">
            <template v-slot:menu>
                <li @click="refreshSelected">刷新</li>
                <li @click="closeSelected">关闭</li>
                <li @click="closeOthers">关闭其他</li>
                <li @click="closeAll">关闭所有</li>
            </template>
        </tb-tabs>
        <p>开启的tab：{{ activeTab }}</p>
    </template>
    <script>
        export default {
        data(){
            return {
            tabs:[
                {key:'tab1',title:'用户管理'},
                {key:'tab2',title:'组织管理'},
                {key:'tab3',title:'系统管理'},
                {key:'tab4',title:'目录模块配置'}
            ],
            activeTab: 'tab2'
            }
        },
        methods:{
            handleTabClose(tab){
            this.tabs.splice(this.tabs.findIndex(t => t.key === tab.key), 1)
            },
            // 缓存右键选中的tab
            handleSelect(tab){
            this.selectTab = {...tab}
            },
            // 刷新当前view
            refreshSelected () {
            this.$message('刷新当前view:'+this.selectTab.title)
            },
            closeSelected(){
            // 这里需要调用组件的关闭选择的tag
            this.$refs.tabs.closeSelectedTab(this.selectTab)
            },
            // 关闭其他tags
            closeOthers () {
                this.tabs = [this.selectTab]
                this.activeTab = this.selectTab.key
                this.$refs.tabs.moveToCurrentTab()
            },
            // 关闭所有
            closeAll () {
                this.tabs = []
                this.activeTab = ''
                this.$refs.tabs.moveToCurrentTab()
            }
        }
        }
    <\/script>
        `,
      html5: `    <template>
        <div class="mb-15"><tb-button type="primary" plain size="small" @click="handleAdd">add tab</tb-button></div>
        <tb-tabs v-model="activeTab" :data="tabs" type="tag" closable context-menu ref="tabs" @tab-close="handleTabClose" @tab-select="handleSelect">
            <template v-slot:menu>
            <li @click="refreshSelected">刷新</li>
            <li @click="closeSelected">关闭</li>
            <li @click="closeOthers">关闭其他</li>
            <li @click="closeAll">关闭所有</li>
            </template>
        </tb-tabs>
        <p>开启的tab：{{ activeTab }}</p>
    </template>
    <script>
        export default {
        data(){
            return {
            tabs:[
                {key:'tab0',title:'首页',noClose:true},
                {key:'tab1',title:'用户管理',icon:'ios-contact'},
                {key:'tab2',title:'组织管理'},
                {key:'tab3',title:'系统管理'},
                {key:'tab4',title:'目录模块配置'}
            ],
            activeTab: 'tab2'
            }
        },
        methods:{
            handleAdd(){
            // 这里需要保证key值唯一否则会影响渲染显示
            const newTab = { key:'tab'+new Date(),title:'New Tab' }
            this.tabs.push(newTab)
            // 增加完毕后通常默认选中这个新的tab
            this.activeTab = newTab.key
            },
            handleTabClose(tab){
            this.tabs.splice(this.tabs.findIndex(t => t.key === tab.key), 1)
            },
            // 缓存右键选中的tab
            handleSelect(tab){
            this.selectTab = {...tab}
            },
            // 刷新当前view
            refreshSelected () {
            this.$message('刷新当前view:'+this.selectTab.title)
            },
            closeSelected(){
            // 这里需要调用组件的关闭选择的tag
            this.$refs.tabs.closeSelectedTab(this.selectTab)
            },
            // 关闭其他tags
            closeOthers () {
                this.tabs = [this.selectTab]
                this.activeTab = this.selectTab.key
                this.$refs.tabs.moveToCurrentTab()
            },
            // 关闭所有
            closeAll () {
                this.tabs = []
                this.activeTab = ''
                this.$refs.tabs.moveToCurrentTab()
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
    handleAdd() {
      // 这里需要保证key值唯一否则会影响渲染显示
      const newTab = { key: "tab" + new Date(), title: "New Tab" };
      this.tabs.push(newTab);
      // 增加完毕后通常默认选中这个新的tab，当然，你也可以不设置选中新的tab
      this.activeTab = newTab.key;
    },
    handleTabClose(tab) {
      this.tabs.splice(
        this.tabs.findIndex((t) => t.key === tab.key),
        1
      );
    },
    handleTabClose(tab) {
      this.tabs.splice(
        this.tabs.findIndex((t) => t.key === tab.key),
        1
      );
    },
    // 缓存右键选中的tab
    handleSelect(tab) {
      this.selectTab = { ...tab };
    },
    // 刷新当前view
    refreshSelected() {
      this.$message("刷新当前view:" + this.selectTab.title);
    },
    closeSelected() {
      // 这里需要调用组件的关闭选择的tag
      this.$refs.tabs.closeSelectedTab(this.selectTab);
    },
    // 关闭其他tags
    closeOthers() {
      this.tabs = [this.selectTab];
      this.activeTab = this.selectTab.key;
      this.$refs.tabs.moveToCurrentTab();
    },
    // 关闭所有
    closeAll() {
      this.tabs = [];
      this.activeTab = "";
      this.$refs.tabs.moveToCurrentTab();
    },
  },
};
</script>
<style lang="less" scoped>
.tb-link {
  margin: 5px;
}
</style>
