<docs>
---
order: 10
title:
  zh-CN: 内联登录栏
  en-US: Inline Login Form
---

## zh-CN

内联登录栏，常用在顶部导航栏中。

## en-US

Inline login form is often used in navigation bar.

</docs>
<template>
  <pf-form
    :model="formState"
    name="horizontal_login"
    layout="inline"
    autocomplete="off"
    @finish="onFinish"
    @finishFailed="onFinishFailed"
  >
    <pf-form-item
      label="Username"
      name="username"
      :rules="[{ required: true, message: 'Please input your username!' }]"
    >
      <pf-input v-model:value="formState.username">
        <template #prefix>
          <UserOutlined class="site-form-item-icon" />
        </template>
      </pf-input>
    </pf-form-item>

    <pf-form-item
      label="Password"
      name="password"
      :rules="[{ required: true, message: 'Please input your password!' }]"
    >
      <pf-input-password v-model:value="formState.password">
        <template #prefix>
          <LockOutlined class="site-form-item-icon" />
        </template>
      </pf-input-password>
    </pf-form-item>

    <pf-form-item>
      <pf-button :disabled="disabled" type="primary" html-type="submit">Log in</pf-button>
    </pf-form-item>
  </pf-form>
</template>
<script lang="ts">
import { defineComponent, reactive, computed } from 'vue';
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue';
interface FormState {
  username: string;
  password: string;
}
export default defineComponent({
  components: {
    UserOutlined,
    LockOutlined,
  },
  setup() {
    const formState = reactive<FormState>({
      username: '',
      password: '',
    });
    const onFinish = (values: any) => {
      console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
      console.log('Failed:', errorInfo);
    };
    const disabled = computed(() => {
      return !(formState.username && formState.password);
    });
    return {
      formState,
      onFinish,
      onFinishFailed,
      disabled,
    };
  },
});
</script>
