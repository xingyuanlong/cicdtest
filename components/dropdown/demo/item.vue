<docs>
---
order: 2
title:
  zh-CN: 其他元素
  en-US: Other elements
---

## zh-CN

分割线和不可用菜单项。

## en-US

Divider and disabled menu item.

</docs>

<template>
  <pf-dropdown>
    <a class="ant-dropdown-link" @click.prevent>
      Hover me
      <DownOutlined />
    </a>
    <template #overlay>
      <pf-menu>
        <pf-menu-item key="0">
          <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
            1st menu item
          </a>
        </pf-menu-item>
        <pf-menu-item key="1">
          <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
            2nd menu item
          </a>
        </pf-menu-item>
        <pf-menu-divider />
        <pf-menu-item key="3" disabled>3rd menu item（disabled）</pf-menu-item>
      </pf-menu>
    </template>
  </pf-dropdown>
</template>
<script lant="ts">
import { defineComponent } from 'vue';
import ArrowDownFilled from '@pf-ui/pf-icons-vue/ArrowDownFilled'
export default defineComponent({
  components: {
    DownOutlined: ArrowDownFilled,
  },
});
</script>
