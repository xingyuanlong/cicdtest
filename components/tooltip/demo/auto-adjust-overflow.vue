<docs>
---
order: 3
title:
  zh-CN: 自动调整位置
  en-US: Adjust placement automatically
---

## zh-CN

气泡框不可见时自动调整位置。

## en-US

Adjust popup placement automatically when popup is invisible.

</docs>

<template>
  <div :style="wrapStyles">
    <pf-tooltip placement="left" title="Prompt Text" :get-popup-container="getPopupContainer">
      <pf-button>Adjust automatically / 自动调整</pf-button>
    </pf-tooltip>
    <br />
    <pf-tooltip
      placement="left"
      title="Prompt Text"
      :get-popup-container="getPopupContainer"
      :auto-adjust-overflow="false"
    >
      <pf-button style="margin-top: 10px">Ingore / 不处理</pf-button>
    </pf-tooltip>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
const wrapStyles: Record<string, string> = {
  overflow: 'hidden',
  position: 'relative',
  padding: '24px',
  border: '1px solid #e9e9e9',
};
export default defineComponent({
  setup() {
    const getPopupContainer = (trigger: HTMLElement) => {
      return trigger.parentElement;
    };

    return {
      wrapStyles,
      getPopupContainer,
    };
  },
});
</script>
