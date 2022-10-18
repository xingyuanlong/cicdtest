<docs>
---
order: 2
title:
  zh-CN: 间距大小
  en-US: Space Size
---

## zh-CN

间距预设大、中、小三种大小。
通过设置 `size` 为 `large` `middle` 分别把间距设为大、中间距。若不设置 `size`，则间距为小。


## en-US

`large`, `middle` and `small` preset sizes.
Set the size to `large` and `middle` by setting size to large and middle respectively. If `size` is not set, the spacing is `small`.

</docs>

<template>
  <div>
    <pf-radio-group v-model:value="size">
      <pf-radio value="small">Small</pf-radio>
      <pf-radio value="middle">Middle</pf-radio>
      <pf-radio value="large">Large</pf-radio>
    </pf-radio-group>
    <br />
    <br />
    <pf-space :size="size">
      <pf-button type="primary">Primary</pf-button>
      <pf-button>Default</pf-button>
      <pf-button type="dashed">Dashed</pf-button>
      <pf-button type="link">Link</pf-button>
    </pf-space>
  </div>
</template>
<script>
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    return {
      size: ref('small'),
    };
  },
});
</script>
