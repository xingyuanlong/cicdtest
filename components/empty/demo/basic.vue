<docs>
---
order: 0
title:
  zh-CN: 基本用法
  en-US: Basic usage
---

## zh-CN

简单的展示。

## en-US

Simplest Usage.

</docs>

<template>
  <a-empty :description='noData' />
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  export default defineComponent({
    setup() {
      return {
        noData: '暂无搜索数据'
      };
    },
  });
  
  </script>

