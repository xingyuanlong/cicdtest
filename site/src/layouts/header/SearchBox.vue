<template>
  <div id="search-box" :class="{ 'narrow-mode': responsive, focused: !!focused }">
    <SearchOutlined />
    <pf-input
      ref="inputRef"
      :placeholder="searchPlaceholder"
      @focus="triggerFocus(true)"
      @blue="triggerFocus(false)"
    ></pf-input>
  </div>
</template>
<script lang="ts">
import { ref, defineComponent, onMounted } from 'vue';
import { SearchOutlined } from '@ant-design/icons-vue';
export default defineComponent({
  name: 'SearchBox',
  components: {
    SearchOutlined,
  },
  props: ['isZhCN', 'responsive'],
  emits: ['triggerFocus'],
  setup(props, { emit }) {
    const inputRef = ref();
    const focused = ref(false);
    function triggerFocus(focus: boolean) {
      focused.value = focus;
      emit('triggerFocus', focus);
    }
    
    onMounted(() => {
      console.log('window.docsearch', window.docsearch);
      window.docsearch && window.docsearch({
        apiKey: '92003c1d1d07beef165b08446f4224a3',
        indexName: 'antdv',
        inputSelector: '#search-box input',
        algoliaOptions: { facetFilters: [ 'cn' ] },
        transformData(hits) {
          hits.forEach(hit => {
            hit.url = hit.url.replace('www.antdv.com', window.location.host);
            hit.url = hit.url.replace('https:', window.location.protocol);
          });
          return hits;
        },
        debug: false, // Set debug to true if you want to inspect the dropdown
      });
    });
    return {
      inputRef,
      focused,
      triggerFocus,
      searchPlaceholder: props.isZhCN ? '搜索文档' : 'Search Docs',
    };
  },
});
</script>
