<docs>
---
order: 5
title:
  zh-CN: 对齐
  en-US: Alignment
---

## zh-CN

子元素垂直对齐。

## en-US

Child elements vertically aligned.

</docs>

<template>
  <p>Align Top</p>
  <pf-row type="flex" justify="center" align="top">
    <pf-col :span="4">
      <p class="height-100">col-4</p>
    </pf-col>
    <pf-col :span="4">
      <p class="height-50">col-4</p>
    </pf-col>
    <pf-col :span="4">
      <p class="height-120">col-4</p>
    </pf-col>
    <pf-col :span="4">
      <p class="height-80">col-4</p>
    </pf-col>
  </pf-row>

  <p>Align Center</p>
  <pf-row type="flex" justify="space-around" align="middle">
    <pf-col :span="4">
      <p class="height-100">col-4</p>
    </pf-col>
    <pf-col :span="4">
      <p class="height-50">col-4</p>
    </pf-col>
    <pf-col :span="4">
      <p class="height-120">col-4</p>
    </pf-col>
    <pf-col :span="4">
      <p class="height-80">col-4</p>
    </pf-col>
  </pf-row>

  <p>Align Bottom</p>
  <pf-row type="flex" justify="space-between" align="bottom">
    <pf-col :span="4">
      <p class="height-100">col-4</p>
    </pf-col>
    <pf-col :span="4">
      <p class="height-50">col-4</p>
    </pf-col>
    <pf-col :span="4">
      <p class="height-120">col-4</p>
    </pf-col>
    <pf-col :span="4">
      <p class="height-80">col-4</p>
    </pf-col>
  </pf-row>
</template>
