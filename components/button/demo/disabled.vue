<docs>
---
order: 3
title:
  zh-CN: 不可用状态
  en-US: Disabled
---

## zh-CN

添加 `disabled` 属性即可让按钮处于不可用状态，同时按钮样式也会改变。

## en-US

To mark a button as disabled, add the `disabled` property to the `Button`.
</docs>

<template>
  <pf-button type="primary">Primary</pf-button>
  <pf-button type="primary" disabled>Primary(disabled)</pf-button>
  <br />
  <pf-button type="secondary">Secondary</pf-button>
  <pf-button type="secondary" disabled>Secondary(disabled)</pf-button>
  <br />
  <pf-button>Default</pf-button>
  <pf-button disabled>Default(disabled)</pf-button>
  <br />
  <pf-button type="dashed">Dashed</pf-button>
  <pf-button type="dashed" disabled>Dashed(disabled)</pf-button>
  <br />
  <pf-button type="text">Text</pf-button>
  <pf-button type="text" disabled>Text(disabled)</pf-button>
  <br />
  <pf-button type="link">Link</pf-button>
  <pf-button type="link" disabled>Link(disabled)</pf-button>
  <br />
  <pf-button danger>Danger Default</pf-button>
  <pf-button danger disabled>Danger Default(disabled)</pf-button>
  <br />
  <pf-button type="text" danger>Danger Text</pf-button>
  <pf-button type="text" danger disabled>Danger Text(disabled)</pf-button>
  <br />
  <pf-button type="link" danger>Danger Link</pf-button>
  <pf-button type="link" danger disabled>Danger Link(disabled)</pf-button>
  <br />

  <div :style="{ padding: '8px 8px 0 8px', background: 'rgb(190, 200, 200)' }">
    <pf-button ghost>Ghost</pf-button>
    <pf-button ghost disabled>Ghost(disabled)</pf-button>
  </div>
</template>
