<docs>
---
order: 2
title:
  zh-CN: 自定义输入组件
  en-US: Customize Input Component
---

## zh-CN

自定义输入组件。

## en-US

Customize Input Component.
</docs>

<template>
  <pf-auto-complete
    v-model:value="value"
    :options="options"
    style="width: 200px"
    @search="handleSearch"
    @select="onSelect"
  >
    <pf-textarea
      placeholder="input here"
      class="custom"
      style="height: 50px"
      @keypress="handleKeyPress"
    />
  </pf-auto-complete>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const value = ref('');
    const options = ref<{ value: string }[]>([]);
    const onSelect = (value: string) => {
      console.log('onSelect', value);
    };
    const handleSearch = (value: string) => {
      options.value = !value
        ? []
        : [{ value }, { value: value + value }, { value: value + value + value }];
    };
    const handleKeyPress = (ev: KeyboardEvent) => {
      console.log('handleKeyPress', ev);
    };
    return {
      value,
      options,
      onSelect,
      handleSearch,
      handleKeyPress,
    };
  },
});
</script>
