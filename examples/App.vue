<!--
 * @Author: your name
 * @Date: 2021-03-16 13:46:44
 * @LastEditTime: 2021-03-20 17:37:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/examples/App.vue
-->
<template>
  <div id="app">
    <tb-row :gutter="20"  align="bottom">
      <tb-col :xs="{span:8,offset:2}" :sm="{span:6,offset:4}" :md="{span:4,offset:6}" :lg="{span:2,offset:8}" :xl="{span:1,offset:9}"> 
        <!-- 默认最小高度为36px  所以如果不设置height:100%的话会根据流动高度来走 -->
        <div style="background:red;">123</div>
      </tb-col>
      <tb-col :span="4" :offset="4"> <div style="background:red;"></div>456</tb-col>
      <tb-col :span="4"> <div style="background:red;"></div>789</tb-col>
    </tb-row>

    <Xiaoxiannan></Xiaoxiannan>
    <!-- 不同按钮大小的button -->
    <div>
      <tb-button>小仙男</tb-button>
      <tb-button size="mini">小仙男</tb-button>
      <tb-button size="small" type="primary">小仙男</tb-button>
      <tb-button size="medium" type="success">小仙男</tb-button>
    </div>
    <!-- 基本按钮 -->
    <div>
      <tb-button size="mini">小仙男</tb-button>
      <tb-button size="mini" type="primary">小仙男</tb-button>
      <tb-button size="mini" type="success">小仙男</tb-button>
      <tb-button size="mini" type="info">小仙男</tb-button>
      <tb-button size="mini" type="warning">小仙男</tb-button>
      <tb-button size="mini" type="danger">小仙男</tb-button>
    </div>
    <!-- 朴素按钮 -->
    <div>
      <tb-button size="mini" plain>小仙男</tb-button>
      <tb-button size="mini" type="primary" plain>小仙男</tb-button>
      <tb-button size="mini" type="success" plain>小仙男</tb-button>
      <tb-button size="mini" type="info" plain>小仙男</tb-button>
      <tb-button size="mini" type="warning" plain>小仙男</tb-button>
      <tb-button size="mini" type="danger" plain>小仙男</tb-button>
    </div>
    <!-- 圆角按钮 -->
    <div>
      <tb-button size="mini" round>小仙男</tb-button>
      <tb-button size="mini" type="primary" round>小仙男</tb-button>
      <tb-button size="mini" type="success" round>小仙男</tb-button>
      <tb-button size="mini" type="info" round>小仙男</tb-button>
      <tb-button size="mini" type="warning" round>小仙男</tb-button>
      <tb-button size="mini" type="danger" round>小仙男</tb-button>
    </div>
    <!-- 圆形图标按钮   一旦设置了circle便不再受size-mini的影响 -->
    <div>
      <tb-button icon="icon-layers" circle></tb-button>
      <tb-button icon="icon-layers" type="primary" circle></tb-button>
      <tb-button icon="icon-layers" type="success" circle></tb-button>
      <tb-button icon="icon-layers" type="info" circle></tb-button>
      <tb-button icon="icon-layers" type="warning" circle></tb-button>
      <tb-button icon="icon-layers" type="danger" circle></tb-button>
    </div>

    <!-- 图标按钮 -->
    <div>
      <tb-button disabled icon="icon-layers">小仙男</tb-button>
      <tb-button disabled icon="icon-layers" type="primary">小仙男</tb-button>
      <tb-button disabled icon="icon-layers" type="success">小仙男</tb-button>
      <tb-button disabled icon="icon-layers" type="info">小仙男</tb-button>
      <tb-button disabled icon="icon-layers" type="warning">小仙男</tb-button>
      <tb-button disabled icon="icon-layers" type="danger">小仙男</tb-button>
    </div>

    <div>
      <tb-button :loading="load">小仙男在努力</tb-button>
      <tb-button type="primary" @click="loadm">小仙男在努力</tb-button>
    </div>

    <i class="iconfont">&#xe6ad;</i>
    <i class="iconfont icon-layers"></i>

    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      load: true,
    };
  },
  methods: {
    loadm() {
      // console.log(123)
      this.load = !this.load;
      // console.log(this.load)
    },
  },
};
</script>

<style lang="less"></style>
