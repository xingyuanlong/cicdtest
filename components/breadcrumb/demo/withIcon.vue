<docs>
---
order: 1
title:
  zh-CN: 带有图标的
  en-US: With an Icon
---

## zh-CN

图标放在文字前面。

## en-US

The icon should be placed in front of the text.

</docs>

<template>
  <pf-breadcrumb>
    <pf-breadcrumb-item href="">
      <home-outlined />
    </pf-breadcrumb-item>
    <pf-breadcrumb-item href="">
      <user-outlined />
      <span>Application List</span>
    </pf-breadcrumb-item>
    <pf-breadcrumb-item>Application</pf-breadcrumb-item>
  </pf-breadcrumb>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { HomeOutlined, UserOutlined } from '@ant-design/icons-vue';
export default defineComponent({
  components: {
    HomeOutlined,
    UserOutlined,
  },
});
</script>
