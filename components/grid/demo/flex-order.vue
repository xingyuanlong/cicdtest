<docs>
---
order: 6
title:
  zh-CN: 排序
  en-US: Order
---

## zh-CN

通过 `order` 来改变元素的排序。

## en-US

To change the element sort by `order`.

</docs>

<template>
  <pf-divider orientation="left">Normal</pf-divider>
  <pf-row type="flex">
    <pf-col :span="6" :order="4">1 col-order-4</pf-col>
    <pf-col :span="6" :order="3">2 col-order-3</pf-col>
    <pf-col :span="6" :order="2">3 col-order-2</pf-col>
    <pf-col :span="6" :order="1">4 col-order-1</pf-col>
  </pf-row>
  <pf-divider orientation="left">Responsive</pf-divider>
  <pf-row type="flex">
    <pf-col :span="6" :xs="{ order: 1 }" :sm="{ order: 2 }" :md="{ order: 3 }" :lg="{ order: 4 }">
      1 col-order-responsive
    </pf-col>
    <pf-col :span="6" :xs="{ order: 2 }" :sm="{ order: 1 }" :md="{ order: 4 }" :lg="{ order: 3 }">
      2 col-order-responsive
    </pf-col>
    <pf-col :span="6" :xs="{ order: 3 }" :sm="{ order: 4 }" :md="{ order: 2 }" :lg="{ order: 2 }">
      3 col-order-responsive
    </pf-col>
    <pf-col :span="6" :xs="{ order: 4 }" :sm="{ order: 3 }" :md="{ order: 1 }" :lg="{ order: 1 }">
      4 col-order-responsive
    </pf-col>
  </pf-row>
</template>
