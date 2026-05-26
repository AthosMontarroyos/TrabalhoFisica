<template>
  <canvas ref="canvasRef" id="stars-canvas"></canvas>
</template>

<script setup>
import { useStars } from '../composables/useStars'
const { canvasRef } = useStars()
</script>

<style scoped>
#stars-canvas {
  position: fixed; inset: 0;
  z-index: 0; pointer-events: none;
}
</style>
