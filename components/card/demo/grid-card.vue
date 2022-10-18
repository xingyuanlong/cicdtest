<docs>
---
order: 3
title:
  zh-CN: 网格型内嵌卡片
  en-US: Grid card
---

## zh-CN

一种常见的卡片内容区隔模式。

## en-US

Grid style card content.

</docs>

<template>
  <pf-card title="Card Title">
    <pf-card-grid style="width: 25%; text-align: center">Content</pf-card-grid>
    <pf-card-grid style="width: 25%; text-align: center" :hoverable="false">Content</pf-card-grid>
    <pf-card-grid style="width: 25%; text-align: center">Content</pf-card-grid>
    <pf-card-grid style="width: 25%; text-align: center">Content</pf-card-grid>
    <pf-card-grid style="width: 25%; text-align: center">Content</pf-card-grid>
    <pf-card-grid style="width: 25%; text-align: center">Content</pf-card-grid>
    <pf-card-grid style="width: 25%; text-align: center">Content</pf-card-grid>
    <pf-card-grid style="width: 25%; text-align: center">Content</pf-card-grid>
  </pf-card>
</template>
