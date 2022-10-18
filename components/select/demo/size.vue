<docs>
---
order: 1
title:
  zh-CN: 三种大小
  en-US: Sizes
---

## zh-CN

三种大小的选择框，当 size 分别为 `large` 和 `small` 时，输入框高度为 `40px` 和 `24px` ，默认高度为 `32px`。

## en-US

The height of the input field for the select defaults to 32px. If size is set to large, the height will be 40px, and if set to small, 24px.

</docs>

<template>
  <pf-radio-group v-model:value="size">
    <pf-radio-button value="large">Large</pf-radio-button>
    <pf-radio-button value="middle">Middle</pf-radio-button>
    <pf-radio-button value="small">Small</pf-radio-button>
  </pf-radio-group>
  <br />
  <br />
  <pf-space direction="vertical">
    <pf-select
      v-model:value="value1"
      :size="size"
      style="width: 200px"
      :options="options"
    ></pf-select>
    <pf-select
      v-model:value="value2"
      :options="options"
      mode="multiple"
      :size="size"
      placeholder="Please select"
      style="width: 200px"
      @popupScroll="popupScroll"
    ></pf-select>
    <pf-select
      v-model:value="value3"
      :options="options"
      mode="tags"
      :size="size"
      showArrow
      placeholder="Please select"
      style="width: 200px"
    ></pf-select>
  </pf-space>
</template>
<script lang="ts">
import type { SelectProps } from 'pf-ui-vue';
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const popupScroll = () => {
      console.log('popupScroll');
    };

    return {
      popupScroll,
      size: ref<SelectProps['size']>('middle'),
      value1: ref('a1'),
      value2: ref(['a1', 'b2']),
      value3: ref(['a1', 'b2']),
      options: [...Array(25)].map((_, i) => ({ value: (i + 10).toString(36) + (i + 1) })),
    };
  },
});
</script>
