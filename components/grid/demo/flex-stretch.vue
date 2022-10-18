<docs>
---
order: 7
title:
  zh-CN: Flex 填充
  en-US: Flex Stretch
---

## zh-CN

Col 提供 `flex` 属性以支持填充。

## en-US

Col provides `flex` prop to support fill rest.

</docs>

<template>
  <pf-divider orientation="left">Percentage columns</pf-divider>
  <pf-row type="flex">
    <pf-col :flex="2">2 / 5</pf-col>
    <pf-col :flex="3">3 / 5</pf-col>
  </pf-row>
  <pf-divider orientation="left">Fill rest</pf-divider>
  <pf-row type="flex">
    <pf-col flex="100px">100px</pf-col>
    <pf-col flex="auto">auto</pf-col>
  </pf-row>
  <pf-divider orientation="left">Raw flex style</pf-divider>
  <pf-row type="flex">
    <pf-col flex="1 1 200px">1 1 200px</pf-col>
    <pf-col flex="0 1 300px">0 1 300px</pf-col>
  </pf-row>
</template>
