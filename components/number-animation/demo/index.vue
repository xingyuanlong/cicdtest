<template>
  <demo-sort>
    <Basic />
    <Precision />
    <Separator />
    <Intl />
    <Finish />
  </demo-sort>
</template>
<script lang="ts">
import Basic from './basic.vue';
import Precision from './precision.vue';
import Separator from './separator.vue';
import Intl from './intl.vue';
import Finish from './finish.vue';
import CN from '../index.zh-CN.md';
import US from '../index.en-US.md';
import { defineComponent } from 'vue';

export default defineComponent({
  CN,
  US,
  components: {
    Basic,
    Precision,
    Separator,
    Intl,
    Finish
  },
  setup() {
    return {};
  },
});
</script>
