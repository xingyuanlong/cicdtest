<docs>
---
order: 1
title:
  zh-CN: 渐进加载
  en-US: Progressive Loading
---

## zh-CN

大图使用 placeholder 渐进加载。

## en-US

Progressive when large image loading.

</docs>

<template>
  <pf-space :size="12">
    <pf-image
      :width="200"
      :src="`https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?${random}`"
    >
      <template #placeholder>
        <pf-image
          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
          :width="200"
          :preview="false"
        />
      </template>
    </pf-image>
    <pf-button type="primary" @click="random = Date.now()">reload</pf-button>
  </pf-space>
</template>
<script lang="ts">
import { ref, defineComponent } from 'vue';
export default defineComponent({
  setup() {
    return {
      random: ref(),
    };
  },
});
</script>
