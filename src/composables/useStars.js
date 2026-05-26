import { ref, onMounted, onBeforeUnmount } from 'vue'

export function useStars() {
  const canvasRef = ref(null)
  let animId = null

  onMounted(() => {
    const canvas = canvasRef.value
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let W, H, stars = []

    const resize = () => { W = canvas.width = innerWidth; H = canvas.height = innerHeight }
    resize()
    window.addEventListener('resize', resize)

    for (let i = 0; i < 160; i++)
      stars.push({ x: Math.random() * 1920, y: Math.random() * 1080, r: Math.random() * 1.2 + .2, a: Math.random(), s: Math.random() * .005 + .001 })

    function drawStars() {
      ctx.clearRect(0, 0, W, H)
      const col = getComputedStyle(document.documentElement).getPropertyValue('--star-color').trim() || '255,224,230'
      stars.forEach(s => {
        s.a += s.s
        if (s.a > 1 || s.a < 0) s.s *= -1
        ctx.beginPath()
        ctx.arc(s.x % W, s.y % H, s.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${col},${s.a * .7})`
        ctx.fill()
      })
      animId = requestAnimationFrame(drawStars)
    }
    drawStars()
  })

  onBeforeUnmount(() => {
    if (animId) cancelAnimationFrame(animId)
  })

  return { canvasRef }
}
