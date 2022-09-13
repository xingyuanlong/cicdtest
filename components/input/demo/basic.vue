<docs>
---
order: 0
title:
  zh-CN: 基本用法
  en-US: Basic usage
---

## zh-CN

基本用法。

## en-US

Basic usage example.

</docs>
<template>
  <a-input v-model:value="value" placeholder="Basic usage" />
  <div style="margin: 24px 0" />
  <a-input disabled placeholder="Basic usage disable" value="你好" />
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const value = ref<string>('');
    return {
      value,
    };
  },
});
</script>
