<docs>
---
order: 3
title:
  zh-CN: 位置
  en-US: Placement
---

## zh-CN

位置有十二个方向。如需箭头指向目标元素中心，可以设置 `arrowPointAtCenter`。

## en-US

There are 12 `placement` options available. Use `arrowPointAtCenter` if you want arrow point at the center of target.

</docs>

<template>
  <div id="components-pf-popconfirm-demo-placement">
    <div :style="{ marginLeft: `${buttonWidth}px`, whiteSpace: 'nowrap' }">
      <pf-popconfirm placement="topLeft" ok-text="Yes" cancel-text="No" @confirm="confirm">
        <template #title>
          <p>{{ text }}</p>
          <p>{{ text }}</p>
        </template>
        <pf-button>TL</pf-button>
      </pf-popconfirm>
      <pf-popconfirm placement="top" ok-text="Yes" cancel-text="No" @confirm="confirm">
        <template #title>
          <p>{{ text }}</p>
          <p>{{ text }}</p>
        </template>
        <pf-button>Top</pf-button>
      </pf-popconfirm>
      <pf-popconfirm placement="topRight" ok-text="Yes" cancel-text="No" @confirm="confirm">
        <template #title>
          <p>{{ text }}</p>
          <p>{{ text }}</p>
        </template>
        <pf-button>TR</pf-button>
      </pf-popconfirm>
    </div>
    <div :style="{ width: `${buttonWidth}px`, float: 'left' }">
      <pf-popconfirm placement="leftTop" ok-text="Yes" cancel-text="No" @confirm="confirm">
        <template #title>
          <p>{{ text }}</p>
          <p>{{ text }}</p>
        </template>
        <pf-button>LT</pf-button>
      </pf-popconfirm>
      <pf-popconfirm placement="left" ok-text="Yes" cancel-text="No" @confirm="confirm">
        <template #title>
          <p>{{ text }}</p>
          <p>{{ text }}</p>
        </template>
        <pf-button>Left</pf-button>
      </pf-popconfirm>
      <pf-popconfirm placement="leftBottom" ok-text="Yes" cancel-text="No" @confirm="confirm">
        <template #title>
          <p>{{ text }}</p>
          <p>{{ text }}</p>
        </template>
        <pf-button>LB</pf-button>
      </pf-popconfirm>
    </div>
    <div :style="{ width: `${buttonWidth}px`, marginLeft: `${buttonWidth * 4 + 24}px` }">
      <pf-popconfirm placement="rightTop" ok-text="Yes" cancel-text="No" @confirm="confirm">
        <template #title>
          <p>{{ text }}</p>
          <p>{{ text }}</p>
        </template>
        <pf-button>RT</pf-button>
      </pf-popconfirm>
      <pf-popconfirm placement="right" ok-text="Yes" cancel-text="No" @confirm="confirm">
        <template #title>
          <p>{{ text }}</p>
          <p>{{ text }}</p>
        </template>
        <pf-button>Right</pf-button>
      </pf-popconfirm>
      <pf-popconfirm placement="rightBottom" ok-text="Yes" cancel-text="No" @confirm="confirm">
        <template #title>
          <p>{{ text }}</p>
          <p>{{ text }}</p>
        </template>
        <pf-button>RB</pf-button>
      </pf-popconfirm>
    </div>
    <div :style="{ marginLeft: `${buttonWidth}px`, clear: 'both', whiteSpace: 'nowrap' }">
      <pf-popconfirm placement="bottomLeft" ok-text="Yes" cancel-text="No" @confirm="confirm">
        <template #title>
          <p>{{ text }}</p>
          <p>{{ text }}</p>
        </template>
        <pf-button>BL</pf-button>
      </pf-popconfirm>
      <pf-popconfirm placement="bottom" ok-text="Yes" cancel-text="No" @confirm="confirm">
        <template #title>
          <p>{{ text }}</p>
          <p>{{ text }}</p>
        </template>
        <pf-button>Bottom</pf-button>
      </pf-popconfirm>
      <pf-popconfirm placement="bottomRight" ok-text="Yes" cancel-text="No" @confirm="confirm">
        <template #title>
          <p>{{ text }}</p>
          <p>{{ text }}</p>
        </template>
        <pf-button>BR</pf-button>
      </pf-popconfirm>
    </div>
  </div>
</template>
<script>
import { message } from 'pf-ui-vue';
import { defineComponent } from 'vue';
export default defineComponent({
  setup() {
    const buttonWidth = 70;

    const text = 'Are you sure to delete this task?';

    const confirm = () => {
      message.info('Clicked on Yes.');
    };
    return {
      buttonWidth,
      text,
      confirm,
    };
  },
});
</script>
<style scoped>
#components-pf-popconfirm-demo-placement .ant-btn {
  width: 70px;
  text-align: center;
  padding: 0;
  margin-right: 8px;
  margin-bottom: 8px;
}
</style>
