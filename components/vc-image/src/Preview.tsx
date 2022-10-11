import {
  computed,
  defineComponent,
  onMounted,
  onUnmounted,
  reactive,
  ref,
  watch,
} from 'vue';
import type { VNode, PropType } from 'vue';

import classnames from '../../_util/classNames';
import Dialog from '../../vc-dialog';
import { type IDialogChildProps, dialogPropTypes } from '../../vc-dialog/IDialogPropTypes';
import { getOffset } from '../../vc-util/Dom/css';
import addEventListener from '../../vc-util/Dom/addEventListener';
import KeyCode from '../../_util/KeyCode';
import { warning } from '../../vc-util/warning';
import useFrameSetState from './hooks/useFrameSetState';
import getFixScaleEleTransPosition from './getFixScaleEleTransPosition';
import type { MouseEventHandler, WheelEventHandler } from '../../_util/EventInterface';
import PreviewOperations from './PreviewOperations';
import CloseFilled from '@pf-ui/pf-icons-vue/CloseFilled';

import { context } from './PreviewGroup';

export interface PreviewProps extends Omit<IDialogChildProps, 'onClose' | 'mask'> {
  onClose?: (e: Element) => void;
  src?: string;
  alt?: string;
  rootClassName?: string;
  icons?: {
    rotateLeft?: VNode;
    rotateRight?: VNode;
    zoomIn?: VNode;
    zoomOut?: VNode;
    close?: VNode;
    left?: VNode;
    right?: VNode;
  };
  minScale?: number;
  maxScale?: number;
}

const initialPosition = {
  x: 0,
  y: 0,
};

const ScaleRange = 0.08

