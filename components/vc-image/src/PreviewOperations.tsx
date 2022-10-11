import {
  defineComponent,
  PropType
} from 'vue'
import { PreviewProps } from './Preview'
import Select from '../../select'
import ArrowLeftOutlined from '@pf-ui/pf-icons-vue/ArrowLeftOutlined'
import ArrowRightOutlined from '@pf-ui/pf-icons-vue/ArrowRightOutlined'
import AddFilled from '@pf-ui/pf-icons-vue/AddFilled'
import MinusOutlined from '@pf-ui/pf-icons-vue/MinusOutlined'
import OneToOneOutlined from '@pf-ui/pf-icons-vue/OneToOneOutlined'
import RotateLeftOutlined from '@pf-ui/pf-icons-vue/RotateLeftOutlined'
import RotateRightOutlined from '@pf-ui/pf-icons-vue/RotateRightOutlined'
import Button from '../../button'
import message from '../../message'

export interface PreviewOperationsProps extends Pick<PreviewProps, 'onClose' | 'prefixCls'> {
  onRotateRight?: () => void
  onRotateLeft?: () => void
  onScaleSelect?: (value: number) => void
  onRotateSave?: () => void
  onZoomIn?: () => void
  onZoomOut?: () => void
  onSwitchLeft?: () => void
  onSwitchRight?: () => void
  rotateSaveDisabled?: boolean
  isGroup?: boolean
  groupCount?: number
  currentIndex?: number
}


export const previewOperationsProps = {
  prefixCls: String,
  onClose: Function as PropType<(e: MouseEvent | KeyboardEvent) => void>,
  onRotateRight: Function as PropType<() => void>,
  onRotateLeft: Function as PropType<() => void>,
  onScaleSelect: Function as PropType<(value: number) => void>,
  onRotateSave: Function as PropType<() => void>,
  onZoomIn: Function as PropType<() => void>,
  onZoomOut: Function as PropType<() => void>,
  onSwitchLeft: Function as PropType<() => void>,
  onSwitchRight: Function as PropType<() => void>,
  rotateSaveDisabled: Boolean,
  isGroup: Boolean,
  groupCount: Number,
  currentIndex: Number
}

const ScaleOptions = [50, 100, 150, 200, 250, 300].map(v => ({
  label: `${v}%`,
  value: v
}))

const PreviewOperations = defineComponent({
  name: 'PreviewOperations',
  props: previewOperationsProps,
  setup(props) {
    const handleSelect = (value: number) => {
      props.onScaleSelect(value / 100)
    }

    const handleReset = () => {
      props.onScaleSelect(1)
    }

    const handleRotateSave = () => {
      message.success('保存成功')
      props.onRotateSave()
    }

    return () => {
      const {
        prefixCls,
        onZoomIn,
        onZoomOut,
        onRotateRight,
        onRotateLeft,
        onSwitchLeft,
        onSwitchRight,
        isGroup,
        groupCount,
        currentIndex
      } = props
      const _prefixCls = `${prefixCls}-operations`

      return (
        <div class={_prefixCls}>
          {
            isGroup && (
              <>
                <ArrowLeftOutlined class={`${_prefixCls}-icon`} onClick={onSwitchLeft} />
                <ArrowRightOutlined class={`${_prefixCls}-icon ${_prefixCls}-margin`} onClick={onSwitchRight} />
                <div class={`${_prefixCls}-group-count`}>{`${currentIndex + 1} / ${groupCount} 页`}</div>
                <div class={`${_prefixCls}-divide`}></div>
              </>
            )
          }
          <AddFilled class={`${_prefixCls}-icon ${_prefixCls}-mr`} onClick={onZoomIn} />
          <MinusOutlined class={`${_prefixCls}-icon`} onClick={onZoomOut} />
          <OneToOneOutlined class={`${_prefixCls}-icon ${_prefixCls}-margin`} onClick={handleReset} />
          <Select
            class={`${_prefixCls}-select`}
            options={ScaleOptions}
            getPopupContainer={triggerNode => triggerNode.parentNode}
            onChange={handleSelect}
            defaultValue={100}
          />
          <div class={`${_prefixCls}-divide`}></div>
          <RotateLeftOutlined class={`${_prefixCls}-icon ${_prefixCls}-mr`} onClick={onRotateRight} />
          <RotateRightOutlined class={`${_prefixCls}-icon`} onClick={onRotateLeft} />
          <Button
            class={`${_prefixCls}-button`} onClick={handleRotateSave}
            disabled={props.rotateSaveDisabled}
          >保存</Button>
        </div>
      )
    }
  }
})

export default PreviewOperations