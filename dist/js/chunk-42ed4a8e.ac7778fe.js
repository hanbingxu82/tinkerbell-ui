(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-42ed4a8e"],{"0a0f2":function(e,o,t){"use strict";t("b8e1")},"0a25":function(e,o,t){"use strict";t.r(o);var i=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",[e._m(0),t("p",{staticStyle:{"box-sizing":"border-box","margin-top":"1em","margin-bottom":"1em",padding:"0px",color:"rgba(0, 0, 0, 0.85)","font-family":'-apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',"font-size":"14px","white-space":"normal","background-color":"rgb(255, 255, 255)"}},[e._v(" 在一组备选项中进行多选。 ")]),e._m(1),t("p",{staticStyle:{"box-sizing":"border-box","margin-top":"1em","margin-bottom":"1em",padding:"0px",color:"rgba(0, 0, 0, 0.85)","font-family":'-apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',"font-size":"14px","white-space":"normal","background-color":"rgb(255, 255, 255)"}},[e._v(" 单独使用可以表示两种状态之间的切换，写在标签中的内容为 checkbox 按钮后的介绍。 ")]),e._m(2),t("Demo",[e._v(" 在tb-checkbox元素中定义v-model绑定变量，单一的checkbox中，默认绑定变量的值会是Boolean，选中为true。 "),t("div",{attrs:{slot:"source"},slot:"source"},[t("tb-checkbox",{model:{value:e.checked,callback:function(o){e.checked=o},expression:"checked"}},[e._v("备选项")])],1),t("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],attrs:{slot:"highlight"},slot:"highlight"},[e._v("      "),t("code",{staticClass:"javascript",domProps:{textContent:e._s(e.html1)}},[e._v("\n      ")]),e._v("\n    ")])]),e._m(3),t("p",{staticStyle:{"box-sizing":"border-box","margin-top":"1em","margin-bottom":"1em",padding:"0px",color:"rgba(0, 0, 0, 0.85)","font-family":'-apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',"font-size":"14px","white-space":"normal","background-color":"rgb(255, 255, 255)"}},[e._v(" 多选框不可用状态。 ")]),e._m(4),t("Demo",[e._v(" 设置disabled属性即可。 "),t("div",{attrs:{slot:"source"},slot:"source"},[t("div",[t("tb-checkbox",{attrs:{disabled:""},model:{value:e.checked1,callback:function(o){e.checked1=o},expression:"checked1"}},[e._v("备选项1")]),t("tb-checkbox",{attrs:{disabled:""},model:{value:e.checked2,callback:function(o){e.checked2=o},expression:"checked2"}},[e._v("备选项")])],1)]),t("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],attrs:{slot:"highlight"},slot:"highlight"},[e._v("      "),t("code",{staticClass:"javascript",domProps:{textContent:e._s(e.html2)}},[e._v("\n      ")]),e._v("\n    ")])]),e._m(5),t("p",{staticStyle:{"box-sizing":"border-box","margin-top":"1em","margin-bottom":"1em",padding:"0px",color:"rgba(0, 0, 0, 0.85)","font-family":'-apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',"font-size":"14px","white-space":"normal","background-color":"rgb(255, 255, 255)"}},[e._v(" 适用于多个勾选框绑定到同一个数组的情景，通过是否勾选来表示这一组选项中选中的项。 ")]),e._m(6),t("Demo",[e._v(" checkbox-group元素能把多个 checkbox 管理为一组，只需要在 Group 中使用v-model绑定Array类型的变量即可。 tb-checkbox 的 label属性是该 checkbox 对应的值，若该标签中无内容，则该属性也充当 checkbox 按钮后的介绍。label与数组中的元素值相对应，如果存在指定的值则为选中状态，否则为不选中。 "),t("div",{attrs:{slot:"source"},slot:"source"},[t("div",[t("tb-checkbox-group",{model:{value:e.checkList,callback:function(o){e.checkList=o},expression:"checkList"}},[t("tb-checkbox",{attrs:{label:"多选框 A"}},[e._v("多选框 A")]),t("tb-checkbox",{attrs:{label:"多选框 B"}},[e._v("多选框 B")]),t("tb-checkbox",{attrs:{label:"多选框 C"}},[e._v("多选框 C")]),t("tb-checkbox",{attrs:{label:"禁用",disabled:""}},[e._v("禁用")]),t("tb-checkbox",{attrs:{label:"选中且禁用",disabled:""}},[e._v("选中且禁用")])],1)],1)]),t("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],attrs:{slot:"highlight"},slot:"highlight"},[e._v("      "),t("code",{staticClass:"javascript",domProps:{textContent:e._s(e.html3)}},[e._v("\n      ")]),e._v("\n    ")])]),e._m(7),t("p",{staticStyle:{"box-sizing":"border-box","margin-top":"1em","margin-bottom":"1em",padding:"0px",color:"rgba(0, 0, 0, 0.85)","font-family":'-apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',"font-size":"14px","white-space":"normal","background-color":"rgb(255, 255, 255)"}},[e._v(" indeterminate 属性用以表示 checkbox 的不确定状态，一般用于实现全选的效果 ")]),e._m(8),t("Demo",[t("div",{attrs:{slot:"source"},slot:"source"},[t("tb-checkbox",{attrs:{indeterminate:e.isIndeterminate},on:{change:e.handleCheckAllChange},model:{value:e.checkAll,callback:function(o){e.checkAll=o},expression:"checkAll"}},[e._v("全选")]),t("div",{staticStyle:{margin:"15px 0"}}),t("tb-checkbox-group",{on:{change:e.handleCheckedCitiesChange},model:{value:e.checkedCities,callback:function(o){e.checkedCities=o},expression:"checkedCities"}},e._l(e.cities2,(function(o){return t("tb-checkbox",{key:o,attrs:{label:o}},[e._v(e._s(o))])})),1)],1),t("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],attrs:{slot:"highlight"},slot:"highlight"},[e._v("      "),t("code",{staticClass:"javascript",domProps:{textContent:e._s(e.html4)}},[e._v("\n      ")]),e._v("\n    ")])]),e._m(9),t("p",{staticStyle:{"box-sizing":"border-box","margin-top":"1em","margin-bottom":"1em",padding:"0px",color:"rgba(0, 0, 0, 0.85)","font-family":'-apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',"font-size":"14px","white-space":"normal","background-color":"rgb(255, 255, 255)"}},[e._v(" 使用 min 和 max 属性能够限制可以被勾选的项目的数量。 ")]),e._m(10),t("Demo",[t("div",{attrs:{slot:"source"},slot:"source"},[t("tb-checkbox-group",{attrs:{min:1,max:2},model:{value:e.checkedCities1,callback:function(o){e.checkedCities1=o},expression:"checkedCities1"}},e._l(e.cities1,(function(o){return t("tb-checkbox",{key:o,attrs:{label:o}},[e._v(e._s(o))])})),1)],1),t("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],attrs:{slot:"highlight"},slot:"highlight"},[e._v("      "),t("code",{staticClass:"javascript",domProps:{textContent:e._s(e.html5)}},[e._v("\n      ")]),e._v("\n    ")])]),e._m(11),t("p",{staticStyle:{"box-sizing":"border-box","margin-top":"1em","margin-bottom":"1em",padding:"0px",color:"rgba(0, 0, 0, 0.85)","font-family":'-apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',"font-size":"14px","white-space":"normal","background-color":"rgb(255, 255, 255)"}},[e._v(" 按钮样式的多选组合。 ")]),e._m(12),t("Demo",[e._v(" 只需要把tb-checkbox元素替换为tb-checkbox-button元素即可。此外，tinkerbell 还提供了size属性。 "),t("div",{attrs:{slot:"source"},slot:"source"},[t("div",[t("tb-checkbox-group",{attrs:{size:"medium"},model:{value:e.checkboxGroup2,callback:function(o){e.checkboxGroup2=o},expression:"checkboxGroup2"}},e._l(e.cities,(function(o){return t("tb-checkbox-button",{key:o,attrs:{label:o}},[e._v(e._s(o))])})),1)],1),t("div",{staticStyle:{"margin-top":"20px"}},[t("tb-checkbox-group",{attrs:{size:"small"},model:{value:e.checkboxGroup3,callback:function(o){e.checkboxGroup3=o},expression:"checkboxGroup3"}},e._l(e.cities,(function(o){return t("tb-checkbox-button",{key:o,attrs:{label:o,disabled:"北京"===o}},[e._v(e._s(o))])})),1)],1),t("div",{staticStyle:{"margin-top":"20px"}},[t("tb-checkbox-group",{attrs:{size:"mini",disabled:""},model:{value:e.checkboxGroup4,callback:function(o){e.checkboxGroup4=o},expression:"checkboxGroup4"}},e._l(e.cities,(function(o){return t("tb-checkbox-button",{key:o,attrs:{label:o}},[e._v(e._s(o))])})),1)],1)]),t("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],attrs:{slot:"highlight"},slot:"highlight"},[e._v("      "),t("code",{staticClass:"javascript",domProps:{textContent:e._s(e.html6)}},[e._v("\n      ")]),e._v("\n    ")])]),e._m(13),t("p",{staticStyle:{"box-sizing":"border-box","margin-top":"1em","margin-bottom":"1em",padding:"0px",color:"rgba(0, 0, 0, 0.85)","font-family":'-apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',"font-size":"14px","white-space":"normal","background-color":"rgb(255, 255, 255)"}},[e._v(" 带有边框的多选框。 ")]),e._m(14),t("Demo",[e._v(" 设置border属性可以渲染为带有边框的多选框。 "),t("div",{attrs:{slot:"source"},slot:"source"},[t("div",[t("div",[t("tb-checkbox",{attrs:{label:"备选项1",border:"",size:"medium"},model:{value:e.checked3,callback:function(o){e.checked3=o},expression:"checked3"}},[e._v("备选项1")]),t("tb-checkbox",{attrs:{label:"备选项2",border:"",size:"medium"},model:{value:e.checked4,callback:function(o){e.checked4=o},expression:"checked4"}},[e._v("备选项2")])],1),t("div",{staticStyle:{"margin-top":"20px"}},[t("tb-checkbox-group",{attrs:{size:"small"},model:{value:e.checkboxGroup1,callback:function(o){e.checkboxGroup1=o},expression:"checkboxGroup1"}},[t("tb-checkbox",{attrs:{label:"备选项1",border:""}},[e._v("备选项1")]),t("tb-checkbox",{attrs:{label:"备选项2",border:"",disabled:""}},[e._v("备选项2")])],1)],1),t("div",{staticStyle:{"margin-top":"20px"}},[t("tb-checkbox-group",{attrs:{size:"mini",disabled:""},model:{value:e.checkboxGroup2,callback:function(o){e.checkboxGroup2=o},expression:"checkboxGroup2"}},[t("tb-checkbox",{attrs:{label:"备选项1",border:""}},[e._v("备选项1")]),t("tb-checkbox",{attrs:{label:"备选项2",border:""}},[e._v("备选项2")])],1)],1)])]),t("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],attrs:{slot:"highlight"},slot:"highlight"},[e._v("      "),t("code",{staticClass:"javascript",domProps:{textContent:e._s(e.html7)}},[e._v("\n      ")]),e._v("\n    ")])]),e._m(15),e._m(16),t("tb-table-eazy",{attrs:{rows:e.rowCheckbox,cols:e.col}}),e._m(17),e._m(18),t("tb-table-eazy",{attrs:{rows:e.rowCheckboxEvent,cols:e.colEvent}}),e._m(19),e._m(20),t("tb-table-eazy",{attrs:{rows:e.rowCheckboxGroup,cols:e.col}}),e._m(21),e._m(22),t("tb-table-eazy",{attrs:{rows:e.rowCheckboxGroupEvent,cols:e.colEvent}}),e._m(23),e._m(24),t("tb-table-eazy",{attrs:{rows:e.rowCheckboxButton,cols:e.col}}),t("RightSmallNav",{attrs:{rightTitle:e.rightTitle},on:{goMeowPoint:e.goMeowPoint}})],1)},n=[function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("h2",{staticStyle:{"box-sizing":"border-box",margin:"0px",padding:"10px 0px","font-size":"28px","font-weight":"400",color:"rgb(31, 47, 61)","border-bottom":"1px solid rgb(197, 217, 232)","font-family":'-apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',"white-space":"normal","background-color":"rgb(255, 255, 255)"},attrs:{id:"checkbox-dan-xuan-kuang"}},[t("a",{staticClass:"header-anchor",staticStyle:{"box-sizing":"border-box",color:"rgb(16, 137, 255)","text-decoration-line":"none"},attrs:{href:"#checkbox-dan-xuan-kuang"}},[e._v("¶")]),e._v(" Checkbox 多选框 ")])},function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("h3",{staticStyle:{"box-sizing":"border-box",margin:"36px 0px 20px",padding:"0px","font-size":"22px","font-weight":"400",color:"rgb(31, 47, 61)","font-family":'-apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',"white-space":"normal","background-color":"rgb(255, 255, 255)"},attrs:{id:"ji-chu-yong-fa"}},[t("a",{staticClass:"header-anchor",staticStyle:{"box-sizing":"border-box",color:"rgb(16, 137, 255)","text-decoration-line":"none"},attrs:{href:"#ji-chu-yong-fa"}},[e._v("¶")]),e._v(" 基础用法 ")])},function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("p",[t("br")])},function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("h3",{staticStyle:{"box-sizing":"border-box",margin:"36px 0px 20px",padding:"0px","font-size":"22px","font-weight":"400",color:"rgb(31, 47, 61)","font-family":'-apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',"white-space":"normal","background-color":"rgb(255, 255, 255)"},attrs:{id:"jin-yong-zhuang-tai"}},[t("a",{staticClass:"header-anchor",staticStyle:{"box-sizing":"border-box",color:"rgb(16, 137, 255)","text-decoration-line":"none"},attrs:{href:"#jin-yong-zhuang-tai"}},[e._v("¶")]),e._v(" 禁用状态 ")])},function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("p",[t("br")])},function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("h3",{staticStyle:{"box-sizing":"border-box",margin:"36px 0px 20px",padding:"0px","font-size":"22px","font-weight":"400",color:"rgb(31, 47, 61)","font-family":'-apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',"white-space":"normal","background-color":"rgb(255, 255, 255)"},attrs:{id:"duo-xuan-kuang-zu"}},[t("a",{staticClass:"header-anchor",staticStyle:{"box-sizing":"border-box",color:"rgb(16, 137, 255)","text-decoration-line":"none"},attrs:{href:"#duo-xuan-kuang-zu"}},[e._v("¶")]),e._v(" 多选框组 ")])},function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("p",[t("br")])},function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("h3",{staticStyle:{"box-sizing":"border-box",margin:"36px 0px 20px",padding:"0px","font-size":"22px","font-weight":"400",color:"rgb(31, 47, 61)","font-family":'-apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',"white-space":"normal","background-color":"rgb(255, 255, 255)"},attrs:{id:"indeterminate-zhuang-tai"}},[t("a",{staticClass:"header-anchor",staticStyle:{"box-sizing":"border-box",color:"rgb(16, 137, 255)","text-decoration-line":"none"},attrs:{href:"#indeterminate-zhuang-tai"}},[e._v("¶")]),e._v(" indeterminate 状态 ")])},function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("p",[t("br")])},function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("h3",{staticStyle:{"box-sizing":"border-box",margin:"36px 0px 20px",padding:"0px","font-size":"22px","font-weight":"400",color:"rgb(31, 47, 61)","font-family":'-apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',"white-space":"normal","background-color":"rgb(255, 255, 255)"},attrs:{id:"max-length"}},[t("a",{staticClass:"header-anchor",staticStyle:{"box-sizing":"border-box",color:"rgb(16, 137, 255)","text-decoration-line":"none"},attrs:{href:"#max-length"}},[e._v("¶")]),e._v(" 可选项目数量的限制 ")])},function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("p",[t("br")])},function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("h3",{staticStyle:{"box-sizing":"border-box",margin:"36px 0px 20px",padding:"0px","font-size":"22px","font-weight":"400",color:"rgb(31, 47, 61)","font-family":'-apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',"white-space":"normal","background-color":"rgb(255, 255, 255)"},attrs:{id:"an-niu-yang-shi"}},[t("a",{staticClass:"header-anchor",staticStyle:{"box-sizing":"border-box",color:"rgb(16, 137, 255)","text-decoration-line":"none"},attrs:{href:"#an-niu-yang-shi"}},[e._v("¶")]),e._v(" 按钮样式 ")])},function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("p",[t("br")])},function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("h3",{staticStyle:{"box-sizing":"border-box",margin:"36px 0px 20px",padding:"0px","font-size":"22px","font-weight":"400",color:"rgb(31, 47, 61)","font-family":'-apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',"white-space":"normal","background-color":"rgb(255, 255, 255)"},attrs:{id:"dai-you-bian-kuang"}},[t("a",{staticClass:"header-anchor",staticStyle:{"box-sizing":"border-box",color:"rgb(16, 137, 255)","text-decoration-line":"none"},attrs:{href:"#dai-you-bian-kuang"}},[e._v("¶")]),e._v(" 带有边框 ")])},function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("p",[t("br")])},function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("h3",{staticStyle:{"box-sizing":"border-box",margin:"36px 0px 20px",padding:"0px","font-size":"22px","font-weight":"400",color:"rgb(31, 47, 61)","font-family":'-apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',"white-space":"normal","background-color":"rgb(255, 255, 255)"},attrs:{id:"rowCheckbox"}},[t("a",{staticClass:"header-anchor",staticStyle:{"box-sizing":"border-box",color:"rgb(16, 137, 255)","text-decoration-line":"none"},attrs:{href:"#rowCheckbox"}},[e._v("¶")]),e._v(" Checkbox props ")])},function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("p",[t("br")])},function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("h3",{staticStyle:{"box-sizing":"border-box",margin:"36px 0px 20px",padding:"0px","font-size":"22px","font-weight":"400",color:"rgb(31, 47, 61)","font-family":'-apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',"white-space":"normal","background-color":"rgb(255, 255, 255)"},attrs:{id:"rowCheckboxEvent"}},[t("a",{staticClass:"header-anchor",staticStyle:{"box-sizing":"border-box",color:"rgb(16, 137, 255)","text-decoration-line":"none"},attrs:{href:"#rowCheckboxEvent"}},[e._v("¶")]),e._v(" Checkbox events ")])},function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("p",[t("br")])},function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("h3",{staticStyle:{"box-sizing":"border-box",margin:"36px 0px 20px",padding:"0px","font-size":"22px","font-weight":"400",color:"rgb(31, 47, 61)","font-family":'-apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',"white-space":"normal","background-color":"rgb(255, 255, 255)"},attrs:{id:"rowCheckboxGroup"}},[t("a",{staticClass:"header-anchor",staticStyle:{"box-sizing":"border-box",color:"rgb(16, 137, 255)","text-decoration-line":"none"},attrs:{href:"#rowCheckboxGroup"}},[e._v("¶")]),e._v(" CheckboxGroup props ")])},function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("p",[t("br")])},function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("h3",{staticStyle:{"box-sizing":"border-box",margin:"36px 0px 20px",padding:"0px","font-size":"22px","font-weight":"400",color:"rgb(31, 47, 61)","font-family":'-apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',"white-space":"normal","background-color":"rgb(255, 255, 255)"},attrs:{id:"rowCheckboxGroupEvent"}},[t("a",{staticClass:"header-anchor",staticStyle:{"box-sizing":"border-box",color:"rgb(16, 137, 255)","text-decoration-line":"none"},attrs:{href:"#rowCheckboxGroupEvent"}},[e._v("¶")]),e._v(" CheckboxGroup events ")])},function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("p",[t("br")])},function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("h3",{staticStyle:{"box-sizing":"border-box",margin:"36px 0px 20px",padding:"0px","font-size":"22px","font-weight":"400",color:"rgb(31, 47, 61)","font-family":'-apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',"white-space":"normal","background-color":"rgb(255, 255, 255)"},attrs:{id:"rowCheckboxButton"}},[t("a",{staticClass:"header-anchor",staticStyle:{"box-sizing":"border-box",color:"rgb(16, 137, 255)","text-decoration-line":"none"},attrs:{href:"#rowCheckboxButton"}},[e._v("¶")]),e._v(" CheckboxButton props ")])},function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("p",[t("br")])}],r=(t("99af"),t("a4bd")),a=t("4e29"),c=["上海","北京","广州","深圳"],l={name:"Checkbox",components:{RightSmallNav:a["a"]},data:function(){return{rightTitle:[{title:"Checkbox 多选框",id:"checkbox-dan-xuan-kuang"},{title:"基础用法",id:"ji-chu-yong-fa"},{title:"禁用状态",id:"jin-yong-zhuang-tai"},{title:"多选框组",id:"duo-xuan-kuang-zu"},{title:"按钮样式",id:"an-niu-yang-shi"},{title:"带有边框",id:"dai-you-bian-kuang"},{title:"Checkbox props",id:"rowCheckbox"},{title:"Checkbox events",id:"rowCheckboxEvent"},{title:"CheckboxGroup props",id:"rowCheckboxGroup"},{title:"CheckboxGroup events",id:"rowCheckboxGroupEvent"},{title:"CheckboxButton props",id:"rowCheckboxButton"}],rowCheckbox:[{Parameters:"value / v-model",Explain:"绑定值",Types:"string / number / boolean",Optional:"-",Default:"-"},{Parameters:"label",Explain:"选中状态的值（只有在checkbox-group或者绑定对象类型为array时有效）",Types:"string / number / boolean",Optional:"-",Default:"-"},{Parameters:"disabled",Explain:"是否禁用",Types:"boolean",Optional:"-",Default:"false"},{Parameters:"border",Explain:"是否显示边框",Types:"boolean",Optional:"-",Default:"false"},{Parameters:"size",Explain:"Checkbox 的尺寸，仅在 border 为真时有效",Types:"string",Optional:"medium / small / mini",Default:"-"},{Parameters:"name",Explain:"原生 name 属性",Types:"string",Optional:"-",Default:"-"},{Parameters:"checked",Explain:"当前是否勾选",Types:"boolean",Optional:"-",Default:"false"},{Parameters:"indeterminate",Explain:"设置 indeterminate 状态，只负责样式控制",Types:"boolean",Optional:"-",Default:"false"}],rowCheckboxEvent:[{Parameters:"change",Explain:"绑定值变化时触发的事件",Callback:"选中的 Checkbox label 值"}],rowCheckboxGroup:[{Parameters:"value / v-model",Explain:"绑定值",Types:"string / number / boolean",Optional:"-",Default:"-"},{Parameters:"size",Explain:"多选框组尺寸，仅对按钮形式的 Checkbox 或带有边框的 Checkbox 有效",Types:"string",Optional:"medium / small / mini",Default:"-"},{Parameters:"disabled",Explain:"是否禁用",Types:"boolean",Optional:"-",Default:"false"},{Parameters:"min",Explain:"可被勾选的 checkbox 的最小数量",Types:"number",Optional:"-",Default:"-"},{Parameters:"max",Explain:"可被勾选的 checkbox 的最大数量",Types:"number",Optional:"-",Default:"-"}],rowCheckboxGroupEvent:[{Parameters:"change",Explain:"绑定值变化时触发的事件",Callback:"\t选中的 Checkbox label 值"}],rowCheckboxButton:[{Parameters:"label",Explain:"选中状态的值（只有在checkbox-group或者绑定对象类型为array时有效）",Types:"string / number / boolean",Optional:"-",Default:"-"},{Parameters:"disabled",Explain:"是否禁用",Types:"boolean",Optional:"-",Default:"false"},{Parameters:"name",Explain:"原生 name 属性",Types:"string",Optional:"-",Default:"-"},{Parameters:"checked",Explain:"当前是否勾选",Types:"boolean",Optional:"-",Default:"false"}],checked:!0,checked1:!1,checked2:!0,checked3:!0,checked4:!0,checkList:["选中且禁用","多选框 A"],checkboxGroup1:["上海"],checkboxGroup2:["上海"],checkboxGroup3:["上海"],checkboxGroup4:["上海"],checkedCities:["上海","北京"],cities:[].concat(c),cities1:[].concat(c),checkAll:!1,checkedCities1:["上海","北京"],cities2:[].concat(c),isIndeterminate:!0,html1:"    <template>\n      \x3c!-- 'checked' 为 true 或 false --\x3e\n      <tb-checkbox v-model=\"checked\">备选项</tb-checkbox>\n    </template>\n    <script>\n      export default {\n        data() {\n          return {\n            checked: true\n          };\n        }\n      };\n    <\/script>\n              ",html2:'    <template>\n      <tb-checkbox v-model="checked1" disabled>备选项1</tb-checkbox>\n      <tb-checkbox v-model="checked2" disabled>备选项</tb-checkbox>\n    </template>\n    <script>\n      export default {\n        data() {\n          return {\n            checked1: false,\n            checked2: true\n          };\n        }\n      };\n    <\/script>\n              ',html3:'    <template>\n      <tb-checkbox-group v-model="checkList">\n        <tb-checkbox label="多选框 A">多选框 A</tb-checkbox>\n        <tb-checkbox label="多选框 B">多选框 B</tb-checkbox>\n        <tb-checkbox label="多选框 C">多选框 C</tb-checkbox>\n        <tb-checkbox label="禁用" disabled>禁用" disabled</tb-checkbox>\n        <tb-checkbox label="选中且禁用" disabled>选中且禁用" disabled</tb-checkbox>\n      </tb-checkbox-group>\n    </template>\n\n    <script>\n      export default {\n        data () {\n          return {\n            checkList: [\'选中且禁用\',\'多选框 A\']\n          };\n        }\n      };\n    <\/script>\n              ',html4:'    <template>\n      <tb-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</tb-checkbox>\n      <div style="margin: 15px 0;"></div>\n      <tb-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">\n        <tb-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</tb-checkbox>\n      </tb-checkbox-group>\n    </template>\n    <script>\n      const cityOptions = [\'上海\', \'北京\', \'广州\', \'深圳\'];\n      export default {\n        data() {\n          return {\n            checkAll: false,\n            checkedCities: [\'上海\', \'北京\'],\n            cities: cityOptions,\n            isIndeterminate: true\n          };\n        },\n        methods: {\n          handleCheckAllChange(val) {\n            this.checkedCities = val ? cityOptions : [];\n            this.isIndeterminate = false;\n          },\n          handleCheckedCitiesChange(value) {\n            let checkedCount = value.length;\n            this.checkAll = checkedCount === this.cities.length;\n            this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;\n          }\n        }\n      };\n    <\/script>\n              ',html5:"    <template>\n      <tb-checkbox-group \n        v-model=\"checkedCities\"\n        :min=\"1\"\n        :max=\"2\">\n        <tb-checkbox v-for=\"city in cities\" :label=\"city\" :key=\"city\">{{city}}</tb-checkbox>\n      </tb-checkbox-group>\n    </template>\n    <script>\n      const cityOptions = ['上海', '北京', '广州', '深圳'];\n      export default {\n        data() {\n          return {\n            checkedCities: ['上海', '北京'],\n            cities: cityOptions\n          };\n        }\n      };\n    <\/script>\n              ",html6:'    <template>\n      <div>\n        <tb-checkbox-group v-model="checkboxGroup1" size="medium">\n          <tb-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</tb-checkbox-button>\n        </tb-checkbox-group>\n      </div>\n      <div style="margin-top: 20px">\n        <tb-checkbox-group v-model="checkboxGroup2" size="small">\n          <tb-checkbox-button v-for="city in cities" :label="city" :disabled="city === \'北京\'" :key="city">{{city}}</tb-checkbox-button>\n        </tb-checkbox-group>\n      </div>\n      <div style="margin-top: 20px">\n        <tb-checkbox-group v-model="checkboxGroup3" size="mini" disabled>\n          <tb-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</tb-checkbox-button>\n        </tb-checkbox-group>\n      </div>\n    </template>\n    <script>\n      const cityOptions = [\'上海\', \'北京\', \'广州\', \'深圳\'];\n      export default {\n        data () {\n          return {\n            checkboxGroup1: [\'上海\'],\n            checkboxGroup2: [\'上海\'],\n            checkboxGroup3: [\'上海\'],\n     \n            cities: cityOptions\n          };\n        }\n      }\n    <\/script>\n              ',html7:'    <template>\n      <div >\n        <tb-checkbox v-model="checked3" label="备选项1" border size="medium">备选项1</tb-checkbox>\n        <tb-checkbox v-model="checked4" label="备选项2" border size="medium">备选项2</tb-checkbox>\n      </div>\n      <div style="margin-top: 20px">\n        <tb-checkbox-group v-model="checkboxGroup1" size="small">\n          <tb-checkbox label="备选项1" border>备选项1</tb-checkbox>\n          <tb-checkbox label="备选项2" border disabled>备选项2</tb-checkbox>\n        </tb-checkbox-group>\n      </div>\n      <div style="margin-top: 20px">\n        <tb-checkbox-group v-model="checkboxGroup2" size="mini" disabled>\n          <tb-checkbox label="备选项1" border>备选项1</tb-checkbox>\n          <tb-checkbox label="备选项2" border>备选项2</tb-checkbox>\n        </tb-checkbox-group>\n      </div>\n    </template>\n\n    <script>\n      export default {\n        data () {\n          return {\n            checked1: true,\n            checked2: false,\n            checked3: false,\n            checked4: true,\n            checkboxGroup1: [],\n            checkboxGroup2: []\n          };\n        }\n      }\n    <\/script>\n              '}},mixins:[r["a"]],methods:{handleCheckAllChange:function(e){this.checkedCities=e?c:[],this.isIndeterminate=!1},handleCheckedCitiesChange:function(e){var o=e.length;this.checkAll=o===this.cities2.length,this.isIndeterminate=o>0&&o<this.cities2.length},goMeowPoint:function(e){var o=window.document.querySelector("#"+e);o.scrollIntoView(!0)}}},s=l,b=(t("e7af"),t("2877")),h=Object(b["a"])(s,i,n,!1,null,"5720944f",null);o["default"]=h.exports},"4e29":function(e,o,t){"use strict";var i=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{staticClass:"right_list_screen"},[t("div",{staticClass:"right_list"},e._l(e.rightTitle,(function(o){return t("div",{key:o.id,class:"slider_li "+o.id,on:{click:function(t){return e.goMeowPoint(o.id)}}},[e._v(e._s(o.title))])})),0)])},n=[],r=(t("159b"),{name:"RightSmallNav",props:["rightTitle"],methods:{goMeowPoint:function(e){var o=this;this.$emit("goMeowPoint",e),setTimeout((function(){var t=document.querySelectorAll(".slider_li");o.$nextTick((function(){t.forEach((function(e){e.style.color="#606266"}));var o=document.querySelector("."+e);o.style.color="#409eff"}))}),0)}}}),a=r,c=(t("0a0f2"),t("2877")),l=Object(c["a"])(a,i,n,!1,null,null,null);o["a"]=l.exports},6714:function(e,o,t){},a4bd:function(e,o,t){"use strict";t("159b");o["a"]={data:function(){return{col:[{label:"参数",align:"center",field:"Parameters"},{label:"说明",align:"center",field:"Explain"},{label:"类型",align:"center",field:"Types"},{label:"可选值",align:"center",field:"Optional"},{label:"默认值",align:"center",field:"Default"}],colEvent:[{label:"方法/事件名称",align:"center",field:"Parameters"},{label:"说明",align:"center",field:"Explain"},{label:"返回值",align:"center",field:"Callback"}],colSlot:[{label:"名称",align:"center",field:"Parameters"},{label:"说明",align:"center",field:"Explain"}]}},mounted:function(){var e=this,o=window.document.querySelector("."+this.rightTitle[0].id);o.style.color="#409eff";var t=window.document.querySelector("#containers");t.onscroll=function(){if(e.rightTitle.forEach((function(o,i){var n=window.document.querySelector("#"+o.id),r=window.document.querySelector("."+o.id),a=null;e.rightTitle[i+1]&&(a=window.document.querySelector("#"+e.rightTitle[i+1].id)),(null==a||i+1>=e.rightTitle.length)&&(a={offsetTop:t.scrollHeight}),n&&(r.style.color="#606266"),n&&t.scrollTop+80>=n.offsetTop&&t.scrollTop+80<a.offsetTop&&(r.style.color="#409eff")})),0==t.scrollTop){var o=window.document.querySelector("."+e.rightTitle[0].id);o.style.color="#409eff"}}},beforeDestroy:function(){if(window.document.querySelector("#containers")){var e=window.document.querySelector("#containers");e.onscroll=null}}}},b8e1:function(e,o,t){},e7af:function(e,o,t){"use strict";t("6714")}}]);
//# sourceMappingURL=chunk-42ed4a8e.ac7778fe.js.map