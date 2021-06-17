<!--
 * @Author: your name
 * @Date: 2021-06-17 14:46:28
 * @LastEditTime: 2021-06-17 14:48:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/packages/tbDatePicker/panel/Date/date-panel-label.vue
-->
<template>
    <span>
        <span
            v-if="datePanelLabel"
            v-show="datePanelLabel.labels[0].type === 'year' || currentView === 'date'"
            :class="[datePrefixCls + '-header-label']"
            @click="datePanelLabel.labels[0].handler">{{ datePanelLabel.labels[0].label }}</span>
        <template v-if="datePanelLabel && currentView === 'date'">{{ datePanelLabel.separator }}</template>
        <span
            v-if="datePanelLabel"
            v-show="datePanelLabel.labels[1].type === 'year' || currentView === 'date'"
            :class="[datePrefixCls + '-header-label']"
            @click="datePanelLabel.labels[1].handler">{{ datePanelLabel.labels[1].label }}</span>
    </span>
</template>

<script>
export default {
  props: {
    datePanelLabel: Object,
    currentView: String,
    datePrefixCls: String
  }
}
</script>
