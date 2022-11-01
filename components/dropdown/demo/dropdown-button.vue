<docs>
---
order: 5
title:
  zh-CN: 带下拉框的按钮
  en-US: Button with dropdown menu
---

## zh-CN

左边是按钮，右边是额外的相关功能菜单。可设置 `icon` 属性来修改右边的图标。

## en-US

A button is on the left, and a related functional menu is on the right. You can set the icon property to modify the icon of right.

</docs>

<template>
  <div class="demo-dropdown-wrap">
    <pf-dropdown-button @click="handleButtonClick">
      Dropdown
      <template #overlay>
        <pf-menu @click="handleMenuClick">
          <pf-menu-item key="1">
            <UserOutlined />
            1st menu item
          </pf-menu-item>
          <pf-menu-item key="2">
            <UserOutlined />
            2nd menu item
          </pf-menu-item>
          <pf-menu-item key="3">
            <UserOutlined />
            3rd item
          </pf-menu-item>
        </pf-menu>
      </template>
    </pf-dropdown-button>
    <pf-dropdown-button>
      Dropdown
      <template #overlay>
        <pf-menu @click="handleMenuClick">
          <pf-menu-item key="1">
            <UserOutlined />
            1st menu item
          </pf-menu-item>
          <pf-menu-item key="2">
            <UserOutlined />
            2nd menu item
          </pf-menu-item>
          <pf-menu-item key="3">
            <UserOutlined />
            3rd item
          </pf-menu-item>
        </pf-menu>
      </template>
      <template #icon><UserOutlined /></template>
    </pf-dropdown-button>
    <pf-dropdown-button disabled @click="handleButtonClick">
      Dropdown
      <template #overlay>
        <pf-menu @click="handleMenuClick">
          <pf-menu-item key="1">
            <UserOutlined />
            1st menu item
          </pf-menu-item>
          <pf-menu-item key="2">
            <UserOutlined />
            2nd menu item
          </pf-menu-item>
          <pf-menu-item key="3">
            <UserOutlined />
            3rd item
          </pf-menu-item>
        </pf-menu>
      </template>
    </pf-dropdown-button>
    <pf-dropdown>
      <template #overlay>
        <pf-menu @click="handleMenuClick">
          <pf-menu-item key="1">
            <UserOutlined />
            1st menu item
          </pf-menu-item>
          <pf-menu-item key="2">
            <UserOutlined />
            2nd menu item
          </pf-menu-item>
          <pf-menu-item key="3">
            <UserOutlined />
            3rd item
          </pf-menu-item>
        </pf-menu>
      </template>
      <pf-button>
        Button
        <DownOutlined />
      </pf-button>
    </pf-dropdown>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { UserOutlined } from '@ant-design/icons-vue';
import ArrowDownFilled from '@pf-ui/pf-icons-vue/ArrowDownFilled'

import type { MenuProps } from 'pf-ui-vue';

export default defineComponent({
  components: {
    UserOutlined,
    DownOutlined: ArrowDownFilled
  },
  setup() {
    const handleButtonClick = (e: Event) => {
      console.log('click left button', e);
    };
    const handleMenuClick: MenuProps['onClick'] = e => {
      console.log('click', e);
    };
    return {
      handleButtonClick,
      handleMenuClick,
    };
  },
});
</script>
<style lang="less" scoped>
.demo-dropdown-wrap :deep(.pf-dropdown-button) {
  margin-right: 8px;
  margin-bottom: 8px;
}
</style>
