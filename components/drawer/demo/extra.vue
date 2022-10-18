<docs>
---
order: 2
title:
  zh-CN: 额外操作
  en-US: Extra Actions
---

## zh-CN

内容较多时，操作按钮建议放在抽屉的底部，可以使用 footer 属性来实现，内容较少时，操作按钮建议放在内容下方。

## en-US

Extra actions should be placed at corner of drawer in Ant Design, you can using `extra` prop for that.

</docs>

<template>
  <pf-radio-group v-model:value="placement" style="margin-right: 8px">
    <pf-radio value="top">top</pf-radio>
    <pf-radio value="right">right</pf-radio>
    <pf-radio value="bottom">bottom</pf-radio>
    <pf-radio value="left">left</pf-radio>
  </pf-radio-group>
  <pf-button type="primary" @click="showDrawer">Open</pf-button>
  <pf-drawer
    :width="500"
    title="Basic Drawer"
    :placement="placement"
    :visible="visible"
    @close="onClose"
  >
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
    <template #footer>
      <pf-button style="margin-right: 16px" type="primary" @click="onClose">Submit</pf-button>
      <pf-button @click="onClose">Cancel</pf-button>
    </template>
  </pf-drawer>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import type { DrawerProps } from 'pf-ui-vue';
export default defineComponent({
  setup() {
    const placement = ref<DrawerProps['placement']>('left');
    const visible = ref<boolean>(false);

    const showDrawer = () => {
      visible.value = true;
    };

    const onClose = () => {
      visible.value = false;
    };
    return {
      placement,
      visible,
      showDrawer,
      onClose,
    };
  },
});
</script>
