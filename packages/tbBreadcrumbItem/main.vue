<!--
 * @Author: your name
 * @Date: 2021-05-20 09:29:42
 * @LastEditTime: 2021-05-20 09:53:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/packages/tbBreadcrumbItem/main.vue
--><template>
  <span class="tb-breadcrumb__item">
    <span :class="['tb-breadcrumb__inner', to ? 'is-link' : '']" ref="link">
      <slot></slot>
    </span>
    <i v-if="separatorClass" class="tb-breadcrumb__separator" :class="`iconfont ${separatorClass}`"></i>
    <span v-else class="tb-breadcrumb__separator">{{ separator }}</span>
  </span>
</template>
<script>
export default {
  name: "tbBreadcrumbItem",
  props: {
    to: {},
    replace: Boolean,
  },
  data() {
    return {
      separator: "",
      separatorClass: "",
    };
  },

  inject: ["tbBreadcrumb"],

  mounted() {
    this.separator = this.tbBreadcrumb.separator;
    this.separatorClass = this.tbBreadcrumb.separatorClass;
    const link = this.$refs.link;
    link.addEventListener("click", () => {
      const { to, $router } = this;
      if (!to || !$router) return;
      this.replace ? $router.replace(to) : $router.push(to);
    });
  },
};
</script>
<style>
.tb-breadcrumb {
  font-size: 14px;
  line-height: 1;
}
.tb-breadcrumb__item {
  float: left;
}
.tb-breadcrumb__inner.is-link,
.tb-breadcrumb__inner a {
  font-weight: 700;
  text-decoration: none;
  transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  color: #303133;
}
.tb-breadcrumb__inner {
  color: #606266;
}
.tb-breadcrumb__separator[class*="icon"] {
  margin: 0 6px;
  font-weight: 400;
}
.tb-breadcrumb__separator {
  margin: 0 9px;
  font-weight: 700;
  color: #c0c4cc;
}
</style>
