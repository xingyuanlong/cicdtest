<docs>
---
order: 2
title:
  zh-CN: 顶部-侧边布局-通栏
  en-US: Header Sider 2
---

## zh-CN

同样拥有顶部导航及侧边栏，区别是两边未留边距，多用于应用型的网站。

## en-US

Both the top navigation and the sidebar, commonly used in application site.

</docs>
<template>
  <pf-layout>
    <pf-layout-header class="header">
      <div class="logo" />
      <pf-menu
        v-model:selectedKeys="selectedKeys1"
        theme="dark"
        mode="horizontal"
        :style="{ lineHeight: '64px' }"
      >
        <pf-menu-item key="1">nav 1</pf-menu-item>
        <pf-menu-item key="2">nav 2</pf-menu-item>
        <pf-menu-item key="3">nav 3</pf-menu-item>
      </pf-menu>
    </pf-layout-header>
    <pf-layout>
      <pf-layout-sider width="200" style="background: #fff">
        <pf-menu
          v-model:selectedKeys="selectedKeys2"
          v-model:openKeys="openKeys"
          mode="inline"
          :style="{ height: '100%', borderRight: 0 }"
        >
          <pf-sub-menu key="sub1">
            <template #title>
              <span>
                <user-outlined />
                subnav 1
              </span>
            </template>
            <pf-menu-item key="1">option1</pf-menu-item>
            <pf-menu-item key="2">option2</pf-menu-item>
            <pf-menu-item key="3">option3</pf-menu-item>
            <pf-menu-item key="4">option4</pf-menu-item>
          </pf-sub-menu>
          <pf-sub-menu key="sub2">
            <template #title>
              <span>
                <laptop-outlined />
                subnav 2
              </span>
            </template>
            <pf-menu-item key="5">option5</pf-menu-item>
            <pf-menu-item key="6">option6</pf-menu-item>
            <pf-menu-item key="7">option7</pf-menu-item>
            <pf-menu-item key="8">option8</pf-menu-item>
          </pf-sub-menu>
          <pf-sub-menu key="sub3">
            <template #title>
              <span>
                <notification-outlined />
                subnav 3
              </span>
            </template>
            <pf-menu-item key="9">option9</pf-menu-item>
            <pf-menu-item key="10">option10</pf-menu-item>
            <pf-menu-item key="11">option11</pf-menu-item>
            <pf-menu-item key="12">option12</pf-menu-item>
          </pf-sub-menu>
        </pf-menu>
      </pf-layout-sider>
      <pf-layout style="padding: 0 24px 24px">
        <pf-breadcrumb style="margin: 16px 0">
          <pf-breadcrumb-item>Home</pf-breadcrumb-item>
          <pf-breadcrumb-item>List</pf-breadcrumb-item>
          <pf-breadcrumb-item>App</pf-breadcrumb-item>
        </pf-breadcrumb>
        <pf-layout-content
          :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }"
        >
          Content
        </pf-layout-content>
      </pf-layout>
    </pf-layout>
  </pf-layout>
</template>
<script lang="ts">
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons-vue';
import { defineComponent, ref } from 'vue';
export default defineComponent({
  components: {
    UserOutlined,
    LaptopOutlined,
    NotificationOutlined,
  },
  setup() {
    return {
      selectedKeys1: ref<string[]>(['2']),
      selectedKeys2: ref<string[]>(['1']),
      collapsed: ref<boolean>(false),
      openKeys: ref<string[]>(['sub1']),
    };
  },
});
</script>

<style>
#components-layout-demo-top-side-2 .logo {
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  background: rgba(255, 255, 255, 0.3);
}

.pf-row-rtl #components-layout-demo-top-side-2 .logo {
  float: right;
  margin: 16px 0 16px 24px;
}

.site-layout-background {
  background: #fff;
}
</style>
