<docs>
---
order: 10
title:
  zh-CN: 额外操作
  en-US: Operation
---

## zh-CN

点击图标下拉展示操作列表。

## en-US

Operation

</docs>

<template>
  <pf-tree
    :tree-data="treeData"
    :operation="operations"
    :multiple="true"
  >
  </pf-tree>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

const treeData = [
  {
    title: '0-0',
    key: '0-0',
    hideOperation: true,
    children: [
      {
        title: '0-0-0',
        key: '0-0-0',
        children: [
          { title: '0-0-0-0', key: '0-0-0-0' },
          { title: '0-0-0-1', key: '0-0-0-1', disabled: true },
          { title: '0-0-0-2', key: '0-0-0-2', disableOperation: true },
        ],
      },
      {
        title: '0-0-1',
        key: '0-0-1',
        children: [
          { title: '0-0-1-0', key: '0-0-1-0' },
          { title: '0-0-1-1', key: '0-0-1-1' },
          { title: '0-0-1-2', key: '0-0-1-2' },
        ],
      },
    ],
  },
];

const operations = [
  {
    title: '操作1',
    onClick: (key: string, data: any) => console.log('操作1', key, data)
  },
  {
    title: '操作2',
    onClick: () => console.log('操作2'),
    isDisabled: (key: string) => key === '0-0-1-0'
  },
  {
    title: '操作3',
    onClick: () => console.log('操作3')
  }
]
export default defineComponent({
  setup() {
    return {
      treeData,
      operations
    };
  },
});
</script>

<style></style>
