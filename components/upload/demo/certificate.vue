<docs>
---
order: 17
title:
  zh-CN: 证件照
  en-US: Certificate
---

## zh-CN

点击上传证件照，自定义上传后的展示。

## en-US
.

</docs>
  
  <template>
    <div>
      <pf-upload
        v-model:file-list="fileList"
        name="certificate"
        list-type="picture-card"
        class="certificate-uploader"
        :show-upload-list="false"
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        :before-upload="beforeUpload"
        @change="handleChange"
        @remove="handleRemove"
        v-show="!imageUrl"
      >
        <div ref="uploadBtn">
          <loading-outlined v-if="loading"></loading-outlined>
          <idcard-two-tone v-else class="certificate-upload-icon-idcard" />
        </div>
      </pf-upload>
      <div class="certificate-img-container" v-if="imageUrl">
        <pf-image
          :src="imageUrl"
          width="100%"
          height="100%"
          :preview="{
            visible: showPreview,
            onVisibleChange: setVisible
          }"
          class="certificate-img"
        />
        <div class="certificate-img-mask">
          <pf-tooltip title="替换图片" placement="bottom" overlay-class-name="pf-tooltip-image-operation">
            <replace-filled  class="certificate-img-icon certificate-img-icon-replace" @click="handleReplace" />
          </pf-tooltip>
          <pf-tooltip title="预览" placement="bottom" overlay-class-name="pf-tooltip-image-operation">
            <zoom-filled  class="certificate-img-icon" @click="handlePreview" />
          </pf-tooltip>
          <error-filled class="certificate-img-icon certificate-img-icon-delete" @click="handleRemove" />
        </div>
      </div>
    </div>
  </template>
  <script lang="ts">
  import { PlusOutlined, LoadingOutlined } from '@ant-design/icons-vue';
  import { Pfmessage } from 'pf-ui-vue';
  import { defineComponent, ref } from 'vue';
  import type { UploadChangeParam, UploadProps } from 'pf-ui-vue';
  import ErrorFilled from '@pf-ui/pf-icons-vue/ErrorFilled';
  import ReplaceFilled from '@pf-ui/pf-icons-vue/ReplaceFilled';
  import ZoomFilled from '@pf-ui/pf-icons-vue/ZoomFilled';
  import IdcardTwoTone from '@pf-ui/pf-icons-vue/IdcardTwoTone'
  
  function getBase64(img: Blob, callback: (base64Url: string) => void) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result as string));
    reader.readAsDataURL(img);
  }
  export default defineComponent({
    components: {
      LoadingOutlined,
      PlusOutlined,
      ErrorFilled,
      ReplaceFilled,
      ZoomFilled,
      IdcardTwoTone
    },
    setup() {
      const fileList = ref([]);
      const uploadBtn = ref(null);
      const showPreview = ref(false);
      const loading = ref<boolean>(false);
      const imageUrl = ref<string>('');
  
      const handleChange = (info: UploadChangeParam) => {
        if (info.file.status === 'uploading') {
          loading.value = true;
          return;
        }
        if (info.file.status === 'done') {
          // Get this url from response in real world.
          getBase64(info.file.originFileObj, (base64Url: string) => {
            imageUrl.value = base64Url;
            loading.value = false;
          });
        }
        if (info.file.status === 'error') {
          loading.value = false;
          Pfmessage.error('upload error');
        }
      };
  
      const beforeUpload = (file: UploadProps['fileList'][number]) => {
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJpgOrPng) {
          Pfmessage.error('You can only upload JPG file!');
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
          Pfmessage.error('Image must smaller than 2MB!');
        }
        return isJpgOrPng && isLt2M;
      };

      const handleRemove = () => {
        imageUrl.value = null;
      };

      const setVisible = (value: boolean) => {
        showPreview.value = value;
      };

      const handlePreview = () => {
        setVisible(true);
      };

      const handleReplace = () => {
        uploadBtn.value.click();
      };
  
      return {
        fileList,
        uploadBtn,
        loading,
        imageUrl,
        showPreview,
        handleChange,
        beforeUpload,
        handleRemove,
        handlePreview,
        setVisible,
        handleReplace
      };
    },
  });
  </script>
  <style>
  .certificate-upload-icon-idcard {
    font-size: 145px;
  }
  .certificate-img-container {
    width: 300px;
    height: 200px;
    position: relative;
  }
  .certificate-img-container .certificate-img {
    object-fit: contain;
  }
  .certificate-img-mask {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0;
    background: rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .certificate-img-mask:hover {
    opacity: 1;
  }
  .certificate-img-icon {
    font-size: 28px;
    cursor: pointer;
    color: #ffffff;
  }
  .certificate-img-icon-replace {
    margin-right: 50px;
  }
  .certificate-img-icon-delete {
    position: absolute;
    top: 0;
    right: 00;
    transform: translate(50%, -50%);
    color: #F36969;
    font-size: 20px;
  }
  .certificate-uploader .pf-upload, .certificate-uploader .pf-upload-list-picture-card-container {
    width: 302px;
    height: 202px;
  }
  .pf-upload-select-picture-card i {
    font-size: 32px;
    color: #999;
  }
  
  </style>
  