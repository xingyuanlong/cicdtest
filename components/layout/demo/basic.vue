<docs>
---
order: 0
title:
  zh-CN: 基本结构
  en-US: Basic Structure
---

## zh-CN

典型的页面布局。

## en-US

Classic page layouts.

</docs>
<template>
  <pf-layout>
    <pf-layout-header>Header</pf-layout-header>
    <pf-layout-content>Content</pf-layout-content>
    <pf-layout-footer>Footer</pf-layout-footer>
  </pf-layout>

  <pf-layout>
    <pf-layout-header>Header</pf-layout-header>
    <pf-layout>
      <pf-layout-sider>Sider</pf-layout-sider>
      <pf-layout-content>Content</pf-layout-content>
    </pf-layout>
    <pf-layout-footer>Footer</pf-layout-footer>
  </pf-layout>

  <pf-layout>
    <pf-layout-header>Header</pf-layout-header>
    <pf-layout>
      <pf-layout-content>Content</pf-layout-content>
      <pf-layout-sider>Sider</pf-layout-sider>
    </pf-layout>
    <pf-layout-footer>Footer</pf-layout-footer>
  </pf-layout>

  <pf-layout>
    <pf-layout-sider>Sider</pf-layout-sider>
    <pf-layout>
      <pf-layout-header>Header</pf-layout-header>
      <pf-layout-content>Content</pf-layout-content>
      <pf-layout-footer>Footer</pf-layout-footer>
    </pf-layout>
  </pf-layout>
</template>

<style>
#components-layout-demo-basic .code-box-demo {
  text-align: center;
}
#components-layout-demo-basic .pf-layout-header,
#components-layout-demo-basic .pf-layout-footer {
  color: #fff;
  background: #7dbcea;
}
[data-theme='dark'] #components-layout-demo-basic .pf-layout-header {
  background: #6aa0c7;
}
[data-theme='dark'] #components-layout-demo-basic .pf-layout-footer {
  background: #6aa0c7;
}
#components-layout-demo-basic .pf-layout-footer {
  line-height: 1.5;
}
#components-layout-demo-basic .pf-layout-sider {
  color: #fff;
  line-height: 120px;
  background: #3ba0e9;
}
[data-theme='dark'] #components-layout-demo-basic .pf-layout-sider {
  background: #3499ec;
}
#components-layout-demo-basic .pf-layout-content {
  min-height: 120px;
  color: #fff;
  line-height: 120px;
  background: rgba(16, 142, 233, 1);
}
[data-theme='dark'] #components-layout-demo-basic .pf-layout-content {
  background: #107bcb;
}
#components-layout-demo-basic > .code-box-demo > .pf-layout + .pf-layout {
  margin-top: 48px;
}
</style>
