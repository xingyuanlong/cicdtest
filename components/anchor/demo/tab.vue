<docs>
---
order: 1
title:
  zh-CN: Tab风格的锚点
  en-US: Tab Anchor
---

## zh-CN

Tab风格的锚点。

## en-US

Tab Anchor.
</docs>

<template>
  <pf-radio-group v-model:value="type" style="margin-bottom: 24px;">
    <pf-radio-button value="tab-left">Left</pf-radio-button>
    <pf-radio-button value="tab-right">Right</pf-radio-button>
  </pf-radio-group>
  <pf-anchor :affix="false" :type="type">
    <pf-anchor-link href="#components-anchor-demo-basic" title="Basic demo" />
    <pf-anchor-link href="#components-anchor-demo-static" title="Static demo" />
    <pf-anchor-link href="#API" title="API" />
    <pf-anchor-link href="#Anchor-Props" title="Anchor Props" />
    <pf-anchor-link href="#Link-Props" title="Link Props" />
  </pf-anchor>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const type = ref<string>('tab-left');

    return {
      type
    };
  },
});
</script>