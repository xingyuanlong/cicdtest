<docs>
---
order: 3
title:
  zh-CN: 国际化
  en-US: Separator
---

## zh-CN

使用 `locale` 设定国际化语言。
需要注意的是，该功能使用了 `Intl` API，兼容性请参考 [format](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/format) 和 [formatToParts](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/formatToParts)。

## en-US

Use `locale` to set i18n language.

Please note that, the feature uses `Intl` API. For compitability refers to [format](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/format) and [formatToParts](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/formatToParts).

</docs>

<template>
  <pf-statistic title="你可能不知道俄语的小数点是逗号">
    <template #value>
      <pf-number-animation
        ref="numberAnimationInstRef"
        :from="0.0"
        :to="699700.699"
        :active="false"
        :precision="3"
        locale="ru-RU"
        show-separator
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