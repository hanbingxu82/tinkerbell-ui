<!--
 * @Author: your name
 * @Date: 2021-03-16 13:46:44
 * @LastEditTime: 2021-09-07 09:56:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/examples/App.vue
-->
<template>
  <div id="app">
    <br>
    <br>
    <br>
    <br>
    <br>
    服务器 pm2 启动进程测试
    <!-- <tb-button type="primary" >Info</tb-button>
    <tb-button type="primary" @click="$alert({ title: '标题', content: '我是弹窗内容', width: 500 })">Info</tb-button>
    <tb-button type="success" @click="$alert({ type: 'success', title: '标题', content: '我是弹窗内容' })">Success</tb-button>
    <tb-button type="warning" @click="$alert.warning({ title: '标题', content: '我是弹窗内容' })">Warning</tb-button>
    <tb-button type="danger" @click="showAlert">Danger</tb-button>

    <tb-button type="primary" @click="modal1 = true">显示弹窗</tb-button>
    <tb-modal v-model="modal1" title="普通的模态框标题" @ok="ok" @close="ok">
      <p>我是弹窗内容...</p>
      <p>我是弹窗内容...</p>
      <p>我是弹窗内容...</p>
    </tb-modal>
    <tb-button @click="modal1 = true">显示弹窗一</tb-button>
    <tb-modal v-model="modal1" title="弹窗一" footer-hide width="600">
      <p>我是弹窗内容...</p>
      <p>我是弹窗内容...</p>
      <p>我是弹窗内容...</p>
      <tb-button type="primary" @click="modal2 = true">打开嵌套弹窗</tb-button>
      <tb-modal v-model="modal2" title="嵌套弹窗">
        <p>我是弹窗内容...</p>
        <p>我是弹窗内容...</p>
        <p>我是弹窗内容...</p>
      </tb-modal>
    </tb-modal> -->
    <!-- <tb-popover trigger="hover" title="Title" content="content">
      <tb-button>Hover</tb-button>
    </tb-popover>
    <tb-popover trigger="click" title="Title" content="content">
      <tb-button>Click</tb-button>
    </tb-popover>
    <tb-popover trigger="focus" title="Title" content="content">
      <tb-button>Focus</tb-button>
    </tb-popover>
    <div>
      <div class="top">
        <tb-popover title="Title" content="Top Left text" placement="top-start"> <tb-button>上左</tb-button>&nbsp;&nbsp; </tb-popover>
        <tb-popover title="Title" content="Top Center text" placement="top"> <tb-button>上边</tb-button>&nbsp;&nbsp; </tb-popover>
        <tb-popover title="Title" content="Top Right text" placement="top-end">
          <tb-button>上右</tb-button>
        </tb-popover>
      </div>
      <div class="center">
        <div class="center-left">
          <tb-popover title="Title" content="Left Top text" placement="left-start">
            <tb-button>左上</tb-button> </tb-popover
          ><br /><br />
          <tb-popover title="Title" content="Left Center text" placement="left">
            <tb-button>左边</tb-button> </tb-popover
          ><br /><br />
          <tb-popover title="Title" content="Left Bottom text" placement="left-end">
            <tb-button>左下</tb-button>
          </tb-popover>
        </div>
        <div class="center-right">
          <tb-popover title="Title" content="Right Top text" placement="right-start">
            <tb-button>右上</tb-button> </tb-popover
          ><br /><br />
          <tb-popover title="Title" content="Right Center text" placement="right">
            <tb-button>右边</tb-button> </tb-popover
          ><br /><br />
          <tb-popover title="Title" content="Right Bottom text" placement="right-end">
            <tb-button>右下</tb-button>
          </tb-popover>
        </div>
      </div>
      <div class="bottom">
        <tb-popover title="Title" content="Bottom Left text" placement="bottom-start"> <tb-button>下左</tb-button>&nbsp;&nbsp; </tb-popover>
        <tb-popover title="Title" content="Bottom Center text" placement="bottom"> <tb-button>下边</tb-button>&nbsp;&nbsp; </tb-popover>
        <tb-popover title="Title" content="Bottom Right text" placement="bottom-end">
          <tb-button>下右</tb-button>
        </tb-popover>
      </div>
    </div>
    <tb-tabs v-model="activeTab" :data="tabs"></tb-tabs>
    <p>{{ activeTab }}模板</p>
    <tb-tabs v-model="activeTab" :data="tabs" type="card"></tb-tabs>
    <tb-tabs v-model="activeTab" :data="tabs" type="card" closable @tab-close="handleTabClose"></tb-tabs>
    <tb-button type="primary" plain size="small" @click="handleAdd">add tab</tb-button>

    <br />
    <tb-tabs v-model="activeTab" :data="tabs" type="card" closable context-menu ref="tabs" @tab-close="handleTabClose" @tab-select="handleSelect">
      <template slot="menu">
        <li @click="refreshSelected">刷新</li>
        <li @click="closeSelected">关闭</li>
        <li @click="closeOthers">关闭其他</li>
        <li @click="closeAll">关闭所有</li>
      </template>
    </tb-tabs>
    <br />
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
    <!-- <tb-upload paste :format="['xlsx']" action="//jsonplaceholder.typicode.com/posts/" type="drag">
      <p slot="tip">单个文件不能超过2M</p>
    </tb-upload> -->
    <!-- 
    <tb-steps :current="current" status="wait">
      <tb-step title="已完成" content="这里是该步骤的描述信息"></tb-step>
      <tb-step title="进行中" content="这里是该步骤的描述信息"></tb-step>
      <tb-step title="待进行" content="这里是该步骤的描述信息"></tb-step>
      <tb-step title="待进行" content="这里是该步骤的描述信息"></tb-step>
    </tb-steps>
    <tb-steps :current="2" size="small">
      <tb-step title="已完成"></tb-step>
      <tb-step title="进行中"></tb-step>
      <tb-step title="待进行"></tb-step>
      <tb-step title="待进行"></tb-step>
    </tb-steps>
    <tb-steps :current="1">
      <tb-step title="已完成" icon="icon-home-filling"></tb-step>
      <tb-step title="进行中" icon="icon-browse"></tb-step>
      <tb-step title="待进行" icon="icon-attachment"></tb-step>
    </tb-steps>
    <tb-steps :current="current" direction="vertical">
      <tb-step title="已完成" content="这里是该步骤的描述信息"></tb-step>
      <tb-step title="进行中" content="这里是该步骤的描述信息"></tb-step>
      <tb-step title="待进行" content="这里是该步骤的描述信息"></tb-step>
      <tb-step title="待进行" content="这里是该步骤的描述信息"></tb-step>
    </tb-steps>
    <tb-steps :current="2" status="error">
      <tb-step title="已完成" content="这里是该步骤的描述信息"></tb-step>
      <tb-step title="进行中" content="这里是该步骤的描述信息"></tb-step>
      <tb-step title="待进行" content="这里是该步骤的描述信息"></tb-step>
      <tb-step title="待进行" content="这里是该步骤的描述信息"></tb-step>
    </tb-steps>
    <tb-button type="primary" @click="next">下一步</tb-button> -->

    <!-- <tb-progress :percent="10"></tb-progress>
    <tb-progress :percent="20" status="success"></tb-progress>
    <tb-progress :percent="30" status="warning" :border="false"></tb-progress>
    <tb-progress :percent="40" status="error"></tb-progress>
    <tb-progress :percent="50" color="#9254de"></tb-progress>
    <tb-progress :percent="60" :color="['#f5af19', '#f12711', '#9254de', '#40a9ff', '#5cdbd3']" :border="false"></tb-progress>
    <tb-progress :percent="70" :color="['#40a9ff', '#5cdbd3']" bg-color="#d9f7be"></tb-progress>
    <tb-progress :percent="percent" :color="getColor"></tb-progress> -->
    <!-- <tb-progress :percent="40" active></tb-progress>
    <tb-progress :percent="60" active active-color="#f12711"></tb-progress>
    <tb-progress :percent="80" active :color="['#f5af19', '#f12711', '#9254de', '#40a9ff', '#5cdbd3']"></tb-progress>
    <tb-progress :percent="100" :color-flow="true"></tb-progress> -->
    <!-- <tb-progress :percent="20"></tb-progress>
    <tb-progress :percent="40" status="success" type="lump"></tb-progress>
    <tb-progress :percent="60" :line-height="10" status="warning" type="lump" active :border="false"></tb-progress>
    <tb-progress :percent="80" :color="['#40a9ff', '#5cdbd3']" type="lump" :cut-width="2" cut-color="#389e0d"></tb-progress>
    <tb-progress :percent="50"></tb-progress>
    <tb-progress :percent="60" status="success" :show-text="false"></tb-progress>
    <tb-progress :percent="80" status="warning" :format="format"></tb-progress>
    <tb-progress :percent="100" status="error" :format="format"></tb-progress> -->
    <!-- <tb-input-number :min="0" :max="100" :step="0.111111111111111"  v-model="yourVModel" /> -->
    <!-- <tb-switch @change="change" v-model="value" checked-text="开" unchecked-text="关" /> -->
    <!-- <tb-button @click="loading">开</tb-button>
    <tb-button @click="loading1">关</tb-button>
    <tb-button @click="loading2">错误</tb-button> -->
    <!-- <tb-timeline>
      <tb-timeline-item>
        <p class="time">2019年4月12日</p>
        <p class="content">初始化</p>
      </tb-timeline-item>
      <tb-timeline-item>
        <p class="time">2019年4月21日</p>
        <p class="content">发布1.1.0版本，</p>
      </tb-timeline-item>
      <tb-timeline-item>
        <p class="time">2019年7月24日</p>
        <p class="content">发布1.5.0版本，</p>
      </tb-timeline-item>
      <tb-timeline-item>
        <p class="time">2019年8月23日</p>
        <p class="content">发布2.0.0版本，</p>
      </tb-timeline-item>
    </tb-timeline>

    <tb-timeline>
      <tb-timeline-item color="primary">发布1.0版本</tb-timeline-item>
      <tb-timeline-item color="info">发布1.5版本</tb-timeline-item>
      <tb-timeline-item color="warning">错误修复</tb-timeline-item>
      <tb-timeline-item color="danger">严重故障</tb-timeline-item>
      <tb-timeline-item color="success">发布2.0版本</tb-timeline-item>
      <tb-timeline-item color="#ff30b5">里程碑发布</tb-timeline-item>
    </tb-timeline>

    <tb-timeline pending>
      <tb-timeline-item color="success" dot-top="8px">
        <i slot="dot" class="iconfont icon-navigation"></i>
        <span>正式版上线</span>
      </tb-timeline-item>
      <tb-timeline-item>发布2.0版本</tb-timeline-item>
      <tb-timeline-item>发布1.5版本</tb-timeline-item>
      <tb-timeline-item>发布1.0版本</tb-timeline-item>
    </tb-timeline> -->
    <div>
      <tb-alert type="success">
        123123
      </tb-alert>
      <tb-alert type="info">消息提示的文案</tb-alert>
      <tb-alert type="warning" title="警告提示的文案"></tb-alert>
      <tb-alert type="danger" title="错误提示的文案"></tb-alert>
      <br />
      <tb-alert type="success" show-icon>成功提示的文案</tb-alert>
      <tb-alert type="info" show-icon>消息提示的文案</tb-alert>
      <tb-alert type="warning" show-icon>警告提示的文案</tb-alert>
      <tb-alert type="danger" show-icon>错误提示的文案</tb-alert>
      <br />
      <tb-alert type="success" center show-icon>成功提示的文案</tb-alert>
      <tb-alert type="info" center show-icon icon="icon-dynamic-filling">消息提示的文案</tb-alert>
      <tb-alert type="warning" center show-icon>警告提示的文案</tb-alert>
      <tb-alert type="danger" center show-icon>错误提示的文案</tb-alert>
      <br />
      <tb-alert type="success" :closable="false">不可关闭的 alert</tb-alert>
      <tb-alert type="info" close-text="知道了">自定义关闭的 alert</tb-alert>
      <tb-alert type="warning" @close="hello">设置了回调的 alert</tb-alert>
      <br />
      <tb-alert type="success" description="这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰……">带辅助性文字介绍</tb-alert>
      <tb-alert type="info" show-icon description="这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰……">带有 icon 和辅助性文字介绍</tb-alert>
      <!-- <tb-breadcrumb separator="/" separator-class="icon-mic">
      <tb-breadcrumb-item :to="{ path: '/' }" replace>首页</tb-breadcrumb-item>
      <tb-breadcrumb-item><a href="/">活动管理</a></tb-breadcrumb-item>
      <tb-breadcrumb-item :to="{ path: '/' }" replace>活动列表</tb-breadcrumb-item>
      <tb-breadcrumb-item>活动详情</tb-breadcrumb-item>
    </tb-breadcrumb> -->
      <!-- <tb-rate v-model="myCurrentRate" :length="5" :activecolor="activecolor" />

    <tb-rate :length="5" :value="3" />

    <tb-rate :length="5" :showcount="true" />

    <tb-rate showcount :length="5" :value="3" />

    <tb-rate :length="5" :ratedesc="desc" iconref="icon-mic"/>

    <tb-rate readonly :length="5" :value="3" :ratedesc="desc" />

    <tb-rate showcount disabled :length="5" />

    <tb-rate disabled :length="5" :value="3" />

    <tb-rate disabled showcount :length="5" :value="3" />

    <tb-rate disabled :length="5" :value="3" :ratedesc="desc" /> -->

      <!-- <tb-page-header @back="goBack" content="详情页面"> </tb-page-header> -->
      <!-- <div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
      <div v-for="item in data" :key="item.name">
        {{ item.name }}
      </div>
    </div> -->
      <tb-button @click="activecolor = 'green'">123</tb-button>
      <tb-showmore :len="10" text="文本超出显示长度，折叠起来，通过len属性显示从何处开始折叠"> </tb-showmore>
      <tb-showmore allowFold :len="10" show-text="show" hidden-text="hidden" text="文本超出显示长度，折叠起来，通过len属性显示从何处开始折叠"> </tb-showmore>
      <!-- <div class="demo">
      <tb-carousel ref="tbCarousel" @change="carouselChange" trigger="click" :interval="7000" height="260px" type="card" arrow="never">
        <tb-carousel-item :name="'小仙男' + i"  v-for="i in 6" :key="i">
          <h1 v-text="i"></h1>
        </tb-carousel-item>
      </tb-carousel>
      <tbCarousel :interval="7000" height="300px" arrow="always">
        <tbCarouselItem v-for="i in 6" :key="i">
          <h1 v-text="i"></h1>
        </tbCarouselItem>
      </tbCarousel>
    </div>
    <tb-button type="primary" @click="next">1111</tb-button>
    <tb-button type="primary" @click="prev">2222</tb-button>
    <tb-button type="primary" @click="setActiveItem">3333</tb-button> -->

      <!-- <tb-backtop text="小仙男" :visibleY="460" :duration="300" @scrolledOnTop="yourFunction()"> </tb-backtop>
    <div style="height:3000px;background:green;">
      <div @click="yourFunction" class="gotop">
        123
      </div>
    </div> -->
      <!-- <tb-avatar :size="60" src="https://empty" :error="errorHandler">
      <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png" />
    </tb-avatar> -->
      <!-- 
    <div class="block" v-for="fit in fits" :key="fit">
      <span class="title">{{ fit }}</span>
      <tb-avatar shape="square" :size="100" :fit="fit" :src="url"></tb-avatar>
    </div> -->
      <!-- <div>
        <span>头上一片晴天，心中一个想念</span>
        <tb-divider content-position="left">少年包青天</tb-divider>
        <span>饿了别叫妈, 叫饿了么</span>
        <tb-divider><i class="iconfont icon-smile"></i></tb-divider>
        <span>为了无法计算的价值</span>
        <tb-divider content-position="right">阿里云</tb-divider>
      </div>
      <div>
        <span>雨纷纷</span>
        <tb-divider direction="vertical"></tb-divider>
        <span>旧故里</span>
        <tb-divider direction="vertical"></tb-divider>
        <span>草木深</span>
      </div> -->

      <!-- <tb-popconfirm @confirm="confirm" @cancel="cancel" confirm-button-text="111" cancel-button-text="222" confirm-button-type="success" cancel-button-type="danger" title="我是不是一个？" icon="icon-unlock" icon-color="red" >
        <tb-button slot="reference">123</tb-button>
      </tb-popconfirm> -->
      <!-- <tb-calendar :options="calendarArr" class="calendar" @handleClickDay="handleClickDay" @handlePrevMonth="handlePrevMonth" @handleNextMonth="handleNextMonth" /> -->

      <!-- 完成  颜色选择器组件 -->
      <!-- <input type="text" id="color-picker" v-model="color" auto-complete="off" @focus="openPicker" :style="'background-color:' + color" />
      <tb-color ref="tbColor" :color="color" :targetElem="'#color-picker'" @onChange="onChange"> </tb-color>
      <tb-color-picker v-model="color" @change="headleChangeColor"></tb-color-picker> -->

      <!-- <tb-tag effect="dark">蓝色</tb-tag>
      <tb-tag size="mini" type="success" >绿色</tb-tag>
      <tb-tag @click="click1" @close="close" size="medium" type="warning">黄色</tb-tag>
      <tb-tag @close="close" type="info">灰色</tb-tag>
      <tb-tag effect="plain" type="danger">红色</tb-tag> -->

      <!-- <tb-checkbox v-model="checkbox" border>小仙子</tb-checkbox>
      <tb-checkbox v-model="checkbox" border>小仙子</tb-checkbox>
      <tb-checkbox v-model="checkbox" border>小仙子</tb-checkbox>
      <tb-checkbox v-model="checkbox" border>小仙子</tb-checkbox>
    </div>

    <tb-checkbox v-model="checkAll" :indeterminate="isIndeterminate" @change="handleCheckAllChange">小仙子</tb-checkbox>
    <div>
      <tb-checkbox-group :min="1" :max="2" v-model="checkedCities" @change="handleCheckedCitiesChange">
        <tb-checkbox v-for="city in cities" :label="city" :key="city">{{ city }}</tb-checkbox>
      </tb-checkbox-group>
      <tb-checkbox-group :min="1" :max="2" v-model="checkedCities" @change="handleCheckedCitiesChange">
        <tb-checkbox-button v-for="city in cities" :label="city" :key="city">{{ city }}</tb-checkbox-button>
      </tb-checkbox-group> -->
    </div>
    <div>
      <tb-checkbox v-model="checkbox" border>小仙子</tb-checkbox>
    </div>

    <div>
      <tb-checkbox-group disabled v-model="checkList">
        <tb-checkbox label="复选框 A"></tb-checkbox>
        <tb-checkbox label="复选框 B"></tb-checkbox>
        <tb-checkbox label="复选框 C"></tb-checkbox>
        <tb-checkbox label="禁用"></tb-checkbox>
        <tb-checkbox label="选中且禁用"></tb-checkbox>
      </tb-checkbox-group>
    </div>

    <Xiaoxiannan></Xiaoxiannan>
    <div>
      <tb-radio name="think1" v-model="radio" label="小仙男" border>小仙男</tb-radio>
      <tb-radio name="think2" v-model="radio" :disabled="dis" label="小仙女" border>小仙女</tb-radio>
      <tb-radio v-model="radio" size="mini" label="小仙子" border>小仙子</tb-radio>
      <tb-radio v-model="radio" size="small" label="小仙子" border>小仙子</tb-radio>
      <tb-radio v-model="radio" size="medium" label="小仙子" border>小仙子</tb-radio>
    </div>

    <tb-radio-group size="mini" name="think3" v-model="radio1" @change="radioChange">
      <tb-radio label="小仙男" border>小仙男</tb-radio>
      <tb-radio label="小仙女" border>小仙女</tb-radio>
      <tb-radio label="小仙子" border>小仙子</tb-radio>
    </tb-radio-group>

    <tb-radio-group size="mini" v-model="radio1" @change="radioChange">
      <tb-radio-button label="小仙男" border>小仙男</tb-radio-button>
      <tb-radio-button label="小仙女" border>小仙女</tb-radio-button>
      <tb-radio-button label="小仙子" border>小仙子</tb-radio-button>
    </tb-radio-group>
    <tb-radio-group size="small" v-model="radio1" @change="radioChange">
      <tb-radio-button label="小仙男" border>小仙男</tb-radio-button>
      <tb-radio-button label="小仙女" border>小仙女</tb-radio-button>
      <tb-radio-button label="小仙子" border>小仙子</tb-radio-button>
    </tb-radio-group>
    <tb-radio-group size="medium" v-model="radio1" @change="radioChange">
      <tb-radio-button label="小仙男" border>小仙男</tb-radio-button>
      <tb-radio-button label="小仙女" border>小仙女</tb-radio-button>
      <tb-radio-button label="小仙子" border>小仙子</tb-radio-button>
    </tb-radio-group>
    <tb-radio-group v-model="radio1" @change="radioChange">
      <tb-radio-button label="小仙男" border>小仙男</tb-radio-button>
      <tb-radio-button label="小仙女" border>小仙女</tb-radio-button>
      <tb-radio-button label="小仙子" border>小仙子</tb-radio-button>
    </tb-radio-group>

    <tb-button @click="dis = !dis" type="primary">dianji</tb-button>
    <Xiaoxiannan></Xiaoxiannan>

    <tb-container>
      <tb-header height="200px">Header</tb-header>
      <tb-container>
        <tb-aside width="300px">Aside</tb-aside>
        <tb-main>Main</tb-main>
      </tb-container>
      <tb-footer height="200px">Footer</tb-footer>
    </tb-container>

    <Xiaoxiannan></Xiaoxiannan>
    <!-- tb-link -->
    <div style="width:400px;display:flex;justify-content:space-between;">
      <tb-link :underline="false" target="_blank" href="https://baidu.com">默认链接</tb-link>
      <tb-link type="primary">主要链接</tb-link>
      <tb-link :underline="false" type="success">成功链接</tb-link>
      <tb-link :underline="false" type="warning">警告链接</tb-link>
      <!-- <tb-link  type="danger">危险链接</tb-link>
      <tb-link  type="info">信息链接</tb-link> -->
      <tb-link icon="icon-layers" type="danger">危险链接</tb-link>
      <tb-link type="info">信息链接<i class="iconfont">&#xe6ad;</i></tb-link>
    </div>
    <Xiaoxiannan></Xiaoxiannan>
    <!-- tb-row  tb-col -->
    <tb-row :gutter="20" align="bottom">
      <tb-col :xs="{ span: 8, offset: 2 }" :sm="{ span: 6, offset: 4 }" :md="{ span: 4, offset: 6 }" :lg="{ span: 2, offset: 8 }" :xl="{ span: 1, offset: 9 }">
        <!-- 默认最小高度为36px  所以如果不设置height:100%的话会根据流动高度来走 -->
        <div style="background:red;">123</div>
      </tb-col>
      <tb-col :span="4" :offset="4">
        <div style="background:red;"></div>
        456</tb-col
      >
      <tb-col :span="4">
        <div style="background:red;"></div>
        789</tb-col
      >
    </tb-row>

    <Xiaoxiannan></Xiaoxiannan>
    <!-- 不同按钮大小的button -->
    <div>
      <tb-button>小仙男</tb-button>
      <tb-button size="mini">小仙男</tb-button>
      <tb-button size="small" type="primary">小仙男</tb-button>
      <tb-button size="medium" type="success">小仙男</tb-button>
    </div>
    <!-- 基本按钮 -->
    <div>
      <tb-button size="mini">小仙男</tb-button>
      <tb-button size="mini" type="primary">小仙男</tb-button>
      <tb-button size="mini" type="success">小仙男</tb-button>
      <tb-button size="mini" type="info">小仙男</tb-button>
      <tb-button size="mini" type="warning">小仙男</tb-button>
      <tb-button size="mini" type="danger">小仙男</tb-button>
    </div>
    <!-- 朴素按钮 -->
    <div>
      <tb-button size="mini" plain>小仙男</tb-button>
      <tb-button size="mini" type="primary" plain>小仙男</tb-button>
      <tb-button size="mini" type="success" plain>小仙男</tb-button>
      <tb-button size="mini" type="info" plain>小仙男</tb-button>
      <tb-button size="mini" type="warning" plain>小仙男</tb-button>
      <tb-button size="mini" type="danger" plain>小仙男</tb-button>
    </div>
    <!-- 圆角按钮 -->
    <div>
      <tb-button size="mini" round>小仙男</tb-button>
      <tb-button size="mini" type="primary" round>小仙男</tb-button>
      <tb-button size="mini" type="success" round>小仙男</tb-button>
      <tb-button size="mini" type="info" round>小仙男</tb-button>
      <tb-button size="mini" type="warning" round>小仙男</tb-button>
      <tb-button size="mini" type="danger" round>小仙男</tb-button>
    </div>
    <!-- 圆形图标按钮   一旦设置了circle便不再受size-mini的影响 -->
    <div>
      <tb-button icon="icon-layers" circle></tb-button>
      <tb-button icon="icon-layers" type="primary" circle></tb-button>
      <tb-button icon="icon-layers" type="success" circle></tb-button>
      <tb-button icon="icon-layers" type="info" circle></tb-button>
      <tb-button icon="icon-layers" type="warning" circle></tb-button>
      <tb-button icon="icon-layers" type="danger" circle></tb-button>
    </div>

    <!-- 图标按钮 -->
    <div>
      <tb-button disabled icon="icon-layers">小仙男</tb-button>
      <tb-button disabled icon="icon-layers" type="primary">小仙男</tb-button>
      <tb-button disabled icon="icon-layers" type="success">小仙男</tb-button>
      <tb-button disabled icon="icon-layers" type="info">小仙男</tb-button>
      <tb-button disabled icon="icon-layers" type="warning">小仙男</tb-button>
      <tb-button disabled icon="icon-layers" type="danger">小仙男</tb-button>
    </div>

    <div>
      <tb-button :loading="load">小仙男在努力</tb-button>
      <tb-button type="primary" @click="loadm">小仙男在努力</tb-button>
    </div>

    <i class="iconfont">&#xe6ad;</i>
    <i class="iconfont icon-layers"></i>

    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/> -->
  </div>
