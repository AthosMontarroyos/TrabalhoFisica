<template>
  <footer>
    <div class="container">
      <div class="footer-inner">
        <div class="footer-brand">
          <span class="footer-name">CERTIFICAÇÃO DE QUALIDADE</span>
          <span class="footer-ref">TEMA 04 · FÍSICA · CBM 2026</span>
        </div>
        <div class="footer-info">
          <a
            href="https://github.com/AthosMontarroyos/TrabalhoCertificacaoDeQualidade-Website"
            target="_blank"
            class="footer-link"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="12" height="12">
              <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.29 9.41 7.86 10.94.57.1.78-.25.78-.55v-1.94c-3.2.7-3.87-1.54-3.87-1.54-.52-1.33-1.27-1.68-1.27-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.24 3.34.95.1-.74.4-1.24.72-1.53-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.17a10.93 10.93 0 0 1 5.74 0c2.19-1.48 3.15-1.17 3.15-1.17.62 1.58.23 2.75.11 3.04.74.81 1.18 1.83 1.18 3.09 0 4.42-2.69 5.39-5.26 5.68.41.36.78 1.07.78 2.15v3.19c0 .31.2.67.79.55C20.21 21.4 23.5 17.1 23.5 12 23.5 5.65 18.35.5 12 .5z"/>
            </svg>
            <span>GitHub</span>
          </a>
          <span class="footer-divider">|</span>
          <span class="footer-author">Feito por <strong>AthosMontarroyos</strong></span>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  border-top: 1px solid var(--border);
  padding: 1.25rem 8vw;
}
.footer-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: .75rem;
}
.footer-brand {
  display: flex;
  flex-direction: column;
  gap: .1rem;
}
.footer-name {
  font-family: 'DM Mono', monospace;
  font-size: .65rem;
  letter-spacing: .08em;
  color: var(--text-secondary);
}
.footer-ref {
  font-family: 'DM Mono', monospace;
  font-size: .55rem;
  color: var(--text-dim);
}
.footer-info {
  display: flex;
  align-items: center;
  gap: .5rem;
}
.footer-link {
  display: flex; align-items: center;
  gap: .3rem;
  font-family: 'DM Mono', monospace;
  font-size: .6rem;
  color: var(--text-dim);
  text-decoration: none;
  transition: color .25s;
}
.footer-link:hover { color: var(--accent); }
.footer-divider {
  font-size: .55rem;
  color: var(--text-dim);
  opacity: .3;
}
.footer-author {
  font-family: 'DM Mono', monospace;
  font-size: .6rem;
  color: var(--text-dim);
}
.footer-author strong { color: var(--accent); font-weight: 400; }
</style>
