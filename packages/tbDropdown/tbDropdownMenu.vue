<!--
 * @Author: your name
 * @Date: 2021-06-02 15:03:32
 * @LastEditTime: 2021-06-02 15:58:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/packages/tbDropdown/tbDropdownMenu.vue
-->
<template>
  <ul class="tb-dropdown-menu">
    <slot></slot>
  </ul>
</template>
<script>
export default {
  name: 'tbDropdownMenu'
}
</script>