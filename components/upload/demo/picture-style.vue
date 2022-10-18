<docs>
---
order: 6
title:
  zh-CN: 图片列表样式
  en-US: Pictures with list style
---

## zh-CN

上传文件为图片，可展示本地缩略图。

## en-US

If uploaded file is a picture, the thumbnail can be shown.
</docs>

<template>
  <div>
    <pf-upload
      v-model:file-list="fileList"
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      list-type="picture"
    >
      <pf-button>
        <upload-outlined></upload-outlined>
        upload
      </pf-button>
    </pf-upload>
    <br />
    <br />
    <pf-upload
      v-model:file-list="fileList1"
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      list-type="picture"
      class="upload-list-inline"
    >
      <pf-button>
        <upload-outlined></upload-outlined>
        upload
      </pf-button>
    </pf-upload>
  </div>
</template>

<script lang="ts">
import { UploadOutlined } from '@ant-design/icons-vue';
import { defineComponent, ref } from 'vue';
import type { UploadProps } from 'pf-ui-vue';

export default defineComponent({
  components: {
    UploadOutlined,
  },
  setup() {
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
    ]);
    const fileList1 = ref<UploadProps['fileList']>([
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
    ]);
    return {
      fileList,
      fileList1,
    };
  },
});
</script>
<style scoped>
/* tile uploaded pictures */
.upload-list-inline :deep(.ant-upload-list-item) {
  float: left;
  width: 200px;
  margin-right: 8px;
}
.upload-list-inline [class*='-upload-list-rtl'] :deep(.ant-upload-list-item) {
  float: right;
}
</style>
