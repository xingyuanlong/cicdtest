<docs>
---
order: 1
title:
  zh-CN: 范围选择器
  en-US: Range Picker
---

## zh-CN

通过设置 `picker` 属性，指定范围选择器类型。

## en-US

Set range picker type by `picker` prop.

</docs>

<template>
  <pf-space direction="vertical" :size="12">
    <pf-range-picker v-model:value="value1" />
    <pf-range-picker v-model:value="value2" show-time />
    <pf-range-picker v-model:value="value3" picker="week" />
    <pf-range-picker v-model:value="value4" picker="month" />
    <pf-range-picker v-model:value="value5" picker="year" />
  </pf-space>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import type { Dayjs } from 'dayjs';
type RangeValue = [Dayjs, Dayjs];
export default defineComponent({
  setup() {
    return {
      value1: ref<RangeValue>(),
      value2: ref<RangeValue>(),
      value3: ref<RangeValue>(),
      value4: ref<RangeValue>(),
      value5: ref<RangeValue>(),
    };
  },
});
</script>
