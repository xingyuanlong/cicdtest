<docs>
---
order: 4
title:
  zh-CN: 省略号
  en-US: Ellipsis
---

## zh-CN

多行文本省略。你可以通过 `tooltip` 属性配置省略展示内容，大量文本时推荐优先使用 `expandable`。

## en-US

Multiple line ellipsis support. You can use `tooltip` to config ellipsis tooltip. Recommend `expandable` when have lots of content.
</docs>
<template>
  <pf-typography-title :level="5">可自定义文本省略</pf-typography-title>
  <pf-switch v-model:checked="ellipsis" />
  <pf-typography-paragraph
    :ellipsis="ellipsis"
    content=" Ant Design, a design language for background applications, is refined by Ant UED Team. Ant
    Design, a design language for background applications, is refined by Ant UED Team. Ant
    Design, a design language for background applications, is refined by Ant UED Team. Ant
    Design, a design language for background applications, is refined by Ant UED Team. Ant
    Design, a design language for background applications, is refined by Ant UED Team. Ant
    Design, a design language for background applications, is refined by Ant UED Team."
  />

  <pf-typography-paragraph
    :ellipsis="ellipsis ? { rows: 2, expandable: true, symbol: 'more' } : false"
    content="Ant Design, a design language for background applications, is refined by Ant UED Team. Ant
    Design, a design language for background applications, is refined by Ant UED Team. Ant
    Design, a design language for background applications, is refined by Ant UED Team. Ant
    Design, a design language for background applications, is refined by Ant UED Team. Ant
    Design, a design language for background applications, is refined by Ant UED Team. Ant
    Design, a design language for background applications, is refined by Ant UED Team."
  />

  <pf-typography-text
    :style="ellipsis ? { width: '100px' } : {}"
    :ellipsis="ellipsis ? { tooltip: 'I am ellipsis now!' } : false"
    content="Ant Design, a design language for background applications, is refined by Ant UED Team."
  />
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    return {
      ellipsis: ref(true),
    };
  },
});
</script>
