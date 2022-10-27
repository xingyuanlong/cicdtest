<docs>
---
order: 1
title:
  zh-CN: 位置
  en-US: Placement
---

## zh-CN

位置有 12 个方向。

## en-US

There are 12 placement options available.

</docs>

<template>
  <div id="components-pf-tooltip-demo-placement">
    <div :style="{ marginLeft: `${buttonWidth}px`, whiteSpace: 'nowrap' }">
      <pf-tooltip placement="topLeft">
        <template #title>
          <span>prompt text</span>
        </template>
        <pf-button>TL</pf-button>
      </pf-tooltip>
      <pf-tooltip placement="top">
        <template #title>
          <span>prompt text</span>
        </template>
        <pf-button>Top</pf-button>
      </pf-tooltip>
      <pf-tooltip placement="topRight">
        <template #title>
          <span>prompt text</span>
        </template>
        <pf-button>TR</pf-button>
      </pf-tooltip>
    </div>
    <div :style="{ width: `${buttonWidth}px`, float: 'left' }">
      <pf-tooltip placement="leftTop">
        <template #title>
          <span>prompt text</span>
        </template>
        <pf-button>LT</pf-button>
      </pf-tooltip>
      <pf-tooltip placement="left">
        <template #title>
          <span>prompt text</span>
        </template>
        <pf-button>Left</pf-button>
      </pf-tooltip>
      <pf-tooltip placement="leftBottom">
        <template #title>
          <span>prompt text</span>
        </template>
        <pf-button>LB</pf-button>
      </pf-tooltip>
    </div>
    <div :style="{ width: `${buttonWidth}px`, marginLeft: `${buttonWidth * 4 + 24}px` }">
      <pf-tooltip placement="rightTop">
        <template #title>
          <span>prompt text</span>
        </template>
        <pf-button>RT</pf-button>
      </pf-tooltip>
      <pf-tooltip placement="right">
        <template #title>
          <span>prompt text</span>
        </template>
        <pf-button>Right</pf-button>
      </pf-tooltip>
      <pf-tooltip placement="rightBottom">
        <template #title>
          <span>prompt text</span>
        </template>
        <pf-button>RB</pf-button>
      </pf-tooltip>
    </div>
    <div :style="{ marginLeft: `${buttonWidth}px`, clear: 'both', whiteSpace: 'nowrap' }">
      <pf-tooltip placement="bottomLeft">
        <template #title>
          <span>prompt text</span>
        </template>
        <pf-button>BL</pf-button>
      </pf-tooltip>
      <pf-tooltip placement="bottom">
        <template #title>
          <span>prompt text</span>
        </template>
        <pf-button>Bottom</pf-button>
      </pf-tooltip>
      <pf-tooltip placement="bottomRight">
        <template #title>
          <span>prompt text</span>
        </template>
        <pf-button>BR</pf-button>
      </pf-tooltip>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  setup() {
    return {
      buttonWidth: 70,
    };
  },
});
</script>
<style scoped>
#components-pf-tooltip-demo-placement .pf-btn {
  width: 70px;
  text-align: center;
  padding: 0;
  margin-right: 8px;
  margin-bottom: 8px;
}
</style>
