<template>
  <div style="position: relative; width: 100px; height: 100px">
    <vi-clock
      :width="680"
      :height="100"
      :hoverStyle="'rgba(235, 133, 201, 0.8)'"
      style="position: absolute; top: 0; left: 0"
    />
  </div>
</template>

<script>
import ViClock from '@luckynwa-lib/vi-clock'
import '@luckynwa-lib/vi-clock/dist/index.css'

export default {
  components: {
    ViClock
  }
}
</script>
