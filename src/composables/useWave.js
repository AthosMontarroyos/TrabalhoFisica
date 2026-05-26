import { ref, onMounted, onBeforeUnmount } from 'vue'

export function useWave() {
  const canvasRef = ref(null)
  let animId = null

  onMounted(() => {
    const canvas = canvasRef.value
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let W, H, time = 0

    const resize = () => {
      W = canvas.width = innerWidth
      H = canvas.height = innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    function draw() {
      ctx.clearRect(0, 0, W, H)
      time += 0.006

      const col = getComputedStyle(document.documentElement)
        .getPropertyValue('--accent').trim() || '#00E5FF'

      ctx.strokeStyle = col
      ctx.lineWidth = 1
      ctx.globalAlpha = 0.1

      for (let t = 0; t < 3; t++) {
        ctx.beginPath()
        const offsetY = H * (0.2 + t * 0.3)
        const amp = H * 0.06
        const freq = 0.006

        for (let x = 0; x < W; x++) {
          const y = offsetY
            + Math.sin(x * freq + time + t * 2.1) * amp
            + Math.sin(x * freq * 2.7 + time * 1.4 + t) * amp * 0.25
          x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y)
        }
        ctx.stroke()
      }

      ctx.globalAlpha = 1
      animId = requestAnimationFrame(draw)
    }
    draw()
  })

  onBeforeUnmount(() => {
    if (animId) cancelAnimationFrame(animId)
  })

  return { canvasRef }
}
