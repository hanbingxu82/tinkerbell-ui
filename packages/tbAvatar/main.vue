<!--
 * @Author: your name
 * @Date: 2021-05-13 10:41:08
 * @LastEditTime: 2021-05-13 11:51:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/packages/tbAvatar/main.vue
-->
<script>
export default {
  name: "tbAvatar",
  render(h) {
    const { avatarClass, size } = this;
    const sizeStyle =
      typeof size === "number"
        ? {
            height: `${size}px`,
            width: `${size}px`,
            lineHeight: `${size}px`,
          }
        : {};
    return (
      <span class={avatarClass} style={sizeStyle}>
        {this.renderAvatar(h)}
      </span>
    );
  },
  props: {
    size: {
      type: [Number, String],
      validator(val) {
        if (typeof val === "string") {
          return ["large", "medium", "small"].includes(val);
        }
        return typeof val === "number";
      },
    },
    shape: {
      type: String,
      default: "circle",
      validator(val) {
        return ["circle", "square"].includes(val);
      },
    },
    icon: String,
    src: String,
    alt: String,
    srcSet: String,
    error: Function,
    abc: Function,
    fit: {
      type: String,
      default: "cover",
    },
  },
  created() {
    if (this.abc) {
      this.abc();
    }
  },
  data() {
    return {
      isImageExist: true,
    };
  },
  computed: {
    avatarClass() {
      const { size, icon, shape } = this;
      let classList = ["tb-avatar"];
      if (size && typeof size === "string") {
        classList.push(`tb-avatar--${size}`);
      }
      if (icon) {
        classList.push("tb-avatar--icon");
      }
      if (shape) {
        classList.push(`tb-avatar--${shape}`);
      }
      return classList.join(" ");
    },
  },
  methods: {
    // 错误回调  因为传递进来的是error函数
    handleError() {
      const { error } = this;
      const errorFlag = error ? error() : undefined;
      if (errorFlag !== false) {
        this.isImageExist = false;
      }
    },
    renderAvatar(h) {
      // 拆出取对应props中的数值
      const { icon, src, alt, isImageExist, srcSet, fit } = this;
      if (isImageExist && src) {
        // onError事件对标传递进来的错误回调   srcSet 动态相当于响应式对应图像 使用,分割  object-fit 按照位置剪切
        return <img src={src} onError={this.handleError} alt={alt} srcSet={srcSet} style={{ "object-fit": fit }} />;
      }
      if (icon) {
        // 如果是图标
        return <i class={`iconfont ${icon}`} />;
      }
      // 如果是文本
      return this.$slots.default;
    },
  },
};
</script>
<style scoped>
.tb-avatar--circle {
  border-radius: 50%;
}
.tb-avatar--square {
  border-radius: 4px;
}
.tb-avatar {
  display: inline-block;
  box-sizing: border-box;
  text-align: center;
  overflow: hidden;
  color: #fff;
  background: #c0c4cc;
  width: 40px;
  height: 40px;
  line-height: 40px;
  font-size: 14px;
}
.tb-avatar--large {
  width: 40px;
  height: 40px;
  line-height: 40px;
}
.tb-avatar--medium {
  width: 36px;
  height: 36px;
  line-height: 36px;
}
.tb-avatar--small {
  width: 28px;
  height: 28px;
  line-height: 28px;
}
.tb-avatar > img {
  display: block;
  height: 100%;
  vertical-align: middle;
}
.tb-avatar--icon {
  font-size: 18px;
}
</style>
