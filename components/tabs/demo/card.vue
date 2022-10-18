<docs>
---
order: 7
title:
  zh-CN: 卡片式页签
  en-US: Card type tab
---

## zh-CN

另一种样式的页签，不提供对应的垂直样式。

## en-US

Another type Tabs, which doesn't support vertical mode.

</docs>

<template>
  <pf-tabs v-model:activeKey="activeKey" type="card">
    <pf-tab-pane key="1" tab="Tab 1">Content of Tab Pane 1</pf-tab-pane>
    <pf-tab-pane key="2" tab="Tab 2">Content of Tab Pane 2</pf-tab-pane>
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
