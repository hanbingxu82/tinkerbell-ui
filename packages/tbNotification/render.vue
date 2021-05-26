<!--
 * @Author: your name
 * @Date: 2021-05-25 11:31:41
 * @LastEditTime: 2021-05-25 11:32:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/packages/tbMessage/render.vue
-->
<script>
export default {
  name: "RenderCell",
  functional: true,
  props: {
    render: Function,
  },
  render: (h, ctx) => {
    return ctx.props.render(h);
  },
};
</script>
