import useConfigInject from '../_util/hooks/useConfigInject';
import NoResultTwoTone from 'pf-icons-vue/NoResultTwoTone'

const Empty = () => {
  const { getPrefixCls } = useConfigInject('empty', {});
  const prefixCls = getPrefixCls('empty-img-default');

  return (
    <NoResultTwoTone class={prefixCls} />
  );
};

Empty.PRESENTED_IMAGE_DEFAULT = true;

export default Empty;
