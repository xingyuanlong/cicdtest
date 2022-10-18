<docs>
---
order: 4
title:
  zh-CN: 信息提示
  en-US: Information modal dialog
---

## zh-CN

各种类型的信息提示，只提供一个按钮用于关闭。

## en-US

In the various types of information modal dialog, only one button to close dialog is provided.

</docs>

<template>
  <pf-space wrap>
    <pf-button @click="info">Info</pf-button>
    <pf-button @click="success">Success</pf-button>
    <pf-button @click="error">Error</pf-button>
    <pf-button @click="warning">Warning</pf-button>
  </pf-space>
</template>
<script lang="ts">
import { Modal } from 'pf-ui-vue';
import { defineComponent, h } from 'vue';
export default defineComponent({
  setup() {
    const info = () => {
      Modal.info({
        title: 'This is a notification message',
        content: h('div', {}, [
          h('p', 'some messages...some messages...'),
          h('p', 'some messages...some messages...'),
        ]),
        onOk() {
          console.log('ok');
        },
      });
    };
    const success = () => {
      Modal.success({
        title: 'This is a success message',
        content: h('div', {}, [
          h('p', 'some messages...some messages...'),
          h('p', 'some messages...some messages...'),
        ]),
      });
    };

    const error = () => {
      Modal.error({
        title: 'This is an error message',
        content: 'some messages...some messages...',
      });
    };

    const warning = () => {
      Modal.warning({
        title: 'This is a warning message',
        content: 'some messages...some messages...',
      });
    };

    return {
      info,
      success,
      error,
      warning,
    };
  },
});
</script>
