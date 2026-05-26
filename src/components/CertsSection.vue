<template>
  <section id="certs">
    <div class="container">
      <div class="section-head">
        <span class="section-num">02</span>
        <div>
          <span class="section-label">CLASSIFICAÇÃO</span>
          <h2 class="section-title">Principais Certificações</h2>
        </div>
      </div>

      <div class="certs-grid">
        <div
          v-for="cert in certs"
          :key="cert.name"
          class="cert-card"
          :style="{'--c-accent': cert.color}"
        >
          <div class="cert-pin"></div>
          <div class="cert-body">
            <div class="cert-led" :style="{background: cert.color, boxShadow: `0 0 6px ${cert.color}20`}"></div>
            <h3 class="cert-name">{{ cert.name }}</h3>
            <span class="cert-full">{{ cert.full }}</span>
            <p class="cert-desc">{{ cert.desc }}</p>
            <div class="cert-tags">
              <span class="cert-tag" v-for="s in cert.scope" :key="s">{{ s }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({ certs: Array })
</script>

<style scoped>
#certs { padding: 6rem 8vw; }

.section-head {
  display: flex; align-items: flex-start;
  gap: 1rem; margin-bottom: 3rem;
}
.section-num {
  font-family: 'DM Mono', monospace;
  font-size: 2.2rem;
  font-weight: 300;
  color: var(--accent);
  opacity: .35;
  line-height: 1;
  flex-shrink: 0;
  margin-top: -.2rem;
}
.section-label {
  font-family: 'DM Mono', monospace;
  font-size: .6rem;
  font-weight: 500;
  letter-spacing: .1em;
  color: var(--accent2);
  display: block;
  margin-bottom: .3rem;
}
.section-title {
  font-size: clamp(1.5rem, 3vw, 2.2rem);
  font-weight: 400;
  color: var(--text-primary);
  line-height: 1.15;
}

.certs-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1px;
  background: var(--border);
  border: 1px solid var(--border);
}
.cert-card {
  position: relative;
  background: var(--surface);
  padding: 1.75rem;
  transition: background .25s, transform .3s, border-color .3s, box-shadow .3s;
  display: flex;
  gap: 1rem;
  border: 1px solid transparent;
  margin: -1px;
}
.cert-card:hover {
  background: var(--surface2);
  transform: translateY(-3px);
  border-color: var(--accent);
  box-shadow: 0 0 20px var(--glow), inset 0 0 20px var(--glow);
  z-index: 1;
}
.cert-pin {
  position: absolute;
  top: .5rem; left: .5rem;
  width: 6px; height: 6px;
  border: 1px solid var(--accent);
  border-radius: 1px;
  opacity: .2;
  transition: opacity .3s, background .3s;
}
.cert-card:hover .cert-pin {
  opacity: .8;
  background: var(--accent);
}
.cert-led {
  width: 8px; height: 8px;
  border-radius: 50%;
  margin-bottom: 1rem;
  opacity: .7;
  transition: opacity .3s, box-shadow .3s, transform .3s;
}
.cert-card:hover .cert-led {
  opacity: 1;
  transform: scale(1.3);
}
.cert-name {
  font-family: 'DM Mono', monospace;
  font-size: .85rem;
  font-weight: 500;
  color: var(--text-primary);
  margin-bottom: .15rem;
}
.cert-full {
  display: block;
  font-size: .65rem;
  color: var(--text-secondary);
  margin-bottom: .75rem;
  line-height: 1.4;
}
.cert-desc {
  font-size: .8rem;
  color: var(--text-secondary);
  line-height: 1.65;
}
.cert-tags {
  margin-top: 1rem;
  display: flex; flex-wrap: wrap;
  gap: .3rem;
}
.cert-tag {
  font-family: 'DM Mono', monospace;
  font-size: .55rem;
  padding: .1rem .4rem;
  border: 1px solid var(--border);
  color: var(--text-dim);
  letter-spacing: .03em;
}
</style>
