<template>
  <div>
    <canvas ref="canvas"></canvas>
  </div>
</template>

<script>
import * as THREE from 'three'

export default {
  data() {
    return {
      requestId: null
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.init()
      this.startAnimation()
    })
  },
  beforeUnmount() {
    this.stopAnimation()
  },
  methods: {
    init() {
      // 获取canvas元素
      const canvas = this.$refs.canvas

      // 场景设置
      const scene = new THREE.Scene()

      // 渲染器设置
      const renderer = new THREE.WebGLRenderer({ canvas })
      renderer.setSize(canvas.clientWidth, canvas.clientHeight)

      // 尺寸设置
      const sizes = {
        width: canvas.clientWidth,
        height: canvas.clientHeight
      }

      // 镜头
      const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
      camera.position.z = 2

      // 创建盒子
      const material = new THREE.MeshNormalMaterial({
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.5
      })

      let group = new THREE.Group()

      for (let i = -1; i < 1; i += 0.1) {
        for (let j = -1; j < 1; j += 0.1) {
          let geometry = new THREE.BoxGeometry(0.08, 0.08, 0.08)
          let mesh = new THREE.Mesh(geometry, material)
          mesh.position.set(i, 0, j)
          group.add(mesh)
        }
      }

      scene.add(group)

      // 动画函数
      const animate = () => {
        group.rotation.y += 0.001

        renderer.render(scene, camera)

        this.requestId = requestAnimationFrame(animate)
      }

      // 绑定动画函数
      this.animate = animate
    },
    startAnimation() {
      this.animate()
    },
    stopAnimation() {
      cancelAnimationFrame(this.requestId)
    }
  }
}
</script>

<style scoped>
#canvas {
  overflow: hidden;
}
</style>
