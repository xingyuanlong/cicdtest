<docs>
---
order: 4
title:
  zh-CN: Avatar.Group
  en-US: Avatar.Group
---

## zh-CN

头像组合展现。

## en-US

Avatar group display.
</docs>

<template>
  <pf-avatar-group>
    <pf-avatar src="https://joeschmoe.io/api/v1/random" />
    <pf-avatar style="background-color: #f56a00">K</pf-avatar>
    <pf-tooltip title="Ant User" placement="top">
      <pf-avatar style="background-color: #87d068">
        <template #icon><UserOutlined /></template>
      </pf-avatar>
    </pf-tooltip>
    <pf-avatar style="background-color: #1890ff">
      <template #icon><UserOutlined /></template>
    </pf-avatar>
  </pf-avatar-group>
  <pf-divider />
  <pf-avatar-group :max-count="2" :max-style="{ color: '#f56a00', backgroundColor: '#fde3cf' }">
    <pf-avatar src="https://joeschmoe.io/api/v1/random" />
    <pf-avatar style="background-color: #1890ff">K</pf-avatar>
    <pf-tooltip title="Ant User" placement="top">
      <pf-avatar style="background-color: #87d068">
        <template #icon><UserOutlined /></template>
      </pf-avatar>
    </pf-tooltip>
    <pf-avatar style="background-color: #1890ff">
      <template #icon><UserOutlined /></template>
    </pf-avatar>
  </pf-avatar-group>
  <pf-divider />
  <pf-avatar-group
    :max-count="2"
    size="large"
    :max-style="{
      color: '#f56a00',
      backgroundColor: '#fde3cf',
    }"
  >
    <pf-avatar src="https://joeschmoe.io/api/v1/random" />
    <pf-avatar style="background-color: #1890ff">K</pf-avatar>
    <pf-tooltip title="Ant User" placement="top">
      <pf-avatar style="background-color: #87d068">
        <template #icon><UserOutlined /></template>
      </pf-avatar>
    </pf-tooltip>
    <pf-avatar style="background-color: #1890ff">
      <template #icon><UserOutlined /></template>
    </pf-avatar>
  </pf-avatar-group>
</template>

<script lang="ts">
import { UserOutlined } from '@ant-design/icons-vue';
import { defineComponent } from 'vue';
export default defineComponent({
  components: {
    UserOutlined,
  },
});
</script>
