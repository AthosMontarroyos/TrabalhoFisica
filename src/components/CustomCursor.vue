<template>
  <div id="cursor" :class="{ big: big }"></div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const big = ref(false)
const handler = ref(null)

defineExpose({ big })

onMounted(() => {
  const cursor = document.getElementById('cursor')
  handler.value = e => {
    cursor.style.left = e.clientX + 'px'
    cursor.style.top = e.clientY + 'px'
  }
  document.addEventListener('mousemove', handler.value)
})

onBeforeUnmount(() => {
  if (handler.value) document.removeEventListener('mousemove', handler.value)
})
</script>

<style scoped>
#cursor {
  position: fixed;
  width: 10px; height: 10px;
  background: var(--blush);
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  transform: translate(-50%,-50%);
  transition: width .2s, height .2s, background .2s;
  mix-blend-mode: difference;
}
#cursor.big { width: 36px; height: 36px; background: var(--rose); }
</style>
