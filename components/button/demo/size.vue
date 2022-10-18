<docs>
---
order: 2
title:
  zh-CN: 按钮尺寸
  en-US: Size
---

## zh-CN

按钮有大、中、小三种尺寸。

通过设置 `size` 为 `large` `small` 分别把按钮设为大、小尺寸。若不设置 `size`，则尺寸为中。

## en-US

Ant Design supports a default button size as well as a large and small size.

If a large or small button is desired, set the `size` property to either `large` or `small` respectively. Omit the `size` property for a button with the default size.
</docs>

<template>
  <pf-radio-group v-model:value="size">
    <pf-radio-button value="large">Large</pf-radio-button>
    <pf-radio-button value="default">Default</pf-radio-button>
    <pf-radio-button value="small">Small</pf-radio-button>
  </pf-radio-group>
  <br />
  <br />
  <pf-button type="primary" :size="size">Primary</pf-button>
  <pf-button type="secondary" :size="size">Secondary</pf-button>
  <pf-button :size="size">Normal</pf-button>
  <pf-button type="dashed" :size="size">Dashed</pf-button>
  <pf-button danger :size="size">Danger</pf-button>
  <pf-button type="link" :size="size">Link</pf-button>
  <br />
  <pf-button type="primary" :size="size">
    <template #icon>
      <DownloadOutlined />
    </template>
  </pf-button>
  <pf-button type="primary" shape="circle" :size="size">
    <template #icon>
      <DownloadOutlined />
    </template>
  </pf-button>
  <pf-button type="primary" shape="round" :size="size">
    <template #icon>
      <DownloadOutlined />
    </template>
    Download
  </pf-button>
  <pf-button type="primary" shape="round" :size="size">
    <template #icon>
      <DownloadOutlined />
    </template>
  </pf-button>
  <pf-button type="primary" :size="size">
    <template #icon>
      <DownloadOutlined />
    </template>
    Download
  </pf-button>
  <br />
</template>
<script lang="ts">
import { DownloadOutlined } from '@ant-design/icons-vue';
import type { SizeType } from 'pf-ui-vue/es/config-provider';
import { defineComponent, ref } from 'vue';
export default defineComponent({
  components: {
    DownloadOutlined,
  },
  setup() {
    return {
      size: ref<SizeType>('large'),
    };
  },
});
</script>
