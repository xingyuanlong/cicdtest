<template>
  <Navigation @langChange="onLangChange" />
  <template v-if="isMobile">
    <Ecosystem />
  </template>
  <template v-else>
    <pf-button
      key="lang-button"
      size="small"
      class="header-button header-lang-button"
      @click="onLangChange"
    >
      {{ $t('app.header.lang') }}
    </pf-button>
  </template>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import Navigation from './Navigation.vue';
import { version } from 'pf-ui-vue';
import { isZhCN, isLocalStorageNameSupported, getLocalizedPathname } from '../../utils/util';
export default defineComponent({
  name: 'HeaderMenu',
  components: {
    Navigation,
  },
  props: ['isMobile'],
  setup() {
    const antdVersion = ref(version);
    const onLangChange = () => {
      const {
        location: { pathname },
      } = window;
      const currentProtocol = `${window.location.protocol}//`;
      const currentHref = window.location.href.substr(currentProtocol.length);

      if (isLocalStorageNameSupported()) {
        localStorage.setItem('locale', isZhCN(pathname) ? 'en-US' : 'zh-CN');
      }

      window.location.href =
        currentProtocol +
        currentHref.replace(
          window.location.pathname,
          getLocalizedPathname(pathname, !isZhCN(pathname)).path,
        );
    };

    return {
      onLangChange,
      antdVersion,
    };
  },
});
</script>
<style lang="less" scoped></style>
