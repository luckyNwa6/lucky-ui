<template>
  <canvas ref="canvas" style="position: absolute; left: 0; top: 0; pointer-events: none"></canvas>
</template>

<script>
export default {
  mounted() {
    this.initCanvas()
    this.addEventListeners()
    this.drawPointsInterval = setInterval(this.drawPoints, 20)
  },
  beforeDestroy() {
    clearInterval(this.drawPointsInterval)
    this.removeEventListeners()
  },
  methods: {
    initCanvas() {
      const canvas = this.$refs.canvas
      const ctx = canvas.getContext('2d')
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      this.canvas = canvas
      this.ctx = ctx
    },
    addEventListeners() {
      window.addEventListener('mousemove', this.handleMouseMove)
      window.addEventListener('click', this.handleMouseClick)
    },
    removeEventListeners() {
      window.removeEventListener('mousemove', this.handleMouseMove)
      window.removeEventListener('click', this.handleMouseClick)
    },
    handleMouseMove(evt) {
      for (let i = 0; i < 15; i++) {
        this.points.push({
          sx: evt.x,
          sy: evt.y,
          vx: 0.5 - Math.random(),
          vy: 0.5 - Math.random(),
          life: this.live,
          color: this.colors[parseInt(Math.random() * this.colors.length)],
          size: Math.random() * 5
        })
      }
    },
    handleMouseClick(evt) {
      this.clicks.push({
        sx: evt.x,
        sy: evt.y,
        color: this.colors[parseInt(Math.random() * this.colors.length)],
        life: this.live
      })
    },
    drawPoints() {
      const ctx = this.ctx
      const canvas = this.canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // 绘制粒子
      for (let i = 0; i < this.points.length; i++) {
        const point = this.points[i]
        ctx.beginPath()
        ctx.arc(point.sx, point.sy, point.size, Math.PI * 2, false)
        ctx.fillStyle = `rgba(${point.color},${point.life / this.live})`
        ctx.fill()
        point.life--
        if (point.life <= 0) {
          this.points.splice(i, 1)
        }
        point.sx += point.vx * 3
        point.sy += point.vy * 3
      }

      // 绘制点击效果
      for (let i = 0; i < this.clicks.length; i++) {
        const click = this.clicks[i]
        ctx.beginPath()
        ctx.arc(click.sx, click.sy, this.live - click.life, Math.PI * 2, false)
        ctx.fillStyle = `rgba(${click.color},${click.life / this.live})`
        ctx.fill()
        click.life--
        if (click.life <= 0) {
          this.clicks.splice(i, 1)
        }
      }
    }
  },
  data() {
    return {
      canvas: null,
      ctx: null,
      points: [],
      clicks: [],
      live: 50,
      colors: ['236, 204, 104', '255, 71, 87', '112, 161, 255', '123, 237, 159'],
      drawPointsInterval: null
    }
  }
}
</script>
