<docs>
---
order: 9
title:
  zh-CN: 圆角/方角边缘
  en-US: Square linecaps
---

## zh-CN

`strokeLinecap="square|round"` 可以调整进度条边缘的形状。

## en-US

By setting `strokeLinecap="square"`, you can change the linecaps from round to square.

</docs>

<template>
  <div>
    <pf-progress stroke-linecap="square" :percent="75" />
    <pf-progress stroke-linecap="square" :percent="75" type="circle" />
    <pf-progress stroke-linecap="square" :percent="75" type="dashboard" />
  </div>
</template>
