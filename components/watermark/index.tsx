import type { App } from 'vue';
import Watermark from './watermark';
export { watermarkProps } from './watermark';
export type { WatermarkProps } from './watermark';

/* istanbul ignore next */
Watermark.install = function (app: App) {
  app.component(Watermark.name, Watermark);
  return app;
};
export default Watermark as typeof Watermark;