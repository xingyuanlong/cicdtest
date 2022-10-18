<docs>
---
order: 3
title:
  zh-CN: 回复框
  en-US: Reply Editor
---

## zh-CN

评论编辑器组件提供了相同样式的封装以支持自定义评论编辑器。

## en-US

Comment can be used as editor, user can customize the editor component.

</docs>

<template>
  <pf-list
    v-if="comments.length"
    :data-source="comments"
    :header="`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`"
    item-layout="horizontal"
  >
    <template #renderItem="{ item }">
      <pf-list-item>
        <pf-comment
          :author="item.author"
          :avatar="item.avatar"
          :content="item.content"
          :datetime="item.datetime"
        />
      </pf-list-item>
    </template>
  </pf-list>
  <pf-comment>
    <template #avatar>
      <pf-avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />
    </template>
    <template #content>
      <pf-form-item>
        <pf-textarea v-model:value="value" :rows="4" />
      </pf-form-item>
      <pf-form-item>
        <pf-button html-type="submit" :loading="submitting" type="primary" @click="handleSubmit">
          Add Comment
        </pf-button>
      </pf-form-item>
    </template>
  </pf-comment>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

type Comment = Record<string, string>;

export default defineComponent({
  setup() {
    const comments = ref<Comment[]>([]);
    const submitting = ref<boolean>(false);
    const value = ref<string>('');
    const handleSubmit = () => {
      if (!value.value) {
        return;
      }

      submitting.value = true;

      setTimeout(() => {
        submitting.value = false;
        comments.value = [
          {
            author: 'Han Solo',
            avatar: 'https://joeschmoe.io/api/v1/random',
            content: value.value,
            datetime: dayjs().fromNow(),
          },
          ...comments.value,
        ];
        value.value = '';
      }, 1000);
    };

    return {
      comments,
      submitting,
      value,
      handleSubmit,
    };
  },
});
</script>
