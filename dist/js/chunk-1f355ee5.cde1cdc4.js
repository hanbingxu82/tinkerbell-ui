(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1f355ee5"],{"0a0f2":function(t,e,o){"use strict";o("b8e1")},"1ba0":function(t,e,o){},"1e7e":function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[t._m(0),o("p",{staticStyle:{"box-sizing":"border-box","margin-top":"1em","margin-bottom":"1em",padding:"0px",color:"rgba(0, 0, 0, 0.85)","font-family":'-apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',"font-size":"14px","white-space":"normal","background-color":"rgb(255, 255, 255)"}},[t._v(" 弹窗是为了模拟快速创建模态框准备的，基于Modal框生成的窗口实例。 ")]),t._m(1),o("p",{staticStyle:{"box-sizing":"border-box","margin-top":"1em","margin-bottom":"1em",padding:"0px",color:"rgba(0, 0, 0, 0.85)","font-family":'-apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',"font-size":"14px","white-space":"normal","background-color":"rgb(255, 255, 255)"}},[t._v(" 只有确定按钮，可以直接使用 $alert 也可以个设置type或者直接使用快捷方法 ")]),t._m(2),o("Demo",[t._v(" 点击 Config 之后再次查看配置项一般默认即可 "),o("div",{attrs:{slot:"source"},slot:"source"},[o("tb-button",{attrs:{type:"primary"},on:{click:function(e){return t.$alert({type:"primary",title:"标题",content:"我是弹窗内容",width:500})}}},[t._v("Primary")]),o("tb-button",{attrs:{type:"success"},on:{click:function(e){return t.$alert({type:"success",title:"标题",content:"我是弹窗内容"})}}},[t._v("Success")]),o("tb-button",{attrs:{type:"warning"},on:{click:function(e){return t.$alert.warning({title:"标题",content:"我是弹窗内容"})}}},[t._v("Warning")]),o("tb-button",{attrs:{type:"danger"},on:{click:t.showAlert}},[t._v("Danger")])],1),o("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],attrs:{slot:"highlight"},slot:"highlight"},[t._v("      "),o("code",{staticClass:"javascript",domProps:{textContent:t._s(t.html1)}},[t._v("\n      ")]),t._v("\n    ")])]),t._m(3),o("p",{staticStyle:{"box-sizing":"border-box","margin-top":"1em","margin-bottom":"1em",padding:"0px",color:"rgba(0, 0, 0, 0.85)","font-family":'-apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',"font-size":"14px","white-space":"normal","background-color":"rgb(255, 255, 255)"}},[t._v(" 模拟confirm提交选择 ")]),t._m(4),o("Demo",[o("div",{attrs:{slot:"source"},slot:"source"},[o("tb-button",{attrs:{type:"default"},on:{click:function(e){return t.$confirm({title:"标题",content:"我是弹窗内容"})}}},[t._v("标准")]),o("tb-button",{attrs:{type:"default"},on:{click:function(e){return t.$confirm({iconName:"success",title:"标题",content:"我是弹窗内容"})}}},[t._v("更换图标")]),o("tb-button",{attrs:{type:"default"},on:{click:function(e){return t.$confirm({iconName:"icon-favorite-filling",iconType:"danger",title:"标题",content:"我是弹窗内容"})}}},[t._v("更换图标颜色")]),o("tb-button",{attrs:{type:"default"},on:{click:function(e){return t.$confirm({title:"标题",content:"改变按钮文字",okText:"OK",okType:"danger",cancelText:"Cancel",cancelType:"info"})}}},[t._v(" 改变按钮样式 ")]),o("tb-button",{attrs:{type:"default"},on:{click:t.async}},[t._v("确定2s后关闭")])],1),o("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],attrs:{slot:"highlight"},slot:"highlight"},[t._v("      "),o("code",{staticClass:"javascript",domProps:{textContent:t._s(t.html2)}},[t._v("\n      ")]),t._v("\n    ")])]),t._m(5),o("p",{staticStyle:{"box-sizing":"border-box","margin-top":"1em","margin-bottom":"1em",padding:"0px",color:"rgba(0, 0, 0, 0.85)","font-family":'-apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',"font-size":"14px","white-space":"normal","background-color":"rgb(255, 255, 255)"}},[t._v(" render函数调用 ")]),t._m(6),o("Demo",[o("div",{attrs:{slot:"source"},slot:"source"},[o("tb-button",{attrs:{type:"default",size:"small"},on:{click:t.handleRender}},[t._v("render")])],1),o("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],attrs:{slot:"highlight"},slot:"highlight"},[t._v("      "),o("code",{staticClass:"javascript",domProps:{textContent:t._s(t.html3)}},[t._v("\n      ")]),t._v("\n    ")])]),t._m(7),o("p",{staticStyle:{"box-sizing":"border-box","margin-top":"1em","margin-bottom":"1em",padding:"0px",color:"rgba(0, 0, 0, 0.85)","font-family":'-apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',"font-size":"14px","white-space":"normal","background-color":"rgb(255, 255, 255)"}},[t._v(" 通过直接调用以下方法来使用组件： ")]),o("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],attrs:{slot:"highlight"},slot:"highlight"},[t._v("      "),o("code",{staticClass:"javascript",domProps:{textContent:t._s(t.html4)}},[t._v("\n      ")]),t._v("\n    ")]),t._m(8),t._m(9),o("tb-table-eazy",{attrs:{rows:t.rowMessageBox,cols:t.col}}),o("RightSmallNav",{attrs:{rightTitle:t.rightTitle},on:{goMeowPoint:t.goMeowPoint}})],1)},i=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("h2",{staticStyle:{"box-sizing":"border-box",margin:"0px",padding:"10px 0px","font-size":"28px","font-weight":"400",color:"rgb(31, 47, 61)","border-bottom":"1px solid rgb(197, 217, 232)","font-family":'-apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',"white-space":"normal","background-color":"rgb(255, 255, 255)"},attrs:{id:"messageBox-tan-kuang"}},[o("a",{staticClass:"header-anchor",staticStyle:{"box-sizing":"border-box",color:"rgb(16, 137, 255)","text-decoration-line":"none"},attrs:{href:"#messageBox-tan-kuang"}},[t._v("¶")]),t._v(" MessageBox 弹框 ")])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("h3",{staticStyle:{"box-sizing":"border-box",margin:"36px 0px 20px",padding:"0px","font-size":"22px","font-weight":"400",color:"rgb(31, 47, 61)","font-family":'-apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',"white-space":"normal","background-color":"rgb(255, 255, 255)"},attrs:{id:"mo-ni-alert"}},[o("a",{staticClass:"header-anchor",staticStyle:{"box-sizing":"border-box",color:"rgb(16, 137, 255)","text-decoration-line":"none"},attrs:{href:"#mo-ni-alert"}},[t._v("¶")]),t._v(" 模拟alert ")])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("p",[o("br")])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("h3",{staticStyle:{"box-sizing":"border-box",margin:"36px 0px 20px",padding:"0px","font-size":"22px","font-weight":"400",color:"rgb(31, 47, 61)","font-family":'-apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',"white-space":"normal","background-color":"rgb(255, 255, 255)"},attrs:{id:"mo-ni-confirm"}},[o("a",{staticClass:"header-anchor",staticStyle:{"box-sizing":"border-box",color:"rgb(16, 137, 255)","text-decoration-line":"none"},attrs:{href:"#mo-ni-confirm"}},[t._v("¶")]),t._v(" 模拟confirm ")])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("p",[o("br")])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("h3",{staticStyle:{"box-sizing":"border-box",margin:"36px 0px 20px",padding:"0px","font-size":"22px","font-weight":"400",color:"rgb(31, 47, 61)","font-family":'-apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',"white-space":"normal","background-color":"rgb(255, 255, 255)"},attrs:{id:"render-han-shu-diao-yong"}},[o("a",{staticClass:"header-anchor",staticStyle:{"box-sizing":"border-box",color:"rgb(16, 137, 255)","text-decoration-line":"none"},attrs:{href:"#render-han-shu-diao-yong"}},[t._v("¶")]),t._v(" render函数调用 ")])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("p",[o("br")])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("h3",{staticStyle:{"box-sizing":"border-box",margin:"36px 0px 20px",padding:"0px","font-size":"22px","font-weight":"400",color:"rgb(31, 47, 61)","font-family":'-apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',"white-space":"normal","background-color":"rgb(255, 255, 255)"},attrs:{id:"API"}},[o("a",{staticClass:"header-anchor",staticStyle:{"box-sizing":"border-box",color:"rgb(16, 137, 255)","text-decoration-line":"none"},attrs:{href:"#API"}},[t._v("¶")]),t._v(" API ")])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("h3",{staticStyle:{"box-sizing":"border-box",margin:"36px 0px 20px",padding:"0px","font-size":"22px","font-weight":"400",color:"rgb(31, 47, 61)","font-family":'-apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',"white-space":"normal","background-color":"rgb(255, 255, 255)"},attrs:{id:"rowMessageBox"}},[o("a",{staticClass:"header-anchor",staticStyle:{"box-sizing":"border-box",color:"rgb(16, 137, 255)","text-decoration-line":"none"},attrs:{href:"#rowMessageBox"}},[t._v("¶")]),t._v(" MessageBox props ")])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("p",[o("br")])}],r=o("a4bd"),a=o("4e29"),l={name:"Message",components:{RightSmallNav:a["a"]},data:function(){return{rowMessageBox:[{Parameters:"title",Explain:"标题",Types:"String /Element String",Optional:"-",Default:"-"},{Parameters:"content",Explain:"内容",Types:"String /Element String",Optional:"-",Default:"-"},{Parameters:"render",Explain:"自定义内容，使用后不再限制类型",Types:"Function",Optional:"-",Default:"-"},{Parameters:"width",Explain:"宽度，单位 px",Types:"Number / String",Optional:"-",Default:"416"},{Parameters:"okText",Explain:"确定按钮的文字",Types:"String",Optional:"—",Default:"确定"},{Parameters:"cancelText",Explain:"取消按钮的文字，只在$confirm()下有效",Types:"String",Optional:"-",Default:"取消"},{Parameters:"loading",Explain:"显示 loading 状态，需手动调用Modal.remove()来关闭对话框",Types:"Boolean",Optional:"-",Default:"false"},{Parameters:"scrollable",Explain:"页面是否可以滚动",Types:"Boolean",Optional:"-",Default:"false"},{Parameters:"onOk",Explain:"点击确定的回调",Types:"Function",Optional:"-",Default:"-"},{Parameters:"onCancel",Explain:"点击取消的回调，只在Modal.confirm()下有效",Types:"Function",Optional:"-",Default:"—"}],html1:"    <template>\n        <tb-button type=\"primary\" \n        @click=\"$alert({title: '标题',content: '我是弹窗内容',width:500})\">Info</tb-button>\n        <tb-button type=\"success\" \n        @click=\"$alert({type:'success',title: '标题',content: '我是弹窗内容'})\">Success</tb-button>\n        <tb-button type=\"warning\" \n        @click=\"$alert.warning({title: '标题',content: '我是弹窗内容'})\">Warning</tb-button>\n        <tb-button type=\"danger\" @click=\"showAlert\">Danger</tb-button>\n    </template>\n    <script>\n    export default {\n        methods:{\n        showAlert(){\n            this.$alert({type:'danger',title: '标题',content: '我是弹窗内容',\n            onOk:()=>{\n            this.$message('点击了确定关闭弹窗')\n            }})\n        }\n        }\n    }\n    <\/script>\n            ",html2:"    <template>\n        <tb-button type=\"default\" \n        @click=\"$confirm({title: '标题',content: '我是弹窗内容'})\">标准</tb-button>\n        <tb-button type=\"default\" \n        @click=\"$confirm({iconName:'success',title: '标题',content: '我是弹窗内容'})\">更换图标</tb-button>\n        <tb-button type=\"default\" \n        @click=\"$confirm({iconName:'icon-favorite-filling',iconType:'danger',title: '标题',content: '我是弹窗内容'})\">更换图标颜色</tb-button>\n        <tb-button type=\"default\" \n        @click=\"$confirm({title: '标题',content: '改变按钮文字',okText: 'OK',okType: 'danger',cancelText: 'Cancel',cancelType: 'info'})\">\n        改变按钮样式\n        </tb-button>\n        <tb-button type=\"default\" \n        @click=\"async\">确定2s后关闭</tb-button>\n    </template>\n    <script>\n    export default {\n        methods:{\n        async () {\n            this.$confirm({\n                title: '标题',\n                content: '<p>这个弹窗会在点击2秒后关闭</p>',\n                loading: true,\n                onOk: () => {\n                    setTimeout(() => {\n                        this.$modal.remove();\n                        this.$message('模态框已经关闭');\n                    }, 2000);\n                }\n            });\n        }\n        }\n    }\n    <\/script>\n              ",html3:'    <template>\n        <tb-button type="default" size="small" \n        @click="handleRender">render</tb-button>\n    </template>\n    <script>\n        export default {\n            methods:{\n            handleRender () {\n                this.$confirm({\n                    render: (h) => {\n                        return h(\'div\', {},\'我是render函数渲染的\')\n                    }\n                })\n            }\n            }\n        }\n    <\/script>\n              ',html4:"    this.$alert(config)\n    this.$alert.success(config)\n    this.$alert.warning(config)\n    this.$alert.danger(config)\n    this.$confirm(config)\n              ",rightTitle:[{title:"MessageBox 弹框",id:"messageBox-tan-kuang"},{title:"模拟alert",id:"mo-ni-alert"},{title:"模拟confirm",id:"mo-ni-confirm"},{title:"render函数调用",id:"render-han-shu-diao-yong"},{title:"MessageBox props",id:"rowMessageBox"}]}},mixins:[r["a"]],methods:{goMeowPoint:function(t){var e=window.document.querySelector("#"+t);e.scrollIntoView(!0)},showAlert:function(){var t=this;this.$alert({type:"danger",title:"标题",content:"我是弹窗内容",onOk:function(){t.$message("点击了确定关闭弹窗")}})},async:function(){var t=this;this.$confirm({title:"标题",content:"<p>这个弹窗会在点击2秒后关闭</p>",loading:!0,onOk:function(){setTimeout((function(){t.$modal.remove(),t.$message("模态框已经关闭")}),2e3)}})},handleRender:function(){this.$confirm({render:function(t){return t("div",{},"我是render函数渲染的")}})}}},s=l,c=(o("dc4f"),o("2877")),m=Object(c["a"])(s,n,i,!1,null,"372b3e46",null);e["default"]=m.exports},"4e29":function(t,e,o){"use strict";var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"right_list_screen"},[o("div",{staticClass:"right_list"},t._l(t.rightTitle,(function(e){return o("div",{key:e.id,class:"slider_li "+e.id,on:{click:function(o){return t.goMeowPoint(e.id)}}},[t._v(t._s(e.title))])})),0)])},i=[],r=(o("159b"),{name:"RightSmallNav",props:["rightTitle"],methods:{goMeowPoint:function(t){var e=this;this.$emit("goMeowPoint",t),setTimeout((function(){var o=document.querySelectorAll(".slider_li");e.$nextTick((function(){o.forEach((function(t){t.style.color="#606266"}));var e=document.querySelector("."+t);e.style.color="#409eff"}))}),0)}}}),a=r,l=(o("0a0f2"),o("2877")),s=Object(l["a"])(a,n,i,!1,null,null,null);e["a"]=s.exports},a4bd:function(t,e,o){"use strict";o("159b");e["a"]={data:function(){return{col:[{label:"参数",align:"center",field:"Parameters"},{label:"说明",align:"center",field:"Explain"},{label:"类型",align:"center",field:"Types"},{label:"可选值",align:"center",field:"Optional"},{label:"默认值",align:"center",field:"Default"}],colEvent:[{label:"方法/事件名称",align:"center",field:"Parameters"},{label:"说明",align:"center",field:"Explain"},{label:"返回值",align:"center",field:"Callback"}],colSlot:[{label:"名称",align:"center",field:"Parameters"},{label:"说明",align:"center",field:"Explain"}]}},mounted:function(){var t=this,e=window.document.querySelector("."+this.rightTitle[0].id);e.style.color="#409eff";var o=window.document.querySelector("#containers");o.onscroll=function(){if(t.rightTitle.forEach((function(e,n){var i=window.document.querySelector("#"+e.id),r=window.document.querySelector("."+e.id),a=null;t.rightTitle[n+1]&&(a=window.document.querySelector("#"+t.rightTitle[n+1].id)),(null==a||n+1>=t.rightTitle.length)&&(a={offsetTop:o.scrollHeight}),i&&(r.style.color="#606266"),i&&o.scrollTop+80>=i.offsetTop&&o.scrollTop+80<a.offsetTop&&(r.style.color="#409eff")})),0==o.scrollTop){var e=window.document.querySelector("."+t.rightTitle[0].id);e.style.color="#409eff"}}},beforeDestroy:function(){if(window.document.querySelector("#containers")){var t=window.document.querySelector("#containers");t.onscroll=null}}}},b8e1:function(t,e,o){},dc4f:function(t,e,o){"use strict";o("1ba0")}}]);
//# sourceMappingURL=chunk-1f355ee5.cde1cdc4.js.map