<docs>
---
order: 0
title:
  zh-CN: 基本用法
  en-US: Basic usage
---

## zh-CN

基础列表。

## en-US

Basic list.

</docs>

<template>
  <pf-list item-layout="horizontal" :data-source="data">
    <template #renderItem="{ item }">
      <pf-list-item>
        <pf-list-item-meta
          description="Ant Design, a design language for background applications, is refined by Ant UED Team"
        >
          <template #title>
            <a href="https://www.antdv.com/">{{ item.title }}</a>
          </template>
          <template #avatar>
            <pf-avatar src="https://joeschmoe.io/api/v1/random" />
          </template>
        </pf-list-item-meta>
      </pf-list-item>
    </template>
  </pf-list>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
interface DataItem {
  title: string;
}
const data: DataItem[] = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
];
export default defineComponent({
  setup() {
    return {
      data,
    };
  },
});
</script>
