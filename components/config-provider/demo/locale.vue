<docs>
---
order: 1
title:
  zh-CN: 国际化
  en-US: Locale
---

## zh-CN

此处列出 @pf-ui/pf-icons-vue 中需要国际化支持的组件，你可以在演示里切换语言。

## en-US

Components which need localization support are listed here, you can toggle the language in the demo.
</docs>

<template>
  <div class="change-locale">
    <span style="margin-right: 16px">Change locale of components:</span>
    <pf-radio-group v-model:value="locale">
      <pf-radio-button key="en" :value="enUS.locale">English</pf-radio-button>
      <pf-radio-button key="cn" :value="zhCN.locale">中文</pf-radio-button>
    </pf-radio-group>
  </div>
  <pf-config-provider :locale="locale === 'en' ? enUS : zhCN">
    <div class="locale-components">
      <div class="example">
        <pf-pagination :total="50" show-size-changer />
      </div>
      <div class="example">
        <pf-select show-search style="width: 200px">
          <pf-select-option value="jack">jack</pf-select-option>
          <pf-select-option value="lucy">lucy</pf-select-option>
        </pf-select>
        <pf-date-picker />
        <pf-time-picker />
        <pf-range-picker style="width: 200px" />
      </div>
      <div class="example">
        <pf-button type="primary" @click="visible = true">Show Modal</pf-button>
        <pf-button @click="info">Show info</pf-button>
        <pf-button @click="confirm">Show confirm</pf-button>
        <pf-popconfirm title="Question?">
          <a href="#">Click to confirm</a>
        </pf-popconfirm>
      </div>
      <div class="example">
        <pf-transfer :data-source="[]" show-search :target-keys="[]" :render="item => item.title" />
      </div>
      <div class="site-config-provider-calendar-wrapper">
        <pf-calendar :fullscreen="false" />
      </div>
      <div class="example">
        <pf-table :data-source="[]" :columns="columns" />
      </div>
      <pf-modal v-model:visible="visible" title="Locale Modal">
        <p>Locale Modal</p>
      </pf-modal>
    </div>
  </pf-config-provider>
</template>
<script>
import { PfModal } from '@pf-ui/pf-ui-vue';
import enUS from 'pf-ui-vue/es/locale/en_US';
import zhCN from 'pf-ui-vue/es/locale/zh_CN';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import { defineComponent, ref, watch } from 'vue';

dayjs.locale('en');

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    filters: [
      {
        text: 'filter1',
        value: 'filter1',
      },
    ],
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
];
export default defineComponent({
  setup() {
    const visible = ref(false);
    const locale = ref(enUS.locale);
    watch(locale, val => {
      dayjs.locale(val);
    });
    const info = () => {
      PfModal.info({
        title: 'some info',
        content: 'some info',
      });
    };
    const confirm = () => {
      PfModal.confirm({
        title: 'some info',
        content: 'some info',
      });
    };
    return {
      columns,
      visible,
      locale,
      dayjs,
      enUS,
      zhCN,
      info,
      confirm,
    };
  },
});
</script>
<style scoped>
.site-config-provider-calendar-wrapper {
  width: 319px;
  border: 1px solid #d9d9d9;
  border-radius: 2px;
}
.locale-components {
  border-top: 1px solid #d9d9d9;
  padding-top: 16px;
}

.example {
  margin: 16px 0;
}

.example > * {
  margin-right: 8px;
}

.change-locale {
  margin-bottom: 16px;
}
[data-theme='dark'] .locale-components {
  border-top: 1px solid #303030;
}
[data-theme='dark'] .site-config-provider-calendar-wrapper {
  border: 1px solid #303030;
}
</style>
