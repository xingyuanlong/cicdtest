<docs>
---
order: 1
title:
  zh-CN: 异步加载
  en-US: Asynchronous loading
---

## zh-CN

匹配内容列表为异步返回时。

## en-US

async.

</docs>
<template>
  <pf-mentions v-model:value="value" :loading="loading" @search="onSearch">
    <pf-mentions-option v-for="{ login, avatar_url: avatar } in users" :key="login" :value="login">
      <img :src="avatar" :alt="login" style="width: 20px; margin-right: 8px" />
      <span>{{ login }}</span>
    </pf-mentions-option>
  </pf-mentions>
</template>

<script lang="ts">
import { debounce } from 'lodash-es';
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const value = ref<string>('');
    const loading = ref<boolean>(false);
    const users = ref<{ login: string; avatar_url: string }[]>([]);
    const search = ref<string>('');
    const loadGithubUsers = debounce((key: string) => {
      if (!key) {
        users.value = [];
        return;
      }

      fetch(`https://api.github.com/search/users?q=${key}`)
        .then(res => res.json())
        .then(({ items = [] }) => {
          if (search.value !== key) return;
          users.value = items.slice(0, 10);
          loading.value = false;
        });
    }, 800);

    const onSearch = (searchValue: string) => {
      search.value = searchValue;
      loading.value = !!searchValue;
      console.log(!!searchValue);
      users.value = [];
      console.log('Search:', searchValue);
      loadGithubUsers(searchValue);
    };

    return {
      value,
      loading,
      users,
      loadGithubUsers,
      onSearch,
    };
  },
});
</script>
