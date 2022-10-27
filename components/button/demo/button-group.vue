<docs>
---
order: 99
title:
  zh-CN: 废弃的 Block 组
  en-US: Deprecated Button Group
debug: true
---

## zh-CN

Debug usage

## en-US

Debug usage
</docs>

<template>
  <div id="components-button-demo-button-group">
    <h4>Basic</h4>
    <pf-button-group>
      <pf-button>Cancel</pf-button>
      <pf-button type="primary">OK</pf-button>
    </pf-button-group>
    <pf-button-group>
      <pf-button disabled>L</pf-button>
      <pf-button disabled>M</pf-button>
      <pf-button disabled>R</pf-button>
    </pf-button-group>
    <pf-button-group>
      <pf-button type="primary">L</pf-button>
      <pf-button>M</pf-button>
      <pf-button>M</pf-button>
      <pf-button type="dashed">R</pf-button>
    </pf-button-group>

    <h4>With Icon</h4>
    <pf-button-group>
      <pf-button type="primary">
        <LeftOutlined />
        Go back
      </pf-button>
      <pf-button type="primary">
        Go forward
        <RightOutlined />
      </pf-button>
    </pf-button-group>
    <pf-button-group>
      <pf-button type="primary">
        <template #icon><CloudOutlined /></template>
      </pf-button>
      <pf-button type="primary">
        <template #icon><CloudDownloadOutlined /></template>
      </pf-button>
    </pf-button-group>
  </div>
</template>
<script lang="ts">
import {
  LeftOutlined,
  RightOutlined,
  CloudDownloadOutlined,
  CloudOutlined,
} from '@ant-design/icons-vue';
export default {
  components: {
    LeftOutlined,
    RightOutlined,
    CloudDownloadOutlined,
    CloudOutlined,
  },
};
</script>
<style>
#components-button-demo-button-group > h4 {
  margin: 16px 0;
  font-size: 14px;
  line-height: 1;
  font-weight: normal;
}
#components-button-demo-button-group > h4:first-child {
  margin-top: 0;
}
#components-button-demo-button-group .pf-btn-group {
  margin-right: 8px;
}
</style>
```
