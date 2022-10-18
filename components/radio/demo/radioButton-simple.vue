<docs>
---
order: 3
title:
  zh-CN: 简约的按钮样式
  en-US: simple radio button
---

## zh-CN

简约的单选按钮样式。

## en-US

simple radio button style.

</docs>
<template>
  <div>
    <div>
      <pf-radio-group v-model:value="value1" button-style="simple">
        <pf-radio-button value="a">Hangzhou</pf-radio-button>
        <pf-radio-button value="b">Shanghai</pf-radio-button>
        <pf-radio-button value="c">Beijing</pf-radio-button>
      </pf-radio-group>
    </div> 
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const value1 = ref<string>('a');
    return {
      value1,
    };
  },
});
</script>
 
<style scoped>
 /* 建议使用时主动设置宽带,避免字体加粗,导致宽度变化. */
  .ant-radio-button-wrapper {
    width: 114px;
    text-align: center;
  }
</style>
