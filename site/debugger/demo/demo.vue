<template>
  <div>
    <pf-menu
      v-model:selected-keys="selectedKeys"
      :open-keys="openKeys"
      style="width: 256px"
      mode="inline"
    >
      <pf-sub-menu key="sub1">
        <template #icon>
          <MailOutlined />
        </template>
        <template #title>Navigation One</template>
        <pf-menu-item key="3">Option 3</pf-menu-item>
        <pf-menu-item key="4">Option 4</pf-menu-item>
      </pf-sub-menu>
    </pf-menu>
    <pf-button @click="open">展开</pf-button>
  </div>
</template>
<script>
import { defineComponent, ref, watchEffect } from 'vue';
import { MailOutlined } from '@ant-design/icons-vue';
export default defineComponent({
  components: {
    MailOutlined,
  },
  setup() {
    const selectedKeys = ref(['1']);
    const openKeys = ref([]);
    const open = () => {
      openKeys.value.push('sub1');
      // openKeys.value = [...openKeys.value, 'sub1'];
    };
    const test = ref([1]);
    watchEffect(() => {
      console.log(111, test.value);
    });
    window.openKeys = openKeys;
    window.test = test;
    return {
      selectedKeys,
      openKeys,
      open,
    };
  },
});
</script>
