---
category: Components
type: Data Display
title: Timeline
cover: https://gw.alipayobjects.com/zos/antfincdn/vJmo00mmgR/Timeline.svg
---

Vertical display timeline.

## When To Use

- When a series of information needs to be ordered by time (ascending or descending).
- When you need a timeline to make a visual connection.

## API

```html
<pf-timeline>
  <pf-timeline-item>step1 2015-09-01</pf-timeline-item>
  <pf-timeline-item>step2 2015-09-01</pf-timeline-item>
  <pf-timeline-item>step3 2015-09-01</pf-timeline-item>
  <pf-timeline-item>step4 2015-09-01</pf-timeline-item>
</pf-timeline>
```

### Timeline

Timeline

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| mode | By sending `alternate` the timeline will distribute the nodes to the left and right. | `left` \| `alternate` \| `right` | `left` |
| pending | Set the last ghost node's existence or its content | boolean\|string\|slot | `false` |
| pendingDot | Set the dot of the last ghost node when pending is true | string\|slot | `<LoadingOutlined />` |
| reverse | reverse nodes or not | boolean | false |

### Timeline.Item

Node of timeline

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| color | Set the circle's color to `blue`, `red`, `green` or other custom colors | string | `blue` |  |
| dot | Customize timeline dot | string\|slot | - |  |
| label | Set the label | string \| slot | - |  |
| position | Customize node position | `left` \| `right` | - |  |
