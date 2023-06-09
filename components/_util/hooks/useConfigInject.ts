import type { RequiredMark } from '../../form/Form';
import type { ComputedRef, UnwrapRef } from 'vue';
import { computed, inject } from 'vue';
import type { ConfigProviderProps, CSPConfig, Direction, SizeType } from '../../config-provider';
import { defaultConfigProvider } from '../../config-provider';
import type { VueNode } from '../type';
import type { ValidateMessages } from '../../form/interface';
import { configProviderSymbol } from '../../_util/globalSymbol';

export default (
  name: string,
  props: Record<any, any>,
): {
  configProvider: UnwrapRef<ConfigProviderProps>;
  prefixCls: ComputedRef<string>;
  rootPrefixCls: ComputedRef<string>;
  direction: ComputedRef<Direction>;
  size: ComputedRef<SizeType>;
  getTargetContainer: ComputedRef<() => HTMLElement>;
  space: ComputedRef<{ size: SizeType | number }>;
  pageHeader: ComputedRef<{ ghost: boolean }>;
  form?: ComputedRef<{
    requiredMark?: RequiredMark;
    colon?: boolean;
    validateMessages?: ValidateMessages;
  }>;
  autoInsertSpaceInButton: ComputedRef<boolean>;
  renderEmpty?: ComputedRef<(componentName?: string) => VueNode>;
  virtual: ComputedRef<boolean>;
  dropdownMatchSelectWidth: ComputedRef<boolean | number>;
  getPopupContainer: ComputedRef<ConfigProviderProps['getPopupContainer']>;
  getPrefixCls: ConfigProviderProps['getPrefixCls'];
  autocomplete: ComputedRef<string>;
  csp: ComputedRef<CSPConfig>;
} => {
  const configProvider = inject<UnwrapRef<ConfigProviderProps>>(
    configProviderSymbol,
    defaultConfigProvider,
  );
  const prefixCls = computed(() => configProvider.getPrefixCls(name, props.prefixCls));
  // const prefixCls = computed(() => defaultConfigProvider.getPrefixCls(name, props.prefixCls));
  const direction = computed(() => props.direction ?? configProvider.direction);
  const rootPrefixCls = computed(() => configProvider.getPrefixCls());
  // const rootPrefixCls =  computed(() => defaultConfigProvider.getPrefixCls());
  const autoInsertSpaceInButton = computed(() => configProvider.autoInsertSpaceInButton);
  const renderEmpty = computed(() => configProvider.renderEmpty);
  const space = computed(() => configProvider.space);
  const pageHeader = computed(() => configProvider.pageHeader);
  const form = computed(() => configProvider.form);
  const getTargetContainer = computed(
    () => props.getTargetContainer || configProvider.getTargetContainer,
  );
  const getPopupContainer = computed(
    () => props.getPopupContainer || configProvider.getPopupContainer,
  );

  const dropdownMatchSelectWidth = computed<boolean | number>(
    () => props.dropdownMatchSelectWidth ?? configProvider.dropdownMatchSelectWidth,
  );
  const virtual = computed(
    () =>
      (props.virtual === undefined ? configProvider.virtual !== false : props.virtual !== false) &&
      dropdownMatchSelectWidth.value !== false,
  );
  const size = computed(() => props.size || configProvider.componentSize);
  const autocomplete = computed(() => props.autocomplete || configProvider.input?.autocomplete);
  const csp = computed(() => configProvider.csp);
  return {
    configProvider,
    prefixCls,
    direction,
    size,
    getTargetContainer,
    getPopupContainer,
    space,
    pageHeader,
    form,
    autoInsertSpaceInButton,
    renderEmpty,
    virtual,
    dropdownMatchSelectWidth,
    rootPrefixCls,
    getPrefixCls: configProvider.getPrefixCls,
    autocomplete,
    csp,
  };
};
