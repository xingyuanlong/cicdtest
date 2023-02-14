<docs>
---
order: 7
title:
  zh-CN: 手动上传
  en-US: Upload manually
---

## zh-CN

`beforeUpload` 返回 `false` 后，手动上传文件。

## en-US

Upload files manually after `beforeUpload` returns `false`.
</docs>

<template>
  <div class="clearfix">
    <pf-upload :file-list="fileList" :before-upload="beforeUpload" @remove="handleRemove">
      <pf-button>
        <upload-outlined></upload-outlined>
        Select File
      </pf-button>
    </pf-upload>
    <pf-button
      type="primary"
      :disabled="fileList.length === 0"
      :loading="uploading"
      style="margin-top: 16px"
      @click="handleUpload"
    >
      {{ uploading ? 'Uploading' : 'Start Upload' }}
    </pf-button>
  </div>
</template>
<script lang="ts">
import request from 'umi-request';
import { UploadOutlined } from '@ant-design/icons-vue';
import { Pfmessage } from '@pf-ui/pf-ui-vue';
import { defineComponent, ref } from 'vue';
import type { UploadProps } from '@pf-ui/pf-ui-vue';

export default defineComponent({
  components: {
    UploadOutlined,
  },
  setup() {
    const fileList = ref<UploadProps['fileList']>([]);
    const uploading = ref<boolean>(false);

    const handleRemove: UploadProps['onRemove'] = file => {
      const index = fileList.value.indexOf(file);
      const newFileList = fileList.value.slice();
      newFileList.splice(index, 1);
      fileList.value = newFileList;
    };

    const beforeUpload: UploadProps['beforeUpload'] = file => {
      fileList.value = [...fileList.value, file];
      return false;
    };

    const handleUpload = () => {
      const formData = new FormData();
      fileList.value.forEach((file: UploadProps['fileList'][number]) => {
        formData.append('files[]', file as any);
      });
      uploading.value = true;

      // You can use any AJAX library you like
      request('https://www.mocky.io/v2/5cc8019d300000980a055e76', {
        method: 'post',
        data: formData,
      })
        .then(() => {
          fileList.value = [];
          uploading.value = false;
          Pfmessage.success('upload successfully.');
        })
        .catch(() => {
          uploading.value = false;
          Pfmessage.error('upload failed.');
        });
    };

    return {
      fileList,
      uploading,
      handleRemove,
      beforeUpload,
      handleUpload,
    };
  },
});
</script>
