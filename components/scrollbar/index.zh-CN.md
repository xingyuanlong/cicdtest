---
category: Components
type: 数据展示
title: Scrollbar
subtitle: 滚动条
---

滚动条。

## API

### 属性

| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| trigger | 显示滚动条的时机，`'none'` 表示一直显示 | `'hover' \| 'none'` | `'hover'` |  |
| x-scrollable | 是否可以横向滚动 | `boolean` | `false` |  |
| on-scroll | 滚动的回调 | `(e: Event) => void` | `undefined` |  |

### Slots

| 名称 | 说明 | 参数 |
| --- | --- | --- |
| default | 滚动内容 | `()` |

### Methods

| 名称 | 说明 | 类型 | |
| --- | --- | --- | --- |
| scrollBy | `(options: { left?: number, top?: number, behavior?: ScrollBehavior }): void & (x: number, y: number) => void` | 滚动特定距离 | |
| scrollTo | `(options: { left?: number, top?: number, behavior?: ScrollBehavior }): void & (x: number, y: number) => void` | 滚动内容 | |

