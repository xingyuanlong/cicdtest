<docs>
---
order: 8
title:
  zh-CN: 右键菜单
  en-US: Context Menu
---

## zh-CN

默认是移入触发菜单，可以点击鼠标右键触发。

## en-US

The default trigger mode is `hover`, you can change it to `contextMenu`.

</docs>

<template>
  <pf-dropdown :trigger="['contextmenu']">
    <div
      :style="{
        textAlign: 'center',
        background: '#f7f7f7',
        height: '200px',
        lineHeight: '200px',
        color: '#777',
      }"
    >
      Right Click on here
    </div>
    <template #overlay>
      <pf-menu>
        <pf-menu-item key="1">1st menu item</pf-menu-item>
        <pf-menu-item key="2">2nd menu item</pf-menu-item>
        <pf-menu-item key="3">3rd menu item</pf-menu-item>
      </pf-menu>
    </template>
  </pf-dropdown>
</template>
