<docs>
---
order: 0
title:
  zh-CN: 白底黑字
  en-US: Basic usage
---

## zh-CN

添加白色主题，显示白底黑字。

## en-US

add the attribute theme.

</docs>

<template>
    <pf-tooltip overlayClassName="tooltip-other-color" theme="white" :overlayStyle="{'max-width': '300px'}">
      <template #title>白底黑字,你还想赖账！</template>
      Tooltip will show when mouse enter.
    </pf-tooltip>
</template>
