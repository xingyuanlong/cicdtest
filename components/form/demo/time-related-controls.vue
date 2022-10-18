<docs>
---
order: 16
title:
  zh-CN: 时间类控件
  en-US: Time-related Controls
---

## zh-CN

时间类组件的 `value` 类型为 `dayjs` 对象，所以在提交服务器前需要预处理。

或者使用 `valueFormat` 组件内部会自动处理。

## en-US

The `value` of time-related components is a `dayjs` object, which we need to pre-process it before we submit to server.

or use `valueFormat` to format.
</docs>
<template>
  <pf-form
    :model="formState"
    name="time_related_controls"
    v-bind="formItemLayout"
    @finish="onFinish"
    @finishFailed="onFinishFailed"
  >
    <pf-form-item name="date-picker" label="DatePicker" v-bind="config">
      <pf-date-picker v-model:value="formState['date-picker']" value-format="YYYY-MM-DD" />
    </pf-form-item>
    <pf-form-item name="date-time-picker" label="DatePicker[showTime]" v-bind="config">
      <pf-date-picker
        v-model:value="formState['date-time-picker']"
        show-time
        format="YYYY-MM-DD HH:mm:ss"
        value-format="YYYY-MM-DD HH:mm:ss"
      />
    </pf-form-item>
    <pf-form-item name="month-picker" label="MonthPicker" v-bind="config">
      <pf-date-picker
        v-model:value="formState['month-picker']"
        value-format="YYYY-MM"
        picker="month"
      />
    </pf-form-item>
    <pf-form-item name="range-picker" label="RangePicker" v-bind="rangeConfig">
      <pf-range-picker v-model:value="formState['range-picker']" value-format="YYYY-MM-DD" />
    </pf-form-item>
    <pf-form-item name="range-time-picker" label="RangePicker[showTime]" v-bind="rangeConfig">
      <pf-range-picker
        v-model:value="formState['range-time-picker']"
        show-time
        format="YYYY-MM-DD HH:mm:ss"
        value-format="YYYY-MM-DD HH:mm:ss"
      />
    </pf-form-item>
    <pf-form-item name="time-picker" label="TimePicker" v-bind="config">
      <pf-time-picker v-model:value="formState['time-picker']" value-format="HH:mm:ss" />
    </pf-form-item>
    <pf-form-item
      :wrapper-col="{
        xs: { span: 24, offset: 0 },
        sm: { span: 16, offset: 8 },
      }"
      style="margin-top: 24px;"
    >
      <pf-button type="primary" html-type="submit">Submit</pf-button>
    </pf-form-item>
  </pf-form>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue';

interface FormState {
  'date-picker': string;
  'date-time-picker': string;
  'month-picker': string;
  'range-picker': [string, string];
  'range-time-picker': [string, string];
  'time-picker': string;
}
export default defineComponent({
  setup() {
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const config = {
      rules: [{ type: 'string' as const, required: true, message: 'Please select time!' }],
    };
    const rangeConfig = {
      rules: [{ type: 'array' as const, required: true, message: 'Please select time!' }],
    };
    const formState = reactive({} as FormState);
    const onFinish = (values: any) => {
      console.log('Success:', values, formState);
    };

    const onFinishFailed = (errorInfo: any) => {
      console.log('Failed:', errorInfo);
    };
    return {
      formState,
      onFinish,
      onFinishFailed,
      formItemLayout,
      config,
      rangeConfig,
    };
  },
});
</script>
