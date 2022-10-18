<docs>
---
order: 1
title:
  zh-CN: 禁用
  en-US: Disabled
---

## zh-CN

禁用某一项。

## en-US

Disabled a tab.

</docs>

<template>
  <pf-tabs v-model:activeKey="activeKey">
    <pf-tab-pane key="1" tab="Tab 1">Tab 1</pf-tab-pane>
    <pf-tab-pane key="2" tab="Tab 2" disabled>Tab 2</pf-tab-pane>
    <pf-tab-pane key="3" tab="Tab 3">Tab 3</pf-tab-pane>
  </pf-tabs>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    return {
      activeKey: ref('1'),
    };
  },
});
</script>
