<template>
  <demo-sort>
    <Basic />
    <Fullscreen />
    <Image />
  </demo-sort>
</template>
<script lang="ts">
import Basic from './basic.vue';
import Fullscreen from './fullscreen.vue';
import Image from './image.vue';
import CN from '../index.zh-CN.md';
import US from '../index.en-US.md';
import { defineComponent } from 'vue';

export default defineComponent({
  CN,
  US,
  components: {
    Basic,
    Image,
    Fullscreen,
  },
  setup() {
    return {};
  },
});
</script>
