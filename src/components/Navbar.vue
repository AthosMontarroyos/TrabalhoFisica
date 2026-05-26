<template>
  <nav>
    <div class="nav-logo">
      <span class="nav-logo-text">CBM — 2026</span>
    </div>

    <ul class="nav-links">
      <li><a href="#intro">Introdução</a></li>
      <li><a href="#certs">Certificações</a></li>
      <li><a href="#processo">Processo</a></li>
      <li><a href="#equipe">Equipe</a></li>
    </ul>

    <div class="nav-actions">
      <button class="palette-btn" @click="nextTheme" title="Alternar paleta de cores">
        <span class="palette-dots">
          <span class="palette-dot" :style="{background: themes[currentTheme].dot1}"></span>
          <span class="palette-dot" :style="{background: themes[currentTheme].dot2}"></span>
          <span class="palette-dot" :style="{background: themes[currentTheme].dot3}"></span>
        </span>
        <span class="palette-label">{{ themes[currentTheme].label }}</span>
      </button>

      <a class="github-btn" href="https://github.com/AthosMontarroyos/TrabalhoCertificacaoDeQualidade-Website" target="_blank" rel="noopener noreferrer" title="GitHub">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.29 9.41 7.86 10.94.57.1.78-.25.78-.55v-1.94c-3.2.7-3.87-1.54-3.87-1.54-.52-1.33-1.27-1.68-1.27-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.24 3.34.95.1-.74.4-1.24.72-1.53-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.17a10.93 10.93 0 0 1 5.74 0c2.19-1.48 3.15-1.17 3.15-1.17.62 1.58.23 2.75.11 3.04.74.81 1.18 1.83 1.18 3.09 0 4.42-2.69 5.39-5.26 5.68.41.36.78 1.07.78 2.15v3.19c0 .31.2.67.79.55C20.21 21.4 23.5 17.1 23.5 12 23.5 5.65 18.35.5 12 .5z"/>
        </svg>
      </a>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { themes } from '../composables/useTheme'

const currentTheme = ref(0)

onMounted(() => {
  const current = document.documentElement.getAttribute('data-theme')
  const idx = themes.findIndex(t => t.key === current)
  if (idx !== -1) currentTheme.value = idx
})

function nextTheme() {
  currentTheme.value = (currentTheme.value + 1) % themes.length
  document.documentElement.setAttribute('data-theme', themes[currentTheme.value].key)
}
</script>

<style scoped>
nav {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 200;
  padding: 0 6vw;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  backdrop-filter: blur(14px);
  background: var(--nav-bg);
  border-bottom: 1px solid rgba(255,255,255,.06);
  transition: background .5s;
}

.nav-logo-text {
  font-family: 'DM Mono', monospace;
  font-size: .75rem;
  letter-spacing: .15em;
  color: var(--blush);
  white-space: nowrap;
}

.nav-links {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 2rem;
  list-style: none;
  align-items: center;
}
.nav-links a {
  font-family: 'DM Mono', monospace;
  font-size: .68rem;
  letter-spacing: .2em;
  color: var(--text-dim);
  text-decoration: none;
  transition: color .2s;
}
.nav-links a:hover { color: var(--blush); }
@media(max-width:680px){ .nav-links { display: none; } }

.nav-actions {
  display: flex;
  align-items: center;
  gap: .75rem;
}

.palette-btn {
  display: flex;
  align-items: center;
  gap: .45rem;
  border: 1px solid rgba(255,255,255,.12);
  background: rgba(255,255,255,.05);
  border-radius: 40px;
  padding: .3rem .75rem;
  cursor: pointer;
  transition: border-color .2s, background .2s;
}
.palette-btn:hover {
  border-color: var(--rose);
  background: rgba(255,255,255,.1);
}
.palette-dots { display: flex; gap: 3px; }
.palette-dot {
  width: 8px; height: 8px;
  border-radius: 50%;
  display: block;
}
.palette-label {
  font-family: 'DM Mono', monospace;
  font-size: .6rem;
  letter-spacing: .15em;
  color: var(--text-dim);
  white-space: nowrap;
}

.github-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px; height: 34px;
  border-radius: 50%;
  border: 1px solid rgba(255,255,255,.12);
  background: rgba(255,255,255,.05);
  color: var(--text-dim);
  text-decoration: none;
  transition: border-color .2s, color .2s, background .2s;
  cursor: pointer;
}
.github-btn:hover {
  border-color: var(--rose);
  color: var(--blush);
  background: rgba(255,255,255,.1);
}
.github-btn svg { width: 16px; height: 16px; fill: currentColor; }
</style>
