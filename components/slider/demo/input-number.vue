<docs>
---
order: 1
title:
  zh-CN: 带输入框的滑块
  en-US: Slider with InputNumber
---

## zh-CN

和 [数字输入框](/components/input-number/) 组件保持同步。

## en-US

Synchronize with [InputNumber](/components/input-number/) component.
</docs>

<template>
  <div>
    <pf-row>
      <pf-col :span="12">
        <pf-slider v-model:value="inputValue1" :min="1" :max="20" />
      </pf-col>
      <pf-col :span="4">
        <pf-input-number v-model:value="inputValue1" :min="1" :max="20" style="margin-left: 16px" />
      </pf-col>
    </pf-row>
    <pf-row>
      <pf-col :span="12">
        <pf-slider v-model:value="inputValue" :min="0" :max="1" :step="0.01" />
      </pf-col>
      <pf-col :span="4">
        <pf-input-number
          v-model:value="inputValue"
          :min="0"
          :max="1"
          :step="0.01"
          style="margin-left: 16px"
        />
      </pf-col>
    </pf-row>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const inputValue = ref<number>(0);
    const inputValue1 = ref<number>(1);
    return {
      inputValue,
      inputValue1,
    };
  },
});
</script>
<style scoped>
.code-box-demo .ant-slider {
  margin-bottom: 16px;
}
</style>
