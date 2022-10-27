<docs>
---
order: 0
title:
  zh-CN: 白底黑字
  en-US: Basic usage
---

## zh-CN

最简单的用法。

## en-US

The simplest usage.

</docs>

<template>
    <pf-tooltip overlayClassName="tooltip-other-color">
      <template #title>白底黑字</template>
      Tooltip will show when mouse enter.
    </pf-tooltip>
</template>

<style>
.tooltip-other-color .pf-tooltip-inner{
    background: #fff;
    color: #333;
}
.tooltip-other-color  .pf-tooltip-arrow-content {
    background: #fff;
}
</style>
