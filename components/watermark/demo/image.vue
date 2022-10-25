<docs>
---
order: 2
title:
  zh-CN: 图片
  en-US: image
---
      
## zh-CN
      
注意图像 URL 的跨域设置, 会影响显示.      
## en-US
      
注意图像 URL 的跨域设置, 会影响显示. 
</docs>
    
<template>
 <pf-watermark
    v-if="checked"
    image="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAAwCAMAAABzC0lBAAAAb1BMVEUAAABmZmZ/f39nZ2dnZ2dnZ2doaGhmZmZmZmZmZmZnZ2dmZmZoaGhnZ2doaGhvb29mZmZnZ2dnZ2dnZ2dnZ2dnZ2eJiYlnZ2dnZ2dmZmZmZmZmZmZnZ2dmZmZoaGhoaGhubm5mZmZnZ2dnZ2dmZmZ/+xtPAAAAJHRSTlMApgieyDtI+fXsflVA0CgQ3sK3sFIvA/Payrqci+aEJBhwW0/d+tx6AAABCklEQVRIx+3Uy26DMBCF4UOK8QUwhGvKPcm8/zPWFFVKq0j1sKho1W+BZvMLaWwZjig1MehSYNUYSWnAECppGgCGdASW00AGmFVrwTWoGT1dwXZSPXLVgC/MIc/YIZCgYFdI/+Ge0JZnp7TssFCpowp2GIbb92fCLIqiyxZe3Jj5htlIzhaSM2aeoaDJ/Ue8j26YSHiHMR7Ehw5NkiQ1nNoNxjvM9Oetat+tYrlX1cc5VtV9OfCVWxVt6LQFO6y7V6erf8HT8ZdCWWCHVCLX4DvJHD3dwHalHlbqBUxWyRmYaBRgubVkADQDUfjir8yJhgarqFPEoLrkYU0MOAobPFXjO5WkJ2SML94AtbIpHnYcxiIAAAAASUVORK5CYII="
    fullscreen
    :font-size="18"
    :line-height="18"
    :width="340"
    :height="340"
    :x-offset="50"
    :y-offset="100"
    :rotate="-10"
  />
  <pf-switch v-model:checked="checked" />
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
    
  export default defineComponent({
     setup() {
      const checked = ref<boolean>(false);
      return {
        checked,
      };
     },
  });
</script>
    