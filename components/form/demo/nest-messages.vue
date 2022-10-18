<docs>
---
order: 5
title:
  zh-CN: 嵌套结构与校验信息
  en-US: Nest
---

## zh-CN

`name` 属性支持嵌套数据结构。通过 `validateMessages` 或 `message` 自定义校验信息模板，模板内容可参考[此处](https://github.com/vueComponent/pf-ui-vue/blob/main/components/form/utils/messages.ts)。

## en-US

`name` prop support nest data structure. Customize validate message template with `validateMessages` or `message`. Ref [here](https://github.com/vueComponent/pf-ui-vue/blob/main/components/form/utils/messages.ts) about message template.
</docs>
<template>
  <pf-form
    :model="formState"
    v-bind="layout"
    name="nest-messages"
    :validate-messages="validateMessages"
    @finish="onFinish"
  >
    <pf-form-item :name="['user', 'name']" label="Name" :rules="[{ required: true }]">
      <pf-input v-model:value="formState.user.name" />
    </pf-form-item>
    <pf-form-item :name="['user', 'email']" label="Email" :rules="[{ type: 'email' }]">
      <pf-input v-model:value="formState.user.email" />
    </pf-form-item>
    <pf-form-item :name="['user', 'age']" label="Age" :rules="[{ type: 'number', min: 0, max: 99 }]">
      <pf-input-number v-model:value="formState.user.age" />
    </pf-form-item>
    <pf-form-item :name="['user', 'website']" label="Website">
      <pf-input v-model:value="formState.user.website" />
    </pf-form-item>
    <pf-form-item :name="['user', 'introduction']" label="Introduction">
      <pf-textarea v-model:value="formState.user.introduction" />
    </pf-form-item>
    <pf-form-item :wrapper-col="{ ...layout.wrapperCol, offset: 8 }" style="margin-top: 24px;">
      <pf-button type="primary" html-type="submit">Submit</pf-button>
    </pf-form-item>
  </pf-form>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue';

export default defineComponent({
  setup() {
    const layout = {
      labelCol: { span: 8 },
      wrapperCol: { span: 16 },
    };

    const validateMessages = {
      required: '${label} is required!',
      types: {
        email: '${label} is not a valid email!',
        number: '${label} is not a valid number!',
      },
      number: {
        range: '${label} must be between ${min} and ${max}',
      },
    };

    const formState = reactive({
      user: {
        name: '',
        age: undefined,
        email: '',
        website: '',
        introduction: '',
      },
    });
    const onFinish = (values: any) => {
      console.log('Success:', values);
    };
    return {
      formState,
      onFinish,
      layout,
      validateMessages,
    };
  },
});
</script>
