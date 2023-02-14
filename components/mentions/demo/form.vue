<docs>
---
order: 2
title:
  zh-CN: 配合 Form 使用
  en-US: With Form
---

## zh-CN

配合 Form 使用。

## en-US

to work with `Form`.
</docs>

<template>
  <pf-form layout="horizontal">
    <pf-form-item
      label="Top coders"
      :label-col="{ span: 6 }"
      :wrapper-col="{ span: 18 }"
      name="coders"
      v-bind="validateInfos.coders"
    >
      <pf-mentions v-model:value="modelRef.coders" rows="1">
        <pf-mentions-option value="afc163">afc163</pf-mentions-option>
        <pf-mentions-option value="zombieJ">zombieJ</pf-mentions-option>
        <pf-mentions-option value="yesmeck">yesmeck</pf-mentions-option>
      </pf-mentions>
    </pf-form-item>
    <pf-form-item
      label="Bio"
      :label-col="{ span: 6 }"
      :wrapper-col="{ span: 18 }"
      name="bio"
      v-bind="validateInfos.bio"
    >
      <pf-mentions
        v-model:value="modelRef.bio"
        rows="3"
        placeholder="You can use @ to ref user here"
      >
        <pf-mentions-option value="afc163">afc163</pf-mentions-option>
        <pf-mentions-option value="zombieJ">zombieJ</pf-mentions-option>
        <pf-mentions-option value="yesmeck">yesmeck</pf-mentions-option>
      </pf-mentions>
    </pf-form-item>
    <pf-form-item :wrapper-col="{ span: 12, offset: 5 }">
      <pf-button type="primary" @click="handleSubmit">Submit</pf-button>
      <pf-button style="margin-left: 8px" @click="resetFields">Reset</pf-button>
    </pf-form-item>
  </pf-form>
</template>
<script>
import { PfMentions, PfForm } from '@pf-ui/pf-ui-vue';
import { defineComponent, reactive } from 'vue';

const useForm = PfForm.useForm;
const { getMentions } = PfMentions;
export default defineComponent({
  setup() {
    const checkMention = async (rule, value) => {
      const mentions = getMentions(value);
      if (mentions.length < 2) {
        return Promise.reject('More than one must be selected!');
      } else {
        return Promise.resolve();
      }
    };
    const modelRef = reactive({
      bio: '',
      coders: '',
    });
    const rulesRef = reactive({
      bio: [{ required: true, message: 'Must input bio' }],
      coders: [{ required: true, validator: checkMention }],
    });
    const { resetFields, validate, validateInfos } = useForm(modelRef, rulesRef);
    const handleSubmit = e => {
      e.preventDefault();
      validate()
        .then(() => {
          console.log('Submit!!!', modelRef);
        })
        .catch(errors => {
          console.log('Errors in the form!!!', errors);
        });
    };
    return {
      modelRef,
      resetFields,
      validateInfos,
      handleSubmit,
    };
  },
});
</script>
