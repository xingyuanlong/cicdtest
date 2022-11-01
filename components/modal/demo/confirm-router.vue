<docs>
---
order: 8
title:
  zh-CN: 销毁确认对话框
  en-US: destroy confirmation modal dialog
---

## zh-CN

使用 `Modal.destroyAll()` 可以销毁弹出的确认窗。通常用于路由监听当中，处理路由前进、后退不能销毁确认对话框的问题。

## en-US

`Modal.destroyAll()` could destroy all confirmation modal dialogs. Usually, you can use it in router change event to destroy confirm modal dialog automatically

</docs>

<template>
  <pf-button @click="showConfirm">Confirm</pf-button>
</template>
<script lang="ts">
import { ExclamationCircleOutlined } from '@ant-design/icons-vue';
import { createVNode, defineComponent } from 'vue';
import { PfModal } from 'pf-ui-vue';
export default defineComponent({
  setup() {
    const showConfirm = () => {
      for (let i = 0; i < 3; i += 1) {
        setTimeout(() => {
          PfModal.confirm({
            content: 'destroy all',
            icon: createVNode(ExclamationCircleOutlined),
            onOk() {
              return new Promise((resolve, reject) => {
                setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
              }).catch(() => console.log('Oops errors!'));
            },
            cancelText: 'Click to destroy all',
            onCancel() {
              PfModal.destroyAll();
            },
            okButtonProps: {
              minWidth: '90px',
              size: 'small'
            },
            cancelButtonProps: {
              type: 'secondary',
              minWidth: '90px',
              size: 'small'
            },
          });
        }, i * 500);
      }
    };
    return {
      showConfirm,
    };
  },
});
</script>
