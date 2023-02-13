<docs>
---
order: 13
title:
  zh-CN: 高级搜索
  en-US: Advanced search
---

## zh-CN

三列栅格式的表单排列方式，常用于数据表格的高级搜索。

有部分定制的样式代码，由于输入标签长度不确定，需要根据具体情况自行调整。

## en-US

Three columns layout is often used for advanced searching of data table.

Because the width of label is not fixed, you may need to adjust it by customizing its style.

</docs>
<template>
  <div>
    <pf-form
      ref="formRef"
      name="advanced_search"
      class="ant-advanced-search-form"
      :model="formState"
      @finish="onFinish"
    >
      <pf-row :gutter="24">
        <template v-for="i in 10" :key="i">
          <pf-col v-show="expand || i <= 6" :span="8">
            <pf-form-item
              :name="`field-${i}`"
              :label="`field-${i}`"
              :rules="[{ required: true, message: 'input something' }]"
            >
              <pf-input v-model:value="formState[`field-${i}`]" placeholder="placeholder"></pf-input>
            </pf-form-item>
          </pf-col>
        </template>
      </pf-row>
      <pf-row>
        <pf-col :span="24" style="text-align: right">
          <pf-button type="primary" html-type="submit">Search</pf-button>
          <pf-button style="margin: 0 8px" @click="() => formRef.resetFields()">Clear</pf-button>
          <a style="font-size: 12px" @click="expand = !expand">
            <template v-if="expand">
              <UpOutlined />
            </template>
            <template v-else>
              <DownOutlined />
            </template>
            Collapse
          </a>
        </pf-col>
      </pf-row>
    </pf-form>
    <div class="search-result-list">Search Result List</div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, ref } from 'vue';
import { DownOutlined, UpOutlined } from '@ant-design/icons-vue';
import type { FormInstance } from '@pf-ui/pf-ui-vue';
export default defineComponent({
  components: {
    DownOutlined,
    UpOutlined,
  },
  setup() {
    const expand = ref(false);
    const formRef = ref<FormInstance>();
    const formState = reactive({});
    const onFinish = (values: any) => {
      console.log('Received values of form: ', values);
      console.log('formState: ', formState);
    };
    return {
      formRef,
      formState,
      expand,
      onFinish,
    };
  },
});
</script>

<style>
#components-form-demo-advanced-search .pf-form {
  max-width: none;
}
#components-form-demo-advanced-search .search-result-list {
  margin-top: 16px;
  border: 1px dashed #e9e9e9;
  border-radius: 2px;
  background-color: #fafafa;
  min-height: 200px;
  text-align: center;
  padding-top: 80px;
}
[data-theme='dark'] .pf-advanced-search-form {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid #434343;
  padding: 24px;
  border-radius: 2px;
}
[data-theme='dark'] #components-form-demo-advanced-search .search-result-list {
  border: 1px dashed #434343;
  background: rgba(255, 255, 255, 0.04);
}
</style>
