<docs>
---
order: 2
title:
  zh-CN: 组件尺寸
  en-US: Component size
---

## zh-CN

修改默认组件尺寸。

## en-US

Config component default size.

</docs>

<template>
  <pf-radio-group v-model:value="componentSize">
    <pf-radio-button value="small">Small</pf-radio-button>
    <pf-radio-button value="middle">Middle</pf-radio-button>
    <pf-radio-button value="large">Large</pf-radio-button>
  </pf-radio-group>
  <pf-divider />
  <pf-config-provider :component-size="componentSize">
    <div class="example">
      <pf-input />
    </div>
    <div class="example">
      <pf-tabs>
        <pf-tab-pane key="1" tab="Tab 1">Content of Tab Pane 1</pf-tab-pane>
        <pf-tab-pane key="2" tab="Tab 2">Content of Tab Pane 2</pf-tab-pane>
        <pf-tab-pane key="3" tab="Tab 3">Content of Tab Pane 3</pf-tab-pane>
      </pf-tabs>
    </div>
    <div class="example">
      <pf-input-search allow-clear />
    </div>
    <div class="example">
      <pf-textarea allow-clear />
    </div>
    <div class="example">
      <pf-select style="width: 100px" placeholder="select value" :options="[{ value: 'demo' }]" />
    </div>
    <div class="example">
      <pf-datePicker />
    </div>
    <div class="example">
      <pf-range-picker />
    </div>
    <div class="example">
      <pf-button>Button</pf-button>
    </div>
    <div class="example">
      <pf-card title="Card">
        <pf-table :columns="columns" :data-source="dataSource" />
      </pf-card>
    </div>
  </pf-config-provider>
</template>
<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const componentSize = ref('small');
    const columns = [
      { title: 'Name', dataIndex: 'name' },
      { title: 'Age', dataIndex: 'age' },
    ];
    const dataSource = [
      {
        key: '1',
        name: 'John Brown',
        age: 32,
      },
      {
        key: '2',
        name: 'Jim Green',
        age: 42,
      },
      {
        key: '3',
        name: 'Joe Black',
        age: 32,
      },
    ];
    return {
      componentSize,
      columns,
      dataSource,
    };
  },
});
</script>
<style scoped>
.example {
  margin: 16px 0;
}
</style>
