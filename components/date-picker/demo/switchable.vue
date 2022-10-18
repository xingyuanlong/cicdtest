<docs>
---
order: 1.1
title:
  zh-CN: 切换不同的选择器
  en-US: Switchable picker
---

## zh-CN

提供选择器，自由切换不同类型的日期选择器，常用于日期筛选场合。

## en-US

Switch in different types of pickers by Select.
</docs>
<template>
  <pf-space direction="vertical" :size="12">
    <pf-select v-model:value="type">
      <pf-select-option value="time">Time</pf-select-option>
      <pf-select-option value="date">Date</pf-select-option>
      <pf-select-option value="week">Week</pf-select-option>
      <pf-select-option value="month">Month</pf-select-option>
      <pf-select-option value="quarter">Quarter</pf-select-option>
      <pf-select-option value="year">Year</pf-select-option>
    </pf-select>
    <template v-if="type === 'time'">
      <pf-time-picker />
    </template>
    <template v-else>
      <pf-date-picker :picker="type" />
    </template>
  </pf-space>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    return {
      type: ref<any>('time'),
    };
  },
});
</script>
