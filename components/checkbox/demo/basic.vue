<docs>
---
order: 0
title:
  zh-CN: 基本用法
  en-US: Basic
---

## zh-CN

简单的 checkbox

## en-US

Basic usage of checkbox

</docs>

<template>
  <pf-checkbox v-model:checked="checked">Checkbox</pf-checkbox>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    return {
      checked: ref(false),
    };
  },
});
</script>
