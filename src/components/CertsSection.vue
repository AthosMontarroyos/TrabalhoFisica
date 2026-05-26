<template>
  <section id="certs">
    <p class="section-tag">02 — Classificação</p>
    <h2 class="section-title">Principais Certificações</h2>
    <div class="certs-grid">
      <div
        v-for="cert in certs"
        :key="cert.name"
        class="cert-card"
        @mousemove="trackMouse($event)"
        @mouseenter="$emit('cursorBig', true)"
        @mouseleave="$emit('cursorBig', false)"
        :style="{'--accent': cert.color}"
      >
        <div class="cert-badge" :style="{'--accent': cert.color}">
          <div class="cert-badge-inner">{{ cert.icon }}</div>
        </div>
        <div class="cert-name">{{ cert.name }}</div>
        <div class="cert-full">{{ cert.full }}</div>
        <div class="cert-desc">{{ cert.desc }}</div>
        <div class="cert-scope">
          <span class="scope-tag" v-for="s in cert.scope" :key="s">{{ s }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({ certs: Array })
defineEmits(['cursorBig'])

function trackMouse(e) {
  const r = e.currentTarget.getBoundingClientRect()
  e.currentTarget.style.setProperty('--mx', ((e.clientX - r.left) / r.width * 100) + '%')
  e.currentTarget.style.setProperty('--my', ((e.clientY - r.top) / r.height * 100) + '%')
}
</script>

<style scoped>
.certs-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px,1fr));
  gap: 1.5rem; margin-top: 3rem;
}
.cert-card {
  background: linear-gradient(145deg, var(--card-bg1) 0%, var(--card-bg2) 100%);
  border: 1px solid rgba(255,255,255,.05);
  border-radius: 6px; padding: 2rem;
  position: relative; overflow: hidden;
  cursor: none;
  transition: transform .35s cubic-bezier(.23,1,.32,1), border-color .3s, background .5s;
}
.cert-card::after {
  content: '';
  position: absolute; inset: 0;
  background: radial-gradient(circle at var(--mx,50%) var(--my,50%), rgba(177,139,154,.08) 0%, transparent 65%);
  opacity: 0; transition: opacity .3s;
}
.cert-card:hover { transform: translateY(-6px); border-color: var(--mauve1); }
.cert-card:hover::after { opacity: 1; }

.cert-badge {
  width: 42px; height: 42px;
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-size: 1.1rem; margin-bottom: 1.4rem; position: relative;
}
.cert-badge::before {
  content: '';
  position: absolute; inset: -2px;
  border-radius: 50%;
  background: conic-gradient(var(--accent), transparent 60%);
  animation: spin 6s linear infinite;
}
.cert-badge-inner {
  width: 38px; height: 38px;
  border-radius: 50%; background: var(--bg);
  display: flex; align-items: center; justify-content: center;
  position: relative; z-index: 1; font-size: 1rem;
  transition: background .5s;
}
.cert-name {
  font-family: 'DM Mono', monospace;
  font-size: .82rem; letter-spacing: .15em;
  color: var(--blush); margin-bottom: .5rem;
}
.cert-full { font-size: .78rem; color: var(--text-dim); margin-bottom: 1rem; line-height: 1.5; }
.cert-desc { font-size: .9rem; color: var(--text-secondary); line-height: 1.75; }
.cert-scope { margin-top: 1.2rem; display: flex; flex-wrap: wrap; gap: .4rem; }
.scope-tag {
  font-family: 'DM Mono', monospace;
  font-size: .6rem; letter-spacing: .1em;
  padding: .2rem .6rem; border-radius: 2px;
  border: 1px solid var(--mauve1);
  color: var(--rose); background: var(--card-bg2);
  transition: background .5s;
}
</style>
