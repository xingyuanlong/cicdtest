<docs>
---
order: 5
title:
  zh-CN: 竖直方向的小型步骤条
  en-US: Vertical mini version
---

## zh-CN

简单的竖直方向的小型步骤条。

## en-US

A simple mini version step bar in the vertical direction.
</docs>
<template>
  <pf-steps direction="vertical" size="small" :current="1">
    <pf-step title="Finished" description="This is a description." />
    <pf-step title="In Progress" description="This is a description." />
    <pf-step title="Waiting" description="This is a description." />
  </pf-steps>
</template>
