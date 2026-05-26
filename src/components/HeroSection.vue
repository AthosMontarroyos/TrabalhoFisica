<template>
  <section class="hero">
    <p class="hero-eyebrow">Física (Que Haja Luz!) · Tema 04</p>
    <h1 class="hero-title">
      Classificação<br>
      por <em>Certificação</em><br>
      de Qualidade
    </h1>
    <p class="hero-sub">
      Normas internacionais que definem confiabilidade,
      rastreabilidade e conformidade em componentes eletrônicos.
    </p>
    <div class="hero-line">
      <div class="scroll-arrow"></div>
      <span>SCROLL</span>
    </div>
  </section>
</template>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 8vw;
  position: relative;
  padding-top: 60px;
}
.hero-eyebrow {
  font-family: 'DM Mono', monospace;
  font-size: .72rem;
  letter-spacing: .3em;
  color: var(--rose);
  text-transform: uppercase;
  margin-bottom: 2rem;
  opacity: 0;
  animation: fadeUp .8s .2s forwards;
}
.hero-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(3.2rem, 8vw, 7.5rem);
  font-weight: 300;
  line-height: 1.0;
  color: var(--blush);
  opacity: 0;
  animation: fadeUp .9s .4s forwards;
  transition: color .5s;
}
.hero-title em { font-style: italic; color: var(--rose); }
.hero-sub {
  margin-top: 2rem;
  font-size: 1rem;
  color: var(--text-dim);
  max-width: 480px;
  line-height: 1.8;
  opacity: 0;
  animation: fadeUp .9s .65s forwards;
}
.hero-line {
  position: absolute;
  bottom: 3rem; left: 8vw;
  display: flex; align-items: center; gap: 1rem;
  opacity: 0;
  animation: fadeUp .9s .9s forwards;
}
.hero-line span {
  font-family: 'DM Mono', monospace;
  font-size: .68rem;
  letter-spacing: .2em;
  color: var(--text-dim);
}
.scroll-arrow {
  width: 1px; height: 48px;
  background: linear-gradient(to bottom, transparent, var(--rose));
  animation: pulse 2s infinite;
}
</style>
