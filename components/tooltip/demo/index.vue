<template>
  <demo-sort>
    <basic />
    <Basic2 />
    <placement />
    <arrow-point-at-center />
    <auto-adjust-overflow />
    <color />
  </demo-sort>
</template>
<script lang="ts">
import Basic from './basic.vue';
import Basic2 from './basic2.vue';
import Placement from './placement.vue';
import arrowPointAtCenter from './arrow-point-at-center.vue';
import AutoAdjustOverflow from './auto-adjust-overflow.vue';
import Color from './color.vue';
import CN from '../index.zh-CN.md';
import US from '../index.en-US.md';
import { defineComponent } from 'vue';
export default defineComponent({
  CN,
  US,
  components: {
    Basic,
    Basic2,
    Placement,
    arrowPointAtCenter,
    AutoAdjustOverflow,
    Color,
  },
  setup() {
    return {};
  },
});
</script>
