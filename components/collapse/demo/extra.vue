<docs>
---
order: 6
title:
  zh-CN: 额外节点
  en-US: Extra node
---

## zh-CN

可以同时展开多个面板，这个例子默认展开了第一个。

## en-US

More than one panel can be expanded at a time, the first panel is initialized to be active in this case.

</docs>

<template>
  <pf-collapse v-model:activeKey="activeKey" :expand-icon-position="expandIconPosition">
    <pf-collapse-panel key="1" header="This is panel header 1">
      <p>{{ text }}</p>
      <template #extra><setting-outlined @click="handleClick" /></template>
    </pf-collapse-panel>
    <pf-collapse-panel key="2" header="This is panel header 2">
      <p>{{ text }}</p>
      <template #extra><setting-outlined @click="handleClick" /></template>
    </pf-collapse-panel>
    <pf-collapse-panel key="3" header="This is panel header 3" collapsible="disabled">
      <p>{{ text }}</p>
      <template #extra><setting-outlined @click="handleClick" /></template>
    </pf-collapse-panel>
  </pf-collapse>
  <br />
  <span>Expand Icon Position:</span>
  <pf-select v-model:value="expandIconPosition">
    <pf-select-option value="left">left</pf-select-option>
    <pf-select-option value="right">right</pf-select-option>
  </pf-select>
</template>
<script lang="ts">
import { SettingOutlined } from '@ant-design/icons-vue';
import { defineComponent, ref, watch } from 'vue';
import type { CollapseProps } from 'pf-ui-vue';

export default defineComponent({
  components: {
    SettingOutlined,
  },
  setup() {
    const text = `A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.`;
    const activeKey = ref(['1']);
    const expandIconPosition = ref<CollapseProps['expandIconPosition']>('left');

    const handleClick = (event: MouseEvent) => {
      // If you don't want click extra trigger collapse, you can prevent this:
      event.stopPropagation();
    };
    watch(activeKey, val => {
      console.log(val);
    });

    return {
      text,
      activeKey,
      expandIconPosition,
      handleClick,
    };
  },
});
</script>
