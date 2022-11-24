<template>
  <demo-sort>
    <basic />
    <X />
    <Trigger />
  </demo-sort>
</template>
<script lang="ts">
import Basic from './basic.vue'
import X from './x.vue'
import Trigger from './trigger.vue'
import CN from '../index.zh-CN.md'
import US from '../index.en-US.md'
import { defineComponent } from 'vue'

export default defineComponent({
  CN,
  US,
  components: {
    Basic,
    X,
    Trigger
  },
  setup() {
    return {}
  },
})
</script>