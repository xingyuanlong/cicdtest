<docs>
---
order: 3
title:
  zh-CN: 简洁风格
  en-US: Borderless
---

## zh-CN

一套没有边框的简洁样式。

## en-US

A borderless style of Collapse.

</docs>

<template>
  <pf-collapse v-model:activeKey="activeKey" :bordered="false">
    <pf-collapse-panel key="1" header="This is panel header 1">
      <p>{{ text }}</p>
    </pf-collapse-panel>
    <pf-collapse-panel key="2" header="This is panel header 2">
      <p>{{ text }}</p>
    </pf-collapse-panel>
    <pf-collapse-panel key="3" header="This is panel header 3">
      <p>{{ text }}</p>
    </pf-collapse-panel>
  </pf-collapse>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const activeKey = ref(['1']);
    const text = `A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.`;
    return {
      activeKey,
      text,
    };
  },
});
</script>
