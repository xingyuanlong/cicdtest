<docs>
---
order: 0
title:
  zh-CN: 基本用法
  en-US: Basic usage
---

## zh-CN

最简单的用法。

## en-US

The simplest usage.

</docs>
<template>
  <pf-radio v-model:checked="checked">Radio</pf-radio>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const checked = ref<boolean>(false);
    return {
      checked,
    };
  },
});
</script>
