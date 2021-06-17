<!--
 * @Author: your name
 * @Date: 2021-06-16 15:59:45
 * @LastEditTime: 2021-06-17 16:27:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/packages/tbSelect/select.vue
-->
<template>
  <div :class="classes" v-click-outside="onClickOutside">
    <div ref="reference" :class="selectionCls" :tabindex="selectTabindex" @blur="toggleHeaderFocus" @focus="toggleHeaderFocus" @click="toggleMenu" @mouseenter="hasMouseHoverHead = true" @mouseleave="hasMouseHoverHead = false">
      <slot name="input">
        <input type="hidden" :name="name" :value="publicValue" />
        <select-head
          :filterable="filterable"
          :multiple="multiple"
          :values="values"
          :clearable="canBeCleared"
          :prefix="prefix"
          :disabled="disabled"
          :remote="remote"
          :input-element-id="elementId"
          :initial-label="initialLabel"
          :placeholder="placeholder"
          :query-prop="query"
          :max-tag-count="maxTagCount"
          :max-tag-placeholder="maxTagPlaceholder"
          @query-change="onQueryChange"
          @input-focus="isFocused = true"
          @input-blur="isFocused = false"
          @clear="clearSingleSelect"
        >
          <slot name="prefix" slot="prefix"></slot>
        </select-head>
      </slot>
    </div>
    <transition name="zoom-in-top">
      <drop :class="dropdownCls" v-show="dropVisible" :placement="placement" ref="dropdown" :data-transfer="appendToBody" :transfer="appendToBody" v-transfer-dom>
        <ul v-show="showNotFoundLabel" :class="[prefixCls + '-not-found']">
          <li>{{ notFoundText }}</li>
        </ul>
        <ul :class="prefixCls + '-dropdown-list'">
          <functional-options v-if="!remote || (remote && !loading)" :options="selectOptions" :slot-update-hook="updateSlotOptions" :slot-options="slotOptions"></functional-options>
        </ul>
        <ul v-show="loading" :class="[prefixCls + '-loading']">
          loading...
        </ul>
      </drop>
    </transition>
  </div>
</template>

<script>
import Drop from "./drop.vue";
import ClickOutside from "../directive/clickoutside";
import TransferDom from "../directive/transferDom";
import { oneOf } from "../utils/utils";
import Emitter from "../mixins/emitter";
import SelectHead from "./select-head.vue";
import FunctionalOptions from "./functional-options.vue";

const prefixCls = "tb-select";
// 自闭！！！！！  少写了个字母
const optionRegexp = /^tb-option$/i;
const optionGroupRegexp = /tb-option-?group/i;

/**
 * @description: 寻找子节点
 * @param {*} instance
 * @param {*} checkFn
 * @return {*}
 */
const findChild = (instance, checkFn) => {
  let match = checkFn(instance);
  if (match) return instance;
  for (let i = 0, l = instance.$children.length; i < l; i++) {
    const child = instance.$children[i];
    match = findChild(child, checkFn);
    if (match) return match;
  }
};

const findOptionsInVNode = (node) => {
  const opts = node.componentOptions;
  if (opts && opts.tag.match(optionRegexp)) return [node];
  if (!node.children && (!opts || !opts.children)) return [];
  const children = [...(node.children || []), ...((opts && opts.children) || [])];
  const options = children.reduce((arr, el) => [...arr, ...findOptionsInVNode(el)], []).filter(Boolean);
  return options.length > 0 ? options : [];
};

const extractOptions = (options) =>
  options.reduce((options, slotEntry) => {
    return options.concat(findOptionsInVNode(slotEntry));
  }, []);

const applyProp = (node, propName, value) => {
  return {
    ...node,
    componentOptions: {
      ...node.componentOptions,
      propsData: {
        ...node.componentOptions.propsData,
        [propName]: value,
      },
    },
  };
};

const getNestedProperty = (obj, path) => {
  const keys = path.split(".");
  return keys.reduce((o, key) => (o && o[key]) || null, obj);
};

