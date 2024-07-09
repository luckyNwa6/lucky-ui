<template>
  <div style="position: relative; width: 1000px; height: 100px">
    <vi-word :content="'你真棒!'" style="position: absolute; top: 0; left: 0" />
    <vi-word
      class-type="hover"
      :content="'你真棒!'"
      style="position: absolute; top: 0px; left: 350px"
    />
  </div>
</template>

<script>
import ViWord from '@luckynwa-lib/vi-word'
import '@luckynwa-lib/vi-word/dist/index.css'

export default {
  components: {
    ViWord
  }
}
</script>
