<docs>
---
order: 1
title:
  zh-CN: 圆圈颜色
  en-US: Color
---

## zh-CN

圆圈颜色，绿色用于已完成、成功状态，红色表示告警或错误状态，蓝色可表示正在进行或其他默认状态。

## en-US

Set the color of circles. `green` means completed or success status, `red` means warning or error, and `blue` means ongoing or other default status.

</docs>

<template>
  <pf-timeline>
    <pf-timeline-item color="green">Create a services site 2015-09-01</pf-timeline-item>
    <pf-timeline-item color="green">Create a services site 2015-09-01</pf-timeline-item>
    <pf-timeline-item color="red">
      <p>Solve initial network problems 1</p>
      <p>Solve initial network problems 2</p>
      <p>Solve initial network problems 3 2015-09-01</p>
    </pf-timeline-item>
    <pf-timeline-item>
      <p>Technical testing 1</p>
      <p>Technical testing 2</p>
      <p>Technical testing 3 2015-09-01</p>
    </pf-timeline-item>
    <pf-timeline-item color="gray">
      <p>Technical testing 1</p>
      <p>Technical testing 2</p>
      <p>Technical testing 3 2015-09-01</p>
    </pf-timeline-item>
    <pf-timeline-item color="gray">
      <p>Technical testing 1</p>
      <p>Technical testing 2</p>
      <p>Technical testing 3 2015-09-01</p>
    </pf-timeline-item>
    <pf-timeline-item color="#00CCFF">
      <template #dot>
        <SmileOutlined />
      </template>
      <p>Custom color testing</p>
    </pf-timeline-item>
  </pf-timeline>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { SmileOutlined } from '@ant-design/icons-vue';
export default defineComponent({
  components: {
    SmileOutlined,
  },
});
</script>
