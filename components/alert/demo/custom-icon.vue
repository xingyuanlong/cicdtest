<docs>
---
order: 7
title:
  zh-CN: 自定义图标
  en-US: Custom Icon
---

## zh-CN

可以自定义关闭，自定义的文字会替换原先的关闭 `Icon`。

## en-US

Custom Icon make information more clear and more friendly.

</docs>

<template>
  <pf-alert message="showIcon = false" type="success">
    <template #icon><smile-outlined /></template>
  </pf-alert>
  <pf-alert message="Success Tips" type="success" show-icon>
    <template #icon><smile-outlined /></template>
  </pf-alert>
  <pf-alert message="Informational Notes" type="info" show-icon>
    <template #icon><smile-outlined /></template>
  </pf-alert>
  <pf-alert message="Warning" type="warning" show-icon>
    <template #icon><smile-outlined /></template>
  </pf-alert>
  <pf-alert message="Error" type="error" show-icon>
    <template #icon><smile-outlined /></template>
  </pf-alert>
  <pf-alert
    message="Success Tips"
    description="Detailed description and advices about successful copywriting."
    type="success"
    show-icon
  >
    <template #icon><smile-outlined /></template>
  </pf-alert>
  <pf-alert
    message="Informational Notes"
    description="Additional description and informations about copywriting."
    type="info"
    show-icon
  >
    <template #icon><smile-outlined /></template>
  </pf-alert>
  <pf-alert
    message="Warning"
    description="This is a warning notice about copywriting."
    type="warning"
    show-icon
  >
    <template #icon><smile-outlined /></template>
  </pf-alert>
  <pf-alert
    message="Error"
    description="This is an error message about copywriting."
    type="error"
    show-icon
  >
    <template #icon><smile-outlined /></template>
  </pf-alert>
</template>

<script lang="ts">
import { SmileOutlined } from '@ant-design/icons-vue';
import { defineComponent } from 'vue';
export default defineComponent({
  components: {
    SmileOutlined,
  },
});
</script>
