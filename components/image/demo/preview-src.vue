<docs>
---
order: 4
title:
  zh-CN: 自定义预览图片
  en-US: Custom preview image
---

## zh-CN

可以设置不同的预览图片。

## en-US

You can set different preview image.

</docs>

<template>
  <pf-image
    :width="200"
    src="https://aliyuncdn.antdv.com/logo.png"
    :preview="{
      src: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    }"
  />
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({});
</script>
