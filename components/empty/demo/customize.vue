<docs>
---
order: 3
title:
  zh-CN: 自定义
  en-US: Customize
---

## zh-CN

自定义图片、描述、附属内容。

## en-US

Customize image, description and extra content.

</docs>

<template>
  <pf-empty
    image="https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original"
    :image-style="{
      height: '60px',
    }"
  >
    <template #description>
      <span>
        Customize
        <a href="#API">Description</a>
      </span>
    </template>
    <pf-button type="primary">Create Now</pf-button>
  </pf-empty>
</template>
