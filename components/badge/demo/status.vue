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
  <a-badge status="success" />
  <a-badge status="error" />
  <a-badge status="default" />
  <a-badge status="processing" />
  <a-badge status="warning" />
  <br />
  <a-badge status="success" text="Success"/>
  <br />
  <a-badge status="error" text="Error" />
  <br />
  <a-badge status="default" text="Default" />
  <br />
  <a-badge status="processing" text="Processing" />
  <br />
  <a-badge status="warning" text="warning" />

  <br />
  标准的颜色:
  <br />
  <a-badge status="processing" text="审批完成" color="#4ACFB1"/>
  <br />
  <a-badge status="error" text="审批驳回" color="#F36969"/>
  <br />
  <a-badge status="default" text="在职" color="#FEB034"/>
  <br />
  <a-badge status="" text="离职" color="#CCCCCC"/>
  <br />
</template>
