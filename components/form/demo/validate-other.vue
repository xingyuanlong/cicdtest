<docs>
---
order: 24
title:
  zh-CN: 校验其他组件
  en-US: Other Form Controls
---

## zh-CN

以上演示没有出现的表单控件对应的校验演示。

## en-US

Demonstration of validation configuration for form controls which are not shown in the demos above.
</docs>
<template>
  <pf-form
    :model="formState"
    name="validate_other"
    v-bind="formItemLayout"
    @finishFailed="onFinishFailed"
    @finish="onFinish"
  >
    <pf-form-item label="Plain Text">
      <span class="ant-form-text">China</span>
    </pf-form-item>
    <pf-form-item
      name="select"
      label="Select"
      has-feedback
      :rules="[{ required: true, message: 'Please select your country!' }]"
    >
      <pf-select v-model:value="formState.select" placeholder="Please select a country">
        <pf-select-option value="china">China</pf-select-option>
        <pf-select-option value="usa">U.S.A</pf-select-option>
      </pf-select>
    </pf-form-item>

    <pf-form-item
      name="select-multiple"
      label="Select[multiple]"
      :rules="[{ required: true, message: 'Please select your favourite colors!', type: 'array' }]"
    >
      <pf-select
        v-model:value="formState['select-multiple']"
        mode="multiple"
        placeholder="Please select favourite colors"
      >
        <pf-select-option value="red">Red</pf-select-option>
        <pf-select-option value="green">Green</pf-select-option>
        <pf-select-option value="blue">Blue</pf-select-option>
      </pf-select>
    </pf-form-item>

    <pf-form-item label="InputNumber">
      <pf-form-item name="input-number" no-style>
        <pf-input-number v-model:value="formState['input-number']" :min="1" :max="10" />
      </pf-form-item>
      <span class="ant-form-text">machines</span>
    </pf-form-item>

    <pf-form-item name="switch" label="Switch">
      <pf-switch v-model:checked="formState.switch" />
    </pf-form-item>

    <pf-form-item name="slider" label="Slider">
      <pf-slider
        v-model:value="formState.slider"
        :marks="{
          0: 'A',
          20: 'B',
          40: 'C',
          60: 'D',
          80: 'E',
          100: 'F',
        }"
      />
    </pf-form-item>

    <pf-form-item name="radio-group" label="Radio.Group">
      <pf-radio-group v-model:value="formState['radio-group']">
        <pf-radio value="a">item 1</pf-radio>
        <pf-radio value="b">item 2</pf-radio>
        <pf-radio value="c">item 3</pf-radio>
      </pf-radio-group>
    </pf-form-item>

    <pf-form-item
      name="radio-button"
      label="Radio.Button"
      :rules="[{ required: true, message: 'Please pick an item!' }]"
    >
      <pf-radio-group v-model:value="formState['radio-button']">
        <pf-radio-button value="a">item 1</pf-radio-button>
        <pf-radio-button value="b">item 2</pf-radio-button>
        <pf-radio-button value="c">item 3</pf-radio-button>
      </pf-radio-group>
    </pf-form-item>

    <pf-form-item name="checkbox-group" label="Checkbox.Group">
      <pf-checkbox-group v-model:value="formState['checkbox-group']">
        <pf-row>
          <pf-col :span="8">
            <pf-checkbox value="A" style="line-height: 32px">A</pf-checkbox>
          </pf-col>
          <pf-col :span="8">
            <pf-checkbox value="B" style="line-height: 32px" disabled>B</pf-checkbox>
          </pf-col>
          <pf-col :span="8">
            <pf-checkbox value="C" style="line-height: 32px">C</pf-checkbox>
          </pf-col>
          <pf-col :span="8">
            <pf-checkbox value="D" style="line-height: 32px">D</pf-checkbox>
          </pf-col>
          <pf-col :span="8">
            <pf-checkbox value="E" style="line-height: 32px">E</pf-checkbox>
          </pf-col>
          <pf-col :span="8">
            <pf-checkbox value="F" style="line-height: 32px">F</pf-checkbox>
          </pf-col>
        </pf-row>
      </pf-checkbox-group>
    </pf-form-item>

    <pf-form-item name="rate" label="Rate">
      <pf-rate v-model:value="formState.rate" allow-half />
    </pf-form-item>

    <pf-form-item name="searchInput" label="searchInput">
      <pf-search-input
        placeholder="input search text"
      />
    </pf-form-item>

    <pf-form-item name="rate" label="Rate">
      <pf-textarea :rows="4" placeholder="maxLength is 6" :maxlength="6" showCount/>
    </pf-form-item>

    <pf-form-item name="searchInput" label="searchInput">
      <pf-input-search
        placeholder="input search text"
        enter-button
        allowClear
      />
    </pf-form-item>

    <pf-form-item name="upload" label="Upload" extra="longgggggggggggggggggggggggggggggggggg">
      <pf-upload
        v-model:fileList="formState.upload"
        name="logo"
        action="/upload.do"
        list-type="picture"
      >
        <pf-button>
          <template #icon><UploadOutlined /></template>
          Click to upload
        </pf-button>
      </pf-upload>
    </pf-form-item>

    <pf-form-item label="Dragger">
      <pf-form-item name="dragger" no-style>
        <pf-upload-dragger v-model:fileList="formState.dragger" name="files" action="/upload.do">
          <p class="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p class="ant-upload-text">Click or drag file to this area to upload</p>
          <p class="ant-upload-hint">Support for a single or bulk upload.</p>
        </pf-upload-dragger>
      </pf-form-item>
    </pf-form-item>

    <pf-form-item :wrapper-col="{ span: 12, offset: 6 }" style="margin-top: 24px;">
      <pf-button type="primary" html-type="submit">Submit</pf-button>
    </pf-form-item>
  </pf-form>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue';
import { UploadOutlined, InboxOutlined } from '@ant-design/icons-vue';

export default defineComponent({
  components: {
    UploadOutlined,
    InboxOutlined,
  },
  setup() {
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };

    const formState = reactive<Record<string, any>>({
      'input-number': 3,
      'checkbox-group': ['A', 'B'],
      rate: 3.5,
    });
    const onFinish = (values: any) => {
      console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
      console.log('Failed:', errorInfo);
    };
    return {
      formState,
      onFinish,
      onFinishFailed,
      formItemLayout,
    };
  },
});
</script>
