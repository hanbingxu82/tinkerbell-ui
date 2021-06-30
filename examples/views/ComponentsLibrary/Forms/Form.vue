<!--
 * @Author: your name
 * @Date: 2021-06-29 15:36:31
 * @LastEditTime: 2021-06-30 12:39:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/examples/views/ComponentsLibrary/Forms/Form.vue
-->

<template>
  <div>
    <h2
      id="link-an-niu"
      style='box-sizing: border-box; margin: 0px; padding: 10px 0px; font-size: 28px; font-weight: 400; color: rgb(31, 47, 61); border-bottom: 1px solid rgb(197, 217, 232); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#link-an-niu" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;Form 表单
    </h2>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      具有校验和提交功能的表单
    </p>
    <h3
      id="hang-nei-biao-dan"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#hang-nei-biao-dan" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;行内表单
    </h3>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      行内表单用法。
    </p>
    <p>
      <br />
    </p>
    <Demo>
      <div slot="source">
        <div style="width:600px;">
          <tb-form :model="formInline" ref="form" :rules="ruleValidate" inline>
            <tb-form-item prop="name">
              <tb-input v-model="formInline.name" placeholder="用户名"></tb-input>
            </tb-form-item>
            <tb-form-item prop="mail">
              <tb-input v-model="formInline.mail" placeholder="邮箱"></tb-input>
            </tb-form-item>
          </tb-form>
        </div>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html1">
        </code>
      </pre>
    </Demo>
    <h3
      id="dui-qi-fang-shi"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#dui-qi-fang-shi" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;表单头对齐方式
    </h3>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      设置 label-position 可以设置表单头的对齐方式 可选top left right，并可设置label-width宽度
    </p>
    <p>
      <br />
    </p>

    <Demo>
      <div slot="source">
        <div style="width:500px;">
          <div class="mb-10">
            表头对其方式：
            <tb-radio-group v-model="type" style="display: inline-block;">
              <tb-radio label="top">top</tb-radio>
              <tb-radio label="left">left</tb-radio>
              <tb-radio label="right">right</tb-radio>
            </tb-radio-group>
          </div>
          <div class="mb-10">
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
        </div>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html2">
        </code>
      </pre>
    </Demo>
    <h3
      id="ji-ben-jiao-yan"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#ji-ben-jiao-yan" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;基本校验
    </h3>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      表单的基本校验
    </p>
    <p>
      <br />
    </p>

    <Demo>
      <div slot="source">
        <div style="width:600px;">
          <tb-form :model="formValidate" ref="form" :rules="ruleValidate1" :label-width="100">
            <tb-form-item label="用户名" prop="name">
              <tb-input v-model="formValidate.name"></tb-input>
            </tb-form-item>
            <tb-form-item label="邮箱" prop="mail">
              <tb-input v-model="formValidate.mail"></tb-input>
            </tb-form-item>
            <tb-form-item style="width:300px;" label="年龄" prop="age">
              <tb-input-number v-model="formValidate.age"></tb-input-number>
            </tb-form-item>
            <!-- <tb-form-item label="进度" prop="jindu">
              <tb-slider v-model="formValidate.jindu"></tb-slider>
            </tb-form-item> -->
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
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html3">
        </code>
      </pre>
    </Demo>

    <h3
      id="dan-ge-jiao-yan"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#dan-ge-jiao-yan" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;单个元素的校验
    </h3>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      rules对单个表单项进行校验
    </p>
    <p>
      <br />
    </p>
    <Demo>
      <div slot="source">
        <div style="width:400px;">
          <tb-form :model="formValidate2" ref="form2" :label-width="80">
            <tb-form-item label="用户名" prop="name" :rules="{ required: true, message: '用户名不能为空', trigger: 'blur' }">
              <tb-input v-model="formValidate2.name"></tb-input>
            </tb-form-item>
            <tb-form-item label="邮箱" prop="mail">
              <tb-input v-model="formValidate2.mail"></tb-input>
            </tb-form-item>
          </tb-form>
        </div>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html4">
        </code>
      </pre>
    </Demo>
    <h3
      id="rowForm"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#rowForm" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;Form props
    </h3>
    <p>
      <br />
    </p>
    <tb-table-eazy :rows="rowForm" :cols="col"></tb-table-eazy>
    <h3
      id="rowFormMethod"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#rowFormMethod" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;Form methods
    </h3>
    <p>
      <br />
    </p>
    <tb-table-eazy :rows="rowFormMethod" :cols="colEvent"></tb-table-eazy>
    <h3
      id="rowFormItem"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#rowFormItem" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;FormItem props
    </h3>
    <p>
      <br />
    </p>
    <tb-table-eazy :rows="rowFormItem" :cols="col"></tb-table-eazy>
    <RightSmallNav :rightTitle="rightTitle" @goMeowPoint="goMeowPoint" />
  </div>
