<docs>
---
order: 8
title:
  zh-CN: 大小
  en-US: Size
---

## zh-CN

大中小三种组合，可以和表单输入框进行对应配合。

## en-US

There are three sizes available: large, medium, and small. It can coordinate with input box.

</docs>
<template>
  <div>
    <div>
      <pf-radio-group v-model:value="value1" size="large">
        <pf-radio-button value="a">Hangzhou</pf-radio-button>
        <pf-radio-button value="b">Shanghai</pf-radio-button>
        <pf-radio-button value="c">Beijing</pf-radio-button>
        <pf-radio-button value="d">Chengdu</pf-radio-button>
      </pf-radio-group>
    </div>
    <div :style="{ marginTop: '16px' }">
      <pf-radio-group v-model:value="value2">
        <pf-radio-button value="a">Hangzhou</pf-radio-button>
        <pf-radio-button value="b">Shanghai</pf-radio-button>
        <pf-radio-button value="c">Beijing</pf-radio-button>
        <pf-radio-button value="d">Chengdu</pf-radio-button>
      </pf-radio-group>
    </div>
    <div :style="{ marginTop: '16px' }">
      <pf-radio-group v-model:value="value3" size="small">
        <pf-radio-button value="a">Hangzhou</pf-radio-button>
        <pf-radio-button value="b">Shanghai</pf-radio-button>
        <pf-radio-button value="c">Beijing</pf-radio-button>
        <pf-radio-button value="d">Chengdu</pf-radio-button>
      </pf-radio-group>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const value1 = ref<string>('a');
    const value2 = ref<string>('a');
    const value3 = ref<string>('a');
    return {
      value1,
      value2,
      value3,
    };
  },
});
</script>
