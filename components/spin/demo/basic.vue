<docs>
---
order: 0
title:
  zh-CN: 基本用法
  en-US: Basic usage
---

## zh-CN

一个简单的 loading 状态。

## en-US

A simple loading status.

</docs>

<template>
  <pf-spin regularSpining size="small" />
  <pf-spin regularSpining />
  <pf-spin regularSpining size="large" />
  <pf-spin regularSpining size="large" class="blue-spin"/>
  <pf-spin regularSpining size="large" class="green-spin" />
</template>

<style lang="less" scoped>
  .blue-spin {
    color: #198EEB;
  }
  .green-spin {
    color: #06AEA6;
  }
</style>