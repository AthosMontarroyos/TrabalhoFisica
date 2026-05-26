<template>
  <div class="layout">
    <aside>
      <div class="sidebar-head">
        <div class="name">CBM — 2026</div>
        <div class="sub">Documentação</div>
      </div>

      <span class="sidebar-label">Conteúdo</span>
      <a class="sidebar-link" href="#visao">Visão Geral</a>
      <a class="sidebar-link" href="#stack">Stack Tecnológico</a>
      <a class="sidebar-link" href="#arquitetura">Arquitetura</a>
      <a class="sidebar-link" href="#grupo">Grupo</a>
      <a class="sidebar-link" href="#fontes">Fontes</a>

      <router-link class="back-btn" to="/">← Voltar ao site</router-link>
    </aside>

    <main>
      <div class="page-head">
        <p class="eyebrow">TEMA 04 · GRUPO 4 · CBM</p>
        <h1>Documentação</h1>
        <p>Especificações de linguagens, frameworks, arquitetura e referências bibliográficas utilizadas no desenvolvimento do projeto.</p>
      </div>

      <section class="doc-section" id="visao">
        <div class="doc-section-head">
          <span class="doc-section-num">01</span>
          <h2 class="doc-section-title">Visão Geral do Projeto</h2>
        </div>
        <p class="prose">
          Este projeto é uma <strong>aplicação web front-end</strong> desenvolvida para apresentação acadêmica
          do Tema 04 — Classificação por Certificação de Qualidade de Componentes Eletrônicos —
          na disciplina de Física (Que Haja Luz!) do <strong>3° Ano do CBM (Clovis Borges Miguel)</strong>, 2026.
        </p>
        <p class="prose">
          O escopo é <strong>exclusivamente front-end</strong>: não há servidor, banco de dados em produção,
          nem autenticação. O projeto é um site estático enriquecido com reatividade via Vue 3,
          hospedado na <strong>Cloudflare Pages</strong>.
        </p>
        <div class="callout">
          <p><strong>Hospedagem:</strong> o site está hospedado na <strong>Cloudflare Pages</strong>, com deploy contínuo a partir do repositório GitHub.</p>
        </div>
      </section>

      <section class="doc-section" id="stack">
        <div class="doc-section-head">
          <span class="doc-section-num">02</span>
          <h2 class="doc-section-title">Stack</h2>
        </div>
        <p class="prose">Tecnologias utilizadas no projeto.</p>

        <p class="stack-subtitle">FRAMEWORKS & BIBLIOTECAS</p>
        <div class="stack-grid">
          <div class="stack-card">
            <div class="stack-card-top">
              <img class="stack-icon-img" :src="vueImg" alt="Vue">
              <span class="stack-badge badge-fw">FRAMEWORK</span>
            </div>
            <div class="stack-name">Vue.js 3</div>
            <div class="stack-desc">Interface reativa com Composition API (<code>ref</code>, <code>onMounted</code>).</div>
            <div class="stack-version">v3.4.21 · Vite</div>
          </div>
          <div class="stack-card">
            <div class="stack-card-top">
              <img class="stack-icon-img" :src="viteImg" alt="Vite">
              <span class="stack-badge badge-tool">BUILD</span>
            </div>
            <div class="stack-name">Vite</div>
            <div class="stack-desc">Bundler e dev-server com HMR instantâneo e build otimizado.</div>
            <div class="stack-version">v5.x</div>
          </div>
          <div class="stack-card">
            <div class="stack-card-top">
              <img class="stack-icon-img" :src="vueImg" alt="Vue Router">
              <span class="stack-badge badge-fw">ROTEAMENTO</span>
            </div>
            <div class="stack-name">Vue Router</div>
            <div class="stack-desc">Roteamento SPA entre Home e Docs.</div>
            <div class="stack-version">v4.x</div>
          </div>
        </div>

        <p class="stack-subtitle">LINGUAGENS</p>
        <div class="stack-grid">
          <div class="stack-card">
            <div class="stack-card-top">
              <img class="stack-icon-img" :src="jsImg" alt="JavaScript">
              <span class="stack-badge badge-lang">LINGUAGEM</span>
            </div>
            <div class="stack-name">JavaScript (ES2022+)</div>
            <div class="stack-desc">Lógica Vue, Canvas API, Intersection Observer, temas e cursor.</div>
            <div class="stack-version">ES2022+</div>
          </div>
          <div class="stack-card">
            <div class="stack-card-top">
              <img class="stack-icon-img" :src="cssImg" alt="CSS3">
              <span class="stack-badge badge-lang">ESTILO</span>
            </div>
            <div class="stack-name">CSS3</div>
            <div class="stack-desc">Custom Properties, Grid, Flex, animações e variáveis de tema.</div>
            <div class="stack-version">Scoped · Global</div>
          </div>
          <div class="stack-card">
            <div class="stack-card-top">
              <img class="stack-icon-img" :src="htmlImg" alt="HTML5">
              <span class="stack-badge badge-lang">MARKUP</span>
            </div>
            <div class="stack-name">HTML5</div>
            <div class="stack-desc">Vue SFC com estrutura semântica.</div>
            <div class="stack-version">Semântico</div>
          </div>
        </div>

        <p class="stack-subtitle">FERRAMENTAS & INFRA</p>
        <div class="stack-grid">
          <div class="stack-card">
            <div class="stack-card-top">
              <img class="stack-icon-img" :src="nodeImg" alt="Node.js">
              <span class="stack-badge badge-infra">RUNTIME</span>
            </div>
            <div class="stack-name">Node.js</div>
            <div class="stack-desc">Runtime para toolchain de desenvolvimento.</div>
            <div class="stack-version">v20 LTS+</div>
          </div>
          <div class="stack-card">
            <div class="stack-card-top">
              <img class="stack-icon-img" :src="cloudflareImg" alt="Cloudflare">
              <span class="stack-badge badge-infra">HOSPEDAGEM</span>
            </div>
            <div class="stack-name">Cloudflare Pages</div>
            <div class="stack-desc">Deploy contínuo via GitHub com CDN global.</div>
            <div class="stack-version">Pages · CDN</div>
          </div>
        </div>
      </section>

      <section class="doc-section" id="arquitetura">
        <div class="doc-section-head">
          <span class="doc-section-num">03</span>
          <h2 class="doc-section-title">Arquitetura</h2>
        </div>
        <p class="prose">O projeto utiliza <strong>Vite + Vue 3 + Vue Router</strong> com Single File Components (.vue) e composables para lógica reutilizável.</p>

        <div class="arch-box">
          <div class="arch-layer presentation">
            <span class="arch-layer-label">Apresentação</span>
            <span class="arch-layer-content">Vue SFC · Directives · CSS3 Custom Properties · Scoped Styles</span>
          </div>
          <div class="arch-arrow">↕</div>
          <div class="arch-layer state">
            <span class="arch-layer-label">Estado</span>
            <span class="arch-layer-content">Vue 3 Composition API · ref() · onMounted() · reatividade</span>
          </div>
          <div class="arch-arrow">↕</div>
          <div class="arch-layer data">
            <span class="arch-layer-label">Dados</span>
            <span class="arch-layer-content">Arrays locais (certs, steps, team) · sem API externa</span>
          </div>
          <div class="arch-arrow">↕</div>
          <div class="arch-layer infra">
            <span class="arch-layer-label">Infra</span>
            <span class="arch-layer-content">Vite · Vue Router · Cloudflare Pages · Canvas API</span>
          </div>
        </div>

        <div class="callout">
          <p><strong>Recursos nativos:</strong> Canvas API (estrelas), Intersection Observer (animações), CSS Custom Properties (temas), mix-blend-mode (cursor).</p>
        </div>
      </section>

      <section class="doc-section" id="grupo">
        <div class="doc-section-head">
          <span class="doc-section-num">04</span>
          <h2 class="doc-section-title">Grupo</h2>
        </div>

        <table class="role-table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Função</th>
              <th>Responsabilidade</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Laisa</td><td><span class="role-chip">Líder</span></td><td>Coordenação geral, revisão, aprovação final</td></tr>
            <tr><td>Athos</td><td><span class="role-chip">Design / Dev</span></td><td>Front-end, design system, Vue e CSS</td></tr>
            <tr><td>Johann</td><td><span class="role-chip">Suporte Design</span></td><td>Identidade visual, assets, revisão de UI</td></tr>
            <tr><td>Júlio</td><td><span class="role-chip">Apresentação</span></td><td>Apresentação do trabalho</td></tr>
            <tr><td>Kayo</td><td><span class="role-chip">Pesquisa</span></td><td>Normas técnicas e dados das certificações</td></tr>
            <tr><td>Eder</td><td><span class="role-chip">Pesquisa</span></td><td>Processos de qualificação e referências</td></tr>
            <tr><td>Bruna</td><td><span class="role-chip">Pesquisa</span></td><td>Pesquisas complementares</td></tr>
          </tbody>
        </table>
      </section>

      <section class="doc-section" id="fontes">
        <div class="doc-section-head">
          <span class="doc-section-num">05</span>
          <h2 class="doc-section-title">Fontes e Referências</h2>
        </div>
        <p class="prose">Referências técnicas sobre certificação de qualidade de componentes eletrônicos.</p>

        <div class="source-list">
          <div class="source-card">
            <div class="source-num">[01]</div>
            <div class="source-body">
              <div class="source-title">INMETRO — Certificação de Produtos Eletroeletrônicos</div>
              <div class="source-meta">INMETRO <span class="source-tag">Regulatório BR</span></div>
              <a class="source-url" href="https://www.gov.br/inmetro/pt-br" target="_blank" rel="noopener noreferrer">gov.br/inmetro</a>
            </div>
          </div>
          <div class="source-card">
            <div class="source-num">[02]</div>
            <div class="source-body">
              <div class="source-title">ABNT NBR ISO 9001 — Sistemas de Gestão da Qualidade</div>
              <div class="source-meta">ABNT <span class="source-tag">Norma BR</span></div>
              <a class="source-url" href="https://www.abnt.org.br" target="_blank" rel="noopener noreferrer">abnt.org.br</a>
            </div>
          </div>
          <div class="source-card">
            <div class="source-num">[03]</div>
            <div class="source-body">
              <div class="source-title">ANATEL — Homologação de Equipamentos</div>
              <div class="source-meta">ANATEL <span class="source-tag">Regulatório BR</span></div>
              <a class="source-url" href="https://www.gov.br/anatel/pt-br" target="_blank" rel="noopener noreferrer">gov.br/anatel</a>
            </div>
          </div>
          <div class="source-card">
            <div class="source-num">[04]</div>
            <div class="source-body">
              <div class="source-title">IEC 60068 — Ensaios Ambientais (versão ABNT)</div>
              <div class="source-meta">ABNT / IEC <span class="source-tag">Norma</span></div>
              <a class="source-url" href="https://www.abntcatalogo.com.br/" target="_blank" rel="noopener noreferrer">abntcatalogo.com.br</a>
            </div>
          </div>
          <div class="source-card">
            <div class="source-num">[05]</div>
            <div class="source-body">
              <div class="source-title">MIL-PRF-19500 — Especificação Militar (referência)</div>
              <div class="source-meta">DLA · U.S. DoD <span class="source-tag">Norma</span></div>
              <a class="source-url" href="https://landandmaritimeapps.dla.mil/programs/milspec/" target="_blank" rel="noopener noreferrer">landandmaritimeapps.dla.mil</a>
            </div>
          </div>
          <div class="source-card">
            <div class="source-num">[06]</div>
            <div class="source-body">
              <div class="source-title">AEC-Q — Qualificação Automotiva (documentos)</div>
              <div class="source-meta">Automotive Electronics Council <span class="source-tag">Norma</span></div>
              <a class="source-url" href="https://www.aecouncil.com/AECDocuments.html" target="_blank" rel="noopener noreferrer">aecouncil.com</a>
            </div>
          </div>
          <div class="source-card">
            <div class="source-num">[07]</div>
            <div class="source-body">
              <div class="source-title">ISO 9001:2015 — Quality Management Systems</div>
              <div class="source-meta">ISO <span class="source-tag">Norma</span></div>
              <a class="source-url" href="https://www.iso.org/standard/62085.html" target="_blank" rel="noopener noreferrer">iso.org</a>
            </div>
          </div>
          <div class="source-card">
            <div class="source-num">[08]</div>
            <div class="source-body">
              <div class="source-title">Texas Instruments — Component Qualification (App Note)</div>
              <div class="source-meta">Texas Instruments <span class="source-tag">App Note</span></div>
              <a class="source-url" href="https://www.ti.com/lit/an/sszb007/sszb007.pdf" target="_blank" rel="noopener noreferrer">ti.com/lit/an/sszb007</a>
            </div>
          </div>
        </div>
      </section>
    </main>

    <div class="doc-rail">
      <span class="rail-number">{{ currentSection }}</span>
      <span class="rail-label">SEÇÃO</span>
      <div class="rail-line"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import vueImg from '../assets/Stack/vue.png'
import viteImg from '../assets/Stack/vite.png'
import jsImg from '../assets/Stack/js.png'
import cssImg from '../assets/Stack/css.png'
import htmlImg from '../assets/Stack/html.png'
import nodeImg from '../assets/Stack/nodejs.png'
import cloudflareImg from '../assets/Stack/cloudflare.png'

const currentSection = ref('01')

onMounted(() => {
  const sections = document.querySelectorAll('.doc-section')
  const links = document.querySelectorAll('.sidebar-link')
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        links.forEach(l => l.classList.remove('active'))
        const active = document.querySelector(`.sidebar-link[href="#${e.target.id}"]`)
        if (active) active.classList.add('active')
        const num = e.target.querySelector('.doc-section-num')
        if (num) currentSection.value = num.textContent.trim()
      }
    })
  }, { threshold: .35 })
  sections.forEach(s => obs.observe(s))
})
</script>

<style>
@import '../styles/docs.css';
</style>
