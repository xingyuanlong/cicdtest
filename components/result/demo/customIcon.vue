<docs>
---
order: 10
title:
  zh-CN: 自定义 icon
  en-US: Custom icon
---

## zh-CN

自定义 icon。

## en-US

Custom icon.

</docs>

<template>
  <pf-result title="Great, we have done all the operations!">
    <template #icon>
      <smile-twoTone />
    </template>
    <template #extra>
      <pf-button type="primary">Next</pf-button>
    </template>
  </pf-result>
</template>
<script lang="ts">
import { SmileTwoTone } from '@ant-design/icons-vue';
import { defineComponent } from 'vue';
export default defineComponent({
  components: {
    SmileTwoTone,
  },
});
</script>
