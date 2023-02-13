<docs>
---
order: 7
version: 3.0
title:
  zh-CN: 基于 Promise 的异步关闭 (3.0+)
  en-US: Asynchronously close on Promise (3.0+)
---

## zh-CN

点击确定后异步关闭 Popconfirm，例如提交表单。

## en-US

Asynchronously close a popconfirm when the OK button is pressed. For example, you can use this pattern when you submit a form.

</docs>

<template>
  <pf-popconfirm 
    title="Title" 
    @confirm="confirm" 
    @cancel="cancel"
    :okButtonProps="{type: 'primary', minWidth: '90px'}"
    :cancelButtonProps="{type: 'secondary', minWidth: '90px'}"
  >
    <pf-button type="primary">Open Popconfirm with Promise</pf-button>
  </pf-popconfirm>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { Pfmessage } from '@pf-ui/pf-ui-vue';
export default defineComponent({
  setup() {
    const confirm = (e: MouseEvent) => {
      console.log(e);
      return new Promise(resolve => {
        setTimeout(() => resolve(true), 3000);
      });
    };

    const cancel = (e: MouseEvent) => {
      console.log(e);
      Pfmessage.error('Click on No');
    };
    return {
      confirm,
      cancel,
    };
  },
});
</script>
