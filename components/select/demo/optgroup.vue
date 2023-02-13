<docs>
---
order: 7
title:
  zh-CN: 分组
  en-US: Option Group
---

## zh-CN

用 `OptGroup` 或 `options.options` 进行选项分组。

## en-US

Using `OptGroup` or `options.options` to group the options.

</docs>

<template>
  <pf-space>
    <pf-select v-model:value="value" style="width: 200px" @change="handleChange">
      <pf-select-opt-group>
        <template #label>
          <span>
            <user-outlined />
            Manager
          </span>
        </template>
        <pf-select-option value="jack">Jack</pf-select-option>
        <pf-select-option value="lucy">Lucy</pf-select-option>
      </pf-select-opt-group>
      <pf-select-opt-group label="Engineer">
        <pf-select-option value="Yiminghe">yiminghe</pf-select-option>
        <pf-select-option value="Yiminghe1">yiminghe1</pf-select-option>
      </pf-select-opt-group>
    </pf-select>
    <pf-select
      v-model:value="value"
      :options="options"
      style="width: 200px"
      @change="handleChange"
    ></pf-select>
  </pf-space>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { UserOutlined } from '@ant-design/icons-vue';
import type { SelectProps } from '@pf-ui/pf-ui-vue';
export default defineComponent({
  components: {
    UserOutlined,
  },
  setup() {
    const handleChange = (value: string) => {
      console.log(`selected ${value}`);
    };

    const options = ref<SelectProps['options']>([
      {
        label: 'Manager',
        options: [
          {
            value: 'jack',
            label: 'Jack',
          },
          {
            value: 'lucy',
            label: 'Lucy',
          },
        ],
      },
      {
        label: 'Engineer',
        options: [
          {
            value: 'yiminghe',
            label: 'Yiminghe',
          },
        ],
      },
    ]);

    return {
      value: ref(['lucy']),
      handleChange,
      options,
    };
  },
});
</script>
