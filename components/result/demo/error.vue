<docs>
---
order: 9
title:
  zh-CN: Error
  en-US: Error
---

## zh-CN

复杂的错误反馈。

## en-US

Complex error feedback.

</docs>

<template>
  <pf-result
    status="error"
    title="Submission Failed"
    sub-title="Please check and modify the following information before resubmitting."
  >
    <template #extra>
      <pf-button key="console" type="secondary">Go Console</pf-button>
      <pf-button key="buy">Buy Again</pf-button>
    </template>

    <div class="desc">
      <p style="font-size: 16px">
        <strong>The content you submitted has the following error:</strong>
      </p>
      <p>
        <close-circle-outlined :style="{ color: 'red' }" />
        Your account has been frozen
        <a>Thaw immediately &gt;</a>
      </p>
      <p>
        <close-circle-outlined :style="{ color: 'red' }" />
        Your account is not yet eligible to apply
        <a>Apply Unlock &gt;</a>
      </p>
    </div>
  </pf-result>
</template>
<script lang="ts">
import { CloseCircleOutlined } from '@ant-design/icons-vue';
import { defineComponent } from 'vue';
export default defineComponent({
  components: {
    CloseCircleOutlined,
  },
});
</script>
<style scoped>
.desc p {
  margin-bottom: 1em;
}
</style>
