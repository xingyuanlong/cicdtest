<docs>
---
order: 1
title:
  zh-CN: 卡片模式
  en-US: Card
---

## zh-CN

用于嵌套在空间有限的容器中。

## en-US

Nested inside a container element for rendering in limited space.
</docs>

<template>
  <div :style="{ width: '310px', border: '1px solid #d9d9d9', borderRadius: '4px' }">
    <pf-calendar v-model:value="value" :fullscreen="false" @panelChange="onPanelChange" />
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { Dayjs } from 'dayjs';

export default defineComponent({
  setup() {
    const value = ref<Dayjs>();
    const onPanelChange = (value: Dayjs, mode: string) => {
      console.log(value, mode);
    };

    return {
      value,
      onPanelChange,
    };
  },
});
</script>
