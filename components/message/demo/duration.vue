<docs>
---
order: 1
title:
  zh-CN: 修改延时
  en-US: Customize duration
---

## zh-CN

自定义时长 `10s`，默认时长为 `3s`。

## en-US

Customize message display duration from default `3s` to `10s`.

</docs>

<template>
  <pf-button @click="success">Customized display duration</pf-button>
</template>
<script lang="ts">
import { Pfmessage } from '@pf-ui/pf-ui-vue';
import { defineComponent } from 'vue';
export default defineComponent({
  setup() {
    const success = () => {
      Pfmessage.success(
        'This is a prompt message for success, and it will disappear in 10 seconds',
        10,
      );
    };
    return {
      success,
    };
  },
});
</script>
