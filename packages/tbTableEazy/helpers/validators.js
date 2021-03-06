/*
 * @Author: your name
 * @Date: 2021-06-22 16:26:17
 * @LastEditTime: 2021-06-22 16:26:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/packages/tbTableEazy/helpers/validators.js
 */
import is from './is'

/**
 * Creates a validator function that checks is value is included in values.
 * @param {Array} values
 * @returns {function(*):boolean}
 */
const includes = (values) => (value) => values.includes(value)

const ALIGNMENTS = ['right', 'left', 'center']

/**
 * Checks if value is an alignment.
 */
export const isAlignment = includes(ALIGNMENTS)

/**
 * Checks if value is a list of objects.
 * @param {*} value
 * @returns {boolean}
 */
export const isContent = (value) => {
  const isObject = (value) => is(value, 'Object')
  const isContent = is(value, 'Array') && value.every(isObject)
  return isContent
}