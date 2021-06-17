/*
 * @Author: your name
 * @Date: 2021-06-17 14:43:48
 * @LastEditTime: 2021-06-17 15:08:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/packages/tbDatePicker/picker/date-picker.js
 */
import Picker from '../picker.vue'
import DatePickerPanel from '../panel/Date/date.vue'
import RangeDatePickerPanel from '../panel/Date/date-range.vue'

import { oneOf } from '../../utils/utils'

export default {
  name: 'tbDatePicker',
  mixins: [Picker],
  props: {
    type: {
      validator(value) {
        return oneOf(value, ['year', 'month', 'date', 'daterange', 'datetime', 'datetimerange'])
      },
      default: 'date'
    }
  },
  components: { DatePickerPanel, RangeDatePickerPanel },
  computed: {
    panel() {
      const isRange = this.type === 'daterange' || this.type === 'datetimerange'
      return isRange ? 'RangeDatePickerPanel' : 'DatePickerPanel'
    },
    ownPickerProps() {
      return this.options
    }
  }
}
