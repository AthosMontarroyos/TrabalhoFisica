<template>
  <nav>
    <div class="nav-brand">
      <span class="led" :class="{ on: true }"></span>
      <span class="brand-name">CBM-2026</span>
    </div>

    <div class="nav-links">
      <a href="#intro">INTRO</a>
      <a href="#certs">CERTIFICAÇÕES</a>
      <a href="#processo">PROCESSO</a>
      <a href="#equipe">EQUIPE</a>
    </div>

    <div class="nav-actions">
      <button class="theme-btn" @click="toggleTheme">
        <span class="theme-indicator" :class="isDark ? 'dark' : 'light'"></span>
        <span class="theme-label">{{ isDark ? 'ESCURO' : 'CLARO' }}</span>
      </button>

      <a
        href="https://github.com/AthosMontarroyos/TrabalhoCertificacaoDeQualidade-Website"
        target="_blank"
        class="github-link"
        title="GitHub"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
          <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.29 9.41 7.86 10.94.57.1.78-.25.78-.55v-1.94c-3.2.7-3.87-1.54-3.87-1.54-.52-1.33-1.27-1.68-1.27-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.24 3.34.95.1-.74.4-1.24.72-1.53-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.17a10.93 10.93 0 0 1 5.74 0c2.19-1.48 3.15-1.17 3.15-1.17.62 1.58.23 2.75.11 3.04.74.81 1.18 1.83 1.18 3.09 0 4.42-2.69 5.39-5.26 5.68.41.36.78 1.07.78 2.15v3.19c0 .31.2.67.79.55C20.21 21.4 23.5 17.1 23.5 12 23.5 5.65 18.35.5 12 .5z"/>
        </svg>
      </a>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isDark = ref(true)

onMounted(() => {
  isDark.value = document.documentElement.getAttribute('data-theme') !== 'claro'
})

function toggleTheme() {
  isDark.value = !isDark.value
  const theme = isDark.value ? 'escuro' : 'claro'
  document.documentElement.setAttribute('data-theme', theme)
  localStorage.setItem('theme', theme)
}
</script>

<style scoped>
nav {
  position: fixed; top: 0; left: 0; right: 0; z-index: 200;
  height: 56px;
  display: flex; align-items: center;
  padding: 0 6vw;
  background: var(--nav-bg);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom: 1px solid var(--border);
}

.nav-brand {
  display: flex; align-items: center;
  gap: .6rem;
}
.led {
  width: 7px; height: 7px;
  border-radius: 50%;
  background: var(--accent);
  box-shadow: 0 0 6px var(--accent);
  opacity: .3;
  transition: opacity .3s;
}
.led.on { opacity: 1; }
.brand-name {
  font-family: 'DM Mono', monospace;
  font-size: .75rem;
  font-weight: 500;
  letter-spacing: .05em;
  color: var(--text-primary);
}

.nav-links {
  position: absolute;
  left: 50%; transform: translateX(-50%);
  display: flex; gap: 2rem;
  list-style: none;
}
.nav-links a {
  font-family: 'DM Mono', monospace;
  font-size: .65rem;
  font-weight: 400;
  letter-spacing: .08em;
  color: var(--text-dim);
  text-decoration: none;
  padding: .3rem 0;
  transition: color .25s;
  position: relative;
}
.nav-links a::after {
  content: '';
  position: absolute;
  bottom: -2px; left: 0;
  width: 0; height: 1px;
  background: var(--accent);
  transition: width .3s;
}
.nav-links a:hover { color: var(--accent); }
.nav-links a:hover::after { width: 100%; }
@media(max-width:680px) { .nav-links { display: none; } }

.nav-actions {
  margin-left: auto;
  display: flex; align-items: center; gap: .5rem;
}

.theme-btn {
  display: flex; align-items: center; gap: .4rem;
  background: transparent;
  border: 1px solid var(--border);
  border-radius: 4px;
  padding: .35rem .6rem;
  cursor: pointer;
  color: var(--text-dim);
  transition: border-color .25s, color .25s;
  font-family: 'DM Mono', monospace;
  font-size: .6rem;
  letter-spacing: .05em;
}
.theme-btn:hover {
  border-color: var(--accent);
  color: var(--accent);
}
.theme-indicator {
  width: 6px; height: 6px;
  border-radius: 50%;
  background: currentColor;
}
.theme-indicator.dark { opacity: .4; }
.theme-indicator.light { opacity: 1; box-shadow: 0 0 6px currentColor; }

.github-link {
  display: flex; align-items: center; justify-content: center;
  width: 32px; height: 32px;
  border: 1px solid var(--border);
  border-radius: 4px;
  color: var(--text-dim);
  transition: border-color .25s, color .25s;
}
.github-link:hover {
  border-color: var(--accent);
  color: var(--accent);
}
</style>
