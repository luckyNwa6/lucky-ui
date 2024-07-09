<!--参数：canvas的宽高、透明度、层级,子绝父相，才能把背景放入、zIndex必须配合定位才有效果-->
<template>
  <div style="position: relative; width: 100px; height: 100px">
    <vi-star
      :width="680"
      :zIndex="37"
      :height="100"
      :opacity="1"
      style="position: absolute; top: 0; left: 0"
    />
  </div>
</template>

<script>
import ViStar from '@luckynwa-lib/vi-star'
import '@luckynwa-lib/vi-star/dist/index.css'

export default {
  components: {
    ViStar
  },
  data() {
    return {}
  }
}
</script>
