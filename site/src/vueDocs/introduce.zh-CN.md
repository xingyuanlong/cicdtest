# @pf-ui/pf-ui-vue

基于antd-design-vue二次开发，开发和服务于医疗企业级后台产品。

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

## 特性

- 提炼自企业级中后台产品的交互语言和视觉风格。
- 开箱即用的高质量 Vue 组件。
- 共享[Ant Design of React](http://ant-design.gitee.io/docs/spec/introduce-cn)设计工具体系。

## 支持环境

- 现代浏览器, 不支持 IE9。
- 支持服务端渲染。
- [Electron](https://electronjs.org/)

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Opera | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/electron/electron_48x48.png" alt="Electron" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Electron |
| --- | --- | --- | --- | --- | --- |
| Edge | last 2 versions | last 2 versions | last 2 versions | last 2 versions | last 2 versions |


## 安装

### 使用 npm 或 yarn 安装

**我们推荐使用 npm 或 yarn 的方式进行开发**，不仅可在开发环境轻松调试，也可放心地在生产环境打包部署使用，享受整个生态圈和工具链带来的诸多好处。

```bash
$ npm install @pf-ui/pf-ui-vue --save
```

```bash
$ yarn add @pf-ui/pf-ui-vue
```

## 示例

```jsx
import { PfDatePicker } from '@pf-ui/pf-ui-vue';
app.use(PfDatePicker);
```

引入样式(**推荐**)：

```jsx
import '@pf-ui/pf-ui-vue/dist/pf.variable.css'; // or '@pf-ui/pf-ui-vue/dist/pf.variable.less'
```

### 按需加载

`pf-ui` 的 JS 代码默认支持基于 ES modules 的 tree shaking，但是组件样式需要单独引入。

  ```jsx
  import { PfDatePicker } from '@pf-ui/pf-ui-vue'; // 加载 JS
  import '@pf-ui/pf-ui-vue/lib/date-picker/style/css'; // 加载 CSS
  // import '@pf-ui/pf-ui-vue/lib/date-picker/style'; // 加载 LESS
  ```

你也可以使用 [babel-plugin-import](https://github.com/ant-design/babel-plugin-import)。

  ```jsx
  // .babelrc or babel-loader option
  {
    "plugins": [
      ["import", { "libraryName": "@pf-ui/pf-ui-vue", "libraryDirectory": "es", "style": "css" }] // `style: true` 会加载 less 文件
    ]
  }
  ```

  > 注意：webpack 1 无需设置 `libraryDirectory`。

  然后只需从 @pf-ui/pf-ui-vue 引入模块即可，无需单独引入样式，等同于下面手动引入的方式。

  ```jsx
  // babel-plugin-import 会帮助你加载 JS 和 CSS
  import { DatePicker } from '@pf-ui/pf-ui-vue';
  ```

<!-- 下面两种方式都可以只加载用到的组件。

- 使用 [babel-plugin-import](https://github.com/ant-design/babel-plugin-import)（推荐）。

  ```jsx
  // .babelrc or babel-loader option
  {
    "plugins": [
      ["import", { "libraryName": "@pf-ui/pf-ui-vue", "libraryDirectory": "es", "style": "css" }] // `style: true` 会加载 less 文件
    ]
  }
  ```

  > 注意：webpack 1 无需设置 `libraryDirectory`。

  然后只需从 @pf-ui/pf-ui-vue 引入模块即可，无需单独引入样式。等同于下面手动引入的方式。

  ```jsx
  // babel-plugin-import 会帮助你加载 JS 和 CSS
  import { PfDatePicker } from '@pf-ui/pf-ui-vue';
  ```

- 手动引入

  ```jsx
  import DatePicker from '@pf-ui/pf-ui-vue/lib/date-picker'; // 加载 JS
  import '@pf-ui/pf-ui-vue/lib/date-picker/style/css'; // 加载 CSS
  // import '@pf-ui/pf-ui-vue/lib/date-picker/style';         // 加载 LESS
  ``` -->
