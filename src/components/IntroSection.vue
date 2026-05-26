<template>
  <section id="intro">
    <p class="section-tag">01 — Fundamento</p>
    <h2 class="section-title">O que é Certificação de Qualidade?</h2>
    <div class="intro-grid">
      <div>
        <p class="intro-body">
          A <strong>certificação de qualidade</strong> de componentes eletrônicos
          é o processo pelo qual um componente é avaliado e validado por
          organismos independentes ou por normas técnicas reconhecidas,
          garantindo que suas características elétricas, mecânicas e de
          confiabilidade estejam dentro de parâmetros especificados.
        </p>
        <br>
        <p class="intro-body">
          Diferente da simples <strong>conformidade de fabricação</strong>,
          a certificação implica rastreabilidade de lote, ensaios
          destrutivos e não-destrutivos, qualificação por temperatura
          e estresse, e documentação auditável ao longo de toda a
          cadeia de fornecimento.
        </p>
        <div class="quote-block">
          <p class="quote-text">
            "Um componente sem certificação não é necessariamente ruim —
            mas é imprevisível. E sistemas críticos não toleram imprevisibilidade."
          </p>
          <p class="quote-source">— Princípio de Engenharia de Confiabilidade</p>
        </div>
      </div>
      <div class="intro-stat-block">
        <div class="stat-card">
          <div class="stat-num">MIL-PRF</div>
          <div class="stat-label">Grau Militar — Padrão mais exigente</div>
        </div>
        <div class="stat-card">
          <div class="stat-num">AEC-Q</div>
          <div class="stat-label">Automotivo — Alta temperatura e vibração</div>
        </div>
        <div class="stat-card">
          <div class="stat-num">IEC / ABNT</div>
          <div class="stat-label">Industrial e consumo — Uso geral</div>
        </div>
        <div class="stat-card">
          <div class="stat-num">ISO 9001</div>
          <div class="stat-label">Sistema de gestão do fabricante</div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.intro-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem; align-items: start;
}
@media(max-width:700px){ .intro-grid { grid-template-columns: 1fr; gap: 2rem; } }

.intro-body { font-size: 1.05rem; color: var(--text-secondary); line-height: 2; transition: color .5s; }
.intro-body strong { color: var(--blush); font-weight: 600; }

.intro-stat-block { display: flex; flex-direction: column; gap: 1.5rem; padding-top: .5rem; }
.stat-card {
  border: 1px solid rgba(255,255,255,.05);
  background: linear-gradient(135deg, var(--stat-bg1) 0%, var(--stat-bg2) 100%);
  border-radius: 4px;
  padding: 1.4rem 1.6rem;
  position: relative; overflow: hidden;
  transition: border-color .3s, transform .3s, background .5s;
}
.stat-card::before {
  content: '';
  position: absolute; top: 0; left: 0;
  width: 3px; height: 100%;
  background: var(--rose);
}
.stat-card:hover { border-color: var(--rose); transform: translateX(4px); }
.stat-num {
  font-family: 'Cormorant Garamond', serif;
  font-size: 2.4rem; font-weight: 600;
  color: var(--blush); line-height: 1; transition: color .5s;
}
.stat-label {
  font-family: 'DM Mono', monospace;
  font-size: .7rem; letter-spacing: .2em;
  color: var(--text-dim); margin-top: .4rem;
}

.quote-block {
  border-left: 2px solid var(--rose);
  padding: 1.5rem 2rem; margin: 3rem 0;
  background: linear-gradient(to right, var(--card-bg1), transparent);
  border-radius: 0 4px 4px 0;
}
.quote-text {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.3rem; font-style: italic;
  color: var(--blush); line-height: 1.8; transition: color .5s;
}
.quote-source {
  margin-top: .8rem;
  font-family: 'DM Mono', monospace;
  font-size: .65rem; letter-spacing: .2em; color: var(--text-dim);
}
</style>
