<docs>
---
order: 7
title:
  zh-CN: 预设宽度
  en-US: Presetted size
---

## zh-CN

抽屉的默认宽度为 `500px`，另外还提供一个大号抽屉 `800px`，可以用 size 属性来设置。

## en-US

The default width (or height) of Drawer is `500px`, and there is a presetted large size `800px`.

</docs>

<template>
  <pf-button type="primary" style="margin-right: 8px" @click="showDrawer('default')">
    Open Default Size (500px)
  </pf-button>
  <pf-button type="primary" @click="showDrawer('large')">Open Large Size (800px)</pf-button>
  <pf-drawer title="Basic Drawer" :size="size" :visible="visible" @close="onClose">
    <template #footer>
      <pf-button type="primary" @click="onClose" style="margin-right: 16px">Submit</pf-button>
      <pf-button @click="onClose">Cancel</pf-button>
    </template>
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
  </pf-drawer>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import type { DrawerProps } from '@pf-ui/pf-ui-vue';
export default defineComponent({
  setup() {
    const visible = ref<boolean>(false);
    const size = ref<DrawerProps['size']>('default');

    const showDrawer = (val: DrawerProps['size']) => {
      size.value = val;
      visible.value = true;
    };

    const onClose = () => {
      visible.value = false;
    };
    return {
      visible,
      size,
      showDrawer,
      onClose,
    };
  },
});
</script>
