<docs>
---
order: 4
title:
  zh-CN: 主题
  en-US: Menu Themes
---

## zh-CN

内建了两套主题 `light` 和 `dark`，默认 `light`。

## en-US

There are two built-in themes: `light` and `dark`. The default value is `light`.

</docs>

<template>
  <div>
    <pf-switch
      :checked="theme === 'dark'"
      checked-children="Dark"
      un-checked-children="Light"
      @change="changeTheme"
    />
    <br />
    <br />
    <pf-menu
      v-model:openKeys="openKeys"
      v-model:selectedKeys="selectedKeys"
      style="width: 256px"
      mode="inline"
      :theme="theme"
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
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
import {
  MailOutlined,
  CalendarOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from '@ant-design/icons-vue';
import type { MenuTheme } from 'pf-ui-vue';
export default defineComponent({
  components: {
    MailOutlined,
    CalendarOutlined,
    AppstoreOutlined,
    SettingOutlined,
  },
  setup() {
    const state = reactive({
      theme: 'dark' as MenuTheme,
      selectedKeys: ['1'],
      openKeys: ['sub1'],
    });
    const changeTheme = (checked: boolean) => {
      state.theme = checked ? 'dark' : 'light';
    };

    return {
      ...toRefs(state),
      changeTheme,
    };
  },
});
</script>
