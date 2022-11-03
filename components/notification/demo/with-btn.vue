<docs>
---
order: 4
title:
  zh-CN: 自定义按钮
  en-US: Custom close button
---

## zh-CN

自定义关闭按钮的样式和文字。

## en-US

To customize the style or font of the close button.

</docs>

<template>
  <pf-button type="primary" @click="openNotification">Open the notification box</pf-button>
  <br />
  <br />
  <pf-button type="primary" @click="openNotification1">空的消息(用于自定义内容)</pf-button>
</template>

<script lang="ts">
import { notification, PfButton } from 'pf-ui-vue';
import { h, defineComponent } from 'vue';

const close = () => {
  console.log(
    'Notification was closed. Either the close button was clicked or duration time elapsed.',
  );
};
export default defineComponent({
  setup() {
    const openNotification = () => {
      const key = `open${Date.now()}`;
      notification.open({
        message: 'Notification Title',
        description:
          'A function will be be called after the notification is closed (automatically after the "duration" time of manually).',
        btn: () =>
          h(
            PfButton,
            {
              type: 'primary',
              size: 'small',
              onClick: () => notification.close(key),
            },
            { default: () => 'Confirm' },
          ),
        key,
        onClose: close,
      });
    };
    const openNotification1 = () => {
      const key = `open${Date.now()}-1`;
      notification.open({
        message:null,
        description:null,
        duration: null,
        key,
        closeIcon: false,
        class: 'notice-empty',
      });
    };

    return {
      openNotification,
      openNotification1,
    };
  },
});
</script>
<style>
  .notice-empty .pf-notification-notice-close {
    display: none;
  }
  .notice-empty .pf-notification-notice-message {
    display: none;
  }
  .notice-empty {
    height: 280px;
  }

</style>
