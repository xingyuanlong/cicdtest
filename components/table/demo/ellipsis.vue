<docs>
---
order: 28
title:
  en-US: ellipsis column
  zh-CN: 单元格自动省略
---

## zh-CN

设置 `column.ellipsis` 可以让单元格内容根据宽度自动省略，使用`pf-tooltip-table-ellipsis`展示完整内容。
> 列头缩略暂不支持和排序筛选一起使用。

## en-US

Ellipsis cell content via setting `column.ellipsis`.
> Cannot ellipsis table header with sorters and filters for now.

</docs>

<template>
  <pf-table :columns="columns" :data-source="data">
    <template #bodyCell="{ column, text }">
      <template v-if="column.dataIndex === 'name'">
        <a>{{ text }}</a>
      </template>
      <template v-if="column.ellipsis">
        <pf-tooltip-ellipsis :title="text">
          {{ text }}
        </pf-tooltip-ellipsis>
      </template>
    </template>
  </pf-table>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    width: 80,
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address 1',
    ellipsis: true,
  },
  {
    title: 'Long Column Long',
    dataIndex: 'address',
    key: 'address 2',
    ellipsis: true,
  },
  {
    title: 'Long Column2',
    dataIndex: 'address',
    key: 'address 3',
    ellipsis: true,
  },
  {
    title: 'Long Column',
    dataIndex: 'address',
    key: 'address 4',
    ellipsis: true,
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park, New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 2 Lake Park, London No. 2 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park, Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

export default defineComponent({
  setup() {
    return {
      data,
      columns,
    };
  },
});
</script>

<style scope>
.tooltip-other-color .pf-tooltip-inner{
    background: #fff;
    color: #333;
}
.tooltip-other-color  .pf-tooltip-arrow-content {
    background: #fff;
}
</style>
