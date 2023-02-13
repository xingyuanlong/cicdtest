<docs>
---
order: 10
title:
  zh-CN: useForm 自定义触发时机
  en-US: useForm custom trigger
---

## zh-CN

通过 [`Form.useForm`](#useForm) 自定义触发校验时机

## en-US

use [`Form.useForm`](#useForm) custom trigger to validation logic and status.
</docs>

<template>
  <pf-form :label-col="labelCol" :wrapper-col="wrapperCol">
    <pf-form-item label="Activity name" v-bind="validateInfos.name">
      <pf-input
        v-model:value="modelRef.name"
        @blur="validate('name', { trigger: 'blur' }).catch(() => {})"
      />
    </pf-form-item>
    <pf-form-item label="Activity zone" v-bind="validateInfos.region">
      <pf-select v-model:value="modelRef.region" placeholder="please select your zone">
        <pf-select-option value="shanghai">Zone one</pf-select-option>
        <pf-select-option value="beijing">Zone two</pf-select-option>
      </pf-select>
    </pf-form-item>
    <pf-form-item :wrapper-col="{ span: 14, offset: 4 }" style="margin-top: 24px;">
      <pf-button type="primary" @click.prevent="onSubmit">Create</pf-button>
      <pf-button style="margin-left: 10px" @click="resetFields">Reset</pf-button>
    </pf-form-item>
  </pf-form>
</template>
<script lang="ts">
import { defineComponent, reactive, toRaw } from 'vue';
import { PfForm } from '@pf-ui/pf-ui-vue';

const useForm = PfForm.useForm;
export default defineComponent({
  setup() {
    const modelRef = reactive({
      name: '',
      region: undefined,
    });
    const rulesRef = reactive({
      name: [
        {
          required: true,
          message: 'Please input Activity name',
        },
        {
          min: 3,
          max: 5,
          message: 'Length should be 3 to 5',
          trigger: 'blur',
        },
      ],
      region: [
        {
          required: true,
          message: 'Please select region',
        },
      ],
    });
    const { resetFields, validate, validateInfos } = useForm(modelRef, rulesRef);
    const onSubmit = () => {
      validate()
        .then(() => {
          console.log(toRaw(modelRef));
        })
        .catch(err => {
          console.log('error', err);
        });
    };
    return {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
      validate,
      validateInfos,
      resetFields,
      modelRef,
      onSubmit,
    };
  },
});
</script>
