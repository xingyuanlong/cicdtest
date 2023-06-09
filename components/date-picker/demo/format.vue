<docs>
---
order: 1
title:
  zh-CN: 日期格式
  en-US: Date Format
---

## zh-CN

使用 `format` 属性，可以自定义日期显示格式。

## en-US

We can set the date format by `format`.

</docs>

<template>
  <pf-space direction="vertical" :size="12">
    <pf-date-picker v-model:value="value1" :format="dateFormat" />
    <pf-date-picker v-model:value="value2" :format="dateFormatList" />
    <pf-date-picker v-model:value="value3" :format="monthFormat" picker="month" />
    <pf-range-picker v-model:value="value4" :format="dateFormat" />
    <pf-date-picker v-model:value="value5" :format="customFormat" />
    <pf-date-picker v-model:value="value6" :format="customWeekStartEndFormat" picker="week" />
  </pf-space>
</template>
<script lang="ts">
import dayjs, { Dayjs } from 'dayjs';
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const dateFormat = 'YYYY/MM/DD';
    const weekFormat = 'MM/DD';
    const monthFormat = 'YYYY/MM';
    const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];

    const customWeekStartEndFormat = value =>
      `${dayjs(value).startOf('week').format(weekFormat)} ~ ${dayjs(value)
        .endOf('week')
        .format(weekFormat)}`;
    return {
      value1: ref<Dayjs>(dayjs('2015/01/01', dateFormat)),
      value2: ref<Dayjs>(dayjs('01/01/2015', dateFormatList[0])),
      value3: ref<Dayjs>(dayjs('2015/01', monthFormat)),
      value4: ref<[Dayjs, Dayjs]>([
        dayjs('2015/01/01', dateFormat),
        dayjs('2015/01/01', dateFormat),
      ]),
      value5: ref<Dayjs>(dayjs('2015/01/01', dateFormat)),
      value6: ref<Dayjs>(dayjs()),
      dateFormat,
      monthFormat,
      dateFormatList,
      customWeekStartEndFormat,
      customFormat: value => `custom format: ${value.format(dateFormat)}`,
    };
  },
});
</script>
