<docs>
---
order: 11
title:
  zh-CN: 登录框
  en-US: Login Form
---

## zh-CN

普通的登录框，可以容纳更多的元素。

## en-US

Normal login form which can contain more elements.

</docs>
<template>
  <pf-form
    :model="formState"
    name="normal_login"
    class="login-form"
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
      <pf-form-item name="remember" no-style>
        <pf-checkbox v-model:checked="formState.remember">Remember me</pf-checkbox>
      </pf-form-item>
      <a class="login-form-forgot" href="">Forgot password</a>
    </pf-form-item>

    <pf-form-item style="margin-top: 24px;">
      <pf-button :disabled="disabled" type="primary" html-type="submit" class="login-form-button">
        Log in
      </pf-button>
      Or
      <a href="">register now!</a>
    </pf-form-item>
  </pf-form>
</template>
<script lang="ts">
import { defineComponent, reactive, computed } from 'vue';
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue';
interface FormState {
  username: string;
  password: string;
  remember: boolean;
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
      remember: true,
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
<style>
#components-form-demo-normal-login .login-form {
  max-width: 300px;
}
#components-form-demo-normal-login .login-form-forgot {
  float: right;
}
#components-form-demo-normal-login .login-form-button {
  width: 100%;
}
</style>