</template>
<script>
const cityOptions = ["上海", "北京", "广州", "深圳"];
window.COUNT = 1;
export default {
  created() {
    for (var i = 0; i < 200; i++) {
      this.list.push({
        title: "item " + COUNT++,
      });
    }
  },
  data() {
    return {
      percent: 10,
      ifUp: true,
      yourVModel: 0,
      // value: false,
      current: 0,
      modal1: false,
      modal2: false,
      tabs: [
        { key: "tab1", title: "用户管理", icon: "icon-caps-unlock-filling" },
        { key: "tab2", title: "组织管理" },
        { key: "tab3", title: "系统管理" },
        { key: "tab4", title: "目录模块配置" },
      ],
      activeTab: "tab1",
      myCurrentRate: 3,
      desc: ["非常糟糕", "糟糕", "正常", "良好", "非常良好"],
      currentDate: new Date(),
      fits: ["fill", "contain", "cover", "none", "scale-down"],
      url: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
      circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      squareUrl: "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
      sizeList: ["large", "medium", "small"],
      color: "#DDDDDD",
      checkbox: false,
      checkAll: false,
      checkedCities: ["上海", "北京"],
      cities: cityOptions,
      isIndeterminate: true,
      list: [],
      activecolor: "red",
      data: [],
      busy: false,
      // 日历options特定  样式
      calendarArr: {
        type: "combination", // 是否为特定的组合方式
        // 如果不是特定的组合方式   那么下方的todayBtn、checkBtn样式就会起作用 两者最好不要一起使用
        headStyle: {
          todayBtn: "left",
          combination: "center",
          checkBtn: "left",
        },
        // 文本对齐位置
        viewStyle: {
          // 视图day天数  文本对齐位置
          day: "right",
        },
      },
      load: true,
      radio: "小仙男",
      radio1: "小仙男",
      dis: true,
      checkbox: false,
      checkList: ["选中且禁用", "复选框 A"],
    };
  },
  methods: {
    showAlert() {
      this.$confirm({
        type: "danger",
        title: "标题",
        content: "我是弹窗内容",
        onOk: () => {
          this.$message("点击了确定关闭弹窗");
        },
      });
    },
    ok() {
      console.log(123);
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
    handleAdd() {
      // 这里需要保证key值唯一否则会影响渲染显示
      const newTab = { key: `tab${+new Date()}`, title: "New Tab" };
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
    next() {
      if (this.current === 3) {
        this.current = 0;
      } else {
        this.current += 1;
      }
    },
    loading(nodesc) {
      // this.$notify.config({
      //   top: 300,
      //   duration: 3,
      // });
      this.$notify.info({
        title: "标题",
        desc: "使用render函数时会忽略desc",
        duration: 0,
        render: (h) => {
          return h("span", [
            "This is created by This is created byThis is created byThis is created byThis is created by",
            h(
              "a",
              {
                style: {
                  color: "red",
                },
              },
              "render"
            ),
            " function",
          ]);
        },
      });
      // this.$notify.open({
      //   title: "Notice 标题",
      //   desc: nodesc ? "" : "这是通知内容,这是通知内容. 这是通知内容,这是通知内容.",
      // });
      this.$notify.info({
        title: "Notify 标题",
        duration: 0,
        desc: "这是通知内容,这是通知内容. 这是通知内容,这是通知内容.",
      });
      // this.$message({ type: "success", duration: 0, content: "look" });
      // this.$message("this is default message");
      // this.$message({ type: "primary", content: "primary 的提示" });
      // this.$message({ type: "success", content: "success 的提示" });
      // this.$message({ type: "warning", content: "warning 的提示" });
      // this.$message({ type: "danger", content: "danger 的提示" });
      // this.$message({ content: "我10秒消失", duration: 10 });
      // this.$message({ content: "我是可关闭的的提示", duration: 10, closable: true });
      // this.$message({ type: "success", content: "我永远不会关闭除非手动", duration: 0, closable: true, zIndex: 3000 });
      // this.$message({ type: "warning", content: "我永远不会关闭除非手动", duration: 0, closable: true, zIndex: 3000 });
      // this.$message({ type: "danger",content: "我永远不会关闭除非手动", duration: 0, closable: true, zIndex: 3000 });
      // this.$message({
      //   render: (h) => {
      //     return h("span", [
      //       "This is created by ",
      // h(
      //   "a",
      //   {
      //     style: {
      //       color: "red",
      //     },
      //   },
      //   "render"
      // ),
      //       " function",
      //     ]);
      //   },
      // });
      // this.$loading.error()
      // this.$loading.start();
      // this.$loading.config({
      //   showSpinner: false,
      // });
      // this.$loading.config({
      //   percentNum: 1,
      // });
      // this.$loading.config({
      //   easing: "ease",
      // });
      // this.$loading.config({
      //   speed: 10,
      // });
    },
    loading1() {
      let num = this.$message({ type: "success", duration: 0, content: "look" });
      setTimeout(function() {
        // num();
      }, 3000);
      // this.$loading.error()
      // this.$loading.end();
    },
    loading2() {
      // this.$loading.error()
      // this.$loading.error();
    },
    change(data) {
      console.log(data);
    },
    format(percent) {
      if (percent == 100) {
        return "^_^";
      }
      return "QAQ";
    },
    getColor(percent) {
      if (percent < 40) {
        return "#ffc069";
      } else if (percent < 60) {
        return "#fadb14";
      } else if (percent < 80) {
        return "#13c2c2";
      } else {
        return "#389e0d";
      }
    },

    hello() {
      alert("hello world!");
    },
    goBack() {
      console.log("go back");
    },
    loadMore: function() {
      this.busy = true;
      setTimeout(() => {
        for (var i = 0, j = 200; i < j; i++) {
          this.data.push({ name: count++ });
        }
        this.busy = false;
      }, 0);
    },
    setData(data) {
      this.data = data;
    },
    carouselChange(data) {
      console.log(data);
    },
    setActiveItem(e) {
      this.$refs.tbCarousel.setActiveItem("小仙男6");
    },
    prev(e) {
      this.$refs.tbCarousel.prev();
    },
    next(e) {
      this.$refs.tbCarousel.next();
    },
    yourFunction() {
      document.scrollingElement.scrollTop = 0;
    },
    errorHandler() {
      console.log("我是abc！");
      return false;
    },
    confirm() {
      console.log("成功");
    },
    cancel() {
      console.log("取消");
    },
    // 点击某一天触发的事件
    handleClickDay(day) {
      console.log(day);
    },
    // 上一个月  time 是当前年月日  日期默认为1号
    handlePrevMonth(time) {
      console.log(time);
    },
    // 下一个月  time 是当前年月日  日期默认为1号
    handleNextMonth(time) {
      console.log(time);
    },
    headleChangeColor(val) {
      console.log(val);
    },
    openPicker(event) {
      this.$refs.tbColor.openPicker();
      this.$refs.tbColor.updateValue(event);
    },
    closePicker() {
      //this.$refs.colorPicker.closePicker();
    },
    onChange(color) {
      this.color = color;
    },
    click1() {
      console.log("我点击了按钮");
    },
    close() {
      console.log("我点击了关闭");
    },
    handleCheckAllChange(val) {
      this.checkedCities = val ? cityOptions : [];
      this.isIndeterminate = false;
    },
    handleCheckedCitiesChange(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.cities.length;
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
    },
    loadm() {
      // console.log(123)
      this.load = !this.load;
      // console.log(this.load)
    },
    check(val) {
      console.log(val);
    },
    abc() {
      this.dis = !this.dis;
      console.log(this.radio);
    },
    radioChange(val) {
      console.log(val);
    },
  },
};
</script>

<style lang="less">
.tb-container,
.tb-aside,
.tb-main {
  height: 100%;
}

.tb-container,
.tb-aside,
.tb-main {
  height: 100%;
}
.item {
  margin-top: 10px;
  margin-right: 40px;
}
.demo-avatar.demo-basic .demo-basic--circle,
.demo-avatar.demo-basic .demo-basic--square {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.gotop {
  position: fixed;
  bottom: 0;
  right: 5px;
  background: red;
}
.demo {
  width: 800px;
  margin: 0 auto;
}
h1 {
  height: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  background: linear-gradient(90deg, rgba(88, 140, 236, 1), rgba(106, 106, 207, 1));
}
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

// .button {
//   padding: 0;
//   float: right;
// }

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 480px;
}
.top {
  text-align: center;
}
.center {
  width: 300px;
  margin: 10px auto;
  overflow: hidden;
  &-left {
    float: left;
    text-align: center;
  }
  &-right {
    float: right;
    text-align: center;
  }
}
.bottom {
  text-align: center;
}
</style>
