<docs>
---
order: 7
title:
  zh-CN: 点状步骤条
  en-US: Dot Style
---

## zh-CN

包含步骤点的进度条。

## en-US

Steps with progress dot style.
</docs>

<template>
  <div>
    <pf-steps progress-dot :current="1">
      <pf-step title="Finished" description="This is a description." />
      <pf-step title="In Progress" description="This is a description." />
      <pf-step title="Waiting" description="This is a description." />
    </pf-steps>
    <pf-divider />
    <pf-steps progress-dot :current="1" direction="vertical">
      <pf-step title="Finished" description="This is a description. This is a description." />
      <pf-step title="Finished" description="This is a description. This is a description." />
      <pf-step title="In Progress" description="This is a description. This is a description." />
      <pf-step title="Waiting" description="This is a description." />
      <pf-step title="Waiting" description="This is a description." />
    </pf-steps>
  </div>
</template>
