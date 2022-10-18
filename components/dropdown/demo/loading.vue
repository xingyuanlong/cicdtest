<docs>
---
order: 9
title:
  zh-CN: 加载中状态
  en-US: Loading
---

## zh-CN

添加 `loading` 属性即可让按钮处于加载状态，最后两个按钮演示点击后进入加载状态。

## en-US

A loading indicator can be added to a button by setting the `loading` property on the `pf-dropdown-button`.


</docs>

<template>
  <pf-space direction="vertical">
    <pf-dropdown-button type="primary" loading>
      <template #overlay>
        <pf-menu>
          <pf-menu-item key="1">Submit and continue</pf-menu-item>
        </pf-menu>
      </template>
      Submit
    </pf-dropdown-button>
    <pf-dropdown-button type="primary" size="small" loading>
      <template #overlay>
        <pf-menu>
          <pf-menu-item key="1">Submit and continue</pf-menu-item>
        </pf-menu>
      </template>
      Submit
    </pf-dropdown-button>
    <pf-dropdown-button type="primary" :loading="loading1" @click="enterLoading1">
      <template #overlay>
        <pf-menu>
          <pf-menu-item key="1">Submit and continue</pf-menu-item>
        </pf-menu>
      </template>
      Submit
    </pf-dropdown-button>
    <pf-dropdown-button :loading="loading2" @click="enterLoading2">
      Submit
      <template #overlay>
        <pf-menu>
          <pf-menu-item key="1">Submit and continue</pf-menu-item>
        </pf-menu>
      </template>
      <template #icon><DownOutlined /></template>
    </pf-dropdown-button>
  </pf-space>
</template>
<script lang="ts">
import { defineComponent, Ref, ref } from 'vue';
import { DownOutlined } from '@ant-design/icons-vue';

export default defineComponent({
  components: {
    DownOutlined,
  },
  setup() {
    const loading1 = ref(false);
    const loading2 = ref(false);
    const enterLoading = (loading: Ref<boolean>) => {
      loading.value = true;
      setTimeout(() => {
        loading.value = false;
      }, 6000);
    };
    return {
      loading1,
      loading2,
      enterLoading1() {
        enterLoading(loading1);
      },
      enterLoading2() {
        enterLoading(loading2);
      },
    };
  },
});
</script>
