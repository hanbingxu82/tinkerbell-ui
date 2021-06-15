<!--
 * @Author: your name
 * @Date: 2021-03-16 13:46:44
 * @LastEditTime: 2021-06-15 15:53:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit'
 * @FilePath: /hx/examples/App.vue
-->
<template>
  <div id="app">
    <div flex="box:mean">
      <div class="input-item">
        <tb-input :maxlength="10" show-word-count></tb-input>
      </div>
      <div class="input-item">
        <tb-input type="textarea" :rows="2" no-resize show-word-count></tb-input>
      </div>
    </div>
    <div flex="box:mean">
      <div class="input-item">
        <tb-input type="textarea" :autosize="{ minRows: 2, maxRows: 6 }" placeholder="自动大小，可拖动，最大行数6"></tb-input>
      </div>
      <div class="input-item">
        <tb-input type="textarea" :rows="4" placeholder="禁用拖动，默认4行" no-resize></tb-input>
      </div>
    </div>
    <tb-row :gutter="10">
      <tb-col :span="6">
        <tb-input size="medium" clearable prefix="icon-text" placeholder="large input"></tb-input>
      </tb-col>
      <tb-col :span="6">
        <tb-input size="small" clearable prefix="icon-text" placeholder="small input"></tb-input>
      </tb-col>
      <tb-col :span="6">
        <tb-input size="mini" clearable prefix="icon-text" placeholder="mini input"></tb-input>
      </tb-col>
    </tb-row>

    <div style="width:200px;margin-left:10px;">
      <tb-input search placeholder="Enter something..." class="input-item"></tb-input>
      <tb-input disabled placeholder="Enter something..." class="input-item"></tb-input>
      <div style="margin-bottom: 10px;">输入的内容：{{ value }}</div>
      <tb-input style="margin-top:10px;" size="medium" v-model="value" placeholder="请输入一些文字..." class="input-item">
        <i class="iconfont icon-meh" slot="suffix"></i>
      </tb-input>
      <tb-input style="margin-top:10px;" size="small" v-model="value" placeholder="请输入一些文字..." class="input-item">
        <i class="iconfont icon-meh" slot="suffix"></i>
      </tb-input>
      <tb-input style="margin-top:10px;" size="mini" v-model="value" placeholder="请输入一些文字..." class="input-item">
        <i class="iconfont icon-meh" slot="suffix"></i>
      </tb-input>
    </div>
    <div style="width:200px;margin-left:10px;">
      <tb-input style="margin-top:10px;" v-model="value" icon="icon-modular" class="input-item"></tb-input>
      <tb-input style="margin-top:10px;" v-model="value" clearable class="input-item"></tb-input>
    </div>
    <tb-button>prepend</tb-button>
    <div style="width:200px;margin-left:10px;">
      Props：
      <tb-input prefix="icon-user" placeholder="Enter name" style="width: auto"></tb-input>
      <tb-input suffix="icon-lock" placeholder="Enter text" style="width: auto"></tb-input>
    </div>
    <div style="margin-top: 6px">
      Slots：
      <tb-input placeholder="Enter name" style="width: auto">
        <i class="iconfont icon-meh" slot="prefix"></i>
      </tb-input>
      <tb-input placeholder="Enter text" style="width: auto">
        <i class="iconfont icon-meh" slot="suffix"></i>
      </tb-input>
    </div>
    <div style="margin-top: 6px">
      prepend/append：
      <tb-input placeholder="Enter text" style="width: auto">
        <template slot="prepend">
          <tb-button>prepend</tb-button>
        </template>
      </tb-input>
      &nbsp;
      <tb-input placeholder="Enter name" style="width: auto">
        <template slot="append">
          <tb-button>append</tb-button>
        </template>
      </tb-input>
    </div>
  </div>
</template>
<script>
let count = 1;
export default {
  data() {
    return {
      value: "",
    };
  },
  methods: {},
};
</script>

<style lang="less">
[flex] {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}
</style>
