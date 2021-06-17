<!--
 * @Author: your name
 * @Date: 2021-06-15 10:48:49
 * @LastEditTime: 2021-06-17 15:59:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/packages/tbInput/main.vue
-->
<template>
  <div :class="wrapClasses">
    <template v-if="type !== 'textarea'">
      <span :class="[prefixCls + '-group-prepend']" v-if="prepend" v-show="slotReady">
        <slot name="prepend"></slot>
      </span>
      <!--清空按钮-->
      <span :class="closeClasses" v-if="clearable && currentValue && !disabled">
        <i class="iconfont icon-error" @click="handleClear"></i>
      </span>
      <!-- 自定义图标 -->
      <i class="iconfont" :class="[icon, prefixCls + '-icon', prefixCls + '-icon-normal']" v-else-if="icon" @click="handleIconClick"></i>
      <!-- 搜索图标 -->
      <i class="iconfont icon-search" :class="[prefixCls + '-icon', prefixCls + '-icon-normal', prefixCls + '-search-icon']" v-else-if="search" @click="handleSearch"></i>
      <!-- 图标尾部 -->
      <span class="tb-input-suffix" v-else-if="showSuffix">
        <slot name="suffix"><i class="iconfont" :class="[suffix]" v-if="suffix"></i></slot
      ></span>
      <input
        :id="elementId"
        :autocomplete="autocomplete"
        ref="input"
        :type="type"
        :class="inputClasses"
        :placeholder="placeholder"
        :disabled="disabled"
        :maxlength="maxlength"
        :readonly="readonly"
        :name="name"
        :value="currentValue"
        :number="number"
        :autofocus="autofocus"
        @keyup.enter="handleEnter"
        @keyup="handleKeyup"
        @keypress="handleKeypress"
        @keydown="handleKeydown"
        @focus="handleFocus"
        @blur="handleBlur"
        @compositionstart="handleComposition"
        @compositionupdate="handleComposition"
        @compositionend="handleComposition"
        @input="handleInput"
        @change="handleChange"
      />
      <!-- 图标 头 -->
      <span class="tb-input-prefix" v-if="showPrefix">
        <slot name="prefix"><i class="iconfont" :class="[prefix]" v-if="prefix"></i></slot>
      </span>
      <!-- 展示文本字数统计 -->
      <span class="tb-input-word-count" v-if="showWordCount">{{ wordCount }}</span>
      <span class="tb-input-group-append" v-if="$slots.append">
        <slot name="append"></slot>
      </span>
    </template>
    <!-- 如果是textarea 文本域的话 -->
    <template v-else>
      <textarea
        :id="elementId"
        :wrap="wrap"
        :autocomplete="autocomplete"
        :spellcheck="spellcheck"
        ref="textarea"
        :class="textareaClasses"
        :style="textareaStyle"
        :placeholder="placeholder"
        :disabled="disabled"
        :rows="rows"
        :maxlength="maxlength"
        :readonly="readonly"
        :name="name"
        :value="currentValue"
        :autofocus="autofocus"
        @keyup.enter="handleEnter"
        @keyup="handleKeyup"
        @keypress="handleKeypress"
        @keydown="handleKeydown"
        @focus="handleFocus"
        @blur="handleBlur"
        @compositionstart="handleComposition"
        @compositionupdate="handleComposition"
        @compositionend="handleComposition"
        @input="handleInput"
      ></textarea>
      <!-- 文本字数统计 -->
      <span class="tb-input-word-count" v-if="showWordCount">{{ wordCount }}</span>
    </template>
  </div>
</template>

<script>
import calcTextareaHeight from "../utils/calcTextareaHeight";
import { oneOf, findComponentUpward } from "../utils/utils";
import Emitter from "../mixins/emitter";

