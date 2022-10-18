<docs>
---
order: 4
title:
  zh-CN: RadioGroup 垂直
  en-US: Vertical RadioGroup
---

## zh-CN

垂直的 RadioGroup，配合更多输入框选项。

## en-US

Vertical RadioGroup, with more radios.

</docs>
<template>
  <pf-radio-group v-model:value="value">
    <pf-radio :style="radioStyle" :value="1">Option A</pf-radio>
    <pf-radio :style="radioStyle" :value="2">Option B</pf-radio>
    <pf-radio :style="radioStyle" :value="3">Option C</pf-radio>
    <pf-radio :style="radioStyle" :value="4">
      More...
      <pf-input v-if="value === 4" style="width: 100px; margin-left: 10px" />
    </pf-radio>
  </pf-radio-group>
</template>
<script lang="ts">
import { defineComponent, reactive, ref } from 'vue';
export default defineComponent({
  setup() {
    const value = ref<number>(1);
    const radioStyle = reactive({
      display: 'flex',
      height: '30px',
      lineHeight: '30px',
    });

    return {
      value,
      radioStyle,
    };
  },
});
</script>
