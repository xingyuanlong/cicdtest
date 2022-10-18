<docs>
---
order: 4
title:
  zh-CN: 抽屉表单
  en-US: Submit form in drawer
---

## zh-CN

在抽屉中使用表单。

## en-US

Use form in drawer with submit button.

</docs>

<template>
  <pf-button type="primary" @click="showDrawer">
    <template #icon><PlusOutlined /></template>
    New account
  </pf-button>
  <pf-drawer
    title="Create a new account"
    :width="720"
    :visible="visible"
    :body-style="{ paddingBottom: '80px' }"
    :footer-style="{ textAlign: 'right' }"
    @close="onClose"
  >
    <pf-form :model="form" :rules="rules" layout="vertical">
      <pf-row :gutter="16">
        <pf-col :span="12">
          <pf-form-item label="Name" name="name">
            <pf-input v-model:value="form.name" placeholder="Please enter user name" />
          </pf-form-item>
        </pf-col>
        <pf-col :span="12">
          <pf-form-item label="Url" name="url">
            <pf-input
              v-model:value="form.url"
              style="width: 100%"
              addon-before="http://"
              addon-after=".com"
              placeholder="please enter url"
            />
          </pf-form-item>
        </pf-col>
      </pf-row>
      <pf-row :gutter="16">
        <pf-col :span="12">
          <pf-form-item label="Owner" name="owner">
            <pf-select v-model:value="form.owner" placeholder="Please a-s an owner">
              <pf-select-option value="xiao">Xiaoxiao Fu</pf-select-option>
              <pf-select-option value="mao">Maomao Zhou</pf-select-option>
            </pf-select>
          </pf-form-item>
        </pf-col>
        <pf-col :span="12">
          <pf-form-item label="Type" name="type">
            <pf-select v-model:value="form.type" placeholder="Please choose the type">
              <pf-select-option value="private">Private</pf-select-option>
              <pf-select-option value="public">Public</pf-select-option>
            </pf-select>
          </pf-form-item>
        </pf-col>
      </pf-row>
      <pf-row :gutter="16">
        <pf-col :span="12">
          <pf-form-item label="Approver" name="approver">
            <pf-select v-model:value="form.approver" placeholder="Please choose the approver">
              <pf-select-option value="jack">Jack Ma</pf-select-option>
              <pf-select-option value="tom">Tom Liu</pf-select-option>
            </pf-select>
          </pf-form-item>
        </pf-col>
        <pf-col :span="12">
          <pf-form-item label="DateTime" name="dateTime">
            <pf-date-picker
              v-model:value="form.dateTime"
              style="width: 100%"
              :get-popup-container="trigger => trigger.parentElement"
            />
          </pf-form-item>
        </pf-col>
      </pf-row>
      <pf-row :gutter="16">
        <pf-col :span="24">
          <pf-form-item label="Description" name="description">
            <pf-textarea
              v-model:value="form.description"
              :rows="4"
              placeholder="please enter url description"
            />
          </pf-form-item>
        </pf-col>
      </pf-row>
    </pf-form>
    <pf-row justify="center">
      <pf-space :size="16">
        <pf-button type="primary" @click="onClose">Submit</pf-button>
        <pf-button @click="onClose">Cancel</pf-button>
      </pf-space>
    </pf-row>
  </pf-drawer>
</template>
<script lang="ts">
import { PlusOutlined } from '@ant-design/icons-vue';
import { defineComponent, reactive, ref } from 'vue';
import type { Rule } from 'pf-ui-vue/es/form';
export default defineComponent({
  components: {
    PlusOutlined,
  },
  setup() {
    const form = reactive({
      name: '',
      url: '',
      owner: '',
      type: '',
      approver: '',
      dateTime: null,
      description: '',
    });

    const rules: Record<string, Rule[]> = {
      name: [{ required: true, message: 'Please enter user name' }],
      url: [{ required: true, message: 'please enter url' }],
      owner: [{ required: true, message: 'Please select an owner' }],
      type: [{ required: true, message: 'Please choose the type' }],
      approver: [{ required: true, message: 'Please choose the approver' }],
      dateTime: [{ required: true, message: 'Please choose the dateTime', type: 'object' }],
      description: [{ required: true, message: 'Please enter url description' }],
    };

    const visible = ref<boolean>(false);

    const showDrawer = () => {
      visible.value = true;
    };

    const onClose = () => {
      visible.value = false;
    };
    return {
      form,
      rules,
      visible,
      showDrawer,
      onClose,
    };
  },
});
</script>
