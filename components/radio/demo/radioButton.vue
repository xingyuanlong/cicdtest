<docs>
---
order: 2
title:
  zh-CN: 按钮样式
  en-US: radio style
---

## zh-CN

按钮样式的单选组合。

## en-US

The combination of radio button style.

</docs>
<template>
  <div>
    <div>
      <pf-radio-group v-model:value="value1">
        <pf-radio-button value="a">Hangzhou</pf-radio-button>
        <pf-radio-button value="b">Shanghai</pf-radio-button>
        <pf-radio-button value="c">Beijing</pf-radio-button>
        <pf-radio-button value="d">Chengdu</pf-radio-button>
      </pf-radio-group>
    </div>
    <div :style="{ marginTop: '16px' }">
      <pf-radio-group v-model:value="value2">
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
    const value2 = ref<string>('a');

    return {
      value1,
      value2,
    };
  },
});
</script>
