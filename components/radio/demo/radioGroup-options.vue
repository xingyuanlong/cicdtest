<docs>
---
order: 5
title:
  zh-CN: RadioGroup 组合 - 配置方式
  en-US: RadioGroup group - optional
---

## zh-CN

通过配置 `options` 参数来渲染单选框。

## en-US

Render radios by configuring `options`.

</docs>
<template>
  <pf-space direction="vertical">
    <pf-radio-group v-model:value="value1" :options="plainOptions" />
    <pf-radio-group v-model:value="value2" :options="optionsWithDisabled" />
    <pf-radio-group v-model:value="value3" :options="plainOptions" disabled />
    <pf-radio-group v-model:value="value1" option-type="button" :options="plainOptions" />
    <pf-radio-group v-model:value="value2" option-type="button" :options="optionsWithDisabled" />
  </pf-space>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { RadioGroupProps } from '@pf-ui/pf-ui-vue';
const plainOptions = ['Apple', 'Pear', 'Orange'];
const options = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange' },
];
const optionsWithDisabled: RadioGroupProps['options'] = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange', disabled: true },
];
export default defineComponent({
  data() {
    const value1 = ref<string>('Apple');
    const value2 = ref<string>('Apple');
    const value3 = ref<string>('Apple');

    return {
      plainOptions,
      options,
      optionsWithDisabled,
      value1,
      value2,
      value3,
    };
  },
});
</script>
