<docs>
---
order: 3
title:
  zh-CN: 倒计时
  en-US: Countdown
---

## zh-CN

倒计时组件。

## en-US

Countdown component.

</docs>

<template>
  <pf-row :gutter="16">
    <pf-col :span="12">
      <pf-statistic-countdown
        title="Countdown"
        :value="deadline"
        style="margin-right: 50px"
        @finish="onFinish"
      />
    </pf-col>
    <pf-col :span="12">
      <pf-statistic-countdown
        title="Million Seconds"
        :value="deadline"
        format="HH:mm:ss:SSS"
        style="margin-right: 50px"
      />
    </pf-col>
    <pf-col :span="24" style="margin-top: 32px">
      <pf-statistic-countdown title="Day Level" :value="deadline" format="D 天 H 时 m 分 s 秒" />
    </pf-col>
  </pf-row>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  setup() {
    const onFinish = () => {
      console.log('finished!');
    };
    return {
      deadline: Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30,
      onFinish,
    };
  },
});
</script>
