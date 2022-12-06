## 引入 pf-ui-vue

### 1. 安装脚手架工具

[vue-cli](https://github.com/vuejs/vue-cli)

```bash
$ npm install -g @vue/cli
# OR
$ yarn global add @vue/cli
```

### 2. 创建一个项目

使用命令行进行初始化。

```bash
$ vue create pf-demo
```

并配置项目。

若安装缓慢报错，可尝试用 `cnpm` 或别的镜像源自行安装：`rm -rf node_modules && cnpm install`。

### 3. 使用组件

#### 安装

```bash
$ npm i --save @pf-ui/pf-ui-vue
```

#### 注册

如果使用 Vue 默认的模板语法，需要注册组件后方可使用，有如下三种方式注册组件：

**全局完整注册**

```jsx
import { createApp } from 'vue';
import PfUiVue from '@pf-ui/pf-ui-vue';
import App from './App';
import '@pf-ui/pf-ui-vue/dist/pf.variable.css';

const app = createApp(App);

app.use(PfUiVue).mount('#app');
```

以上代码便完成了 pf-ui 的全局注册。需要注意的是，样式文件需要单独引入。

**全局部分注册**

```jsx
import { createApp } from 'vue';
import { PfButton, Pfmessage } from '@pf-ui/pf-ui-vue';
import App from './App';

const app = createApp(App);

/* 会自动注册 Button 下的子组件, 例如 Button.Group */
app.use(PfButton).mount('#app');

app.config.globalProperties.$message = Pfmessage;
```

**局部注册组件**

此种方式需要分别注册组件子组件，如 Button、ButtonGroup，并且注册后仅在当前组件中有效。所以我们推荐使用上述两种方式。

```html
<template>
  <pf-button>Add</pf-button>
</template>
<script>
  import { Button } from '@pf-ui/pf-ui-vue';
  const ButtonGroup = Button.Group;

  export default {
    components: {
      AButton: Button,
      AButtonGroup: ButtonGroup,
    },
  };
</script>
```


## 按需加载

如果你仅需要加载使用的组件，可以通过以下的写法来按需加载组件。

```jsx
import { PfButton } from '@pf-ui/pf-ui-vue';
// import PfButton from '@pf-ui/pf-ui-vue/lib/button'
import '@pf-ui/pf-ui-vue/lib/button/style'; // 或者 pf-ui-vue/lib/button/style/css 加载 css 文件
```

如果你使用了 babel，那么可以使用 [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) 来进行按需加载，加入这个插件后。你可以仍然这么写：

```jsx
import { Button } from '@pf-ui/pf-ui-vue';
```

插件会帮你转换成 `@pf-ui/pf-ui-vue/lib/xxx` 的写法。另外此插件配合 [style](https://github.com/ant-design/babel-plugin-import#usage) 属性可以做到模块样式的按需自动加载。

> 注意，babel-plugin-import 的 `style` 属性除了引入对应组件的样式，也会引入一些必要的全局样式。如果你不需要它们，建议不要使用此属性。你可以 `import '@pf-ui/pf-ui-vue/dist/pf.css` 手动引入，并覆盖全局样式。

<!-- 如果你使用的 Vite，你可以使用 [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components) 来进行按需加载。但是此插件无法处理非组件模块，如 message，这种组件需要手动加载：

```ts
import { message } from '@pf-ui/pf-ui-vue';
import '@pf-ui/pf-ui-vue/es/message/style/css'; //vite只能用 pf-ui-vue/es 而非 pf-ui-vue/lib
``` -->
