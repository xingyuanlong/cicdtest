<docs>
---
order: 10
title:
  zh-CN: 导航步骤
  en-US: Navigation Steps
---

## zh-CN

导航类型的步骤条。

## en-US

Navigation steps.
</docs>

<template>
  <div>
    <pf-steps v-model:current="current" type="navigation" size="small" :style="stepStyle">
      <pf-step
        title="Step 1"
        sub-title="00:00:05"
        status="finish"
        description="This is a description."
      />
      <pf-step
        title="Step 2"
        sub-title="00:01:02"
        status="process"
        description="This is a description."
      />
      <pf-step
        title="Step 3"
        sub-title="waiting for longlong time"
        status="wait"
        description="This is a description."
      />
    </pf-steps>
    <pf-steps v-model:current="current" type="navigation" :style="stepStyle">
      <pf-step status="finish" title="Step 1" />
      <pf-step status="process" title="Step 2" />
      <pf-step status="wait" title="Step 3" />
      <pf-step status="wait" title="Step 4" />
    </pf-steps>
    <pf-steps v-model:current="current" type="navigation" size="small" :style="stepStyle">
      <pf-step status="finish" title="finish 1" />
      <pf-step status="finish" title="finish 2" />
      <pf-step status="process" title="current process" />
      <pf-step status="wait" title="wait" disabled />
    </pf-steps>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const current = ref<number>(0);

    return {
      current,
      stepStyle: {
        marginBottom: '60px',
        boxShadow: '0px -1px 0 0 #e8e8e8 inset',
      },
    };
  },
});
</script>
