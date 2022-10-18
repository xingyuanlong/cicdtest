<docs>
---
order: 13
title:
  zh-CN: 后缀图标
  en-US: Suffix
---

## zh-CN

通过 `suffixIcon` 自定义后缀图标

## en-US

Customize the suffix icon through `suffixIcon`

</docs>

<template>
  <pf-space direction="vertical">
    <pf-date-picker @change="onChange">
      <template #suffixIcon>
        <SmileOutlined />
      </template>
    </pf-date-picker>
    <pf-date-picker placeholder="Select month" picker="month" @change="onChange">
      <template #suffixIcon>
        <SmileOutlined />
      </template>
    </pf-date-picker>
    <pf-range-picker @change="onRangeChange">
      <template #suffixIcon>
        <SmileOutlined />
      </template>
    </pf-range-picker>
    <pf-date-picker placeholder="Select week" picker="week" @change="onChange">
      <template #suffixIcon>
        <SmileOutlined />
      </template>
    </pf-date-picker>
    <pf-date-picker suffix-icon="ab" @change="onChange" />
    <pf-date-picker suffix-icon="ab" placeholder="Select month" picker="month" @change="onChange" />
    <pf-range-picker suffix-icon="ab" @change="onRangeChange" />
    <pf-date-picker suffix-icon="ab" placeholder="Select week" picker="week" @change="onChange" />
  </pf-space>
</template>
<script lang="ts">
import { SmileOutlined } from '@ant-design/icons-vue';
import { Dayjs } from 'dayjs';
import { defineComponent } from 'vue';
export default defineComponent({
  components: {
    SmileOutlined,
  },
  setup() {
    const onChange = (date: Dayjs | string, dateString: string) => {
      console.log(date, dateString);
    };

    const onRangeChange = (date: [Dayjs, Dayjs], dateString: [string, string]) => {
      console.log(date, dateString);
    };
    return {
      onChange,
      onRangeChange,
    };
  },
});
</script>
