<cn>
#### 尺寸
选择器有三种尺寸：大、默认（中）、小。
</cn>

<us>
#### Size
There are three size of ColorPicker: large, medium(default), small.
</us>

```vue
<template>
  <div>
    <pf-row>
      <pf-col span="8">
        <pf-colorPicker v-model="color6" size="large" />
      </pf-col>
      <pf-col span="8">
        <pf-colorPicker v-model="color6" />
      </pf-col>
      <pf-col span="8">
        <pf-colorPicker v-model="color6" size="small" />
      </pf-col>
    </pf-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      color6: '#1890ff',
    };
  },
};
</script>
```
