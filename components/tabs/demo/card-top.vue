<docs>
---
order: 9
title:
  zh-CN: 卡片式页签容器
  en-US: Container of card type Tab
---

## zh-CN

用于容器顶部，需要一点额外的样式覆盖。

## en-US
Should be used at the top of container, needs to override styles.

</docs>

<template>
  <div class="card-container">
    <pf-tabs v-model:activeKey="activeKey" type="card">
      <pf-tab-pane key="1" tab="Tab Title 1">
        <p>Content of Tab Pane 1</p>
        <p>Content of Tab Pane 1</p>
        <p>Content of Tab Pane 1</p>
      </pf-tab-pane>
      <pf-tab-pane key="2" tab="Tab Title 2">
        <p>Content of Tab Pane 2</p>
        <p>Content of Tab Pane 2</p>
        <p>Content of Tab Pane 2</p>
      </pf-tab-pane>
      <pf-tab-pane key="3" tab="Tab Title 3">
        <p>Content of Tab Pane 3</p>
        <p>Content of Tab Pane 3</p>
        <p>Content of Tab Pane 3</p>
      </pf-tab-pane>
    </pf-tabs>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    return {
      activeKey: ref('2'),
    };
  },
});
</script>
<style>
.card-container p {
  margin: 0;
}
.card-container > .pf-tabs-card .pf-tabs-content {
  height: 120px;
  margin-top: -16px;
}
.card-container > .pf-tabs-card .pf-tabs-content > .pf-tabs-tabpane {
  padding: 16px;
  background: #fff;
}
.card-container > .pf-tabs-card > .pf-tabs-nav::before {
  display: none;
}
.card-container > .pf-tabs-card .pf-tabs-tab,
[data-theme='compact'] .card-container > .pf-tabs-card .pf-tabs-tab {
  background: transparent;
  border-color: transparent;
}
.card-container > .pf-tabs-card .pf-tabs-tab-active,
[data-theme='compact'] .card-container > .pf-tabs-card .pf-tabs-tab-active {
  background: #fff;
  border-color: #fff;
}
#components-tabs-demo-card-top .code-box-demo {
  padding: 24px;
  overflow: hidden;
  background: #f5f5f5;
}
[data-theme='compact'] .card-container > .pf-tabs-card .pf-tabs-content {
  height: 120px;
  margin-top: -8px;
}
[data-theme='dark'] .card-container > .pf-tabs-card .pf-tabs-tab {
  background: transparent;
  border-color: transparent;
}
[data-theme='dark'] #components-tabs-demo-card-top .code-box-demo {
  background: #000;
}
[data-theme='dark'] .card-container > .pf-tabs-card .pf-tabs-content > .pf-tabs-tabpane {
  background: #141414;
}
[data-theme='dark'] .card-container > .pf-tabs-card .pf-tabs-tab-active {
  background: #141414;
  border-color: #141414;
}
</style>
