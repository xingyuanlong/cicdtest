<docs>
---
order: 2
title:
  zh-CN: 带有图标的通知提醒框
  en-US: Notification with icon
---

## zh-CN

通知提醒框左侧有图标。

## en-US

A notification box with a icon at the left side.

</docs>

<template>
  <div>
    <pf-button @click="() => openNotificationWithIcon('success')">Success</pf-button>
    <pf-button @click="() => openNotificationWithIcon('info')">Info</pf-button>
    <pf-button @click="() => openNotificationWithIcon('warning')">Warning</pf-button>
    <pf-button @click="() => openNotificationWithIcon('error')">Error</pf-button>
  </div>
</template>
<script lang="ts">
import { Pfnotification } from '@pf-ui/pf-ui-vue';
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    const openNotificationWithIcon = (type: string) => {
      Pfnotification[type]({
        message: 'Notification Title',
        description:
          'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
      });
    };

    return {
      openNotificationWithIcon,
    };
  },
});
</script>
