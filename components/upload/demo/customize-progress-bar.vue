<docs>
---
order: 15
title:
  zh-CN: 自定义进度条样式
  en-US: Customize Progress Bar
---

## zh-CN

使用 `progress` 属性自定义进度条样式。

## en-US

Use `progress` for customize progress bar.

</docs>

<template>
  <pf-upload
    v-model:file-list="fileList"
    name="file"
    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
    :headers="headers"
    :progress="progress"
    @change="handleChange"
  >
    <pf-button>
      <upload-outlined></upload-outlined>
      Click to Upload
    </pf-button>
  </pf-upload>
</template>
<script lang="ts">
import { message } from 'pf-ui-vue';
import { UploadOutlined } from '@ant-design/icons-vue';
import { defineComponent, ref } from 'vue';
import type { UploadChangeParam, UploadProps } from 'pf-ui-vue';

export default defineComponent({
  components: {
    UploadOutlined,
  },
  setup() {
    const handleChange = (info: UploadChangeParam) => {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    };

    const fileList = ref([]);
    const progress: UploadProps['progress'] = {
      strokeColor: {
        '0%': '#108ee9',
        '100%': '#87d068',
      },
      strokeWidth: 3,
      format: percent => `${parseFloat(percent.toFixed(2))}%`,
      class: 'test',
    };
    return {
      fileList,
      headers: {
        authorization: 'authorization-text',
      },
      handleChange,
      progress,
    };
  },
});
</script>
