<docs>
---
order: 7
title:
  zh-CN: useForm 使用validateFirst
  en-US: useForm validateFirst
---

## zh-CN

通过 [`Form.useForm`](#useForm) 使用validateFirst。

## en-US

validateFirst.
</docs>

<template>
  <pf-form :label-col="labelCol" :wrapper-col="wrapperCol">
    <pf-form-item label="Activity name1" v-bind="validateInfos.name1">
      <pf-input v-model:value="modelRef.name1" />
    </pf-form-item>
    <pf-form-item label="Activity name2" v-bind="validateInfos.name2">
      <pf-input v-model:value="modelRef.name2" />
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
import { PfForm } from 'pf-ui-vue';

const useForm = PfForm.useForm;
export default defineComponent({
  setup() {
    const modelRef = reactive({
      name1: '',
      name2: '',
      region: undefined,
      type: [],
    });
    const rulesRef = reactive({
      name1: [
        {
          required: true,
          message: 'Please input name',
        },
        {
          pattern:  /[0-9]/,
          message: 'Please input number'
        },
        {
          min: 3,
          max: 5,
          message: 'Length should be 3 to 5',
        }
      ],
      name2: [
        {
          required: true,
          message: 'Please input name',
        },
        {
          pattern:  /[0-9]/,
          message: 'Please input number'
        },
        {
          min: 3,
          max: 5,
          message: 'Length should be 3 to 5',
        }
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
      validateFirstName: ['name1', 'name2']
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
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
      validateInfos,
      resetFields,
      modelRef,
      onSubmit,
    };
  },
});
</script>
  