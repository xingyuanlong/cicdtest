<docs>
---
order: 7
title:
  zh-CN: 菜单隐藏方式
  en-US: The way of hiding menu.
---

## zh-CN

默认是点击关闭菜单，可以关闭此功能。

## en-US

The default is to close the menu when you click on menu items, this feature can be turned off.

</docs>

<template>
  <pf-dropdown v-model:visible="visible">
    <a class="ant-dropdown-link" @click.prevent>
      Hover me
      <DownOutlined />
    </a>
    <template #overlay>
      <pf-menu @click="handleMenuClick">
        <pf-menu-item key="1">Clicking me will not close the menu.</pf-menu-item>
        <pf-menu-item key="2">Clicking me will not close the menu also.</pf-menu-item>
        <pf-menu-item key="3">Clicking me will close the menu</pf-menu-item>
      </pf-menu>
    </template>
  </pf-dropdown>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import ArrowDownFilled from '@pf-ui/pf-icons-vue/ArrowDownFilled'
import type { MenuProps } from '@pf-ui/pf-ui-vue';

export default defineComponent({
  components: {
    DownOutlined: ArrowDownFilled
  },
  setup() {
    const visible = ref(false);
    const handleMenuClick: MenuProps['onClick'] = e => {
      if (e.key === '3') {
        visible.value = false;
      }
    };
    return {
      visible,
      handleMenuClick,
    };
  },
});
</script>
