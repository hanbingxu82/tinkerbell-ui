<!--
 * @Author: your name
 * @Date: 2021-06-16 16:00:45
 * @LastEditTime: 2021-06-16 16:03:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/packages/tbSelect/functional-options.vue
-->
<script>
const returnArrayFn = () => []

export default {
  props: {
    options: {
      type: Array,
      default: returnArrayFn
    },
    slotOptions: {
      type: Array,
      default: returnArrayFn
    },
    slotUpdateHook: {
      type: Function,
      default: () => {
      }
    }
  },
  functional: true,
  render(h, { props, parent }) {
    if (props.slotOptions !== parent.$slots.default) props.slotUpdateHook()
    return props.options
  }
}
</script>