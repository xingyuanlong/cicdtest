<docs>
---
order: 6
title:
  zh-CN: 位置
  en-US: Position
---

## zh-CN

有四个位置，`tabPosition="left|right|top|bottom"`。在移动端下，`bottom|right` 会自动切换成 `top`。

## en-US

Tab's position: left, right, top or bottom.  Will auto switch to `top` in mobile.

</docs>

<template>
  <pf-radio-group v-model:value="tabPosition" style="margin: 8px">
    <pf-radio-button value="top">top</pf-radio-button>
    <pf-radio-button value="bottom">bottom</pf-radio-button>
    <pf-radio-button value="left">left</pf-radio-button>
    <pf-radio-button value="right">right</pf-radio-button>
  </pf-radio-group>
  <pf-tabs v-model:activeKey="activeKey" :tab-position="tabPosition" animated>
    <pf-tab-pane key="1" tab="Tab 1">Content of Tab 1</pf-tab-pane>
    <pf-tab-pane key="2" tab="Tab 2">Content of Tab 2</pf-tab-pane>
    <pf-tab-pane key="3" tab="Tab 3">Content of Tab 3</pf-tab-pane>
  </pf-tabs>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { TabsProps } from '..';

export default defineComponent({
  setup() {
    const tabPosition = ref<TabsProps['tabPosition']>('top');
    const activeKey = ref('1');

    return {
      tabPosition,
      activeKey,
    };
  },
});
</script>
