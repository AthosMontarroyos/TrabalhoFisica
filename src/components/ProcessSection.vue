<template>
  <section id="processo">
    <div class="container">
      <div class="section-head">
        <span class="section-num">03</span>
        <div>
          <span class="section-label">PROCESSO</span>
          <h2 class="section-title">Etapas de Certificação</h2>
        </div>
      </div>

      <div class="steps">
        <div
          class="step"
          v-for="(step, i) in steps"
          :key="i"
          :ref="el => { if(el) setItem(el, i) }"
        >
          <div class="step-marker">
            <span class="step-ch">CH{{ i+1 }}</span>
            <div class="step-trace" v-if="i < steps.length - 1"></div>
          </div>
          <div class="step-card">
            <h3 class="step-title">{{ step.title }}</h3>
            <p class="step-body">{{ step.body }}</p>
          </div>
        </div>
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
    entries.forEach(e => {
      if(e.isIntersecting) e.target.classList.add('visible')
    }),
    { threshold: .15 }
  )
  itemRefs.forEach(el => { if(el) obs.observe(el) })
})
</script>

<style scoped>
#processo { padding: 6rem 8vw; }

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

.steps { max-width: 680px; margin: 0 auto; }

.step {
  display: flex; gap: 1rem;
  opacity: 0; transform: translateY(15px);
  transition: opacity .5s, transform .35s;
}
.step.visible { opacity: 1; transform: translateY(0); }
.step.visible:hover { transform: translateY(-3px); }

.step-marker {
  display: flex; flex-direction: column;
  align-items: center;
  width: 48px; flex-shrink: 0;
  padding-top: .15rem;
}
.step-ch {
  font-family: 'DM Mono', monospace;
  font-size: .5rem;
  font-weight: 600;
  letter-spacing: .05em;
  color: var(--accent);
  padding: .2rem .35rem;
  border: 1px solid var(--accent);
  opacity: .7;
  transition: opacity .35s, background .35s, color .35s, box-shadow .3s;
  flex-shrink: 0;
}
.step.visible .step-ch {
  opacity: 1;
  background: var(--accent);
  color: var(--bg);
}
.step.visible:hover .step-ch {
  box-shadow: 0 0 12px var(--accent);
}
.step-trace {
  width: 1px; flex: 1;
  min-height: 20px;
  border-right: 1px dashed var(--accent);
  opacity: .15;
  transition: opacity .35s;
}
.step.visible:hover .step-trace {
  opacity: .4;
}

.step-card {
  flex: 1;
  padding: 1.25rem 1.5rem;
  background: var(--surface);
  border: 1px solid var(--border);
  margin-bottom: 1.25rem;
  transition: border-color .3s, box-shadow .3s;
}
.step-card:hover {
  border-color: var(--accent);
  box-shadow: 0 0 20px var(--glow), inset 0 0 20px var(--glow);
}
.step-title {
  font-size: 1rem;
  font-weight: 500;
  color: var(--text-primary);
  margin-bottom: .5rem;
}
.step-body {
  font-size: .82rem;
  color: var(--text-secondary);
  line-height: 1.7;
}
</style>