const prefixCls = "tb-input";
export default {
  mixins: [Emitter],
  name: "tbInput",
  props: {
    // 类型  同样对应  input的多种类型   默认的是text类型
    type: {
      validator(value) {
        return oneOf(value, ["text", "textarea", "password", "url", "email", "date", "number", "tel"]);
      },
      default: "text",
    },
    // v-model绑定的值
    value: {
      type: [String, Number],
      default: "",
    },
    // size大小
    size: {
      validator(value) {
        return oneOf(value, ["medium", "small", "mini"]);
      },
      default: "small",
    },
    // placeholder文本
    placeholder: {
      type: String,
      default: "",
    },
    // 文本最大长度
    maxlength: {
      type: Number,
    },
    // 是否禁用
    disabled: {
      type: Boolean,
      default: false,
    },
    // 图标展示
    icon: String,
    // 自适应内容高度，仅在 textarea 类型下有效   可传入对象，如 { minRows: 2, maxRows: 6 }
    autosize: {
      type: [Boolean, Object],
      default: false,
    },
    // 文本域默认行数，仅在 textarea 类型下有效
    rows: {
      type: Number,
      default: 2,
    },
    // 只读
    readonly: {
      type: Boolean,
      default: false,
    },
    // name属性
    name: {
      type: String,
    },
    // 将用户的输入转换为 Number 类型
    number: {
      type: Boolean,
      default: false,
    },
    // 自动获取焦点
    autofocus: {
      type: Boolean,
      default: false,
    },
    // 编写检查   可传可不传
    spellcheck: {
      type: Boolean,
      default: false,
    },
    // 原生的自动完成功能，可选值为 off 和 on  自动完成允许浏览器预测对字段的输入。当用户在字段开始键入时，浏览器基于之前键入过的值，应该显示出在字段中填写的选项。
    autocomplete: {
      validator(value) {
        return oneOf(value, ["on", "off"]);
      },
      default: "off",
    },
    // 是否显示清空按钮
    clearable: {
      type: Boolean,
      default: false,
    },
    // 给表单元素设置 id，详见 Form 用法。
    elementId: {
      type: String,
    },
    // 原生的 wrap 属性，可选值为 hard 和 soft，仅在 textarea 下生效  wrap="soft"不展示对应的换行符  wrap="hard"会根据换行状态插入\n
    wrap: {
      validator(value) {
        return oneOf(value, ["hard", "soft"]);
      },
      default: "soft",
    },
    // 输入框头部图标
    prefix: {
      type: String,
      default: "",
    },
    // 输入框尾部图标
    suffix: {
      type: String,
      default: "",
    },
    // 是否为搜索
    search: {
      type: Boolean,
      default: false,
    },
    // 禁用文本域resize ，仅在 textarea 下生效
    noResize: {
      type: Boolean,
      default: false,
    },
    // 显示文本字数统计
    showWordCount: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      currentValue: this.value,
      prefixCls: prefixCls,
      prepend: true,
      append: true,
      slotReady: false,
      textareaStyles: {},
      showPrefix: false,
      showSuffix: false,
      isOnComposition: false,
    };
  },
  watch: {
    // value值变更就会触发更新事件
    value(val) {
      this.setCurrentValue(val);
    },
    // 图标变更事件
    prefix(val) {
      this.showPrefix = val !== "" || this.$slots.prefix !== undefined;
    },
    // 图标变更事件
    suffix(val) {
      this.showSuffix = val !== "" || this.$slots.suffix !== undefined;
    },
  },
  methods: {
    // 键盘敲击回车事件 同样的  如果填写了search也会触发search事件 并把当前文本框内容返回
    handleEnter(event) {
      this.$emit("enter", event);
      if (this.search) this.$emit("search", this.currentValue);
    },
    // 键盘按下事件
    handleKeydown(event) {
      this.$emit("keydown", event);
    },
    // 当一个键被按下并且该键通常产生一个字符值时会触发该事件
    handleKeypress(event) {
      this.$emit("keypress", event);
    },
    // 键盘弹起事件
    handleKeyup(event) {
      this.$emit("keyup", event);
    },
    // 设置 icon 属性后，点击图标时触发
    handleIconClick(event) {
      this.$emit("click", event);
    },
    // 获取焦点事件
    handleFocus(event) {
      this.$emit("focus", event);
    },
    // 失去焦点事件
    handleBlur(event) {
      this.$emit("blur", event);
      // 触发校验
      //   if (!findComponentUpward(this, ["DatePicker", "TimePicker", "Cascader", "Search"])) {
      //     this.dispatch("BFormItem", "form-blur", this.currentValue);
      //   }
    },
    // 兼容谷歌做出的  兼容input事件  如果直接通过input监听， 它是键盘输入按键按下了就触发事件，这样可能导致一些问题，比如在谷歌浏览器想输入中文输入不了
    // 谷歌是 compositionstart  => 监听input事件 => compositionend,   其他浏览器是 compositionstart  => compositionend => 监听input事件，
    handleComposition(event) {
      if (event.type === "compositionstart") {
        this.isOnComposition = true;
      }
      if (event.type === "compositionend") {
        this.isOnComposition = false;
        this.handleInput(event);
      }
    },
    // input事件
    handleInput(event) {
      // 如果这个事件还没有完成的话 只有当输入完成的时候 才会变更实际的触发input事件
      if (this.isOnComposition) return;
      let value = event.target.value;
      if (this.number && value !== "") value = Number.isNaN(Number(value)) ? value : Number(value);
      this.$emit("input", value);
      // 同样的也会触发触发更新事件
      this.setCurrentValue(value);
      this.$emit("change", event);
    },
    // change事件
    handleChange(event) {
      this.$emit("input-change", event);
    },
    // 更新事件
    setCurrentValue(value) {
      if (value === this.currentValue) return;
      this.$nextTick(() => {
        this.resizeTextarea();
      });
      this.currentValue = value;
      // 触发校验
      //   if (!findComponentUpward(this, ["DatePicker", "TimePicker", "Cascader", "Search"])) {
      //     this.dispatch("BFormItem", "form-change", value);
      //   }
    },
    // 设置autosize大小
    resizeTextarea() {
      const autosize = this.autosize;
      if (!autosize || this.type !== "textarea") {
        return false;
      }
      const minRows = autosize.minRows;
      const maxRows = autosize.maxRows;

      this.textareaStyles = calcTextareaHeight(this.$refs.textarea, minRows, maxRows);
    },
    // ref获取焦点
    focus() {
      if (this.type === "textarea") {
        this.$refs.textarea.focus();
      } else {
        this.$refs.input.focus();
      }
    },
    // ref失去焦点
    blur() {
      if (this.type === "textarea") {
        this.$refs.textarea.blur();
      } else {
        this.$refs.input.blur();
      }
    },
    // 点击icon图标  清空
    handleClear() {
      const e = { target: { value: "" } };
      this.$emit("input", "");
      this.setCurrentValue("");
      this.$emit("change", e);
      // 触发clear事件
      this.$emit("clear");
    },
    // 触发搜索事件
    handleSearch() {
      if (this.disabled) return false;
      this.$refs.input.focus();
      this.$emit("search", this.currentValue);
    },
  },
  computed: {
    wrapClasses() {
      return [
        `${prefixCls}-wrapper`,
        {
          [`${prefixCls}-wrapper-${this.size}`]: !!this.size,
          [`${prefixCls}-type-${this.type}`]: this.type,
          // 前置内容
          [`${prefixCls}-group-with-prepend`]: this.$slots.prepend,
          // 后置内容
          [`${prefixCls}-group-with-append`]: this.$slots.append || this.search,
          [`${prefixCls}-hide-icon`]: this.append, // #554
          [`${prefixCls}-with-search`]: this.search,
          [`${prefixCls}-with-word-count`]: this.showWordCount,
        },
      ];
    },
    inputClasses() {
      return [
        `${prefixCls}`,
        {
          [`${prefixCls}-${this.size}`]: !!this.size,
          [`${prefixCls}-disabled`]: this.disabled,
          [`${prefixCls}-with-prefix`]: this.showPrefix,
          [`${prefixCls}-with-suffix`]: this.showSuffix || this.search,
        },
      ];
    },
    closeClasses() {
      return [prefixCls + "-icon", prefixCls + "-icon-clear", prefixCls + "-icon-normal"];
    },
    textareaStyle() {
      return {
        resize: this.noResize ? "none" : null,
        ...this.textareaStyles,
      };
    },
    textareaClasses() {
      return [
        `${prefixCls}`,
        {
          [`${prefixCls}-disabled`]: this.disabled,
        },
      ];
    },
    wordCount() {
      return this.currentValue.length + (this.maxlength ? `/${this.maxlength}` : "");
    },
  },
  mounted() {
    if (this.type !== "textarea") {
      this.prepend = this.$slots.prepend !== undefined;
      this.append = this.$slots.append !== undefined;
      this.showPrefix = this.prefix !== "" || this.$slots.prefix !== undefined;
      this.showSuffix = this.suffix !== "" || this.$slots.suffix !== undefined;
    } else {
      this.prepend = false;
      this.append = false;
    }
    this.slotReady = true;
    this.resizeTextarea();
  },
};
</script>
<style lang="less">
.icon-error {
  cursor: pointer;
}
.tb-input-wrapper {
  display: inline-block;
  width: 100%;
  position: relative;
  vertical-align: middle;
  line-height: 1.5715;
  label {
    display: inline-block;
    width: 100%;
    height: auto;
  }
  &:hover {
    .tb-input-icon-clear {
      display: block;
    }
  }
  .tb-input-icon-clear .icon-error {
    vertical-align: baseline;
    cursor: pointer;
  }
  &.tb-input-group-with-prepend,
  &.tb-input-group-with-append {
    display: inline-flex;
    .tb-input {
      &:focus,
      &:hover {
        z-index: 1;
      }
    }
  }
  .tb-input-group-prepend,
  .tb-input-group-append {
    position: relative;
    button {
      border-radius: 0;
    }
  }
  .tb-input-group-prepend {
    z-index: 1;
    right: -1px;
  }

  .tb-input-group-append {
    z-index: 0;
    left: -1px;
  }
}
// 大小设置
.tb-input-wrapper-medium {
  .tb-input-with-prefix {
    padding-left: 40px;
  }
  .tb-input-prefix,
  .tb-input-suffix {
    width: 40px;
    i {
      font-size: 18px;
      line-height: 40px;
      height: 40px;
    }
  }
  .tb-input-icon {
    line-height: 40px;
    height: 40px;
  }
}
.tb-input-wrapper-small {
  .tb-input-with-prefix {
    padding-left: 35px;
  }
  .tb-input-prefix,
  .tb-input-suffix {
    width: 35px;
    i {
      line-height: 35px;
      height: 35px;
    }
  }
  .tb-input-icon {
    line-height: 35px;
    height: 35px;
  }
}
.tb-input-wrapper-mini {
  .tb-input-with-prefix {
    padding-left: 30px;
  }
  .tb-input-prefix,
  .tb-input-suffix {
    width: 30px;
    i {
      line-height: 30px;
      height: 30px;
    }
  }
  .tb-input-icon {
    line-height: 30px;
    height: 30px;
  }
}

