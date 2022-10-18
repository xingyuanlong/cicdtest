<docs>
---
order: 0
title:
  zh-CN: 基本用法
  en-US: Basic Usage
---

## zh-CN

最简单的用法，在浮层中可以选择或者输入日期。

## en-US

Basic use case. Users can select or input a date in panel.

</docs>

<template>
  <pf-space direction="vertical" :size="12">
    <pf-date-picker v-model:value="value1" />
    <pf-date-picker v-model:value="value2" picker="week" />
    <pf-date-picker v-model:value="value3" picker="month" />
    <pf-date-picker v-model:value="value4" picker="quarter" />
    <pf-date-picker v-model:value="value5" picker="year" />
  </pf-space>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import type { Dayjs } from 'dayjs';
export default defineComponent({
  setup() {
    return {
      value1: ref<Dayjs>(),
      value2: ref<Dayjs>(),
      value3: ref<Dayjs>(),
      value4: ref<Dayjs>(),
      value5: ref<Dayjs>(),
    };
  },
});
</script>
