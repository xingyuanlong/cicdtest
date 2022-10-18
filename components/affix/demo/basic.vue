<docs>
---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
---

## zh-CN

最简单的用法。

## en-US

The simplest usage.

</docs>

<template>
  <pf-affix :offset-top="top">
    <pf-button type="primary" @click="top += 10">Affix top</pf-button>
  </pf-affix>
  <br />
  <pf-affix :offset-bottom="bottom">
    <pf-button type="primary" @click="bottom += 10">Affix bottom</pf-button>
  </pf-affix>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const top = ref<number>(10);
    const bottom = ref<number>(10);
    return {
      top,
      bottom,
    };
  },
});
</script>
