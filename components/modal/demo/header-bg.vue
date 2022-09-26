<docs>
---
order: 13
title:
  zh-CN: 切换header样式
  en-US: Header mode
---

## zh-CN

通过headerBg切换header样式

## en-US

headerBg.

</docs>

<template>
  <div>
    <a-button type="primary" @click="showModal">Open Modal</a-button>
    <a-modal v-model:visible="visible" title="Basic Modal" @ok="handleOk" :header-bg="headerBg">
      <a-radio-group v-model:value="headerBg" name="radioGroup">
        <a-radio :value="true">有背景色</a-radio>
        <a-radio :value="false">无背景色</a-radio>
      </a-radio-group>
    </a-modal>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const visible = ref<boolean>(false);
    const headerBg = ref<boolean>(true);

    const showModal = () => {
      visible.value = true;
    };

    const handleOk = (e: MouseEvent) => {
      console.log(e);
      visible.value = false;
    };
    return {
      visible,
      headerBg,
      showModal,
      handleOk,
    };
  },
});
</script>
  