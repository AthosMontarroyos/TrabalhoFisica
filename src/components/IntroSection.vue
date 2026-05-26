<template>
  <section id="intro">
    <div class="container">
      <div class="section-head">
        <span class="section-num">01</span>
        <div>
          <span class="section-label">FUNDAMENTO</span>
          <h2 class="section-title">O que é Certificação de Qualidade?</h2>
        </div>
      </div>

      <div class="intro-grid">
        <div class="intro-text">
          <p class="intro-body">
            A <strong>certificação de qualidade</strong> de componentes eletrônicos
            é o processo pelo qual um componente é avaliado e validado por
            organismos independentes ou por normas técnicas reconhecidas,
            garantindo que suas características elétricas, mecânicas e de
            confiabilidade estejam dentro de parâmetros especificados.
          </p>
          <p class="intro-body">
            Diferente da simples <strong>conformidade de fabricação</strong>,
            a certificação implica rastreabilidade de lote, ensaios
            destrutivos e não-destrutivos, qualificação por temperatura
            e estresse, e documentação auditável ao longo de toda a
            cadeia de fornecimento.
          </p>
          <blockquote class="quote">
            <p>"Um componente sem certificação não é necessariamente ruim — mas é imprevisível. E sistemas críticos não toleram imprevisibilidade."</p>
            <cite>— Princípio de Engenharia de Confiabilidade</cite>
          </blockquote>
        </div>

        <div class="intro-specs">
          <div class="spec-card">
            <span class="spec-label">GRAU MAIS EXIGENTE</span>
            <span class="spec-value">MIL-PRF</span>
            <span class="spec-desc">Militar · Aeroespacial · Alta Confiabilidade</span>
          </div>
          <div class="spec-card">
            <span class="spec-label">GRAU AUTOMOTIVO</span>
            <span class="spec-value">AEC-Q</span>
            <span class="spec-desc">Alta temperatura · Vibração · Ciclagem térmica</span>
          </div>
          <div class="spec-card">
            <span class="spec-label">USO GERAL</span>
            <span class="spec-value">IEC / ABNT</span>
            <span class="spec-desc">Industrial · Consumo · Comercial</span>
          </div>
          <div class="spec-card">
            <span class="spec-label">GESTÃO</span>
            <span class="spec-value">ISO 9001</span>
            <span class="spec-desc">Sistema de gestão do fabricante</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
#intro { padding: 6rem 8vw; }

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

.intro-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: start;
}
@media(max-width:800px){ .intro-grid { grid-template-columns: 1fr; gap: 2rem; } }

.intro-body {
  font-size: .92rem;
  color: var(--text-secondary);
  line-height: 1.8;
  margin-bottom: 1rem;
}
.intro-body strong {
  color: var(--text-primary);
  font-weight: 500;
}

.quote {
  border-left: 2px solid var(--accent);
  padding: 1rem 1.25rem;
  margin: 1.5rem 0;
  background: var(--surface);
}
.quote p {
  font-size: .95rem;
  font-style: italic;
  color: var(--text-primary);
  line-height: 1.7;
}
.quote cite {
  display: block;
  margin-top: .5rem;
  font-family: 'DM Mono', monospace;
  font-size: .65rem;
  font-style: normal;
  color: var(--text-dim);
}

.intro-specs {
  display: flex; flex-direction: column;
  gap: .75rem;
}
.spec-card {
  border: 1px solid var(--border);
  background: var(--surface);
  padding: 1rem 1.25rem;
  transition: border-color .25s;
}
.spec-card:hover { border-color: var(--accent); }
.spec-label {
  font-family: 'DM Mono', monospace;
  font-size: .55rem;
  letter-spacing: .1em;
  color: var(--text-dim);
  display: block;
  margin-bottom: .25rem;
}
.spec-value {
  display: block;
  font-family: 'DM Mono', monospace;
  font-size: 1.2rem;
  font-weight: 500;
  color: var(--accent);
  margin-bottom: .15rem;
}
.spec-desc {
  font-size: .75rem;
  color: var(--text-secondary);
  line-height: 1.4;
}
</style>
