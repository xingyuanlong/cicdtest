<docs>
---
order: 7
title:
  zh-CN: 更新消息内容
  en-US: Update Message Content
---

## zh-CN

可以通过唯一的 key 来更新内容, 或者通过响应式数据更新。

## en-US

Update content with unique key, or use reactive data.

</docs>

<template>
  <pf-button type="primary" @click="openNotification">
    Open the notification box (update by key)
  </pf-button>
  <br />
  <br />
  <pf-button type="primary" @click="openNotification2">
    Open the notification box (update by reactive)
  </pf-button>
</template>
<script lang="ts">
import { Pfnotification } from 'pf-ui-vue';
import { defineComponent, ref } from 'vue';
const key = 'updatable';
export default defineComponent({
  setup() {
    const openNotification = () => {
      Pfnotification.open({
        key,
        message: 'Notification Title',
        description: 'description.',
      });
      setTimeout(() => {
        Pfnotification.open({
          key,
          message: 'New Title',
          description: 'New description.',
        });
      }, 1000);
    };
    const message = ref('Notification Title');
    const description = ref('description');
    const openNotification2 = () => {
      // content must use function
      Pfnotification.open({
        message: () => message.value,
        description: () => description.value,
      });
      setTimeout(() => {
        message.value = 'New Title';
        description.value = 'New description.';
      }, 1000);
    };
    return {
      openNotification,
      openNotification2,
    };
  },
});
</script>
