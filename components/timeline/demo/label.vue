<docs>
---
order: 5
title:
  zh-CN: 标签
  en-US: Label
---

## zh-CN

使用 `label` 标签单独展示时间。

## en-US

Use `label` show time alone.

</docs>

<template>
  <pf-radio-group v-model:value="mode" style="margin-bottom: 20px">
    <pf-radio value="left">Left</pf-radio>
    <pf-radio value="right">Right</pf-radio>
    <pf-radio value="alternate">Alternate</pf-radio>
  </pf-radio-group>
  <pf-timeline :mode="mode">
    <pf-timeline-item label="2015-09-01">Create a services</pf-timeline-item>
    <pf-timeline-item label="2015-09-01 09:12:11">Solve initial network problems</pf-timeline-item>
    <pf-timeline-item>Technical testing</pf-timeline-item>
    <pf-timeline-item>
      <template #label><strong style="color: red">2015-09-01 09:12:11</strong></template>
      Network problems being solved
    </pf-timeline-item>
  </pf-timeline>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import type { TimelineProps } from '@pf-ui/pf-ui-vue';
export default defineComponent({
  setup() {
    return {
      mode: ref<TimelineProps['mode']>('left'),
    };
  },
});
</script>
