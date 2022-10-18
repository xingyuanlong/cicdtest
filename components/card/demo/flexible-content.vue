<docs>
---
order: 2
title:
  zh-CN: 更灵活的内容展示
  en-US: Customized content
---

## zh-CN

可以利用 `Card.Meta` 支持更灵活的内容

## en-US

You can use `Card.Meta` to support more flexible content.

</docs>

<template>
  <pf-card hoverable style="width: 240px">
    <template #cover>
      <img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
    </template>
    <pf-card-meta title="Europe Street beat">
      <template #description>www.instagram.com</template>
    </pf-card-meta>
  </pf-card>
</template>
