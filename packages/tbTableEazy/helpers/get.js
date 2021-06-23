/*
 * @Author: your name
 * @Date: 2021-06-22 16:25:37
 * @LastEditTime: 2021-06-22 16:30:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/packages/tbTableEazy/helpers/get.js
 */
import is from './is'
import get from 'object-take'

const DEFAULT_VALIDATE = (value) => !is(value, 'Null')

/**
 * Get value from first object.
 * @param {string} name
 * @param {Deep[]} objects
 * @param {function(*):boolean} [validate]
 * @returns {*}
 */
// 寻找目标物组件
export const getProperty = (name, objects, validate = DEFAULT_VALIDATE) => {
  const properties = objects.map((object) => get(object, name))
  const property = properties.find((property) => validate(property))
  return property
}

export default get