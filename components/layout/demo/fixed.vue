<docs>
---
order: 8
iframe: 360
title:
  zh-CN: 固定头部
  en-US: Fixed Header
---

## zh-CN

一般用于固定顶部导航，方便页面切换。

## en-US

Fixed Header is generally used to fix the top navigation to facilitate page switching.

</docs>
<template>
  <pf-layout>
    <pf-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%' }">
      <div class="logo" />
      <pf-menu
        v-model:selectedKeys="selectedKeys"
        theme="dark"
        mode="horizontal"
        :style="{ lineHeight: '64px' }"
      >
        <pf-menu-item key="1">nav 1</pf-menu-item>
        <pf-menu-item key="2">nav 2</pf-menu-item>
        <pf-menu-item key="3">nav 3</pf-menu-item>
      </pf-menu>
    </pf-layout-header>
    <pf-layout-content :style="{ padding: '0 50px', marginTop: '64px' }">
      <pf-breadcrumb :style="{ margin: '16px 0' }">
        <pf-breadcrumb-item>Home</pf-breadcrumb-item>
        <pf-breadcrumb-item>List</pf-breadcrumb-item>
        <pf-breadcrumb-item>App</pf-breadcrumb-item>
      </pf-breadcrumb>
      <div :style="{ background: '#fff', padding: '24px', minHeight: '380px' }">Content</div>
    </pf-layout-content>
    <pf-layout-footer :style="{ textAlign: 'center' }">
      Ant Design ©2018 Created by Ant UED
    </pf-layout-footer>
  </pf-layout>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    return {
      selectedKeys: ref<string[]>(['2']),
    };
  },
});
</script>
<style>
#components-layout-demo-fixed .logo {
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 24px 16px 0;
  float: left;
}
.site-layout .site-layout-background {
  background: #fff;
}

[data-theme='dark'] .site-layout .site-layout-background {
  background: #141414;
}
</style>
