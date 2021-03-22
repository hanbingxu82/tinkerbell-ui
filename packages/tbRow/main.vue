<!--
 * @Author: your name
 * @Date: 2021-03-19 16:00:38
 * @LastEditTime: 2021-03-22 09:25:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/packages/tbRow/main.vue
-->
<template>
  <div v-on="$listeners" :class="`tb-row`" :style="`${tbjustify} ${tbalign}`"><slot></slot></div>
</template>
<script>
export default {
  name: "tbRow",
  data() {
    return {
      tbalign: "",
      tbjustify:"",
    };
  },
  props: {
    justify: {
      type: String,
      default: "start",
    },
    align: {
      type: String,
      default: "top",
    },
    gutter: {
      type: Number,
      default: 0,
    },
  },
  provide() {
    return {
      tbrow: this,
    };
  },
  created() {
    this.Pjustify();
    this.Palign();
  },
  methods: {
    Pjustify() {
      const vm = this;
      if (vm.justify == "start") {
        vm.tbjustify = "justify-content:flex-start;";
      } else if (vm.justify == "center") {
        vm.tbjustify = "justify-content:center;";
      } else if (vm.justify == "end") {
        vm.tbjustify = "justify-content:flex-end;";
      } else if (vm.justify == "space-around") {
        vm.tbjustify = "justify-content:space-around;";
      } else if (vm.justify == "space-between") {
        vm.tbjustify = "justify-content:space-between;";
      } else {
        vm.tbjustify = "";
      }
    },
    Palign() {
      const vm = this;
      if (vm.align == "top") {
        vm.tbalign = "align-items:flex-start;";
      } else if (vm.align == "middle") {
        vm.tbalign = "align-items:crenter;";
      } else if (vm.align == "bottom") {
        vm.tbalign = "align-items:flex-end;";
      } else {
        vm.tbalign = "";
      }
    },
  },
};
</script>
<style scoped>
.tb-row {
  /* height: 36px; */
  min-height: 36px;
  display: flex;
  flex-wrap: wrap;
  /* justify-content: space-between; */
}
</style>
