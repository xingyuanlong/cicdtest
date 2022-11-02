import classNames from '../_util/classNames';
import type { TableLocale } from './interface';
import CollapseFilled from '@pf-ui/pf-icons-vue/CollapseFilled'
import ArrowDownFilled from '@pf-ui/pf-icons-vue/ArrowDownFilled'

interface DefaultExpandIconProps<RecordType> {
  prefixCls: string;
  onExpand: (record: RecordType, e: MouseEvent) => void;
  record: RecordType;
  expanded: boolean;
  expandable: boolean;
}

function renderExpandIcon(locale: TableLocale, showCollapse: boolean) {
  return function expandIcon<RecordType>({
    prefixCls,
    onExpand,
    record,
    expanded,
    expandable
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
          [`${iconPrefix}-expanded`]: expandable && expanded && showCollapse,
          [`${iconPrefix}-collapsed`]: expandable && !expanded,
          [`${iconPrefix}-transform-90deg`]: expandable && expanded && !showCollapse,
        })}
        aria-label={expanded ? locale.collapse : locale.expand}
      >
        {showCollapse ? <CollapseFilled /> : <ArrowDownFilled rotate={90} /> }
      </button>
    );
  };
}

export default renderExpandIcon;
