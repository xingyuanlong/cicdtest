<docs>
---
order: 7
title:
  zh-CN: 单选组合
  en-US: Radio Group
---

## zh-CN

一组互斥的 Radio 配合使用。

## en-US

A group of radio components.

</docs>
<template>
  <div>
    <pf-radio-group v-model:value="value">
      <pf-radio :value="1">A</pf-radio>
      <pf-radio :value="2">B</pf-radio>
      <pf-radio :value="3">C</pf-radio>
      <pf-radio :value="4">D</pf-radio>
    </pf-radio-group>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const value = ref<number>(1);
    return {
      value,
    };
  },
});
</script>
