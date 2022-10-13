import { PresetItemRender } from '../interface'
import Progress from '../../progress'
import ImageOperationTip from '../../tooltip/ImageOperationTip'
import Tooltip from '../../tooltip'
import DeleteTwoTone from '@pf-ui/pf-icons-vue/DeleteTwoTone'
import WordTwoTone from '@pf-ui/pf-icons-vue/WordTwoTone'
import ExcleTwoTone from '@pf-ui/pf-icons-vue/ExcleTwoTone'
import JpgTwoTone from '@pf-ui/pf-icons-vue/JpgTwoTone'
import PdfTwoTone from '@pf-ui/pf-icons-vue/PdfTwoTone'
import PngTwoTone from '@pf-ui/pf-icons-vue/PngTwoTone'
import PptTwoTone from '@pf-ui/pf-icons-vue/PptTwoTone'
import RarTwoTone from '@pf-ui/pf-icons-vue/RarTwoTone'
import TxtTwoTone from '@pf-ui/pf-icons-vue/TxtTwoTone'
import YasuoTwoTone from '@pf-ui/pf-icons-vue/YasuoTwoTone'
import ZipTwoTone from '@pf-ui/pf-icons-vue/ZipTwoTone'
import DocumentFilled from '@pf-ui/pf-icons-vue/DocumentFilled'

const FileExtension = {
  xls: <ExcleTwoTone />,
  xlsx: <ExcleTwoTone />,
  jpg: <JpgTwoTone />,
  jpeg: <JpgTwoTone />,
  pdf: <PdfTwoTone />,
  png: <PngTwoTone />,
  ppt: <PptTwoTone />,
  rar: <RarTwoTone />,
  txt: <TxtTwoTone />,
  doc: <WordTwoTone />,
  docx: <WordTwoTone />,
  '7z': <YasuoTwoTone />,
  zip: <ZipTwoTone />
}

const PfTextItemRender: PresetItemRender = ({
  file,
  actions,
  prefixCls,
  message
}) => {
  console.log('file', file, actions)
  const _prefixCls = `${prefixCls}-preset-pf-text`
  const fileExtension = (file.url || file.name)?.split('.')?.pop()

  const dom = (
    <div class={_prefixCls}>
      <a
        class={`${_prefixCls}-icon`}
        href={file.url}
        target="_blank"
        rel="noopener noreferrer"
        onClick={actions.preview}
      >
        {FileExtension[fileExtension] || <DocumentFilled />}
      </a>
      <div class={`${_prefixCls}-file`}>
        <div class={`${_prefixCls}-file-info`}>
          <div class={`${_prefixCls}-file-name ${file.status === 'error' ? `${_prefixCls}-file-name-error` : ''}`}>{file.name}</div>
          {
            file.status !== 'uploading' && (
              <div class={`${_prefixCls}-file-actions`}>
                <ImageOperationTip title="删除">
                  <DeleteTwoTone class={`${_prefixCls}-file-actions-delete`} onClick={actions.remove} />
                </ImageOperationTip>
              </div>
            )
          }
        </div>
        {file.status === 'uploading' && <Progress percent={file.percent} showInfo={false} strokeColor="#198EEB" trailColor="#DBDBDB" />}
      </div>
    </div>
  )

  return (
    file.status === 'error'
      ? (
        <Tooltip title={message} getPopupContainer={node => node.parentNode as HTMLElement}>
          {dom}
        </Tooltip>
      ) : dom
  )
}

export default PfTextItemRender