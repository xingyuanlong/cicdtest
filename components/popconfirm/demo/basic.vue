<docs>
---
order: 0
title:
  zh-CN: 基本用法
  en-US: Basic usage
---

## zh-CN

最简单的用法。

## en-US

The basic example.

</docs>

<template>
  <pf-popconfirm
    title="Are you sure delete this task!"
    ok-text="Yes"
    cancel-text="No"
    @confirm="confirm"
    @cancel="cancel"
    content="删除就无法恢复，请三思!"
    :okButtonProps="{type: 'secondary', minWidth: '90px'}"
    :cancelButtonProps="{type: 'secondary', minWidth: '90px'}"
  >
    <a href="#">Delete</a>
  </pf-popconfirm>

  <pf-popconfirm
    ok-text="确定"
    cancel-text="取消"
    @confirm="confirm"
    @cancel="cancel"
    :okButtonProps="{type: 'primary', minWidth: '90px'}"
    :cancelButtonProps="{type: 'secondary', minWidth: '90px'}"
  >
    <template #title>
      Are you sure delete this task?
    </template>
    <template #content>
      删除就无法恢复，请三思！
    </template>
    <a href="#" :style="{marginLeft: '10px'}">Delete</a>
  </pf-popconfirm>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { Pfmessage } from 'pf-ui-vue';
export default defineComponent({
  setup() {
    const confirm = (e: MouseEvent) => {
      console.log(e);
      Pfmessage.success('Click on Yes');
    };

    const cancel = (e: MouseEvent) => {
      console.log(e);
      Pfmessage.error('Click on No');
    };
    return {
      confirm,
      cancel,
    };
  },
});
</script>
<style>
</style>
