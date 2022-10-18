<docs>
---
order: 5
title:
  zh-CN: 布局
  en-US: Use with grid
---

## zh-CN

Checkbox.Group 内嵌 Checkbox 并与 Grid 组件一起使用，可以实现灵活的布局

## en-US

We can use Checkbox and Grid Checkbox.group, to implement complex layout

</docs>

<template>
  <pf-checkbox-group v-model:value="value" style="width: 100%">
    <pf-row>
      <pf-col :span="8">
        <pf-checkbox value="A">A</pf-checkbox>
      </pf-col>
      <pf-col :span="8">
        <pf-checkbox value="B">B</pf-checkbox>
      </pf-col>
      <pf-col :span="8">
        <pf-checkbox value="C">C</pf-checkbox>
      </pf-col>
      <pf-col :span="8">
        <pf-checkbox value="D">D</pf-checkbox>
      </pf-col>
      <pf-col :span="8">
        <pf-checkbox value="E">E</pf-checkbox>
      </pf-col>
    </pf-row>
  </pf-checkbox-group>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const value = ref([]);
    return {
      value,
    };
  },
});
</script>
