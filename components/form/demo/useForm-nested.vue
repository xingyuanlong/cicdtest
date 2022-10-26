<docs>
---
order: 9
title:
  zh-CN: useForm 嵌套表单
  en-US: useForm for nested Form
---

## zh-CN

通过 [`Form.useForm`](#useForm)  使用点字符串拼接进行嵌套数据校验。

## en-US

[`Form.useForm`](#useForm) use dot string splicing for nested data verification.
</docs>

<template>
  <pf-form :label-col="labelCol" :wrapper-col="wrapperCol">
    <pf-form-item label="Activity name" v-bind="validateInfos.name">
      <pf-input v-model:value="modelRef.name" />
    </pf-form-item>
    <pf-form-item label="Sub name" v-bind="validateInfos['sub.name']">
      <pf-input v-model:value="modelRef.sub.name" />
    </pf-form-item>
    <pf-form-item :wrapper-col="{ span: 14, offset: 4 }" style="margin-top: 24px;">
      <pf-button type="primary" @click.prevent="onSubmit">Create</pf-button>
      <pf-button style="margin-left: 10px" @click="reset">Reset</pf-button>
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
      sub: {
        name: '',
      },
    });
    const { resetFields, validate, validateInfos } = useForm(
      modelRef,
      reactive({
        name: [
          {
            required: true,
            message: 'Please input name',
          },
        ],
        'sub.name': [
          {
            required: true,
            message: 'Please input sub name',
          },
        ],
      }),
    );
    const onSubmit = () => {
      validate()
        .then(res => {
          console.log(res, toRaw(modelRef));
        })
        .catch(err => {
          console.log('error', err);
        });
    };
    const reset = () => {
      resetFields();
    };
    return {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
      validateInfos,
      reset,
      modelRef,
      onSubmit,
    };
  },
});
</script>
