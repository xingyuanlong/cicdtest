<docs>
---
order: 11
title:
  zh-CN: 自定义页签头
  en-US: Customized
---

## zh-CN
自定义页签头

## en-US

Customized bar of tab.

</docs>

<template>
  <div>
    <pf-tabs v-model:activeKey="activeKey">
      <pf-tab-pane key="1" tab="Tab 1" style="height: 200px">Content of Tab Pane 1</pf-tab-pane>
      <pf-tab-pane key="2" tab="Tab 2" force-render>Content of Tab Pane 2</pf-tab-pane>
      <pf-tab-pane key="3" tab="Tab 3">Content of Tab Pane 3</pf-tab-pane>
      <template #renderTabBar="{ DefaultTabBar, ...props }">
        <component :is="DefaultTabBar" v-bind="props" :style="{ opacity: 1 }" />
      </template>
    </pf-tabs>
  </div>
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
