<docs>
---
order: 4
title:
  zh-CN: 结束的回调
  en-US: Finish
---

## zh-CN

结束的回调

## en-US

Finish.

</docs>

<template>
  <pf-statistic title="完成之后发个消息">
    <template #value>
      <pf-number-animation
        ref="numberAnimationInstRef"
        show-separator
        :from="0"
        :to="100000000"
        :active="false"
        @finish="handleFinish"
      />
    </template>
  </pf-statistic>
  <pf-button @click="handleClick">
    播放
  </pf-button>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Pfmessage } from '@pf-ui/pf-ui-vue'

export default defineComponent({
  setup () {
    const numberAnimationInstRef = ref<any>(null)
    return {
      numberAnimationInstRef,
      handleClick () {
        numberAnimationInstRef.value?.play()
      },
      handleFinish () {
        Pfmessage.success('Finished')
      }
    }
  }
})
</script>