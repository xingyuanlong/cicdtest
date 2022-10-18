<docs>
---
order: 3
title:
  zh-CN: 顶部-侧边布局
  en-US: Header-Sider
---

## zh-CN

拥有顶部导航及侧边栏的页面，多用于展示类网站。

## en-US

Both the top navigation and the sidebar, commonly used in documentation site.

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
    <pf-layout-content style="padding: 0 50px">
      <pf-breadcrumb style="margin: 16px 0">
        <pf-breadcrumb-item>Home</pf-breadcrumb-item>
        <pf-breadcrumb-item>List</pf-breadcrumb-item>
        <pf-breadcrumb-item>App</pf-breadcrumb-item>
      </pf-breadcrumb>
      <pf-layout style="padding: 24px 0; background: #fff">
        <pf-layout-sider width="200" style="background: #fff">
          <pf-menu
            v-model:selectedKeys="selectedKeys2"
            v-model:openKeys="openKeys"
            mode="inline"
            style="height: 100%"
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
        <pf-layout-content :style="{ padding: '0 24px', minHeight: '280px' }">
          Content
        </pf-layout-content>
      </pf-layout>
    </pf-layout-content>
    <pf-layout-footer style="text-align: center">
      Ant Design ©2018 Created by Ant UED
    </pf-layout-footer>
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
      openKeys: ref<string[]>(['sub1']),
    };
  },
});
</script>

<style>
#components-layout-demo-top-side .logo {
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  background: rgba(255, 255, 255, 0.3);
}

.ant-row-rtl #components-layout-demo-top-side .logo {
  float: right;
  margin: 16px 0 16px 24px;
}

.site-layout-background {
  background: #fff;
}
</style>