.tb-input {
  display: inline-block;
  width: 100%;
  height: 32px;
  line-height: 1。5715;
  padding: 0 11px;
  font-size: 14px;
  border: 1px solid #d9d9d9;
  border-radius: 2px;
  color: rgba(0, 0, 0, 0.65);
  background-color: #ffffff;
  background-image: none;
  position: relative;
  cursor: text;
  transition: border 0.2s ease-in-out, background 0.2s ease-in-out, box-shadow 0.2s ease;
  // Firefox
  &::-moz-placeholder {
    color: #c0c4cc;
    opacity: 1; // Override Firefox's unusual default opacity; see https://github.com/twbs/bootstrap/pull/11526
  }
  // Internet Explorer 10+
  &:-ms-input-placeholder {
    color: #c0c4cc;
  }
  // Safari and Chrome
  &::-webkit-input-placeholder {
    color: #c0c4cc;
  }
  &:focus,
  &:hover {
    border-color: #409eff;
  }
  &:focus {
    outline: 0;
    // box-shadow: 0 0 0 1px #409eff;
  }
  .iconfont {
    vertical-align: middle;
  }
}
// 大小设置
.tb-input-medium {
  height: 40px;
  font-size: 18px;
}

.tb-input-small {
  height: 35px;
}

.tb-input-mini {
  height: 30px;
}
//  图标部分
.tb-input-hide-icon .tb-input-icon,
.tb-input-icon-clear,
.tb-input-icon-validate {
  display: none;
}
.tb-input-icon {
  position: absolute;
  right: 0;
  top: 0;
  z-index: 3;
  width: 32px;
  height: 32px;
  line-height: 32px;
  font-size: 16px;
  text-align: center;
  color: rgba(0, 0, 0, 0.45);
}
.tb-input-icon-normal + .tb-input {
  padding-right: 36px;
}
.tb-input-with-prefix {
  padding-left: 36px;
}

