## 常见问题

踩坑指南

#### 1.不推荐pf-ui-vue与antd vue混用, 可能会导致一些小问题. 
> 例与antd vue 混合使用,且使用 `ConfigProvide` 时, 会导致 pf-ui-vue 类名前缀从 `pf` 变成 `ant`. 导致样式被antd vue 重制.

  