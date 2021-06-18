<!--
 * @Author: your name
 * @Date: 2021-03-16 13:46:44
 * @LastEditTime: 2021-06-18 13:51:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit'
 * @FilePath: /hx/examples/App.vue
-->
<template>
  <div id="app">
    <div flex="box:mean" style="width: 500px;">
      <!-- <div style="width:240px;">
        <tb-cascader :data="data" :render-format="format"></tb-cascader>
      </div> -->
      <!-- <div style="width:120px;">
        <tb-cascader :data="data" size="mini"></tb-cascader>
      </div>
      <div style="width:120px;margin-left: 5px;">
        <tb-cascader :data="data" size="small"></tb-cascader>
      </div>
      <div style="width:120px;margin-left: 5px;">
        <tb-cascader :data="data" size="medium"></tb-cascader>
      </div> -->
      <!-- <tb-cascader :data="data4" :load-data="loadData"></tb-cascader> -->
        <tb-cascader :data="data" filterable></tb-cascader>
      <!-- <tb-cascader :data="data" v-model="value1" trigger="hover"></tb-cascader>
      <div>{{ text }}</div>
      <div style="width:240px;">
        <tb-cascader :data="data" @change="handleChange">
          <a href="javascript:void(0)">选择</a>
        </tb-cascader>
      </div> -->
      <!-- <div style="width:240px;">
        <tb-cascader :data="data" v-model="value1" disabled></tb-cascader>
      </div>
      <div style="width:240px;">
        <tb-cascader :data="data2" v-model="value1"></tb-cascader>
      </div> -->
      <!-- <div style="width:240px;">
        <tb-cascader :data="data" change-on-select></tb-cascader>
      </div> -->
      <!-- 时间选择器 -->
      <!-- <div style="padding:0 10px;">
        <tb-time-picker type="time" placeholder="Select time"></tb-time-picker>
      </div>
      <div style="padding:0 10px;">
        <tb-time-picker type="timerange" placement="bottom-start" placeholder="Select time"></tb-time-picker>
      </div>
      <div style="padding:0 10px;">
        <tb-time-picker type="time" value="09:41:00" format="HH点mm分ss秒" placeholder="Select time"></tb-time-picker>
      </div>
      <div style="padding:0 10px;">
        <tb-time-picker type="timerange" :value="['09:41:00', '12:00:00']" format="HH’mm’ss" placement="bottom-start" placeholder="Select time"></tb-time-picker>
      </div> -->
      <!-- <div style="padding:0 10px;">
        <tb-time-picker type="time" format="HH:mm" placeholder="Select time"></tb-time-picker>
      </div>
      <div style="padding:0 10px;">
        <tb-time-picker type="timerange" format="HH:mm" placement="bottom-start" placeholder="Select time"></tb-time-picker>
      </div>
      <div style="padding:0 10px; width: 168px;">
        <tb-time-picker type="time" :steps="[1, 15, 15]" placeholder="Select time"></tb-time-picker>
      </div> -->
      <!-- <div style="padding:0 10px;">
        <tb-time-picker type="time" :disabled-hours="[1, 5, 10]" :disabled-minutes="[0, 10, 20]" placeholder="Select time"></tb-time-picker>
      </div>
      <div style="padding:0 10px;">
        <tb-time-picker type="timerange" hide-disabled-options :disabled-hours="[1, 5, 10]" :disabled-minutes="[0, 10, 20]" placement="bottom-start" placeholder="Select time"></tb-time-picker>
      </div> -->
      <!-- <div style="padding:0 10px;">
        <tb-time-picker type="time" confirm placeholder="Select time"></tb-time-picker>
      </div>
      <div style="padding:0 10px;">
        <tb-time-picker type="timerange" confirm placement="bottom-start" placeholder="Select time"></tb-time-picker>
      </div> -->
      <!-- <tb-time-picker :open="open" :value="value3" confirm @change="handleChange" @clear="handleClear" @ok="handleOk">
        <a href="javascript:void(0)" @click="handleClick">
          <template v-if="value3 == ''">Select time</template>
          <template v-else>{{ value3 }}</template>
        </a>
      </tb-time-picker> -->
      <!-- <div style="padding:0 10px;">
        <tb-time-picker size="mini" placeholder="mini date"></tb-time-picker>
      </div>
      <div style="padding:0 10px;">
        <tb-time-picker size="small" placeholder="small date"></tb-time-picker>
      </div>

      <div style="padding:0 10px;">
        <tb-time-picker size="medium" placeholder="medium date"></tb-time-picker>
      </div> -->
      <!-- 日期选择器 -->
      <!-- <div style="padding:0 10px;">
        <tb-date-picker type="date" placeholder="Select date"></tb-date-picker>
      </div>
      <div style="padding:0 10px;">
        <tb-date-picker type="daterange" placement="bottom-start" placeholder="Select date"></tb-date-picker>
      </div> -->
      <!-- <div style="padding:0 10px;">
        <tb-date-picker type="date" placeholder="Select date" :options="options1"></tb-date-picker>
      </div>
      <div style="padding:0 10px;">
        <tb-date-picker type="daterange" placement="bottom-start" placeholder="Select date" :options="options2"></tb-date-picker>
      </div> -->
      <!-- <div style="padding:0 10px;">
        <tb-date-picker type="daterange" split-panels placeholder="Select date"></tb-date-picker>
      </div>
      <div style="padding:0 10px;">
        <tb-date-picker type="date" multiple placeholder="Select date"></tb-date-picker>
      </div> -->
      <!-- <div style="padding:0 10px;">
        <tb-date-picker type="date" show-week-numbers placeholder="Select date"></tb-date-picker>
      </div>
      <div style="padding:0 10px;">
        <tb-date-picker type="daterange" show-week-numbers placeholder="Select date"></tb-date-picker>
      </div> -->
      <!-- <div style="padding:0 10px;">
        <tb-date-picker type="date" :start-date="new Date(2000, 8 - 1, 2)" placeholder="Select date"></tb-date-picker>
      </div>
      <div style="padding:0 10px;">
        <tb-date-picker type="daterange" :start-date="new Date(2000, 8 - 1, 2)" placeholder="Select date"></tb-date-picker>
      </div>
      <div style="padding:0 10px;">
        <tb-date-picker type="year" placeholder="Select year"></tb-date-picker>
      </div>
      <div style="padding:0 10px;">
        <tb-date-picker type="month" placeholder="Select year"></tb-date-picker>
      </div> -->
      <!-- <div style="padding:0 10px;">
        <tb-date-picker type="date" value="2016-01-01" format="yyyy年MM月dd日" placeholder="Select date"></tb-date-picker>
      </div>
      <div style="padding:0 10px;">
        <tb-date-picker type="daterange" :value="['2016-01-01', '2016-02-15']" format="yyyy/MM/dd" placeholder="Select date"></tb-date-picker>
      </div> -->
      <!-- <div style="padding:0 10px;">
        <tb-date-picker type="date" :options="options3" placeholder="Select date"></tb-date-picker>
      </div>
      <div style="padding:0 10px;">
        <tb-date-picker type="date" :options="options4" placeholder="Select date"></tb-date-picker>
      </div> -->
      <!-- <div style="padding:0 10px;">
        <tb-date-picker type="date" confirm placeholder="Select date"></tb-date-picker>
      </div>
      <div style="padding:0 10px;">
        <tb-date-picker type="daterange" confirm placeholder="Select date"></tb-date-picker>
      </div> -->
      <!-- <tb-date-picker :open="open" :value="value3" confirm type="date" @change="handleChange" @clear="handleClear" @ok="handleOk">
        <a href="javascript:void(0)" @click="handleClick">
          <template v-if="value3 == ''">Select date</template>
          <template v-else>{{ value3 }}</template>
        </a>
      </tb-date-picker> -->
      <!-- <div style="padding:0 10px;">
        <tb-date-picker size="mini" type="date" placeholder="Select date"></tb-date-picker>
      </div>
      <div style="padding:0 10px;">
        <tb-date-picker size="small" type="date" placeholder="Select date"></tb-date-picker>
      </div>
      <div style="padding:0 10px;">
        <tb-date-picker size="medium" type="date" placeholder="Select date"></tb-date-picker>
      </div> -->
      <!-- <tb-date-picker type="datetime" placeholder="选择日期时间" style="padding-right: 20px;"></tb-date-picker>
      <tb-date-picker type="datetime" format="yyyy-MM-dd HH:mm" placeholder="选择日期时间(忽略秒)" style="padding-right: 20px;"></tb-date-picker>
      <tb-date-picker type="datetimerange" placeholder="选择日期时间" style="padding-right: 20px;"></tb-date-picker>
      <tb-date-picker type="datetimerange" format="yyyy-MM-dd HH:mm" placeholder="选择日期时间(忽略秒)"></tb-date-picker> -->
      <!-- <tb-date-picker type="datetime" placeholder="选择日期时间" style="padding-right: 20px;"></tb-date-picker>
      <tb-date-picker type="datetime" format="yyyy-MM-dd HH:mm" placeholder="选择日期时间(忽略秒)" style="padding-right: 20px;"></tb-date-picker> -->
      <!-- <tb-date-picker type="datetimerange" placeholder="选择日期时间" style="padding-right: 20px;"></tb-date-picker>
      <tb-date-picker type="datetimerange" format="yyyy-MM-dd HH:mm" placeholder="选择日期时间(忽略秒)"></tb-date-picker> -->
    </div>

    <div flex="box:mean">
      <!-- <tb-select style="width:200px" filterable>
        <tb-option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</tb-option>
      </tb-select>
      <tb-select style="width:300px;margin-left: 20px;" v-model="cites" filterable multiple>
        <tb-option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</tb-option>
      </tb-select> -->
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
      text: "未选择",
      value1: ["xuzhou", "tongshan"],
      data: [
        {
          value: "nanjing",
          label: "南京",
          children: [
            {
              value: "xuanwu",
              label: "玄武区",
            },
            {
              value: "gulou",
              label: "鼓楼区",
            },
            {
              value: "jianye",
              label: "建邺区",
            },
          ],
        },
        {
          value: "xuzhou",
          label: "徐州",
          children: [
            {
              value: "tongshan",
              label: "铜山区",
            },
            {
              value: "gulou",
              label: "鼓楼区",
            },
            {
              value: "yunlong",
              label: "云龙区",
            },
            {
              value: "jiawang",
              label: "贾汪区",
            },
          ],
        },
      ],
      cites: [],
      data4: [
        {
          value: "nanjing",
          label: "南京",
          children: [],
          loading: false,
        },
        {
          value: "xuzhou",
          label: "徐州",
          children: [],
          loading: false,
        },
      ],
      value: "",
      open: false,
      value3: "",
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
      data2: [
        {
          value: "nanjing",
          label: "南京",
          disabled: true,
          children: [
            {
              value: "xuanwu",
              label: "玄武区",
            },
            {
              value: "gulou",
              label: "鼓楼区",
            },
            {
              value: "jianye",
              label: "建邺区",
            },
          ],
        },
        {
          value: "xuzhou",
          label: "徐州",
          children: [
            {
              value: "tongshan",
              label: "铜山区",
            },
            {
              value: "gulou",
              label: "鼓楼区",
            },
            {
              value: "yunlong",
              label: "云龙区",
            },
            {
              value: "jiawang",
              label: "贾汪区",
            },
          ],
        },
      ],
      select: "",
      options3: {
        disabledDate(date) {
          return date && date.valueOf() < Date.now() - 86400000;
        },
      },
      options4: {
        disabledDate(date) {
          const disabledDay = date.getDate();
          return disabledDay === 15;
        },
      },
      options1: {
        shortcuts: [
          {
            text: "今天",
            value() {
              return new Date();
            },
            onClick: (picker) => {
              this.$message("Click today");
            },
          },
          {
            text: "昨天",
            value() {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              return date;
            },
            onClick: (picker) => {
              this.$message("Click yesterday");
            },
          },
          {
            text: "一周",
            value() {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              return date;
            },
            onClick: (picker) => {
              this.$message("Click a week ago");
            },
          },
        ],
      },

      options2: {
        shortcuts: [
          {
            text: "近一周",
            value() {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              return [start, end];
            },
          },
          {
            text: "最近一个月",
            value() {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              return [start, end];
            },
          },
          {
            text: "最近三个月",
            value() {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              return [start, end];
            },
          },
        ],
      },
    };
  },
  created() {
    console.log(this.select);
  },
  methods: {
    loadData(item, callback) {
      item.loading = true;
      setTimeout(() => {
        if (item.value === "nanjing") {
          item.children = [
            {
              value: "xuanwu",
              label: "玄武区",
            },
            {
              value: "gulou",
              label: "鼓楼区",
            },
            {
              value: "jianye",
              label: "建邺区",
            },
          ];
        } else if (item.value === "xuzhou") {
          item.children = [
            {
              value: "tongshan",
              label: "铜山区",
            },
            {
              value: "gulou",
              label: "鼓楼区",
            },
            {
              value: "yunlong",
              label: "云龙区",
            },
            {
              value: "jiawang",
              label: "贾汪区",
            },
          ];
        }
        item.loading = false;
        callback();
      }, 1000);
    },
    format(labels, selectedData) {
      const index = labels.length - 1;
      const data = selectedData[index] || false;
      if (data && data.value) {
        return labels[index] + " - " + data.value;
      }
      return labels[index];
    },
    handleChange(value, selectedData) {
      this.text = selectedData.map((o) => o.label).join(", ");
    },
    // maxTagPlaceholder(num) {
    //   return "more " + num;
    // },
    // handleClick() {
    //   this.open = !this.open;
    // },
    // handleChange(date) {
    //   this.value3 = date;
    // },
    // handleClear() {
    //   this.open = false;
    // },
    // handleOk() {
    //   this.open = false;
    // },
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
