<docs>
---
order: 1
title:
  zh-CN: 自定义选项
  en-US: Customized
---

## zh-CN

也可以传递 `v-slot:option` 来自定义 Option。

## en-US

You could also pass `v-slot:option` to custom option.
</docs>

<template>
  <pf-auto-complete
    v-model:value="value"
    style="width: 200px"
    placeholder="input here"
    :options="options"
    @search="handleSearch"
  >
    <template #option="{ value: val }">
      {{ val.split('@')[0] }} @
      <span style="font-weight: bold">{{ val.split('@')[1] }}</span>
    </template>
  </pf-auto-complete>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const value = ref('');
    const options = ref<{ value: string }[]>([]);
    const handleSearch = (val: string) => {
      let res: { value: string }[];
      if (!val || val.indexOf('@') >= 0) {
        res = [];
      } else {
        res = ['gmail.com', '163.com', 'qq.com'].map(domain => ({ value: `${val}@${domain}` }));
      }
      options.value = res;
    };

    return {
      value,
      options,
      handleSearch,
    };
  },
});
</script>
