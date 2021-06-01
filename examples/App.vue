<!--
 * @Author: your name
 * @Date: 2021-03-16 13:46:44
 * @LastEditTime: 2021-06-01 13:30:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit'
 * @FilePath: /hx/examples/App.vue
-->
<template>
  <div id="app">
    <tb-upload paste :format="['xlsx']" action="//jsonplaceholder.typicode.com/posts/" type="drag">
      <!-- <tb-button icon="ios-cloud-upload" plain type="primary"> 点击上传</tb-button> -->
      <!-- <input type="text" /> -->
      <p slot="tip">单个文件不能超过2M</p>
    </tb-upload>

    <!-- <tb-steps :current="current" status="wait">
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
    <tb-switch @change="change" v-model="value" checked-text="开" unchecked-text="关" />
    <tb-button @click="loading">开</tb-button>
    <tb-button @click="loading1">关</tb-button>
    <tb-button @click="loading2">错误</tb-button>
    <tb-timeline>
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
    </tb-timeline>
  </div>
</template>
<script>
let count = 1;
export default {
  data() {
    return {
      percent: 10,
      ifUp: true,
      yourVModel: 0,
      value: false,
      current: 0,
    };
  },
  created() {
    const timer = setInterval(() => {
      if (this.ifUp) {
        this.percent = this.percent + 10;
        this.percent == 100 ? (this.ifUp = false) : (this.ifUp = true);
      } else {
        this.percent = this.percent - 10;
        this.percent == 10 ? (this.ifUp = true) : (this.ifUp = false);
      }
    }, 1000);
    this.$once("hook:beforeDestroy", () => clearInterval(timer));
  },
  methods: {
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
        debugger;
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
  },
};
</script>

<style lang="less"></style>
