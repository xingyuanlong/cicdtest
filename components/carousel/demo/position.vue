<docs>
---
order: 1
title:
  zh-CN: 位置
  en-US: Position
---

## zh-CN

位置有 4 个方向。

## en-US

There are 4 position options available.
</docs>

<template>
  <pf-radio-group v-model:value="dotPosition" style="margin-bottom: 8px">
    <pf-radio-button value="top">Top</pf-radio-button>
    <pf-radio-button value="bottom">Bottom</pf-radio-button>
    <pf-radio-button value="left">Left</pf-radio-button>
    <pf-radio-button value="right">Right</pf-radio-button>
  </pf-radio-group>
  <pf-carousel :dot-position="dotPosition">
    <div><h3>1</h3></div>
    <div><h3>2</h3></div>
    <div><h3>3</h3></div>
    <div><h3>4</h3></div>
  </pf-carousel>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import type { CarouselProps } from 'pf-ui-vue';

export default defineComponent({
  setup() {
    return {
      dotPosition: ref<CarouselProps['dotPosition']>('top'),
    };
  },
});
</script>
<style scoped>
/* For demo */
.pf-carousel :deep(.slick-slide) {
  text-align: center;
  height: 160px;
  line-height: 160px;
  background: #364d79;
  overflow: hidden;
}

.pf-carousel :deep(.slick-slide h3) {
  color: #fff;
}
</style>
