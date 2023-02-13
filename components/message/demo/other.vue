<docs>
---
order: 3
title:
  zh-CN: 其他提示类型
  en-US: Other types of message
---

## zh-CN

包括成功、失败、警告。

## en-US

Messages of success, error and warning types.

</docs>

<template>
  <pf-space>
    <pf-button @click="success">Success</pf-button>
    <pf-button @click="error">Error</pf-button>
    <pf-button @click="warning">Warning</pf-button>
  </pf-space>
</template>
<script lang="ts">
import { Pfmessage } from '@pf-ui/pf-ui-vue';
import { defineComponent } from 'vue';
export default defineComponent({
  setup() {
    const success = () => {
      Pfmessage.success('This is a success message');
    };
    const error = () => {
      Pfmessage.error('This is an error message');
    };
    const warning = () => {
      Pfmessage.warning('This is a warning message');
    };
    return {
      success,
      error,
      warning,
    };
  },
});
</script>
