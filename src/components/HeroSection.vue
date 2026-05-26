<template>
  <section class="hero">
    <div class="hero-grid"></div>
    <div class="hero-scanline"></div>

    <div class="hero-frame">
      <div class="hero-corner tl"></div>
      <div class="hero-corner tr"></div>
      <div class="hero-corner bl"></div>
      <div class="hero-corner br"></div>

      <div class="hero-wave" aria-hidden="true">
        <svg viewBox="0 0 1200 400" preserveAspectRatio="none">
          <path
            class="wave-path"
            d="M0,200 C100,200 150,60 300,60 C450,60 500,340 650,340 C800,340 850,60 1000,60 C1100,60 1150,200 1200,200"
          />
          <path
            class="wave-path wave-path--2"
            d="M0,200 C100,200 150,80 300,80 C450,80 500,320 650,320 C800,320 850,80 1000,80 C1100,80 1150,200 1200,200"
          />
          <path
            class="wave-path wave-path--3"
            d="M0,200 C100,200 150,120 300,120 C450,120 500,280 650,280 C800,280 850,120 1000,120 C1100,120 1150,200 1200,200"
          />
        </svg>
      </div>

      <div class="hero-content">
        <div class="hero-tag">
          <span class="hero-channel">CH1</span>
          <span class="hero-label">FÍSICA · TEMA 04 · CBM 2026</span>
        </div>

        <h1 class="hero-title">
          Classificação por<br>
          <span class="hero-highlight">Certificação de Qualidade</span>
        </h1>

        <p class="hero-desc">
          Normas internacionais que definem confiabilidade,
          rastreabilidade e conformidade em componentes eletrônicos.
        </p>

        <div class="hero-metrics">
          <span class="hero-metric">MIL-PRF</span>
          <span class="hero-metric">AEC-Q</span>
          <span class="hero-metric">IEC 60068</span>
          <span class="hero-metric">ISO 9001</span>
        </div>
      </div>
    </div>

    <div class="hero-scroll">
      <span class="scroll-label">SCROLL</span>
      <div class="scroll-line"></div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex; align-items: center;
  justify-content: center;
  padding: 56px 8vw 0;
  position: relative;
  overflow: hidden;
}

.hero-grid {
  position: absolute; inset: 0;
  pointer-events: none;
  background-image:
    linear-gradient(var(--grid-line) 1px, transparent 1px),
    linear-gradient(90deg, var(--grid-line) 1px, transparent 1px);
  background-size: 48px 48px;
}

.hero-scanline {
  position: absolute;
  left: 0; right: 0;
  height: 1px;
  background: var(--accent);
  opacity: 0.08;
  animation: scanMove 5s ease-in-out infinite;
}
@keyframes scanMove {
  0%, 100% { top: 20%; }
  50% { top: 75%; }
}

.hero-frame {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 960px;
  padding: 3rem;
  border: 1px solid var(--border);
  background: var(--bg);
}
@media(max-width:700px) {
  .hero-frame { padding: 2rem 1.5rem; border: none; border-top: 1px solid var(--border); }
  .hero-corner { display: none; }
}

.hero-corner {
  position: absolute;
  width: 16px; height: 16px;
  border-color: var(--accent);
  opacity: .4;
}
.hero-corner.tl { top: -1px; left: -1px; border-top: 2px solid; border-left: 2px solid; }
.hero-corner.tr { top: -1px; right: -1px; border-top: 2px solid; border-right: 2px solid; }
.hero-corner.bl { bottom: -1px; left: -1px; border-bottom: 2px solid; border-left: 2px solid; }
.hero-corner.br { bottom: -1px; right: -1px; border-bottom: 2px solid; border-right: 2px solid; }

.hero-wave {
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
  opacity: .5;
}
.hero-wave svg {
  width: 100%;
  height: 100%;
}
.wave-path {
  stroke: var(--accent);
  stroke-width: 1;
  fill: none;
  opacity: .06;
}
.wave-path--2 {
  stroke: var(--accent2);
  stroke-width: .6;
  opacity: .04;
}
.wave-path--3 {
  stroke: var(--accent);
  stroke-width: .4;
  opacity: .03;
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 720px;
  margin: 0 auto;
  text-align: center;
}

.hero-tag {
  display: inline-flex; align-items: center;
  gap: .75rem;
  margin-bottom: 2rem;
  margin-left: auto; margin-right: auto;
  font-family: 'DM Mono', monospace;
  font-size: .65rem;
  letter-spacing: .1em;
  color: var(--accent);
  text-transform: uppercase;
  border: 1px solid var(--accent);
  padding: .3rem .75rem;
  opacity: 0;
  animation: fadeUp .6s .2s forwards;
}
.hero-channel {
  font-size: .6rem;
  font-weight: 600;
  opacity: .6;
  padding-right: .75rem;
  border-right: 1px solid var(--accent);
}

.hero-title {
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: 300;
  line-height: 1.08;
  color: var(--text-primary);
  letter-spacing: -.03em;
  margin-bottom: 1.5rem;
  opacity: 0;
  animation: fadeUp .7s .4s forwards;
}
.hero-highlight {
  font-weight: 500;
  color: var(--accent2);
}

.hero-desc {
  font-size: 1.05rem;
  color: var(--text-secondary);
  max-width: 560px;
  margin-left: auto; margin-right: auto;
  line-height: 1.7;
  opacity: 0;
  animation: fadeUp .7s .6s forwards;
}

.hero-metrics {
  display: flex; gap: .5rem;
  margin-top: 2rem;
  flex-wrap: wrap;
  justify-content: center;
  opacity: 0;
  animation: fadeUp .7s .8s forwards;
}
.hero-metric {
  font-family: 'DM Mono', monospace;
  font-size: .6rem;
  padding: .2rem .5rem;
  border: 1px solid var(--border);
  color: var(--text-dim);
  letter-spacing: .03em;
}
@media(max-width:700px) { .hero-metrics { display: none; } }

.hero-scroll {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex; flex-direction: column;
  align-items: center;
  gap: .5rem;
  opacity: 0;
  animation: fadeIn .8s 1.2s forwards;
}
.scroll-label {
  font-family: 'DM Mono', monospace;
  font-size: .55rem;
  letter-spacing: .15em;
  color: var(--text-dim);
}
.scroll-line {
  width: 1px; height: 24px;
  background: linear-gradient(to bottom, var(--accent), transparent);
  animation: scrollPulse 2s ease-in-out infinite;
}
@keyframes scrollPulse {
  0%, 100% { opacity: .2; }
  50% { opacity: .8; }
}
</style>
