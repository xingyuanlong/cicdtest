<docs>
---
order: 1
title:
  zh-CN: 迷你版
  en-US: Mini version
---

## zh-CN

迷你版的步骤条，通过设置 `<Steps size="small">` 启用.

## en-US

By setting like this: `<Steps size="small">`, you can get a mini version.
</docs>
<template>
  <pf-steps :current="1" size="small">
    <pf-step title="Finished" />
    <pf-step title="In Progress" />
    <pf-step title="Waiting" />
  </pf-steps>
</template>
