<docs>
---
order: 1
title:
  zh-CN: 配合 List 组件
  en-US: Usage with list
---

## zh-CN

配合 List 组件展现评论列表。

## en-US

Displaying a series of comments using the `antd` List Component.

</docs>

<template>
  <pf-list
    class="comment-list"
    :header="`${data.length} replies`"
    item-layout="horizontal"
    :data-source="data"
  >
    <template #renderItem="{ item }">
      <pf-list-item>
        <pf-comment :author="item.author" :avatar="item.avatar">
          <template #actions>
            <span v-for="(action, index) in item.actions" :key="index">{{ action }}</span>
          </template>
          <template #content>
            <p>
              {{ item.content }}
            </p>
          </template>
          <template #datetime>
            <pf-tooltip :title="item.datetime.format('YYYY-MM-DD HH:mm:ss')">
              <span>{{ item.datetime.fromNow() }}</span>
            </pf-tooltip>
          </template>
        </pf-comment>
      </pf-list-item>
    </template>
  </pf-list>
</template>
<script lang="ts">
import dayjs from 'dayjs';
import { defineComponent } from 'vue';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

export default defineComponent({
  setup() {
    return {
      data: [
        {
          actions: ['Reply to'],
          author: 'Han Solo',
          avatar: 'https://joeschmoe.io/api/v1/random',
          content:
            'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
          datetime: dayjs().subtract(1, 'days'),
        },
        {
          actions: ['Reply to'],
          author: 'Han Solo',
          avatar: 'https://joeschmoe.io/api/v1/random',
          content:
            'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
          datetime: dayjs().subtract(2, 'days'),
        },
      ],
      dayjs,
    };
  },
});
</script>
