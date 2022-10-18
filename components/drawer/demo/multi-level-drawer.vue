<docs>
---
order: 5
title:
  zh-CN: 多层抽屉
  en-US: Multi-level drawer
---

## zh-CN

在抽屉内打开新的抽屉，用以解决多分支任务的复杂状况。

## en-US

Open a new drawer on top of an existing drawer to handle multi branch tasks.

</docs>

<template>
  <pf-button type="primary" @click="showDrawer">Open</pf-button>
  <pf-drawer
    v-model:visible="visible"
    title="Multi-level drawer"
    width="520"
    :closable="false"
    @close="onClose"
  >
    <pf-button type="primary" @click="showChildrenDrawer">Two-level drawer</pf-button>
    <pf-drawer
      v-model:visible="childrenDrawer"
      title="Two-level Drawer"
      width="320"
      :closable="false"
    >
      <pf-button type="primary" @click="showChildrenDrawer">This is two-level drawer</pf-button>
    </pf-drawer>

    <template #footer>
      <pf-button type="primary" @click="onClose" style="margin-right: 16px">Submit</pf-button>
      <pf-button @click="onClose">Cancel</pf-button>
    </template>
  </pf-drawer>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const visible = ref<boolean>(false);

    const childrenDrawer = ref<boolean>(false);

    const showDrawer = () => {
      visible.value = true;
    };
    const onClose = () => {
      visible.value = false;
    };
    const showChildrenDrawer = () => {
      childrenDrawer.value = true;
    };
    return {
      visible,
      childrenDrawer,
      showDrawer,
      onClose,
      showChildrenDrawer,
    };
  },
});
</script>
