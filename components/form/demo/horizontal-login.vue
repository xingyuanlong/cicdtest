<docs>
---
order: 4
title:
  zh-CN: 内联登录栏
  en-US: Inline Login Form
---

## zh-CN

水平登录栏，常用在顶部导航栏中。

## en-US

Inline login form is often used in navigation bar.
</docs>

<template>
  <pf-form
    layout="inline"
    :model="formState"
    @finish="handleFinish"
    @finishFailed="handleFinishFailed"
  >
    <pf-form-item>
      <pf-input v-model:value="formState.user" placeholder="Username">
        <template #prefix><UserOutlined style="color: rgba(0, 0, 0, 0.25)" /></template>
      </pf-input>
    </pf-form-item>
    <pf-form-item>
      <pf-input v-model:value="formState.password" type="password" placeholder="Password">
        <template #prefix><LockOutlined style="color: rgba(0, 0, 0, 0.25)" /></template>
      </pf-input>
    </pf-form-item>
    <pf-form-item>
      <pf-button
        type="primary"
        html-type="submit"
        :disabled="formState.user === '' || formState.password === ''"
      >
        Log in
      </pf-button>
    </pf-form-item>
  </pf-form>
</template>
<script lang="ts">
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue';
import { defineComponent, reactive } from 'vue';
import type { UnwrapRef } from 'vue';
import type { FormProps } from '@pf-ui/pf-ui-vue';

interface FormState {
  user: string;
  password: string;
}
export default defineComponent({
  components: {
    UserOutlined,
    LockOutlined,
  },
  setup() {
    const formState: UnwrapRef<FormState> = reactive({
      user: '',
      password: '',
    });
    const handleFinish: FormProps['onFinish'] = values => {
      console.log(values, formState);
    };
    const handleFinishFailed: FormProps['onFinishFailed'] = errors => {
      console.log(errors);
    };
    return {
      formState,
      handleFinish,
      handleFinishFailed,
    };
  },
});
</script>
