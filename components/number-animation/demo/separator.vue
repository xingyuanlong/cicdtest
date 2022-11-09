<docs>
---
order: 2
title:
  zh-CN: 分隔符
  en-US: Separator
---

## zh-CN

分隔符

## en-US

Separator.

</docs>

<template>
  <pf-statistic title="一个小目标">
    <template #value>
      <pf-number-animation
        ref="numberAnimationInstRef"
        show-separator
        :from="0"
        :to="100000000"
        :active="false"
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