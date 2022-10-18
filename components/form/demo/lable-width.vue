<docs>
---
order: 0
title:
  zh-CN: 固定 Label 宽度
  en-US: Fixed lable width
---

## zh-CN

通过 labelCol.style 设置固定宽度

## en-US

Set label width by labelCol.style
</docs>
<template>
  <pf-form :model="formState" :label-col="labelCol" :wrapper-col="wrapperCol">
    <pf-form-item label="Activity name">
      <pf-input v-model:value="formState.name" />
    </pf-form-item>
    <pf-form-item label="Instant delivery">
      <pf-switch v-model:checked="formState.delivery" />
    </pf-form-item>
    <pf-form-item label="Activity type">
      <pf-checkbox-group v-model:value="formState.type">
        <pf-checkbox value="1" name="type">Online</pf-checkbox>
        <pf-checkbox value="2" name="type">Promotion</pf-checkbox>
        <pf-checkbox value="3" name="type">Offline</pf-checkbox>
      </pf-checkbox-group>
    </pf-form-item>
    <pf-form-item label="Resources">
      <pf-radio-group v-model:value="formState.resource">
        <pf-radio value="1">Sponsor</pf-radio>
        <pf-radio value="2">Venue</pf-radio>
      </pf-radio-group>
    </pf-form-item>
    <pf-form-item label="Activity form">
      <pf-input v-model:value="formState.desc" type="textarea" />
    </pf-form-item>
    <pf-form-item :wrapper-col="{ span: 14, offset: 4 }" style="margin-top: 24px;">
      <pf-button type="primary" @click="onSubmit">Create</pf-button>
      <pf-button style="margin-left: 10px">Cancel</pf-button>
    </pf-form-item>
  </pf-form>
</template>
<script lang="ts">
import { defineComponent, reactive, toRaw } from 'vue';
import type { UnwrapRef } from 'vue';

interface FormState {
  name: string;
  delivery: boolean;
  type: string[];
  resource: string;
  desc: string;
}
export default defineComponent({
  setup() {
    const formState: UnwrapRef<FormState> = reactive({
      name: '',
      delivery: false,
      type: [],
      resource: '',
      desc: '',
    });
    const onSubmit = () => {
      console.log('submit!', toRaw(formState));
    };
    return {
      labelCol: { style: { width: '150px' } },
      wrapperCol: { span: 14 },
      formState,
      onSubmit,
    };
  },
});
</script>
