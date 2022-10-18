<docs>
---
order: 2
title:
  zh-CN: 居中
  en-US: Centered
---

## zh-CN

标签居中展示。

## en-US

Centered tabs.

</docs>

<template>
  <pf-tabs v-model:activeKey="activeKey" centered>
    <pf-tab-pane key="1" tab="Tab 1">Content of Tab Pane 1</pf-tab-pane>
    <pf-tab-pane key="2" tab="Tab 2" force-render>Content of Tab Pane 2</pf-tab-pane>
    <pf-tab-pane key="3" tab="Tab 3">Content of Tab Pane 3</pf-tab-pane>
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
