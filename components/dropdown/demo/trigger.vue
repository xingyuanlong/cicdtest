<docs>
---
order: 3
title:
  zh-CN: 触发方式
  en-US: Trigger mode
---

## zh-CN

默认是移入触发菜单，可以点击触发。

## en-US

The default trigger mode is `hover`, you can change it to `click`.
</docs>

<template>
  <pf-dropdown :trigger="['click']" arrow>
    <a class="ant-dropdown-link" @click.prevent>
      Click me
      <DownOutlined />
    </a>
    <template #overlay>
      <pf-menu>
        <pf-menu-item key="0">
          <a href="http://www.alipay.com/">1st menu item</a>
        </pf-menu-item>
        <pf-menu-item key="1">
          <a href="http://www.taobao.com/">2nd menu item</a>
        </pf-menu-item>
        <pf-menu-divider />
        <pf-menu-item key="3">3rd menu item</pf-menu-item>
      </pf-menu>
    </template>
  </pf-dropdown>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import ArrowDownFilled from '@pf-ui/pf-icons-vue/ArrowDownFilled'
export default defineComponent({
  components: {
    DownOutlined: ArrowDownFilled
  },
});
</script>
