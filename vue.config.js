/*
 * @Author: 韩炳旭
 * @Date: 2021-03-16 13:48:45
 * @LastEditTime: 2021-03-16 13:53:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/ vue.config.js
 */
module.exports = {
    // 将 examples 目录添加为新的页面
    pages: {
      index: {
        // page 的入口
        entry: 'examples/main.js',
        // 模板来源
        template: 'public/index.html',
        // 输出文件名
        filename: 'index.html'
      }
    }
  }