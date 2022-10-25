<docs>
---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
---
  
## zh-CN
  
基本用法  

## en-US
  
基本用法
</docs>

<template>
  <pf-watermark
    content="医疗机密"
    cross
    selectable
    :font-size="16"
    :line-height="16"
    :width="192"
    :height="128"
    :x-offset="12"
    :y-offset="28"
    :rotate="-15"
  >
    <pf-table :dataSource="dataSource" :columns="columns" :pagination="false" />
  </pf-watermark>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    return {
      dataSource: [
        {
          key: '1',
          name: '胡彦斌',
          age: 32,
          address: '西湖区湖底公园1号',
        },
        {
          key: '2',
          name: '胡彦祖',
          age: 42,
          address: '西湖区湖底公园2号',
        },
        {
          key: '3',
          name: '张三',
          age: 42,
          address: '西湖区湖底公园3号',
        },
        {
          key: '4',
          name: '李四',
          age: 42,
          address: '西湖区湖底公园4号',
        },
        {
          key: '5',
          name: '王五',
          age: 42,
          address: '西湖区湖底公园5号',
        },
      ],

      columns: [
        {
          title: '姓名',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: '年龄',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: '住址',
          dataIndex: 'address',
          key: 'address',
        },
      ],
    };
  },
});
</script>
