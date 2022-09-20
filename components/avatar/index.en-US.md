---
category: Components
type: Data Display
title: Avatar
cover: https://gw.alipayobjects.com/zos/antfincdn/aBcnbw68hP/Avatar.svg
---

Avatars can be used to represent people or objects. It supports images, `Icon`s, or letters.

## API

### Avatar

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| alt | This attribute defines the alternative text describing the image | string | - |  |
| crossOrigin | CORS settings attributes | `'anonymous'` \| `'use-credentials'` \| `''` | - |  |
| draggable | Whether the picture is allowed to be dragged | boolean \| `'true'` \| `'false'` | - |  |
| gap | Letter type unit distance between left and right sides | number | 4 |  |
| icon | the `Icon` type for an icon avatar, see `Icon` Component | VNode \| slot | - |  |
| loadError | handler when img load error, return false to prevent default fallback behavior | () => boolean | - |  |
| shape | the shape of avatar | `circle` \| `square` | `circle` |  |
| size | The size of the avatar | number \| `large` \| `small` \| `default` \| { xs: number, sm: number, ...} | `default` |  |
| src | the address of the image for an image avatar | string | - |  |
| srcset | a list of sources to use for different screen resolutions | string | - |  |

### Avatar.Group ()

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| maxCount | Max avatars to show | number | - |  |
| maxPopoverPlacement | The placement of excess avatar Popover | `top` \| `bottom` | `top` |  |
| maxPopoverTrigger | Set the trigger of excess avatar Popover | `hover` \| `focus` \| `click` | `hover` |  |
| maxStyle | The style of excess avatar style | CSSProperties | - |  |
| size | The size of the avatar | number \| `large` \| `small` \| `default` \| { xs: number, sm: number, ...} | `default` |  |
