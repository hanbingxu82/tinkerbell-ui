/*
 * @Author: your name
 * @Date: 2021-06-22 16:24:41
 * @LastEditTime: 2021-06-22 16:24:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/packages/tbTableEazy/mixins/Alignable.js
 */
import { getProperty } from '../helpers/get'
import { isAlignment } from '../helpers/validators'

const Alignable = ({ cols = 'cols' } = {}) => ({
  props: {
    /**
     * Default cell's alignment.
     */
    align: {
      type: String,
      default: 'left',
      validator: isAlignment
    }
  },
  methods: {
    /**
     * Get column's alignment.
     * @param {number} index
     * @returns {('right'|'left'|'center')}
     */
    $getAlignment (index) {
      const col = this[cols][index]
      const alignment = getProperty('align', [col, this._props], isAlignment)
      return alignment
    }
  }
})

export default Alignable