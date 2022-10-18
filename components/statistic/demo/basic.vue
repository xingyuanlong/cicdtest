<docs>
---
order: 0
title:
  zh-CN: 基本用法
  en-US: Basic usage
---

## zh-CN

简单展示

## en-US

Simplest Usage.

</docs>

<template>
  <pf-row>
    <pf-col :span="12">
      <pf-statistic title="Active Users" :value="112893" style="margin-right: 50px" />
    </pf-col>
    <pf-col :span="12">
      <pf-statistic title="Account Balance (CNY)" :precision="2" :value="112893" />
    </pf-col>
  </pf-row>
</template>
