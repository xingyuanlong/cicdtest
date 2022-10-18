<docs>
---
order: 3
title:
  zh-CN: 填底的按钮样式
  en-US: Solid radio button
---

## zh-CN

实色填底的单选按钮样式。

## en-US

Solid radio button style.

</docs>
<template>
  <div>
    <div>
      <pf-radio-group v-model:value="value1" button-style="solid">
        <pf-radio-button value="a">Hangzhou</pf-radio-button>
        <pf-radio-button value="b">Shanghai</pf-radio-button>
        <pf-radio-button value="c">Beijing</pf-radio-button>
        <pf-radio-button value="d">Chengdu</pf-radio-button>
      </pf-radio-group>
    </div>
    <div :style="{ marginTop: '16px' }">
      <pf-radio-group v-model:value="value2" button-style="solid">
        <pf-radio-button value="a">Hangzhou</pf-radio-button>
        <pf-radio-button value="b" disabled>Shanghai</pf-radio-button>
        <pf-radio-button value="c">Beijing</pf-radio-button>
        <pf-radio-button value="d">Chengdu</pf-radio-button>
      </pf-radio-group>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const value1 = ref<string>('a');
    const value2 = ref<string>('c');
    return {
      value1,
      value2,
    };
  },
});
</script>
