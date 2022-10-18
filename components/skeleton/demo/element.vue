<docs>
---
order: 2.1
title:
  zh-CN: 按钮/头像/输入框/图像
  en-US: Button/Avatar/Input/Image
---

## zh-CN

骨架按钮、头像、输入框和图像。

## en-US

Skeleton Button, Avatar, Input and Image.

</docs>

<template>
  <pf-space>
    <pf-skeleton-button :active="active" :size="size" :shape="buttonShape" :block="block" />
    <pf-skeleton-avatar :active="active" :size="size" :shape="avatarShape" />
    <pf-skeleton-input style="width: 200px" :active="active" :size="size" />
  </pf-space>
  <br />
  <br />
  <pf-skeleton-button :active="active" :size="size" :shape="buttonShape" :block="block" />
  <br />
  <br />
  <pf-skeleton-image />
  <pf-divider />
  <pf-form layout="inline" style="margin: 16px 0">
    <pf-form-item label="Active">
      <pf-switch v-model:checked="active" />
    </pf-form-item>
    <pf-form-item label="Button Block">
      <pf-switch v-model:checked="block" />
    </pf-form-item>
    <pf-form-item label="Size">
      <pf-radio-group v-model:value="size">
        <pf-radio-button value="default">Default</pf-radio-button>
        <pf-radio-button value="large">Large</pf-radio-button>
        <pf-radio-button value="small">Small</pf-radio-button>
      </pf-radio-group>
    </pf-form-item>
    <pf-form-item label="Button Shape">
      <pf-radio-group v-model:value="buttonShape">
        <pf-radio-button value="default">Default</pf-radio-button>
        <pf-radio-button value="round">Round</pf-radio-button>
        <pf-radio-button value="circle">Circle</pf-radio-button>
      </pf-radio-group>
    </pf-form-item>
    <pf-form-item label="Avatar Shape">
      <pf-radio-group v-model:value="avatarShape">
        <pf-radio-button value="square">Square</pf-radio-button>
        <pf-radio-button value="circle">Circle</pf-radio-button>
      </pf-radio-group>
    </pf-form-item>
  </pf-form>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import type { SkeletonButtonProps, SkeletonAvatarProps } from 'pf-ui-vue';
export default defineComponent({
  setup() {
    return {
      active: ref(false),
      block: ref(false),
      size: ref<SkeletonButtonProps['size']>('default'),
      buttonShape: ref<SkeletonButtonProps['shape']>('default'),
      avatarShape: ref<SkeletonAvatarProps['shape']>('circle'),
    };
  },
});
</script>
