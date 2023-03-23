<docs>
---
order: 11
title:
  zh-CN: 复杂的自定义额外操作。
  en-US: Complex Custom Operation
---

## zh-CN

复杂的自定义额外操作。

## en-US

Complex Custom Operation

</docs>

<template>
  <pf-tree
    :tree-data="treeData"
    :multiple="true"
  >
  <template #operation="{ key, operationDisabled, data }">
    <pf-popover
      v-if="popoverVisibleKey"
      placement="bottom"
      arrow
      trigger="click"
      :disabled="operationDisabled"
      :getPopupContainer="triggerNode => triggerNode"
      :visible="popoverVisibleKey === key"
      :onVisibleChange="handlePopoverVisibleChange(key)"
    >
      <template #content>
        content
      </template>
      <pf-tree-operation-icon :disabled="operationDisabled" :visible="popoverVisibleKey === key" />
    </pf-popover>
    <pf-dropdown
      v-else
      placement="bottom"
      arrow
      trigger="click"
      :disabled="operationDisabled"
      :getPopupContainer="triggerNode => triggerNode"
      :visible="operationVisibleKey === key"
      :onVisibleChange="handleVisibleChange(key)"
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
      <pf-tree-operation-icon :disabled="operationDisabled" :visible="operationVisibleKey === key" />
    </pf-dropdown>
  </template>
  </pf-tree>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const operationVisibleKey = ref<string>()

const popoverVisibleKey = ref<string>()

const handleVisibleChange = (key?: string) => (value?: boolean) => operationVisibleKey.value = value ? key : undefined

const handlePopoverVisibleChange = (key?: string) => (value?: boolean) => popoverVisibleKey.value = value ? key : undefined

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
    onClick: (key: string, data: any) => {
      popoverVisibleKey.value = key
      operationVisibleKey.value = undefined
      console.log('操作1', key, data, popoverVisibleKey.value)
    }
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
  