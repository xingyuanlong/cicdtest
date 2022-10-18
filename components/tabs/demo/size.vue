<docs>
---
order: 5
title:
  zh-CN: 大小
  en-US: Size
---

## zh-CN

大号页签用在页头区域，小号用在弹出框等较狭窄的容器内。

## en-US
Large size tabs are usally used in page header, and small size could be used in Modal.

</docs>

<template>
  <div>
    <pf-radio-group v-model:value="size" style="margin-bottom: 16px">
      <pf-radio-button value="small">Small</pf-radio-button>
      <pf-radio-button value="default">Default</pf-radio-button>
      <pf-radio-button value="large">Large</pf-radio-button>
    </pf-radio-group>
    <pf-tabs v-model:activeKey="activeKey" :size="size">
      <pf-tab-pane key="1" tab="Tab 1">Content of tab 1</pf-tab-pane>
      <pf-tab-pane key="2" tab="Tab 2">Content of tab 2</pf-tab-pane>
      <pf-tab-pane key="3" tab="Tab 3">Content of tab 3</pf-tab-pane>
    </pf-tabs>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import type { TabsProps } from 'pf-ui-vue';

export default defineComponent({
  setup() {
    const size = ref<TabsProps['size']>('small');
    const activeKey = ref('1');
    return {
      size,
      activeKey,
    };
  },
});
</script>
