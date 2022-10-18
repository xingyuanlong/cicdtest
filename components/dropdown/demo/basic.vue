<docs>
---
order: 0
title:
  zh-CN: 基本
  en-US: Basic Usage
---

## zh-CN

最简单的下拉菜单。

## en-US

The most basic dropdown menu.

</docs>

<template>
  <pf-dropdown>
    <a class="ant-dropdown-link" @click.prevent>
      Hover me
      <DownOutlined />
    </a>
    <template #overlay>
      <pf-menu>
        <pf-menu-item>
          <a href="javascript:;">1st menu item</a>
        </pf-menu-item>
        <pf-menu-item>
          <a href="javascript:;">2nd menu item</a>
        </pf-menu-item>
        <pf-menu-item>
          <a href="javascript:;">3rd menu item</a>
        </pf-menu-item>
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
