<docs>
---
order: 1
title:
  zh-CN: 国际化
  en-US: Locale text
---

## zh-CN

使用 `okText` 和 `cancelText` 自定义按钮文字。

## en-US

Set `okText` and `cancelText` props to customize the button's labels.

</docs>

<template>
  <pf-popconfirm 
    title="Are you sure？" 
    ok-text="Yes" 
    cancel-text="No"
    :okButtonProps="{type: 'primary', minWidth: '90px'}"
    :cancelButtonProps="{type: 'secondary', minWidth: '90px'}"
  >
    <a href="#">Delete</a>
  </pf-popconfirm>
</template>
