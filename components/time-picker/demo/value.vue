<docs>
---
order: 8
debugger: true
title:
  zh-CN: 受控组件
  en-US: Under Control
---

## zh-CN

value 和 onChange 需要配合使用。也可以直接使用v-model。

## en-US

`value` and `@change` should be used together or use v-model.

</docs>

<template>
  <pf-space direction="vertical">
    <p>use value and @change</p>
    <pf-time-picker :value="value" @change="onChange" />
    <p>v-model</p>
    <pf-time-picker v-model:value="value" />
    <p>Do not change</p>
    <pf-time-picker :value="value2" />
  </pf-space>
</template>
<script lang="ts">
import dayjs, { Dayjs } from 'dayjs';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const value = ref<Dayjs>();

    const onChange = (time: Dayjs) => {
      console.log(time);
      value.value = time;
    };

    return {
      value,
      value2: ref(dayjs()),
      onChange,
    };
  },
});
</script>
