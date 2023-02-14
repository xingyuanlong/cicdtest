<docs>
---
order: 2
title:
  zh-CN: 自定义 click 事件
  en-US: Customize the click event
---

## zh-CN

点击锚点不记录历史。

## en-US

Clicking on an anchor does not record history.
</docs>

<template>
  <pf-anchor :affix="false" @click="handleClick">
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
import type { AnchorProps } from '@pf-ui/pf-ui-vue';

export default defineComponent({
  setup() {
    const handleClick: AnchorProps['onClick'] = (e, link) => {
      e.preventDefault();
      console.log(link);
    };
    return {
      handleClick,
    };
  },
});
</script>
