<docs>
---
order: 97
title:
  en-US: Stripe Style
  zh-CN: 带斑马纹表格
---

## zh-CN
利用 `striped` 可生成默认默认样式的表格。
另外可以使用 `rowClassName` 来自定义带斑马纹的表格。

## en-US
Use `rowClassName` Customize the table with Striped.

</docs>

<template>
  <a-table
    class="ant-table-striped"
    :columns="columns"
    :data-source="data"
    striped
  />

  <a-table
    class="ant-table-striped"
    :columns="columns"
    :data-source="data1"
    striped
  />

  <a-table
    class="ant-table-striped"
    :columns="columns"
    :data-source="data"
    :row-class-name="(_record, index) => (index % 2 === 1 ? 'table-striped' : null)"
    bordered
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

const columns = [
  { title: 'Name', dataIndex: 'name' },
  { title: 'Age', dataIndex: 'age' },
  { title: 'Address', dataIndex: 'address' },
];
const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'Ben Kang',
    age: 15,
    address: 'Sidney No. 1 Lake Park',
  },
];

const data1 = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  }
];

export default defineComponent({
  setup() {
    return {
      data,
      columns,
      data1,
    };
  },
});
</script>

<style scoped>
  
</style>
