<!--
 * @Author: your name
 * @Date: 2021-05-20 09:29:05
 * @LastEditTime: 2021-07-02 11:43:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/packages/tbBreadcrumb/main.vue
-->
<template>
  <div class="tb-breadcrumb">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "tbBreadcrumb",

  props: {
    separator: {
      type: String,
      default: "/",
    },
    separatorClass: {
      type: String,
      default: "",
    },
  },
  // 传值
  provide() {
    return {
      tbBreadcrumb: this,
    };
  },
};
</script>
<style lang="less">
.tb-breadcrumb {
  font-size: 14px;
  line-height: 1;
  .iconfont{
    vertical-align: baseline;
  }
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
