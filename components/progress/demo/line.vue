<docs>
---
order: 0
title:
  zh-CN: 进度条
  en-US: Progress bar
---

## zh-CN

标准的进度条。

## en-US

A standard progress bar.

</docs>

<template>
  <pf-progress :percent="30" />
  <pf-progress :percent="50" status="active" />
  <pf-progress :percent="70" status="exception" />
  <pf-progress :percent="100" />
  <pf-progress :percent="50" :show-info="false" />
</template>
