<docs>
---
order: 0
title:
  zh-CN: 基本用法
  en-US: Basic usage
---

## zh-CN

第一个对话框。

## en-US

Basic modal.

</docs>

<template>
  <div>
    <pf-button type="primary" @click="showModal">Open Modal</pf-button>
    <pf-modal v-model:visible="visible" title="Basic Modal" @ok="handleOk" headerBg>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </pf-modal>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const visible = ref<boolean>(false);

    const showModal = () => {
      visible.value = true;
    };

    const handleOk = (e: MouseEvent) => {
      console.log(e);
      visible.value = false;
    };
    return {
      visible,
      showModal,
      handleOk,
    };
  },
});
</script>
