<docs>
---
order: 4
title:
  zh-CN: 触发事件
  en-US: Click event
---

## zh-CN

点击菜单项后会触发事件，用户可以通过相应的菜单项 key 进行不同的操作。

## en-US

An event will be triggered when you click menu items, in which you can make different operations according to item's key.

</docs>

<template>
  <pf-dropdown>
    <a class="ant-dropdown-link" @click.prevent>
      Hover me, Click menu item
      <DownOutlined />
    </a>
    <template #overlay>
      <pf-menu @click="onClick">
        <pf-menu-item key="1">1st menu item</pf-menu-item>
        <pf-menu-item key="2">2nd menu item</pf-menu-item>
        <pf-menu-item key="3">3rd menu item</pf-menu-item>
      </pf-menu>
    </template>
  </pf-dropdown>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import ArrowDownFilled from '@pf-ui/pf-icons-vue/ArrowDownFilled'
import type { MenuProps } from 'pf-ui-vue';

export default defineComponent({
  components: {
    DownOutlined: ArrowDownFilled
  },
  setup() {
    const onClick: MenuProps['onClick'] = ({ key }) => {
      console.log(`Click on item ${key}`);
    };
    return {
      onClick,
    };
  },
});
</script>
