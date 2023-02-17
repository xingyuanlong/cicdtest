import ToolTip, { tooltipProps } from './Tooltip';
import TooltipTableEllipsis from './TooltipTableEllipsis';
import type { App } from 'vue';

export type {
  TooltipProps,
  AdjustOverflow,
  PlacementsConfig,
  TooltipAlignConfig,
  TooltipPlacement,
} from './Tooltip';

export { tooltipProps };

export default Object.assign(ToolTip, {
  install: (app: App) => {
    app.component(ToolTip.name, ToolTip);
    app.component(TooltipTableEllipsis.name, TooltipTableEllipsis);
    return app;
  },
});
