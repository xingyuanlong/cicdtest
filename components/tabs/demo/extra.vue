<docs>
---
order: 4
title:
  zh-CN: 附加内容
  en-US: Extra Content
---

## zh-CN

可以在页签右边添加附加操作。

## en-US

You can add extra actions to the right of Tabs.

</docs>

<template>
  <pf-tabs v-model:activeKey="activeKey">
    <pf-tab-pane key="1" tab="Tab 1">Content of tab 1</pf-tab-pane>
    <pf-tab-pane key="2" tab="Tab 2">Content of tab 2</pf-tab-pane>
    <pf-tab-pane key="3" tab="Tab 3">Content of tab 3</pf-tab-pane>
    <template #leftExtra>
      <pf-button class="tabs-extra-demo-button">Left Extra Action</pf-button>
    </template>
    <template #rightExtra>
      <pf-button>Right Extra Action</pf-button>
    </template>
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
<style>
.tabs-extra-demo-button {
  margin-right: 16px;
}

.ant-row-rtl .tabs-extra-demo-button {
  margin-right: 0;
  margin-left: 16px;
}
</style>
