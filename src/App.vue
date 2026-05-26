<template>
  <div>
    <WaveCanvas />
    <Navbar />
    <router-view />
  </div>
</template>

<script setup>
import WaveCanvas from './components/WaveCanvas.vue'
import Navbar from './components/Navbar.vue'
import { onMounted } from 'vue'

onMounted(() => {
  const saved = localStorage.getItem('theme')
  document.documentElement.setAttribute('data-theme', saved || 'escuro')
})
</script>
