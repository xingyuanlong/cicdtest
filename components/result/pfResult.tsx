import noFound from './noFound';
import serverError from './serverError';
import unauthorized, { UnauthorizedTitle } from './unauthorized';
import empty from './empty';
import noResult, { NoResultTitle } from './noResult';
import noNetwork, { NoNetworkTitle } from './noNetwork';

export type PfExceptionStatusType =  403 | 404 | 500 | '403' | '404' | '500' | 'unauthorized' | 'empty' | 'noResult' | 'noNetwork';

export const PfExceptionMap = {
  '404': noFound,
  '500': serverError,
  '403': unauthorized,
  empty,
  noResult,
  noNetwork
};

const DefaultPfResultProps =  {
  '404': {
    subTitle: '服务器查询不到信息'
  },
  '500': {
    subTitle: '非常抱歉，您访问的页面没有找到...'
  },
  '403': {
    title: <UnauthorizedTitle />,
    subTitle: '非常抱歉，您没有权限访问此页面...'
  },
  empty: {
    subTitle: '无数据'
  },
  noResult: {
    title: <NoResultTitle />,
    subTitle: '没有相关的搜索结果，换个关键字吧'
  },
  noNetwork: {
    title: <NoNetworkTitle />,
    subTitle: '该星球无信号，请检查网络连接！'
  }
}

const RenderPfResult = (prefixCls: string,  { status, title, subTitle, extra }) => {
  const defaultProps = DefaultPfResultProps[`${status}`]
  const _prefixCls = `${prefixCls}-pf`
  const SVGComponent = PfExceptionMap[status]
  const _title = title || defaultProps?.title
  const _subTitle = subTitle || defaultProps?.subTitle
  const _extra = extra || defaultProps?.extra
  console.log('_extra', _extra)

  return (
    <div class={_prefixCls}>
      <SVGComponent />
      <div class={`${_prefixCls}-content`}>
        {_title && <div class={`${_prefixCls}-title`} style={{ marginBottom: (_subTitle || _extra) ? '16px' : '0' }}>{_title}</div>}
        {_subTitle && <div class={`${_prefixCls}-subtitle`} style={{ marginBottom: _extra ? '14px' : '0' }}>{_subTitle}</div>}
        {_extra && <div class={`${_prefixCls}-extra`}>{_extra}</div>}
      </div>
    </div>
  )
}

export default RenderPfResult