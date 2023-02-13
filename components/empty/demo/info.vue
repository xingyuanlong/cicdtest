<docs>
---
order: 5
title:
  zh-CN: 选择图片
  en-US: Chose image
---

## zh-CN

可以通过设置 `image` 为  `Empty.PRESENTED_IMAGE_INFO` 选择另外的图片风格.

## en-US

You can choose another style of `image` by setting image to `Empty.PRESENTED_IMAGE_INFO`.

</docs>
<template>
  <pf-empty :image="infoImage" />
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { PfEmpty } from '@pf-ui/pf-ui-vue';
export default defineComponent({
  setup() {
    return {
      infoImage: PfEmpty.PRESENTED_IMAGE_INFO,
    };
  },
});
</script>
```
  