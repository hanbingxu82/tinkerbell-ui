<!--
 * @Author: your name
 * @Date: 2021-05-27 17:00:24
 * @LastEditTime: 2021-06-29 17:14:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/packages/tbUpload/uploadList.vue
-->
<template>
  <ul :class="[prefixCls + '-list']">
    <li v-for="(file, index) in files" :key="index" :class="fileCls(file)" @click="handleClick(file)">
      <span @click="handlePreview(file)"> <i :class="`iconfont ${format(file)}`"></i> {{ file.name }} </span>
      <i name="icon-close" class="iconfont icon-close tb-upload-list-remove" v-show="file.status === 'finished'" @click="handleRemove(file)"></i>
      <transition name="fade">
        <!-- 初始加载时进度条是0  当加载成功之后对应的加载也就变成了100 -->
        <tb-progress v-if="file.showProgress" :line-height="2" :status="file.status === 'finished' && file.showProgress ? 'success' : null" :percent="parsePercentage(file.percentage)"></tb-progress>
      </transition>
    </li>
  </ul>
</template>

<script>
const prefixCls = "tb-upload";

export default {
  name: "tbUploadList",
  props: {
    files: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      prefixCls: prefixCls,
    };
  },
  methods: {
    fileCls(file) {
      // 对应已完成的是一个新增的file-finish  其他的就是普通状态
      return [
        `${prefixCls}-list-file`,
        {
          [`${prefixCls}-list-file-finish`]: file.status === "finished",
        },
      ];
    },
    // 此处可以不使，将其区分为两个  handlePreview、handleRemove
    handleClick(file) {
      this.$emit("file-click", file);
    },
    // 单击li标签时触发的事件
    handlePreview(file) {
      this.$emit("file-preview", file);
    },
    // 单击删除时触发的事件
    handleRemove(file) {
      this.$emit("file-remove", file);
    },
    format(file) {
      // 根据文件名称来判断分类  如果是属于对应的后缀名  对应的icon展示图标就变更
      const format =
        file.name
          .split(".")
          .pop()
          .toLocaleLowerCase() || "";
      let type = "icon-file";

      if (["gif", "jpg", "jpeg", "png", "bmp", "webp"].indexOf(format) > -1) {
        type = "icon-image-text";
      }
      if (["mp4", "m3u8", "rmvb", "avi", "swf", "3gp", "mkv", "flv"].indexOf(format) > -1) {
        type = "icon-film";
      }
      if (["mp3", "wav", "wma", "ogg", "aac", "flac"].indexOf(format) > -1) {
        type = "icon-mic";
      }
      if (["doc", "txt", "docx", "pages", "epub", "pdf"].indexOf(format) > -1) {
        type = "icon-file";
      }
      if (["numbers", "csv", "xls", "xlsx"].indexOf(format) > -1) {
        type = "icon-file-common";
      }
      if (["keynote", "ppt", "pptx"].indexOf(format) > -1) {
        type = "icon-history";
      }

      return type;
    },
    parsePercentage(val) {
      // 使用10进制去解析数值
      return parseInt(val, 10);
    },
  },
};
</script>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s cubic-bezier(0.55, 0, 0.1, 1);
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

</style>
