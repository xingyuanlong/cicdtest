<docs>
---
order: 6
title:
  zh-CN: 位置
  en-US: Placement
---

## zh-CN

可以设置通知从右上角、右下角、左下角、左上角弹出。

## en-US

A notification box can pop up from `topRight` or `bottomRight` or `bottomLeft` or `topLeft`.

</docs>

<template>
  <div>
    <pf-button type="primary" @click="openNotification('topLeft')">
      <radius-upleft-outlined />
      topLeft
    </pf-button>
    <pf-button type="primary" @click="openNotification('topRight')">
      <radius-upright-outlined />
      topRight
    </pf-button>
    <pf-divider />
    <pf-button type="primary" @click="openNotification('bottomLeft')">
      <radius-bottomleft-outlined />
      bottomLeft
    </pf-button>
    <pf-button type="primary" @click="openNotification('bottomRight')">
      <radius-bottomright-outlined />
      bottomRight
    </pf-button>
  </div>
</template>
<script lang="ts">
import {
  RadiusUpleftOutlined,
  RadiusUprightOutlined,
  RadiusBottomleftOutlined,
  RadiusBottomrightOutlined,
} from '@ant-design/icons-vue';
import { Pfnotification } from '@pf-ui/pf-ui-vue';
import { defineComponent } from 'vue';
import type { NotificationPlacement } from '@pf-ui/pf-ui-vue';
export default defineComponent({
  components: {
    RadiusUpleftOutlined,
    RadiusUprightOutlined,
    RadiusBottomleftOutlined,
    RadiusBottomrightOutlined,
  },
  setup() {
    const openNotification = (placement: NotificationPlacement) => {
      Pfnotification.open({
        message: `预警信息(1/10)${placement}`,
        description: '病人柳石(床号：A03)检验血常规(五分类)(病房)中，血小板计数有预警值！',
        placement,
        duration: null,
        key: Math.round(Math.random() * 9).toString(),
        class: 'notice-height-205',
        bottom: '14px',
      });
    };
    return {
      openNotification,
    };
  },
});
</script>
<style>
.notice-height-205 {
  height: 205px;
}
</style>


