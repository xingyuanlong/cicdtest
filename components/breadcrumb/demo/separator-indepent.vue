<docs>
---
order: 6
title:
  zh-CN: 分隔符
  en-US: Configuring the Separator
---

## zh-CN

使用 `Breadcrumb.Separator` 可以自定义分隔符。

## en-US

The separator can be customized by setting the separator property: `Breadcrumb.Separator`.

</docs>

<template>
  <pf-breadcrumb separator="">
    <pf-breadcrumb-item>Location</pf-breadcrumb-item>
    <pf-breadcrumb-separator>:</pf-breadcrumb-separator>
    <pf-breadcrumb-item href="">Application Center</pf-breadcrumb-item>
    <pf-breadcrumb-separator />
    <pf-breadcrumb-item href="">Application List</pf-breadcrumb-item>
    <pf-breadcrumb-separator />
    <pf-breadcrumb-item>An Application</pf-breadcrumb-item>
  </pf-breadcrumb>
</template>
