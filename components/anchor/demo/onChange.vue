<docs>
---
order: 5
title:
  zh-CN: 监听锚点链接改变
  en-US: Listening for anchor link change
---

## zh-CN

监听锚点链接改变。

## en-US

Listening for anchor link change.
</docs>

<template>
  <pf-anchor :affix="false" @change="onChange">
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
    const onChange = (link: string) => {
      console.log('Anchor:OnChange', link);
    };
    return {
      onChange,
    };
  },
});
</script>
