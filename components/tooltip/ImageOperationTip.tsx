import { defineComponent } from 'vue'
import Tooltip from './Tooltip'
import useConfigInject from '../_util/hooks/useConfigInject'

export interface ImageOperationTipProps {
  title?: string
}

const imageOperationTipProps = () => ({
  title: String
})

const ImageOperationTip = defineComponent<ImageOperationTipProps>({
  name: 'ImageOperationTip',
  props: imageOperationTipProps() as any,
  setup(props, { slots }) {
    const { prefixCls } = useConfigInject('tooltip', props);
    return () => (
      <Tooltip
        placement="bottom"
        v-slots={{
          title: props.title
        }}
        overlayClassName={`${prefixCls.value}-image-operation`}
      >
        {slots.default?.()}
      </Tooltip>
    )
  }
})

export default ImageOperationTip