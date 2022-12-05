## Import @pf-ui/pf-ui-vue

### 1. Installation

[vue-cli](https://github.com/vuejs/vue-cli)

```bash
$ npm install -g @vue/cli
# OR
$ yarn global add @vue/cli
```

### 2. Create a New Project

A new project can be created using CLI tools.

```bash
$ vue create antd-demo
```

And, setup your vue project configuration.

### 3. Use antd's Components

#### Install

```bash
$ npm i --save @pf-ui/pf-ui-vue
```

#### Component Registration

If you use Vue's default template syntax, you need to register components before you can use them. There are three ways to register components:

**Global Registration All Components**

```jsx
import { createApp } from 'vue';
import PfUiVue from '@pf-ui/pf-ui-vue';
import App from './App';
import '@pf-ui/pf-ui-vue/dist/pf.css';

const app = createApp(App);

app.use(PfUiVue).mount('#app');
```

The above imports Antd entirely. Note that CSS file needs to be imported separately.

**Global Registration Some Components**

```jsx
import { createApp } from 'vue';
import { Button, message } from '@pf-ui/pf-ui-vue';
import App from './App';

const app = createApp(App);

/* Automatically register components under Button, such as Button.Group */
app.use(Button).mount('#app');

app.config.globalProperties.$message = message;
```

**Local Registration**

In this way, component sub-components, such as Button and ButtonGroup, need to be registered separately, and they are only valid in the current component after registration. Therefore, we recommend using the above two methods.

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

## Import on Demand

we can import individual components on demand:

```jsx
import Button from '@pf-ui/pf-ui-vue/lib/button';
import '@pf-ui/pf-ui-vue/lib/button/style'; // or @pf-ui/pf-ui-vue/lib/button/style/css for css format file
```

We strongly recommend using [babel-plugin-import](https://github.com/ant-design/babel-plugin-import), which can convert the following code to the '@pf-ui/pf-ui-vue/lib/xxx' way:

```jsx
import { Button } from '@pf-ui/pf-ui-vue';
```

And this plugin can load styles too, read [usage](https://github.com/ant-design/babel-plugin-import#usage) for more details.

> FYI, babel-plugin-import's `style` option will importing some global reset styles, don't use it if you don't need those styles. You can import styles manually via `import '@pf-ui/pf-ui-vue/dist/pf.css'` and override the global reset styles.

If you use Vite, you can use [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components) to load on demand. However, this plugin can only deal with components. Others such as message should be loaded manually:

```ts
import { message } from '@pf-ui/pf-ui-vue';
import '@pf-ui/pf-ui-vue/es/message/style/css'; //use @pf-ui/pf-ui-vue/es instead of @pf-ui/pf-ui-vue/lib
```