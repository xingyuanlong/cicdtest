<docs>
---
order: 2
title:
  zh-CN: 缩起内嵌菜单
  en-US: Collapsed inline menu
---

## zh-CN

内嵌菜单可以被缩起/展开。

你可以在 [Layout](/components/layout-cn/#components-layout-demo-side) 里查看侧边布局结合的完整示例。

## en-US

Inline menu could be collapsed.

Here is [a complete demo](/components/layout/#components-layout-demo-side) with sider layout.

</docs>

<template>
  <div style="width: 256px">
    <pf-button type="primary" style="margin-bottom: 16px" @click="toggleCollapsed">
      <MenuUnfoldOutlined v-if="collapsed" />
      <MenuFoldOutlined v-else />
    </pf-button>
    <pf-menu
      v-model:openKeys="openKeys"
      v-model:selectedKeys="selectedKeys"
      mode="inline"
      theme="dark"
      :inline-collapsed="collapsed"
    >
      <pf-menu-item key="1">
        <template #icon>
          <PieChartOutlined />
        </template>
        <span>Option 1</span>
      </pf-menu-item>
      <pf-menu-item key="2">
        <template #icon>
          <DesktopOutlined />
        </template>
        <span>Option 2</span>
      </pf-menu-item>
      <pf-menu-item key="3">
        <template #icon>
          <InboxOutlined />
        </template>
        <span>Option 3</span>
      </pf-menu-item>
      <pf-sub-menu key="sub1">
        <template #icon>
          <MailOutlined />
        </template>
        <template #title>Navigation One</template>
        <pf-menu-item key="5">Option 5</pf-menu-item>
        <pf-menu-item key="6">Option 6</pf-menu-item>
        <pf-menu-item key="7">Option 7</pf-menu-item>
        <pf-menu-item key="8">Option 8</pf-menu-item>
      </pf-sub-menu>
      <pf-sub-menu key="sub2">
        <template #icon>
          <AppstoreOutlined />
        </template>
        <template #title>Navigation Two</template>
        <pf-menu-item key="9">Option 9</pf-menu-item>
        <pf-menu-item key="10">Option 10</pf-menu-item>
        <pf-sub-menu key="sub3" title="Submenu">
          <pf-menu-item key="11">Option 11</pf-menu-item>
          <pf-menu-item key="12">Option 12</pf-menu-item>
        </pf-sub-menu>
      </pf-sub-menu>
    </pf-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, watch } from 'vue';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
  MailOutlined,
  DesktopOutlined,
  InboxOutlined,
  AppstoreOutlined,
} from '@ant-design/icons-vue';
export default defineComponent({
  components: {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    PieChartOutlined,
    MailOutlined,
    DesktopOutlined,
    InboxOutlined,
    AppstoreOutlined,
  },
  setup() {
    const state = reactive({
      collapsed: false,
      selectedKeys: ['1'],
      openKeys: ['sub1'],
      preOpenKeys: ['sub1'],
    });

    watch(
      () => state.openKeys,
      (_val, oldVal) => {
        state.preOpenKeys = oldVal;
      },
    );
    const toggleCollapsed = () => {
      state.collapsed = !state.collapsed;
      state.openKeys = state.collapsed ? [] : state.preOpenKeys;
    };

    return {
      ...toRefs(state),
      toggleCollapsed,
    };
  },
});
</script>
