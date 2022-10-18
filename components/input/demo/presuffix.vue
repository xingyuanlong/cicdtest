<docs>
---
order: 2
title:
  zh-CN: 前缀和后缀
  en-US: prefix and suffix
---

## zh-CN

在输入框上添加前缀或后缀图标。

## en-US

Add prefix or suffix icons inside input.

</docs>
<template>
  <div class="components-input-demo-presuffix">
    <pf-input v-model:value="userName" placeholder="Basic usage">
      <template #prefix>
        <user-outlined type="user" />
      </template>
      <template #suffix>
        <pf-tooltip title="Extra information">
          <info-circle-outlined style="color: rgba(0, 0, 0, 0.45)" />
        </pf-tooltip>
      </template>
    </pf-input>
    <br />
    <br />
    <pf-input prefix="￥" suffix="RMB" />
  </div>
</template>

<script lang="ts">
import { UserOutlined, InfoCircleOutlined } from '@ant-design/icons-vue';
import { defineComponent, ref } from 'vue';
export default defineComponent({
  components: {
    UserOutlined,
    InfoCircleOutlined,
  },

  setup() {
    const userName = ref<string>('');
    return {
      userName,
    };
  },
});
</script>
