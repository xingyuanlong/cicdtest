<docs>
---
order: 4
title:
  zh-CN: 条件触发
  en-US: Conditional trigger
---

## zh-CN

可以判断是否需要弹出。

## en-US

Make it pop up under some conditions.

</docs>

<template>
  <div>
    <pf-popconfirm
      title="Are you sure delete this task?"
      :visible="visible"
      ok-text="Yes"
      cancel-text="No"
      @visibleChange="handleVisibleChange"
      @confirm="confirm"
      @cancel="cancel"
    >
      <a href="#">Delete a task</a>
    </pf-popconfirm>
    <br />
    <br />
    Whether directly execute：
    <pf-checkbox v-model:checked="condition" />
  </div>
</template>
<script lang="ts">
import { Pfmessage } from '@pf-ui/pf-ui-vue';
import { ref, defineComponent } from 'vue';
export default defineComponent({
  setup() {
    const visible = ref<boolean>(false);
    const condition = ref<boolean>(true);

    const confirm = () => {
      visible.value = false;
      Pfmessage.success('Next step.');
    };

    const cancel = () => {
      visible.value = false;
      Pfmessage.error('Click on cancel.');
    };

    const handleVisibleChange = (bool: boolean) => {
      if (!bool) {
        visible.value = false;
        return;
      }
      // Determining condition before show the popconfirm.
      console.log(condition.value);
      if (condition.value) {
        confirm(); // next step
      } else {
        visible.value = true;
      }
    };
    return {
      visible,
      condition,
      confirm,
      cancel,
      handleVisibleChange,
    };
  },
});
</script>
