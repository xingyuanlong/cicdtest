<docs>
---
order: 1
title:
  zh-CN: 弹出位置
  en-US: Placement
---

## zh-CN

支持 6 个弹出位置。

## en-US

Support 6 placements.

</docs>

<template>
  <div id="components-dropdown-demo-placement">
    <template v-for="(placement, index) in placements" :key="placement">
      <pf-dropdown :placement="placement">
        <pf-button>{{ placement }}</pf-button>
        <template #overlay>
          <pf-menu>
            <pf-menu-item>
              <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
                1st menu item
              </a>
            </pf-menu-item>
            <pf-menu-item>
              <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
                2nd menu item
              </a>
            </pf-menu-item>
            <pf-menu-item>
              <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
                3rd menu item
              </a>
            </pf-menu-item>
          </pf-menu>
        </template>
      </pf-dropdown>
      <br v-if="index === 2" />
    </template>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import type { DropdownProps } from 'pf-ui-vue';
export default defineComponent({
  setup() {
    return {
      placements: [
        'bottomLeft',
        'bottom',
        'bottomRight',
        'topLeft',
        'top',
        'topRight',
      ] as DropdownProps['placement'][],
    };
  },
});
</script>
<style>
#components-dropdown-demo-placement .pf-btn {
  margin-right: 8px;
  margin-bottom: 8px;
}
</style>
