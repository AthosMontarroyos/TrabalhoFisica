<template>
  <div>
    <CustomCursor />
    <StarsCanvas />
    <Navbar />
    <router-view />
  </div>
</template>

<script setup>
import CustomCursor from './components/CustomCursor.vue'
import StarsCanvas from './components/StarsCanvas.vue'
import Navbar from './components/Navbar.vue'
import { onMounted } from 'vue'

onMounted(() => {
  document.documentElement.setAttribute('data-theme', 'noite')
})
</script>
