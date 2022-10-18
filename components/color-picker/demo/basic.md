<cn>
#### 基础用法
基本用法，可以使用 v-model 实现数据的双向绑定。
</cn>

<us>
#### Basic
Basic usage. You can use v-model to enable a two-way bingding on data.
</us>

```vue
<template>
  <pf-row>
    <pf-col span="12">
      有默认值
      <pf-colorPicker v-model="color1" />
    </pf-col>
    <pf-col span="12">
      无默认值
      <pf-colorPicker v-model="color2" />
    </pf-col>
  </pf-row>
</template>
<script>
export default {
  data() {
    return {
      color1: '#1890ff',
      color2: '',
    };
  },
};
</script>
```
