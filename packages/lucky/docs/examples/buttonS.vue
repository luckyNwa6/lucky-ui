<template>
  <div>
    <vi-button @click="test">默认</vi-button>
    <vi-button button-type="success">成功</vi-button>
    <vi-button button-type="info">消息</vi-button>
    <vi-button button-type="warning">警告</vi-button>
    <vi-button button-type="danger">危险</vi-button>
  </div>
</template>

<script>
import ViButton from '@luckynwa-lib/vi-button'
import '@luckynwa-lib/vi-button/dist/index.css'

export default {
  components: {
    ViButton
  },
  methods: {
    test() {
      console.log('厉害吧！')
    }
  }
}
</script>
