import { defineComponent } from 'vue'
import ToolTip, { tooltipProps,tooltipDefaultProps } from './Tooltip'
import { initDefaultProps } from '../_util/props-util'
import useConfigInject from '../_util/hooks/useConfigInject'
import classNames from '../_util/classNames'

export default defineComponent({
  name: 'PfTooltipEllipsis',
  inheritAttrs: false,
  props: initDefaultProps(tooltipProps(), tooltipDefaultProps()),
  slots: ['title'],
  setup(props, { slots }) {
    const { prefixCls } = useConfigInject('tooltip', props)

    return () => (
      <ToolTip
        placement="top"
        {...props}
        overlayClassName={classNames(`${prefixCls.value}-ellipsis`, props.overlayClassName)}
        v-slots={{
          ...slots,
          default: () => (
            <div class={`${prefixCls.value}-ellipsis-container`}>
              {slots?.default()}
            </div>
          ),
        }}
      >
      </ToolTip>
    )
  }
})