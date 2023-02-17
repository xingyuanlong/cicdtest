import { defineComponent } from 'vue'
import ToolTip, { tooltipProps,tooltipDefaultProps } from './Tooltip'
import { initDefaultProps } from '../_util/props-util'
import useConfigInject from '../_util/hooks/useConfigInject'
import classNames from '../_util/classNames'

export default defineComponent({
  name: 'PfTooltipTableEllipsis',
  inheritAttrs: false,
  props: initDefaultProps(tooltipProps(), tooltipDefaultProps()),
  slots: ['title'],
  setup(props, { slots }) {
    const { prefixCls, rootPrefixCls } = useConfigInject('tooltip', props)

    return () => (
      <ToolTip
        placement="top"
        title="1"
        {...props}
        overlayClassName={classNames(`${prefixCls.value}-table-ellipsis`, props.overlayClassName)}
        v-slots={{
          ...slots,
          default: () => (
            <div class={classNames(`${prefixCls.value}-table-ellipsis-container`, `${rootPrefixCls.value}-table-cell-ellipsis`)}>
              {slots?.default()}
            </div>
          ),
        }}
      >
      </ToolTip>
    )
  }
})