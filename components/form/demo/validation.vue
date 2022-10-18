<docs>
---
order: 6
title:
  zh-CN: 表单验证
  en-US: Validation
---

## zh-CN

Form 组件提供了表单验证的功能，只需要通过 `rules` 属性传入约定的验证规则，并将 `FormItem` 的 `name` 属性设置为需校验的字段名即可。校验规则参见 [async-validator](https://github.com/yiminghe/async-validator)

## en-US

Just add the `rules` attribute for `Form` component, pass validation rules, and set `name` attribute for `FormItem` as a specific key that needs to be validated. See more information at [async-validator](https://github.com/yiminghe/async-validator).
</docs>

<template>
  <pf-form
    ref="formRef"
    :model="formState"
    :rules="rules"
    :label-col="labelCol"
    :wrapper-col="wrapperCol"
  >
    <pf-form-item ref="name" label="Activity name" name="name">
      <pf-input v-model:value="formState.name" />
    </pf-form-item>
    <pf-form-item label="Activity zone" name="region">
      <pf-select v-model:value="formState.region" placeholder="please select your zone">
        <pf-select-option value="shanghai">Zone one</pf-select-option>
        <pf-select-option value="beijing">Zone two</pf-select-option>
      </pf-select>
    </pf-form-item>
    <pf-form-item label="Activity time" required name="date1">
      <pf-date-picker
        v-model:value="formState.date1"
        show-time
        type="date"
        placeholder="Pick a date"
        style="width: 100%"
      />
    </pf-form-item>
    <pf-form-item label="Instant delivery" name="delivery">
      <pf-switch v-model:checked="formState.delivery" />
    </pf-form-item>
    <pf-form-item label="Activity type" name="type">
      <pf-checkbox-group v-model:value="formState.type">
        <pf-checkbox value="1" name="type">Online</pf-checkbox>
        <pf-checkbox value="2" name="type">Promotion</pf-checkbox>
        <pf-checkbox value="3" name="type">Offline</pf-checkbox>
      </pf-checkbox-group>
    </pf-form-item>
    <pf-form-item label="Resources" name="resource">
      <pf-radio-group v-model:value="formState.resource">
        <pf-radio value="1">Sponsor</pf-radio>
        <pf-radio value="2">Venue</pf-radio>
      </pf-radio-group>
    </pf-form-item>
    <pf-form-item label="Activity form" name="desc">
      <pf-textarea v-model:value="formState.desc" />
    </pf-form-item>
    <pf-form-item :wrapper-col="{ span: 14, offset: 4 }">
      <pf-button type="primary" @click="onSubmit">Create</pf-button>
      <pf-button style="margin-left: 10px" @click="resetForm">Reset</pf-button>
    </pf-form-item>
  </pf-form>
</template>
<script lang="ts">
import { Dayjs } from 'dayjs';
import { defineComponent, reactive, ref, toRaw } from 'vue';
import type { UnwrapRef } from 'vue';
import type { Rule } from 'pf-ui-vue/es/form';

interface FormState {
  name: string;
  region: string | undefined;
  date1: Dayjs | undefined;
  delivery: boolean;
  type: string[];
  resource: string;
  desc: string;
}
export default defineComponent({
  setup() {
    const formRef = ref();
    const formState: UnwrapRef<FormState> = reactive({
      name: '',
      region: undefined,
      date1: undefined,
      delivery: false,
      type: [],
      resource: '',
      desc: '',
    });
    const rules: Record<string, Rule[]> = {
      name: [
        { required: true, message: 'Please input Activity name', trigger: 'blur' },
        { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
      ],
      region: [{ required: true, message: 'Please select Activity zone', trigger: 'change' }],
      date1: [{ required: true, message: 'Please pick a date', trigger: 'change', type: 'object' }],
      type: [
        {
          type: 'array',
          required: true,
          message: 'Please select at least one activity type',
          trigger: 'change',
        },
      ],
      resource: [{ required: true, message: 'Please select activity resource', trigger: 'change' }],
      desc: [{ required: true, message: 'Please input activity form', trigger: 'blur' }],
    };
    const onSubmit = () => {
      formRef.value
        .validate()
        .then(() => {
          console.log('values', formState, toRaw(formState));
        })
        .catch(error => {
          console.log('error', error);
        });
    };
    const resetForm = () => {
      formRef.value.resetFields();
    };
    return {
      formRef,
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      other: '',
      formState,
      rules,
      onSubmit,
      resetForm,
    };
  },
});
</script>
