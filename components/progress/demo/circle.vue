<docs>
---
order: 1
title:
  zh-CN: 进度圈
  en-US: Circular progress bar
---

## zh-CN

圈形的进度。

## en-US

A circular progress bar.

</docs>

<template>
  <pf-progress type="circle" :percent="75" />
  <pf-progress type="circle" :percent="70" status="exception" />
  <pf-progress type="circle" :percent="100" />
</template>
