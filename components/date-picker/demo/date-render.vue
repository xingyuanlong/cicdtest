<docs>
---
order: 9
title:
  zh-CN: 定制日期单元格
  en-US: Customized Date Rendering
---

## zh-CN

使用 `dateRender` 可以自定义日期单元格的内容和样式。

## en-US

We can customize the rendering of date cells in the calendar by providing a `dateRender` function to `DatePicker`.

</docs>
<template>
  <pf-space direction="vertical" :size="12">
    <pf-date-picker v-model:value="value1">
      <template #dateRender="{ current }">
        <div class="ant-picker-cell-inner" :style="getCurrentStyle(current)">
          {{ current.date() }}
        </div>
      </template>
    </pf-date-picker>
    <pf-range-picker v-model:value="value2">
      <template #dateRender="{ current }">
        <div class="ant-picker-cell-inner" :style="getCurrentStyle(current)">
          {{ current.date() }}
        </div>
      </template>
    </pf-range-picker>
  </pf-space>
</template>
<script lang="ts">
import type { Dayjs } from 'dayjs';
import { defineComponent, ref } from 'vue';
import type { CSSProperties } from 'vue';
export default defineComponent({
  setup() {
    const getCurrentStyle = (current: Dayjs) => {
      const style: CSSProperties = {};

      if (current.date() === 1) {
        style.border = '1px solid #1890ff';
        style.borderRadius = '50%';
      }

      return style;
    };
    return {
      value1: ref<Dayjs>(),
      value2: ref<[Dayjs, Dayjs]>(),
      value3: ref<Dayjs>(),
      getCurrentStyle,
    };
  },
});
</script>
