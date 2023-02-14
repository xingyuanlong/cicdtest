<docs>
---
order: 5
version: 3.0
title:
  zh-CN: 全局样式
  en-US: Global Theme
---

## zh-CN

通过 css variable 修改全局主题色（你可以切换到组件页面查看更详细的样式展示）。自动生成的变量可能会根据设计调整，请勿直接依赖。详细配置请[点击查看](/docs/vue/customize-theme-variable-cn)。

## en-US

Modify global theme color by css variable. Css variable depends on the design, it may adjust so please do not directly use it. You can go to other components page for more detail style. [Check this](/docs/vue/customize-theme-variable) to view detail.

</docs>

<template>
  <pf-row :gutter="16" :wrap="false">
    <pf-col flex="none">
      <pf-space direction="vertical" align="center">
        <!-- Primary Color -->
        <input
          type="color"
          :value="colorState.primaryColor"
          @input="e => onColorChange('primaryColor', e)"
        />

        <span style="color: var(--ant-primary-color)">var(`--ant-primary-color`)</span>

        <!-- Error Color -->
        <input
          type="color"
          :value="colorState.errorColor"
          @input="e => onColorChange('errorColor', e)"
        />

        <span style="color: var(--ant-error-color)">var(`--ant-error-color`)</span>

        <!-- Warning Color -->
        <input
          type="color"
          :value="colorState.warningColor"
          @input="e => onColorChange('warningColor', e)"
        />

        <span style="color: var(--ant-warning-color)">var(`--ant-warning-color`)</span>

        <!-- Success Color -->
        <input
          type="color"
          :value="colorState.successColor"
          @input="e => onColorChange('successColor', e)"
        />

        <span style="color: var(--ant-success-color)">var(`--ant-success-color`)</span>

        <!-- Info Color -->
        <input
          type="color"
          :value="colorState.infoColor"
          @input="e => onColorChange('infoColor', e)"
        />
        <span style="color: var(--ant-info-color)">var(`--ant-info-color`)</span>
      </pf-space>
    </pf-col>

    <pf-col flex="auto">
      <pf-space direction="vertical" style="width: 100%" :size="0">
        <template #split><pf-divider /></template>
        <!-- Primary Button -->
        <SplitSpace>
          <pf-button type="primary">Primary</pf-button>
          <pf-button>Default</pf-button>
          <pf-button type="dashed">Dashed</pf-button>
          <pf-button type="text">Text</pf-button>
          <pf-button type="link">Link</pf-button>
        </SplitSpace>

        <!-- Danger Button -->
        <SplitSpace>
          <pf-button danger type="primary">Primary</pf-button>
          <pf-button danger>Default</pf-button>
          <pf-button danger type="dashed">Dashed</pf-button>
          <pf-button danger type="text">Text</pf-button>
          <pf-button danger type="link">Link</pf-button>
        </SplitSpace>

        <!-- Ghost Button -->
        <SplitSpace style="background: rgb(190, 200, 200)">
          <pf-button type="primary" ghost>Primary</pf-button>
          <pf-button ghost>Default</pf-button>
          <pf-button type="dashed" ghost>Dashed</pf-button>
          <pf-button type="primary" ghost danger>Primary</pf-button>
          <pf-button ghost danger>Default</pf-button>
          <pf-button type="dashed" ghost danger>Dashed</pf-button>
        </SplitSpace>

        <!-- Typography -->
        <SplitSpace>
          <pf-typography-text type="success">Text (success)</pf-typography-text>
          <pf-typography-text type="warning">Text(warning)</pf-typography-text>
          <pf-typography-text type="danger">Text(danger)</pf-typography-text>
          <pf-typography-link href="https://ant.design" target="_blank">Link</pf-typography-link>
          <pf-typography-text copyable>Text</pf-typography-text>

          <!-- Dropdown -->
          <pf-dropdown>
            <template #overlay>
              <pf-menu>
                <pf-menu-item>1st menu item</pf-menu-item>
                <pf-menu-item danger>a danger item</pf-menu-item>
              </pf-menu>
            </template>
            <a class="ant-dropdown-link" @click.prevent>
              Hover me
              <DownOutlined />
            </a>
          </pf-dropdown>

          <!-- Spin -->
          <pf-spin />
        </SplitSpace>

        <!-- Menu - horizontal -->
        <pf-row :gutter="16">
          <pf-col :span="12">
            <pf-menu v-model:selectedKeys="selectedKeys" mode="horizontal">
              <pf-menu-item key="mail">
                Mail
                <template #icon>
                  <MailOutlined />
                </template>
              </pf-menu-item>
              <pf-sub-menu key="SubMenu" title="Submenu">
                <template #icon><SettingOutlined /></template>
                <pf-menu-item-group title="Item 1">
                  <pf-menu-item key="setting:1">Option 1</pf-menu-item>
                  <pf-menu-item key="setting:2">Option 2</pf-menu-item>
                </pf-menu-item-group>
              </pf-sub-menu>
            </pf-menu>
          </pf-col>
          <pf-col :span="12">
            <pf-menu v-model:selectedKeys="selectedKeys" mode="horizontal" theme="dark">
              <pf-menu-item key="mail">
                <template #icon><SettingOutlined /></template>
                Mail
              </pf-menu-item>
              <pf-sub-menu key="SubMenu" title="Submenu">
                <template #icon><SettingOutlined /></template>
                <pf-menu-item-group title="Item 1">
                  <pf-menu-item key="setting:1">Option 1</pf-menu-item>
                  <pf-menu-item key="setting:2">Option 2</pf-menu-item>
                </pf-menu-item-group>
              </pf-sub-menu>
            </pf-menu>
          </pf-col>
        </pf-row>

        <!-- Menu - vertical -->
        <pf-row :gutter="16">
          <pf-col :span="12">
            <pf-menu v-model:selectedKeys="selectedKeys" mode="inline">
              <pf-menu-item key="mail">
                <template #icon><MailOutlined /></template>
                Mail
              </pf-menu-item>
              <pf-sub-menu key="SubMenu" title="Submenu">
                <template #icon><SettingOutlined /></template>
                <pf-menu-item-group title="Item 1">
                  <pf-menu-item key="setting:1">Option 1</pf-menu-item>
                  <pf-menu-item key="setting:2">Option 2</pf-menu-item>
                </pf-menu-item-group>
              </pf-sub-menu>
            </pf-menu>
          </pf-col>
          <pf-col :span="12">
            <pf-menu v-model:selectedKeys="selectedKeys" mode="vertical" theme="dark">
              <pf-menu-item key="mail">
                <template #icon><MailOutlined /></template>
                Mail
              </pf-menu-item>
              <pf-sub-menu key="SubMenu" title="Submenu">
                <template #icon><SettingOutlined /></template>
                <pf-menu-item-group title="Item 1">
                  <pf-menu-item key="setting:1">Option 1</pf-menu-item>
                  <pf-menu-item key="setting:2">Option 2</pf-menu-item>
                </pf-menu-item-group>
              </pf-sub-menu>
            </pf-menu>
          </pf-col>
        </pf-row>

        <!-- Pagination -->
        <pf-pagination show-quick-jumper :default-current="2" :total="500" />

        <!-- Steps -->
        <pf-steps :current="1" :percent="60">
          <pf-step title="Finished" description="This is a description." />
          <pf-step
            title="In Progress"
            sub-title="Left 00:00:08"
            description="This is a description."
          />
          <pf-step title="Waiting" description="This is a description." />
        </pf-steps>

        <!-- Steps - dot -->
        <pf-steps :current="2" status="error" progress-dot>
          <pf-step title="Finished" description="You can hover on the dot." />
          <pf-step title="In Progress" description="You can hover on the dot." />
          <pf-step title="Error" description="You can hover on the dot." />
          <pf-step title="Waiting" description="You can hover on the dot." />
        </pf-steps>

        <!-- Form - Input -->
        <pf-form>
          <SplitSpace>
            <pf-form-item>
              <pf-input v-bind="inputProps" />
            </pf-form-item>
            <pf-form-item has-feedback validate-status="success">
              <pf-input v-bind="inputProps" />
            </pf-form-item>
            <pf-form-item has-feedback validate-status="warning">
              <pf-input v-bind="inputProps" />
            </pf-form-item>
            <pf-form-item has-feedback validate-status="error">
              <pf-input v-bind="inputProps" />
            </pf-form-item>
            <pf-form-item has-feedback validate-status="validating">
              <pf-input v-bind="inputProps" />
            </pf-form-item>
          </SplitSpace>
        </pf-form>

        <!-- Form - Select -->
        <pf-form>
          <SplitSpace>
            <pf-form-item>
              <pf-select v-bind="selectProps" />
            </pf-form-item>
            <pf-form-item has-feedback validate-status="success">
              <pf-select v-bind="selectProps" />
            </pf-form-item>
            <pf-form-item has-feedback validate-status="warning">
              <pf-select v-bind="selectProps" />
            </pf-form-item>
            <pf-form-item has-feedback validate-status="error">
              <pf-select v-bind="selectProps" />
            </pf-form-item>
            <pf-form-item has-feedback validate-status="validating">
              <pf-select v-bind="selectProps" />
            </pf-form-item>
          </SplitSpace>
        </pf-form>

        <!-- Form - TreeSelect -->
        <pf-form>
          <SplitSpace>
            <pf-form-item>
              <pf-tree-select v-bind="treeSelectProps" />
            </pf-form-item>
            <pf-form-item has-feedback validate-status="success">
              <pf-tree-select v-bind="treeSelectProps" />
            </pf-form-item>
            <pf-form-item has-feedback validate-status="warning">
              <pf-tree-select v-bind="treeSelectProps" />
            </pf-form-item>
            <pf-form-item has-feedback validate-status="error">
              <pf-tree-select v-bind="treeSelectProps" />
            </pf-form-item>
            <pf-form-item has-feedback validate-status="validating">
              <pf-tree-select v-bind="treeSelectProps" />
            </pf-form-item>
          </SplitSpace>
        </pf-form>

        <!-- Form - InputNumber -->
        <pf-form>
          <SplitSpace>
            <pf-form-item>
              <pf-input-number />
            </pf-form-item>
            <pf-form-item has-feedback validate-status="success">
              <pf-input-number />
            </pf-form-item>
            <pf-form-item has-feedback validate-status="warning">
              <pf-input-number />
            </pf-form-item>
            <pf-form-item has-feedback validate-status="error">
              <pf-input-number />
            </pf-form-item>
            <pf-form-item has-feedback validate-status="validating">
              <pf-input-number />
            </pf-form-item>
          </SplitSpace>
        </pf-form>

        <!-- Form - DatePicker -->
        <pf-form>
          <SplitSpace>
            <pf-form-item>
              <pf-date-picker />
            </pf-form-item>
            <pf-form-item has-feedback validate-status="success">
              <pf-date-picker />
            </pf-form-item>
            <pf-form-item has-feedback validate-status="warning">
              <pf-date-picker />
            </pf-form-item>
            <pf-form-item has-feedback validate-status="error">
              <pf-date-picker />
            </pf-form-item>
            <pf-form-item has-feedback validate-status="validating">
              <pf-date-picker />
            </pf-form-item>
          </SplitSpace>
        </pf-form>

        <SplitSpace>
          <pf-checkbox>Checkbox</pf-checkbox>

          <pf-radio-group default-value="bamboo">
            <pf-radio value="bamboo">Bamboo</pf-radio>
            <pf-radio value="light">Light</pf-radio>
            <pf-radio value="little">Little</pf-radio>
          </pf-radio-group>

          <pf-mentions placeholder="Mention by @">
            <pf-mentions-option value="afc163">afc163</pf-mentions-option>
            <pf-mentions-option value="zombieJ">zombieJ</pf-mentions-option>
            <pf-mentions-option value="yesmeck">yesmeck</pf-mentions-option>
          </pf-mentions>

          <pf-slider :default-value="30" style="width: 100px" />

          <pf-switch default-checked />
        </SplitSpace>

        <SplitSpace>
          <pf-range-picker />
          <pf-time-range-picker />
        </SplitSpace>

        <pf-row :gutter="16">
          <pf-col :span="8">
            <!-- Card -->
            <pf-card style="width: 100%" :tab-list="carTabListNoTitle">
              <template #tabBarExtraContent>
                <a href="#">More</a>
              </template>
            </pf-card>
          </pf-col>
          <pf-col :span="8">
            <!-- Table -->
            <pf-table
              size="small"
              bordered
              :row-selection="{}"
              :columns="[
                {
                  title: 'Key',
                  dataIndex: 'key',
                  filters: [
                    {
                      text: 'Little',
                      value: 'little',
                    },
                  ],
                  sorter: (a, b) => a.key.length - b.key.length,
                },
              ]"
              :data-source="[
                {
                  key: 'Bamboo',
                },
                {
                  key: 'Light',
                },
                {
                  key: 'Little',
                },
              ]"
            />
          </pf-col>
          <pf-col :span="8">
            <!-- Table -->
            <pf-tabs default-active-key="1">
              <pf-tab-pane key="1" tab="Tab 1">Content of Tab Pane 1</pf-tab-pane>
              <pf-tab-pane key="2" tab="Tab 2">Content of Tab Pane 2</pf-tab-pane>
              <pf-tab-pane key="3" tab="Tab 3">Content of Tab Pane 3</pf-tab-pane>
            </pf-tabs>
          </pf-col>
        </pf-row>

        <SplitSpace>
          <pf-tag color="success">success</pf-tag>
          <pf-tag color="processing">processing</pf-tag>
          <pf-tag color="error">error</pf-tag>
          <pf-tag color="warning">warning</pf-tag>
          <pf-tag color="default">default</pf-tag>
          <pf-checkable-tag checked>CheckableTag</pf-checkable-tag>
        </SplitSpace>

        <pf-row :gutter="16">
          <pf-col :span="16">
            <pf-timeline mode="alternate">
              <pf-timeline-item>Create a services site 2015-09-01</pf-timeline-item>
              <pf-timeline-item color="gray">
                Solve initial network problems 2015-09-01
              </pf-timeline-item>
              <pf-timeline-item>
                <template #dot>
                  <ClockCircleOutlined style="font-size: 16px" />
                </template>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </pf-timeline-item>
            </pf-timeline>
          </pf-col>

          <pf-col :span="8">
            <pf-tree :tree-data="treeData" :height="200" default-expand-all checkable />
          </pf-col>
        </pf-row>

        <!-- Alert -->
        <pf-row :gutter="16">
          <pf-col :span="6">
            <pf-alert show-icon message="Success Text" type="success" />
          </pf-col>
          <pf-col :span="6">
            <pf-alert show-icon message="Info Text" type="info" />
          </pf-col>
          <pf-col :span="6">
            <pf-alert show-icon message="Warning Text" type="warning" />
          </pf-col>
          <pf-col :span="6">
            <pf-alert show-icon message="Error Text" type="error" />
          </pf-col>
        </pf-row>

        <!-- Progress -->
        <pf-row :gutter="16">
          <pf-col flex="auto">
            <pf-progress :percent="30" />
            <pf-progress :percent="70" status="exception" />
            <pf-progress :percent="100" />
          </pf-col>
          <pf-col flex="none">
            <pf-progress type="circle" :percent="75" />
            <pf-progress type="circle" :percent="70" status="exception" />
            <pf-progress type="circle" :percent="100" />
          </pf-col>
        </pf-row>

        <pf-transfer :data-source="transferData" :target-keys="['18']" :selected-keys="['3']">
          <template #render="item">{{ item.title }}</template>
        </pf-transfer>
      </pf-space>
    </pf-col>
  </pf-row>
