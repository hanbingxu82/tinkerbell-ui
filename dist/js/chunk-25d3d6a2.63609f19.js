(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-25d3d6a2"],{"0a0f2":function(t,e,o){"use strict";o("b8e1")},"13dd":function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[t._m(0),o("p",{staticStyle:{"box-sizing":"border-box","margin-top":"1em","margin-bottom":"1em",padding:"0px",color:"rgba(0, 0, 0, 0.85)","font-family":'-apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',"font-size":"14px","white-space":"normal","background-color":"rgb(255, 255, 255)"}},[t._v(" 将信息聚合在卡片容器中展示。 ")]),t._m(1),o("p",{staticStyle:{"box-sizing":"border-box","margin-top":"1em","margin-bottom":"1em",padding:"0px",color:"rgba(0, 0, 0, 0.85)","font-family":'-apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',"font-size":"14px","white-space":"normal","background-color":"rgb(255, 255, 255)"}},[t._v(" 包含标题，内容和操作。 ")]),t._m(2),o("Demo",[t._v(" Card 组件包括header和body部分，header部分需要有显式具名 slot 分发，同时也是可选的。 "),o("div",{attrs:{slot:"source"},slot:"source"},[o("tb-card",{staticClass:"box-card"},[o("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[o("span",[t._v("卡片名称")]),o("tb-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text"}},[t._v("操作按钮")])],1),t._l(4,(function(e){return o("div",{key:e,staticClass:"text item"},[t._v(" "+t._s("列表内容 "+e)+" ")])}))],2)],1),o("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],attrs:{slot:"highlight"},slot:"highlight"},[t._v("      "),o("code",{staticClass:"javascript",domProps:{textContent:t._s(t.html1)}},[t._v("\n      ")]),t._v("\n    ")])]),t._m(3),o("p",{staticStyle:{"box-sizing":"border-box","margin-top":"1em","margin-bottom":"1em",padding:"0px",color:"rgba(0, 0, 0, 0.85)","font-family":'-apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',"font-size":"14px","white-space":"normal","background-color":"rgb(255, 255, 255)"}},[t._v(" 卡片可以只有内容区域。 ")]),t._m(4),o("Demo",[o("div",{attrs:{slot:"source"},slot:"source"},[o("tb-card",{staticClass:"box-card"},t._l(4,(function(e){return o("div",{key:e,staticClass:"text item"},[t._v(" "+t._s("列表内容 "+e)+" ")])})),0)],1),o("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],attrs:{slot:"highlight"},slot:"highlight"},[t._v("      "),o("code",{staticClass:"javascript",domProps:{textContent:t._s(t.html2)}},[t._v("\n      ")]),t._v("\n    ")])]),t._m(5),o("p",{staticStyle:{"box-sizing":"border-box","margin-top":"1em","margin-bottom":"1em",padding:"0px",color:"rgba(0, 0, 0, 0.85)","font-family":'-apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',"font-size":"14px","white-space":"normal","background-color":"rgb(255, 255, 255)"}},[t._v(" 可配置定义更丰富的内容展示。 ")]),t._m(6),o("Demo",[t._v(" 配置body-style属性来自定义body部分的style，我们还使用了布局组件。 "),o("div",{attrs:{slot:"source"},slot:"source"},[o("tb-row",t._l(2,(function(e,n){return o("tb-col",{key:e,attrs:{span:8,offset:n>0?2:0}},[o("tb-card",{attrs:{"body-style":{padding:"0px"}}},[o("img",{staticClass:"image",attrs:{src:"https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"}}),o("div",{staticStyle:{padding:"14px"}},[o("span",[t._v("好吃的汉堡")]),o("div",{staticClass:"bottom clearfix"},[o("time",{staticClass:"time"},[t._v(t._s(t.currentDate))]),o("tb-button",{staticClass:"button",attrs:{type:"text"}},[t._v("操作按钮")])],1)])])],1)})),1)],1),o("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],attrs:{slot:"highlight"},slot:"highlight"},[t._v("      "),o("code",{staticClass:"javascript",domProps:{textContent:t._s(t.html3)}},[t._v("\n      ")]),t._v("\n    ")])]),t._m(7),o("p",{staticStyle:{"box-sizing":"border-box","margin-top":"1em","margin-bottom":"1em",padding:"0px",color:"rgba(0, 0, 0, 0.85)","font-family":'-apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',"font-size":"14px","white-space":"normal","background-color":"rgb(255, 255, 255)"}},[t._v(" 可对阴影的显示进行配置。 ")]),t._m(8),o("Demo",[t._v(" 通过shadow属性设置卡片阴影出现的时机：always、hover或never。 "),o("div",{attrs:{slot:"source"},slot:"source"},[o("tb-row",{attrs:{gutter:12}},[o("tb-col",{attrs:{span:8}},[o("tb-card",{attrs:{shadow:"always"}},[t._v(" 总是显示 ")])],1),o("tb-col",{attrs:{span:8}},[o("tb-card",{attrs:{shadow:"hover"}},[t._v(" 鼠标悬浮时显示 ")])],1),o("tb-col",{attrs:{span:8}},[o("tb-card",{attrs:{shadow:"never"}},[t._v(" 从不显示 ")])],1)],1)],1),o("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],attrs:{slot:"highlight"},slot:"highlight"},[t._v("      "),o("code",{staticClass:"javascript",domProps:{textContent:t._s(t.html4)}},[t._v("\n      ")]),t._v("\n    ")])]),t._m(9),t._m(10),o("tb-table-eazy",{attrs:{rows:t.rowCard,cols:t.col}}),o("RightSmallNav",{attrs:{rightTitle:t.rightTitle},on:{goMeowPoint:t.goMeowPoint}})],1)},a=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("h2",{staticStyle:{"box-sizing":"border-box",margin:"0px",padding:"10px 0px","font-size":"28px","font-weight":"400",color:"rgb(31, 47, 61)","border-bottom":"1px solid rgb(197, 217, 232)","font-family":'-apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',"white-space":"normal","background-color":"rgb(255, 255, 255)"},attrs:{id:"card-ka-pian"}},[o("a",{staticClass:"header-anchor",staticStyle:{"box-sizing":"border-box",color:"rgb(16, 137, 255)","text-decoration-line":"none"},attrs:{href:"#card-ka-pian"}},[t._v("¶")]),t._v(" Card 卡片 ")])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("h3",{staticStyle:{"box-sizing":"border-box",margin:"36px 0px 20px",padding:"0px","font-size":"22px","font-weight":"400",color:"rgb(31, 47, 61)","font-family":'-apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',"white-space":"normal","background-color":"rgb(255, 255, 255)"},attrs:{id:"ji-chu-yong-fa"}},[o("a",{staticClass:"header-anchor",staticStyle:{"box-sizing":"border-box",color:"rgb(16, 137, 255)","text-decoration-line":"none"},attrs:{href:"#ji-chu-yong-fa"}},[t._v("¶")]),t._v(" 基础用法 ")])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("p",[o("br")])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("h3",{staticStyle:{"box-sizing":"border-box",margin:"36px 0px 20px",padding:"0px","font-size":"22px","font-weight":"400",color:"rgb(31, 47, 61)","font-family":'-apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',"white-space":"normal","background-color":"rgb(255, 255, 255)"},attrs:{id:"jian-dan-ka-pian"}},[o("a",{staticClass:"header-anchor",staticStyle:{"box-sizing":"border-box",color:"rgb(16, 137, 255)","text-decoration-line":"none"},attrs:{href:"#jian-dan-ka-pian"}},[t._v("¶")]),t._v(" 简单卡片 ")])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("p",[o("br")])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("h3",{staticStyle:{"box-sizing":"border-box",margin:"36px 0px 20px",padding:"0px","font-size":"22px","font-weight":"400",color:"rgb(31, 47, 61)","font-family":'-apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',"white-space":"normal","background-color":"rgb(255, 255, 255)"},attrs:{id:"dai-tu-pian"}},[o("a",{staticClass:"header-anchor",staticStyle:{"box-sizing":"border-box",color:"rgb(16, 137, 255)","text-decoration-line":"none"},attrs:{href:"#dai-tu-pian"}},[t._v("¶")]),t._v(" 带图片 ")])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("p",[o("br")])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("h3",{staticStyle:{"box-sizing":"border-box",margin:"36px 0px 20px",padding:"0px","font-size":"22px","font-weight":"400",color:"rgb(31, 47, 61)","font-family":'-apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',"white-space":"normal","background-color":"rgb(255, 255, 255)"},attrs:{id:"ka-pian-yin-ying"}},[o("a",{staticClass:"header-anchor",staticStyle:{"box-sizing":"border-box",color:"rgb(16, 137, 255)","text-decoration-line":"none"},attrs:{href:"#ka-pian-yin-ying"}},[t._v("¶")]),t._v(" 卡片阴影 ")])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("p",[o("br")])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("h3",{staticStyle:{"box-sizing":"border-box",margin:"36px 0px 20px",padding:"0px","font-size":"22px","font-weight":"400",color:"rgb(31, 47, 61)","font-family":'-apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',"white-space":"normal","background-color":"rgb(255, 255, 255)"},attrs:{id:"rowCard"}},[o("a",{staticClass:"header-anchor",staticStyle:{"box-sizing":"border-box",color:"rgb(16, 137, 255)","text-decoration-line":"none"},attrs:{href:"#rowCard"}},[t._v("¶")]),t._v(" Card props ")])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("p",[o("br")])}],i=o("a4bd"),r=o("4e29"),l={name:"Card",components:{RightSmallNav:r["a"]},data:function(){return{currentDate:new Date,rowCard:[{Parameters:"header",Explain:"设置 header，也可以通过 slot#header 传入 DOM",Types:"string",Optional:"-",Default:"-"},{Parameters:"body-style",Explain:"设置 body 的样式",Types:"object",Optional:"-",Default:"{ padding: '20px' }"},{Parameters:"shadow",Explain:"设置阴影显示时机",Types:"\tstring",Optional:"always / hover / never",Default:"always"}],html1:'    <tb-card class="box-card">\n        <div slot="header" class="clearfix">\n            <span>卡片名称</span>\n            <tb-button style="float: right; padding: 3px 0" type="text">操作按钮</tb-button>\n        </div>\n        <div v-for="o in 4" :key="o" class="text item">\n            {{\'列表内容 \' + o }}\n        </div>\n    </tb-card>\n\n    <style>\n        .text {\n            font-size: 14px;\n        }\n\n        .item {\n            margin-bottom: 18px;\n        }\n\n        .clearfix:before,\n        .clearfix:after {\n            display: table;\n            content: "";\n        }\n        .clearfix:after {\n            clear: both\n        }\n\n        .box-card {\n            width: 480px;\n        }\n    </style>\n              ',html2:'    <tb-card class="box-card">\n        <div v-for="o in 4" :key="o" class="text item">\n            {{\'列表内容 \' + o }}\n        </div>\n    </tb-card>\n\n    <style>\n        .text {\n            font-size: 14px;\n        }\n\n        .item {\n            padding: 18px 0;\n        }\n\n        .box-card {\n            width: 480px;\n        }\n    </style>\n              ',html3:'    <tb-row>\n        <tb-col :span="8" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0">\n            <tb-card :body-style="{ padding: \'0px\' }">\n            <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">\n            <div style="padding: 14px;">\n                <span>好吃的汉堡</span>\n                <div class="bottom clearfix">\n                <time class="time">{{ currentDate }}</time>\n                <tb-button type="text" class="button">操作按钮</tb-button>\n                </div>\n            </div>\n            </tb-card>\n        </tb-col>\n    </tb-row>\n\n    <style>\n        .time {\n            font-size: 13px;\n            color: #999;\n        }\n\n        .bottom {\n            margin-top: 13px;\n            line-height: 12px;\n        }\n\n        .button {\n            padding: 0;\n            float: right;\n        }\n\n        .image {\n            width: 100%;\n            display: block;\n        }\n\n        .clearfix:before,\n        .clearfix:after {\n            display: table;\n            content: "";\n        }\n\n        .clearfix:after {\n            clear: both\n        }\n    </style>\n\n    <script>\n        export default {\n        data() {\n            return {\n            currentDate: new Date()\n            };\n        }\n        }\n    <\/script>\n              ',html4:'    <tb-row :gutter="12">\n        <tb-col :span="8">\n            <tb-card shadow="always">\n            总是显示\n            </tb-card>\n        </tb-col>\n        <tb-col :span="8">\n            <tb-card shadow="hover">\n            鼠标悬浮时显示\n            </tb-card>\n        </tb-col>\n        <tb-col :span="8">\n            <tb-card shadow="never">\n            从不显示\n            </tb-card>\n        </tb-col>\n    </tb-row>\n              ',rightTitle:[{title:"Card 卡片",id:"card-ka-pian"},{title:"基础用法",id:"ji-chu-yong-fa"},{title:"简单卡片",id:"jian-dan-ka-pian"},{title:"带图片",id:"dai-tu-pian"},{title:"卡片阴影",id:"ka-pian-yin-ying"},{title:"Card props",id:"rowCard"}]}},mixins:[i["a"]],methods:{goMeowPoint:function(t){var e=window.document.querySelector("#"+t);e.scrollIntoView(!0)}}},s=l,c=(o("e5e0"),o("2877")),d=Object(c["a"])(s,n,a,!1,null,"79576ef5",null);e["default"]=d.exports},"4e29":function(t,e,o){"use strict";var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"right_list_screen"},[o("div",{staticClass:"right_list"},t._l(t.rightTitle,(function(e){return o("div",{key:e.id,class:"slider_li "+e.id,on:{click:function(o){return t.goMeowPoint(e.id)}}},[t._v(t._s(e.title))])})),0)])},a=[],i=(o("159b"),{name:"RightSmallNav",props:["rightTitle"],methods:{goMeowPoint:function(t){var e=this;this.$emit("goMeowPoint",t),setTimeout((function(){var o=document.querySelectorAll(".slider_li");e.$nextTick((function(){o.forEach((function(t){t.style.color="#606266"}));var e=document.querySelector("."+t);e.style.color="#409eff"}))}),0)}}}),r=i,l=(o("0a0f2"),o("2877")),s=Object(l["a"])(r,n,a,!1,null,null,null);e["a"]=s.exports},"6ccc":function(t,e,o){},a4bd:function(t,e,o){"use strict";o("159b");e["a"]={data:function(){return{col:[{label:"参数",align:"center",field:"Parameters"},{label:"说明",align:"center",field:"Explain"},{label:"类型",align:"center",field:"Types"},{label:"可选值",align:"center",field:"Optional"},{label:"默认值",align:"center",field:"Default"}],colEvent:[{label:"方法/事件名称",align:"center",field:"Parameters"},{label:"说明",align:"center",field:"Explain"},{label:"返回值",align:"center",field:"Callback"}],colSlot:[{label:"名称",align:"center",field:"Parameters"},{label:"说明",align:"center",field:"Explain"}]}},mounted:function(){var t=this,e=window.document.querySelector("."+this.rightTitle[0].id);e.style.color="#409eff";var o=window.document.querySelector("#containers");o.onscroll=function(){if(t.rightTitle.forEach((function(e,n){var a=window.document.querySelector("#"+e.id),i=window.document.querySelector("."+e.id),r=null;t.rightTitle[n+1]&&(r=window.document.querySelector("#"+t.rightTitle[n+1].id)),(null==r||n+1>=t.rightTitle.length)&&(r={offsetTop:o.scrollHeight}),a&&(i.style.color="#606266"),a&&o.scrollTop+80>=a.offsetTop&&o.scrollTop+80<r.offsetTop&&(i.style.color="#409eff")})),0==o.scrollTop){var e=window.document.querySelector("."+t.rightTitle[0].id);e.style.color="#409eff"}}},beforeDestroy:function(){if(window.document.querySelector("#containers")){var t=window.document.querySelector("#containers");t.onscroll=null}}}},b8e1:function(t,e,o){},e5e0:function(t,e,o){"use strict";o("6ccc")}}]);
//# sourceMappingURL=chunk-25d3d6a2.63609f19.js.map