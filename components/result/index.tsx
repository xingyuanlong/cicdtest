import type { App, VNodeTypes, Plugin, ExtractPropTypes, PropType } from 'vue';
import { defineComponent, computed } from 'vue';
import PropTypes from '../_util/vue-types';
import CheckCircleFilled from '@ant-design/icons-vue/CheckCircleFilled';
import CloseCircleFilled from '@ant-design/icons-vue/CloseCircleFilled';
import ExclamationCircleFilled from '@ant-design/icons-vue/ExclamationCircleFilled';
import WarningFilled from '@ant-design/icons-vue/WarningFilled';
import useConfigInject from '../_util/hooks/useConfigInject';
import renderPfResult, { PfExceptionStatusType, PfExceptionMap } from './pfResult'
import noFound from './noFound';
import serverError from './serverError';
import unauthorized from './unauthorized';
import classNames from '../_util/classNames';

export const IconMap = {
  success: CheckCircleFilled,
  error: CloseCircleFilled,
  info: ExclamationCircleFilled,
  warning: WarningFilled,
};

export type ResultStatusType = PfExceptionStatusType | keyof typeof IconMap;

// ExceptionImageMap keys
const PfExceptionStatus = Object.keys(PfExceptionMap);

export const resultProps = () => ({
  prefixCls: String,
  icon: PropTypes.any,
  status: { type: [Number, String] as PropType<ResultStatusType>, default: 'info' },
  title: PropTypes.any,
  subTitle: PropTypes.any,
  extra: PropTypes.any,
});

export type ResultProps = Partial<ExtractPropTypes<ReturnType<typeof resultProps>>>;

const renderIcon = (prefixCls: string, { status, icon }) => {
  const IconComponent = IconMap[status];
  const iconNode = icon || <IconComponent />;
  return <div class={`${prefixCls}-icon`}>{iconNode}</div>;
};

const renderExtra = (prefixCls: string, extra: VNodeTypes) =>
  extra && <div class={`${prefixCls}-extra`}>{extra}</div>;

const Result = defineComponent({
  name: 'AResult',
  props: resultProps(),
  slots: ['title', 'subTitle', 'icon', 'extra'],
  setup(props, { slots }) {
    const { prefixCls, direction } = useConfigInject('result', props);
    const className = computed(() =>
      classNames(prefixCls.value, `${prefixCls.value}-${props.status}`, {
        [`${prefixCls.value}-rtl`]: direction.value === 'rtl',
      }),
    );
    return () => {
      const title = props.title ?? slots.title?.();
      const subTitle = props.subTitle ?? slots.subTitle?.();
      const icon = props.icon ?? slots.icon?.();
      const extra = props.extra ?? slots.extra?.();
      const pre = prefixCls.value;

      if (PfExceptionStatus.includes(`${props?.status}`)) {
        return renderPfResult(pre, { status: props?.status, title, subTitle, extra })
      }

      return (
        <div class={className.value}>
          {renderIcon(pre, { status: props.status, icon })}
          <div class={`${pre}-title`}>{title}</div>
          {subTitle && <div class={`${pre}-subtitle`}>{subTitle}</div>}
          {renderExtra(pre, extra)}
          {slots.default && <div class={`${pre}-content`}>{slots.default()}</div>}
        </div>
      );
    };
  },
});

/* add resource */
Result.PRESENTED_IMAGE_403 = PfExceptionMap[403];
Result.PRESENTED_IMAGE_404 = PfExceptionMap[404];
Result.PRESENTED_IMAGE_500 = PfExceptionMap[500];

/* istanbul ignore next */
Result.install = function (app: App) {
  app.component(Result.name, Result);
  return app;
};

export default Result as typeof Result &
  Plugin & {
    readonly PRESENTED_IMAGE_403: typeof unauthorized;
    readonly PRESENTED_IMAGE_404: typeof noFound;
    readonly PRESENTED_IMAGE_500: typeof serverError;
  };
