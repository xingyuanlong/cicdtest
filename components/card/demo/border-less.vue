<docs>
---
order: 1
title:
  zh-CN: 无边框
  en-US: No border
---

## zh-CN

在灰色背景上使用无边框的卡片

## en-US

A borderless card on a gray background.
</docs>

<template>
  <div style="background: #ececec; padding: 30px">
    <pf-card title="Card title" :bordered="false" style="width: 300px">
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </pf-card>
  </div>
</template>
