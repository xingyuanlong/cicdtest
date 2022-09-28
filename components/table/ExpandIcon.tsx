import classNames from '../_util/classNames';
import type { TableLocale } from './interface';
import CollapseFilled from '@pf-ui/pf-icons-vue/CollapseFilled'

interface DefaultExpandIconProps<RecordType> {
  prefixCls: string;
  onExpand: (record: RecordType, e: MouseEvent) => void;
  record: RecordType;
  expanded: boolean;
  expandable: boolean;
}

function renderExpandIcon(locale: TableLocale) {
  return function expandIcon<RecordType>({
    prefixCls,
    onExpand,
    record,
    expanded,
    expandable,
  }: DefaultExpandIconProps<RecordType>) {
    const iconPrefix = `${prefixCls}-row-expand-icon`;

    return (
      <button
        type="button"
        onClick={e => {
          onExpand(record, e!);
          e.stopPropagation();
        }}
        class={classNames(iconPrefix, {
          [`${iconPrefix}-spaced`]: !expandable,
          [`${iconPrefix}-expanded`]: expandable && expanded,
          [`${iconPrefix}-collapsed`]: expandable && !expanded,
        })}
        aria-label={expanded ? locale.collapse : locale.expand}
      >
        <CollapseFilled />
      </button>
    );
  };
}

export default renderExpandIcon;
