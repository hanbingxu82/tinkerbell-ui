/*
 * @Author: your name
 * @Date: 2021-06-17 14:42:52
 * @LastEditTime: 2021-06-17 14:43:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/packages/tbDatePicker/util/time-mixins.js
 */
export default {
    props: {
      disabledHours: {
        type: Array,
        default() {
          return []
        }
      },
      disabledMinutes: {
        type: Array,
        default() {
          return []
        }
      },
      disabledSeconds: {
        type: Array,
        default() {
          return []
        }
      },
      hideDisabledOptions: {
        type: Boolean,
        default: false
      }
    }
  }
  