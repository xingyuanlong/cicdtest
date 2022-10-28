<docs>
---
order: 3
title:
  zh-CN: 可勾选
  en-US: Checkable
---

## zh-CN

使用勾选框实现多选功能。

## en-US

Multiple and checkable.

</docs>
<template>
  <pf-tree-select
    v-model:value="value"
    style="width: 100%"
    :tree-data="treeData"
    tree-checkable
    allow-clear
    :treeIcon='false'
    :show-checked-strategy="SHOW_PARENT"
    placeholder="Please select"
  />
</template>
<script lang="ts">
import type { TreeSelectProps } from 'pf-ui-vue';
import { defineComponent, ref, watch } from 'vue';
import { PfTreeSelect } from 'pf-ui-vue';
const SHOW_PARENT = PfTreeSelect.SHOW_PARENT;

const treeData: TreeSelectProps['treeData'] = [
  {
    title: 'Node1',
    value: '0-0',
    children: [
      {
        title: 'Child Node1',
        value: '0-0-0',
      },
    ],
  },
  {
    title: 'Node2',
    value: '0-1',

    children: [
      {
        title: 'Child Node3',
        value: '0-1-0',
        disabled: true,
      },
      {
        title: 'Child Node4',
        value: '0-1-1',
      },
      {
        title: 'Child Node5',
        value: '0-1-2',
      },
    ],
  },
];
export default defineComponent({
  setup() {
    const value = ref<string[]>(['0-0-0']);

    watch(value, () => {
      console.log(value.value);
    });

    return {
      value,
      treeData,
      SHOW_PARENT,
    };
  },
});
</script>
