<docs>
---
order: 0
title:
  zh-CN: 点击上传
  en-US: Upload by clicking
---

## zh-CN

经典款式，用户点击按钮弹出文件选择框。

## en-US

Classic mode. File selection dialog pops up when upload button is clicked.
</docs>

<template>
  <pf-upload
    v-model:file-list="fileList"
    name="file"
    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
    :headers="headers"
    @change="handleChange"
  >
    <pf-button>
      <upload-outlined></upload-outlined>
      Click to Upload
    </pf-button>
  </pf-upload>
</template>
<script lang="ts">
import { Pfmessage } from '@pf-ui/pf-ui-vue';
import { UploadOutlined } from '@ant-design/icons-vue';
import { defineComponent, ref } from 'vue';
import type { UploadChangeParam } from '@pf-ui/pf-ui-vue';

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
        Pfmessage.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        Pfmessage.error(`${info.file.name} file upload failed.`);
      }
    };

    const fileList = ref([]);
    return {
      fileList,
      headers: {
        authorization: 'authorization-text',
      },
      handleChange,
    };
  },
});
</script>
