<docs>
---
order: 4
title:
  zh-CN: 交替展现
  en-US: Alternate
---

## zh-CN

内容在时间轴两侧轮流出现。

## en-US

Alternate timeline.

</docs>

<template>
  <pf-timeline mode="alternate">
    <pf-timeline-item>Create a services site 2015-09-01</pf-timeline-item>
    <pf-timeline-item color="green">Solve initial network problems 2015-09-01</pf-timeline-item>
    <pf-timeline-item>
      <template #dot><ClockCircleOutlined style="font-size: 16px" /></template>
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
      laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
      beatae vitae dicta sunt explicabo.
    </pf-timeline-item>
    <pf-timeline-item color="red">Network problems being solved 2015-09-01</pf-timeline-item>
    <pf-timeline-item>Create a services site 2015-09-01</pf-timeline-item>
    <pf-timeline-item>
      <template #dot><ClockCircleOutlined style="font-size: 16px" /></template>
      Technical testing 2015-09-01
    </pf-timeline-item>
  </pf-timeline>
</template>
<script lang="ts">
import { ClockCircleOutlined } from '@ant-design/icons-vue';
import { defineComponent } from 'vue';
export default defineComponent({
  components: {
    ClockCircleOutlined,
  },
});
</script>
