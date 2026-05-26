<template>
  <section id="processo">
    <p class="section-tag">03 — Processo</p>
    <h2 class="section-title">Etapas de Certificação</h2>
    <div class="timeline">
      <div
        class="tl-item"
        v-for="(step, i) in steps"
        :key="i"
        :ref="el => { if(el) setItem(el, i) }"
      >
        <div class="tl-dot"></div>
        <div class="tl-step">ETAPA {{ String(i+1).padStart(2,'0') }}</div>
        <div class="tl-title">{{ step.title }}</div>
        <div class="tl-body">{{ step.body }}</div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'

defineProps({ steps: Array })

const itemRefs = []
function setItem(el, i) { itemRefs[i] = el }

onMounted(() => {
  const obs = new IntersectionObserver(entries =>
    entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('visible') }),
    { threshold: .15 }
  )
  itemRefs.forEach(el => { if(el) obs.observe(el) })
})
</script>

<style scoped>
.timeline { position: relative; margin-top: 3rem; padding-left: 2.5rem; }
.timeline::before {
  content: '';
  position: absolute; left: 0; top: .5rem; bottom: .5rem;
  width: 1px;
  background: linear-gradient(to bottom, var(--rose), transparent);
}
.tl-item {
  position: relative; margin-bottom: 3rem;
  opacity: 0; transform: translateX(-20px);
  transition: opacity .5s, transform .5s;
}
.tl-item.visible { opacity: 1; transform: translateX(0); }
.tl-dot {
  position: absolute; left: -2.87rem; top: .35rem;
  width: 8px; height: 8px;
  border-radius: 50%;
  background: var(--rose); box-shadow: 0 0 10px var(--rose);
}
.tl-step {
  font-family: 'DM Mono', monospace;
  font-size: .65rem; letter-spacing: .25em; color: var(--deep); margin-bottom: .4rem;
}
.tl-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.4rem; color: var(--blush); margin-bottom: .6rem; transition: color .5s;
}
.tl-body { font-size: .92rem; color: var(--text-secondary); line-height: 1.8; max-width: 560px; }
</style>
