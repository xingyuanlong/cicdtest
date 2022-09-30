# Ant Design of Vue

Following the Ant Design specification, we developed a Vue UI library `antd` that contains a set of high quality components and demos for building rich, interactive user interfaces.

<div class="pic-plus">
  <img width="150" src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" />
  <span>+</span>
  <img width="160" src="https://qn.antdv.com/vue.png" />
</div>

<style>
.pic-plus > * {
  display: inline-block !important;
  vertical-align: middle;
}
.pic-plus span {
  font-size: 30px;
  color: #aaa;
  margin: 0 20px;
}
</style>

## Environment Support

- Modern browsers. You can use [1.x](https://1x.antdv.com/) for IE9+.
- Server-side Rendering
- [Electron](https://electronjs.org/)

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/> Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Opera | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/electron/electron_48x48.png" alt="Electron" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Electron |
| --- | --- | --- | --- | --- | --- |
| Edge | last 2 versions | last 2 versions | last 2 versions | last 2 versions | last 2 versions |


## Installation

### Using npm or yarn

**We recommend using npm or yarn to install**，it not only makes development easier，but also allow you to take advantage of the rich ecosystem of Javascript packages and tooling.

```bash
$ npm install @pf-ui/pf-ui-vue --save
```

```bash
$ yarn add @pf-ui/pf-ui-vue
```

## Usage

```jsx
import { DatePicker } from '@pf-ui/pf-ui-vue';
app.use(DatePicker);
```

And import stylesheets manually:

```jsx
import '@pf-ui/pf-ui-vue/dist/antd.variable.css'; // or '@pf-ui/pf-ui-vue/dist/antd.less'
```

### Use modularized antd

- Use [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) (Recommended)

  ```jsx
  // .babelrc or babel-loader option
  {
    "plugins": [
      ["import", { "libraryName": "@pf-ui/pf-ui-vue", "libraryDirectory": "es", "style": "css" }] // `style: true` for less
    ]
  }
  ```

  > Note: Don't set `libraryDirectory` if you are using webpack 1.

  This allows you to import components from antd without having to manually import the corresponding stylesheet. The antd babel plugin will automatically import stylesheets.

  ```jsx
  // import js and css modularly, parsed by babel-plugin-import
  import { DatePicker } from '@pf-ui/pf-ui-vue';
  ```

- Manually import

  ```jsx
  import DatePicker from '@pf-ui/pf-ui-vue/lib/date-picker'; // for js
  import '@pf-ui/pf-ui-vue/lib/date-picker/style/css'; // for css
  // import '@pf-ui/pf-ui-vue/lib/date-picker/style';         // that will import less
  ```

- For Vite

  ```js
  // vite.config.js
  import Components from 'unplugin-vue-components/vite';
  import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';

  export default {
    plugins: [
      /* ... */
      Components({
        resolvers: [AntDesignVueResolver()],
      }),
    ],
  };
  ```

