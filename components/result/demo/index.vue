<template>
  <demo-sort :cols="1">
    <success />
    <info />
    <warning />
    <denied />
    <find-less />
    <server-error />
    <empty />
    <no-result />
    <no-network />
    <error />
    <custom-icon />
  </demo-sort>
</template>
<script lang="ts">
import Success from './success.vue';
import Info from './info.vue';
import Warning from './warning.vue';
import Denied from './403.vue';
import FindLess from './404.vue';
import ServerError from './500.vue';
import Empty from './empty.vue'
import NoResult from './noResult.vue';
import NoNetwork from './noNetwork.vue';
import Error from './error.vue';
import CustomIcon from './customIcon.vue';
import CN from '../index.zh-CN.md';
import US from '../index.en-US.md';
import { defineComponent } from 'vue';
export default defineComponent({
  CN,
  US,
  components: {
    Success,
    Info,
    Warning,
    Denied,
    FindLess,
    ServerError,
    Empty,
    NoResult,
    NoNetwork,
    Error,
    CustomIcon,
  },
  setup() {
    return {};
  },
});
</script>
