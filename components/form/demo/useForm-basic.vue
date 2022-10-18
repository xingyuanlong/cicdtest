<docs>
---
order: 7
title:
  zh-CN: useForm 基本表单
  en-US: useForm Basic Usage
---

## zh-CN

通过 [`Form.useForm`](#useForm) 更加灵活的使用表单组件。

## en-US

use [`Form.useForm`](#useForm) provides form validation logic and status.
</docs>

<template>
  <pf-form :label-col="labelCol" :wrapper-col="wrapperCol">
    <pf-form-item label="Activity name" v-bind="validateInfos.name">
      <pf-input v-model:value="modelRef.name" />
    </pf-form-item>
    <pf-form-item label="Activity zone" v-bind="validateInfos.region">
      <pf-select v-model:value="modelRef.region" placeholder="please select your zone">
        <pf-select-option value="shanghai">Zone one</pf-select-option>
        <pf-select-option value="beijing">Zone two</pf-select-option>
      </pf-select>
    </pf-form-item>
    <pf-form-item label="Activity type" v-bind="validateInfos.type">
      <pf-checkbox-group v-model:value="modelRef.type">
        <pf-checkbox value="1" name="type">Online</pf-checkbox>
        <pf-checkbox value="2" name="type">Promotion</pf-checkbox>
        <pf-checkbox value="3" name="type">Offline</pf-checkbox>
      </pf-checkbox-group>
    </pf-form-item>
    <pf-form-item :wrapper-col="{ span: 14, offset: 4 }" style="margin-top: 24px;">
      <pf-button type="primary" @click.prevent="onSubmit">Create</pf-button>
      <pf-button style="margin-left: 10px" @click="resetFields">Reset</pf-button>
    </pf-form-item>
  </pf-form>
</template>
<script lang="ts">
import { defineComponent, reactive, toRaw } from 'vue';
import { Form } from 'pf-ui-vue';

const useForm = Form.useForm;
export default defineComponent({
  setup() {
    const modelRef = reactive({
      name: '',
      region: undefined,
      type: [],
    });
    const rulesRef = reactive({
      name: [
        {
          required: true,
          message: 'Please input name',
        },
      ],
      region: [
        {
          required: true,
          message: 'Please select region',
        },
      ],
      type: [
        {
          required: true,
          message: 'Please select type',
          type: 'array',
        },
      ],
    });
    const { resetFields, validate, validateInfos } = useForm(modelRef, rulesRef, {
      onValidate: (...args) => console.log(...args),
    });
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
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      validateInfos,
      resetFields,
      modelRef,
      onSubmit,
    };
  },
});
</script>
