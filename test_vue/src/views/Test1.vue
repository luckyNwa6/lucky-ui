<template>
  <div>
    <vi-button>默认</vi-button>
    <vi-button button-type="success">成功</vi-button>
    <vi-button button-type="info">消息</vi-button>
    <vi-button button-type="warning">警告</vi-button>
    <vi-button button-type="danger">危险</vi-button>
  </div>
</template>

<script>
import ViButton from '../components/button.vue'
export default {
  components: {
    ViButton
  }
}
</script>

<style></style>
