<docs>
---
order: 0
title:
  zh-CN: 基本用法
  en-US: Basic usage
---

## zh-CN

数字输入框。

## en-US

Numeric-only input box.

</docs>

<template>
  <div>
    <pf-input-number id="inputNumber" v-model:value="value1" :min="1" :max="10" />
    当前值：{{ value1 }}
    <br />
    <br />
    <pf-input-number id="inputNumber" v-model:value="value2" :min="1" :max="10"  handlerSize="large" />
    当前值：{{ value2 }}
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const value1 = ref<number>(3);
    const value2 = ref<number>(4);

    return {
      value1,
      value2,
    };
  },
});
</script>
