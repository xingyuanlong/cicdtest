<docs>
---
order: 5
title:
  zh-CN: 步长选项
  en-US: Interval option
---

## zh-CN

可以使用 `hourStep` `minuteStep` `secondStep` 按步长展示可选的时分秒。

## en-US

Show stepped options by `hourStep` `minuteStep` `secondStep`.

</docs>

<template>
  <pf-time-picker v-model:value="value" :minute-step="15" :second-step="10" />
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const value = ref();
    return {
      value,
    };
  },
});
</script>
