<docs>
---
order: 1
title:
  zh-CN: 内嵌菜单
  en-US: Inline menu
---

## zh-CN

垂直菜单，子菜单内嵌在菜单区域。

## en-US

Vertical menu with inline submenus.

</docs>
<template>
  <pf-menu
    id="dddddd"
    v-model:openKeys="openKeys"
    v-model:selectedKeys="selectedKeys"
    style="width: 180px"
    mode="inline"
    @click="handleClick"
  >
    <pf-sub-menu key="sub1" @titleClick="titleClick">
      <template #icon>
        <MailOutlined />
      </template>
      <template #title>Navigation One</template>
      <pf-menu-item key="1">Option 1</pf-menu-item>
      <pf-menu-item key="2">Option 2</pf-menu-item>
      <pf-menu-item key="3">Option 3</pf-menu-item>
      <pf-menu-item key="4">Option 4</pf-menu-item>
    </pf-sub-menu>
    <pf-sub-menu key="sub2" @titleClick="titleClick">
      <template #icon>
        <AppstoreOutlined />
      </template>
      <template #title>Two</template>
      <pf-menu-item key="5">Option 5</pf-menu-item>
      <pf-menu-item key="6">Option 6</pf-menu-item>
      <pf-sub-menu key="sub3" title="Submenu">
        <pf-menu-item key="7">Option 7</pf-menu-item>
        <pf-menu-item key="8">Option 8</pf-menu-item>
      </pf-sub-menu>
    </pf-sub-menu>
    <pf-sub-menu key="sub4">
      <template #icon>
        <SettingOutlined />
      </template>
      <template #title>Navigation Three</template>
      <pf-menu-item key="9">Option 9</pf-menu-item>
      <pf-menu-item key="10">Option 10</pf-menu-item>
      <pf-menu-item key="11">Option 11</pf-menu-item>
      <pf-menu-item key="12">Option 12</pf-menu-item>
    </pf-sub-menu>
  </pf-menu>
</template>
<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import { MailOutlined, QqOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons-vue';
import type { MenuProps } from '@pf-ui/pf-ui-vue';
export default defineComponent({
  components: {
    MailOutlined,
    QqOutlined,
    AppstoreOutlined,
    SettingOutlined,
  },
  setup() {
    const selectedKeys = ref<string[]>(['1']);
    const openKeys = ref<string[]>(['sub1']);
    const handleClick: MenuProps['onClick'] = e => {
      console.log('click', e);
    };
    const titleClick = (e: Event) => {
      console.log('titleClick', e);
    };
    watch(
      () => openKeys,
      val => {
        console.log('openKeys', val);
      },
    );
    return {
      selectedKeys,
      openKeys,

      handleClick,
      titleClick,
    };
  },
});
</script>
