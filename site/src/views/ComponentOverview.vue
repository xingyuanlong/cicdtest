<template>
  <section class="markdown">
    <h1>{{ isZhCN ? '组件总览' : 'Overview' }}</h1>
    <section class="markdown">
      <p>
        <code>pf-ui-vue</code>
        {{
          isZhCN
            ? '基于antd-design-vue二次开发，为 Web 应用提供了丰富的基础 UI 组件，我们还将持续探索企业级应用的最佳 UI 实践。'
            : 'provides plenty of UI components to enrich your web applications, and we will improve components experience consistently. '
        }}
      </p>
    </section>
    <pf-divider></pf-divider>
    <pf-input
      ref="inputRef"
      v-model:value="search"
      :placeholder="$t('app.components.overview.search')"
      class="components-overview-search"
      auto-focus
    >
      <template #suffix>
        <SearchOutlined />
      </template>
    </pf-input>
    <pf-divider></pf-divider>
    <template v-for="group in menuItems" :key="group.title">
      <div class="components-overview">
        <h2 class="ant-typography components-overview-group-title">
          <pf-space align="center">
            {{ isZhCN ? group.title : group.enTitle }}
            <pf-tag style="display: block">{{ group.children.length }}</pf-tag>
          </pf-space>
        </h2>
        <pf-row :gutter="[24, 24]">
          <template v-for="component in group.children" :key="component.title">
            <pf-col :xs="24" :sm="12" :lg="8" :xl="6">
              <component
                :is="component.target ? 'a' : 'router-link'"
                v-bind="
                  component.target
                    ? { href: component.path, target: component.target }
                    : { to: getLocalizedPathname(component.path, isZhCN) }
                "
              >
                <pf-card size="small" class="components-overview-card">
                  <template #title>
                    <div class="components-overview-title">
                      {{ component.title }}
                      {{ isZhCN ? component.subtitle : '' }}
                    </div>
                  </template>
                  <div class="components-overview-img">
                    <img :src="component.cover" :alt="component.title" />
                  </div>
                </pf-card>
              </component>
            </pf-col>
          </template>
        </pf-row>
      </div>
    </template>
  </section>
</template>
<script lang="ts">
import type { GlobalConfig } from '../App.vue';
import { computed, defineComponent, inject, onMounted, ref } from 'vue';
import { SearchOutlined } from '@ant-design/icons-vue';
import { GLOBAL_CONFIG } from '../SymbolKey';
import useMenus from '../hooks/useMenus';
import { getLocalizedPathname } from '../utils/util';
export default defineComponent({
  name: 'ComponentOverview',
  components: {
    SearchOutlined,
  },
  setup() {
    const globalConfig = inject<GlobalConfig>(GLOBAL_CONFIG);
    const search = ref('');
    const inputRef = ref();
    const { dataSource } = useMenus();
    const menuItems = computed(() => {
      return dataSource.value
        .filter(i => i.order > -1)
        .map(group => {
          const components = group.children.filter(
            (component: any) =>
              !search.value.trim() ||
              component.title.toLowerCase().includes(search.value.trim().toLowerCase()) ||
              (component.subtitle || '').toLowerCase().includes(search.value.trim().toLowerCase()),
          );
          return { ...group, children: components };
        })
        .filter(i => i.children.length)
        .concat([
        ]);
    });
    onMounted(() => {
      inputRef.value.focus();
    });
    return {
      globalConfig,
      search,
      menuItems,
      getLocalizedPathname,
      inputRef,
      isZhCN: globalConfig?.isZhCN,
    };
  },
});
</script>
<style lang="less" src="./ComponentOverview.less"></style>
