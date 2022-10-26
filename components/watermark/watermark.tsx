import type { PropType, ExtractPropTypes } from 'vue';
import { defineComponent, watchEffect, ref } from 'vue';
import useConfigInject from '../_util/hooks/useConfigInject';

function getRatio(context: any): number {
  if (!context) {
    return 1;
  }
  const backingStore =
    context.backingStorePixelRatio ||
    context.webkitBackingStorePixelRatio ||
    context.mozBackingStorePixelRatio ||
    context.msBackingStorePixelRatio ||
    context.oBackingStorePixelRatio ||
    context.backingStorePixelRatio ||
    1;
  return (window.devicePixelRatio || 1) / backingStore;
}

export const watermarkProps = () => ({
  cross: Boolean,
  fullscreen: Boolean,
  width: {
    type: Number,
    default: 32,
  },
  height: {
    type: Number,
    default: 32,
  },
  zIndex: {
    type: Number,
    default: 10,
  },
  xGap: {
    type: Number,
    default: 0,
  },
  yGap: {
    type: Number,
    default: 0,
  },
  yOffset: {
    type: Number,
    default: 0,
  },
  xOffset: {
    type: Number,
    default: 0,
  },
  rotate: {
    type: Number,
    default: 0,
  },
  image: String,
  imageOpacity: { type: Number, default: 1 },
  imageHeight: Number,
  imageWidth: Number,
  content: String,
  selectable: {
    type: Boolean,
    default: true,
  },
  fontSize: {
    type: Number,
    default: 14,
  },
  fontFamily: String,
  fontStyle: {
    type: String as PropType<'normal' | 'italic' | 'oblique' | `oblique ${number}deg`>,
    default: 'normal',
  },
  fontVariant: {
    type: String,
    default: '',
  },
  fontWeight: {
    type: Number,
    default: 400,
  },
  fontColor: {
    type: String,
    default: 'rgba(128, 128, 128, .3)',
  },
  fontStretch: {
    type: String,
    default: '',
  },
  lineHeight: {
    type: Number,
    default: 14,
  },
  globalRotate: {
    type: Number,
    default: 0,
  },
});

export type WatermarkProps = Partial<ExtractPropTypes<ReturnType<typeof watermarkProps>>>;

const Watermark = defineComponent({
  name: 'PfWatermark',
  props: watermarkProps(),
  setup(props, { slots }) {
    console.error('\n\nPFWatermark\n\n');
    const base64UrlRef = ref('');
    const canvas = window?.innerHeight ? document.createElement('canvas') : null;
    const ctx = canvas ? canvas.getContext('2d') : null;
    const fontsReadyRef = ref(false);
    watchEffect(() => {
      if (!canvas) return;
      void fontsReadyRef.value;
      const ratio = getRatio(ctx);
      const {
        xGap,
        yGap,
        width,
        height,
        yOffset,
        xOffset,
        rotate,
        image,
        content,
        fontColor,
        fontStyle,
        fontVariant,
        fontStretch,
        fontWeight,
        fontFamily,
        fontSize,
        lineHeight,
      } = props;
      const canvasWidth = (xGap + width) * ratio;
      const canvasHeight = (yGap + height) * ratio;
      const canvasOffsetLeft = xOffset * ratio;
      const canvasOffsetTop = yOffset * ratio;
      canvas.width = canvasWidth;
      canvas.height = canvasHeight;
      if (ctx) {
        ctx.translate(0, 0);
        // const markWidth = width * ratio
        // const markHeight = height * ratio
        ctx.rotate(rotate * (Math.PI / 180));
        if (image) {
          const img = new Image();
          img.crossOrigin = 'anonymous';
          img.referrerPolicy = 'no-referrer';
          img.src = image;
          img.onload = () => {
            ctx.globalAlpha = props.imageOpacity;
            const { imageWidth, imageHeight } = props;
            ctx.drawImage(
              img,
              canvasOffsetLeft,
              canvasOffsetTop,
              (props.imageWidth ||
                (imageHeight ? (img.width * imageHeight) / img.height : img.width)) * ratio,
              (props.imageHeight ||
                (imageWidth ? (img.height * imageWidth) / img.width : img.height)) * ratio,
            );
            base64UrlRef.value = canvas.toDataURL();
          };
        } else if (content) {
          ctx.font = `${fontStyle} ${fontVariant} ${fontWeight} ${fontStretch} ${
            fontSize * ratio
          }px/${lineHeight * ratio}px ${fontFamily || 'SimSun, sans-serif'}`;
          ctx.fillStyle = fontColor;
          ctx.fillText(content, canvasOffsetLeft, canvasOffsetTop + lineHeight * ratio);
          base64UrlRef.value = canvas.toDataURL();
        }
      } else {
        console.error('watermark', 'Canvas is not supported in the browser.');
      }
    });
    return () => {
      const { globalRotate, fullscreen, zIndex } = props;
      const { prefixCls } = useConfigInject('watermark', props);
      const mergedClsPrefix = prefixCls.value;
      const isFullScreenGlobalRotate = globalRotate !== 0 && fullscreen;
      const rotatedImageOffset = 'max(142vh, 142vw)';
      const watermarkNode = (
        <div
          class={[
            `${mergedClsPrefix}`,
            globalRotate !== 0 && `${mergedClsPrefix}-global-rotate`,
            fullscreen && `${mergedClsPrefix}-fullscreen`,
          ]}
          style={{
            transform: globalRotate
              ? `translateX(-50%) translateY(-50%) rotate(${globalRotate}deg)`
              : undefined,
            zIndex: isFullScreenGlobalRotate ? undefined : zIndex,
            backgroundSize: `${props.xGap + props.width}px`,
            backgroundPosition:
              globalRotate === 0
                ? props.cross
                  ? `${props.width / 2}px ${props.height / 2}px, 0 0`
                  : ''
                : props.cross
                ? `calc(${rotatedImageOffset} + ${
                    props.width / 2
                  }px) calc(${rotatedImageOffset} + ${
                    props.height / 2
                  }px), ${rotatedImageOffset} ${rotatedImageOffset}`
                : rotatedImageOffset,
            backgroundImage: props.cross
              ? `url(${base64UrlRef.value}), url(${base64UrlRef.value})`
              : `url(${base64UrlRef.value})`,
          }}
        />
      );
      console.error('watermarkNode', watermarkNode);
      if (props.fullscreen && !globalRotate) return watermarkNode;
      console.error('fullscreen', fullscreen);
      return (
        <div
          class={[
            `${mergedClsPrefix}-container`,
            globalRotate !== 0 && `${mergedClsPrefix}-container-global-rotate`,
            fullscreen && `${mergedClsPrefix}-container-fullscreen`,
            props.selectable && `${mergedClsPrefix}-container-selectable`,
          ]}
          style={{
            zIndex: isFullScreenGlobalRotate ? zIndex : undefined,
          }}
        >
          {slots.default?.()}
          {watermarkNode}
        </div>
      );
    };
  },
});

export default Watermark;
