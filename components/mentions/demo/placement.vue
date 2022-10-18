<docs>
---
order: 4
title:
  zh-CN: 向上展开
  en-US: Placemen
---

## zh-CN

向上展开建议。

## en-US

Change the suggestions placement.

</docs>
<template>
  <pf-mentions v-model:value="value" placement="top">
    <pf-mentions-option value="afc163">afc163</pf-mentions-option>
    <pf-mentions-option value="zombieJ">zombieJ</pf-mentions-option>
    <pf-mentions-option value="yesmeck">yesmeck</pf-mentions-option>
  </pf-mentions>
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
