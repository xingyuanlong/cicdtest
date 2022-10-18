<docs>
---
order: 8
title:
  zh-CN: 三种大小
  en-US: Three Sizes
---

## zh-CN

三种大小的输入框，若不设置，则为 `default`。

## en-US

The input box comes in three sizes. `default` will be used if `size` is omitted.

</docs>

<template>
  <pf-space direction="vertical" :size="12">
    <pf-radio-group v-model:value="size">
      <pf-radio-button value="large">Large</pf-radio-button>
      <pf-radio-button value="default">Default</pf-radio-button>
      <pf-radio-button value="small">Small</pf-radio-button>
    </pf-radio-group>
    <pf-date-picker :size="size" />
    <pf-date-picker :size="size" placeholder="Select Month" picker="month" />
    <pf-range-picker :size="size" />
    <pf-date-picker :size="size" placeholder="Select Week" picker="week" />
  </pf-space>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    return {
      size: ref<any>('default'),
    };
  },
});
</script>
