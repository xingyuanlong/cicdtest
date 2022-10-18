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
import { notification } from 'pf-ui-vue';
import { defineComponent } from 'vue';
import type { NotificationPlacement } from 'pf-ui-vue';
export default defineComponent({
  components: {
    RadiusUpleftOutlined,
    RadiusUprightOutlined,
    RadiusBottomleftOutlined,
    RadiusBottomrightOutlined,
  },
  setup() {
    const openNotification = (placement: NotificationPlacement) => {
      notification.open({
        message: `Notification ${placement}`,
        description:
          'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
        placement,
      });
    };
    return {
      openNotification,
    };
  },
});
</script>
