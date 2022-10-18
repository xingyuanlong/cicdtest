<docs>
---
order: 2
title:
  zh-CN: 方向
  en-US: Direction
---

## zh-CN

这里列出了支持 `rtl` 方向的组件，您可以在演示中切换方向。

## en-US

Components which support rtl direction are listed here, you can toggle the direction in the demo.

</docs>

<template>
  <span style="margin-right: 16px">Change direction of components:</span>
  <pf-radio-group v-model:value="state.direction">
    <pf-radio-button value="ltr">LTR</pf-radio-button>
    <pf-radio-button value="rtl">RTL</pf-radio-button>
  </pf-radio-group>
  <pf-divider />
  <pf-config-provider :direction="state.direction">
    <div class="direction-components">
      <pf-row>
        <pf-col :span="24">
          <pf-divider orientation="left">Cascader example</pf-divider>
          <pf-cascader
            :options="cascaderOptions"
            placeholder="یک مورد انتخاب کنید"
            :placement="state.popupPlacement"
            @change="onCascaderChange"
          >
            <template #suffixIcon><SearchIcon /></template>
          </pf-cascader>
          &nbsp;&nbsp;&nbsp;&nbsp; With search:
          <pf-cascader
            :options="cascaderOptions"
            placeholder="Select an item"
            :placement="state.popupPlacement"
            :show-search="{ filter: cascaderFilter }"
            @change="onCascaderChange"
          >
            <template #suffixIcon><SmileOutlined /></template>
          </pf-cascader>
        </pf-col>
      </pf-row>
      <br />
      <pf-row>
        <pf-col :span="12">
          <pf-divider orientation="left">Switch example</pf-divider>
          &nbsp;&nbsp;
          <pf-switch default-checked />
          &nbsp;&nbsp;
          <pf-switch loading default-checked />
          &nbsp;&nbsp;
          <pf-switch size="small" loading />
        </pf-col>
        <pf-col :span="12">
          <pf-divider orientation="left">Radio Group example</pf-divider>

          <pf-radio-group default-value="c" button-style="solid">
            <pf-radio-button value="a">تهران</pf-radio-button>
            <pf-radio-button value="b" disabled>اصفهان</pf-radio-button>
            <pf-radio-button value="c">فارس</pf-radio-button>
            <pf-radio-button value="d">خوزستان</pf-radio-button>
          </pf-radio-group>
        </pf-col>
      </pf-row>
      <br />
      <pf-row>
        <pf-col :span="12">
          <pf-divider orientation="left">Button example</pf-divider>
          <div class="button-demo">
            <pf-button type="primary">
              <template #icon><DownloadOutlined /></template>
            </pf-button>
            <pf-button type="primary" shape="circle">
              <template #icon><DownloadOutlined /></template>
            </pf-button>
            <pf-button type="primary" shape="round">
              <template #icon><DownloadOutlined /></template>
            </pf-button>
            <pf-button type="primary" shape="round">
              <template #icon><DownloadOutlined /></template>
              Download
            </pf-button>
            <pf-button type="primary">
              <template #icon><DownloadOutlined /></template>
              Download
            </pf-button>
            <br />
            <pf-button-group>
              <pf-button type="primary">
                <LeftOutlined />
                Backward
              </pf-button>
              <pf-button type="primary">
                Forward
                <RightOutlined />
              </pf-button>
            </pf-button-group>
            <pf-button type="primary" loading>Loading</pf-button>
            <pf-button type="primary" size="small" loading>Loading</pf-button>
          </div>
        </pf-col>
        <pf-col :span="12">
          <pf-divider orientation="left">Tree example</pf-divider>
          <pf-tree
            v-model:expandedKeys="expandedKeys"
            v-model:selectedKeys="selectedKeys"
            v-model:checkedKeys="checkedKeys"
            show-line
            checkable
            :tree-data="treeData"
          >
            <template #title="{ title, key }">
              <span v-if="key === '0-0-1-0'" style="color: #1890ff">{{ title }}</span>
              <template v-else>{{ title }}</template>
            </template>
          </pf-tree>
        </pf-col>
      </pf-row>
      <br />
      <pf-row>
        <pf-col :span="24">
          <pf-divider orientation="left">Input (Input Group) example</pf-divider>
          <pf-input-group size="large">
            <pf-row :gutter="8">
              <pf-col :span="5">
                <pf-input default-value="0571" />
              </pf-col>
              <pf-col :span="8">
                <pf-input default-value="26888888" />
              </pf-col>
            </pf-row>
          </pf-input-group>
          <br />
          <pf-input-group compact>
            <pf-input style="width: 20%" default-value="0571" />
            <pf-input style="width: 30%" default-value="26888888" />
          </pf-input-group>
          <br />
          <pf-input-group compact>
            <pf-select default-value="Option1">
              <pf-select-option value="Option1">Option1</pf-select-option>
              <pf-select-option value="Option2">Option2</pf-select-option>
            </pf-select>
            <pf-input style="width: 50%" default-value="input content" />
            <pf-inputNumber />
          </pf-input-group>
          <br />
          <pf-input-search placeholder="input search text" enter-button="Search" size="large" />
          <br />
          <br />
          <div style="margin-bottom: 16px">
            <pf-input default-value="mysite">
              <template #selectBefore>
                <pf-select default-value="Http://" style="width: 90px">
                  <pf-select-option value="Http://">Http://</pf-select-option>
                  <pf-select-option value="Https://">Https://</pf-select-option>
                </pf-select>
              </template>
              <template #selectAfter>
                <pf-select default-value=".com" style="width: 80px">
                  <pf-select-option value=".com">.com</pf-select-option>
                  <pf-select-option value=".jp">.jp</pf-select-option>
                  <pf-select-option value=".cn">.cn</pf-select-option>
                  <pf-select-option value=".org">.org</pf-select-option>
                </pf-select>
              </template>
            </pf-input>
          </div>
          <br />
          <pf-row>
            <pf-col :span="12">
              <pf-divider orientation="left">Select example</pf-divider>
              <pf-select mode="multiple" default-value="مورچه" style="width: 120px">
                <pf-select-option value="jack">Jack</pf-select-option>
                <pf-select-option value="مورچه">مورچه</pf-select-option>
                <pf-select-option value="disabled" disabled>Disabled</pf-select-option>
                <pf-select-option value="Yiminghe">yiminghe</pf-select-option>
              </pf-select>
              <pf-select default-value="مورچه" style="width: 120px" disabled>
                <pf-select-option value="مورچه">مورچه</pf-select-option>
              </pf-select>
              <pf-select default-value="مورچه" style="width: 120px" loading>
                <pf-select-option value="مورچه">مورچه</pf-select-option>
              </pf-select>
              <pf-select
                show-search
                style="width: 200px"
                placeholder="Select a person"
                option-filter-prop="children"
                :filter-option="
                  (input, option) =>
                    option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                "
              >
                <pf-select-option value="jack">Jack</pf-select-option>
                <pf-select-option value="سعید">سعید</pf-select-option>
                <pf-select-option value="tom">Tom</pf-select-option>
              </pf-select>
            </pf-col>
            <pf-col :span="12">
              <pf-divider orientation="left">TreeSelect example</pf-divider>
              <div>
                <pf-tree-select
                  show-search
                  style="width: 100%"
                  :dropdown-style="{ maxHeight: '400px', overflow: 'auto' }"
                  placeholder="Please select"
                  allow-clear
                  tree-default-expand-all
                  :tree-data="treeSelectData"
                ></pf-tree-select>
              </div>
            </pf-col>
          </pf-row>
          <br />
          <pf-row>
            <pf-col :span="24">
              <pf-divider orientation="left">Modal example</pf-divider>
              <div>
                <pf-button type="primary" @click="showModal">Open Modal</pf-button>
                <pf-modal v-model:visible="state.modalVisible" title="پنچره ساده">
                  <p>نگاشته‌های خود را اینجا قراردهید</p>
                  <p>نگاشته‌های خود را اینجا قراردهید</p>
                  <p>نگاشته‌های خود را اینجا قراردهید</p>
                </pf-modal>
              </div>
            </pf-col>
          </pf-row>
          <br />
          <pf-row>
            <pf-col :span="24">
              <pf-divider orientation="left">Steps example</pf-divider>
              <div>
                <pf-steps progress-dot :current="state.currentStep">
                  <pf-step title="Finished" description="This is a description." />
                  <pf-step title="In Progress" description="This is a description." />
                  <pf-step title="Waiting" description="This is a description." />
                </pf-steps>
                <br />
                <pf-steps :current="state.currentStep" @change="onStepsChange">
                  <pf-step title="Step 1" description="This is a description." />
                  <pf-step title="Step 2" description="This is a description." />
                  <pf-step title="Step 3" description="This is a description." />
                </pf-steps>
              </div>
            </pf-col>
          </pf-row>
          <br />
          <pf-row>
            <pf-col :span="12">
              <pf-divider orientation="left">Rate example</pf-divider>
              <div>
                <pf-rate v-model:value="rateValue" />
                <br />
                <strong>* Note:</strong>
                Half star not implemented in RTL direction.
              </div>
            </pf-col>
            <pf-col :span="12">
              <pf-divider orientation="left">Badge example</pf-divider>
              <div>
                <div>
                  <pf-badge :count="state.badgeCount">
                    <a href="#" class="head-example" />
                  </pf-badge>
                  <pf-button-group>
                    <pf-button @click="declineBadge">
                      <MinusOutlined />
                    </pf-button>
                    <pf-button @click="increaseBadge">
                      <PlusOutlined />
                    </pf-button>
                  </pf-button-group>
                </div>
                <div style="margin-top: 10px">
                  <pf-badge :dot="state.showBadge">
                    <a href="#" class="head-example" />
                  </pf-badge>
                  <pf-switch :checked="state.showBadge" @change="onChangeBadge" />
                </div>
              </div>
            </pf-col>
          </pf-row>
        </pf-col>
      </pf-row>

      <br />
      <br />
      <pf-row>
        <pf-col :span="24">
          <pf-divider orientation="left">Pagination example</pf-divider>
          <pf-pagination show-size-changer :default-current="3" :total="500" />
        </pf-col>
      </pf-row>
      <br />
      <pf-row>
        <pf-col :span="24">
          <pf-divider orientation="left">Grid System example</pf-divider>
          <div class="grid-demo">
            <div class="code-box-demo">
              <p>
                <strong>* Note:</strong>
                Every calculation in RTL grid system is from right side (offset, push, etc.)
              </p>
              <pf-row>
                <pf-col :span="8">col-8</pf-col>
                <pf-col :span="8" :offset="8">col-8</pf-col>
              </pf-row>
              <pf-row>
                <pf-col :span="6" :offset="6">col-6 col-offset-6</pf-col>
                <pf-col :span="6" :offset="6">col-6 col-offset-6</pf-col>
              </pf-row>
              <pf-row>
                <pf-col :span="12" :offset="6">col-12 col-offset-6</pf-col>
              </pf-row>
              <pf-row>
                <pf-col :span="18" :push="6">col-18 col-push-6</pf-col>
                <pf-col :span="6" :pull="18">col-6 col-pull-18</pf-col>
              </pf-row>
            </div>
          </div>
        </pf-col>
      </pf-row>
    </div>
  </pf-config-provider>
