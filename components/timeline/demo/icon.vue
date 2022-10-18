<docs>
---
order: 1
title:
  zh-CN: 基本用法2
  en-US: Color
---

## zh-CN

基本用法2, 加入了状态.

## en-US

Set the color of circles. `green` means completed or success status, `red` means warning or error, and `blue` means ongoing or other default status.

</docs>

<template>
  <pf-timeline>
    <pf-timeline-item>Create a services site 2015-09-01</pf-timeline-item>
    <pf-timeline-item>Create a services site 2015-09-01</pf-timeline-item>
    <pf-timeline-item color="red">
      <p>Solve initial network problems 1</p>
      <p>Solve initial network problems 2</p>
      <p>Solve initial network problems 3 2015-09-01</p>
    </pf-timeline-item>
    <pf-timeline-item color="gray">
      <p>Technical testing 1</p>
      <p>Technical testing 2</p>
      <p>Technical testing 3 2015-09-01</p>
    </pf-timeline-item>
     <pf-timeline-item color="yellow">
      <p>Technical testing 1</p>
      <p>Technical testing 2</p>
      <p>Technical testing 3 2015-09-01</p>
    </pf-timeline-item>
    <pf-timeline-item>
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
