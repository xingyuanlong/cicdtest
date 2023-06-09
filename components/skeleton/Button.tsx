import type { ExtractPropTypes, PropType } from 'vue';
import { computed, defineComponent } from 'vue';
import classNames from '../_util/classNames';
import useConfigInject from '../_util/hooks/useConfigInject';
import { initDefaultProps } from '../_util/props-util';
import Element, { skeletonElementProps } from './Element';

export const skeletonButtonProps = () => {
  return {
    ...skeletonElementProps(),
    size: String as PropType<'large' | 'small' | 'default'>,
    block: Boolean,
  };
};

export type SkeletonButtonProps = Partial<ExtractPropTypes<ReturnType<typeof skeletonButtonProps>>>;

const SkeletonButton = defineComponent({
  name: 'PfSkeletonButton',
  props: initDefaultProps(skeletonButtonProps(), {
    size: 'default',
  }),
  setup(props) {
    const { prefixCls } = useConfigInject('skeleton', props);
    const cls = computed(() =>
      classNames(prefixCls.value, `${prefixCls.value}-element`, {
        [`${prefixCls.value}-active`]: props.active,
        [`${prefixCls.value}-block`]: props.block,
      }),
    );
    return () => {
      return (
        <div class={cls.value}>
          <Element {...props} prefixCls={`${prefixCls.value}-button`} />
        </div>
      );
    };
  },
});

export default SkeletonButton;
