<docs>
---
order: 3
title:
  zh-CN: 含有辅助性文字介绍
  en-US: Description
---

## zh-CN

含有辅助性文字介绍的警告提示。

## en-US

Additional description for alert message.

</docs>

<template>
  <pf-alert message="Success Text" type="success">
    <template #description>
      <p>
        Success Description
        <span style="color: red">Success</span>
        Description Success Description
      </p>
    </template>
  </pf-alert>
  <pf-alert
    message="Info Text"
    description="Info Description Info Description Info Description Info Description"
    type="info"
  />
  <pf-alert
    message="Warning Text"
    description="Warning Description Warning Description Warning Description Warning Description"
    type="warning"
  />
  <pf-alert
    message="Error Text"
    description="Error Description Error Description Error Description Error Description"
    type="error"
  />
</template>
