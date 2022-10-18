<docs>
---
order: 1
title:
  zh-CN: 自定义位置
  en-US: Custom Placement
---

## zh-CN

自定义位置，点击触发按钮抽屉从相应的位置滑出，点击遮罩区关闭

## en-US

The Drawer can appear from any edge of the screen.

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
    title="Basic Drawer"
    :placement="placement"
    :closable="false"
    :visible="visible"
    @close="onClose"
  >
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
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
