<docs>
---
order: 3
title:
  zh-CN: 卡片加载中
  en-US: Embedded mode
---

## zh-CN

可以直接把内容内嵌到 `Spin` 中，将现有容器变为加载状态。

## en-US

Embedding content into `Spin` will alter it into loading state.

</docs>

<template>
  <pf-spin :spinning="spinning" regularSpining>
    <pf-alert
      message="Alert message title"
      description="Further details about the context of this alert."
    ></pf-alert>
  </pf-spin>
  <div class="spin-state">
    Loading state：
    <pf-switch v-model:checked="spinning" />
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const spinning = ref<boolean>(false);

    const changeSpinning = () => {
      spinning.value = !spinning.value;
    };

    return {
      spinning,
      changeSpinning,
    };
  },
});
</script>
<style scoped>
.spin-state {
  margin-top: 16px;
}
</style>
