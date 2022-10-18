<docs>
---
order: 5
title:
  zh-CN: 多种形态的 PageHeader
  en-US: Various forms of PageHeader
---

## zh-CN

使用操作区，并自定义子节点，适合使用在需要展示一些复杂的信息，帮助用户快速了解这个页面的信息和操作。

## en-US

Use the operating area and customize the sub-nodes, suitable for use in the need to display some complex information to help users quickly understand the information and operations of this page.

</docs>

<template>
  <div>
    <pf-page-header
      class="demo-page-header"
      style="border: 1px solid rgb(235, 237, 240)"
      title="Title"
      sub-title="This is a subtitle"
      @back="() => $router.go(-1)"
    >
      <template #extra>
        <pf-button key="3">Operation</pf-button>
        <pf-button key="2">Operation</pf-button>
        <pf-button key="1" type="primary">Primary</pf-button>
      </template>
      <pf-descriptions size="small" :column="3">
        <pf-descriptions-item label="Created">Lili Qu</pf-descriptions-item>
        <pf-descriptions-item label="Association">
          <a>421421</a>
        </pf-descriptions-item>
        <pf-descriptions-item label="Creation Time">2017-01-10</pf-descriptions-item>
        <pf-descriptions-item label="Effective Time">2017-10-10</pf-descriptions-item>
        <pf-descriptions-item label="Remarks">
          Gonghu Road, Xihu District, Hangzhou, Zhejiang, China
        </pf-descriptions-item>
      </pf-descriptions>
    </pf-page-header>
    <br />
    <pf-page-header title="Title" sub-title="This is a subtitle" @back="() => $router.go(-1)">
      <template #tags>
        <pf-tag color="blue">Running</pf-tag>
      </template>
      <template #extra>
        <pf-button key="3">Operation</pf-button>
        <pf-button key="2">Operation</pf-button>
        <pf-button key="1" type="primary">Primary</pf-button>
      </template>
      <pf-row type="flex">
        <pf-statistic title="Status" value="Pending" />
        <pf-statistic
          title="Price"
          prefix="$"
          :value="568.08"
          :style="{
            margin: '0 32px',
          }"
        />
        <pf-statistic title="Balance" prefix="$" :value="3345.08" />
      </pf-row>
    </pf-page-header>
  </div>
</template>
<style scoped>
.demo-page-header :deep(tr:last-child td) {
  padding-bottom: 0;
}
</style>
