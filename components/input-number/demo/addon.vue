<docs>
---
order: 2
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
    <pf-input-number v-model:value="value1" addon-before="+" addon-after="$"></pf-input-number>
    <pf-input-number v-model:value="value2">
      <template #addonBefore>
        <pf-select v-model:value="addonBeforeValue" style="width: 60px">
          <pf-select-option value="add">+</pf-select-option>
          <pf-select-option value="minus">-</pf-select-option>
        </pf-select>
      </template>
      <template #addonAfter>
        <pf-select v-model:value="addonAfterValue" style="width: 60px">
          <pf-select-option value="USD">$</pf-select-option>
          <pf-select-option value="EUR">€</pf-select-option>
          <pf-select-option value="GBP">£</pf-select-option>
          <pf-select-option value="CNY">¥</pf-select-option>
        </pf-select>
      </template>
    </pf-input-number>
    <pf-input-number v-model:value="value3">
      <template #addonAfter><SettingOutlined /></template>
    </pf-input-number>
    <pf-input-number v-model:value="value4">
      <template #addonAfter>
        <pf-cascader placeholder="cascader" style="width: 150px" />
      </template>
    </pf-input-number>
  </pf-space>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { SettingOutlined } from '@ant-design/icons-vue';
export default defineComponent({
  components: { SettingOutlined },
  setup() {
    return {
      value1: ref(100),
      value2: ref(100),
      value3: ref(100),
      value4: ref(100),
      addonBeforeValue: ref('add'),
      addonAfterValue: ref('USD'),
    };
  },
});
</script>
