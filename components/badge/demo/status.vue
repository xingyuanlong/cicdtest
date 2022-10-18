<docs>
---
order: 4
title: 
  zh-CN: 状态点
  en-US: Status
---

## zh-CN

用于表示状态的小圆点。

## en-US

Standalone badge with status.
</docs>

<template>
  <pf-badge status="success" />
  <pf-badge status="error" />
  <pf-badge status="default" />
  <pf-badge status="processing" />
  <pf-badge status="warning" />
  <br />
  <pf-badge status="success" text="Success"/>
  <br />
  <pf-badge status="error" text="Error" />
  <br />
  <pf-badge status="default" text="Default" />
  <br />
  <pf-badge status="processing" text="Processing" />
  <br />
  <pf-badge status="warning" text="warning" />

  <br />
  标准的颜色:
  <br />
  <pf-badge status="processing" text="审批完成" color="#4ACFB1"/>
  <br />
  <pf-badge status="error" text="审批驳回" color="#F36969"/>
  <br />
  <pf-badge status="default" text="在职" color="#FEB034"/>
  <br />
  <pf-badge status="" text="离职" color="#CCCCCC"/>
  <br />
</template>
