import type { App } from 'vue';

import * as components from './components';
import { default as version } from './version';
export * from './components';

export const install = function (app: App) {
  Object.keys(components).forEach(key => {
    const component = components[key];
    if (component.install) {
      app.use(component);
    }
  });

  app.config.globalProperties.$message = components.Pfmessage;
  app.config.globalProperties.$notification = components.notification;
  app.config.globalProperties.$info = components.PfModal.info;
  app.config.globalProperties.$success = components.PfModal.success;
  app.config.globalProperties.$error = components.PfModal.error;
  app.config.globalProperties.$warning = components.PfModal.warning;
  app.config.globalProperties.$confirm = components.PfModal.confirm;
  app.config.globalProperties.$destroyAll = components.PfModal.destroyAll;
  return app;
};

export { version };

export default {
  version,
  install,
};
