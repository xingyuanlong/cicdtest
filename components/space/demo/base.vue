<docs>
---
order: 0
title:
  zh-CN: 基本用法
  en-US: Basic Usage
---

## zh-CN

相邻组件水平间距。


## en-US

Crowded components horizontal spacing.

</docs>

<template>
  <pf-space>
    Space
    <pf-button type="primary">Button</pf-button>
    <pf-upload>
      <pf-button>
        <UploadOutlined />
        Click to Upload
      </pf-button>
    </pf-upload>
    <pf-popconfirm title="Are you sure delete this task?" ok-text="Yes" cancel-text="No">
      <pf-button>Confirm</pf-button>
    </pf-popconfirm>
  </pf-space>
</template>
<script lang="ts">
import { UploadOutlined } from '@ant-design/icons-vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: {
    UploadOutlined,
  },
});
</script>
