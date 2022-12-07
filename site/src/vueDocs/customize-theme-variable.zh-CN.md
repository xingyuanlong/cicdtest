---
order: 7.1
title: 动态主题（实验性）
---

除了 [less 定制主题](/docs/vue/customize-theme-cn) 外，我们还提供了 CSS Variable 版本以支持动态切换主题能力。你可以在 [ConfigProvider](/components/config-provider-cn/#components-config-provider-demo-theme) 进行体验。


## 如何使用

### 引入 pf.variable.min.css

替换当前项目引入样式文件为 CSS Variable 版本：

```diff
-- import '@pf-ui/pf-ui-vue/dist/pf.variable.css';
++ import '@pf-ui/pf-ui-vue/dist/pf.variable.min.css';
```


注：如果你使用了 `babel-plugin-import`，需要将其去除。

### 静态方法配置

调用 ConfigProvider 配置方法设置前缀为 `pf` 主题色：

```ts
import { ConfigProvider } from '@pf-ui/pf-ui-vue';

ConfigProvider.config({
  theme: {
    primaryColor: '#25b864',
  },
});
```

### 使用 css 变量

再项目的 style.css 定义css 变量, 入口文件引入.变量名称已 `--wj` 为前缀,后续加上设计规范的颜色.按需设置. 配合css-in-js 也可以动态修改. (能设置更多主题色)

该方法也可以定制主题

```css
:root {
    --wj-A1_1: #198EEB;
    --wj-A1_2: #4FB1FF;
    --wj-A1_3: #197BC9;
    --wj-A1_4: #ECF8FF;
    --wj-A1_5: #D1EBFF;
    --wj-A2_1: #FF7631;
    --wj-A2_2: #FF925B;
    --wj-A2_3: #D45C1F;
    --wj-A3_1: #F36969;
    --wj-A3_2: #FA8383;
    --wj-A3_3: #D45353;
}
```
## 冲突解决

默认情况下，CSS Variable 会以 `--wj` (推荐)  或 `--pf` 作为前缀。当你的项目中引用多份 css 文件时，可以通过修改前缀的方式避免冲突。

### 代码调整

通过 ConfigProvider 在顶层修改 `prefixCls`：

```html
<template>
  <pf-config-provider prefix-cls="custom">
    <my-app />
  </pf-config-provider>
</template>
```

通过静态方法设置主题色以及对应 `prefixCls`：

```ts
import { PfConfigProvider } from '@pf-ui/pf-ui-vue';
PfConfigProvider.config({
  prefixCls: 'custom',
  theme: {
    primaryColor: '#25b864',
  },
});
```

### 编译 less

由于前缀变更，你需要重新生成一份对应的 css 文件。

```bash
lessc --js --modify-var="ant-prefix=custom" @pf-ui/pf-ui-vue/dist/pf.variable.less modified.css
```

### 相关变更

为了实现 CSS Variable 并保持原始用法兼容性，我们于 `dist/pf.xxx.less` 文件中添加了 `@root-entry-name: xxx;` 入口注入以支持 less 动态加载对应的 less 文件。一般情况下，你不需要关注该变化。但是，如果你的项目中直接引用了 `lib|es` 目录下的 less 文件。你需要在 less 入口处配置 `@root-entry-name: default;` （或者 `@root-entry-name: variable;`）以使 less 可以找到正确的入口。

此外，我们将 `lib|es/style/minxins/index.less` 中的 `@import 'motion'` 和 `@import 'reset'` 迁移至了 `lib|es/style/themes/xxx.less` 中，因为这两个文件依赖了主题相关变量。如果你使用了相关内部方法，请自行调整。当然，我们还是建议直接使用 `dist` 目录下的 `pf.less` 文件而非调用内部文件，因为它们经常会受重构影响。
