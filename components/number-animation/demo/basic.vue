<docs>
---
order: 0
title:
  zh-CN: 基础用法
  en-US: Basic
---

## zh-CN

基础用法

## en-US

Basic.

</docs>

<template>
  <pf-statistic title="你一共处理了" suffix="条群消息">
    <template #value>
      <pf-number-animation ref="numberAnimationInstRef" :from="1" :to="12039" />
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