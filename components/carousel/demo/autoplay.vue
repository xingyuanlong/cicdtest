<docs>
---
order: 3
title:
  zh-CN: 自动切换
  en-US: Scroll automatically
---

## zh-CN

定时切换下一张。

## en-US

Timing of scrolling to the next card/picture.

</docs>

<template>
  <pf-carousel autoplay>
    <div><h3>1</h3></div>
    <div><h3>2</h3></div>
    <div><h3>3</h3></div>
    <div><h3>4</h3></div>
  </pf-carousel>
</template>
<style scoped>
/* For demo */
.pf-carousel :deep(.slick-slide) {
  text-align: center;
  height: 160px;
  line-height: 160px;
  background: #364d79;
  overflow: hidden;
}

.pf-carousel :deep(.slick-slide h3) {
  color: #fff;
}
</style>
