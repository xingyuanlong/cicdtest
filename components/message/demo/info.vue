<docs>
---
order: 0
title:
  zh-CN: 普通提示
  en-US: Normal prompt
---

## zh-CN

信息提醒反馈。

## en-US

Normal message for information.

</docs>

<template>
  <pf-button type="primary" @click="info">Display normal message</pf-button>
</template>
<script lang="ts">
import { Pfmessage } from '@pf-ui/pf-ui-vue';
import { defineComponent } from 'vue';
export default defineComponent({
  setup() {
    const info = () => {
      Pfmessage.info('This is a normal message');
    };
    return {
      info,
    };
  },
});
</script>
