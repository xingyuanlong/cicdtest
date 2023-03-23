import classNames from '../_util/classNames';
import type { PropType } from 'vue';
import { isValidElement } from '../_util/props-util';
import { cloneElement } from '../_util/vnode';
import Input from './Input';
import SearchOutlined from '@pf-ui/pf-icons-vue/SearchOutlined';
import type { InputProps } from './inputProps';
import inputProps from './inputProps';
import { computed, defineComponent, ref, nextTick } from 'vue';
import useConfigInject from '../_util/hooks/useConfigInject';
import omit from '../_util/omit';
import type { ChangeEvent, FocusEventHandler } from '../_util/EventInterface';

const ActionMap = {
  click: 'onClick',
  hover: 'onMouseover',
};
const defaultIconRender = () => <SearchOutlined />;
export default defineComponent({
  name: 'PfSearchInput',
  inheritAttrs: false,
  props: {
    ...inputProps(),
    prefixCls: String,
    inputPrefixCls: String,
    action: { type: String, default: 'click' },
    visibilityToggle: { type: Boolean, default: true },
    iconRender: Function,
    onSearch: {
      type: Function as PropType<
        (value: string, event?: ChangeEvent | MouseEvent | KeyboardEvent) => void
      >,
    },
  },
  setup(props, { slots, attrs, expose, emit }) {
    const visible = ref(false);
    const showClear = ref(false);
    const clickAction = (e: MouseEvent | KeyboardEvent) => {
      emit('search', inputRef.value?.stateValue, e);
    };
    const changeAction =  (e: ChangeEvent) => {
      emit('change', e);
      //@ts-ignore
      if (e?.target?.value) {
        showClear.value = true;
      } else {
        // 无值时, 保持搜索
        showClear.value = false;
      }
    };
    const inputRef = ref();
    const focus = () => {
      inputRef.value?.focus();
    };
    const blur = () => {
      inputRef.value?.blur();
    };
    expose({
      focus,
      blur,
    });
    const onFocus: FocusEventHandler = e => {
      const { onFocus } = props;
      onFocus?.(e);
      nextTick(() => {
         //@ts-ignore
         if (e?.target?.value) {
          showClear.value = true;
        } else {
          // 无值时, 保持搜索
          showClear.value = false;
        }
      });
    };
    const onBlur: FocusEventHandler = e => {
      const { onBlur } = props;
      onBlur?.(e);
      nextTick(() => {
        //@ts-ignore
        if (e?.target?.value) {
          showClear.value = true;
        } else {
          // 无值时, 保持搜索
          showClear.value = false;
        }
      });
    };
    const getIcon = (prefixCls: string) => {
      const { action, iconRender = slots.iconRender || defaultIconRender } = props;
      const iconTrigger = ActionMap[action!] || '';
      const icon = iconRender(visible.value);
      const iconProps = {
        [iconTrigger]: clickAction,
        class: `${prefixCls}-icon`,
        key: 'passwordIcon',
        onMousedown: (e: MouseEvent) => {
          // Prevent focused state lost
          // https://github.com/ant-design/ant-design/issues/15173
          e.preventDefault();
        },
        onMouseup: (e: MouseEvent) => {
          // Prevent caret position change
          // https://github.com/ant-design/ant-design/issues/23524
          e.preventDefault();
        },
      };
      return cloneElement(isValidElement(icon) ? icon : <span>{icon}</span>, iconProps);
    };
    const { prefixCls, getPrefixCls } = useConfigInject('search-input', props);
    const inputPrefixCls = computed(() => getPrefixCls('input', props.inputPrefixCls));
    const renderSearchInput = () => {
      const { size, visibilityToggle, ...restProps } = props;

      const suffixIcon = visibilityToggle && !showClear.value && getIcon(prefixCls.value);
      const inputClassName = classNames(prefixCls.value, attrs.class, {
        [`${prefixCls.value}-${size}`]: !!size,
      });

      const omittedProps = {
        ...omit(restProps, ['suffix', 'iconRender', 'action']),
        ...attrs,
        type: 'text',
        class: inputClassName,
        prefixCls: inputPrefixCls.value,
        suffix: suffixIcon,
        onFocus,
        onBlur,
      } as InputProps;

      if (size) {
        omittedProps.size = size;
      }

      return (
        <Input
          ref={inputRef}
          {...omittedProps}
          v-slots={slots}
          allowClear={showClear.value}
          onPressEnter={clickAction}
          onChange={changeAction}
        />
      );
    };
    return () => {
      return renderSearchInput();
    };
  },
});