</template>

<script>
import useScroll from "../../../utils/mixins";
import RightSmallNav from "../../../components/RightSmallNav.vue";
export default {
  name: "Form",
  components: { RightSmallNav },
  computed: {
    labelWidth() {
      return this.type === "top" ? null : 80;
    },
  },
  data() {
    const descValidate = (rule, value, callback) => {
      if (value.length > 10 || value.length === 0) {
        callback();
      } else {
        callback(new Error("描述必须大于10个字"));
      }
    };
    return {
      type: "top",
      size: "small",
      formInline: {
        name: "",
        mail: "",
      },
      ruleValidate: {
        name: [{ required: true, message: "用户名不能为空", trigger: "blur" }],
        mail: [
          { required: true, message: "邮箱不能为空", trigger: "blur" },
          { type: "email", message: "邮箱格式不正确", trigger: "blur" },
        ],
      },
      formValidate2: {
        name: "",
        mail: "",
      },
      formValidate: {
        name: "",
        mail: "",
        age: 0,
        // jindu: 30,
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
      ruleValidate1: {
        name: [{ required: true, message: "用户名不能为空", trigger: "blur" }],
        mail: [
          { required: true, message: "邮箱不能为空", trigger: "blur" },
          { type: "email", message: "邮箱格式不正确", trigger: "blur" },
        ],
        age: [
          { required: true, type: "number", message: "年龄必填", trigger: "change" },
          { min: 18, max: 35, type: "number", message: "年龄必须满18周岁，不大于35岁", trigger: "change" },
        ],
        // jindu: [{ min: 40, type: "number", message: "进度范围不能低于40%", trigger: "change" }],
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
      rowForm: [
        {
          Parameters: "model",
          Explain: "表单数据对象",
          Types: "Object",
          Optional: "-",
          Default: "-",
        },

        {
          Parameters: "rules",
          Explain: "表单验证规则，具体配置查看 async-validator",
          Types: "Object",
          Optional: "-",
          Default: "-",
        },
        {
          Parameters: "inline",
          Explain: "是否开启行内表单模式",
          Types: "Boolean",
          Optional: "-",
          Default: "false",
        },
        {
          Parameters: "label-position",
          Explain: "表单域标签的位置",
          Types: "string",
          Optional: "left、right、top",
          Default: "right",
        },
        {
          Parameters: "label-width",
          Explain: "表单域标签的宽度",
          Types: "Number",
          Optional: "-",
          Default: "-",
        },
        {
          Parameters: "show-message",
          Explain: "是否显示校验错误信息",
          Types: "Boolean",
          Optional: "-",
          Default: "false",
        },
      ],
      rowFormMethod: [
        {
          Parameters: "validate",
          Explain: "对整个表单进行校验",
          Callback: "callback",
        },
        {
          Parameters: "validateField",
          Explain: "对部分表单字段进行校验的方法，参数1为需校验的 prop，参数2为检验完回调，返回错误信息",
          Callback: "callback",
        },
        {
          Parameters: "resetFields",
          Explain: "对整个表单进行重置，将所有字段值重置为空并移除校验结果",
          Callback: "-",
        },
      ],
      rowFormItem: [
        {
          Parameters: "prop",
          Explain: "对应表单域 model 里的字段",
          Types: "String",
          Optional: "-",
          Default: "-",
        },

        {
          Parameters: "label",
          Explain: "标签文本",
          Types: "String",
          Optional: "-",
          Default: "-",
        },
        {
          Parameters: "label-width",
          Explain: "表单域标签的的宽度",
          Types: "Number",
          Optional: "-",
          Default: "-",
        },
        {
          Parameters: "required",
          Explain: "是否必填，如不设置，则会根据校验规则自动生成",
          Types: "Boolean",
          Optional: "-",
          Default: "-",
        },
        {
          Parameters: "rules",
          Explain: "表单验证规则",
          Types: "Object / Array",
          Optional: "-",
          Default: "-",
        },
        {
          Parameters: "error",
          Explain: "表单域验证错误信息, 设置该值会使表单验证状态变为error，并显示该错误信息",
          Types: "Boolean",
          Optional: "-",
          Default: "-",
        },
        {
          Parameters: "show-message",
          Explain: "是否显示校验错误信息",
          Types: "Boolean",
          Optional: "-",
          Default: "true",
        },
      ],
      html1: `    <template>
      <div style="width:600px;">
        <tb-form :model="formInline" ref="form" :rules="ruleValidate" inline>
          <tb-form-item prop="name">
            <tb-input v-model="formInline.name" placeholder="用户名"></tb-input>
          </tb-form-item>
          <tb-form-item prop="mail">
            <tb-input v-model="formInline.mail" placeholder="邮箱"></tb-input>
          </tb-form-item>
        </tb-form>
      </div>
    </template>
    <script>
      export default {
        data() {
          return {
            formInline: {
              name: '',
              mail: ''
            },
            ruleValidate: {
              name: [{ required: true, message: '用户名不能为空', trigger: 'blur' }],
              mail: [
                { required: true, message: '邮箱不能为空', trigger: 'blur' },
                { type: 'email', message: '邮箱格式不正确', trigger: 'blur' }
              ]
            }
          }
        }
      }
    <\/script>
              `,
      html2: `    <template>
      <div style="width:500px;">
        <div class="mb-10">表头对其方式：
          <tb-radio-group v-model="type" style="display: inline-block;">
            <tb-radio label="top">top</tb-radio>
            <tb-radio label="left">left</tb-radio>
            <tb-radio label="right">right</tb-radio>
          </tb-radio-group>
        </div>
        <div class="mb-10">表单尺寸：
          <tb-radio-group v-model="size" style="display: inline-block;">
            <tb-radio label="medium">medium</tb-radio>
            <tb-radio label="small">small</tb-radio>
            <tb-radio label="mini">mini</tb-radio>
          </tb-radio-group>
        </div>
        <tb-form :model="formInline" ref="form"
                :label-position="type"
                :label-width="labelWidth"
                :size="size">
          <tb-form-item label="用户名" prop="name">
            <tb-input v-model="formInline.name" placeholder="用户名" :size="size"></tb-input>
          </tb-form-item>
          <tb-form-item label="邮箱" prop="mail">
            <tb-input v-model="formInline.mail" placeholder="邮箱" :size="size"></tb-input>
          </tb-form-item>
        </tb-form>
      </div>
    </template>
    <script>
      export default {
        data() {
          return {
            type: 'top',
            size: 'small',
            formInline: {
              name: '',
              mail: ''
            }
          }
        },
        computed: {
          labelWidth() {
            return this.type === 'top' ? null : 80
          }
        }
      }
    <\/script>
              `,
      html3: `    <template>
      <div style="width:600px;">
        <tb-form :model="formValidate" ref="form" :rules="ruleValidate1" :label-width="100">
          <tb-form-item label="用户名" prop="name">
            <tb-input v-model="formValidate.name"></tb-input>
          </tb-form-item>
          <tb-form-item label="邮箱" prop="mail">
            <tb-input v-model="formValidate.mail"></tb-input>
          </tb-form-item>
          <tb-form-item style="width:300px;" label="年龄" prop="age">
            <tb-input-number v-model="formValidate.age"></tb-input-number>
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
            <tb-input v-model="formValidate.desc" type="textarea" :autosize="{minRows: 2,maxRows: 5}"
                    placeholder="Enter something..."></tb-input>
          </tb-form-item>
          <tb-form-item>
            <tb-button @click="handleSubmit" type="primary">提 交</tb-button>
            <tb-button @click="handleReset">重 置</tb-button>
          </tb-form-item>
        </tb-form>
      </div>
    </template>
    <script>
      export default {
        data() {
          const descValidate = (rule, value, callback) => {
            if (value.length > 10 || value.length === 0) {
              callback()
            } else {
              callback(new Error('描述必须大于10个字'))
            }
          }
          return {
            formValidate: {
              name: '',
              mail: '',
              age: 0,
              gender: '',
              birthday: '',
              time: '',
              city: '',
              cities: [],
              interest: ["Movie", "Sleep"],
              desc: ''
            },
            cities: [
              {
                value: 'nanjing',
                label: '南京',
                children: [
                  {
                    value: 'xuanwu',
                    label: '玄武区'
                  },
                  {
                    value: 'gulou',
                    label: '鼓楼区'
                  },
                  {
                    value: 'jianye',
                    label: '建邺区'
                  }
                ]
              },
              {
                value: 'xuzhou',
                label: '徐州',
                children: [
                  {
                    value: 'tongshan',
                    label: '铜山区'
                  },
                  {
                    value: 'gulou',
                    label: '鼓楼区'
                  },
                  {
                    value: 'yunlong',
                    label: '云龙区'
                  },
                  {
                    value: 'jiawang',
                    label: '贾汪区'
                  }
                ]
              }
            ],
            ruleValidate1: {
              name: [{ required: true, message: '用户名不能为空', trigger: 'blur' }],
              mail: [
                { required: true, message: '邮箱不能为空', trigger: 'blur' },
                { type: 'email', message: '邮箱格式不正确', trigger: 'blur' }
              ],
              age: [{ required: true, type: 'number', message: '年龄必填', trigger: 'change' },
                { min: 18, max: 35, type: 'number', message: '年龄必须满18周岁，不大于35岁', trigger: 'change' }],
              gender: [{ required: true, message: '请选择性别', trigger: 'change' }],
              birthday: [{ required: true, type: 'date', message: '请选择出生日期', trigger: 'change' }],
              time: [{ required: true, type: 'string', message: '选择时间', trigger: 'change' }],
              city: [{ required: true, message: '请选择城市', trigger: 'change' }],
              cities: [{ required: true, type: 'array', message: '请选择所在地区', trigger: 'change' }],
              interest: [
                { required: true, type: 'array', min: 1, message: '请选择爱好', trigger: 'change' },
                { type: 'array', max: 2, message: '最多选择两个爱好', trigger: 'change' }
              ],
              desc: [{ validator: descValidate, trigger: 'blur' }]
            }
          }
        },
        methods: {
          handleSubmit() {
            this.$refs.form.validate((valid) => {
              if (valid) {
                this.$message({ type: 'success', content: '表单校验成功' });
              } else {
                this.$message({ type: 'danger', content: '表单校验失败' });
              }
            })
          },
          handleReset() {
            this.$refs.form.resetFields();
          }
        }
      }
    <\/script>
              `,
      html4: `    <template>
      <div style="width:400px;">
        <tb-form :model="formValidate2" ref="form2" :label-width="80">
          <tb-form-item label="用户名" prop="name" :rules=" { required: true, message: '用户名不能为空', trigger: 'blur' }">
            <tb-input v-model="formValidate2.name"></tb-input>
          </tb-form-item>
          <tb-form-item label="邮箱" prop="mail">
            <tb-input v-model="formValidate2.mail"></tb-input>
          </tb-form-item>
        </tb-form>
      </div>
    </template>
    <script>
      export default {
        data() {
          return {
            formValidate2: {
              name: '',
              mail: ''
            }
          }
        }
      }
    <\/script>
              `,

      //   定义当前传递过来的数据是所有类型的数据
      rightTitle: [
        { title: "Form 表单", id: "link-an-niu" },
        { title: "行内表单", id: "hang-nei-biao-dan" },
        { title: "对齐方式", id: "dui-qi-fang-shi" },
        { title: "基本校验", id: "ji-ben-jiao-yan" },
        { title: "单个元素的校验", id: "dan-ge-jiao-yan" },
        { title: "Form props", id: "rowForm" },
        { title: "Form methods", id: "rowFormMethod" },
        { title: "FormItem props", id: "rowFormItem" },
      ],
    };
  },
  /**
   * @description: 引入minxns   src/utils/mixins.ts
   * @param {rightTitle}  rightTitle:右侧right浮起框数据
   * @return {*}
   */
  mixins: [useScroll],
  methods: {
    /**
     * @description: 点击右侧区域跳转至对应的html区域
     * @param {id:string} id:id节点地址
     * @return {*}
     */
    goMeowPoint(id) {
      const containern = window.document.querySelector("#" + id);
      containern.scrollIntoView(true);
    },
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
};
</script>
<style lang="less" scoped>
.tb-link {
  margin: 5px;
}
</style>
