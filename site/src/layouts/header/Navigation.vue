<template>
  <pf-menu
    id="nav"
    class="menu-site"
    :mode="menuMode"
    :selected-keys="[activeMenuItem]"
    disabled-overflow
  >
    <pf-menu-item key="docs/vue">
      <router-link :to="getLocalizedPathname('/docs/vue/introduce', isZhCN)">
        {{ $t('app.header.menu.documentation') }}
      </router-link>
    </pf-menu-item>
    <pf-menu-item key="components">
      <router-link :to="getLocalizedPathname('/components/overview/', isZhCN)">
        {{ $t('app.header.menu.components') }}
      </router-link>
    </pf-menu-item>
    <pf-menu-item v-if="isZhCN" key="surely-vue">
      <pf-tooltip title="规划中，敬请期待..." color="#06aea6">
        业务组件
        <pf-badge color="red" style="position: absolute; top: -35px; right: -15px" />
      </pf-tooltip>
    </pf-menu-item>
    <pf-menu-item  key="pf-doc">
      <a href="https://platform-doc.rubikstack.com/" target="_blank">
        平台中心文档
      </a>
      
    </pf-menu-item>
    <template v-if="isMobile">
      <pf-menu-item key="switch-lang" @click="$emit('langChange')">
        {{ $t('app.header.lang') }}
      </pf-menu-item>
    </template>
  </pf-menu>
</template>
<script lang="ts">
import type { GlobalConfig } from '../../App.vue';
import { GLOBAL_CONFIG } from '../../SymbolKey';
import { getLocalizedPathname } from '../../utils/util';
import { computed, defineComponent, inject, ref, watch } from 'vue';
import { useRoute } from 'vue-router';

export default defineComponent({
  emits: ['langChange'],
  setup() {
    const globalConfig = inject<GlobalConfig>(GLOBAL_CONFIG);
    const menuMode = computed(() => {
      return globalConfig.isMobile.value ? 'inline' : 'horizontal';
    });
    const route = useRoute();
    const activeMenuItem = ref('home');
    watch(
      () => route.path,
      pathname => {
        const modules = pathname.split('/');
        if (pathname === '/docs/resources' || pathname === '/docs/resources-cn') {
          activeMenuItem.value = 'docs/resources';
        } else if (modules[1] === 'components') {
          activeMenuItem.value = 'components';
        } else if (modules[1] === 'docs') {
          activeMenuItem.value = `${modules[1]}/${modules[2]}`;
        } else {
          activeMenuItem.value = 'home';
        }
      },
      { immediate: true },
    );
    return {
      isMobile: globalConfig.isMobile,
      isZhCN: globalConfig.isZhCN,
      getLocalizedPathname,
      menuMode,
      activeMenuItem,
    };
  },
  methods: {
  }
});
</script>
<style lang="less">
@import '../../theme/static/theme.less';
@import './index.less';

#nav {
  height: 100%;
  font-size: 14px;
  font-family: Avenir, @font-family, sans-serif;
  border: 0;

  &.ant-menu-horizontal {
    border-bottom: none;

    & > .ant-menu-item,
    & > .ant-menu-submenu {
      min-width: (40px + 12px * 2);
      height: @header-height;
      padding-right: 12px;
      padding-left: 12px;
      line-height: @header-height;

      &::after {
        top: 0;
        right: 12px;
        bottom: auto;
        left: 12px;
        border-width: @menu-item-border;
      }
    }

    & .ant-menu-submenu-title .anticon {
      margin: 0;
    }
  }

  & > .ant-menu-item,
  & > .ant-menu-submenu {
    text-align: center;
  }
}

.header-link {
  color: @site-text-color;
}

.ant-menu-item-active .header-link {
  color: @primary-color;
}

// Popover menu is only used for mobile
.popover-menu {
  width: 300px;

  .ant-popover-inner-content {
    padding: 0;

    #nav {
      .ant-menu-item,
      .ant-menu-submenu {
        text-align: left;
      }

      .ant-menu-item-group-title {
        padding-left: 24px;
      }

      .ant-menu-item-group-list {
        padding: 0 16px;
      }

      .ant-menu-item,
      a {
        color: #333;
      }
    }
  }
}
</style>
