<docs>
---
order: 3
title:
  zh-CN: 选择图片
  en-US: Chose image
---

## zh-CN

可以通过设置 `image` 为 `Empty.PRESENTED_IMAGE_SIMPLE` 选择另外的图片风格。

## en-US

You can choose another style of `image` by setting image to `Empty.PRESENTED_IMAGE_SIMPLE` .

</docs>
<template>
  <pf-empty :image="simpleImage" />
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { PfEmpty } from 'pf-ui-vue';
export default defineComponent({
  setup() {
    return {
      simpleImage: PfEmpty.PRESENTED_IMAGE_SIMPLE
    };
  },
});
</script>
```
