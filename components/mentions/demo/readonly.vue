<docs>
---
order: 3
title:
  zh-CN: 无效或只读
  en-US: disabled or readonly
---

## zh-CN

通过 `disabled` 属性设置是否生效。通过 `readonly` 属性设置是否只读。

## en-US

Configurate disabled and readonly.

</docs>
<template>
  <div>
    <div style="margin-bottom: 10px">
      <pf-mentions v-model:value="value1" placeholder="this is disabled Mentions" disabled>
        <pf-mentions-option v-for="value in options" :key="value" :value="value">
          {{ value }}
        </pf-mentions-option>
      </pf-mentions>
    </div>
    <pf-mentions v-model:value="value2" placeholder="this is readOnly pf-mentions" readonly>
      <pf-mentions-option v-for="value in options" :key="value" :value="value">
        {{ value }}
      </pf-mentions-option>
    </pf-mentions>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const value1 = ref<string>('');
    const value2 = ref<string>('');
    const options = ref<string[]>(['afc163', 'zombieJ', 'yesmeck']);
    return {
      value1,
      value2,
      options,
    };
  },
});
</script>
