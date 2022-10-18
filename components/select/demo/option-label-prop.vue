<docs>
---
order: 14
title:
  zh-CN: 定制回填内容
  en-US: Custom selection render
---

## zh-CN

使用 `optionLabelProp` 指定回填到选择框的 `Option` 属性。

或者使用 `tagRender` 插槽自定义渲染节点

## en-US

Spacified the prop name of Option which will be rendered in select box.

or use `tagRender` slot for custom rendering of tags.
</docs>

<template>
  <pf-space direction="vertical" style="width: 100%">
    <pf-select
      v-model:value="value"
      mode="multiple"
      style="width: 100%"
      placeholder="select one country"
      option-label-prop="children"
    >
      <pf-select-option value="china" label="China">
        <span role="img" aria-label="China">🇨🇳</span>
        &nbsp;&nbsp;China (中国)
      </pf-select-option>
      <pf-select-option value="usa" label="USA">
        <span role="img" aria-label="USA">🇺🇸</span>
        &nbsp;&nbsp;USA (美国)
      </pf-select-option>
      <pf-select-option value="japan" label="Japan">
        <span role="img" aria-label="Japan">🇯🇵</span>
        &nbsp;&nbsp;Japan (日本)
      </pf-select-option>
      <pf-select-option value="korea" label="Korea">
        <span role="img" aria-label="Korea">🇰🇷</span>
        &nbsp;&nbsp;Korea (韩国)
      </pf-select-option>
    </pf-select>

    <pf-select
      v-model:value="value"
      mode="multiple"
      style="width: 100%"
      placeholder="select one country"
      option-label-prop="label"
      :options="options"
    >
      <template #option="{ value: val, label, icon }">
        <span role="img" :aria-label="val">{{ icon }}</span>
        &nbsp;&nbsp;{{ label }}
      </template>
    </pf-select>
    <span>Note: v-slot:option support from v2.2.5</span>
  </pf-space>
  <br />
  <br />
  <pf-space direction="vertical" style="width: 100%">
    <pf-select
      v-model:value="value"
      mode="multiple"
      style="width: 100%"
      placeholder="select one country"
      :options="options"
    >
      <template #option="{ value: val, label, icon }">
        <span role="img" :aria-label="val">{{ icon }}</span>
        &nbsp;&nbsp;{{ label }}
      </template>
      <template #tagRender="{ value: val, label, closable, onClose, option }">
        <pf-tag :closable="closable" style="margin-right: 3px" @close="onClose">
          {{ label }}&nbsp;&nbsp;
          <span role="img" :aria-label="val">{{ option.icon }}</span>
        </pf-tag>
      </template>
    </pf-select>
  </pf-space>
</template>
<script lang="ts">
import { defineComponent, ref, watch } from 'vue';

export default defineComponent({
  setup() {
    const value = ref(['china']);

    const options = ref([
      {
        value: 'china',
        label: 'China (中国)',
        icon: '🇨🇳',
      },
      {
        value: 'usa',
        label: 'USA (美国)',
        icon: '🇺🇸',
      },
      {
        value: 'japan',
        label: 'Japan (日本)',
        icon: '🇯🇵',
      },
      {
        value: 'korea',
        label: 'Korea (韩国)',
        icon: '🇨🇰',
      },
    ]);
    watch(value, val => {
      console.log(`selected:`, val);
    });
    return {
      options,
      value,
    };
  },
});
</script>
