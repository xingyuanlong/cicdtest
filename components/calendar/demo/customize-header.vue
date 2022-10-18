<docs>
---
order: 4
title:
  zh-CN: 自定义头部
  en-US: Customize Header
---

## zh-CN

自定义日历头部内容。

## en-US

Customize Calendar header content.

</docs>

<template>
  <div style="width: 300px; border: 1px solid #d9d9d9; border-radius: 4px">
    <pf-calendar v-model:value="value" :fullscreen="false" @panelChange="onPanelChange">
      <template #headerRender="{ value: current, type, onChange, onTypeChange }">
        <div style="padding: 10px">
          <div style="margin-bottom: 10px">Custom header</div>
          <pf-row type="flex" justify="space-between">
            <pf-col>
              <pf-radio-group size="small" :value="type" @change="e => onTypeChange(e.target.value)">
                <pf-radio-button value="month">Month</pf-radio-button>
                <pf-radio-button value="year">Year</pf-radio-button>
              </pf-radio-group>
            </pf-col>
            <pf-col>
              <pf-select
                size="small"
                :dropdown-match-select-width="false"
                class="my-year-select"
                :value="String(current.year())"
                @change="
                  newYear => {
                    onChange(current.year(newYear));
                  }
                "
              >
                <pf-select-option
                  v-for="val in getYears(current)"
                  :key="String(val)"
                  class="year-item"
                >
                  {{ val }}
                </pf-select-option>
              </pf-select>
            </pf-col>
            <pf-col>
              <pf-select
                size="small"
                :dropdown-match-select-width="false"
                :value="String(current.month())"
                @change="
                  selectedMonth => {
                    onChange(current.month(parseInt(String(selectedMonth), 10)));
                  }
                "
              >
                <pf-select-option
                  v-for="(val, index) in getMonths(current)"
                  :key="String(index)"
                  class="month-item"
                >
                  {{ val }}
                </pf-select-option>
              </pf-select>
            </pf-col>
          </pf-row>
        </div>
      </template>
    </pf-calendar>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { Dayjs } from 'dayjs';

export default defineComponent({
  setup() {
    const value = ref<Dayjs>();

    const onPanelChange = (value: Dayjs, mode: string) => {
      console.log(value, mode);
    };

    const getMonths = (value: Dayjs) => {
      const localeData = value.localeData();
      const months = [];
      for (let i = 0; i < 12; i++) {
        months.push(localeData.monthsShort(value.month(i)));
      }
      return months;
    };

    const getYears = (value: Dayjs) => {
      const year = value.year();
      const years = [];
      for (let i = year - 10; i < year + 10; i += 1) {
        years.push(i);
      }
      return years;
    };

    return {
      value,
      onPanelChange,
      getMonths,
      getYears,
    };
  },
});
</script>
