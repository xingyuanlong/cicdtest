<docs>
---
order: 8
title:
  zh-CN: 平滑地卸载
  en-US: Smoothly Unmount
---

## zh-CN

平滑、自然的卸载提示。

## en-US

Smoothly and unaffectedly unmount Alert.

</docs>

<template>
  <pf-alert
    v-if="visible"
    message="Alert Message Text"
    type="success"
    closable
    :after-close="handleClose"
  />
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const visible = ref<boolean>(true);
    const handleClose = () => {
      visible.value = false;
    };
    return {
      visible,
      handleClose,
    };
  },
});
</script>
