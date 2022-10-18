<docs>
---
order: 1
title:
  zh-CN: 不可用
  en-US: Disabled
---

## zh-CN

Switch 失效状态。

## en-US

Disabled state of `Switch`.

</docs>

<template>
  <div>
    <pf-switch v-model:checked="checked" :disabled="disabled" style="margin-bottom: 5px" />
    <br />
    <pf-button type="primary" @click="onToggle">Toggle disabled</pf-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const checked = ref<boolean>(true);
    const disabled = ref<boolean>(true);

    const onToggle = () => {
      disabled.value = !disabled.value;
    };

    return {
      checked,
      disabled,
      onToggle,
    };
  },
});
</script>
