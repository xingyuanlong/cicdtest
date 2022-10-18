<docs>
---
order: 1
title:
  zh-CN: 类型
  en-US: Type
---

## zh-CN

支持三种类型：图片、Icon 以及字符，其中 Icon 和字符型可以自定义图标颜色及背景色。

## en-US

Image, Icon and letter are supported, and the latter two kinds avatar can have custom colors and background colors.
</docs>

<template>
  <pf-avatar>
    <template #icon>
      <UserOutlined />
    </template>
  </pf-avatar>
  <pf-avatar>U</pf-avatar>
  <pf-avatar>USER</pf-avatar>
  <pf-avatar src="https://joeschmoe.io/api/v1/random" />
  <pf-avatar style="color: #f56a00; background-color: #fde3cf">U</pf-avatar>
  <pf-avatar style="background-color: #87d068">
    <template #icon>
      <UserOutlined />
    </template>
  </pf-avatar>
</template>

<script lang="ts">
import { UserOutlined } from '@ant-design/icons-vue';
import { defineComponent } from 'vue';
export default defineComponent({
  components: {
    UserOutlined,
  },
});
</script>
