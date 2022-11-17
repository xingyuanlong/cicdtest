---
category: Components
type: 数值动画
title: NumberAnimation
subtitle: 数值动画
---

为数值添加动画效果。

## API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| active | 是否开始动画 | boolean | true |  |
| duration | 动画持续时间 | number | 3000 |  |
| from | 数值动画起始值 | number | 0 |  |
| locale | 国际化的语言 | string | 跟随 config provider |  |
| precision | 精度，保留小数点后几位 | number | 0 |  |
| show-separator | 是否显示分隔符 | boolean | false | |
| to | 目标值 | number | - |  |
| on-finish | 动画结束的回调 | () => void | - |  |

## Methods

| 名称 | 说明 | 参数 | 版本 |
| --- | --- | --- | --- |
| play | 播放动画 | () |  |