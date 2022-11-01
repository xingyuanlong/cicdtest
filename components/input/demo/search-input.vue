<docs>
---
order: 3
title:
  zh-CN: 搜索框
  en-US: Search box
---

## zh-CN

带有搜索按钮的输入框。

## en-US

Example of creating a search box by grouping a standard input with a search button.

</docs>
<template>
  <pf-space direction="vertical">
    <pf-input-search
      v-model:value="value"
      placeholder="input search text"
      style="width: 200px"
      @search="onSearch"
    />
    <pf-input-search
      v-model:value="value"
      placeholder="input search text"
      enter-button
      @search="onSearch"
      allowClear
    />
    <pf-input-search
      v-model:value="value"
      placeholder="input search text"
      enter-button="Search"
      size="large"
      @search="onSearch"
    />
    <pf-input-search
      v-model:value="value"
      placeholder="input search text"
      size="large"
      @search="onSearch"
    >
      <template #enterButton>
        <pf-button>Custom</pf-button>
      </template>
    </pf-input-search>
    <pf-search-input
      v-model:value="value"
      placeholder="input search text"
      @search="onSearch" 
      @change="onChange"
    />
  </pf-space>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const value = ref<string>('');

    const onSearch = (searchValue: string) => {
      console.log('use value', searchValue);
      console.log('or use this.value', value.value);
    };
    const onChange = e => {
      console.log('e',e);
    };

    return {
      value,
      onSearch,
      onChange,
    };
  },
});
</script>
