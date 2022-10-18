<docs>
---
order: 0
title:
  zh-CN: 顶部导航
  en-US: Top Navigation
---

## zh-CN

水平的顶部导航菜单。

## en-US

Horizontal top navigation menu.

</docs>

<template>
  <pf-menu v-model:selectedKeys="current" mode="horizontal">
    <pf-menu-item key="mail">
      <template #icon>
        <mail-outlined />
      </template>
      Navigation One
    </pf-menu-item>
    <pf-menu-item key="app" disabled>
      <template #icon>
        <appstore-outlined />
      </template>
      Navigation Two
    </pf-menu-item>
    <pf-sub-menu key="sub1">
      <template #icon>
        <setting-outlined />
      </template>
      <template #title>Navigation Three - Submenu</template>
      <pf-menu-item-group title="Item 1">
        <pf-menu-item key="setting:1">Option 1</pf-menu-item>
        <pf-menu-item key="setting:2">Option 2</pf-menu-item>
      </pf-menu-item-group>
      <pf-menu-item-group title="Item 2">
        <pf-menu-item key="setting:3">Option 3</pf-menu-item>
        <pf-menu-item key="setting:4">Option 4</pf-menu-item>
      </pf-menu-item-group>
    </pf-sub-menu>
    <pf-menu-item key="alipay">
      <a href="https://baidu.com" target="_blank" rel="noopener noreferrer">
        Navigation Four - Link
      </a>
    </pf-menu-item>
  </pf-menu>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons-vue';
export default defineComponent({
  components: {
    MailOutlined,
    AppstoreOutlined,
    SettingOutlined,
  },
  setup() {
    const current = ref<string[]>(['mail']);
    return {
      current,
    };
  },
});
</script>