.tb-input-prefix,
.tb-input-suffix {
  width: 36px;
  height: 100%;
  text-align: center;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
  i {
    font-size: 17.5px;
    line-height: 35px;
    color: rgba(0, 0, 0, 0.65);
  }
}
.tb-input-suffix {
  left: auto;
  right: 0;
}
//  搜索
.tb-input-search-icon {
  cursor: pointer;
  transition: color 0.2s ease-in-out;
}
.tb-input-search {
  cursor: pointer;
  padding: 0 16px !important;
  background: #409eff !important;
  color: #fff !important;
  border-color: #409eff !important;
  transition: all 0.2s ease-in-out;
  position: relative;
  z-index: 2;
}
textarea.tb-input {
  max-width: 100%;
  height: auto;
  min-height: 32px;
  vertical-align: bottom;
  font-size: 14px;
  padding: 4px 7px;
  resize: vertical;
}
.tb-input[disabled],
fieldset[disabled] .tb-input {
  opacity: 1;
  cursor: not-allowed;
  background-color: #f9f9f9;
  color: #c0c4cc;
}

.tb-input-word-count {
  text-align: center;
  position: absolute;
  right: 7px;
  top: 2px;
  bottom: 2px;
  padding-left: 7px;
  background: #fff;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  color: #808695;
  font-size: 12px;
}

.tb-input-type-text.tb-input-with-word-count .tb-input {
  padding-right: 40px;
}
.tb-input-type-textarea.tb-input-with-word-count .tb-input {
  padding-bottom: 16px;
}
.tb-input-type-textarea .tb-input-word-count {
  -webkit-box-align: end;
  -ms-flex-align: end;
  align-items: flex-end;
  top: auto;
  right: 17px;
}
</style>
