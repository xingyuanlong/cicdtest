<template>
  <demo-sort>
    <basic />
    <disabled />
    <Example />
    <ghost />
    <icon />
    <loading />
    <multiple />
    <size />
    <block />
    <danger />
  </demo-sort>
</template>
<script lang="ts">
import Example from './example.vue';
import Basic from './basic.vue';
import Disabled from './disabled.vue';
import Ghost from './ghost.vue';
import Icon from './icon.vue';
import Loading from './loading.vue';
import Multiple from './multiple.vue';
import Size from './size.vue';
import Block from './block.vue';
import Danger from './danger.vue';
import CN from '../index.zh-CN.md';
import US from '../index.en-US.md';
import { defineComponent } from 'vue';

export default defineComponent({
  CN,
  US,
  components: {
    Example,
    Basic,
    Disabled,
    Ghost,
    Icon,
    Loading,
    Multiple,
    Size,
    Block,
    Danger,
  },
  setup() {
    return {};
  },
});
</script>
<style>
[id^='components-button-demo-'] .pf-btn {
  margin-right: 8px;
  margin-bottom: 12px;
}
[id^='components-button-demo-'] .pf-btn-rtl {
  margin-right: 0;
  margin-left: 8px;
}
[id^='components-button-demo-'] .pf-btn-group > .pf-btn,
[id^='components-button-demo-'] .pf-btn-group > span > .pf-btn {
  margin-right: 0;
}
[data-theme='dark'] .site-button-ghost-wrapper {
  background: rgba(255, 255, 255, 0.2);
}
</style>
