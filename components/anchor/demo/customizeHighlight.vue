<docs>
---
order: 3
title:
  zh-CN: 自定义锚点高亮
  en-US: Customize the anchor highlight
---

## zh-CN

自定义锚点高亮。

## en-US

Customize the anchor highlight.
</docs>

<template>
  <pf-anchor :affix="false" :get-current-anchor="getCurrentAnchor">
    <pf-anchor-link href="#components-anchor-demo-basic" title="Basic demo" />
    <pf-anchor-link href="#components-anchor-demo-static" title="Static demo" />
    <pf-anchor-link href="#API" title="API">
      <pf-anchor-link href="#Anchor-Props" title="Anchor Props" />
      <pf-anchor-link href="#Link-Props" title="Link Props" />
    </pf-anchor-link>
  </pf-anchor>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    const getCurrentAnchor = () => {
      return '#components-anchor-demo-static';
    };
    return {
      getCurrentAnchor,
    };
  },
});
</script>
