<docs>
---
order: 5
title:
  zh-CN: 表单布局
  en-US: Form Layout
---

## zh-CN

表单有三种布局。

## en-US

There are three layout for form: `horizontal`, `vertical`, `inline`.
</docs>

<template>
  <pf-form :layout="formState.layout" :model="formState" v-bind="formItemLayout">
    <pf-form-item label="Form Layout">
      <pf-radio-group v-model:value="formState.layout">
        <pf-radio-button value="horizontal">Horizontal</pf-radio-button>
        <pf-radio-button value="vertical">Vertical</pf-radio-button>
        <pf-radio-button value="inline">Inline</pf-radio-button>
      </pf-radio-group>
    </pf-form-item>
    <pf-form-item label="Field A">
      <pf-input v-model:value="formState.fieldA" placeholder="input placeholder" />
    </pf-form-item>
    <pf-form-item label="Field B">
      <pf-input v-model:value="formState.fieldB" placeholder="input placeholder" />
    </pf-form-item>
    <pf-form-item :wrapper-col="buttonItemLayout.wrapperCol" style="margin-top: 24px;">
      <pf-button type="primary">Submit</pf-button>
    </pf-form-item>
  </pf-form>
</template>
<script lang="ts">
import { computed, defineComponent, reactive } from 'vue';
import type { UnwrapRef } from 'vue';

interface FormState {
  layout: 'horizontal' | 'vertical' | 'inline';
  fieldA: string;
  fieldB: string;
}
export default defineComponent({
  setup() {
    const formState: UnwrapRef<FormState> = reactive({
      layout: 'horizontal',
      fieldA: '',
      fieldB: '',
    });
    const formItemLayout = computed(() => {
      const { layout } = formState;
      return layout === 'horizontal'
        ? {
            labelCol: { span: 4 },
            wrapperCol: { span: 20 },
          }
        : {};
    });
    const buttonItemLayout = computed(() => {
      const { layout } = formState;
      return layout === 'horizontal'
        ? {
            wrapperCol: { span: 20, offset: 4 },
          }
        : {};
    });
    return {
      formState,
      formItemLayout,
      buttonItemLayout,
    };
  },
});
</script>
