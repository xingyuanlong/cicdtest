import { defineComponent } from 'vue'
import initDefaultProps from '../_util/props-util/initDefaultProps'
import MoreFilled from '@pf-ui/pf-icons-vue/MoreFilled'
import classNames from '../_util/classNames'
import useConfigInject from '../_util/hooks/useConfigInject'

export const treeOperationIconProps = () => ({
  disabled: { type: Boolean, default: undefined },
  visible: { type: Boolean, default: undefined },
  prefixCls: String
})

// todo: icon改成slot
export default defineComponent({
  name: 'PfTreeOperationIcon',
  props: initDefaultProps(treeOperationIconProps(), {
    disabled: false,
    visible: false
  }),
  setup(props) {
    const { prefixCls } = useConfigInject('tree', props)

    return () => (
      <MoreFilled class={classNames(
        `${prefixCls.value}-operation`,
        { [`${prefixCls.value}-operation-disabled`]: props.disabled },
        {[`${prefixCls.value}-operation-visible`]: props.visible},
        )}
      />
    )
  }
})
