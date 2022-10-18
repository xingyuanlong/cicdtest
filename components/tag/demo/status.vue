<docs>
---
order: 7
title:
  zh-CN: 预设状态的标签
  en-US: Status Tag
---

## zh-CN

预设五种状态颜色，可以通过设置 `color` 为 `success`、 `processing`、`error`、`default`、`warning` 来代表不同的状态。

## en-US

We preset five different colors, you can set color property such as `success`,`processing`,`error`,`default` and `warning` to indicate specific status.

</docs>

<template>
  <pf-divider orientation="left">Without icon</pf-divider>
  <div>
    <pf-tag color="success">success</pf-tag>
    <pf-tag color="processing">processing</pf-tag>
    <pf-tag color="error">error</pf-tag>
    <pf-tag color="warning">warning</pf-tag>
    <pf-tag color="default">default</pf-tag>
  </div>
  <pf-divider orientation="left">With icon</pf-divider>
  <div>
    <pf-tag color="success">
      <template #icon>
        <check-circle-outlined />
      </template>
      success
    </pf-tag>
    <pf-tag color="processing">
      <template #icon>
        <sync-outlined :spin="true" />
      </template>
      processing
    </pf-tag>
    <pf-tag color="error">
      <template #icon>
        <close-circle-outlined />
      </template>
      error
    </pf-tag>
    <pf-tag color="warning">
      <template #icon>
        <exclamation-circle-outlined />
      </template>
      warning
    </pf-tag>
    <pf-tag color="default">
      <template #icon>
        <clock-circle-outlined />
      </template>
      waiting
    </pf-tag>
    <pf-tag color="default">
      <template #icon>
        <minus-circle-outlined />
      </template>
      stop
    </pf-tag>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import {
  CheckCircleOutlined,
  SyncOutlined,
  CloseCircleOutlined,
  ExclamationCircleOutlined,
  ClockCircleOutlined,
  MinusCircleOutlined,
} from '@ant-design/icons-vue';

export default defineComponent({
  components: {
    CheckCircleOutlined,
    SyncOutlined,
    CloseCircleOutlined,
    ExclamationCircleOutlined,
    ClockCircleOutlined,
    MinusCircleOutlined,
  },
});
</script>
