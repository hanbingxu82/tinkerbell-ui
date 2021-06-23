/*
 * @Author: your name
 * @Date: 2021-06-22 16:25:54
 * @LastEditTime: 2021-06-22 16:25:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/packages/tbTableEazy/helpers/is.js
 */
/**
 * Check value's constructor name.
 * @param {*} value
 * @param {string} constructor
 * @returns {boolean}
 */
export default (value, constructor) => {
    const is = Object.prototype.toString.call(value) === `[object ${constructor}]`
    return is
  }