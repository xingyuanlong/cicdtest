<docs>
---
order: 0
title:
  zh-CN: 基本用法
  en-US: Basic
---

## zh-CN

通过 `@pf-ui/pf-icons-vue` 引用 Icon 组件，不同主题的 Icon 组件名为图标名加主题做为后缀，也可以通过设置 `spin` 属性来实现动画旋转效果。

## en-US

Import icons from `@pf-ui/pf-icons-vue`, component name of icons with different theme is the icon name suffixed by the theme name. Specific the `spin` property to show spinning animation.

</docs>

<template>
  <pf-space>
    <loading-filled />
    <add-filled />
  </pf-space>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import {
  LoadingFilled,
  AddFilled,
} from '@pf-ui/pf-icons-vue';
export default defineComponent({
  components: {
    LoadingFilled,
    AddFilled
  },
});
</script>
