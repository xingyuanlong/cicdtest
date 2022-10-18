<docs>
---
order: 3
title:
  zh-CN: 可交互
  en-US: Interactive
---

## zh-CN

提供可编辑和可复制等额外的交互能力。

## en-US

Provide additional interactive capacity of editable and copyable.
</docs>
<template>
  <pf-typography-paragraph v-model:content="editableStr" editable />
  <pf-typography-paragraph v-model:content="customIconStr" editable>
    <template #editableIcon><HighlightOutlined /></template>
    <template #editableTooltip>click to edit text</template>
  </pf-typography-paragraph>
  Trigger edit with:&nbsp;&nbsp;
  <pf-radio-group
    :value="stateToRadio()"
    @change="e => (chooseTrigger = radioToState(e.target.value))"
  >
    <pf-radio value="icon">icon</pf-radio>
    <pf-radio value="text">text</pf-radio>
    <pf-radio value="both">both</pf-radio>
  </pf-radio-group>
  <pf-typography-paragraph
    v-model:content="clickTriggerStr"
    :editable="{ triggerType: chooseTrigger }"
  >
    <template #editableTooltip>click to edit text</template>
  </pf-typography-paragraph>
  <pf-typography-paragraph v-model:content="customEnterIconStr" editable>
    <template #editableIcon><HighlightOutlined /></template>
    <template #editableTooltip>click to edit text</template>
    <template #editableEnterIcon="{ className }">
      <CheckOutlined :class="className" />
    </template>
  </pf-typography-paragraph>
  <pf-typography-paragraph v-model:content="noEnterIconStr" editable>
    <template #editableIcon><HighlightOutlined /></template>
    <template #editableTooltip>click to edit text</template>
    <template #editableEnterIcon>{{ null }}</template>
  </pf-typography-paragraph>
  <pf-typography-paragraph v-model:content="hideTooltipStr" :editable="{ tooltip: false }" />
  <pf-typography-paragraph
    v-model:content="lengthLimitedStr"
    :editable="{ maxlength: 50, autoSize: { maxRows: 5, minRows: 3 } }"
  />

  <pf-typography-paragraph copyable>This is a copyable text.</pf-typography-paragraph>
  <pf-typography-paragraph :copyable="{ text: 'Hello, Ant Design!' }">
    Replace copy text.
  </pf-typography-paragraph>
  <pf-typography-paragraph copyable content="Custom Copy icon and replace tooltips text.">
    <template #copyableIcon="{ copied }">
      <SmileOutlined v-if="!copied" key="copy-icon" />
      <SmileFilled v-else key="copied-icon" />
    </template>
    <template #copyableTooltip="{ copied }">
      <span v-if="!copied" key="copy-tooltip">click here</span>
      <span v-else key="copied-tooltip">you clicked!!</span>
    </template>
  </pf-typography-paragraph>
  <pf-typography-paragraph :copyable="{ tooltip: false }">
    Hide Copy tooltips.
  </pf-typography-paragraph>
</template>
<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import {
  HighlightOutlined,
  SmileOutlined,
  SmileFilled,
  CheckOutlined,
} from '@ant-design/icons-vue';

export default defineComponent({
  components: {
    HighlightOutlined,
    SmileOutlined,
    SmileFilled,
    CheckOutlined,
  },
  setup() {
    const editableStr = ref('This is an editable text.');
    watch(editableStr, () => {
      console.log('editableStr', editableStr.value);
    });
    const chooseTrigger = ref<('icon' | 'text')[]>(['icon']);

    const radioToState = (input: string): ('icon' | 'text')[] => {
      switch (input) {
        case 'text':
          return ['text'];
        case 'both':
          return ['icon', 'text'];
        case 'icon':
        default:
          return ['icon'];
      }
    };

    const stateToRadio = () => {
      if (chooseTrigger.value.indexOf('text') !== -1) {
        return chooseTrigger.value.indexOf('icon') !== -1 ? 'both' : 'text';
      }
      return 'icon';
    };
    return {
      radioToState,
      stateToRadio,
      editableStr,
      customIconStr: ref('Custom Edit icon and replace tooltip text.'),
      hideTooltipStr: ref('Hide Edit tooltip.'),
      lengthLimitedStr: ref('This is an editable text with limited length.'),
      clickTriggerStr: ref('Text or icon as trigger - click to start editing.'),
      chooseTrigger,
      customEnterIconStr: ref('Editable text with a custom enter icon in edit field.'),
      noEnterIconStr: ref('Editable text with no enter icon in edit field.'),
    };
  },
});
</script>
