<!--
 * @Author: your name
 * @Date: 2021-06-17 14:42:15
 * @LastEditTime: 2021-06-18 15:54:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/packages/tbDatePicker/picker.vue
-->
<template>
  <div :class="wrapperClasses" v-click-outside="handleClose">
    <div ref="reference" :class="[prefixCls + '-rel']">
      <slot>
        <tb-input
          :key="forceInputRerender"
          :element-id="elementId"
          :class="[prefixCls + '-editor']"
          :readonly="!editable || readonly"
          :disabled="disabled"
          :size="size"
          :placeholder="placeholder"
          :value="visualValue"
          :name="name"
          ref="input"
          @input-change="handleInputChange"
          @focus="handleFocus"
          @blur="handleBlur"
          @click.native="handleFocus"
          @keydown.native="handleKeydown"
          @mouseenter.native="handleInputMouseenter"
          @mouseleave.native="handleInputMouseleave"
        >
          <i @click.stop.prevent="handleIconClick($event)" :class="`iconfont ${arrowType}`" slot="suffix" />
        </tb-input>
      </slot>
    </div>
    <transition name="zoom-in-top">
      <tb-drop @click.native="handleTransferClick" v-show="opened" :class="{ [prefixCls + '-transfer']: appendToBody }" :placement="placement" ref="drop" :data-transfer="appendToBody" :transfer="appendToBody" v-transfer-dom>
        <div>
          <component
            :is="panel"
            ref="pickerPanel"
            :visible="visible"
            :showTime="type === 'datetime' || type === 'datetimerange'"
            :confirm="isConfirm"
            :selectionMode="selectionMode"
            :steps="steps"
            :format="format"
            :value="internalValue"
            :start-date="startDate"
            :split-panels="splitPanels"
            :show-week-numbers="showWeekNumbers"
            :picker-type="type"
            :multiple="multiple"
            :focused-date="focusedDate"
            :time-picker-options="timePickerOptions"
            v-bind="ownPickerProps"
            @pick="onPick"
            @pick-clear="handleClear"
            @pick-success="onPickSuccess"
            @pick-click="disableClickOutSide = true"
            @selection-mode-change="onSelectionModeChange"
          ></component>
        </div>
      </tb-drop>
    </transition>
  </div>
</template>

<script>
import tbInput from "../tbInput/main.vue";
import tbDrop from "../tbSelect/drop.vue";
import TransferDom from "../directive/transferDom";
import ClickOutside from "../directive/clickoutside";
import { oneOf, findComponentsDownward } from "../utils/utils";
import { DEFAULT_FORMATS, TYPE_VALUE_RESOLVER_MAP, getDayCountOfMonth } from "./util/util";
import Emitter from "../mixins/emitter";

const prefixCls = "tb-date-picker";
const pickerPrefixCls = "tb-picker";

const isEmptyArray = (val) => val.reduce((isEmpty, str) => (isEmpty && !str) || (typeof str === "string" && str.trim() === ""), true);
const keyValueMapper = {
  40: "up",
  39: "right",
  38: "down",
  37: "left",
};

const mapPossibleValues = (key, horizontal, vertical) => {
  if (key === "left") return horizontal * -1;
  if (key === "right") return horizontal * 1;
  if (key === "up") return vertical * 1;
  if (key === "down") return vertical * -1;
};

const pulseElement = (el) => {
  const pulseClass = "tb-date-picker-btn-pulse";
  el.classList.add(pulseClass);
  setTimeout(() => el.classList.remove(pulseClass), 200);
};

const extractTime = (date) => {
  if (!date) return [0, 0, 0];
  return [date.getHours(), date.getMinutes(), date.getSeconds()];
};

