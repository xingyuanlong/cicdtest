<docs>
---
order: 7
title:
  zh-CN: 额外的页脚
  en-US: Extra Footer
---

## zh-CN

在浮层中加入额外的页脚，以满足某些定制信息的需求。

## en-US

Render extra footer in panel for customized requirements.

</docs>

<template>
  <pf-space direction="vertical">
    <pf-date-picker>
      <template #renderExtraFooter>extra footer</template>
    </pf-date-picker>
    <pf-date-picker show-time>
      <template #renderExtraFooter>extra footer</template>
    </pf-date-picker>
    <pf-range-picker>
      <template #renderExtraFooter>extra footer</template>
    </pf-range-picker>
    <pf-range-picker show-time>
      <template #renderExtraFooter>extra footer</template>
    </pf-range-picker>
    <pf-date-picker placeholder="Select month" picker="month">
      <template #renderExtraFooter>extra footer</template>
    </pf-date-picker>
  </pf-space>
</template>
