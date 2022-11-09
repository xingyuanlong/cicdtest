<docs>
---
order: 1
title:
  zh-CN: 精度
  en-US: Precision
---

## zh-CN

使用 `precision` 设定精度

## en-US

precision.

</docs>

<template>
  <pf-statistic title="JJJJNM">
    <template #value>
      <pf-number-animation
        ref="numberAnimationInstRef"
        :from="0.0"
        :to="24.0"
        :active="false"
        :precision="2"
      />
    </template>
  </pf-statistic>
  <pf-button @click="handleClick">
    播放
  </pf-button>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup () {
    const numberAnimationInstRef = ref<any>(null)
    return {
      numberAnimationInstRef,
      handleClick () {
        numberAnimationInstRef.value?.play()
      }
    }
  }
})
</script>