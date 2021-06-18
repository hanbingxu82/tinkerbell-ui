<!--
 * @Author: your name
 * @Date: 2021-03-16 13:46:44
 * @LastEditTime: 2021-06-18 17:04:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit'
 * @FilePath: /hx/examples/App.vue
-->
<template>
  <div id="app">
    <tb-form :model="formValidate2" ref="form2" :label-width="80">
      <tb-form-item label="用户名" prop="name" :rules="{ required: true, message: '用户名不能为空', trigger: 'blur' }">
        <tb-input v-model="formValidate2.name"></tb-input>
      </tb-form-item>
      <tb-form-item label="邮箱" prop="mail">
        <tb-input v-model="formValidate2.mail"></tb-input>
      </tb-form-item>
    </tb-form>

    <div style="width:600px;" flex="box:mean">
      <tb-form :model="formValidate" ref="form" :rules="ruleValidate" :label-width="100">
        <tb-form-item label="用户名" prop="name">
          <tb-input v-model="formValidate.name"></tb-input>
        </tb-form-item>
        <tb-form-item label="邮箱" prop="mail">
          <tb-input v-model="formValidate.mail"></tb-input>
        </tb-form-item>
        <tb-form-item label="年龄" prop="age">
          <tb-input-number style="width:200px" v-model="formValidate.age"></tb-input-number>
        </tb-form-item>

        <tb-form-item label="性别" prop="gender">
          <tb-radio-group v-model="formValidate.gender">
            <tb-radio label="male">男</tb-radio>
            <tb-radio label="female">女</tb-radio>
          </tb-radio-group>
        </tb-form-item>
        <div flex="box:mean">
          <div>
            <tb-form-item label="出生日期" prop="birthday">
              <tb-date-picker type="date" v-model="formValidate.birthday" placeholder="选择出生日期"></tb-date-picker>
            </tb-form-item>
          </div>
          <div>
            <tb-form-item label="时间" prop="time">
              <tb-time-picker v-model="formValidate.time" placeholder="选择时间"></tb-time-picker>
            </tb-form-item>
          </div>
        </div>
        <div flex="box:mean">
          <tb-form-item label="城市" prop="city">
            <tb-select v-model="formValidate.city" clearable>
              <tb-option value="beijing" label="北京"></tb-option>
              <tb-option value="shanghai" label="上海"></tb-option>
              <tb-option value="xuzhou" label="徐州"></tb-option>
            </tb-select>
          </tb-form-item>
          <tb-form-item label="地区" prop="cities">
            <tb-cascader :data="cities" v-model="formValidate.cities"></tb-cascader>
          </tb-form-item>
        </div>
        <tb-form-item label="爱好" prop="interest">
          <tb-checkbox-group v-model="formValidate.interest">
            <tb-checkbox label="Eat"></tb-checkbox>
            <tb-checkbox label="Sleep"></tb-checkbox>
            <tb-checkbox label="Run"></tb-checkbox>
            <tb-checkbox label="Movie"></tb-checkbox>
          </tb-checkbox-group>
        </tb-form-item>
        <tb-form-item label="描述" prop="desc">
          <tb-input v-model="formValidate.desc" type="textarea" :autosize="{ minRows: 2, maxRows: 5 }" placeholder="Enter something..."></tb-input>
        </tb-form-item>
        <tb-form-item>
          <tb-button @click="handleSubmit" type="primary">提 交</tb-button>
          <tb-button @click="handleReset">重 置</tb-button>
        </tb-form-item>
      </tb-form>
    </div>

    <!-- <div style="width:600px;"> -->
    <!-- <tb-form :model="formInline" ref="form" :rules="ruleValidate" inline>
        <tb-form-item prop="name">
          <tb-input size="mini" v-model="formInline.name" placeholder="用户名"></tb-input>
        </tb-form-item>
        <tb-form-item prop="mail">
          <tb-input size="mini" v-model="formInline.mail" placeholder="邮箱"></tb-input>
        </tb-form-item>
      </tb-form> -->
    <!-- <div class="mb-10">
        表头对其方式：
        <tb-radio-group v-model="type" style="display: inline-block;">
          <tb-radio label="top">top</tb-radio>
          <tb-radio label="left">left</tb-radio>
          <tb-radio label="right">right</tb-radio>
        </tb-radio-group>
      </div>
      <div class="mtb-10">
        表单尺寸：
        <tb-radio-group v-model="size" style="display: inline-block;">
          <tb-radio label="medium">medium</tb-radio>
          <tb-radio label="small">small</tb-radio>
          <tb-radio label="mini">mini</tb-radio>
        </tb-radio-group>
      </div>
      <tb-form :model="formInline" ref="form" :label-position="type" :label-width="labelWidth" :size="size">
        <tb-form-item label="用户名" prop="name">
          <tb-input v-model="formInline.name" placeholder="用户名" :size="size"></tb-input>
        </tb-form-item>
        <tb-form-item label="邮箱" prop="mail">
          <tb-input v-model="formInline.mail" placeholder="邮箱" :size="size"></tb-input>
        </tb-form-item>
      </tb-form>
    </div> -->

    <!-- <tb-menu  :theme="theme1" active-name="1" accordion> 
      <tb-menu-item name="1"><i class="iconfont icon-warning-filling"></i> 首页</tb-menu-item>
      <tb-submenu name="2">
        <template slot="title"><i class="iconfont icon-warning-filling"></i> 我的工作台</template>
        <tb-menu-item name="2-1"><i class="iconfont icon-warning-filling"></i> 选项1</tb-menu-item>
        <tb-submenu name="2-2">
          <template slot="title"><i class="iconfont icon-warning-filling"></i> 选项2 </template>
          <tb-menu-item name="2-2-1"><i class="iconfont icon-warning-filling"></i> 选项2-2-1</tb-menu-item>
          <tb-menu-item name="2-2-2"><i class="iconfont icon-warning-filling"></i> 选项2-2-2</tb-menu-item>
        </tb-submenu>
        <tb-menu-item name="2-3"><i class="iconfont icon-warning-filling"></i> 选项3</tb-menu-item>
      </tb-submenu>
      <tb-submenu name="3">
        <template slot="title"><i class="iconfont icon-warning-filling"></i> 统计分析</template>
        <tb-menu-group title="使用">
          <tb-menu-item name="3-1">新增和启动</tb-menu-item>
          <tb-menu-item name="3-2">活跃分析</tb-menu-item>
          <tb-menu-item name="3-3">时段分析</tb-menu-item>
        </tb-menu-group>
      </tb-submenu>
      <tb-menu-item name="4"> <i class="iconfont icon-warning-filling"></i> 系统设置</tb-menu-item>
    </tb-menu>
    <br />
    <tb-radio-group v-model="theme1">
      <tb-radio label="light">light</tb-radio>
      <tb-radio label="dark">dark</tb-radio>
    </tb-radio-group> -->
    <!-- <tb-menu active-name="1" accordion>
      <tb-menu-item name="1">首页</tb-menu-item>
      <tb-menu-item name="2" to="https://baidu.com" target="_blank"> 百度 </tb-menu-item>
      <tb-menu-item name="3" to="https://baidu.com" target="_blank"> 百度 </tb-menu-item>
    </tb-menu> -->
  </div>
