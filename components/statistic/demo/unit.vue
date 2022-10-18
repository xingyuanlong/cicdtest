<docs>
---
order: 1
title:
  zh-CN: 单位
  en-US: Unit
---

## zh-CN

通过前缀和后缀添加单位。

## en-US

Add unit through `prefix` and `suffix`.

</docs>

<template>
  <pf-row :gutter="16">
    <pf-col :span="12">
      <pf-statistic title="Feedback" :value="1128" style="margin-right: 50px">
        <template #suffix>
          <like-outlined />
        </template>
      </pf-statistic>
    </pf-col>
    <pf-col :span="12">
      <pf-statistic title="Unmerged" :value="93" class="demo-class">
        <template #suffix>
          <span>/ 100</span>
        </template>
      </pf-statistic>
    </pf-col>
  </pf-row>
</template>
<script lang="ts">
import { LikeOutlined } from '@ant-design/icons-vue';
import { defineComponent } from 'vue';
export default defineComponent({
  components: {
    LikeOutlined,
  },
});
</script>
