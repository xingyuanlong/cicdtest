<docs>
---
order: 4
title:
  zh-CN: 排版
  en-US: Typesetting
---

## zh-CN

布局基础。

子元素根据不同的值 `start`,`center`,`end`,`space-between`,`space-around`，分别定义其在父节点里面的排版方式。

## en-US

Child elements depending on the value of the `start`,`center`, `end`,`space-between`, `space-around`, which are defined in its parent node typesetting mode.

</docs>

<template>
  <div id="components-grid-demo-flex">
    <p>sub-element align left</p>
    <pf-row justify="start">
      <pf-col :span="4">col-4</pf-col>
      <pf-col :span="4">col-4</pf-col>
      <pf-col :span="4">col-4</pf-col>
      <pf-col :span="4">col-4</pf-col>
    </pf-row>

    <p>sub-element align center</p>
    <pf-row justify="center">
      <pf-col :span="4">col-4</pf-col>
      <pf-col :span="4">col-4</pf-col>
      <pf-col :span="4">col-4</pf-col>
      <pf-col :span="4">col-4</pf-col>
    </pf-row>

    <p>sub-element align right</p>
    <pf-row justify="end">
      <pf-col :span="4">col-4</pf-col>
      <pf-col :span="4">col-4</pf-col>
      <pf-col :span="4">col-4</pf-col>
      <pf-col :span="4">col-4</pf-col>
    </pf-row>

    <p>sub-element monospaced arrangement</p>
    <pf-row justify="space-between">
      <pf-col :span="4">col-4</pf-col>
      <pf-col :span="4">col-4</pf-col>
      <pf-col :span="4">col-4</pf-col>
      <pf-col :span="4">col-4</pf-col>
    </pf-row>

    <p>sub-element align full</p>
    <pf-row justify="space-around">
      <pf-col :span="4">col-4</pf-col>
      <pf-col :span="4">col-4</pf-col>
      <pf-col :span="4">col-4</pf-col>
      <pf-col :span="4">col-4</pf-col>
    </pf-row>
  </div>
</template>

<style lang="less" scoped>
#components-grid-demo-flex :deep(.pf-row) {
  background: rgba(128, 128, 128, 0.08);
}
</style>
