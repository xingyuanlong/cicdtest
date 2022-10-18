<docs>
---
order: 5
title:
  zh-CN: 带下拉菜单的面包屑
  en-US: Bread crumbs with drop down menu
---

## zh-CN

面包屑支持下拉菜单。

## en-US

Breadcrumbs support drop down menu.

</docs>

<template>
  <pf-breadcrumb>
    <pf-breadcrumb-item>Ant Design Vue</pf-breadcrumb-item>
    <pf-breadcrumb-item><a href="">Component</a></pf-breadcrumb-item>
    <pf-breadcrumb-item>
      <a href="">General</a>
      <template #overlay>
        <pf-menu>
          <pf-menu-item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">General</a>
          </pf-menu-item>
          <pf-menu-item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">Layout</a>
          </pf-menu-item>
          <pf-menu-item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">Navigation</a>
          </pf-menu-item>
        </pf-menu>
      </template>
    </pf-breadcrumb-item>
    <pf-breadcrumb-item>Button</pf-breadcrumb-item>
  </pf-breadcrumb>
</template>
