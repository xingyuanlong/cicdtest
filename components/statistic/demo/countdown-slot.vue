<docs>
---
order: 4
title:
  zh-CN: 倒计时组件
  en-US: Countdown
---

## zh-CN

倒计时组件使用插槽。

## en-US

Countdown component slots.

</docs>

<template>
  <pf-row :gutter="16">
    <pf-col :span="12">
      <pf-statistic-countdown :value="deadline" style="margin-right: 50px" @finish="onFinish">
        <template #title>
          <span>Countdown</span>
          <pf-tooltip placement="right">
            <template #title>
              <span>hurry up!</span>
            </template>
            <question-circle-two-tone style="margin-left: 5px" />
          </pf-tooltip>
        </template>
      </pf-statistic-countdown>
    </pf-col>
    <pf-col :span="24" style="margin-top: 32px">
      <pf-statistic-countdown
        title="Million Seconds countdown"
        :value="deadline"
        format="HH:mm:ss:SSS"
        style="margin-right: 50px"
      >
        <template #prefix>
          <span>There's only</span>
        </template>
        <template #suffix>
          <span>left for the end.</span>
        </template>
      </pf-statistic-countdown>
    </pf-col>
  </pf-row>
</template>
<script lang="ts">
import { QuestionCircleTwoTone } from '@ant-design/icons-vue';
import { defineComponent } from 'vue';
export default defineComponent({
  components: {
    QuestionCircleTwoTone,
  },
  setup() {
    const onFinish = () => {
      console.log('finished!');
    };
    return {
      deadline: Date.now() + 1000 * 60 * 60 * 20 * 2,
      onFinish,
    };
  },
});
</script>