export const previewProps = {
  ...dialogPropTypes(),
  src: String,
  alt: String,
  rootClassName: String,
  icons: {
    type: Object as PropType<PreviewProps['icons']>,
    default: () => ({} as PreviewProps['icons']),
  },
  minScale: {
    type: Number,
    default: 0.1
  },
  maxScale: {
    type: Number,
    default: 50
  }
};
const Preview = defineComponent({
  name: 'Preview',
  inheritAttrs: false,
  props: previewProps,
  emits: ['close', 'afterClose'],
  setup(props, { emit, attrs }) {

    const scale = ref(1);
    const rotate = ref(0);
    const [position, setPosition] = useFrameSetState<{
      x: number;
      y: number;
    }>(initialPosition);

    const onClose = () => emit('close');
    const imgRef = ref<HTMLImageElement>();
    const originPositionRef = reactive<{
      originX: number;
      originY: number;
      deltaX: number;
      deltaY: number;
    }>({
      originX: 0,
      originY: 0,
      deltaX: 0,
      deltaY: 0,
    });
    const isMoving = ref(false);
    const groupContext = context.inject();
    const { previewUrls, current, isPreviewGroup, setCurrent } = groupContext;
    const previewGroupCount = computed(() => previewUrls.value.size);
    const previewUrlsKeys = computed(() => Array.from(previewUrls.value.keys()));
    const currentPreviewIndex = computed(() => previewUrlsKeys.value.indexOf(current.value));
    const combinationSrc = computed(() => {
      return isPreviewGroup.value ? previewUrls.value.get(current.value) : props.src;
    });
    const showLeftOrRightSwitches = computed(
      () => isPreviewGroup.value && previewGroupCount.value > 1,
    );
    const lastWheelZoomDirection = ref({ wheelDirection: 0 });
    const rotateMap = reactive({});
    const rotateSaveDisabled = computed(() => rotate.value % 360 === (rotateMap[combinationSrc.value] || 0));

    const onAfterClose = () => {
      scale.value = 1;
      rotate.value = 0;
      setPosition(initialPosition);
      emit('afterClose');
    };

    const setScale = (value: number) => {
      scale.value = value;
      setPosition(initialPosition);
    };

    const onZoomIn = () => {
      if (scale.value < props.maxScale) {
        const _scale = scale.value + ScaleRange;
        scale.value = _scale > props.maxScale ? props.maxScale : _scale;
      }
      setPosition(initialPosition);
    };
    const onZoomOut = () => {
      if (scale.value > props.minScale) {
        const _scale = scale.value - ScaleRange;
        scale.value = _scale > props.minScale ? _scale : props.minScale;
      }
      setPosition(initialPosition);
    };

    const onRotateRight = () => {
      rotate.value += 90;
    };

    const onRotateLeft = () => {
      rotate.value -= 90;
    };

    const initRotateValue = () => {
      rotate.value = rotateMap[combinationSrc.value] || 0
    };

    const onRotateSave = () => {
      const rotateValue = rotate.value % 360;
      rotateMap[combinationSrc.value] = rotateValue;
    };

    const handleSwitchLeft = () => {
      const nextIndex = currentPreviewIndex.value > 0 ? currentPreviewIndex.value - 1 : previewUrlsKeys.value.length - 1;
      setCurrent(previewUrlsKeys.value[nextIndex]);
      initRotateValue();
    };

    const handleSwitchRight = () => {
      const nextIndex = currentPreviewIndex.value < previewGroupCount.value - 1 ? currentPreviewIndex.value + 1 : 0;
      setCurrent(previewUrlsKeys.value[nextIndex]);
      initRotateValue();
    };

    const wrapClassName = classnames({
      [`${props.prefixCls}-moving`]: isMoving.value,
    });

    const onMouseUp: MouseEventHandler = () => {
      if (props.visible && isMoving.value) {
        const width = imgRef.value.offsetWidth * scale.value;
        const height = imgRef.value.offsetHeight * scale.value;
        const { left, top } = getOffset(imgRef.value);
        const isRotate = rotate.value % 180 !== 0;

        isMoving.value = false;

        const fixState = getFixScaleEleTransPosition(
          isRotate ? height : width,
          isRotate ? width : height,
          left,
          top,
        );
        if (fixState) {
          setPosition({ ...fixState });
        }
      }
    };

    const onMouseDown: MouseEventHandler = event => {
      // Only allow main button
      if (event.button !== 0) return;
      event.preventDefault();
      // Without this mask close will abnormal
      event.stopPropagation();
      originPositionRef.deltaX = event.pageX - position.x;
      originPositionRef.deltaY = event.pageY - position.y;
      originPositionRef.originX = position.x;
      originPositionRef.originY = position.y;
      isMoving.value = true;
    };

    const onMouseMove: MouseEventHandler = event => {
      if (props.visible && isMoving.value) {
        setPosition({
          x: event.pageX - originPositionRef.deltaX,
          y: event.pageY - originPositionRef.deltaY,
        });
      }
    };

    const onWheelMove: WheelEventHandler = event => {
      if (!props.visible) return;
      event.preventDefault();
      const wheelDirection = event.deltaY;
      lastWheelZoomDirection.value = { wheelDirection };
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (!props.visible || !showLeftOrRightSwitches.value) return;

      event.preventDefault();
      if (event.keyCode === KeyCode.LEFT) {
        handleSwitchLeft();
      } else if (event.keyCode === KeyCode.RIGHT) {
        handleSwitchRight();
      }
    };

    const onDoubleClick = () => {
      if (props.visible) {
        if (scale.value !== 1) {
          scale.value = 1;
        }
        if (position.x !== initialPosition.x || position.y !== initialPosition.y) {
          setPosition(initialPosition);
        }
      }
    };

    let removeListeners = () => {};
    onMounted(() => {
      watch(
        [() => props.visible, isMoving],
        ([newVisible]) => {
          newVisible && initRotateValue();

          removeListeners();
          let onTopMouseUpListener: { remove: any };
          let onTopMouseMoveListener: { remove: any };

          const onMouseUpListener = addEventListener(window, 'mouseup', onMouseUp, false);
          const onMouseMoveListener = addEventListener(window, 'mousemove', onMouseMove, false);
          const onScrollWheelListener = addEventListener(window, 'wheel', onWheelMove, {
            passive: false,
          });
          const onKeyDownListener = addEventListener(window, 'keydown', onKeyDown, false);

          try {
            // Resolve if in iframe lost event
            /* istanbul ignore next */
            if (window.top !== window.self) {
              onTopMouseUpListener = addEventListener(window.top, 'mouseup', onMouseUp, false);
              onTopMouseMoveListener = addEventListener(
                window.top,
                'mousemove',
                onMouseMove,
                false,
              );
            }
          } catch (error) {
            /* istanbul ignore next */
            warning(false, `[vc-image] ${error}`);
          }

          removeListeners = () => {
            onMouseUpListener.remove();
            onMouseMoveListener.remove();
            onScrollWheelListener.remove();
            onKeyDownListener.remove();

            /* istanbul ignore next */
            if (onTopMouseUpListener) onTopMouseUpListener.remove();
            /* istanbul ignore next */
            if (onTopMouseMoveListener) onTopMouseMoveListener.remove();
          };
        },
        { flush: 'post', immediate: true },
      );
      watch([lastWheelZoomDirection], () => {
        const { wheelDirection } = lastWheelZoomDirection.value;
        if (wheelDirection > 0) {
          onZoomOut();
        } else if (wheelDirection < 0) {
          onZoomIn();
        }
      });
    });
    onUnmounted(() => {
      removeListeners();
    });

    return () => {
      const { visible, prefixCls, rootClassName } = props;

      return (
        <Dialog
          {...attrs}
          transitionName="zoom"
          maskTransitionName="fade"
          closable={false}
          maskClosable={false}
          keyboard
          prefixCls={prefixCls}
          onClose={onClose}
          afterClose={onAfterClose}
          visible={visible}
          wrapClassName={wrapClassName}
          rootClassName={rootClassName}
          getContainer={props.getContainer}
        >
          <div class={`${props.prefixCls}-close`} onClick={onClose}>
            <CloseFilled class={`${props.prefixCls}-close-icon`} />
          </div>
          <div
            class={`${props.prefixCls}-img-wrapper`}
            style={{
              transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
            }}
          >
            <img
              onMousedown={onMouseDown}
              onDblclick={onDoubleClick}
              ref={imgRef}
              class={`${props.prefixCls}-img`}
              src={combinationSrc.value}
              alt={props.alt}
              style={{
                transform: `scale3d(${scale.value}, ${scale.value}, 1) rotate(${rotate.value}deg)`,
              }}
            />
          </div>
          <PreviewOperations
            prefixCls={props.prefixCls}
            onScaleSelect={setScale}
            onZoomIn={onZoomIn}
            onZoomOut={onZoomOut}
            onRotateRight={onRotateRight}
            onRotateLeft={onRotateLeft}
            onRotateSave={onRotateSave}
            onSwitchLeft={handleSwitchLeft}
            onSwitchRight={handleSwitchRight}
            rotateSaveDisabled={rotateSaveDisabled.value}
            isGroup={showLeftOrRightSwitches.value}
            groupCount={previewGroupCount.value}
            currentIndex={currentPreviewIndex.value}
          />
        </Dialog>
      );
    };
  },
});

export default Preview;
