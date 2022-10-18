<docs>
---
order: 0
title:
  zh-CN: 基本用法
  en-US: Basic
---

## zh-CN

简单的步骤条。

## en-US

The most basic step bar.
</docs>
<template>
  <pf-steps :current="1">
    <pf-step>
      <!-- <span slot="title">Finished</span> -->
      <template #title>Finished</template>
      <template #description>
        <span>This is a description.</span>
      </template>
    </pf-step>
    <pf-step title="In Progress" sub-title="Left 00:00:08" description="This is a description." />
    <pf-step title="Waiting" description="This is a description." />
  </pf-steps>
</template>
