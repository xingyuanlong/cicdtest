<docs>
---
order: 2
title:
  zh-CN: 自定义 Icon 图标
  en-US: Customize icon
---

## zh-CN

使用 `icon` 自定义提示 `icon`。

## en-US

Set `icon` props to customize the icon.

</docs>

<template>
  <pf-popconfirm 
    title="Are you sure？"
    :okButtonProps="{type: 'primary', minWidth: '90px'}"
    :cancelButtonProps="{type: 'secondary', minWidth: '90px'}"
  >
    <template #icon><question-circle-outlined style="color: red" /></template>
    <a href="#">Delete</a>
  </pf-popconfirm>
</template>
<script lang="ts">
import { QuestionCircleOutlined } from '@ant-design/icons-vue';
import { defineComponent } from 'vue';
export default defineComponent({
  components: {
    QuestionCircleOutlined,
  },
});
</script>
