<docs>
---
order: 2
title:
  zh-CN: 加载中
  en-US: Message with loading indicator
---

## zh-CN

进行全局 loading，异步自行移除。

## en-US

Display a global loading indicator, which is dismissed by itself asynchronously.

</docs>

<template>
  <pf-button @click="success">Display a loading indicator</pf-button>
</template>
<script lang="ts">
import { Pfmessage } from 'pf-ui-vue';
import { defineComponent } from 'vue';
export default defineComponent({
  setup() {
    const success = () => {
      const hide = Pfmessage.loading('Action in progress..', 0);
      setTimeout(hide, 2500);
    };
    return {
      success,
    };
  },
});
</script>
