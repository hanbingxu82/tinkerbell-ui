(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5eaca53a"],{"0a0f2":function(t,o,e){"use strict";e("b8e1")},"4e29":function(t,o,e){"use strict";var n=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"right_list_screen"},[e("div",{staticClass:"right_list"},t._l(t.rightTitle,(function(o){return e("div",{key:o.id,class:"slider_li "+o.id,on:{click:function(e){return t.goMeowPoint(o.id)}}},[t._v(t._s(o.title))])})),0)])},i=[],r=(e("159b"),{name:"RightSmallNav",props:["rightTitle"],methods:{goMeowPoint:function(t){var o=this;this.$emit("goMeowPoint",t),setTimeout((function(){var e=document.querySelectorAll(".slider_li");o.$nextTick((function(){e.forEach((function(t){t.style.color="#606266"}));var o=document.querySelector("."+t);o.style.color="#409eff"}))}),0)}}}),a=r,l=(e("0a0f2"),e("2877")),s=Object(l["a"])(a,n,i,!1,null,null,null);o["a"]=s.exports},"6c53":function(t,o,e){},"89fa":function(t,o,e){"use strict";e.r(o);var n=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",[t._m(0),e("p",{staticStyle:{"box-sizing":"border-box","margin-top":"1em","margin-bottom":"1em",padding:"0px",color:"rgba(0, 0, 0, 0.85)","font-family":'-apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',"font-size":"14px","white-space":"normal","background-color":"rgb(255, 255, 255)"}},[t._v(" 常用的操作按钮。 ")]),t._m(1),e("p",{staticStyle:{"box-sizing":"border-box","margin-top":"1em","margin-bottom":"1em",padding:"0px",color:"rgba(0, 0, 0, 0.85)","font-family":'-apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',"font-size":"14px","white-space":"normal","background-color":"rgb(255, 255, 255)"}},[t._v(" 基础的按钮用法。 ")]),t._m(2),e("Demo",[t._v(" 使用type、plain、round和circle属性来定义 Button 的样式。 "),e("div",{attrs:{slot:"source"},slot:"source"},[e("tb-row",[e("tb-button",[t._v("默认按钮")]),e("tb-button",{attrs:{type:"primary"}},[t._v("主要按钮")]),e("tb-button",{attrs:{type:"success"}},[t._v("成功按钮")]),e("tb-button",{attrs:{type:"info"}},[t._v("信息按钮")]),e("tb-button",{attrs:{type:"warning"}},[t._v("警告按钮")]),e("tb-button",{attrs:{type:"danger"}},[t._v("危险按钮")])],1),e("tb-row",[e("tb-button",{attrs:{plain:""}},[t._v("朴素按钮")]),e("tb-button",{attrs:{type:"primary",plain:""}},[t._v("主要按钮")]),e("tb-button",{attrs:{type:"success",plain:""}},[t._v("成功按钮")]),e("tb-button",{attrs:{type:"info",plain:""}},[t._v("信息按钮")]),e("tb-button",{attrs:{type:"warning",plain:""}},[t._v("警告按钮")]),e("tb-button",{attrs:{type:"danger",plain:""}},[t._v("危险按钮")])],1),e("tb-row",[e("tb-button",{attrs:{round:""}},[t._v("圆角按钮")]),e("tb-button",{attrs:{type:"primary",round:""}},[t._v("主要按钮")]),e("tb-button",{attrs:{type:"success",round:""}},[t._v("成功按钮")]),e("tb-button",{attrs:{type:"info",round:""}},[t._v("信息按钮")]),e("tb-button",{attrs:{type:"warning",round:""}},[t._v("警告按钮")]),e("tb-button",{attrs:{type:"danger",round:""}},[t._v("危险按钮")])],1),e("tb-row",[e("tb-button",{attrs:{icon:"icon-add-bold",circle:""}}),e("tb-button",{attrs:{type:"primary",icon:"icon-add-bold",circle:""}}),e("tb-button",{attrs:{type:"success",icon:"icon-add-bold",circle:""}}),e("tb-button",{attrs:{type:"info",icon:"icon-add-bold",circle:""}}),e("tb-button",{attrs:{type:"warning",icon:"icon-add-bold",circle:""}}),e("tb-button",{attrs:{type:"danger",icon:"icon-add-bold",circle:""}})],1)],1),e("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],attrs:{slot:"highlight"},slot:"highlight"},[t._v("      "),e("code",{staticClass:"javascript",domProps:{textContent:t._s(t.html1)}},[t._v("\n      ")]),t._v("\n    ")])]),t._m(3),e("p",{staticStyle:{"box-sizing":"border-box","margin-top":"1em","margin-bottom":"1em",padding:"0px",color:"rgba(0, 0, 0, 0.85)","font-family":'-apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',"font-size":"14px","white-space":"normal","background-color":"rgb(255, 255, 255)"}},[t._v(" 按钮不可用状态。 ")]),t._m(4),e("Demo",[t._v(" 你可以使用disabled属性来定义按钮是否可用，它接受一个Boolean值。 "),e("div",{attrs:{slot:"source"},slot:"source"},[e("tb-row",[e("tb-button",{attrs:{disabled:""}},[t._v("默认按钮")]),e("tb-button",{attrs:{type:"primary",disabled:""}},[t._v("主要按钮")]),e("tb-button",{attrs:{type:"success",disabled:""}},[t._v("成功按钮")]),e("tb-button",{attrs:{type:"info",disabled:""}},[t._v("信息按钮")]),e("tb-button",{attrs:{type:"warning",disabled:""}},[t._v("警告按钮")]),e("tb-button",{attrs:{type:"danger",disabled:""}},[t._v("危险按钮")])],1),e("tb-row",[e("tb-button",{attrs:{plain:"",disabled:""}},[t._v("朴素按钮")]),e("tb-button",{attrs:{type:"primary",plain:"",disabled:""}},[t._v("主要按钮")]),e("tb-button",{attrs:{type:"success",plain:"",disabled:""}},[t._v("成功按钮")]),e("tb-button",{attrs:{type:"info",plain:"",disabled:""}},[t._v("信息按钮")]),e("tb-button",{attrs:{type:"warning",plain:"",disabled:""}},[t._v("警告按钮")]),e("tb-button",{attrs:{type:"danger",plain:"",disabled:""}},[t._v("危险按钮")])],1)],1),e("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],attrs:{slot:"highlight"},slot:"highlight"},[t._v("      "),e("code",{staticClass:"javascript",domProps:{textContent:t._s(t.html2)}},[t._v("\n      ")]),t._v("\n    ")])]),t._m(5),e("p",{staticStyle:{"box-sizing":"border-box","margin-top":"1em","margin-bottom":"1em",padding:"0px",color:"rgba(0, 0, 0, 0.85)","font-family":'-apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',"font-size":"14px","white-space":"normal","background-color":"rgb(255, 255, 255)"}},[t._v(" 没有边框和背景色的按钮。 ")]),t._m(6),e("Demo",[t._v(" 你可以使用disabled属性来定义按钮是否可用，它接受一个Boolean值。 "),e("div",{attrs:{slot:"source"},slot:"source"},[e("tb-button",{attrs:{type:"text"}},[t._v("文字按钮")]),e("tb-button",{attrs:{type:"text",disabled:""}},[t._v("文字按钮")])],1),e("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],attrs:{slot:"highlight"},slot:"highlight"},[t._v("      "),e("code",{staticClass:"javascript",domProps:{textContent:t._s(t.html2)}},[t._v("\n      ")]),t._v("\n    ")])]),t._m(7),e("p",{staticStyle:{"box-sizing":"border-box","margin-top":"1em","margin-bottom":"1em",padding:"0px",color:"rgba(0, 0, 0, 0.85)","font-family":'-apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',"font-size":"14px","white-space":"normal","background-color":"rgb(255, 255, 255)"}},[t._v(" 带图标的按钮可增强辨识度（有文字）或节省空间（无文字）。 ")]),t._m(8),e("Demo",[t._v(" 设置icon属性即可，icon 的列表可以参考 tinkerbell-ui 的 icon 组件，也可以设置在文字右边的 icon ，只要使用i标签class='iconfont'即可，可以使用自定义图标。 "),e("div",{attrs:{slot:"source"},slot:"source"},[e("tb-button",{attrs:{type:"primary",icon:"icon-layers"}}),e("tb-button",{attrs:{type:"primary",icon:"icon-lock"}}),e("tb-button",{attrs:{type:"primary",icon:"icon-fullscreen-expand"}}),e("tb-button",{attrs:{type:"primary",icon:"icon-search"}},[t._v("搜索")]),e("tb-button",{attrs:{type:"primary"}},[t._v("上传"),e("i",{staticClass:"iconfont icon-rise-filling"})])],1),e("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],attrs:{slot:"highlight"},slot:"highlight"},[t._v("      "),e("code",{staticClass:"javascript",domProps:{textContent:t._s(t.html4)}},[t._v("\n      ")]),t._v("\n    ")])]),t._m(9),e("p",{staticStyle:{"box-sizing":"border-box","margin-top":"1em","margin-bottom":"1em",padding:"0px",color:"rgba(0, 0, 0, 0.85)","font-family":'-apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',"font-size":"14px","white-space":"normal","background-color":"rgb(255, 255, 255)"}},[t._v(" 点击按钮后进行数据加载操作，在按钮上显示加载状态。 ")]),t._m(10),e("Demo",[t._v(" 要设置为 loading 状态，只要设置loading属性为true即可。 "),e("div",{attrs:{slot:"source"},slot:"source"},[e("tb-button",{attrs:{type:"primary",loading:!0}},[t._v("加载中")])],1),e("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],attrs:{slot:"highlight"},slot:"highlight"},[t._v("      "),e("code",{staticClass:"javascript",domProps:{textContent:t._s(t.html5)}},[t._v("\n      ")]),t._v("\n    ")])]),t._m(11),e("p",{staticStyle:{"box-sizing":"border-box","margin-top":"1em","margin-bottom":"1em",padding:"0px",color:"rgba(0, 0, 0, 0.85)","font-family":'-apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',"font-size":"14px","white-space":"normal","background-color":"rgb(255, 255, 255)"}},[t._v(" Button 组件提供三种尺寸，可以在不同场景下选择合适的按钮尺寸 默认为small尺寸。 ")]),t._m(12),e("Demo",[t._v(" 尺寸：medium、small、mini，通过设置size属性来配置它们。 "),e("div",{attrs:{slot:"source"},slot:"source"},[e("tb-row",[e("tb-button",{attrs:{size:"medium"}},[t._v("中等按钮")]),e("tb-button",{attrs:{size:"small"}},[t._v("小型按钮")]),e("tb-button",{attrs:{size:"mini"}},[t._v("超小按钮")])],1),e("tb-row",[e("tb-button",{attrs:{size:"medium",round:""}},[t._v("中等按钮")]),e("tb-button",{attrs:{size:"small",round:""}},[t._v("小型按钮")]),e("tb-button",{attrs:{size:"mini",round:""}},[t._v("超小按钮")])],1)],1),e("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],attrs:{slot:"highlight"},slot:"highlight"},[t._v("      "),e("code",{staticClass:"javascript",domProps:{textContent:t._s(t.html6)}},[t._v("\n      ")]),t._v("\n    ")])]),t._m(13),t._m(14),e("tb-table-eazy",{attrs:{rows:t.rowButton,cols:t.col}}),e("RightSmallNav",{attrs:{rightTitle:t.rightTitle},on:{goMeowPoint:t.goMeowPoint}})],1)},i=[function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("h2",{staticStyle:{"box-sizing":"border-box",margin:"0px",padding:"10px 0px","font-size":"28px","font-weight":"400",color:"rgb(31, 47, 61)","border-bottom":"1px solid rgb(197, 217, 232)","font-family":'-apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',"white-space":"normal","background-color":"rgb(255, 255, 255)"},attrs:{id:"button-an-niu"}},[e("a",{staticClass:"header-anchor",staticStyle:{"box-sizing":"border-box",color:"rgb(16, 137, 255)","text-decoration-line":"none"},attrs:{href:"#button-an-niu"}},[t._v("¶")]),t._v(" Button 按钮 ")])},function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("h3",{staticStyle:{"box-sizing":"border-box",margin:"36px 0px 20px",padding:"0px","font-size":"22px","font-weight":"400",color:"rgb(31, 47, 61)","font-family":'-apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',"white-space":"normal","background-color":"rgb(255, 255, 255)"},attrs:{id:"ji-chu-yong-fa"}},[e("a",{staticClass:"header-anchor",staticStyle:{"box-sizing":"border-box",color:"rgb(16, 137, 255)","text-decoration-line":"none"},attrs:{href:"#ji-chu-yong-fa"}},[t._v("¶")]),t._v(" 基础用法 ")])},function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("p",[e("br")])},function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("h3",{staticStyle:{"box-sizing":"border-box",margin:"36px 0px 20px",padding:"0px","font-size":"22px","font-weight":"400",color:"rgb(31, 47, 61)","font-family":'-apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',"white-space":"normal","background-color":"rgb(255, 255, 255)"},attrs:{id:"jin-yong-zhuang-tai"}},[e("a",{staticClass:"header-anchor",staticStyle:{"box-sizing":"border-box",color:"rgb(16, 137, 255)","text-decoration-line":"none"},attrs:{href:"#jin-yong-zhuang-tai"}},[t._v("¶")]),t._v(" 禁用状态 ")])},function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("p",[e("br")])},function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("h3",{staticStyle:{"box-sizing":"border-box",margin:"36px 0px 20px",padding:"0px","font-size":"22px","font-weight":"400",color:"rgb(31, 47, 61)","font-family":'-apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',"white-space":"normal","background-color":"rgb(255, 255, 255)"},attrs:{id:"wen-zi-an-niu"}},[e("a",{staticClass:"header-anchor",staticStyle:{"box-sizing":"border-box",color:"rgb(16, 137, 255)","text-decoration-line":"none"},attrs:{href:"#wen-zi-an-niu"}},[t._v("¶")]),t._v(" 文字按钮 ")])},function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("p",[e("br")])},function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("h3",{staticStyle:{"box-sizing":"border-box",margin:"36px 0px 20px",padding:"0px","font-size":"22px","font-weight":"400",color:"rgb(31, 47, 61)","font-family":'-apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',"white-space":"normal","background-color":"rgb(255, 255, 255)"},attrs:{id:"tu-biao-an-niu"}},[e("a",{staticClass:"header-anchor",staticStyle:{"box-sizing":"border-box",color:"rgb(16, 137, 255)","text-decoration-line":"none"},attrs:{href:"#tu-biao-an-niu"}},[t._v("¶")]),t._v(" 图标按钮 ")])},function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("p",[e("br")])},function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("h3",{staticStyle:{"box-sizing":"border-box",margin:"36px 0px 20px",padding:"0px","font-size":"22px","font-weight":"400",color:"rgb(31, 47, 61)","font-family":'-apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',"white-space":"normal","background-color":"rgb(255, 255, 255)"},attrs:{id:"jia-zai-zhong"}},[e("a",{staticClass:"header-anchor",staticStyle:{"box-sizing":"border-box",color:"rgb(16, 137, 255)","text-decoration-line":"none"},attrs:{href:"#jia-zai-zhong"}},[t._v("¶")]),t._v(" 加载中 ")])},function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("p",[e("br")])},function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("h3",{staticStyle:{"box-sizing":"border-box",margin:"36px 0px 20px",padding:"0px","font-size":"22px","font-weight":"400",color:"rgb(31, 47, 61)","font-family":'-apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',"white-space":"normal","background-color":"rgb(255, 255, 255)"},attrs:{id:"bu-tong-chi-cun"}},[e("a",{staticClass:"header-anchor",staticStyle:{"box-sizing":"border-box",color:"rgb(16, 137, 255)","text-decoration-line":"none"},attrs:{href:"#bu-tong-chi-cun"}},[t._v("¶")]),t._v(" 不同尺寸 ")])},function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("p",[e("br")])},function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("h3",{staticStyle:{"box-sizing":"border-box",margin:"36px 0px 20px",padding:"0px","font-size":"22px","font-weight":"400",color:"rgb(31, 47, 61)","font-family":'-apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',"white-space":"normal","background-color":"rgb(255, 255, 255)"},attrs:{id:"rowButton"}},[e("a",{staticClass:"header-anchor",staticStyle:{"box-sizing":"border-box",color:"rgb(16, 137, 255)","text-decoration-line":"none"},attrs:{href:"#rowButton"}},[t._v("¶")]),t._v(" Button props ")])},function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("p",[e("br")])}],r=e("a4bd"),a=e("4e29"),l={name:"Button",components:{RightSmallNav:a["a"]},data:function(){return{rightTitle:[{title:"Button 按钮",id:"button-an-niu"},{title:"基础用法",id:"ji-chu-yong-fa"},{title:"禁用状态",id:"jin-yong-zhuang-tai"},{title:"文字按钮",id:"wen-zi-an-niu"},{title:"图标按钮",id:"tu-biao-an-niu"},{title:"加载中",id:"jia-zai-zhong"},{title:"不同尺寸",id:"bu-tong-chi-cun"},{title:"Button props",id:"rowButton"}],rowButton:[{Parameters:"size",Explain:"尺寸",Types:"string",Optional:"medium / small / mini",Default:"small"},{Parameters:"type",Explain:"类型",Types:"string",Optional:"primary / success / warning / danger / info / text",Default:"-"},{Parameters:"plain",Explain:"是否朴素按钮",Types:"boolean",Optional:"-",Default:"false"},{Parameters:"round",Explain:"是否圆角按钮",Types:"boolean",Optional:"-",Default:"false"},{Parameters:"circle",Explain:"是否圆形按钮",Types:"boolean",Optional:"-",Default:"false"},{Parameters:"loading",Explain:"是否加载中状态",Types:"boolean",Optional:"-",Default:"false"},{Parameters:"disabled",Explain:"是否禁用状态",Types:"boolean",Optional:"-",Default:"false"},{Parameters:"icon",Explain:"图标类名",Types:"string",Optional:"-",Default:"-"}],html1:'    <tb-row>\n      <tb-button>默认按钮</tb-button>\n      <tb-button type="primary">主要按钮</tb-button>\n      <tb-button type="success">成功按钮</tb-button>\n      <tb-button type="info">信息按钮</tb-button>\n      <tb-button type="warning">警告按钮</tb-button>\n      <tb-button type="danger">危险按钮</tb-button>\n    </tb-row>\n\n    <tb-row>\n      <tb-button plain>朴素按钮</tb-button>\n      <tb-button type="primary" plain>主要按钮</tb-button>\n      <tb-button type="success" plain>成功按钮</tb-button>\n      <tb-button type="info" plain>信息按钮</tb-button>\n      <tb-button type="warning" plain>警告按钮</tb-button>\n      <tb-button type="danger" plain>危险按钮</tb-button>\n    </tb-row>\n\n    <tb-row>\n      <tb-button round>圆角按钮</tb-button>\n      <tb-button type="primary" round>主要按钮</tb-button>\n      <tb-button type="success" round>成功按钮</tb-button>\n      <tb-button type="info" round>信息按钮</tb-button>\n      <tb-button type="warning" round>警告按钮</tb-button>\n      <tb-button type="danger" round>危险按钮</tb-button>\n    </tb-row>\n\n    <tb-row>\n      <tb-button icon="icon-add-bold" circle></tb-button>\n      <tb-button type="primary" icon="icon-add-bold" circle></tb-button>\n      <tb-button type="success" icon="icon-add-bold" circle></tb-button>\n      <tb-button type="info" icon="icon-add-bold" circle></tb-button>\n      <tb-button type="warning" icon="icon-add-bold" circle></tb-button>\n      <tb-button type="danger" icon="icon-add-bold" circle></tb-button>\n    </tb-row>\n                ',html2:'    <tb-row>\n      <tb-button disabled>默认按钮</tb-button>\n      <tb-button type="primary" disabled>主要按钮</tb-button>\n      <tb-button type="success" disabled>成功按钮</tb-button>\n      <tb-button type="info" disabled>信息按钮</tb-button>\n      <tb-button type="warning" disabled>警告按钮</tb-button>\n      <tb-button type="danger" disabled>危险按钮</tb-button>\n    </tb-row>\n\n    <tb-row>\n      <tb-button plain disabled>朴素按钮</tb-button>\n      <tb-button type="primary" plain disabled>主要按钮</tb-button>\n      <tb-button type="success" plain disabled>成功按钮</tb-button>\n      <tb-button type="info" plain disabled>信息按钮</tb-button>\n      <tb-button type="warning" plain disabled>警告按钮</tb-button>\n      <tb-button type="danger" plain disabled>危险按钮</tb-button>\n    </tb-row>\n                ',html3:'    <tb-button type="text">文字按钮</tb-button>\n    <tb-button type="text" disabled>文字按钮</tb-button>\n                ',html4:'    <tb-button type="primary" icon="icon-layers"></tb-button>\n    <tb-button type="primary" icon="icon-lock"></tb-button>\n    <tb-button type="primary" icon="icon-fullscreen-expand"></tb-button>\n    <tb-button type="primary" icon="icon-search">搜索</tb-button>\n    <tb-button type="primary">上传<i class="iconfont icon-rise-filling"></i></tb-button>\n                ',html5:'    <tb-button type="primary" :loading="true">加载中</tb-button>\n                ',html6:'    <tb-row>\n      <tb-button size="medium">中等按钮</tb-button>\n      <tb-button size="small">小型按钮</tb-button>\n      <tb-button size="mini">超小按钮</tb-button>\n    </tb-row>\n    <tb-row>\n      <tb-button size="medium" round>中等按钮</tb-button>\n      <tb-button size="small" round>小型按钮</tb-button>\n      <tb-button size="mini" round>超小按钮</tb-button>\n    </tb-row>\n                '}},mixins:[r["a"]],methods:{goMeowPoint:function(t){var o=window.document.querySelector("#"+t);o.scrollIntoView(!0)}}},s=l,b=(e("ad0d"),e("2877")),c=Object(b["a"])(s,n,i,!1,null,"1aa2cd11",null);o["default"]=c.exports},a4bd:function(t,o,e){"use strict";e("159b");o["a"]={data:function(){return{col:[{label:"参数",align:"center",field:"Parameters"},{label:"说明",align:"center",field:"Explain"},{label:"类型",align:"center",field:"Types"},{label:"可选值",align:"center",field:"Optional"},{label:"默认值",align:"center",field:"Default"}],colEvent:[{label:"方法/事件名称",align:"center",field:"Parameters"},{label:"说明",align:"center",field:"Explain"},{label:"返回值",align:"center",field:"Callback"}],colSlot:[{label:"名称",align:"center",field:"Parameters"},{label:"说明",align:"center",field:"Explain"}]}},mounted:function(){var t=this,o=window.document.querySelector("."+this.rightTitle[0].id);o.style.color="#409eff";var e=window.document.querySelector("#containers");e.onscroll=function(){if(t.rightTitle.forEach((function(o,n){var i=window.document.querySelector("#"+o.id),r=window.document.querySelector("."+o.id),a=null;t.rightTitle[n+1]&&(a=window.document.querySelector("#"+t.rightTitle[n+1].id)),(null==a||n+1>=t.rightTitle.length)&&(a={offsetTop:e.scrollHeight}),i&&(r.style.color="#606266"),i&&e.scrollTop+80>=i.offsetTop&&e.scrollTop+80<a.offsetTop&&(r.style.color="#409eff")})),0==e.scrollTop){var o=window.document.querySelector("."+t.rightTitle[0].id);o.style.color="#409eff"}}},beforeDestroy:function(){if(window.document.querySelector("#containers")){var t=window.document.querySelector("#containers");t.onscroll=null}}}},ad0d:function(t,o,e){"use strict";e("6c53")},b8e1:function(t,o,e){}}]);
//# sourceMappingURL=chunk-5eaca53a.c503a9ab.js.map