<docs>
---
order: 10
title:
  zh-CN: 自定义进度条渐变色
  en-US: Custom line gradient
---

## zh-CN

`linear-gradient` 的封装。推荐只传两种颜色。

## en-US

A package of `linear-gradient`. It is recommended to only pass two colors.

</docs>

<template>
  <div>
    <pf-progress
      :stroke-color="{
        '0%': '#108ee9',
        '100%': '#87d068',
      }"
      :percent="99.9"
    />
    <pf-progress
      :stroke-color="{
        from: '#108ee9',
        to: '#87d068',
      }"
      :percent="99.9"
      status="active"
    />
    <pf-progress
      type="circle"
      :stroke-color="{
        '0%': '#108ee9',
        '100%': '#87d068',
      }"
      :percent="90"
    />
    <pf-progress
      type="circle"
      :stroke-color="{
        '0%': '#108ee9',
        '100%': '#87d068',
      }"
      :percent="100"
    />
  </div>
</template>