</template>
<script lang="ts">
import { defineComponent, h, reactive, ref } from 'vue';
import { PfConfigProvider, PfSpace, PfDivider } from '@pf-ui/pf-ui-vue';
import type { TreeSelectProps } from '@pf-ui/pf-ui-vue';
import {
  DownOutlined,
  MailOutlined,
  SettingOutlined,
  ClockCircleOutlined,
} from '@ant-design/icons-vue';
export default defineComponent({
  components: {
    DownOutlined,
    MailOutlined,
    SettingOutlined,
    ClockCircleOutlined,
    SplitSpace: (props, { slots }) =>
      h(PfSpace, { size: 4, ...props }, { ...slots, split: () => h(PfDivider, { type: 'vertical' }) }),
  },
  setup() {
    const inputProps = {
      style: { width: '128px' },
    };

    const selectProps = {
      ...inputProps,
      options: [
        { value: 'light', label: 'Light' },
        { value: 'bamboo', label: 'Bamboo' },
        { value: 'little', label: 'Little' },
      ],
    };

    const treeData = [
      {
        value: 'little',
        key: 'little',
        label: 'Little',
        title: 'Little',
        children: [
          { value: 'light', key: 'light', label: 'Light', title: 'Light' },
          { value: 'bamboo', key: 'bamboo', label: 'Bamboo', title: 'Bamboo' },
        ],
      },
    ];

    const treeSelectProps: TreeSelectProps = {
      ...inputProps,
      treeCheckable: true,
      maxTagCount: 'responsive',
      treeData,
    };

    const carTabListNoTitle = [
      {
        key: 'article',
        tab: 'article',
      },
      {
        key: 'app',
        tab: 'app',
      },
      {
        key: 'project',
        tab: 'project',
      },
    ];

    const transferData = [];

    for (let i = 0; i < 20; i++) {
      transferData.push({
        key: i.toString(),
        title: `content${i + 1}`,
        description: `description of content${i + 1}`,
      });
    }

    const colorState = reactive({
      primaryColor: '#1890ff',
      errorColor: '#ff4d4f',
      warningColor: '#faad14',
      successColor: '#52c41a',
      infoColor: '#1890ff',
    });

    const onColorChange = (type: string, e: any) => {
      Object.assign(colorState, { [type]: e.target.value });
      PfConfigProvider.config({
        theme: colorState,
      });
    };
    return {
      selectProps,
      carTabListNoTitle,
      onColorChange,
      treeData,
      treeSelectProps,
      transferData,
      colorState,
      inputProps,
      selectedKeys: ref(['mail']),
    };
  },
});
</script>
