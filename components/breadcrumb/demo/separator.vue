<docs>
---
order: 4
title:
  zh-CN: 分隔符
  en-US: Configuring the Separator
---

## zh-CN

用` separator=">" `可以自定义分隔符，或者使用slot="separator"自定义更复杂的分隔符

## en-US

The separator can be customized by setting the separator preperty: separator=">" or use
  slot="separator"

</docs>

<template>
  <pf-breadcrumb separator=">">
    <pf-breadcrumb-item>Home</pf-breadcrumb-item>
    <pf-breadcrumb-item href="">Application Center</pf-breadcrumb-item>
    <pf-breadcrumb-item href="">Application List</pf-breadcrumb-item>
    <pf-breadcrumb-item>An Application</pf-breadcrumb-item>
  </pf-breadcrumb>
  <pf-breadcrumb>
    <template #separator><span style="color: red">></span></template>
    <pf-breadcrumb-item>Home</pf-breadcrumb-item>
    <pf-breadcrumb-item href="">Application Center</pf-breadcrumb-item>
    <pf-breadcrumb-item href="">Application List</pf-breadcrumb-item>
    <pf-breadcrumb-item>An Application</pf-breadcrumb-item>
  </pf-breadcrumb>
</template>
