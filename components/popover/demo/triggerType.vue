<docs>
---
order: 1
title:
  zh-CN: 三种触发方式
  en-US: Three ways to trigger
---

## zh-CN

鼠标移入、聚集、点击。

## en-US

Mouse to click, focus and move in.

</docs>
<template>
  <div>
    <pf-popover title="Title" trigger="hover">
      <template #content>
        <p>Content</p>
        <p>Content</p>
      </template>
      <pf-button>Hover me</pf-button>
    </pf-popover>
    <pf-popover title="Title" trigger="focus">
      <template #content>
        <p>Content</p>
        <p>Content</p>
      </template>
      <pf-button>Focus me</pf-button>
    </pf-popover>
    <pf-popover title="Title" trigger="click">
      <template #content>
        <p>Content</p>
        <p>Content</p>
      </template>
      <pf-button>Click me</pf-button>
    </pf-popover>
  </div>
</template>
<style>
#components-popover-demo-triggerType .ant-btn {
  margin-right: 8px;
}
</style>
