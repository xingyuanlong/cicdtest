<docs>
---
order: 1
title:
  zh-CN: 手风琴
  en-US: Accordion
---

## zh-CN

手风琴，每次只打开一个 tab。

## en-US

In accordion mode, only one panel can be expanded at a time.

</docs>

<template>
  <pf-collapse v-model:activeKey="activeKey" accordion>
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
    const activeKey = ref([]);
    const text = `A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.`;

    return {
      activeKey,
      text,
    };
  },
});
</script>
