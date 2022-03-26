<!--
 * @Author: your name
 * @Date: 2021-05-19 15:22:23
 * @LastEditTime: 2022-01-05 15:09:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/packages/tbRate/main.vue
-->
<template>
  <div ref="tb_rate" class="tb_rate" v-if="length > 0">
    <input type="hidden" :name="name" v-model="rate" :required="required" />
    <template v-for="n in length">
      <button type="button" :key="n" :class="{ tb_rate__star: true, hover: n <= over, filled: n <= rate || isFilled(n) }" @mouseover="onOver(n)" @mouseout="onOut(n)" @click="setRate(n)" @keyup="onOver(n)" @keyup.enter="setRate(n)" :disabled="disabled">
        <i :class="`icon iconfont ${iconref}`"></i>
      </button>
    </template>
    <div class="tb_rate__view" :class="{ disabled: disabled }">
      <span class="count" v-if="showcount">{{ over }}</span>
      <span class="desc" v-if="ratedesc.length > 0">{{ ratedesc[over - 1] }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "tbRate",
  props: {
    // 默认选中值
    value: { type: [Number, String] },
    // name字段
    name: { type: String, default: "rate" },
    // 星号个数
    length: { type: Number },
    // 鼠标移入对应的星号上时，显示对应的index
    showcount: { type: Boolean },
    // 必选  对标form对应的required
    required: { type: Boolean },
    // 描述 将对应的index变为对应的下标字段  如['非常糟糕'，'糟糕'，'正常'，'良好'，'非常良好']
    ratedesc: {
      type: Array,
      default() {
        return [];
      },
    },
    // 选中颜色
    activecolor: {
      type: String,
      default() {
        return "#efc20f";
      },
    },
    // 是否禁用
    disabled: { type: Boolean, default: false },
    // 是否只读
    readonly: { type: Boolean, default: false },
    // 符号图标
    iconref: { type: String, default: "icon-favorite-filling" },
  },
  data() {
    return {
      over: 0,
      rate: 0,
    };
  },
  mounted() {
    this.$refs.tb_rate.style.setProperty("--activeColor", this.activecolor);
  },
  methods: {
    convertValue(value) {
      if (value >= this.length) {
        value = this.length;
      } else if (value < 0) {
        value = 0;
      }
      return value;
    },
    onOver(index) {
      if (!this.readonly) this.over = index;
    },
    onOut() {
      if (!this.readonly) this.over = this.rate;
    },
    setRate(index) {
      if (this.readonly) return false;
      this.$emit("before-rate", this.rate);
      this.rate = index;
      this.$emit("input", this.rate);
      this.$emit("after-rate", this.rate);
    },
    isFilled(index) {
      return index <= this.over;
    },
    isEmpty(index) {
      return index > this.over || (!this.value && !this.over);
    },
  },
  watch: {
    value() {
      this.rate = this.convertValue(this.value);
      this.over = this.convertValue(this.value);
    },
    activecolor() {
      console.log(this.activecolor);
      this.$refs.tb_rate.style.setProperty("--activeColor", this.activecolor);
    },
  },
  created() {
    if (this.value >= this.length) {
      this.value = this.length;
    } else if (this.value < 0) {
      this.value = 0;
    }
    this.rate = this.convertValue(this.value);
    this.over = this.convertValue(this.value);
  },
};
</script>

<style lang="less">
.tb_rate {
  --activeColor: #efc20f;
  cursor: default;
}
.tb_rate__star.hover {
  color: var(--activeColor);
}
.tb_rate .icon {
  display: inline-block;
  width: 16px;
  height: 16px;
  stroke-width: 0;
  stroke: currentColor;
  fill: currentColor;
  vertical-align: middle;
  top: -2px;
  position: relative;
  margin: 0 5px;
}
.tb_rate__star {
  color: #dedbdb;
  display: inline-block;
  padding: 7px;
  text-decoration: none;
  cursor: pointer;
  background: transparent none;
  border: 0;
}
.tb_rate__star .icon {
  top: 0;
  vertical-align: middle;
}
.tb_rate__star.hover {
  color: var(--activeColor);
}
.tb_rate__star.filled {
  color: var(--activeColor);
}
.tb_rate__star:hover,
.tb_rate__star:focus {
  text-decoration: none;
}
.tb_rate__view .count,
.tb_rate__view .desc {
  display: inline-block;
  vertical-align: middle;
  padding: 7px;
}
/* .tb_rate.has-error .tb_rate__star {
  color: #f37a77;
}
.tb_rate.has-error .tb_rate__star.hover {
  color: #efc20f;
}
.tb_rate.has-error .tb_rate__star.filled {
  color: #efc20f;
} */
.tb_rate__star[disabled] {
  opacity: 0.8;
}
.tb_rate__star.hover[disabled],
.tb_rate__star.filled[disabled] {
  color: var(--activeColor);
  opacity: 0.6;
}
.Rate__view.disabled .count,
.Rate__view.disabled .desc {
  color: #ccc;
}

</style>
