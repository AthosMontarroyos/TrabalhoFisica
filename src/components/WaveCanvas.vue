<template>
  <canvas ref="canvasRef" id="wave-canvas"></canvas>
</template>

<script setup>
import { useWave } from '../composables/useWave'
const { canvasRef } = useWave()
</script>

<style scoped>
#wave-canvas {
  position: fixed; inset: 0;
  z-index: 0; pointer-events: none;
}
</style>
