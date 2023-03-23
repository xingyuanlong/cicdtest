import ToolTip, { tooltipProps } from './Tooltip';
import TooltipEllipsis from './PfTooltipEllipsis';
import type { App } from 'vue';

export type {
  TooltipProps,
  AdjustOverflow,
  PlacementsConfig,
  TooltipAlignConfig,
  TooltipPlacement,
} from './Tooltip';

export { tooltipProps, TooltipEllipsis };

ToolTip.TooltipEllipsis = TooltipEllipsis;

export default Object.assign(ToolTip, {
  install: (app: App) => {
    app.component(ToolTip.name, ToolTip);
    app.component(TooltipEllipsis.name, TooltipEllipsis);
    return app;
  },
});
