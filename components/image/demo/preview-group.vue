<docs>
---
order: 3
title:
  zh-CN: 多张图片预览
  en-US: Multiple image preview
---

## zh-CN

点击左右切换按钮可以预览多张图片。

## en-US

Click the left and right switch buttons to preview multiple images.

</docs>

<template>
  <pf-image-preview-group>
    <pf-image :width="200" src="https://aliyuncdn.antdv.com/vue.png" />
    <pf-image :width="200" src="https://aliyuncdn.antdv.com/logo.png" />
  </pf-image-preview-group>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({});
</script>
