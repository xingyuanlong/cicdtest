<docs>
---
order: 13
title:
  zh-CN: 带有进度的步骤
  en-US: Steps with progress
---

## zh-CN

带有进度的步骤。

## en-US

Steps with progress.

</docs>

<template>
  <pf-steps :percent="60" :current="1">
    <pf-step title="Finished" description="This is a description." />
    <pf-step title="In Progress" sub-title="Left 00:00:08" description="This is a description." />
    <pf-step title="Waiting" description="This is a description." />
  </pf-steps>
</template>
