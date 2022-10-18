<docs>
---
order: 6
title:
  zh-CN: 多级菜单
  en-US: Cascading menu
---

## zh-CN

传入的菜单里有多个层级。

## en-US

The menu has multiple levels.

</docs>

<template>
  <pf-dropdown>
    <a class="ant-dropdown-link" @click.prevent>
      Cascading menu
      <DownOutlined />
    </a>
    <template #overlay>
      <pf-menu>
        <pf-menu-item>1st menu item</pf-menu-item>
        <pf-menu-item>2nd menu item</pf-menu-item>
        <pf-sub-menu key="sub1" title="sub menu">
          <pf-menu-item>3rd menu item</pf-menu-item>
          <pf-menu-item>4th menu item</pf-menu-item>
        </pf-sub-menu>
        <pf-sub-menu key="sub2" title="disabled sub menu" disabled>
          <pf-menu-item>5d menu item</pf-menu-item>
          <pf-menu-item>6th menu item</pf-menu-item>
        </pf-sub-menu>
      </pf-menu>
    </template>
  </pf-dropdown>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { DownOutlined } from '@ant-design/icons-vue';
export default defineComponent({
  components: {
    DownOutlined,
  },
});
</script>