</template>
<script lang="ts">
import { defineComponent, reactive, watch, ref } from 'vue';

import {
  SearchOutlined as SearchIcon,
  SmileOutlined,
  DownloadOutlined,
  LeftOutlined,
  RightOutlined,
  MinusOutlined,
  PlusOutlined,
} from '@ant-design/icons-vue';
import type { TreeProps, TreeSelectProps, CascaderProps } from 'pf-ui-vue';

export default defineComponent({
  components: {
    SmileOutlined,
    DownloadOutlined,
    LeftOutlined,
    RightOutlined,
    MinusOutlined,
    PlusOutlined,
    SearchIcon,
  },
  setup() {
    const state = reactive({
      currentStep: 0,
      modalVisible: false,

      badgeCount: 5,
      showBadge: true,
      direction: 'ltr' as 'ltr' | 'rtl',
      popupPlacement: 'bottomLeft' as CascaderProps['placement'],
    });
    const expandedKeys = ref<string[]>(['0-0-0', '0-0-1']);
    const selectedKeys = ref<string[]>(['0-0-0', '0-0-1']);
    const checkedKeys = ref<string[]>(['0-0-0', '0-0-1']);

    const treeData: TreeProps['treeData'] = [
      {
        title: 'parent 1',
        key: '0-0',
        children: [
          {
            title: 'parent 1-0',
            key: '0-0-0',
            disabled: true,
            children: [
              { title: 'leaf', key: '0-0-0-0', disableCheckbox: true },
              { title: 'leaf', key: '0-0-0-1' },
            ],
          },
          {
            title: 'parent 1-1',
            key: '0-0-1',
            children: [{ key: '0-0-1-0', title: 'sss' }],
          },
        ],
      },
    ];

    const treeSelectData = ref<TreeSelectProps['treeData']>([
      {
        title: 'parent 1',
        value: 'parent 1',
        children: [
          {
            title: 'parent 1-0',
            value: 'parent 1-0',
            children: [
              {
                title: 'my leaf',
                value: 'leaf1',
              },
              {
                title: 'your leaf',
                value: 'leaf2',
              },
            ],
          },
          {
            title: 'parent 1-1',
            value: 'parent 1-1',
          },
        ],
      },
    ]);
    watch(
      () => state.direction,
      directionValue => {
        if (directionValue === 'rtl') {
          state.popupPlacement = 'bottomRight';
        } else {
          state.popupPlacement = 'bottomLeft';
        }
      },
    );
    const cascaderOptions = [
      {
        value: 'tehran',
        label: 'تهران',
        children: [
          {
            value: 'tehran-c',
            label: 'تهران',
            children: [
              {
                value: 'saadat-abad',
                label: 'سعادت آیاد',
              },
            ],
          },
        ],
      },
      {
        value: 'ardabil',
        label: 'اردبیل',
        children: [
          {
            value: 'ardabil-c',
            label: 'اردبیل',
            children: [
              {
                value: 'primadar',
                label: 'پیرمادر',
              },
            ],
          },
        ],
      },
      {
        value: 'gilan',
        label: 'گیلان',
        children: [
          {
            value: 'rasht',
            label: 'رشت',
            children: [
              {
                value: 'district-3',
                label: 'منطقه ۳',
              },
            ],
          },
        ],
      },
    ];

    // ==== Cascader ====
    const cascaderFilter = (inputValue, path) =>
      path.some(option => option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1);

    const onCascaderChange = value => {
      console.log(value);
    };
    // ==== End Cascader ====

    // ==== Modal ====
    const showModal = () => {
      state.modalVisible = true;
    };

    // ==== End Modal ====

    const onStepsChange = currentStep => {
      console.log('onChange:', currentStep);
      state.currentStep = currentStep;
    };

    // ==== Badge ====

    const increaseBadge = () => {
      const badgeCount = state.badgeCount + 1;
      state.badgeCount = badgeCount;
    };

    const declineBadge = () => {
      let badgeCount = state.badgeCount - 1;
      if (badgeCount < 0) {
        badgeCount = 0;
      }
      state.badgeCount = badgeCount;
    };

    const onChangeBadge = showBadge => {
      state.showBadge = showBadge;
    };
    return {
      state,
      cascaderOptions,
      cascaderFilter,
      onCascaderChange,
      showModal,
      onStepsChange,
      increaseBadge,
      declineBadge,
      onChangeBadge,
      expandedKeys,
      selectedKeys,
      checkedKeys,
      treeData,
      treeSelectData,
      rateValue: ref(2),
    };
  },
});
</script>
<style lang="less">
.direction-components {
  .button-demo .ant-btn,
  .button-demo .ant-btn-group {
    margin-right: 8px;
    margin-bottom: 12px;
  }
  .button-demo .ant-btn-group > .ant-btn,
  .button-demo .ant-btn-group > span > .ant-btn {
    margin-right: 0;
    margin-left: 0;
  }

  .head-example {
    display: inline-block;
    width: 42px;
    height: 42px;
    vertical-align: middle;
    background: #eee;
    border-radius: 4px;
  }

  .ant-badge:not(.ant-badge-not-a-wrapper) {
    margin-right: 20px;
  }
  .ant-badge-rtl:not(.ant-badge-not-a-wrapper) {
    margin-right: 0;
    margin-left: 20px;
  }
}

[data-theme='dark'] .head-example {
  background: rgba(255, 255, 255, 0.12);
}
</style>