export default {
  mixins: [Emitter],
  components: { tbInput, tbDrop },
  directives: { ClickOutside, TransferDom },
  props: {
    format: {
      type: String,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    editable: {
      type: Boolean,
      default: true,
    },
    clearable: {
      type: Boolean,
      default: true,
    },
    confirm: {
      type: Boolean,
      default: false,
    },
    open: {
      type: Boolean,
      default: null,
    },
    multiple: {
      type: Boolean,
      default: false,
    },
    timePickerOptions: {
      default: () => ({}),
      type: Object,
    },
    splitPanels: {
      type: Boolean,
      default: false,
    },
    showWeekNumbers: {
      type: Boolean,
      default: false,
    },
    startDate: {
      type: Date,
    },
    size: {
      validator(value) {
        return oneOf(value, ["small", "medium", "mini"]);
      },
      default: "small",
    },
    placeholder: {
      type: String,
      default: "",
    },
    placement: {
      validator(value) {
        return oneOf(value, ["top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "left", "left-start", "left-end", "right", "right-start", "right-end"]);
      },
      default: "bottom-start",
    },
    appendToBody: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
    },
    elementId: {
      type: String,
    },
    steps: {
      type: Array,
      default: () => [],
    },
    value: {
      type: [Date, String, Array],
    },
    options: {
      type: Object,
      default: () => ({}),
    },
    separator: {
      type: String,
      default: " ~ ",
    },
  },
  data() {
    const isRange = this.type.includes("range");
    const emptyArray = isRange ? [null, null] : [null];
    const initialValue = isEmptyArray((isRange ? this.value : [this.value]) || []) ? emptyArray : this.parseDate(this.value);
    const focusedTime = initialValue.map(extractTime);

    return {
      prefixCls: prefixCls,
      showClose: false,
      visible: false,
      internalValue: initialValue,
      disableClickOutSide: false, // fixed when click a date,trigger clickoutside to close picker
      disableCloseUnderTransfer: false, // transfer 模式下，点击Drop也会触发关闭,
      selectionMode: this.onSelectionModeChange(this.type),
      forceInputRerender: 1,
      isFocused: false,
      focusedDate: initialValue[0] || this.startDate || new Date(),
      focusedTime: {
        column: 0, // which column inside the picker
        picker: 0, // which picker
        time: focusedTime, // the values array into [hh, mm, ss],
        active: false,
      },
      internalFocus: false,
    };
  },
  computed: {
    wrapperClasses() {
      return [
        prefixCls,
        {
          [prefixCls + "-focused"]: this.isFocused,
        },
      ];
    },
    publicVModelValue() {
      if (this.multiple) {
        return this.internalValue.slice();
      } else {
        const isRange = this.type.includes("range");
        let val = this.internalValue.map((date) => (date instanceof Date ? new Date(date) : date || ""));

        if (this.type.match(/^time/)) val = val.map(this.formatDate);
        return isRange || this.multiple ? val : val[0];
      }
    },
    publicStringValue() {
      const { formatDate, publicVModelValue, type } = this;
      if (type.match(/^time/)) return publicVModelValue;
      if (this.multiple) return formatDate(publicVModelValue);
      return Array.isArray(publicVModelValue) ? publicVModelValue.map(formatDate) : formatDate(publicVModelValue);
    },
    opened() {
      return this.open === null ? this.visible : this.open;
    },
    transition() {
      const bottomPlaced = this.placement.match(/^bottom/);
      return bottomPlaced ? "slide-up" : "slide-down";
    },
    visualValue() {
      return this.formatDate(this.internalValue);
    },
    isConfirm() {
      return this.confirm || this.type === "datetime" || this.type === "datetimerange" || this.multiple;
    },
    arrowType() {
      let type = "";
      if (this.type === "time" || this.type === "timerange") {
        type = "icon-time";
      } else {
        type = "icon-calendar";
      }
      if (this.showClose) type = "icon-error";
      return type;
    },
  },
  methods: {
    onSelectionModeChange(type) {
      if (type.match(/^date/)) type = "date";
      this.selectionMode = oneOf(type, ["year", "month", "date", "time"]) && type;
      return this.selectionMode;
    },
    // 开启 transfer 时，点击 Drop 即会关闭，这里不让其关闭
    handleTransferClick() {
      if (this.appendToBody) this.disableCloseUnderTransfer = true;
    },
    handleClose(e) {
      if (this.disableCloseUnderTransfer) {
        this.disableCloseUnderTransfer = false;
        return false;
      }

      if (e && e.type === "mousedown" && this.visible) {
        e.preventDefault();
        e.stopPropagation();
        return;
      }

      if (this.visible) {
        const pickerPanel = this.$refs.pickerPanel && this.$refs.pickerPanel.$el;
        if (e && pickerPanel && pickerPanel.contains(e.target)) return; // its a click inside own component, lets ignore it.

        this.visible = false;
        e && e.preventDefault();
        e && e.stopPropagation();
        this.$emit("click-outside", e);
        return;
      }

      this.isFocused = false;
      this.disableClickOutSide = false;
    },
    handleFocus(e) {
      if (this.readonly) return;
      this.isFocused = true;
      if (e && e.type === "focus") return; // just focus, don't open yet
      if (!this.disabled) {
        this.visible = true;
      }
    },
    handleBlur(e) {
      if (this.internalFocus) {
        this.internalFocus = false;
        return;
      }
      if (this.visible) {
        e.preventDefault();
        return;
      }

      this.isFocused = false;
      this.onSelectionModeChange(this.type);
      this.internalValue = this.internalValue.slice(); // trigger panel watchers to reset views
      this.reset();
      this.$refs.pickerPanel.onToggleVisibility(false);
    },
    handleKeydown(e) {
      const keyCode = e.keyCode;

      // handle "tab" key
      if (keyCode === 9) {
        if (this.visible) {
          e.stopPropagation();
          e.preventDefault();

          if (this.isConfirm) {
            const selector = `.${pickerPrefixCls}-confirm > *`;
            const tabbable = this.$refs.drop.$el.querySelectorAll(selector);
            this.internalFocus = true;
            const element = [...tabbable][e.shiftKey ? "pop" : "shift"]();
            element.focus();
          } else {
            this.handleClose();
          }
        } else {
          this.focused = false;
        }
      }

      // open the panel
      const arrows = [37, 38, 39, 40];
      if (!this.visible && arrows.includes(keyCode)) {
        this.visible = true;
        return;
      }

      // close on "esc" key
      if (keyCode === 27) {
        if (this.visible) {
          e.stopPropagation();
          this.handleClose();
        }
      }

      // select date, "Enter" key
      if (keyCode === 13) {
        const timePickers = findComponentsDownward(this, "TimeSpinner");
        if (timePickers.length > 0) {
          const columnsPerPicker = timePickers[0].showSeconds ? 3 : 2;
          const pickerIndex = Math.floor(this.focusedTime.column / columnsPerPicker);
          const value = this.focusedTime.time[pickerIndex];

          timePickers[pickerIndex].chooseValue(value);
          return;
        }

        if (this.type.match(/range/)) {
          this.$refs.pickerPanel.handleRangePick(this.focusedDate, "date");
        } else {
          const panels = findComponentsDownward(this, "PanelTable");
          const compareDate = (d) => {
            const sliceIndex = ["year", "month", "date"].indexOf(this.type) + 1;
            return [d.getFullYear(), d.getMonth(), d.getDate()].slice(0, sliceIndex).join("-");
          };
          const dateIsValid = panels.find(({ cells }) => {
            return cells.find(({ date, disabled }) => compareDate(date) === compareDate(this.focusedDate) && !disabled);
          });
          if (dateIsValid) this.onPick(this.focusedDate, false, "date");
        }
      }

      if (!arrows.includes(keyCode)) return; // ignore rest of keys

      // navigate times and dates
      if (this.focusedTime.active) e.preventDefault(); // to prevent cursor from moving
      this.navigateDatePanel(keyValueMapper[keyCode], e.shiftKey);
    },
    reset() {
      this.$refs.pickerPanel.reset && this.$refs.pickerPanel.reset();
    },
    navigateTimePanel(direction) {
      this.focusedTime.active = true;
      const horizontal = direction.match(/left|right/);
      const vertical = direction.match(/up|down/);
      const timePickers = findComponentsDownward(this, "TimeSpinner");

      const maxNrOfColumns = (timePickers[0].showSeconds ? 3 : 2) * timePickers.length;
      const column = ((currentColumn) => {
        const incremented = currentColumn + (horizontal ? (direction === "left" ? -1 : 1) : 0);
        return (incremented + maxNrOfColumns) % maxNrOfColumns;
      })(this.focusedTime.column);

      const columnsPerPicker = maxNrOfColumns / timePickers.length;
      const pickerIndex = Math.floor(column / columnsPerPicker);
      const col = column % columnsPerPicker;
      if (horizontal) {
        const time = this.internalValue.map(extractTime);
        this.focusedTime = {
          ...this.focusedTime,
          column: column,
          time: time,
        };
        timePickers.forEach((instance, i) => {
          if (i === pickerIndex) {
            instance.updateFocusedTime(col, time[pickerIndex]);
          } else {
            instance.updateFocusedTime(-1, instance.focusedTime);
          }
        });
      }
      if (vertical) {
        const increment = direction === "up" ? 1 : -1;
        const timeParts = ["hours", "minutes", "seconds"];

        const pickerPossibleValues = timePickers[pickerIndex][`${timeParts[col]}List`];
        const nextIndex = pickerPossibleValues.findIndex(({ text }) => this.focusedTime.time[pickerIndex][col] === text) + increment;
        const nextValue = pickerPossibleValues[nextIndex % pickerPossibleValues.length].text;
        const times = this.focusedTime.time.map((time, i) => {
          if (i !== pickerIndex) return time;
          time[col] = nextValue;
          return time;
        });
        this.focusedTime = {
          ...this.focusedTime,
          time: times,
        };

        timePickers.forEach((instance, i) => {
          if (i === pickerIndex) {
            instance.updateFocusedTime(col, times[i]);
          } else {
            instance.updateFocusedTime(-1, instance.focusedTime);
          }
        });
      }
    },
    navigateDatePanel(direction, shift) {
      const timePickers = findComponentsDownward(this, "TimeSpinner");
      if (timePickers.length > 0) {
        // we are in TimePicker mode
        this.navigateTimePanel(direction, shift, timePickers);
        return;
      }

      if (shift) {
        if (this.type === "year") {
          this.focusedDate = new Date(this.focusedDate.getFullYear() + mapPossibleValues(direction, 0, 10), this.focusedDate.getMonth(), this.focusedDate.getDate());
        } else {
          this.focusedDate = new Date(this.focusedDate.getFullYear() + mapPossibleValues(direction, 0, 1), this.focusedDate.getMonth() + mapPossibleValues(direction, 1, 0), this.focusedDate.getDate());
        }

        const position = direction.match(/left|down/) ? "prev" : "next";
        const double = direction.match(/up|down/) ? "-double" : "";

        // pulse button
        const button = this.$refs.drop.$el.querySelector(`.tb-date-picker-${position}-btn-arrow${double}`);
        if (button) pulseElement(button);
        return;
      }

      const initialDate = this.focusedDate || (this.internalValue && this.internalValue[0]) || new Date();
      const focusedDate = new Date(initialDate);

      if (this.type.match(/^date/)) {
        const lastOfMonth = getDayCountOfMonth(initialDate.getFullYear(), initialDate.getMonth());
        const startDay = initialDate.getDate();
        const nextDay = focusedDate.getDate() + mapPossibleValues(direction, 1, 7);
        if (nextDay < 1) {
          if (direction.match(/left|right/)) {
            focusedDate.setMonth(focusedDate.getMonth() + 1);
            focusedDate.setDate(nextDay);
          } else {
            focusedDate.setDate(startDay + Math.floor((lastOfMonth - startDay) / 7) * 7);
          }
        } else if (nextDay > lastOfMonth) {
          if (direction.match(/left|right/)) {
            focusedDate.setMonth(focusedDate.getMonth() - 1);
            focusedDate.setDate(nextDay);
          } else {
            focusedDate.setDate(startDay % 7);
          }
        } else {
          focusedDate.setDate(nextDay);
        }
      }
      if (this.type.match(/^month/)) {
        focusedDate.setMonth(focusedDate.getMonth() + mapPossibleValues(direction, 1, 3));
      }
      if (this.type.match(/^year/)) {
        focusedDate.setFullYear(focusedDate.getFullYear() + mapPossibleValues(direction, 1, 3));
      }
      this.focusedDate = focusedDate;
    },
    handleInputChange(event) {
      const isArrayValue = this.type.includes("range") || this.multiple;
      const oldValue = this.visualValue;
      const newValue = event.target.value;
      const newDate = this.parseDate(newValue);
      const disabledDateFn = this.options && typeof this.options.disabledDate === "function" && this.options.disabledDate;
      const valueToTest = isArrayValue ? newDate : newDate[0];
      const isDisabled = disabledDateFn && disabledDateFn(valueToTest);
      const isValidDate = newDate.reduce((valid, date) => valid && date instanceof Date, true);

      if (newValue !== oldValue && !isDisabled && isValidDate) {
        this.emitChange(this.type);
        this.internalValue = newDate;
      } else {
        this.forceInputRerender++;
      }
    },
    handleInputMouseenter() {
      if (this.readonly || this.disabled) return;
      if (this.visualValue && this.clearable) {
        this.showClose = true;
      }
    },
    handleInputMouseleave() {
      this.showClose = false;
    },
    handleIconClick(e) {
      if (this.showClose) {
        if (e) e.stopPropagation();
        this.handleClear();
      } else if (!this.disabled) {
        this.handleFocus();
      }
    },
    handleClear() {
      this.visible = false;
      this.internalValue = this.internalValue.map(() => null);
      this.$emit("clear");
      this.dispatch("tbFormItem", "form-change", "");
      this.emitChange(this.type);
      this.reset();

      setTimeout(
        () => this.onSelectionModeChange(this.type),
        500 // delay to improve dropdown close visual effect
      );
    },
    emitChange(type) {
      this.$nextTick(() => {
        this.$emit("change", this.publicStringValue, type);
        this.dispatch("tbFormItem", "form-change", this.publicStringValue);
      });
    },
    parseDate(val) {
      const isRange = this.type.includes("range");
      const type = this.type;
      const parser = (TYPE_VALUE_RESOLVER_MAP[type] || TYPE_VALUE_RESOLVER_MAP["default"]).parser;
      const format = this.format || DEFAULT_FORMATS[type];
      const multipleParser = TYPE_VALUE_RESOLVER_MAP["multiple"].parser;

      if (val && type === "time" && !(val instanceof Date)) {
        val = parser(val, format, this.separator);
      } else if (this.multiple && val) {
        val = multipleParser(val, format, this.separator);
      } else if (isRange) {
        if (!val) {
          val = [null, null];
        } else {
          if (typeof val === "string") {
            val = parser(val, format, this.separator);
          } else if (type === "timerange") {
            val = parser(val, format, this.separator).map((v) => v || "");
          } else {
            const [start, end] = val;
            if (start instanceof Date && end instanceof Date) {
              val = val.map((date) => new Date(date));
            } else if (typeof start === "string" && typeof end === "string") {
              val = parser(val.join(this.separator), format, this.separator);
            } else if (!start || !end) {
              val = [null, null];
            }
          }
        }
      } else if (typeof val === "string" && type.indexOf("time") !== 0) {
        val = parser(val, format) || null;
      }

      return isRange || this.multiple ? val || [] : [val];
    },
    formatDate(value) {
      const format = DEFAULT_FORMATS[this.type];

      if (this.multiple) {
        const formatter = TYPE_VALUE_RESOLVER_MAP.multiple.formatter;
        return formatter(value, this.format || format, this.separator);
      } else {
        const { formatter } = TYPE_VALUE_RESOLVER_MAP[this.type] || TYPE_VALUE_RESOLVER_MAP["default"];
        return formatter(value, this.format || format, this.separator);
      }
    },
    onPick(dates, visible = false, type) {
      if (this.multiple) {
        const pickedTimeStamp = dates.getTime();
        const indexOfPickedDate = this.internalValue.findIndex((date) => date && date.getTime() === pickedTimeStamp);
        const allDates = [...this.internalValue, dates].filter(Boolean);
        const timeStamps = allDates.map((date) => date.getTime()).filter((ts, i, arr) => arr.indexOf(ts) === i && i !== indexOfPickedDate); // filter away duplicates
        this.internalValue = timeStamps.map((ts) => new Date(ts));
      } else {
        dates = this.parseDate(dates);
        this.internalValue = Array.isArray(dates) ? dates : [dates];
      }

      if (this.internalValue[0]) this.focusedDate = this.internalValue[0];
      this.focusedTime = {
        ...this.focusedTime,
        time: this.internalValue.map(extractTime),
      };

      if (!this.isConfirm) this.onSelectionModeChange(this.type); // reset the selectionMode
      if (!this.isConfirm) this.visible = visible;
      this.emitChange(type);
    },
    onPickSuccess() {
      this.visible = false;
      this.$emit("ok");
      this.focus();
      this.reset();
    },
    focus() {
      this.$refs.input && this.$refs.input.focus();
    },
    updatePopper() {
      this.$refs.drop.update();
    },
  },
  watch: {
    visible(state) {
      if (state === false) {
        this.$refs.drop.destroy();
      }
      this.$refs.drop.update();
      this.$emit("open-change", state);
    },
    value(val) {
      this.internalValue = this.parseDate(val);
    },
    open(val) {
      this.visible = val === true;
    },
    type(type) {
      this.onSelectionModeChange(type);
    },
    publicVModelValue(now, before) {
      const newValue = JSON.stringify(now);
      const oldValue = JSON.stringify(before);
      const shouldEmitInput = newValue !== oldValue || typeof now !== typeof before;
      if (shouldEmitInput) this.$emit("input", now); // to update v-model
    },
  },
  mounted() {
    const initialValue = this.value;
    const parsedValue = this.publicVModelValue;
    if (typeof initialValue !== typeof parsedValue || JSON.stringify(initialValue) !== JSON.stringify(parsedValue)) {
      this.$emit("input", this.publicVModelValue); // to update v-model
    }
    if (this.open !== null) this.visible = this.open;

    // to handle focus from confirm buttons
    this.$on("focus-input", () => this.focus());
    this.$on("update-popper", () => this.updatePopper());
  },
};
</script>
<style lang="less">
.tb-date-picker {
  display: inline-block;
  line-height: normal;
  width: 100%;
  font-size: 14px;
  .tb-input {
    padding: 0 28px 0 8px;
  }
  .tb-input-suffix .icon-error {
    cursor: pointer;
  }
  &-rel {
    position: relative;
  }
  .tb-select-dropdown {
    width: auto;
    padding: 0;
    overflow: visible;
    max-height: none;
  }
  &-header {
    height: 32px;
    line-height: 32px;
    text-align: center;
    border-bottom: 1px solid #d9d9d9;
    &-label {
      cursor: pointer;
      transition: color 0.2s ease-in-out;
      &:hover {
        color: #1089ff;
      }
    }
  }
  &-prev-btn {
    float: left;
    &-arrow-double {
      margin-left: 10px;
      i:after {
        content: "\e7f3";
        margin-left: -8px;
      }
    }
  }
  &-next-btn {
    float: right;
    &-arrow-double {
      margin-right: 10px;
      i:after {
        content: "\e7fd";
        margin-left: -8px;
      }
    }
  }
  &-cells {
    width: 196px;
    margin: 10px;
    white-space: normal;
    span {
      display: inline-block;
      width: 24px;
      height: 24px;
      em {
        display: inline-block;
        width: 24px;
        height: 24px;
        line-height: 24px;
        margin: 2px;
        font-style: normal;
        border-radius: 2px;
        text-align: center;
        transition: all 0.2s ease-in-out;
      }
    }
    &-header span {
      line-height: 24px;
      text-align: center;
      margin: 2px;
      color: #c5c8ce;
    }
    &-cell:hover {
      em {
        background: #e7f3ff;
      }
    }
    &-focused {
      em {
        box-shadow: 0 0 0 1px #1089ff inset;
      }
    }

    &-cell {
      span& {
        width: 28px;
        height: 28px;
        cursor: pointer;
      }
      &-prev-month, &-next-month {
        em {
          color: #c5c8ce;
        }
        &:hover {
          em {
            background: transparent;
          }
        }
      }
      span&-week-label, span&-week-label:hover, span&-disabled, span&-disabled:hover {
        cursor: not-allowed;
        color: #c5c8ce;
        em {
          color: inherit;
          background: inherit;
        }
      }
      span&-disabled, span&-disabled:hover {
        background: #f5f5f5;
      }
      &-today {
        em {
          position: relative;
          box-shadow: 0 0 0 1px #1089ff inset;
        }
      }
      &-range {
        position: relative;
        em {
          position: relative;
          z-index: 1;
        }
        &:before {
          content: '';
          display: block;
          background: #e7f3ff;
          border-radius: 0;
          border: 0;
          position: absolute;
          top: 2px;
          bottom: 2px;
          left: 0;
          right: 0;
        }
      }
      &-selected, &-selected:hover {
        em {
          background: #1089ff;
          color: #fff;
        }
      }
      span&-disabled&-selected {
        em {
          background: #c5c8ce;
          color: #f5f5f5;
        }
      }
    }
  }
  &-cells-show-week-numbers {
    width: 226px;
  }
  &-cells-year, &-cells-month {
    margin-top: 14px;
    span {
      width: 40px;
      height: 28px;
      line-height: 28px;
      margin: 10px 12px;
      border-radius: 2px;
      em {
        width: 40px;
        height: 28px;
        line-height: 28px;
        margin: 0;
      }
    }

    .tb-date-picker-cells-cell-focused {
      background-color: #1089ff;
      color:#FFFFFF;
    }

  }
  &-with-range {
    .tb-picker-panel {
      &-body {
        min-width: (196px + 20) * 2;
      }
      &-content {
        float: left;
      }
    }
    .tb-picker-cells-show-week-numbers {
      min-width: (226px + 20) * 2;
    }
  }
  &-with-week-numbers {
    .tb-picker-panel {
      &-body-date {
        min-width: (226px + 20) * 2;
      }
    }
  }

  &-transfer {
    z-index: 1060;
    max-height: none;
    width: auto;
  }

  &-focused input {
    border-color:#1089ff;
    outline: 0;
    // box-shadow: 0 0 0 2px #1089ff
  }
}

.tb-picker {
  font-size: 14px;
  &-panel {
    &-icon-btn {
      display: inline-block;
      width: 20px;
      height: 24px;
      line-height: 26px;
      margin-top: 2px;
      text-align: center;
      cursor: pointer;
      color: #c5c8ce;
      transition: color 0.2s ease-in-out;
      &:hover {
        color: #1089ff;
      }
      i {
        font-size: 14px;
      }
    }
    &-body-wrapper&-with-sidebar {
      padding-left: 92px;
    }
    &-sidebar {
      width: 92px;
      float: left;
      margin-left: -92px;
      position: absolute;
      top: 0;
      bottom: 0;
      background: #f8f8f9;
      border-right: 1px solid #d9d9d9;
      border-radius: 2px 0 0 2px;
      overflow: auto;
    }
    &-shortcut {
      padding: 6px 8px;
      transition: all 0.2s ease-in-out;
      cursor: pointer;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      color: rgba(0, 0, 0, .65);
      &:hover {
        background: #e7f3ff;
      }
    }
    &-body {
      float: left;
    }
  }
  &-confirm {
    border-top:  1px solid #d9d9d9;
    text-align: right;
    padding: 8px;
    clear: both;
    & > span {
      color: #1089ff;
      cursor: pointer;
      user-select: none;
      float: left;
      padding: 2px 0;
      transition: all 0.2s ease-in-out;
      &:hover {
        color:#1088ff31
      }
      &:active {
        color: #1088ff13
      }
    }
    &-time {
      float: left;
    }
    .tb-button + .tb-button {
      margin-left: 4px;
    }
  }
}
@width-base:56px;
@width-with-date-base:72px;

.tb-time-picker {
  font-size: 14px;
  &-header {
    height: 32px;
    line-height: 32px;
    text-align: center;
    border-bottom: 1px solid #d9d9d9;
  }
  &-cells {
    min-width: @width-base* 2;
    &-with-seconds {
      min-width: @width-base* 3;
    }
    &-list {
      width: @width-base;
      max-height: 144px;
      float: left;
      overflow: hidden;
      border-left: 1px solid #d9d9d9;
      position: relative;
      &:hover {
        overflow-y: auto;
      }
      &:first-child {
        border-left: none;
        border-radius: 2px 0 0 2px;
      }
      &:last-child {
        border-radius: 0 2px 2px 0;
      }
      ul {
        width: 100%;
        margin: 0;
        padding: 0 0 120px 0;
        list-style: none;
        li {
          width: 100%;
          height: 24px;
          line-height: 24px;
          margin: 0;
          padding: 0 0 0 16px;
          box-sizing: content-box;
          text-align: left;
          user-select: none;
          cursor: pointer;
          list-style: none;
          transition: background 0.2s ease-in-out;
          color: rgba(0, 0, 0, .65);
        }
      }
    }
    &-cell {
      &:hover {
        background: #f5f5f5;
      }
      &-disabled {
        color: #c5c8ce;
        cursor: not-allowed;
        &:hover {
          color: #c5c8ce;
          background-color: #fff;
          cursor: not-allowed;
        }
      }
      &-selected, &-selected:hover {
        color: #ffffff !important;
        background: #1089ff;
    
      }
      &-focused {
        background-color:#1089ff;
      }
    }
  }
  &-with-range {
    .tb-picker-panel {
      &-body {
        min-width: @width-base * 2 + 4px;
      }
      &-content {
        float: left;
        position: relative;

        &:after {
          content: '';
          display: block;
          width: 2px;
          position: absolute;
          top: 31px;
          bottom: 0;
          right: -2px;
          background: #d9d9d9;
          z-index: 1;
        }

        &-right {
          float: right;
          &:after {
            right: auto;
            left: -2px;
          }
        }
      }
    }
    .tb-time-picker-cells {
      &-list {
        &:first-child {
          border-radius: 0;
        }
        &:last-child {
          border-radius: 0;
        }
      }
    }
  }
  &-with-range&-with-seconds {
    .tb-picker-panel {
      &-body {
        min-width: @width-base* 3 * 2 + 4px;
      }
    }
  }
}

.tb-picker-panel-content {
  .tb-picker-panel-content {
    .tb-time-picker {
      &-cells {
        min-width: @width-with-date-base* 3;
        &-with-seconds {
          min-width: @width-with-date-base* 3;
          .tb-time-picker-cells-list {
            width: @width-with-date-base;
            ul {
              li {
                padding: 0 0 0 28px;
              }
            }
          }
        }
        &-list {
          width: @width-with-date-base* 3 * 0.5;
          max-height: 216px;
          &:first-child {
            border-radius: 0;
          }
          &:last-child {
            border-radius: 0;
          }
          ul {
            padding: 0 0 192px 0;
            li {
              padding: 0 0 0 46px;
            }
          }
        }
      }
    }
  }
}
</style>
