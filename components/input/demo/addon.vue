<docs>
---
order: 8
title:
  zh-CN: 前置/后置标签
  en-US: Pre / Post tab
---

## zh-CN

用于配置一些固定组合。

## en-US

Using pre & post tabs example.

</docs>
<template>
  <pf-space direction="vertical">
    <pf-input v-model:value="value1" addon-before="Http://" addon-after=".com" />
    <pf-input v-model:value="value2">
      <template #addonBefore>
        <pf-select v-model:value="value3" style="width: 90px">
          <pf-select-option value="Http://">Http://</pf-select-option>
          <pf-select-option value="Https://">Https://</pf-select-option>
        </pf-select>
      </template>
      <template #addonAfter>
        <pf-select v-model:value="value4" style="width: 80px">
          <pf-select-option value=".com">.com</pf-select-option>
          <pf-select-option value=".jp">.jp</pf-select-option>
          <pf-select-option value=".cn">.cn</pf-select-option>
          <pf-select-option value=".org">.org</pf-select-option>
        </pf-select>
      </template>
    </pf-input>
    <pf-input v-model:value="value5">
      <template #addonAfter>
        <setting-outlined />
      </template>
    </pf-input>

    <pf-input v-model:value="value6">
      <template #addonBefore>
        <pf-cascader placeholder="cascader" style="width: 150px" />
      </template>
    </pf-input>
  </pf-space>
</template>

<script lang="ts">
import { SettingOutlined } from '@ant-design/icons-vue';
import { defineComponent, ref } from 'vue';
export default defineComponent({
  components: {
    SettingOutlined,
  },

  setup() {
    const value1 = ref<string>('mysite');
    const value2 = ref<string>('mysite');
    const value3 = ref<string>('Http://');
    const value4 = ref<string>('.com');
    const value5 = ref<string>('mysite');
    const value6 = ref<string>('mysite');
    return {
      value1,
      value2,
      value3,
      value4,
      value5,
      value6,
    };
  },
});
</script>
