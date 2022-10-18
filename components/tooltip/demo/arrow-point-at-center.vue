<docs>
---
order: 2
title:
  zh-CN: 箭头指向
  en-US: Arrow pointing at the center
---

## zh-CN

设置了 `arrowPointAtCenter` 后，箭头将指向目标元素的中心。

## en-US

By specifying `arrowPointAtCenter` prop, the arrow will point to the center of the target element.

</docs>

<template>
  <pf-space>
    <pf-tooltip placement="topLeft" title="Prompt Text">
      <pf-button>Align edge / 边缘对齐</pf-button>
    </pf-tooltip>
    <pf-tooltip placement="topLeft" title="Prompt Text" arrow-point-at-center>
      <pf-button>Arrow points to center / 箭头指向中心</pf-button>
    </pf-tooltip>
  </pf-space>
</template>
