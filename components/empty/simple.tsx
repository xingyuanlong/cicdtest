import useConfigInject from '../_util/hooks/useConfigInject';

const Simple = () => {
  const { getPrefixCls } = useConfigInject('empty', {});
  const prefixCls = getPrefixCls('empty-img-simple');

  return (
    <svg class={prefixCls} viewBox="0 0 100 100" version="1.1">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g transform="translate(-365.000000, -1720.000000)" fill-rule="nonzero">
          <g transform="translate(365.000000, 1720.000000)">
            <rect fill-opacity="0" fill="#EFE9DE" x="0" y="0" width="100" height="100"></rect>
            <g transform="translate(12.500000, 19.999951)">
              <polygon id="Fill-1" fill="#C8C8C8" points="39.1672059 0 39.1672059 20.611278 65.6804412 10.1585064"></polygon>
              <polygon id="Fill-2" fill="#D3D3D3" points="39.1672059 0 8.08877451 10.1585064 7.48289216 11.1390647 33.1603432 22.9810421 39.1672059 20.611278"></polygon>
              <polygon id="Fill-3" fill="#F4F4F4" points="33.1601471 59.7906455 67.0086765 45.3579606 67.5107489 26.3788273 38.8562255 38.2066302 33.1601471 22.8078174"></polygon>
              <polygon id="Fill-4" fill="#EAEAEA" points="32.7913235 23.128517 33.159951 23.6676774 38.8560294 38.2069235 74.6962255 24.0518842 65.6805392 10.1583597"></polygon>
              <polygon id="Fill-5" fill="#DDDDDD" points="28.0377725 37.926606 7.5975 25.7013376 7.5975 44.8672904 33.1602451 59.4637275 33.1602451 22.8471323"></polygon>
              <polygon id="Fill-6" fill="#EAEAEA" points="0 21.7062185 28.0455883 38.2148911 33.1602941 22.9810421 7.48284313 11.1390647"></polygon>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

Simple.PRESENTED_IMAGE_SIMPLE = true;
export default Simple;
