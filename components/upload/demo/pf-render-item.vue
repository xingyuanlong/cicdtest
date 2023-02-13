<docs>
---
order: 0
title:
  zh-CN: 使用pf-ui风格的上传列表
  en-US: pf-ui style
---

## zh-CN

设置 `itemPresetStyle="pf-text"` (`list-type="text"`时生效 ) 来使用pf-ui风格的上传列表

## en-US

.
</docs>

<template>
  <pf-upload
    v-model:file-list="fileList"
    name="file"
    item-preset-style="pf-text"
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
import { UploadOutlined } from '@ant-design/icons-vue';
import { defineComponent, ref } from 'vue';
import type { UploadChangeParam, UploadProps } from '@pf-ui/pf-ui-vue';

export default defineComponent({
  components: {
    UploadOutlined,
  },
  setup() {
    const handleChange = (info: UploadChangeParam) => {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
    };

    const fileList = ref<UploadProps['fileList']>([
      {
        uid: '-1',
        name: 'xxx.png',
        status: 'done',
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      },
      {
        uid: '-2',
        name: 'yyy.png',
        status: 'done',
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      },
      {
        uid: '3',
        name: 'zzz.png',
        status: 'error',
        response: 'Server Error 500', // custom error message to show
        url: 'http://www.baidu.com/zzz.png',
      },
    ]);
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
  