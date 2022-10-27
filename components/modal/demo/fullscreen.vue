<docs>
---
order: 0
title:
  zh-CN: 全屏
  en-US: full screen
---

## zh-CN

使用样式定义一个全屏弹窗

## en-US

Full screen by custom style.

</docs>

<template>
  <div>
    <pf-button type="primary" @click="showModal">Open Modal</pf-button>
    <pf-modal
      v-model:visible="visible"
      title="Basic Modal"
      width="100%"
      wrap-class-name="full-modal"
      @ok="handleOk"
    >
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
<style lang="less">
.full-modal {
  .pf-modal {
    max-width: 100%;
    top: 0;
    padding-bottom: 0;
    margin: 0;
  }
  .pf-modal-content {
    display: flex;
    flex-direction: column;
    height: calc(100vh);
  }
  .pf-modal-body {
    flex: 1;
  }
}
</style>
