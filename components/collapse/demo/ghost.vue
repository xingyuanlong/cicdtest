<docs>
---
order: 6
title:
  zh-CN: 幽灵折叠面板
  en-US: Ghost Collapse
---

## zh-CN

将折叠面板的背景变成透明。

## en-US

Making collapse's background to transparent.

</docs>

<template>
  <pf-collapse v-model:activeKey="activeKey" ghost>
    <pf-collapse-panel key="1" header="This is panel header 1">
      <p>{{ text }}</p>
    </pf-collapse-panel>
    <pf-collapse-panel key="2" header="This is panel header 2">
      <p>{{ text }}</p>
    </pf-collapse-panel>
    <pf-collapse-panel key="3" header="This is panel header 3" collapsible="disabled">
      <p>{{ text }}</p>
    </pf-collapse-panel>
  </pf-collapse>
</template>
<script lang="ts">
import { defineComponent, ref, watch } from 'vue';

export default defineComponent({
  setup() {
    const text = `A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.`;
    const activeKey = ref(['1']);

    watch(activeKey, val => {
      console.log(val);
    });

    return {
      text,
      activeKey,
    };
  },
});
</script>
