import type { App } from 'vue';
import Watermark from './watermark';
// TODO: 未知问题 导出失败
// export { WatermarkProps } from './watermark';

/* istanbul ignore next */
Watermark.install = function (app: App) {
  app.component(Watermark.name, Watermark);
  return app;
};
export default Watermark as typeof Watermark;