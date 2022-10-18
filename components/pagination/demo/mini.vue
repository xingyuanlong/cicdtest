<docs>
---
order: 5
title:
  zh-CN: 迷你
  en-US: Mini size
---

## zh-CN

迷你版本。

## en-US

Mini size pagination.
</docs>
<template>
  <div id="components-pagination-demo-mini">
    <pf-pagination size="small" :total="50" />
    <pf-pagination size="small" :total="50" show-size-changer show-quick-jumper />
    <pf-pagination size="small" :total="50" :show-total="total => `Total ${total} items`" />
  </div>
</template>
<style scoped>
#components-pagination-demo-mini .ant-pagination:not(:last-child) {
  margin-bottom: 24px;
}
</style>
