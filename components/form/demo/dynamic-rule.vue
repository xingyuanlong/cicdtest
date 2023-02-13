<docs>
---
order: 23
title:
  zh-CN: 动态校验规则
  en-US: Dynamic Rules
---

## zh-CN

根据不同情况执行不同的校验规则。

## en-US

Perform different check rules according to different situations.

</docs>
<template>
  <pf-form ref="formRef" :model="formState" name="dynamic_rule" v-bind="formItemLayout">
    <pf-form-item
      label="Username"
      name="username"
      :rules="[{ required: true, message: 'Please input your username!' }]"
    >
      <pf-input v-model:value="formState.username" />
    </pf-form-item>

    <pf-form-item
      label="Nickname"
      name="nickname"
      :rules="[{ required: formState.checkNick, message: 'Please input your nickname!' }]"
    >
      <pf-input v-model:value="formState.nickname" />
    </pf-form-item>

    <pf-form-item name="checkNick" v-bind="formTailLayout">
      <pf-checkbox v-model:checked="formState.checkNick">Nickname is required</pf-checkbox>
    </pf-form-item>

    <pf-form-item v-bind="formTailLayout" style="margin-top: 24px;">
      <pf-button type="primary" @click="onCheck">Check</pf-button>
    </pf-form-item>
  </pf-form>
</template>
<script lang="ts">
import { defineComponent, reactive, ref, watch } from 'vue';
import type { FormInstance } from '@pf-ui/pf-ui-vue';

interface FormState {
  username: string;
  nickname: string;
  checkNick: boolean;
}
export default defineComponent({
  setup() {
    const formRef = ref<FormInstance>();
    const formState = reactive<FormState>({
      username: '',
      nickname: '',
      checkNick: false,
    });
    watch(
      () => formState.checkNick,
      () => {
        formRef.value.validateFields(['nickname']);
      },
      { flush: 'post' },
    );
    const onCheck = async () => {
      try {
        const values = await formRef.value.validateFields();
        console.log('Success:', values);
      } catch (errorInfo) {
        console.log('Failed:', errorInfo);
      }
    };
    const formItemLayout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 8 },
    };
    const formTailLayout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 8, offset: 4 },
    };
    return {
      formState,
      formItemLayout,
      formTailLayout,
      onCheck,
      formRef,
    };
  },
});
</script>
