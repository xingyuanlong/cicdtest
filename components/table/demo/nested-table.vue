<docs>
---
order: 15
title:
  zh-CN: 嵌套子表格
  en-US: Nested tables

---

## zh-CN

展示每行数据更详细的信息。

## en-US

Showing more detailed info of every row.

</docs>

<template>
  <pf-table :columns="columns" :data-source="data" class="components-table-demo-nested" expandRowByClick>
    <template #bodyCell="{ column }">
      <template v-if="column.key === 'operation'">
        <a>Publish</a>
      </template>
    </template>
    <template #expandedRowRender>
      <pf-table :columns="innerColumns" :data-source="innerData" :pagination="false" class="inner-table">
        <template #bodyCell="{ column }">
          <template v-if="column.key === 'state'">
            <span>
              <pf-badge status="success" />
              Finished
            </span>
          </template>
          <template v-else-if="column.key === 'operation'">
            <span class="table-operation">
              <a>Pause</a>
              <a>Stop</a>
              <pf-dropdown arrow placement="bottom">
                <template #overlay>
                  <pf-menu>
                    <pf-menu-item>Action 1</pf-menu-item>
                    <pf-menu-item>Action 2</pf-menu-item>
                  </pf-menu>
                </template>
                <a>
                  More
                  <down-outlined />
                </a>
              </pf-dropdown>
            </span>
          </template>
        </template>
      </pf-table>
    </template>
  </pf-table>
</template>
<script lang="ts">
import ArrowDownFilled from '@pf-ui/pf-icons-vue/ArrowDownFilled';
import { defineComponent } from 'vue';

const columns = [
  { title: 'Name', dataIndex: 'name', key: 'name' },
  { title: 'Platform', dataIndex: 'platform', key: 'platform' },
  { title: 'Version', dataIndex: 'version', key: 'version' },
  { title: 'Upgraded', dataIndex: 'upgradeNum', key: 'upgradeNum' },
  { title: 'Creator', dataIndex: 'creator', key: 'creator' },
  { title: 'Date', dataIndex: 'createdAt', key: 'createdAt' },
  { title: 'Action', key: 'operation' },
];

interface DataItem {
  key: number;
  name: string;
  platform: string;
  version: string;
  upgradeNum: number;
  creator: string;
  createdAt: string;
}

const data: DataItem[] = [];
for (let i = 0; i < 3; ++i) {
  data.push({
    key: i,
    name: `Screem ${i + 1}`,
    platform: 'iOS',
    version: '10.3.4.5654',
    upgradeNum: 500,
    creator: 'Jack',
    createdAt: '2014-12-24 23:12:00',
  });
}

const innerColumns = [
  { title: 'Date', dataIndex: 'date', key: 'date' },
  { title: 'Name', dataIndex: 'name', key: 'name' },
  { title: 'Status', key: 'state' },
  { title: 'Upgrade Status', dataIndex: 'upgradeNum', key: 'upgradeNum' },
  {
    title: 'Action',
    dataIndex: 'operation',
    key: 'operation',
  },
];

interface innerDataItem {
  key: number;
  date: string;
  name: string;
  upgradeNum: string;
}

const innerData: innerDataItem[] = [];
for (let i = 0; i < 3; ++i) {
  innerData.push({
    key: i,
    date: '2014-12-24 23:12:00',
    name: `This is production name ${i + 1}`,
    upgradeNum: 'Upgraded: 56',
  });
}

export default defineComponent({
  components: {
    DownOutlined: ArrowDownFilled
  },
  setup() {
    return {
      data,
      columns,
      innerColumns,
      innerData,
    };
  },
});
</script>
<style>
.inner-table {
  padding: 0 20px;
  background-color: #f5f5f5;
}
.inner-table .pf-table-tbody > tr > td {
  border-bottom: 1px solid #d1d1d1;
}
</style>