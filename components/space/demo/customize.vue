<docs>
---
order: 3
title:
  zh-CN: 自定义尺寸
  en-US: Customize Size
---

## zh-CN

自定义间距大小。

## en-US

Custom spacing size.
</docs>

<template>
  <div>
    <pf-slider v-model:value="size" />
    <br />
    <br />
    <pf-space :size="size">
      <pf-button type="primary">Primary</pf-button>
      <pf-button>Default</pf-button>
      <pf-button type="dashed">Dashed</pf-button>
      <pf-button type="link">Link</pf-button>
    </pf-space>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    return {
      size: ref(8),
    };
  },
});
</script>
