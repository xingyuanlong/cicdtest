<docs>
---
order: 10
title:
  zh-CN: 自定义额外操作。
  en-US: Custom Operation
---

## zh-CN

自定义额外操作。

## en-US

Custom Operation

</docs>

<template>
  <pf-tree
    :tree-data="treeData"
    :multiple="true"
  >
  <template #operation="{ key, operationDisabled, operationVisibleKey, setOperationVisibleKey, data }">
    <pf-dropdown
      placement="bottom"
      arrow
      trigger="click"
      :disabled="operationDisabled"
      :getPopupContainer="triggerNode => triggerNode"
      :visible="operationVisibleKey.value === key"
      :onVisibleChange="v => setOperationVisibleKey(operationVisibleKey.value = v ? key : undefined)"
    >
      <template #overlay>
        <pf-menu class="operation-menu">
          <pf-menu-item
            v-for="item in operations"
            :key="item.title"
            @click="item.onClick && item.onClick(key, data)"
            class="operation-menu-item"
            :disabled="item.isDisabled && item.isDisabled(key)"
          >
            {{ item.title }}
          </pf-menu-item>
        </pf-menu>
      </template>
      <pf-tree-operation-icon :disabled="operationDisabled" :visible="operationVisibleKey.value === key" />
    </pf-dropdown>
  </template>
  </pf-tree>
</template>

<script lang="ts" setup>

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
</script>

<style>
.operation-menu {
  padding: 0;
}

.operation-menu-item {
  padding: 9px 6px;
  min-width: 100px !important;
  text-align: center;
}
</style>
