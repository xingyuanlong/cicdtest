<docs>
---
order: 6
title:
  zh-CN: 步骤运行错误
  en-US: Error status
---

## zh-CN

使用 Steps 的 `status` 属性来指定当前步骤的状态。

## en-US

By using `status` of `Steps`, you can specify the state for current step.
</docs>
<template>
  <pf-steps :current="1" status="error">
    <pf-step title="Finished" description="This is a description." />
    <pf-step title="In Progress" description="This is a description." />
    <pf-step title="Waiting" description="This is a description." />
  </pf-steps>
</template>
