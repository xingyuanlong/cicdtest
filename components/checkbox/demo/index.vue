<template>
  <demo-sort>
    <basic />
    <check-all />
    <controller />
    <disabled />
    <group />
    <layout />
  </demo-sort>
</template>
<script lang="ts">
import Basic from './basic.vue';
import CheckAll from './check-all.vue';
import Controller from './controller.vue';
import Disabled from './disabled.vue';
import Group from './group.vue';
import Layout from './layout.vue';
import CN from '../index.zh-CN.md';
import US from '../index.en-US.md';
import { defineComponent } from 'vue';

export default defineComponent({
  CN,
  US,
  components: {
    Basic,
    CheckAll,
    Controller,
    Disabled,
    Group,
    Layout,
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
