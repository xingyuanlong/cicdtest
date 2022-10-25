<docs>
---
order: 1
title:
  zh-CN: 全屏
  en-US: fullscreen
---
    
## zh-CN
    
全屏模式    
## en-US
    
全屏模式    
</docs>
  
<template>
  <pf-watermark
    v-if="checked"
    content="杭州华卓信息科技有限公司"
    cross
    fullscreen
    :font-size="16"
    :line-height="16"
    :width="384"
    :height="384"
    :x-offset="12"
    :y-offset="60"
    :rotate="-15"
  />
  <pf-switch v-model:checked="checked" />
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
  
export default defineComponent({
   setup() {
    const checked = ref<boolean>(false);
    return {
      checked,
    };
   },
});
</script>
  