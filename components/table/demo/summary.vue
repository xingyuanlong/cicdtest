<docs>
---
order: 29
title:
  en-US: Summary
  zh-CN: 总结栏
---

## zh-CN

通过 `summary` 设置总结栏。使用 `pf-table-summary-cell` 同步 Column 的固定状态。你可以通过配置 `pf-table-summary` 的 `fixed` 属性使其固定。

## en-US

Set summary content by `summary` prop. Sync column fixed status with `pf-table-summary-cell`. You can fixed it by set `pf-table-summary` `fixed` prop.

</docs>

<template>
  <pf-table :columns="columns" :data-source="data" :pagination="false" bordered>
    <template #summary>
      <pf-table-summary-row>
        <pf-table-summary-cell>Total</pf-table-summary-cell>
        <pf-table-summary-cell>
          <pf-typography-text type="danger">{{ totals.totalBorrow }}</pf-typography-text>
        </pf-table-summary-cell>
        <pf-table-summary-cell>
          <pf-typography-text>{{ totals.totalRepayment }}</pf-typography-text>
        </pf-table-summary-cell>
      </pf-table-summary-row>
      <pf-table-summary-row>
        <pf-table-summary-cell>Balance</pf-table-summary-cell>
        <pf-table-summary-cell :col-span="2">
          <pf-typography-text type="danger">
            {{ totals.totalBorrow - totals.totalRepayment }}
          </pf-typography-text>
        </pf-table-summary-cell>
      </pf-table-summary-row>
    </template>
  </pf-table>
  <br />
  <pf-table
    :columns="fixedColumns"
    :data-source="fixedData"
    :pagination="false"
    :scroll="{ x: 2000, y: 500 }"
    bordered
  >
    <template #summary>
      <pf-table-summary fixed>
        <pf-table-summary-row>
          <pf-table-summary-cell :index="0">Summary</pf-table-summary-cell>
          <pf-table-summary-cell :index="1">This is a summary content</pf-table-summary-cell>
        </pf-table-summary-row>
      </pf-table-summary>
    </template>
  </pf-table>
</template>

<script lang="ts">
import type { TableColumnsType } from '@pf-ui/pf-ui-vue';
import { computed, defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const columns = ref<TableColumnsType>([
      {
        title: 'Name',
        dataIndex: 'name',
      },
      {
        title: 'Borrow',
        dataIndex: 'borrow',
      },
      {
        title: 'Repayment',
        dataIndex: 'repayment',
      },
    ]);

    const data = ref([
      {
        key: '1',
        name: 'John Brown',
        borrow: 10,
        repayment: 33,
      },
      {
        key: '2',
        name: 'Jim Green',
        borrow: 100,
        repayment: 0,
      },
      {
        key: '3',
        name: 'Joe Black',
        borrow: 10,
        repayment: 10,
      },
      {
        key: '4',
        name: 'Jim Red',
        borrow: 75,
        repayment: 45,
      },
    ]);

    const fixedColumns = ref<TableColumnsType>([
      {
        title: 'Name',
        dataIndex: 'name',
        fixed: true,
        width: 100,
      },
      {
        title: 'Description',
        dataIndex: 'description',
      },
    ]);

    const fixedData = ref<{ key: number; name: string; description: string }[]>([]);
    for (let i = 0; i < 20; i += 1) {
      fixedData.value.push({
        key: i,
        name: ['Light', 'Bamboo', 'Little'][i % 3],
        description: 'Everything that has a beginning, has an end.',
      });
    }

    const totals = computed(() => {
      let totalBorrow = 0;
      let totalRepayment = 0;

      data.value.forEach(({ borrow, repayment }) => {
        totalBorrow += borrow;
        totalRepayment += repayment;
      });
      return { totalBorrow, totalRepayment };
    });
    return {
      data,
      columns,
      totals,
      fixedColumns,
      fixedData,
    };
  },
});
</script>

<style>
#components-table-demo-summary tfoot th,
#components-table-demo-summary tfoot td {
  background: #fafafa;
}
[data-theme='dark'] #components-table-demo-summary tfoot th,
[data-theme='dark'] #components-table-demo-summary tfoot td {
  background: #1d1d1d;
}
</style>
