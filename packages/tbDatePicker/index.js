/*
 * @Author: your name
 * @Date: 2021-06-17 14:42:07
 * @LastEditTime: 2021-06-17 15:42:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/packages/tbDatePicker/index.js
 */
import tbDatePicker from './picker/date-picker'
import tbTimePicker from './picker/time-picker'
/* istanbul ignore next */
tbDatePicker.install = function (Vue) {
  Vue.component(tbDatePicker.name, tbDatePicker)
}



/* istanbul ignore next */
tbTimePicker.install = function (Vue) {
  Vue.component(tbTimePicker.name, tbTimePicker)
}

export {tbDatePicker,tbTimePicker}
