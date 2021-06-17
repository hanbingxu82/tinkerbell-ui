<!--
 * @Author: your name
 * @Date: 2021-03-16 13:46:44
 * @LastEditTime: 2021-06-17 13:09:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit'
 * @FilePath: /hx/examples/App.vue
-->
<template>
  <div id="app">
    <div flex="box:mean">
      <tb-select style="width:200px" filterable>
        <tb-option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</tb-option>
      </tb-select>
      <tb-select style="width:300px;margin-left: 20px;" v-model="cites" filterable multiple>
        <tb-option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</tb-option>
      </tb-select>
      <!-- <tb-select prefix="icon-telephone">
        <tb-option value="beijing" label="北京"></tb-option>
        <tb-option value="shanghai" label="上海"></tb-option>
        <tb-option value="xuzhou" label="徐州"></tb-option>
        <tb-option value="nanjing" label="南京"></tb-option>
      </tb-select> -->
      <!-- <tb-select style="width:200px" v-model="cites" multiple>
        <tb-option value="beijing" label="北京"></tb-option>
        <tb-option value="shanghai" label="上海"></tb-option>
        <tb-option value="xuzhou" label="徐州"></tb-option>
        <tb-option value="nanjing" label="南京"></tb-option>
      </tb-select>
      <tb-select style="width:300px;margin-left: 20px;" v-model="cites" multiple :max-tag-count="1">
        <tb-option value="beijing" label="北京"></tb-option>
        <tb-option value="shanghai" label="上海"></tb-option>
        <tb-option value="xuzhou" label="徐州"></tb-option>
        <tb-option value="nanjing" label="南京"></tb-option>
      </tb-select>
      <tb-select style="width:300px;margin-left: 20px;" v-model="cites" multiple :max-tag-count="2" :max-tag-placeholder="maxTagPlaceholder">
        <tb-option value="beijing" label="北京"></tb-option>
        <tb-option value="shanghai" label="上海"></tb-option>
        <tb-option value="xuzhou" label="徐州"></tb-option>
        <tb-option value="nanjing" label="南京"></tb-option>
      </tb-select> -->
    </div>
    <div class="mt-5">{{ cites }}</div>

    <br />
    <br />
    <br />
    <div flex="box:mean">
      <tb-select style="width:200px" v-model="select">
        <tb-option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</tb-option>
      </tb-select>
    </div>
    <div flex="box:mean">
      <tb-select style="width:200px" v-model="select" clearable>
        <tb-option value="beijing" label="北京"></tb-option>
        <tb-option value="shanghai" label="上海"></tb-option>
        <tb-option value="xuzhou" label="徐州"></tb-option>
      </tb-select>
      <tb-select style="width:200px;margin-left: 20px;" v-model="select">
        <tb-option-group label="直辖市">
          <tb-option value="beijing" label="北京"></tb-option>
          <tb-option value="shanghai" label="上海"></tb-option>
        </tb-option-group>
        <tb-option-group label="热门城市">
          <tb-option value="xuzhou" label="徐州"></tb-option>
          <tb-option value="nanjing" label="南京"></tb-option>
        </tb-option-group>
      </tb-select>
      <tb-select style="width:200px;margin-left: 20px;" v-model="select">
        <tb-option value="beijing" label="北京">
          <span>北京</span>
          <span style="float:right;color:#ccc">beijing</span>
        </tb-option>
        <tb-option value="shanghai" label="上海">
          <span>上海</span>
          <span style="float:right;color:#ccc">shanghai</span>
        </tb-option>
        <tb-option value="xuzhou" label="徐州">
          <span>徐州</span>
          <span style="float:right;color:#ccc">xuzhou</span>
        </tb-option>
      </tb-select>
      &nbsp;&nbsp;
      <span>{{ select }}</span>
    </div>
    <!-- <div flex="box:mean">
      <tb-select style="width:100px" v-model="select" size="mini" clearable>
        <tb-option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</tb-option>
      </tb-select>
      <tb-select style="width:100px;margin-left: 20px;" v-model="select" size="small" clearable>
        <tb-option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</tb-option>
      </tb-select>

      <tb-select style="width:100px;margin-left: 20px;" v-model="select" size="medium" clearable>
        <tb-option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</tb-option>
      </tb-select>
    </div> -->
    <div flex="box:mean">
      <tb-select style="width:200px" disabled>
        <tb-option value="beijing" label="北京"></tb-option>
        <tb-option value="shanghai" label="上海"></tb-option>
        <tb-option value="xuzhou" label="徐州"></tb-option>
      </tb-select>
      <tb-select style="width:200px;margin-left: 20px;">
        <tb-option value="beijing" label="北京"></tb-option>
        <tb-option value="shanghai" label="上海" disabled></tb-option>
        <tb-option value="xuzhou" label="徐州"></tb-option>
      </tb-select>
    </div>
    <br />
    <br />
    <br />
    <br />

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
      cites: [],
      value: "",
      cityList: [
        {
          value: "New York",
          label: "New York",
        },
        {
          value: "London",
          label: "London",
        },
        {
          value: "Sydney",
          label: "Sydney",
        },
        {
          value: "Ottawa",
          label: "Ottawa",
        },
        {
          value: "Paris",
          label: "Paris",
        },
        {
          value: "Canberra",
          label: "Canberra",
        },
      ],
      select: "",
    };
  },
  created() {
    console.log(this.select);
  },
  methods: {
    maxTagPlaceholder(num) {
      return "more " + num;
    },
  },
  watch: {
    select(value) {},
  },
};
</script>

<style lang="less">
[flex] {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}
</style>