const getOptionLabel = (option) => {
  if (option.componentOptions.propsData.label) return option.componentOptions.propsData.label;
  const textContent = (option.componentOptions.children || []).reduce((str, child) => str + (child.text || ""), "");
  const innerHTML = getNestedProperty(option, "data.domProps.innerHTML");
  return textContent || (typeof innerHTML === "string" ? innerHTML : "");
};

const checkValuesNotEqual = (value, publicValue, values) => {
  const strValue = JSON.stringify(value);
  const strPublic = JSON.stringify(publicValue);
  const strValues = JSON.stringify(
    values.map((item) => {
      return item.value;
    })
  );
  return strValue !== strPublic || strValue !== strValues || strValues !== strPublic;
};

const ANIMATION_TIMEOUT = 300;

export default {
  name: "tbSelect",
  mixins: [Emitter],
  components: { FunctionalOptions, Drop, SelectHead },
  directives: { ClickOutside, TransferDom },
  props: {
    //  传输的value值
    value: {
      type: [String, Number, Array],
      default: "",
    },
    // 使用时，也得设置 value 才行
    label: {
      type: [String, Number, Array],
      default: "",
    },
    // 是否多选
    multiple: {
      type: Boolean,
      default: false,
    },
    // 是否禁用
    disabled: {
      type: Boolean,
      default: false,
    },
    // clearable可以清空已选项，仅适用于单选模式
    clearable: {
      type: Boolean,
      default: false,
    },
    // 提示内容
    placeholder: {
      type: String,
      default: "请选择",
    },
    // 搜索模式
    filterable: {
      type: Boolean,
      default: false,
    },
    filterMethod: {
      type: Function,
    },
    remoteMethod: {
      type: Function,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    loadingText: {
      type: String,
    },
    // 大小
    size: {
      validator(value) {
        return oneOf(value, ["medium", "small", "mini"]);
      },
      default: "small",
    },
    // 在返回选项时，是否将 label 和 value 一并返回,默认只返回 value
    labelInValue: {
      type: Boolean,
      default: false,
    },
    // 没有数据显示文本
    notFoundText: {
      type: String,
      default: "没有数据",
    },
    // 弹窗的展开方向
    placement: {
      validator(value) {
        return oneOf(value, ["top", "bottom", "top-start", "bottom-start", "top-end", "bottom-end"]);
      },
      default: "bottom-start",
    },
    // 是否将弹层放置于 body 内
    appendToBody: Boolean,
    // Use for AutoComplete
    autoComplete: {
      type: Boolean,
      default: false,
    },
    // name值
    name: {
      type: String,
    },
    // id
    elementId: {
      type: String,
    },
    transferClassName: {
      type: String,
    },
    // 自定义 Select 内头部图标
    prefix: {
      type: String,
    },
    // 多选时最多显示多少个 tag
    maxTagCount: {
      type: Number,
    },
    // 隐藏 tag 时显示的内容，参数是剩余项数量
    maxTagPlaceholder: {
      type: Function,
    },
  },
  mounted() {
    // 绑定select-selected事件
    this.$on("select-selected", this.onOptionClick);
    // 设置初始值，如果有的话
    if (!this.remote && this.selectOptions.length > 0) {
      // 初始执行
      this.values = this.getInitialValue()
        .map((value) => {
          if (typeof value !== "number" && !value) return null;
          return this.getOptionData(value);
        })
        .filter(Boolean);
    }

    this.checkUpdateStatus();
  },
  data() {
    return {
      prefixCls: prefixCls,
      values: [],
      dropDownWidth: 0,
      visible: false,
      focusIndex: -1,
      isFocused: false,
      query: "",
      initialLabel: this.label,
      hasMouseHoverHead: false,
      slotOptions: this.$slots.default,
      caretPosition: -1,
      lastRemoteQuery: "",
      unchangedQuery: true,
      hasExpectedValue: false,
      preventRemoteCall: false,
      filterQueryChange: false,
    };
  },
  computed: {
    classes() {
      return [
        `${prefixCls}`,
        {
          [`${prefixCls}-visible`]: this.visible,
          [`${prefixCls}-disabled`]: this.disabled,
          [`${prefixCls}-multiple`]: this.multiple,
          [`${prefixCls}-single`]: !this.multiple,
          [`${prefixCls}-show-clear`]: this.showCloseIcon,
          [`${prefixCls}-${this.size}`]: !!this.size,
        },
      ];
    },
    dropdownCls() {
      return {
        [prefixCls + "-dropdown-transfer"]: this.appendToBody,
        [prefixCls + "-multiple"]: this.multiple && this.transfer,
        "tb-auto-complete": this.autoComplete,
        [this.transferClassName]: this.transferClassName,
      };
    },
    selectionCls() {
      return {
        [`${prefixCls}-selection`]: !this.autoComplete,
        [`${prefixCls}-selection-focused`]: this.isFocused,
      };
    },
    transitionName() {
      return this.placement === "bottom" ? "slide-up" : "slide-down";
    },
    dropVisible() {
      let status = true;
      const noOptions = !this.selectOptions || this.selectOptions.length === 0;
      if (!this.loading && this.remote && this.query === "" && noOptions) status = false;

      if (this.autoComplete && noOptions) status = false;

      return this.visible && status;
    },
    showNotFoundLabel() {
      const { loading, remote, selectOptions } = this;
      return selectOptions && selectOptions.length === 0 && (!remote || (remote && !loading));
    },
    publicValue() {
      if (this.labelInValue) {
        // 判断是不是需要同并将label值返回
        // 如果是多选的话就绑定这个value值  单选去第一项就好
        return this.multiple ? this.values : this.values[0];
      } else {
        // 判断是不是多选 返还value值 单选返还单个value值
        return this.multiple ? this.values.map((option) => option.value) : this.values[0] ? this.values[0].value : "";
      }
    },
    canBeCleared() {
      const uiStateMatch = this.hasMouseHoverHead || this.active;
      const qualifiesForClear = !this.multiple && !this.disabled && this.clearable;
      return uiStateMatch && qualifiesForClear && this.reset; // we return a function
    },
    selectOptions() {
      const selectOptions = [];
      const slotOptions = this.slotOptions || [];
      let optionCounter = -1;
      const currentIndex = this.focusIndex;
      const selectedValues = this.values.filter(Boolean).map(({ value }) => value);
      if (this.autoComplete) {
        const copyChildren = (node, fn) => {
          return {
            ...node,
            children: (node.children || []).map(fn).map((child) => copyChildren(child, fn)),
          };
        };
        const autoCompleteOptions = extractOptions(slotOptions);
        const selectedSlotOption = autoCompleteOptions[currentIndex];

        return slotOptions.map((node) => {
          if (node === selectedSlotOption || getNestedProperty(node, "componentOptions.propsData.value") === this.value) return applyProp(node, "isFocused", true);
          return copyChildren(node, (child) => {
            if (child !== selectedSlotOption) return child;
            return applyProp(child, "isFocused", true);
          });
        });
      }
      for (let option of slotOptions) {
        const cOptions = option.componentOptions;
        if (!cOptions) continue;
        if (cOptions.tag.match(optionGroupRegexp)) {
          let children = cOptions.children;
          if (this.filterable) {
            children = children.filter(({ componentOptions }) => this.validateOption(componentOptions));
          }
          children = children.map((opt) => {
            optionCounter = optionCounter + 1;
            return this.processOption(opt, selectedValues, optionCounter === currentIndex);
          });
          // keep the group if it still has children
          if (children.length > 0) {
            selectOptions.push({
              ...option,
              componentOptions: { ...cOptions, children: children },
            });
          }
        } else {
          if (this.filterQueryChange) {
            const optionPassesFilter = this.filterable ? this.validateOption(cOptions) : option;
            if (!optionPassesFilter) continue;
          }
          optionCounter = optionCounter + 1;
          selectOptions.push(this.processOption(option, selectedValues, optionCounter === currentIndex));
        }
      }
      return selectOptions;
    },
    flatOptions() {
      return extractOptions(this.selectOptions);
    },
    selectTabindex() {
      return this.disabled || this.filterable ? -1 : 0;
    },
    remote() {
      return typeof this.remoteMethod === "function";
    },
  },
  methods: {
    setQuery(query) {
      // PUBLIC API
      if (query) {
        this.onQueryChange(query);
        return;
      }
      if (query === null) {
        this.onQueryChange("");
        this.values = [];
      }
    },
    clearSingleSelect() {
      // PUBLIC API
      this.$emit("clear");
      this.hideMenu();
      if (this.clearable) this.reset();
    },
    getOptionData(value) {
      const option = this.flatOptions.find(({ componentOptions }) => componentOptions.propsData.value === value);
      if (!option) return null;
      const label = getOptionLabel(option);
      return {
        value: value,
        label: label,
      };
    },
    getInitialValue() {
      const { multiple, remote, value } = this;
      let initialValue = Array.isArray(value) ? value : [value];
      if (!multiple && (typeof initialValue[0] === "undefined" || (String(initialValue[0]).trim() === "" && !Number.isFinite(initialValue[0])))) initialValue = [];
      if (remote && !multiple && value) {
        const data = this.getOptionData(value);
        this.query = data ? data.label : String(value);
      }
      return initialValue.filter((item) => {
        return Boolean(item) || item === 0;
      });
    },
    processOption(option, values, isFocused) {
      if (!option.componentOptions) return option;
      const optionValue = option.componentOptions.propsData.value;
      const disabled = option.componentOptions.propsData.disabled;
      const isSelected = values.includes(optionValue);

      const propsData = {
        ...option.componentOptions.propsData,
        selected: isSelected,
        isFocused: isFocused,
        disabled: typeof disabled === "undefined" ? false : disabled !== false,
      };
      return {
        ...option,
        componentOptions: {
          ...option.componentOptions,
          propsData: propsData,
        },
      };
    },
    validateOption({ children, elm, propsData }) {
      const value = propsData.value;
      const label = propsData.label || "";
      const textContent =
        (elm && elm.textContent) ||
        (children || []).reduce((str, node) => {
          const nodeText = node.elm ? node.elm.textContent : node.text;
          return `${str} ${nodeText}`;
        }, "") ||
        "";
      const stringValues = JSON.stringify([value, label, textContent]);
      const query = this.query.toLowerCase().trim();
      return stringValues.toLowerCase().includes(query);
    },
    toggleMenu(e, force) {
      if (this.disabled) {
        return false;
      }
      this.visible = typeof force !== "undefined" ? force : !this.visible;
      if (this.visible) {
        this.dropDownWidth = this.$el.getBoundingClientRect().width;
        this.broadcast("tbDrop", "update-popper");
      }
    },
    hideMenu() {
      this.toggleMenu(null, false);
      setTimeout(() => {
        this.unchangedQuery = true;
      }, ANIMATION_TIMEOUT);
    },
    onClickOutside() {
      if (this.visible) {
        if (this.appendToBody) {
          const { $el } = this.$refs.dropdown;
          if ($el === event.target || $el.contains(event.target)) {
            return;
          }
        }
        if (this.filterable) {
          const input = this.$el.querySelector('input[type="text"]');
          this.caretPosition = input.selectionStart;
          this.$nextTick(() => {
            const caretPosition = this.caretPosition === -1 ? input.value.length : this.caretPosition;
            input.setSelectionRange(caretPosition, caretPosition);
          });
        }
        this.hideMenu();
        this.isFocused = true;
      } else {
        this.caretPosition = -1;
        this.isFocused = false;
      }
    },
    reset() {
      this.query = "";
      this.focusIndex = -1;
      this.unchangedQuery = true;
      this.values = [];
      this.filterQueryChange = false;
    },
    onOptionClick(option) {
      // 如果是多选的话
      if (this.multiple) {
        // 保留对远程选择的查询
        if (this.remote) {
          this.lastRemoteQuery = this.lastRemoteQuery || this.query;
        } else {
          this.lastRemoteQuery = "";
        }
        const valueIsSelected = this.values.find(({ value }) => value === option.value);
        if (valueIsSelected) {
          this.values = this.values.filter(({ value }) => value !== option.value);
        } else {
          this.values = this.values.concat(option);
        }
        this.isFocused = true; // 所以我们在用鼠标点击选项元素后将焦点放回原处
      } else {
        // 如果是单选的话  就直接整就完了
        this.query = String(option.label).trim();
        this.values = [option];
        this.lastRemoteQuery = "";
        this.hideMenu();
      }
      this.focusIndex = this.flatOptions.findIndex((opt) => {
        if (!opt || !opt.componentOptions) return false;
        return opt.componentOptions.propsData.value === option.value;
      });
      if (this.filterable) {
        const inputField = this.$el.querySelector('input[type="text"]');
        if (!this.autoComplete) this.$nextTick(() => inputField.focus());
      }
      this.broadcast("tbDrop", "update-popper");
      setTimeout(() => {
        this.filterQueryChange = false;
      }, ANIMATION_TIMEOUT);
    },
    onQueryChange(query) {
      if (query.length > 0 && query !== this.query) {
        // in 'AutoComplete', when set an initial value asynchronously,
        // the 'dropdown list' should be stay hidden.
        // [issue #5150]
        if (this.autoComplete) {
          this.visible = document.hasFocus && document.hasFocus() && document.activeElement === this.$el.querySelector("input");
        } else {
          this.visible = true;
        }
      }

      this.query = query;
      this.unchangedQuery = this.visible;
      this.filterQueryChange = true;
    },
    toggleHeaderFocus({ type }) {
      if (this.disabled) {
        return;
      }
      this.isFocused = type === "focus";
    },
    updateSlotOptions() {
      this.slotOptions = this.$slots.default;
    },
    checkUpdateStatus() {
      if (this.getInitialValue().length > 0 && this.selectOptions.length === 0) {
        this.hasExpectedValue = true;
      }
    },
  },
  watch: {
    value(value) {
      const { getInitialValue, getOptionData, publicValue, values } = this;
      this.checkUpdateStatus();
      if (value === "") {
        this.values = [];
      } else if (checkValuesNotEqual(value, publicValue, values)) {
        this.$nextTick(() => {
          this.values = getInitialValue()
            .map(getOptionData)
            .filter(Boolean);
        });

        // this.dispatch("BFormItem", "form-change", this.publicValue);
      }
    },
    values(now, before) {
      const newValue = JSON.stringify(now);
      const oldValue = JSON.stringify(before);
      // v-model is always just the value, event with labelInValue === true
      const vModelValue = this.publicValue && this.labelInValue ? (this.multiple ? this.publicValue.map(({ value }) => value) : this.publicValue.value) : this.publicValue;
      const shouldEmitInput = newValue !== oldValue && vModelValue !== this.value;
      if (shouldEmitInput) {
        this.$emit("input", vModelValue); // to update v-model
        this.$emit("change", this.publicValue);
        // this.dispatch("BFormItem", "form-change", this.publicValue);
      }
    },
    query(query) {
      this.$emit("query-change", query);
      const { remoteMethod, lastRemoteQuery } = this;
      const hasValidQuery = query !== "" && (query !== lastRemoteQuery || !lastRemoteQuery);
      const shouldCallRemoteMethod = remoteMethod && hasValidQuery && !this.preventRemoteCall;
      this.preventRemoteCall = false; // remove the flag

      if (shouldCallRemoteMethod) {
        this.focusIndex = -1;
        const promise = this.remoteMethod(query);
        this.initialLabel = "";
        if (promise && promise.then) {
          promise.then((options) => {
            if (options) this.options = options;
          });
        }
      }
      if (query !== "" && this.remote) this.lastRemoteQuery = query;
    },
    loading(state) {
      if (state === false) {
        this.updateSlotOptions();
      }
    },
    isFocused(focused) {
      const el = this.filterable ? this.$el.querySelector('input[type="text"]') : this.$el;
      el[this.isFocused ? "focus" : "blur"]();

      // restore query value in filterable single selects
      const [selectedOption] = this.values;
      if (selectedOption && this.filterable && !this.multiple && !focused) {
        const selectedLabel = String(selectedOption.label || selectedOption.value).trim();
        if (selectedLabel && this.query !== selectedLabel) {
          this.preventRemoteCall = true;
          this.query = selectedLabel;
        }
      }
    },
    focusIndex(index) {
      if (index < 0 || this.autoComplete) return;
      // update scroll
      const optionValue = this.flatOptions[index].componentOptions.propsData.value;
      const optionInstance = findChild(this, ({ $options }) => {
        return $options.componentName === "select-item" && $options.propsData.value === optionValue;
      });

      let bottomOverflowDistance = optionInstance.$el.getBoundingClientRect().bottom - this.$refs.dropdown.$el.getBoundingClientRect().bottom;
      let topOverflowDistance = optionInstance.$el.getBoundingClientRect().top - this.$refs.dropdown.$el.getBoundingClientRect().top;
      if (bottomOverflowDistance > 0) {
        this.$refs.dropdown.$el.scrollTop += bottomOverflowDistance;
      }
      if (topOverflowDistance < 0) {
        this.$refs.dropdown.$el.scrollTop += topOverflowDistance;
      }
    },
    dropVisible(open) {
      this.broadcast("tbDrop", open ? "update-popper" : "destroy-popper");
    },
    selectOptions() {
      if (this.hasExpectedValue && this.selectOptions.length > 0) {
        if (this.values.length === 0) {
          this.values = this.getInitialValue();
        }
        this.values = this.values.map(this.getOptionData).filter(Boolean);
        this.hasExpectedValue = false;
      }

      if (this.slotOptions && this.slotOptions.length === 0) {
        this.query = "";
      }

      // 当 dropdown 一开始在控件下部显示，而滚动页面后变成在上部显示，如果选项列表的长度由内部动态变更了(搜索情况)
      // dropdown 的位置不会重新计算，需要重新计算
      this.broadcast("tbDrop", "update-popper");
    },
    visible(state) {
      this.$emit("open-change", state);
    },
    slotOptions(options, old) {
      // #4626，当 Options 的 label 更新时，v-model 的值未更新
      // remote 下，调用 getInitialValue 有 bug
      if (!this.remote) {
        const values = this.getInitialValue();
        if (this.flatOptions && this.flatOptions.length && values.length && !this.multiple) {
          this.values = values.map(this.getOptionData).filter(Boolean);
        }
      }

      // 当 dropdown 在控件上部显示时，如果选项列表的长度由外部动态变更了，
      // dropdown 的位置会有点问题，需要重新计算
      if (options && old && options.length !== old.length) {
        this.broadcast("tbDrop", "update-popper");
      }
    },
  },
};
</script>
<style lang="less">
.tb-select {
  position: relative;
  display: inline-block;
  width: 100%;
  box-sizing: border-box;
  vertical-align: middle;
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
  line-height: 1.5715;
  .head-multiple-wrap {
    white-space: nowrap;
    overflow: hidden;
  }
  &-selection {
    display: block;
    box-sizing: border-box;
    outline: 0;
    user-select: none;
    cursor: pointer;
    position: relative;
    background-color: #ffffff;
    border-radius: 2px;
    border: 1px solid #d9d9d9;
    transition: all 0.2s ease-in-out;
    &:hover,
    &-focused {
      border-color: #1089ff;
      .tb-select-arrow {
        display: inline-block;
      }
    }
  }

  &-arrow {
    position: absolute;
    top: 50%;
    right: 8px;
    line-height: 1;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    font-size: 14px;
    color: rgba(0, 0, 0, 0.45);
    transition: all 0.2s ease-in-out;
  }
  &-visible {
    .tb-select-selection {
      border-color: #1089ff;
      outline: 0;
    }
    .tb-select-arrow {
      transform: translateY(-50%) rotate(180deg);
      display: inline-block;
    }
  }
  &-disabled {
    .tb-select-selection {
      background-color: #f5f5f5;
      opacity: 1;
      cursor: not-allowed;
      color: rgba(0, 0, 0, 0.25);
      &:hover {
        border-color: #d9d9d9;
        box-shadow: none;
      }
    }
    .tb-select-arrow {
      color: #ccc;
    }
  }
  &-single &-selection {
    height: 32px;
    position: relative;
    .tb-select-placeholder {
      color: #c0c4cc;
    }
    .tb-select-placeholder,
    .tb-select-selected-value {
      display: block;
      height: 30px;
      line-height: 30px;
      font-size: 14px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      padding-left: 8px;
      padding-right: 24px;
    }
  }

  &-mini&-single &-selection {
    height: 30px;
    border-radius: 2px;
    .tb-select-placeholder,
    .tb-select-selected-value {
      height: 28px;
      line-height: 28px;
    }
  }
  &-mini&-multiple &-selection {
    height: 35px;
    border-radius: 2px;
    .tb-select-placeholder,
    .tb-select-selected-value {
      height: 33px;
      line-height: 33px;
    }
    .tb-tag {
      height: 28px;
      line-height: 25px;
    }
  }
  &-small&-single &-selection {
    height: 35px;
    .tb-select-placeholder,
    .tb-select-selected-value {
      height: 33px;
      line-height: 33px;
    }
  }
  &-small&-multiple &-selection {
    height: 35px;
    .tb-select-placeholder,
    .tb-select-selected-value {
      height: 33px;
      line-height: 33px;
    }
    .tb-tag {
      height: 28px;
      line-height: 25px;
    }
  }
  &-medium&-single &-selection {
    height: 40px;
    .tb-select-placeholder,
    .tb-select-selected-value {
      height: 38px;
      line-height: 38px;
      font-size: 16px;
    }
  }
  &-medium&-multiple &-selection {
    height: 40px;
    .tb-select-placeholder,
    .tb-select-selected-value {
      height: 38px;
      line-height: 38px;
      font-size: 16px;
    }
    .tb-tag {
      height: 32px;
      line-height: 30px;
    }
  }
  &-multiple &-selection {
    height: 32px;
    padding: 0 24px 0 4px;
    .tb-select-placeholder {
      display: block;
      height: 30px;
      line-height: 30px;
      color: #c5c8ce;
      font-size: 14px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      padding-left: 4px;
      padding-right: 22px;
    }
  }
  &-multiple .tb-tag {
    height: 26px;
    line-height: 32px - 10;
    margin: 3px 4px 3px 0;
    max-width: 99%;
    position: relative;
    span:not(.tb-select-max-tag) {
      display: block;
      margin-right: 14px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    i {
      position: absolute;
      right: 2px;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  &-prefix {
    display: inline-block;
    i {
      vertical-align: -3px;
      font-size: 16px;
    }
  }
  &-head-with-prefix {
    display: flex !important;
    align-items: center;
  }
  &-single &-prefix {
    padding-left: 8px;
  }
  &-single &-head-with-prefix,
  &-multiple &-head-with-prefix {
    padding-left: 0 !important;
  }
  // input
  &-input {
    display: inline-block;
    height: 30px;
    line-height: 30px;
    padding: 0 24px 0 8px;
    font-size: 14px;
    outline: none;
    border: none;
    box-sizing: border-box;
    color: rgba(0, 0, 0, 0.65);
    background-color: transparent;
    position: relative;
    cursor: pointer;
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

    &[disabled] {
      cursor: not-allowed;
      color: #ccc;
      -webkit-text-fill-color: #ccc; // #5249
    }
  }
  &-single &-input {
    width: 100%;
  }
  &-medium &-input {
    height: 38px;
    line-height: 38px;
  }
  &-medium {
    font-size: 16px;
  }
  &-small &-input {
    height: 33px;
    line-height: 33px;
  }
  &-mini &-input {
    height: 30 - 2;
    line-height: 28px;
  }
  &-multiple &-input {
    height: 30px;
    line-height: 30px;
    padding: 0 0 0 4px;
  }
  &-not-found {
    text-align: center;
    color: #c0c4cc;
  }
  &-loading {
    text-align: center;
    color: #c0c4cc;
  }
}
// 下拉框样式
.tb-select-dropdown {
  width: inherit;
  max-height: 200px;
  overflow: auto;
  margin: 5px 0;
  padding: 5px 0;
  background-color: #ffffff;
  box-sizing: border-box;
  border-radius: 2px;
  box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05);
  position: absolute;
  z-index: 900;
}
// 下拉框item样式
.tb-select-item {
  margin: 0;
  line-height: 1.5715;
  min-height: 35px;
  padding: 5px 12px;
  clear: both;
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px !important;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  list-style: none;
  cursor: pointer;
  transition: background 0.2s ease-in-out;
  &:hover {
    background: #f5f5f5;
  }
  &-selected,
  &-item &-selected:hover {
    background: #e7f3ff;
    font-weight: bold;
  }
  &-disabled {
    color: #c0c4cc !important;
    cursor: not-allowed;
    &:hover {
      color: #c0c4cc !important;
      background-color: #ffffff;
      cursor: not-allowed;
    }
  }
}

//  分组样式
.tb-select-group {
  list-style: none;
  margin: 0;
  padding: 0;
  &-title {
    padding-left: 8px;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.45);
    height: 30px;
    line-height: 30px;
  }
}
//  多选状态下的下拉item样式
.tb-select-multiple .tb-select-item {
  position: relative;
  &-selected {
    color: #1089ff !important;
    background: #ffffff;
  }
  &-focus,
  &-selected:hover {
    background: #f5f5f5;
  }
  &-selected&-focus {
    color: #f5f5f5;
    background: #ffffff;
  }
  &-selected:after {
    font-family: "iconfont" !important;
    font-style: normal;
    font-weight: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 20px;
    content: "\e820";
    color: #1089ff;
    position: absolute;
    top: 2px;
    right: 8px;
  }
}

// form-item error 样式
.tb-form-item-error {
  .tb-select {
    &-selection {
      border: 1px solid #ff4d4f;
    }
    &-arrow {
      color: #ff4d4f;
    }
    &-visible .tb-select-selection {
      border-color: #ff4d4f;
      outline: 0;
    }
  }
}
//  顶部缩放zoom-in-top
.zoom-in-top-enter-active,
.zoom-in-top-leave-active {
  opacity: 1;
  transform: scaleY(1);
  transition: transform 0.3s cubic-bezier(0.23, 1, 0.32, 1), opacity 0.3s cubic-bezier(0.23, 1, 0.32, 1);
  transform-origin: center top;
}
.zoom-in-top-enter,
.zoom-in-top-leave-to {
  opacity: 0;
  transform: scaleY(0);
}
.tb-tag {
  display: inline-block;
  border: 1px solid #e8eaec;
  color: #515a6e;
  background: #f7f7f7;
  font-size: 12px;
  vertical-align: middle;
  opacity: 1;
  overflow: hidden;
  padding: 0 8px;
  height: 26px;
  line-height: 26px;
  border-radius: 3px;
  box-sizing: border-box;
  white-space: nowrap;
}
</style>