</template>
<script>
let count = 1;
export default {
  data() {
    const descValidate = (rule, value, callback) => {
      if (value.length > 10 || value.length === 0) {
        callback();
      } else {
        callback(new Error("描述必须大于10个字"));
      }
    };
    return {
      // theme1: "light",
      // theme2: "light",
      // isCollapse: true,
      // formInline: {
      //   name: "",
      //   mail: "",
      // },
      // type: "top",
      // size: "small",

      // ruleValidate: {
      //   name: [{ required: true, message: "用户名不能为空", trigger: "blur" }],
      //   mail: [
      //     { required: true, message: "邮箱不能为空", trigger: "blur" },
      //     { type: "email", message: "邮箱格式不正确", trigger: "blur" },
      //   ],
      // },
      formValidate: {
        name: "",
        mail: "",
        age: 0,
        jindu: 30,
        gender: "",
        birthday: "",
        time: "",
        city: "",
        cities: [],
        interest: ["Movie", "Sleep"],
        desc: "",
      },
      cities: [
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
      formValidate2: {
        name: "",
        mail: "",
      },
      ruleValidate: {
        name: [{ required: true, message: "用户名不能为空", trigger: "blur" }],
        mail: [
          { required: true, message: "邮箱不能为空", trigger: "blur" },
          { type: "email", message: "邮箱格式不正确", trigger: "blur" },
        ],
        age: [
          { required: true, type: "number", message: "年龄必填", trigger: "change" },
          { min: 18, max: 35, type: "number", message: "年龄必须满18周岁，不大于35岁", trigger: "change" },
        ],
        jindu: [{ min: 40, type: "number", message: "进度范围不能低于40%", trigger: "change" }],
        gender: [{ required: true, message: "请选择性别", trigger: "change" }],
        birthday: [{ required: true, type: "date", message: "请选择出生日期", trigger: "change" }],
        time: [{ required: true, type: "string", message: "选择时间", trigger: "change" }],
        city: [{ required: true, message: "请选择城市", trigger: "change" }],
        cities: [{ required: true, type: "array", message: "请选择所在地区", trigger: "change" }],
        interest: [
          { required: true, type: "array", min: 1, message: "请选择爱好", trigger: "change" },
          { type: "array", max: 2, message: "最多选择两个爱好", trigger: "change" },
        ],
        desc: [{ validator: descValidate, trigger: "blur" }],
      },
    };
  },
  created() {},
  methods: {
    handleSubmit() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.$message({ type: "success", content: "表单校验成功" });
        } else {
          this.$message({ type: "danger", content: "表单校验失败" });
        }
      });
    },
    handleReset() {
      this.$refs.form.resetFields();
    },
  },
  computed: {
    labelWidth() {
      return this.type === "top" ? null : 80;
    },
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
