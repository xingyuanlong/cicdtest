import { defineComponent, nextTick } from 'vue';
import LoadingOutlined from '@ant-design/icons-vue/LoadingOutlined';
import Transition from '../_util/transition';
const getCollapsedWidth = (node: HTMLSpanElement) => {
  if (node) {
    node.style.width = '0px';
    node.style.opacity = '0';
    node.style.transform = 'scale(0)';
  }
};
const getRealWidth = (node: HTMLSpanElement) => {
  nextTick(() => {
    if (node) {
      node.style.width = `${node.scrollWidth}px`;
      node.style.opacity = '1';
      node.style.transform = 'scale(1)';
    }
  });
};
const resetStyle = (node: HTMLSpanElement) => {
  if (node && node.style) {
    node.style.width = null;
    node.style.opacity = null;
    node.style.transform = null;
  }
};

function DottedLoading(props, context) {
  const { prefixCls } = props
  return (
    <span class={`${prefixCls}-loading-dotted`}>...</span>
  )
}

export default defineComponent({
  name: 'LoadingIcon',
  props: {
    prefixCls: String,
    loading: [Boolean, Object],
    existIcon: Boolean,
    dotted: Boolean
  },
  setup(props) {
    return () => {
      const { existIcon, prefixCls, loading, dotted } = props;
      if (existIcon) {
        return (
          <span class={`${prefixCls}-loading-icon`}>
           { dotted ? <DottedLoading prefixCls={prefixCls} /> : <LoadingOutlined /> }
          </span>
        );
      }
      const visible = !!loading;
      return (
        <Transition
          name={`${prefixCls}-loading-icon-motion`}
          onBeforeEnter={getCollapsedWidth}
          onEnter={getRealWidth}
          onAfterEnter={resetStyle}
          onBeforeLeave={getRealWidth}
          onLeave={(node: HTMLSpanElement) => {
            setTimeout(() => {
              getCollapsedWidth(node);
            });
          }}
          onAfterLeave={resetStyle}
        >
          {visible ? (
            <span class={`${prefixCls}-loading-icon`}>
              { dotted ? <DottedLoading prefixCls={prefixCls} /> : <LoadingOutlined /> }
            </span>
          ) : null}
        </Transition>
      );
    };
  },
});
