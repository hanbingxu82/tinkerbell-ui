(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-72d1227a"],{"0a0f2":function(e,t,o){"use strict";o("b8e1")},"4e29":function(e,t,o){"use strict";var r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"right_list_screen"},[o("div",{staticClass:"right_list"},e._l(e.rightTitle,(function(t){return o("div",{key:t.id,class:"slider_li "+t.id,on:{click:function(o){return e.goMeowPoint(t.id)}}},[e._v(e._s(t.title))])})),0)])},a=[],i=(o("159b"),{name:"RightSmallNav",props:["rightTitle"],methods:{goMeowPoint:function(e){var t=this;this.$emit("goMeowPoint",e),setTimeout((function(){var o=document.querySelectorAll(".slider_li");t.$nextTick((function(){o.forEach((function(e){e.style.color="#606266"}));var t=document.querySelector("."+e);t.style.color="#409eff"}))}),0)}}}),n=i,l=(o("0a0f2"),o("2877")),s=Object(l["a"])(n,r,a,!1,null,null,null);t["a"]=s.exports},"80bb":function(e,t,o){"use strict";o.r(t);var r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[e._m(0),o("p",{staticStyle:{"box-sizing":"border-box","margin-top":"1em","margin-bottom":"1em",padding:"0px",color:"rgba(0, 0, 0, 0.85)","font-family":'-apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',"font-size":"14px","white-space":"normal","background-color":"rgb(255, 255, 255)"}},[e._v(" 用图标、图片或者字符的形式展示用户或事物信息。 ")]),e._m(1),o("p",{staticStyle:{"box-sizing":"border-box","margin-top":"1em","margin-bottom":"1em",padding:"0px",color:"rgba(0, 0, 0, 0.85)","font-family":'-apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',"font-size":"14px","white-space":"normal","background-color":"rgb(255, 255, 255)"}},[e._v(" 通过 shape 和 size 设置头像的形状和大小。 ")]),e._m(2),o("Demo",[o("div",{attrs:{slot:"source"},slot:"source"},[o("tb-row",[o("tb-col",{attrs:{span:12}},[o("div",{staticClass:"title"},[e._v("circle")]),o("div",{attrs:{flex:"box:mean"}},[o("div",[o("tb-avatar",{attrs:{size:50,src:e.circleUrl}})],1),e._l(e.sizeList,(function(t){return o("div",{key:t},[o("tb-avatar",{attrs:{size:t,src:e.circleUrl}})],1)}))],2)]),o("tb-col",{attrs:{span:12}},[o("div",{staticClass:"title"},[e._v("square")]),o("div",{attrs:{flex:"box:mean"}},[o("div",[o("tb-avatar",{attrs:{shape:"square",size:50,src:e.squareUrl}})],1),e._l(e.sizeList,(function(t){return o("div",{key:t},[o("tb-avatar",{attrs:{shape:"square",size:t,src:e.squareUrl}})],1)}))],2)])],1)],1),o("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],attrs:{slot:"highlight"},slot:"highlight"},[e._v("      "),o("code",{staticClass:"javascript",domProps:{textContent:e._s(e.html1)}},[e._v("\n      ")]),e._v("\n    ")])]),e._m(3),o("p",{staticStyle:{"box-sizing":"border-box","margin-top":"1em","margin-bottom":"1em",padding:"0px",color:"rgba(0, 0, 0, 0.85)","font-family":'-apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',"font-size":"14px","white-space":"normal","background-color":"rgb(255, 255, 255)"}},[e._v(" 支持三种类型：图标、图片和字符 ")]),e._m(4),o("Demo",[o("div",{attrs:{slot:"source"},slot:"source"},[o("div",{attrs:{flex:"box:mean"}},[o("div",[o("tb-avatar",{attrs:{icon:"icon-user"}})],1),o("div",[o("tb-avatar",{attrs:{src:"https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"}})],1),o("div",[o("tb-avatar",[e._v(" user ")])],1)])]),o("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],attrs:{slot:"highlight"},slot:"highlight"},[e._v("      "),o("code",{staticClass:"javascript",domProps:{textContent:e._s(e.html2)}},[e._v("\n      ")]),e._v("\n    ")])]),e._m(5),o("p",{staticStyle:{"box-sizing":"border-box","margin-top":"1em","margin-bottom":"1em",padding:"0px",color:"rgba(0, 0, 0, 0.85)","font-family":'-apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',"font-size":"14px","white-space":"normal","background-color":"rgb(255, 255, 255)"}},[e._v(" 当展示类型为图片的时候，图片加载失败的 fallback 行为 ")]),e._m(6),o("Demo",[o("div",{attrs:{slot:"source"},slot:"source"},[o("div",{attrs:{flex:"box:mean"}},[o("tb-avatar",{attrs:{size:60,src:"https://empty"},on:{error:e.errorHandler}},[o("img",{attrs:{src:"https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"}})])],1)]),o("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],attrs:{slot:"highlight"},slot:"highlight"},[e._v("      "),o("code",{staticClass:"javascript",domProps:{textContent:e._s(e.html3)}},[e._v("\n      ")]),e._v("\n    ")])]),e._m(7),o("p",{staticStyle:{"box-sizing":"border-box","margin-top":"1em","margin-bottom":"1em",padding:"0px",color:"rgba(0, 0, 0, 0.85)","font-family":'-apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',"font-size":"14px","white-space":"normal","background-color":"rgb(255, 255, 255)"}},[e._v(" 当展示类型为图片的时候，使用 fit 属性定义图片如何适应容器框，同原生 object-fit。 ")]),e._m(8),o("Demo",[o("div",{attrs:{slot:"source"},slot:"source"},[o("div",{attrs:{flex:"box:mean"}},e._l(e.fits,(function(t){return o("div",{key:t,staticClass:"block"},[o("div",{staticClass:"title"},[e._v(e._s(t))]),o("tb-avatar",{attrs:{shape:"square",size:100,fit:t,src:e.url}})],1)})),0)]),o("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],attrs:{slot:"highlight"},slot:"highlight"},[e._v("      "),o("code",{staticClass:"javascript",domProps:{textContent:e._s(e.html4)}},[e._v("\n      ")]),e._v("\n    ")])]),e._m(9),e._m(10),o("tb-table-eazy",{attrs:{rows:e.rowAvatar,cols:e.col}}),e._m(11),e._m(12),o("tb-table-eazy",{attrs:{rows:e.rowAvatarEvent,cols:e.colEvent}}),e._m(13),e._m(14),o("tb-table-eazy",{attrs:{rows:e.rowAvatarSlot,cols:e.colSlot}}),o("RightSmallNav",{attrs:{rightTitle:e.rightTitle},on:{goMeowPoint:e.goMeowPoint}})],1)},a=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("h2",{staticStyle:{"box-sizing":"border-box",margin:"0px",padding:"10px 0px","font-size":"28px","font-weight":"400",color:"rgb(31, 47, 61)","border-bottom":"1px solid rgb(197, 217, 232)","font-family":'-apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',"white-space":"normal","background-color":"rgb(255, 255, 255)"},attrs:{id:"avatar-tou-xiang"}},[o("a",{staticClass:"header-anchor",staticStyle:{"box-sizing":"border-box",color:"rgb(16, 137, 255)","text-decoration-line":"none"},attrs:{href:"#avatar-tou-xiang"}},[e._v("¶")]),e._v(" Avatar 头像 ")])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("h3",{staticStyle:{"box-sizing":"border-box",margin:"36px 0px 20px",padding:"0px","font-size":"22px","font-weight":"400",color:"rgb(31, 47, 61)","font-family":'-apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',"white-space":"normal","background-color":"rgb(255, 255, 255)"},attrs:{id:"ji-chu-yong-fa"}},[o("a",{staticClass:"header-anchor",staticStyle:{"box-sizing":"border-box",color:"rgb(16, 137, 255)","text-decoration-line":"none"},attrs:{href:"#ji-chu-yong-fa"}},[e._v("¶")]),e._v(" 基础用法 ")])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("p",[o("br")])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("h3",{staticStyle:{"box-sizing":"border-box",margin:"36px 0px 20px",padding:"0px","font-size":"22px","font-weight":"400",color:"rgb(31, 47, 61)","font-family":'-apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',"white-space":"normal","background-color":"rgb(255, 255, 255)"},attrs:{id:"zhan-shi-lei-xing"}},[o("a",{staticClass:"header-anchor",staticStyle:{"box-sizing":"border-box",color:"rgb(16, 137, 255)","text-decoration-line":"none"},attrs:{href:"#zhan-shi-lei-xing"}},[e._v("¶")]),e._v(" 展示类型 ")])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("p",[o("br")])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("h3",{staticStyle:{"box-sizing":"border-box",margin:"36px 0px 20px",padding:"0px","font-size":"22px","font-weight":"400",color:"rgb(31, 47, 61)","font-family":'-apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',"white-space":"normal","background-color":"rgb(255, 255, 255)"},attrs:{id:"error-callback"}},[o("a",{staticClass:"header-anchor",staticStyle:{"box-sizing":"border-box",color:"rgb(16, 137, 255)","text-decoration-line":"none"},attrs:{href:"#error-callback"}},[e._v("¶")]),e._v(" 图片加载失败的 fallback 行为 ")])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("p",[o("br")])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("h3",{staticStyle:{"box-sizing":"border-box",margin:"36px 0px 20px",padding:"0px","font-size":"22px","font-weight":"400",color:"rgb(31, 47, 61)","font-family":'-apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',"white-space":"normal","background-color":"rgb(255, 255, 255)"},attrs:{id:"image-shi-ying"}},[o("a",{staticClass:"header-anchor",staticStyle:{"box-sizing":"border-box",color:"rgb(16, 137, 255)","text-decoration-line":"none"},attrs:{href:"#image-shi-ying"}},[e._v("¶")]),e._v(" 图片如何适应容器框 ")])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("p",[o("br")])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("h3",{staticStyle:{"box-sizing":"border-box",margin:"36px 0px 20px",padding:"0px","font-size":"22px","font-weight":"400",color:"rgb(31, 47, 61)","font-family":'-apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',"white-space":"normal","background-color":"rgb(255, 255, 255)"},attrs:{id:"rowAvatar"}},[o("a",{staticClass:"header-anchor",staticStyle:{"box-sizing":"border-box",color:"rgb(16, 137, 255)","text-decoration-line":"none"},attrs:{href:"#rowAvatar"}},[e._v("¶")]),e._v(" Avatar props ")])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("p",[o("br")])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("h3",{staticStyle:{"box-sizing":"border-box",margin:"36px 0px 20px",padding:"0px","font-size":"22px","font-weight":"400",color:"rgb(31, 47, 61)","font-family":'-apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',"white-space":"normal","background-color":"rgb(255, 255, 255)"},attrs:{id:"rowAvatarEvent"}},[o("a",{staticClass:"header-anchor",staticStyle:{"box-sizing":"border-box",color:"rgb(16, 137, 255)","text-decoration-line":"none"},attrs:{href:"#rowAvatar"}},[e._v("¶")]),e._v(" Avatar events ")])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("p",[o("br")])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("h3",{staticStyle:{"box-sizing":"border-box",margin:"36px 0px 20px",padding:"0px","font-size":"22px","font-weight":"400",color:"rgb(31, 47, 61)","font-family":'-apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',"white-space":"normal","background-color":"rgb(255, 255, 255)"},attrs:{id:"rowAvatarSlot"}},[o("a",{staticClass:"header-anchor",staticStyle:{"box-sizing":"border-box",color:"rgb(16, 137, 255)","text-decoration-line":"none"},attrs:{href:"#rowAvatarSlot"}},[e._v("¶")]),e._v(" Avatar slots ")])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("p",[o("br")])}],i=o("a4bd"),n=o("4e29"),l={name:"Avatar",components:{RightSmallNav:n["a"]},data:function(){return{current:2,circleUrl:"https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",squareUrl:"https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",sizeList:["large","medium","small"],fits:["fill","contain","cover","none","scale-down"],url:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",rowAvatar:[{Parameters:"icon",Explain:"设置头像的图标类型，参考 Icon 组件",Types:"string",Optional:"-",Default:"-"},{Parameters:"size",Explain:"设置头像的大小",Types:"number/string",Optional:"number / large / medium / small",Default:"large"},{Parameters:"shape",Explain:"设置头像的形状",Types:"string",Optional:"circle / square",Default:"circle"},{Parameters:"src",Explain:"图片头像的资源地址",Types:"string",Optional:"-",Default:"-"},{Parameters:"srcSet",Explain:"以逗号分隔的一个或多个字符串列表表明一系列用户代理使用的可能的图像",Types:"String",Optional:"-",Default:"-"},{Parameters:"alt",Explain:"描述图像的替换文本",Types:"String",Optional:"-",Default:"-"},{Parameters:"fit",Explain:"当展示类型为图片的时候，设置图片如何适应容器框",Types:"string",Optional:"fill / contain / cover / none / scale-down\t",Default:"cover"}],rowAvatarEvent:[{Parameters:"error",Explain:"图片类头像加载失败的回调， 返回 false 会关闭组件默认的 fallback 行为",Callback:"(e: Event)"}],rowAvatarSlot:[{Parameters:"default",Explain:"自定义头像展示内容"}],html1:'    <template>\n        <div>\n            <tb-row>\n            <tb-col :span="12">\n                <div class="title">circle</div>\n                <div flex="box:mean">\n                <div ><tb-avatar :size="50" :src="circleUrl"></tb-avatar></div>\n                <div  v-for="size in sizeList" :key="size">\n                    <tb-avatar :size="size" :src="circleUrl"></tb-avatar>\n                </div>\n                </div>\n            </tb-col>\n            <tb-col :span="12">\n                <div class="title">square</div>\n                <div flex="box:mean">\n                <div ><tb-avatar shape="square" :size="50" :src="squareUrl"></tb-avatar></div>\n                <div  v-for="size in sizeList" :key="size">\n                    <tb-avatar shape="square" :size="size" :src="squareUrl"></tb-avatar>\n                </div>\n                </div>\n            </tb-col>\n            </tb-row>\n        </div>\n    </template>\n\n    <script>\n        export default {\n            data () {\n                return {\n                    circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",\n                    squareUrl: "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",\n                    sizeList: ["large", "medium", "small"]\n                }\n            }\n        }\n    <\/script>\n              ',html2:'    <template>\n        <div flex="box:mean">\n          <div>\n            <tb-avatar icon="icon-user"></tb-avatar>\n          </div>\n          <div>\n            <tb-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></tb-avatar>\n          </div>\n          <div>\n            <tb-avatar> user </tb-avatar>\n          </div>\n        </div>\n    </template>\n              ',html3:'    <template>\n        <div class="demo-type">\n            <el-avatar :size="60" src="https://empty" @error="errorHandler">\n            <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"/>\n            </el-avatar>\n        </div>\n    </template>\n    <script>\n        export default {\n            methods: {\n            errorHandler() {\n                return true\n            }\n            }\n        }\n    <\/script>\n              ',html4:'    <template>\n        <div flex="box:mean">\n            <div class="block" v-for="fit in fits" :key="fit">\n                <div class="title">{{ fit }}</div>\n                <tb-avatar shape="square" :size="100" :fit="fit" :src="url"></tb-avatar>\n            </div>\n        </div>\n    </template>\n    <script>\n        export default {\n            data() {\n            return {\n                fits: [\'fill\', \'contain\', \'cover\', \'none\', \'scale-down\'],\n                url: \'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg\'\n            }\n            }\n        }\n    <\/script>\n              ',rightTitle:[{title:"Avatar 头像",id:"avatar-tou-xiang"},{title:"基础用法",id:"ji-chu-yong-fa"},{title:"展示类型",id:"zhan-shi-lei-xing"},{title:"图片 error",id:"error-callback"},{title:"图片适应方式",id:"image-shi-ying"},{title:"Avatar props",id:"rowAvatar"},{title:"Avatar events",id:"rowAvatarEvent"},{title:"Avatar slots",id:"rowAvatarSlot"}]}},mixins:[i["a"]],methods:{goMeowPoint:function(e){var t=window.document.querySelector("#"+e);t.scrollIntoView(!0)},errorHandler:function(){return!0}}},s=l,c=(o("ac7c"),o("2877")),m=Object(c["a"])(s,r,a,!1,null,"bb2512c0",null);t["default"]=m.exports},a4bd:function(e,t,o){"use strict";o("159b");t["a"]={data:function(){return{col:[{label:"参数",align:"center",field:"Parameters"},{label:"说明",align:"center",field:"Explain"},{label:"类型",align:"center",field:"Types"},{label:"可选值",align:"center",field:"Optional"},{label:"默认值",align:"center",field:"Default"}],colEvent:[{label:"方法/事件名称",align:"center",field:"Parameters"},{label:"说明",align:"center",field:"Explain"},{label:"返回值",align:"center",field:"Callback"}],colSlot:[{label:"名称",align:"center",field:"Parameters"},{label:"说明",align:"center",field:"Explain"}]}},mounted:function(){var e=this,t=window.document.querySelector("."+this.rightTitle[0].id);t.style.color="#409eff";var o=window.document.querySelector("#containers");o.onscroll=function(){if(e.rightTitle.forEach((function(t,r){var a=window.document.querySelector("#"+t.id),i=window.document.querySelector("."+t.id),n=null;e.rightTitle[r+1]&&(n=window.document.querySelector("#"+e.rightTitle[r+1].id)),(null==n||r+1>=e.rightTitle.length)&&(n={offsetTop:o.scrollHeight}),a&&(i.style.color="#606266"),a&&o.scrollTop+80>=a.offsetTop&&o.scrollTop+80<n.offsetTop&&(i.style.color="#409eff")})),0==o.scrollTop){var t=window.document.querySelector("."+e.rightTitle[0].id);t.style.color="#409eff"}}},beforeDestroy:function(){if(window.document.querySelector("#containers")){var e=window.document.querySelector("#containers");e.onscroll=null}}}},ac7c:function(e,t,o){"use strict";o("d56c")},b8e1:function(e,t,o){},d56c:function(e,t,o){}}]);
//# sourceMappingURL=chunk-72d1227a.0867c8a9.js.map