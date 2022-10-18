<docs>
---
order: 2
title:
  zh-CN: 自定义尺寸
  en-US: Custom Size
---

## zh-CN

自定义尺寸，适应在各种容器中展示。

## en-US

Custom sizes to fit in a variety of containers.

</docs>

<template>
  <div>
    <pf-radio-group v-model:value="size" @change="onChange">
      <pf-radio value="default">default</pf-radio>
      <pf-radio value="middle">middle</pf-radio>
      <pf-radio value="small">small</pf-radio>
    </pf-radio-group>
    <br />
    <br />
    <pf-descriptions bordered title="Custom Size" :size="size">
      <template #extra>
        <pf-button type="primary">Edit</pf-button>
      </template>
      <pf-descriptions-item label="Product">Cloud Database</pf-descriptions-item>
      <pf-descriptions-item label="Billing">Prepaid</pf-descriptions-item>
      <pf-descriptions-item label="Time">18:00:00</pf-descriptions-item>
      <pf-descriptions-item label="Amount">$80.00</pf-descriptions-item>
      <pf-descriptions-item label="Discount">$20.00</pf-descriptions-item>
      <pf-descriptions-item label="Official">$60.00</pf-descriptions-item>
      <pf-descriptions-item label="Config Info">
        Data disk type: MongoDB
        <br />
        Database version: 3.4
        <br />
        Package: dds.mongo.mid
        <br />
        Storage space: 10 GB
        <br />
        Replication factor: 3
        <br />
        Region: East China 1
        <br />
      </pf-descriptions-item>
    </pf-descriptions>
    <br />
    <br />
    <pf-descriptions title="Custom Size" :size="size">
      <template #extra>
        <pf-button type="primary">Edit</pf-button>
      </template>
      <pf-descriptions-item label="Product">Cloud Database</pf-descriptions-item>
      <pf-descriptions-item label="Billing">Prepaid</pf-descriptions-item>
      <pf-descriptions-item label="Time">18:00:00</pf-descriptions-item>
      <pf-descriptions-item label="Amount">$80.00</pf-descriptions-item>
      <pf-descriptions-item label="Discount">$20.00</pf-descriptions-item>
      <pf-descriptions-item label="Official">$60.00</pf-descriptions-item>
    </pf-descriptions>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import type { DescriptionsProps } from 'pf-ui-vue';
export default defineComponent({
  setup() {
    const size = ref<DescriptionsProps['size']>('default');
    const onChange = (e: any) => {
      console.log('size checked', e.target.value);
      size.value = e.target.value;
    };

    return {
      size,
      onChange,
    };
  },
});
</script>
