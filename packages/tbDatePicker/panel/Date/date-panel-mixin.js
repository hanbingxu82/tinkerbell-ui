/*
 * @Author: your name
 * @Date: 2021-06-17 14:46:18
 * @LastEditTime: 2021-06-17 15:20:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/packages/tbDatePicker/panel/Date/date-panel-mixin.js
 */
import { oneOf } from '../../../utils/utils'
import { initTimeDate } from '../../util/util'

export default {
  props: {
    showTime: {
      type: Boolean,
      default: false
    },
    format: {
      type: String,
      default: 'yyyy-MM-dd'
    },
    selectionMode: {
      type: String,
      validator(value) {
        return oneOf(value, ['year', 'month', 'date', 'time'])
      },
      default: 'date'
    },
    shortcuts: {
      type: Array,
      default: () => []
    },
    disabledDate: {
      type: Function,
      default: () => false
    },
    value: {
      type: Array,
      default: () => [initTimeDate(), initTimeDate()]
    },
    timePickerOptions: {
      default: () => ({}),
      type: Object
    },
    showWeekNumbers: {
      type: Boolean,
      default: false
    },
    startDate: {
      type: Date
    },
    pickerType: {
      type: String,
      require: true
    },
    focusedDate: {
      type: Date,
      required: true
    }
  },
  computed: {
    isTime() {
      return this.currentView === 'time'
    }
  },
  methods: {
    handleToggleTime() {
      this.currentView = this.currentView === 'time' ? 'date' : 'time'
    }
  }
}
