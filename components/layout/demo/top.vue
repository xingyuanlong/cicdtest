<docs>
---
order: 1
title:
  zh-CN: 上中下布局
  en-US: Header-Content-Footer
---

## zh-CN

最基本的『上-中-下』布局。<br>
一般主导航放置于页面的顶端，从左自右依次为：logo、一级导航项、辅助菜单（用户、设置、通知等）。通常将内容放在固定尺寸（例如：1200px）内，整个页面排版稳定，不受用户终端显示器影响；上下级的结构符合用户上下浏览的习惯，也是较为经典的网站导航模式。页面上下切分的方式提高了主工作区域的信息展示效率，但在纵向空间上会有一些牺牲。此外，由于导航栏水平空间的限制，不适合那些一级导航项很多的信息结构。

## en-US

The most basic "header-content-footer" layout.<br>
Generally, the mainnav is placed at the top of the page, and includes the logo, the first level navigation, and the secondary menu (users, settings, notifications) from left to right in it.
We always put contents in a fixed size navigation (eg: `1200px`), the layout of the whole page is stable, it's not affected by viewing area.
Top-bottom structure is conform with the top-bottom viewing habit, it's a classical navigation pattern of websites. This pattern demonstrates efficiency in the main workarea, while using some vertical space. And because the horizontal space of the navigation is limited, this pattern is not suitable for cases when the first level navigation contains many elements or links

</docs>
<template>
  <pf-layout class="layout">
    <pf-layout-header>
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
    <pf-layout-content style="padding: 0 50px">
      <pf-breadcrumb style="margin: 16px 0">
        <pf-breadcrumb-item>Home</pf-breadcrumb-item>
        <pf-breadcrumb-item>List</pf-breadcrumb-item>
        <pf-breadcrumb-item>App</pf-breadcrumb-item>
      </pf-breadcrumb>
      <div :style="{ background: '#fff', padding: '24px', minHeight: '280px' }">Content</div>
    </pf-layout-content>
    <pf-layout-footer style="text-align: center">
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
.site-layout-content {
  min-height: 280px;
  padding: 24px;
  background: #fff;
}
#components-layout-demo-top .logo {
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  background: rgba(255, 255, 255, 0.3);
}
.pf-row-rtl #components-layout-demo-top .logo {
  float: right;
  margin: 16px 0 16px 24px;
}

[data-theme='dark'] .site-layout-content {
  background: #141414;
}
</style>
