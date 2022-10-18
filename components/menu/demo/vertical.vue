<docs>
---
order: 3
title:
  zh-CN: 垂直菜单
  en-US: Vertical menu
---

## zh-CN

子菜单是弹出的形式。

## en-US

Submenus open as pop-ups.

</docs>

<template>
  <pf-menu
    v-model:openKeys="openKeys"
    v-model:selectedKeys="selectedKeys"
    style="width: 256px"
    mode="vertical"
    @click="handleClick"
  >
    <pf-menu-item key="1">
      <template #icon>
        <MailOutlined />
      </template>
      Navigation One
    </pf-menu-item>
    <pf-menu-item key="2">
      <template #icon>
        <CalendarOutlined />
      </template>
      Navigation Two
    </pf-menu-item>
    <pf-sub-menu key="sub1">
      <template #icon>
        <AppstoreOutlined />
      </template>
      <template #title>Navigation Three</template>
      <pf-menu-item key="3">Option 3</pf-menu-item>
      <pf-menu-item key="4">Option 4</pf-menu-item>
      <pf-sub-menu key="sub1-2" title="Submenu">
        <pf-menu-item key="5">Option 5</pf-menu-item>
        <pf-menu-item key="6">Option 6</pf-menu-item>
      </pf-sub-menu>
    </pf-sub-menu>
    <pf-sub-menu key="sub2">
      <template #icon>
        <SettingOutlined />
      </template>
      <template #title>Navigation Four</template>
      <pf-menu-item key="7">Option 7</pf-menu-item>
      <pf-menu-item key="8">Option 8</pf-menu-item>
      <pf-menu-item key="9">Option 9</pf-menu-item>
      <pf-menu-item key="10">Option 10</pf-menu-item>
    </pf-sub-menu>
  </pf-menu>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
import {
  MailOutlined,
  CalendarOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from '@ant-design/icons-vue';
import type { MenuProps } from 'pf-ui-vue';

export default defineComponent({
  components: {
    MailOutlined,
    CalendarOutlined,
    AppstoreOutlined,
    SettingOutlined,
  },
  setup() {
    const state = reactive({
      selectedKeys: [],
      openKeys: [],
    });
    const handleClick: MenuProps['onClick'] = menuInfo => {
      console.log('click ', menuInfo);
    };
    return {
      ...toRefs(state),
      handleClick,
    };
  },
});
</script>
