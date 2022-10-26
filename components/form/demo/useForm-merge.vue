<docs>
---
order: 8
title:
  zh-CN: useForm 合并错误信息
  en-US: useForm merge status info
---

## zh-CN

通过 [`Form.useForm`](#useForm)  合并展示表单校验信息。

## en-US

use [`Form.useForm`](#useForm)  combined display form verification information.
</docs>

<template>
  <pf-form :label-col="labelCol" :wrapper-col="wrapperCol">
    <pf-form-item label="Activity name" required>
      <pf-input v-model:value="modelRef.name" />
    </pf-form-item>
    <pf-form-item label="Activity zone" required>
      <pf-select v-model:value="modelRef.region" placeholder="please select your zone">
        <pf-select-option value="shanghai">Zone one</pf-select-option>
        <pf-select-option value="beijing">Zone two</pf-select-option>
      </pf-select>
    </pf-form-item>
    <pf-form-item label="Activity type" required>
      <pf-checkbox-group v-model:value="modelRef.type">
        <pf-checkbox value="1" name="type">Online</pf-checkbox>
        <pf-checkbox value="2" name="type">Promotion</pf-checkbox>
        <pf-checkbox value="3" name="type">Offline</pf-checkbox>
      </pf-checkbox-group>
    </pf-form-item>
    <pf-form-item class="error-infos" :wrapper-col="{ span: 14, offset: 4 }" v-bind="errorInfos" style="margin-top: 24px;">
      <pf-button type="primary" @click.prevent="onSubmit">Create</pf-button>
      <pf-button style="margin-left: 10px" @click="resetFields">Reset</pf-button>
    </pf-form-item>
  </pf-form>
</template>
<script lang="ts">
import { reactive, toRaw, computed, defineComponent } from 'vue';
import { toArray } from 'lodash-es';
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
    const { resetFields, validate, validateInfos, mergeValidateInfo } = useForm(modelRef, rulesRef);
    const onSubmit = () => {
      validate()
        .then(() => {
          console.log(toRaw(modelRef));
        })
        .catch(err => {
          console.log('error', err);
        });
    };
    const errorInfos = computed(() => {
      return mergeValidateInfo(toArray(validateInfos));
    });
    return {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
      validateInfos,
      resetFields,
      modelRef,
      onSubmit,
      errorInfos,
    };
  },
});
</script>
<style scoped>
.error-infos :deep(.ant-form-explain) {
  white-space: pre-line;
}
</style>
