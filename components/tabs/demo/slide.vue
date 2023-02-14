<docs>
---
order: 3
title:
  zh-CN: 滑动
  en-US: Slide
---

## zh-CN

可以左右、上下滑动，容纳更多标签。

## en-US

In order to fit in more tabs, they can slide left and right (or up and down).

</docs>

<template>
  <div>
    <pf-radio-group v-model:value="mode" :style="{ marginBottom: '8px' }">
      <pf-radio-button value="top">Horizontal</pf-radio-button>
      <pf-radio-button value="left">Vertical</pf-radio-button>
    </pf-radio-group>
    <pf-tabs
      v-model:activeKey="activeKey"
      :tab-position="mode"
      :style="{ height: '200px' }"
      @tabScroll="callback"
    >
      <pf-tab-pane v-for="i in 30" :key="i" :tab="`Tab-${i}`">Content of tab {{ i }}</pf-tab-pane>
    </pf-tabs>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import type { TabsProps } from '@pf-ui/pf-ui-vue';

export default defineComponent({
  setup() {
    const mode = ref<TabsProps['tabPosition']>('top');
    const activeKey = ref(1);
    const callback: TabsProps['onTabScroll'] = val => {
      console.log(val);
    };
    return {
      mode,
      callback,
      activeKey,
    };
  },
});
</script>
