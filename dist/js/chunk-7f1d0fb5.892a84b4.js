(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7f1d0fb5"],{"0a0f2":function(t,o,e){"use strict";e("b8e1")},"4e29":function(t,o,e){"use strict";var n=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"right_list_screen"},[e("div",{staticClass:"right_list"},t._l(t.rightTitle,(function(o){return e("div",{key:o.id,class:"slider_li "+o.id,on:{click:function(e){return t.goMeowPoint(o.id)}}},[t._v(t._s(o.title))])})),0)])},a=[],l=(e("159b"),{name:"RightSmallNav",props:["rightTitle"],methods:{goMeowPoint:function(t){var o=this;this.$emit("goMeowPoint",t),setTimeout((function(){var e=document.querySelectorAll(".slider_li");o.$nextTick((function(){e.forEach((function(t){t.style.color="#606266"}));var o=document.querySelector("."+t);o.style.color="#409eff"}))}),0)}}}),i=l,r=(e("0a0f2"),e("2877")),s=Object(r["a"])(i,n,a,!1,null,null,null);o["a"]=s.exports},9469:function(t,o,e){},a145:function(t,o,e){"use strict";e.r(o);var n=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",[t._m(0),e("p",{staticStyle:{"box-sizing":"border-box","margin-top":"1em","margin-bottom":"1em",padding:"0px",color:"rgba(0, 0, 0, 0.85)","font-family":'-apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',"font-size":"14px","white-space":"normal","background-color":"rgb(255, 255, 255)"}},[t._v(" 对话框/弹窗，在浮层中显示，引导用户进行相关操作。 ")]),t._m(1),e("p",{staticStyle:{"box-sizing":"border-box","margin-top":"1em","margin-bottom":"1em",padding:"0px",color:"rgba(0, 0, 0, 0.85)","font-family":'-apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',"font-size":"14px","white-space":"normal","background-color":"rgb(255, 255, 255)"}},[t._v(" 最简单的使用方法，通过控制属性value来显示 / 隐藏对话框。 ")]),t._m(2),e("Demo",[e("div",{attrs:{slot:"source"},slot:"source"},[e("tb-button",{attrs:{type:"primary"},on:{click:function(o){t.modal1=!0}}},[t._v("显示弹窗")]),e("tb-modal",{attrs:{title:"普通的模态框标题"},on:{ok:function(o){return t.$message("ok click")},close:function(o){return t.$message("close click","success")}},model:{value:t.modal1,callback:function(o){t.modal1=o},expression:"modal1"}},[e("p",[t._v("我是弹窗内容...")]),e("p",[t._v("我是弹窗内容...")]),e("p",[t._v("我是弹窗内容...")])])],1),e("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],attrs:{slot:"highlight"},slot:"highlight"},[t._v("      "),e("code",{staticClass:"javascript",domProps:{textContent:t._s(t.html1)}},[t._v("\n      ")]),t._v("\n    ")])]),t._m(3),e("p",{staticStyle:{"box-sizing":"border-box","margin-top":"1em","margin-bottom":"1em",padding:"0px",color:"rgba(0, 0, 0, 0.85)","font-family":'-apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',"font-size":"14px","white-space":"normal","background-color":"rgb(255, 255, 255)"}},[t._v(" 设置 clearable 可以开启清空按钮,icon设置icon图标名称 ")]),t._m(4),e("Demo",[e("div",{attrs:{slot:"source"},slot:"source"},[e("div",[e("tb-button",{on:{click:function(o){t.modal2=!0}}},[t._v("自定义页头页脚")]),e("tb-button",{on:{click:function(o){t.modal3=!0}}},[t._v("不带标题栏和页脚")]),e("tb-button",{on:{click:function(o){t.modal4=!0}}},[t._v("设置宽")]),e("tb-modal",{model:{value:t.modal2,callback:function(o){t.modal2=o},expression:"modal2"}},[e("p",{staticStyle:{color:"#f60","text-align":"center"},attrs:{slot:"header"},slot:"header"},[e("span",[t._v("自定义页头")])]),e("p",[t._v("我是弹窗内容...")]),e("p",[t._v("我是弹窗内容...")]),e("p",[t._v("我是弹窗内容...")]),e("div",{attrs:{slot:"footer"},slot:"footer"},[e("tb-button",{attrs:{type:"danger"},on:{click:function(o){return t.$message("delete click","danger")}}},[t._v("Delete")])],1)]),e("tb-modal",{attrs:{"footer-hide":""},model:{value:t.modal3,callback:function(o){t.modal3=o},expression:"modal3"}},[e("p",[t._v("我是弹窗内容...")]),e("p",[t._v("我是弹窗内容...")]),e("p",[t._v("我是弹窗内容...")])]),e("tb-modal",{attrs:{title:"自定义宽度",width:"300"},model:{value:t.modal4,callback:function(o){t.modal4=o},expression:"modal4"}},[e("p",[t._v("自定义宽度，单位 px，默认 520px。 对话框的宽度是响应式的，当屏幕尺寸小于 768px 时，宽度会变为自动auto。")])])],1)]),e("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],attrs:{slot:"highlight"},slot:"highlight"},[t._v("      "),e("code",{staticClass:"javascript",domProps:{textContent:t._s(t.html2)}},[t._v("\n      ")]),t._v("\n    ")])]),t._m(5),e("p",{staticStyle:{"box-sizing":"border-box","margin-top":"1em","margin-bottom":"1em",padding:"0px",color:"rgba(0, 0, 0, 0.85)","font-family":'-apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',"font-size":"14px","white-space":"normal","background-color":"rgb(255, 255, 255)"}},[t._v(" 可以设置不同的弹窗动画，可以点击查看显示效果 ")]),t._m(6),e("Demo",[e("div",{attrs:{slot:"source"},slot:"source"},[e("tb-button",{on:{click:function(o){return t.openModal("fade-down")}}},[t._v("fade-down")]),e("tb-button",{on:{click:function(o){return t.openModal("fade-in")}}},[t._v("fade-in")]),e("tb-button",{on:{click:function(o){return t.openModal("zoom-in")}}},[t._v("zoom-in")]),e("tb-button",{on:{click:function(o){return t.openModal("fade-transverse")}}},[t._v("fade-transverse")]),e("tb-modal",{attrs:{title:"不同的modal弹出动画","transition-name":t.transitionName},model:{value:t.visible,callback:function(o){t.visible=o},expression:"visible"}},[e("p",[t._v("我是弹窗内容...")]),e("p",[t._v("我是弹窗内容...")]),e("p",[t._v("我是弹窗内容...")])])],1),e("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],attrs:{slot:"highlight"},slot:"highlight"},[t._v("      "),e("code",{staticClass:"javascript",domProps:{textContent:t._s(t.html3)}},[t._v("\n      ")]),t._v("\n    ")])]),t._m(7),e("p",{staticStyle:{"box-sizing":"border-box","margin-top":"1em","margin-bottom":"1em",padding:"0px",color:"rgba(0, 0, 0, 0.85)","font-family":'-apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',"font-size":"14px","white-space":"normal","background-color":"rgb(255, 255, 255)"}},[t._v(" 给Modal添加属性loading后，点击确定按钮对话框不会自动消失，并显示 loading 状态， 需要手动关闭对话框，常用于表单提交。 这里建议自定义footer以达到更精确的按钮控制 ")]),t._m(8),e("Demo",[e("div",{attrs:{slot:"source"},slot:"source"},[e("div",[e("tb-button",{attrs:{type:"primary"},on:{click:t.showModal}},[t._v("显示弹窗")]),e("tb-modal",{attrs:{title:"普通的模态框标题",loading:t.loading},on:{ok:t.asyncOK},model:{value:t.modal5,callback:function(o){t.modal5=o},expression:"modal5"}},[e("tb-form",{ref:"form",attrs:{model:t.formInline,rules:t.ruleValidate,"label-width":80}},[e("tb-form-item",{attrs:{label:"用户名",prop:"name"}},[e("tb-input",{attrs:{placeholder:"请输入"},model:{value:t.formInline.name,callback:function(o){t.$set(t.formInline,"name",o)},expression:"formInline.name"}})],1)],1)],1)],1)]),e("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],attrs:{slot:"highlight"},slot:"highlight"},[t._v("      "),e("code",{staticClass:"javascript",domProps:{textContent:t._s(t.html4)}},[t._v("\n      ")]),t._v("\n    ")])]),t._m(9),e("p",{staticStyle:{"box-sizing":"border-box","margin-top":"1em","margin-bottom":"1em",padding:"0px",color:"rgba(0, 0, 0, 0.85)","font-family":'-apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',"font-size":"14px","white-space":"normal","background-color":"rgb(255, 255, 255)"}},[t._v(" 可以禁用关闭和遮罩层关闭。 ")]),t._m(10),e("Demo",[e("div",{attrs:{slot:"source"},slot:"source"},[e("tb-button",{on:{click:function(o){t.modal6=!0}}},[t._v("禁用右上角关闭")]),e("tb-button",{on:{click:function(o){t.modal7=!0}}},[t._v("禁用mask关闭")]),e("tb-modal",{attrs:{title:"普通的模态框标题",closable:!1},model:{value:t.modal6,callback:function(o){t.modal6=o},expression:"modal6"}},[e("p",[t._v("禁用右上角关闭")])]),e("tb-modal",{attrs:{title:"普通的模态框标题","mask-closable":!1},model:{value:t.modal7,callback:function(o){t.modal7=o},expression:"modal7"}},[e("p",[t._v("禁用mask关闭")])])],1),e("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],attrs:{slot:"highlight"},slot:"highlight"},[t._v("      "),e("code",{staticClass:"javascript",domProps:{textContent:t._s(t.html5)}},[t._v("\n      ")]),t._v("\n    ")])]),t._m(11),e("p",{staticStyle:{"box-sizing":"border-box","margin-top":"1em","margin-bottom":"1em",padding:"0px",color:"rgba(0, 0, 0, 0.85)","font-family":'-apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',"font-size":"14px","white-space":"normal","background-color":"rgb(255, 255, 255)"}},[t._v(" 弹窗嵌套一般情况下不推荐嵌套，但也可以这么使用 ")]),t._m(12),e("Demo",[e("div",{attrs:{slot:"source"},slot:"source"},[e("div",[e("tb-button",{on:{click:function(o){t.modal10=!0}}},[t._v("显示弹窗一")]),e("tb-button",{on:{click:function(o){t.modal12=!0}}},[t._v("显示全屏弹窗")]),e("tb-button",{on:{click:t.openModal5}},[t._v("自定义弹窗")]),e("tb-modal",{attrs:{title:"弹窗一","footer-hide":"",width:"600"},model:{value:t.modal10,callback:function(o){t.modal10=o},expression:"modal10"}},[e("p",[t._v("我是弹窗内容...")]),e("p",[t._v("我是弹窗内容...")]),e("p",[t._v("我是弹窗内容...")]),e("tb-button",{attrs:{type:"primary"},on:{click:function(o){t.modal11=!0}}},[t._v("打开嵌套弹窗")]),e("tb-modal",{attrs:{title:"嵌套弹窗"},model:{value:t.modal11,callback:function(o){t.modal11=o},expression:"modal11"}},[e("p",[t._v("我是弹窗内容...")]),e("p",[t._v("我是弹窗内容...")]),e("p",[t._v("我是弹窗内容...")])])],1),e("tb-modal",{attrs:{title:"全屏弹窗","footer-hide":"",fullscreen:""},model:{value:t.modal12,callback:function(o){t.modal12=o},expression:"modal12"}},[e("p",[t._v("我是弹窗内容...")]),e("p",[t._v("我是弹窗内容...")]),e("p",[t._v("我是弹窗内容...")]),e("tb-button",{attrs:{type:"primary"},on:{click:function(o){t.modal13=!0}}},[t._v("打开嵌套弹窗")]),e("tb-modal",{attrs:{title:"全屏嵌套弹窗"},model:{value:t.modal13,callback:function(o){t.modal13=o},expression:"modal13"}},[e("p",[t._v("我是弹窗内容...")]),e("p",[t._v("我是弹窗内容...")]),e("p",[t._v("我是弹窗内容...")])])],1),e("transition",{attrs:{name:"move-right"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.modal14,expression:"modal14"}],staticStyle:{position:"fixed",top:"0",right:"0",bottom:"0",left:"0","box-sizing":"border-box","z-index":"1000","background-color":"#fff"}},[t._v(" 自定义弹窗内容 "),e("tb-button",{on:{click:t.closeModal5}},[t._v("关闭自定义弹窗")]),e("tb-button",{attrs:{type:"primary"},on:{click:function(o){t.modal4=!0}}},[t._v("打开嵌套弹窗")]),e("tb-modal",{attrs:{title:"全屏嵌套弹窗","stop-remove-scroll":""},model:{value:t.modal4,callback:function(o){t.modal4=o},expression:"modal4"}},[e("p",[t._v("我是弹窗内容...")]),e("p",[t._v("我是弹窗内容...")]),e("p",[t._v("我是弹窗内容...")])])],1)])],1)]),e("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],attrs:{slot:"highlight"},slot:"highlight"},[t._v("      "),e("code",{staticClass:"javascript",domProps:{textContent:t._s(t.html6)}},[t._v("\n      ")]),t._v("\n    ")])]),t._m(13),e("p",{staticStyle:{"box-sizing":"border-box","margin-top":"1em","margin-bottom":"1em",padding:"0px",color:"rgba(0, 0, 0, 0.85)","font-family":'-apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',"font-size":"14px","white-space":"normal","background-color":"rgb(255, 255, 255)"}},[t._v(" 可以自定义对话框的位置。 ")]),t._m(14),e("Demo",[e("div",{attrs:{slot:"source"},slot:"source"},[e("tb-button",{on:{click:function(o){t.modal8=!0}}},[t._v("距离顶部200px")]),e("tb-button",{on:{click:function(o){t.modal9=!0}}},[t._v("垂直居中")]),e("tb-modal",{attrs:{title:"距离顶部",styles:{top:"200px"}},model:{value:t.modal8,callback:function(o){t.modal8=o},expression:"modal8"}},[e("p",[t._v("距离顶部200px")])]),e("tb-modal",{attrs:{title:"垂直居中","class-name":"vertical-center-modal"},model:{value:t.modal9,callback:function(o){t.modal9=o},expression:"modal9"}},[e("p",[t._v("垂直居中的模态框")])])],1),e("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],attrs:{slot:"highlight"},slot:"highlight"},[t._v("      "),e("code",{staticClass:"javascript",domProps:{textContent:t._s(t.html7)}},[t._v("\n      ")]),t._v("\n    ")])]),t._m(15),t._m(16),e("tb-table-eazy",{attrs:{rows:t.rowModal,cols:t.col}}),t._m(17),t._m(18),e("tb-table-eazy",{attrs:{rows:t.rowModalEvent,cols:t.colEvent}}),t._m(19),t._m(20),e("tb-table-eazy",{attrs:{rows:t.rowModalSlot,cols:t.colSlot}}),e("RightSmallNav",{attrs:{rightTitle:t.rightTitle},on:{goMeowPoint:t.goMeowPoint}})],1)},a=[function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("h2",{staticStyle:{"box-sizing":"border-box",margin:"0px",padding:"10px 0px","font-size":"28px","font-weight":"400",color:"rgb(31, 47, 61)","border-bottom":"1px solid rgb(197, 217, 232)","font-family":'-apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',"white-space":"normal","background-color":"rgb(255, 255, 255)"},attrs:{id:"modal-mo-tai-kuang"}},[e("a",{staticClass:"header-anchor",staticStyle:{"box-sizing":"border-box",color:"rgb(16, 137, 255)","text-decoration-line":"none"},attrs:{href:"#modal-mo-tai-kuang"}},[t._v("¶")]),t._v(" Modal 模态框 ")])},function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("h3",{staticStyle:{"box-sizing":"border-box",margin:"36px 0px 20px",padding:"0px","font-size":"22px","font-weight":"400",color:"rgb(31, 47, 61)","font-family":'-apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',"white-space":"normal","background-color":"rgb(255, 255, 255)"},attrs:{id:"ji-chu-yong-fa"}},[e("a",{staticClass:"header-anchor",staticStyle:{"box-sizing":"border-box",color:"rgb(16, 137, 255)","text-decoration-line":"none"},attrs:{href:"#ji-chu-yong-fa"}},[t._v("¶")]),t._v(" 基础用法 ")])},function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("p",[e("br")])},function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("h3",{staticStyle:{"box-sizing":"border-box",margin:"36px 0px 20px",padding:"0px","font-size":"22px","font-weight":"400",color:"rgb(31, 47, 61)","font-family":'-apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',"white-space":"normal","background-color":"rgb(255, 255, 255)"},attrs:{id:"tu-biao-he-qing-kong"}},[e("a",{staticClass:"header-anchor",staticStyle:{"box-sizing":"border-box",color:"rgb(16, 137, 255)","text-decoration-line":"none"},attrs:{href:"#tu-biao-he-qing-kong"}},[t._v("¶")]),t._v(" 图标和清空 ")])},function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("p",[e("br")])},function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("h3",{staticStyle:{"box-sizing":"border-box",margin:"36px 0px 20px",padding:"0px","font-size":"22px","font-weight":"400",color:"rgb(31, 47, 61)","font-family":'-apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',"white-space":"normal","background-color":"rgb(255, 255, 255)"},attrs:{id:"zi-ding-yi-dong-hua"}},[e("a",{staticClass:"header-anchor",staticStyle:{"box-sizing":"border-box",color:"rgb(16, 137, 255)","text-decoration-line":"none"},attrs:{href:"#zi-ding-yi-dong-hua"}},[t._v("¶")]),t._v(" 自定义动画 ")])},function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("p",[e("br")])},function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("h3",{staticStyle:{"box-sizing":"border-box",margin:"36px 0px 20px",padding:"0px","font-size":"22px","font-weight":"400",color:"rgb(31, 47, 61)","font-family":'-apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',"white-space":"normal","background-color":"rgb(255, 255, 255)"},attrs:{id:"yi-bu-guan-bi"}},[e("a",{staticClass:"header-anchor",staticStyle:{"box-sizing":"border-box",color:"rgb(16, 137, 255)","text-decoration-line":"none"},attrs:{href:"#yi-bu-guan-bi"}},[t._v("¶")]),t._v(" 异步关闭 ")])},function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("p",[e("br")])},function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("h3",{staticStyle:{"box-sizing":"border-box",margin:"36px 0px 20px",padding:"0px","font-size":"22px","font-weight":"400",color:"rgb(31, 47, 61)","font-family":'-apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',"white-space":"normal","background-color":"rgb(255, 255, 255)"},attrs:{id:"jin-yong-guan-bi"}},[e("a",{staticClass:"header-anchor",staticStyle:{"box-sizing":"border-box",color:"rgb(16, 137, 255)","text-decoration-line":"none"},attrs:{href:"#jin-yong-guan-bi"}},[t._v("¶")]),t._v(" 禁用关闭 ")])},function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("p",[e("br")])},function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("h3",{staticStyle:{"box-sizing":"border-box",margin:"36px 0px 20px",padding:"0px","font-size":"22px","font-weight":"400",color:"rgb(31, 47, 61)","font-family":'-apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',"white-space":"normal","background-color":"rgb(255, 255, 255)"},attrs:{id:"qian-tao"}},[e("a",{staticClass:"header-anchor",staticStyle:{"box-sizing":"border-box",color:"rgb(16, 137, 255)","text-decoration-line":"none"},attrs:{href:"#qian-tao"}},[t._v("¶")]),t._v(" 嵌套 ")])},function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("p",[e("br")])},function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("h3",{staticStyle:{"box-sizing":"border-box",margin:"36px 0px 20px",padding:"0px","font-size":"22px","font-weight":"400",color:"rgb(31, 47, 61)","font-family":'-apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',"white-space":"normal","background-color":"rgb(255, 255, 255)"},attrs:{id:"zi-ding-yi-wei-zhi"}},[e("a",{staticClass:"header-anchor",staticStyle:{"box-sizing":"border-box",color:"rgb(16, 137, 255)","text-decoration-line":"none"},attrs:{href:"#zi-ding-yi-wei-zhi"}},[t._v("¶")]),t._v(" 自定义位置 ")])},function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("p",[e("br")])},function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("h3",{staticStyle:{"box-sizing":"border-box",margin:"36px 0px 20px",padding:"0px","font-size":"22px","font-weight":"400",color:"rgb(31, 47, 61)","font-family":'-apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',"white-space":"normal","background-color":"rgb(255, 255, 255)"},attrs:{id:"rowModal"}},[e("a",{staticClass:"header-anchor",staticStyle:{"box-sizing":"border-box",color:"rgb(16, 137, 255)","text-decoration-line":"none"},attrs:{href:"#rowModal"}},[t._v("¶")]),t._v(" Modal props ")])},function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("p",[e("br")])},function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("h3",{staticStyle:{"box-sizing":"border-box",margin:"36px 0px 20px",padding:"0px","font-size":"22px","font-weight":"400",color:"rgb(31, 47, 61)","font-family":'-apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',"white-space":"normal","background-color":"rgb(255, 255, 255)"},attrs:{id:"rowModalEvent"}},[e("a",{staticClass:"header-anchor",staticStyle:{"box-sizing":"border-box",color:"rgb(16, 137, 255)","text-decoration-line":"none"},attrs:{href:"#rowModalEvent"}},[t._v("¶")]),t._v(" Modal events ")])},function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("p",[e("br")])},function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("h3",{staticStyle:{"box-sizing":"border-box",margin:"36px 0px 20px",padding:"0px","font-size":"22px","font-weight":"400",color:"rgb(31, 47, 61)","font-family":'-apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',"white-space":"normal","background-color":"rgb(255, 255, 255)"},attrs:{id:"rowModalSlot"}},[e("a",{staticClass:"header-anchor",staticStyle:{"box-sizing":"border-box",color:"rgb(16, 137, 255)","text-decoration-line":"none"},attrs:{href:"#rowModalSlot"}},[t._v("¶")]),t._v(" Modal slots ")])},function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("p",[e("br")])}],l=(e("b0c0"),e("a4bd")),i=e("4e29"),r={name:"Modal",components:{RightSmallNav:i["a"]},data:function(){return{rightTitle:[{title:"Modal 模态框",id:"modal-mo-tai-kuang"},{title:"基础用法",id:"ji-chu-yong-fa"},{title:"自定义动画",id:"zi-ding-yi-dong-hua"},{title:"异步关闭",id:"yi-bu-guan-bi"},{title:"禁用关闭",id:"jin-yong-guan-bi"},{title:"嵌套",id:"qian-tao"},{title:"自定义位置",id:"zi-ding-yi-wei-zhi"},{title:"Modal props",id:"rowModal"},{title:"Modal events",id:"rowModalEvent"},{title:"Modal slots",id:"rowModalSlot"}],modal1:!1,modal2:!1,modal3:!1,modal4:!1,modal5:!1,modal6:!1,modal7:!1,modal8:!1,modal9:!1,modal10:!1,modal11:!1,modal12:!1,modal13:!1,modal14:!1,loading:!0,formInline:{name:""},ruleValidate:{name:[{required:!0,message:"用户名不能为空",trigger:"blur"}]},visible:!1,transitionName:"",rowModal:[{Parameters:"value",Explain:"是否显示，可使用 v-model 双向绑定数据。",Types:"Boolean",Optional:"-",Default:"false"},{Parameters:"title",Explain:"标题，如果使用 slot 自定义了页头，则 title 无效",Types:"String",Optional:"-",Default:"—"},{Parameters:"closable",Explain:"右上角的关闭按钮",Types:"Boolean",Optional:"-",Default:"true"},{Parameters:"mask-closable",Explain:"是否允许点击遮罩层关闭",Types:"Boolean",Optional:"-",Default:"true"},{Parameters:"loading",Explain:"确定按钮时，确定按钮是否显示 loading 状态，开启则需手动设置value来关闭对话框",Types:"Boolean",Optional:"-",Default:"false"},{Parameters:"fullscreen",Explain:"是否全屏显示",Types:"Boolean",Optional:"-",Default:"false"},{Parameters:"draggable",Explain:"是否可以拖拽移动",Types:"Boolean",Optional:"-",Default:"false"},{Parameters:"mask",Explain:"是否显示遮罩层，开启 draggable 时，强制不显示",Types:"Boolean",Optional:"-",Default:"true"},{Parameters:"ok-text",Explain:"确定按钮文字",Types:"String",Optional:"-",Default:"确定"},{Parameters:"cancel-text",Explain:"取消按钮文字",Types:"String",Optional:"-",Default:"取消"},{Parameters:"width",Explain:"对话框宽度",Types:"Number/ String",Optional:"-",Default:"520"},{Parameters:"footer-hide",Explain:"不显示底部",Types:"Boolean",Optional:"-",Default:"false"},{Parameters:"styles",Explain:"设置浮层样式，调整浮层位置等",Types:"Object",Optional:"-",Default:"-"},{Parameters:"body-styles",Explain:"设置body的样式,多用于设置自定义内边距",Types:"Object",Optional:"-",Default:"-"},{Parameters:"class-name",Explain:"设置对话框容器的类名",Types:"String",Optional:"-",Default:"-"},{Parameters:"z-index",Explain:"层级",Types:"Number",Optional:"-",Default:"2000"},{Parameters:"append-to-body",Explain:"是否将对话框放置于 body 内",Types:"Boolean",Optional:"-",Default:"false"},{Parameters:"stop-remove-scroll",Explain:"是否阻止模态窗释放body滚动，多应用于多层嵌套",Types:"Boolean",Optional:"-",Default:"false"},{Parameters:"transition-name",Explain:"自定义动画名称，默认的modal-fade动画会自动追踪鼠标点击位置",Types:"String",Optional:"-",Default:"modal-fade"}],rowModalEvent:[{Parameters:"ok",Explain:"点击确定的回调",Callback:"-"},{Parameters:"open",Explain:"modal打开回调",Callback:"-"},{Parameters:"opened",Explain:"打开动画完成回调",Callback:"event"},{Parameters:"close",Explain:"modal关闭回调",Callback:"-"},{Parameters:"closed",Explain:"关闭动画结束回调",Callback:"-"},{Parameters:"visible-change",Explain:"显示状态发生变化时触发",Callback:"true / false"}],rowModalSlot:[{Parameters:"header",Explain:"自定义页头"},{Parameters:"footer",Explain:"自定义页脚内容"},{Parameters:"close",Explain:"自定义右上角关闭内容"}],html1:'    <template>\n        <tb-button type="primary" @click="modal1 = true">显示弹窗</tb-button>\n        <tb-modal v-model="modal1" title="普通的模态框标题"\n                @ok="$message(\'ok click\')" @close="$message(\'close click\',\'success\')">\n            <p>我是弹窗内容...</p>\n            <p>我是弹窗内容...</p>\n            <p>我是弹窗内容...</p>\n        </tb-modal>\n    </template>\n    <script>\n        export default {\n            data() {\n            return {\n                modal1: false\n            }\n            }\n        }\n    <\/script>\n              ',html2:'    <template>\n        <tb-button @click="modal2 = true">自定义页头页脚</tb-button>\n        <tb-button @click="modal3 = true">不带标题栏和页脚</tb-button>\n        <tb-button @click="modal4 = true">设置宽</tb-button>\n        <tb-modal v-model="modal2">\n            <p slot="header" style="color:#f60;text-align:center">\n            <span>自定义页头</span>\n            </p>\n            <p>我是弹窗内容...</p>\n            <p>我是弹窗内容...</p>\n            <p>我是弹窗内容...</p>\n            <div slot="footer">\n            <tb-button type="danger" @click="$message(\'delete click\',\'danger\')">Delete</tb-button>\n            </div>\n        </tb-modal>\n        <tb-modal v-model="modal3" footer-hide>\n            <p>我是弹窗内容...</p>\n            <p>我是弹窗内容...</p>\n            <p>我是弹窗内容...</p>\n        </tb-modal>\n        <tb-modal v-model="modal4"\n                title="自定义宽度"\n                width="300">\n            <p> 自定义宽度，单位 px，默认 520px。\n            对话框的宽度是响应式的，当屏幕尺寸小于 768px 时，宽度会变为自动auto。</p>\n        </tb-modal>\n    </template>\n    <script>\n        export default {\n            data() {\n            return {\n                modal2: false,\n                modal3: false,\n                modal4: false\n            }\n            }\n        }\n    <\/script>\n              ',html3:'    <template>\n        <tb-button @click="openModal(\'fade-down\')">fade-down</tb-button>\n        <tb-button @click="openModal(\'fade-in\')">fade-in</tb-button>\n        <tb-button @click="openModal(\'zoom-in\')">zoom-in</tb-button>\n        <tb-button @click="openModal(\'fade-transverse\')">fade-transverse</tb-button>\n        <tb-modal v-model="visible" title="不同的modal弹出动画" :transition-name="transitionName">\n            <p>我是弹窗内容...</p>\n            <p>我是弹窗内容...</p>\n            <p>我是弹窗内容...</p>\n        </tb-modal>\n    </template>\n    <script>\n        export default {\n            data() {\n            return {\n                visible: false,\n                transitionName:\'\'\n            }\n            },\n            methods: {\n            openModal(name){\n                this.transitionName = name\n                this.visible = true\n            }\n            }\n        }\n    <\/script>\n              ',html4:'    <template>\n        <tb-button type="primary" @click="showModal">显示弹窗</tb-button>\n        <tb-modal v-model="modal5" title="普通的模态框标题"\n                :loading="loading"\n                @ok="asyncOK">\n            <tb-form :model="formInline" ref="form" :rules="ruleValidate" :label-width="80">\n            <tb-form-item label="用户名" prop="name">\n                <tb-input v-model="formInline.name" placeholder="请输入"></tb-input>\n            </tb-form-item>\n            </tb-form>\n        </tb-modal>\n    </template>\n    <script>\n        export default {\n            data() {\n            return {\n                modal5: false,\n                loading: true,\n                formInline: {\n                name: \'\'\n                },\n                ruleValidate: {\n                name: [{ required: true, message: \'用户名不能为空\', trigger: \'blur\' }]\n                }\n            }\n            },\n            methods: {\n            showModal() {\n                this.modal5 = true\n                this.loading = true\n                this.formInline.name = \'\'\n                this.$nextTick(() => {\n                this.$refs.form.resetFields();\n                })\n            },\n            asyncOK() {\n                this.$refs.form.validate((valid) => {\n                if (valid) {\n                    setTimeout(() => {\n                    this.$message({ type: \'success\', content: \'表单提交成功\' });\n                    this.modal5 = false;\n                    }, 2000);\n                } else {\n                    this.$message({ type: \'danger\', content: \'表单校验失败\' });\n                    this.loading = false\n                    setTimeout(() => {\n                    this.loading = true\n                    }, 200);\n                }\n                })\n            }\n            }\n        }\n    <\/script>\n              ',html5:'    <template>\n        <tb-button @click="modal6 = true">禁用右上角关闭</tb-button>\n        <tb-button @click="modal7 = true">禁用mask关闭</tb-button>\n        <tb-modal v-model="modal6" title="普通的模态框标题" :closable="false">\n            <p>禁用右上角关闭</p>\n        </tb-modal>\n        <tb-modal v-model="modal7" title="普通的模态框标题" :mask-closable="false">\n            <p>禁用mask关闭</p>\n        </tb-modal>\n    </template>\n    <script>\n        export default {\n            data() {\n            return {\n                modal6: false,\n                modal7: false\n            }\n            }\n        }\n    <\/script>\n              ',html6:'    <template>\n        <div>\n            <tb-button @click="modal1 = true">显示弹窗一</tb-button>\n            <tb-button @click="modal3 = true">显示全屏弹窗</tb-button>\n            <tb-button @click="openModal5">自定义弹窗</tb-button>\n            <tb-modal v-model="modal1" title="弹窗一" footer-hide width="600">\n            <p>我是弹窗内容...</p>\n            <p>我是弹窗内容...</p>\n            <p>我是弹窗内容...</p>\n            <tb-button type="primary" @click="modal2 = true">打开嵌套弹窗</tb-button>\n            <tb-modal v-model="modal2" title="嵌套弹窗">\n                <p>我是弹窗内容...</p>\n                <p>我是弹窗内容...</p>\n                <p>我是弹窗内容...</p>\n            </tb-modal>\n            </tb-modal>\n            <tb-modal v-model="modal3" title="全屏弹窗" footer-hide fullscreen>\n            <p>我是弹窗内容...</p>\n            <p>我是弹窗内容...</p>\n            <p>我是弹窗内容...</p>\n            <tb-button type="primary" @click="modal4 = true">打开嵌套弹窗</tb-button>\n            <tb-modal v-model="modal4" title="全屏嵌套弹窗">\n                <p>我是弹窗内容...</p>\n                <p>我是弹窗内容...</p>\n                <p>我是弹窗内容...</p>\n            </tb-modal>\n            </tb-modal>\n\n            <transition name="move-right">\n            <div v-show="modal5"\n                style="\n                position: fixed;\n                top: 0;\n                right: 0;\n                bottom: 0;\n                left: 0;\n                box-sizing: border-box;\n                z-index: 1000;\n                background-color: #fff;">\n                自定义弹窗内容\n                <tb-button @click="closeModal5">关闭自定义弹窗</tb-button>\n                <tb-button type="primary" @click="modal4 = true">打开嵌套弹窗</tb-button>\n                <tb-modal v-model="modal4" title="全屏嵌套弹窗" stop-remove-scroll>\n                <p>我是弹窗内容...</p>\n                <p>我是弹窗内容...</p>\n                <p>我是弹窗内容...</p>\n                </tb-modal>\n            </div>\n            </transition>\n        </div>\n    </template>\n    <script>\n        export default {\n            data() {\n            return {\n                modal1: false,\n                modal2: false,\n                modal3: false,\n                modal4: false,\n                modal5: false\n            }\n            },\n            methods: {\n            openModal5() {\n                this.modal5 = true\n                // 模拟移除滚动条\n                document.body.style.paddingRight = \'15px\'\n                document.body.style.overflow = \'hidden\'\n            },\n            closeModal5() {\n                this.modal5 = false\n                this.timer = setTimeout(() => {\n                // 添加滚动条\n                document.body.style.paddingRight = \'\'\n                document.body.style.overflow = \'\'\n                }, 300)\n            }\n            }\n        }\n    <\/script>\n              ',html7:'    <template>\n        <tb-button @click="modal8 = true">距离顶部200px</tb-button>\n        <tb-button @click="modal9 = true">垂直居中</tb-button>\n        <tb-modal v-model="modal8" title="距离顶部" :styles="{top: \'200px\'}">\n            <p>距离顶部200px</p>\n        </tb-modal>\n        <tb-modal v-model="modal9" title="垂直居中" class-name="vertical-center-modal">\n            <p>垂直居中的模态框</p>\n        </tb-modal>\n    </template>\n    <script>\n        export default {\n            data() {\n            return {\n                modal8: false,\n                modal9: false\n            }\n            }\n        }\n    <\/script>\n              '}},mixins:[l["a"]],methods:{goMeowPoint:function(t){var o=window.document.querySelector("#"+t);o.scrollIntoView(!0)},showModal:function(){var t=this;this.modal5=!0,this.loading=!0,this.formInline.name="",this.$nextTick((function(){t.$refs.form.resetFields()}))},asyncOK:function(){var t=this;this.$refs.form.validate((function(o){o?setTimeout((function(){t.$message({type:"success",content:"表单提交成功"}),t.modal5=!1}),2e3):(t.$message({type:"danger",content:"表单校验失败"}),t.loading=!1,setTimeout((function(){t.loading=!0}),200))}))},openModal:function(t){this.transitionName=t,this.visible=!0},openModal5:function(){this.modal14=!0,document.body.style.paddingRight="15px",document.body.style.overflow="hidden"},closeModal5:function(){this.modal14=!1,this.timer=setTimeout((function(){document.body.style.paddingRight="",document.body.style.overflow=""}),300)}}},s=r,m=(e("f985"),e("2877")),c=Object(m["a"])(s,n,a,!1,null,"4633676a",null);o["default"]=c.exports},a4bd:function(t,o,e){"use strict";e("159b");o["a"]={data:function(){return{col:[{label:"参数",align:"center",field:"Parameters"},{label:"说明",align:"center",field:"Explain"},{label:"类型",align:"center",field:"Types"},{label:"可选值",align:"center",field:"Optional"},{label:"默认值",align:"center",field:"Default"}],colEvent:[{label:"方法/事件名称",align:"center",field:"Parameters"},{label:"说明",align:"center",field:"Explain"},{label:"返回值",align:"center",field:"Callback"}],colSlot:[{label:"名称",align:"center",field:"Parameters"},{label:"说明",align:"center",field:"Explain"}]}},mounted:function(){var t=this,o=window.document.querySelector("."+this.rightTitle[0].id);o.style.color="#409eff";var e=window.document.querySelector("#containers");e.onscroll=function(){if(t.rightTitle.forEach((function(o,n){var a=window.document.querySelector("#"+o.id),l=window.document.querySelector("."+o.id),i=null;t.rightTitle[n+1]&&(i=window.document.querySelector("#"+t.rightTitle[n+1].id)),(null==i||n+1>=t.rightTitle.length)&&(i={offsetTop:e.scrollHeight}),a&&(l.style.color="#606266"),a&&e.scrollTop+80>=a.offsetTop&&e.scrollTop+80<i.offsetTop&&(l.style.color="#409eff")})),0==e.scrollTop){var o=window.document.querySelector("."+t.rightTitle[0].id);o.style.color="#409eff"}}},beforeDestroy:function(){if(window.document.querySelector("#containers")){var t=window.document.querySelector("#containers");t.onscroll=null}}}},b8e1:function(t,o,e){},f985:function(t,o,e){"use strict";e("9469")}}]);
//# sourceMappingURL=chunk-7f1d0fb5.892a84b4.js.map