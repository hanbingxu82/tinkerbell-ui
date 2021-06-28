/*
 * @Author: your name
 * @Date: 2021-02-26 14:15:31
 * @LastEditTime: 2021-06-28 09:13:05
 * @LastEditors: Please set LastEditors
 * @Description: 自定义hook函数主要是用于绑定window事件的，与对应的文本变蓝选中等等
 * @FilePath: /adc-da-frame/src/utils/mixins.ts
 */

export default {
  data() {
    return {
      col: [
        {
          label: "参数", // 表格头名称
          align: "center", // 文本对齐方式 'center' | 'right' | 'left'
          field: "Parameters", // 字段对应数组规则
        },
        {
          label: "说明", // 表格头名称
          align: "center", // 文本对齐方式 'center' | 'right' | 'left'
          field: "Explain", // 字段对应数组规则
        },
        {
          label: "类型", // 表格头名称
          align: "center", // 文本对齐方式 'center' | 'right' | 'left'
          field: "Types", // 字段对应数组规则
        },
        {
          label: "可选值", // 表格头名称
          align: "center", // 文本对齐方式 'center' | 'right' | 'left'
          field: "Optional", // 字段对应数组规则
        },
        {
          label: "默认值", // 表格头名称
          align: "center", // 文本对齐方式 'center' | 'right' | 'left'
          field: "Default", // 字段对应数组规则
        },
      ],
      colEvent: [
        {
          label: "方法/事件名称", // 表格头名称
          align: "center", // 文本对齐方式 'center' | 'right' | 'left'
          field: "Parameters", // 字段对应数组规则
        },
        {
          label: "说明", // 表格头名称
          align: "center", // 文本对齐方式 'center' | 'right' | 'left'
          field: "Explain", // 字段对应数组规则
        },
        {
          label: "返回值", // 表格头名称
          align: "center", // 文本对齐方式 'center' | 'right' | 'left'
          field: "Callback", // 字段对应数组规则
        },
      ],
      colSlot: [
        {
          label: "名称", // 表格头名称
          align: "center", // 文本对齐方式 'center' | 'right' | 'left'
          field: "Parameters", // 字段对应数组规则
        },
        {
          label: "说明", // 表格头名称
          align: "center", // 文本对齐方式 'center' | 'right' | 'left'
          field: "Explain", // 字段对应数组规则
        },

      ],
    };
  },
  // 挂载后绑定点击监听
  // 页面加载完成之后
  mounted() {
    let node = window.document.querySelector("." + this.rightTitle[0].id);
    node.style.color = "#409eff";
    //   containers容器
    const containers = window.document.querySelector("#containers");
    containers.onscroll = () => {
      //   获取页面被卷去的高度
      this.rightTitle.forEach((item, index) => {
        let node = window.document.querySelector("#" + item.id);
        let nodetext = window.document.querySelector("." + item.id);
        let nodedowntext = null;
        if (this.rightTitle[index + 1]) {
          nodedowntext = window.document.querySelector("#" + this.rightTitle[index + 1].id);
        }
        if (nodedowntext == null || index + 1 >= this.rightTitle.length) {
          nodedowntext = { offsetTop: containers.scrollHeight };
        }

        if (node) {
          nodetext.style.color = "#606266";
        }
        //   +80是页面导航栏的高度  以及padding 20
        if (node && containers.scrollTop + 80 >= node.offsetTop && containers.scrollTop + 80 < nodedowntext.offsetTop) {
          nodetext.style.color = "#409eff";
        }
      });
      if (containers.scrollTop == 0) {
        let node = window.document.querySelector("." + this.rightTitle[0].id);
        node.style.color = "#409eff";
      }
    };
  },
  // 页面清除之前
  beforeDestroy() {
    if (window.document.querySelector("#containers")) {
      const containers = window.document.querySelector("#containers");
      containers.onscroll = null;
    }
  },
};
