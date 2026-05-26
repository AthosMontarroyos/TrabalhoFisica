<template>
  <div class="layout">
    <aside>
      <div class="sidebar-brand">
        <div class="name">CBM — <strong>2026</strong></div>
        <div class="year">DOCUMENTAÇÃO</div>
      </div>

      <span class="sidebar-section-title">Conteúdo</span>
      <a class="sidebar-link" href="#visao"><span class="dot"></span>Visão Geral</a>
      <a class="sidebar-link" href="#stack"><span class="dot"></span>Stack Tecnológico</a>
      <a class="sidebar-link" href="#arquitetura"><span class="dot"></span>Arquitetura</a>
      <a class="sidebar-link" href="#grupo"><span class="dot"></span>Grupo</a>
      <a class="sidebar-link" href="#fontes"><span class="dot"></span>Fontes</a>

      <router-link class="back-btn" to="/">← Voltar ao site</router-link>
    </aside>

    <main>
      <div class="page-header">
        <p class="eyebrow">TEMA 04 · GRUPO 4 · CBM</p>
        <h1>Documentação<br>Técnica</h1>
        <p>Especificações de linguagens, frameworks, arquitetura e referências bibliográficas utilizadas no desenvolvimento do projeto.</p>
      </div>

      <section class="doc-section" id="visao">
        <div class="doc-section-header">
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
        <div class="doc-section-header">
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
            <div class="stack-desc">Framework reativo para construção da interface. Composition API com <code>ref</code>, <code>onMounted</code> e reatividade declarativa.</div>
            <div class="stack-version">v3.4.21 · Vite (build atual)</div>
          </div>
          <div class="stack-card">
            <div class="stack-card-top">
              <img class="stack-icon-img" :src="viteImg" alt="Vite">
              <span class="stack-badge badge-tool">BUILD TOOL</span>
            </div>
            <div class="stack-name">Vite</div>
            <div class="stack-desc">Bundler e dev-server. HMR instantâneo, tree-shaking e build otimizado para produção.</div>
            <div class="stack-version">v5.x</div>
          </div>
          <div class="stack-card">
            <div class="stack-card-top">
              <img class="stack-icon-img" :src="vueImg" alt="Vue Router">
              <span class="stack-badge badge-fw">ROTEAMENTO</span>
            </div>
            <div class="stack-name">Vue Router</div>
            <div class="stack-desc">Roteamento SPA entre Home e Docs. Navegação sem recarregamento.</div>
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
            <div class="stack-desc">Lógica de aplicação: Vue setup(), canvas API para estrelas, Intersection Observer, cursor customizado e alternador de temas.</div>
            <div class="stack-version">ES2022+</div>
          </div>
          <div class="stack-card">
            <div class="stack-card-top">
              <img class="stack-icon-img" :src="cssImg" alt="CSS3">
              <span class="stack-badge badge-lang">ESTILO</span>
            </div>
            <div class="stack-name">CSS3</div>
            <div class="stack-desc">CSS puro com Custom Properties (variáveis de tema), Grid, Flexbox, Intersection Observer, conic-gradient e animações @keyframes.</div>
            <div class="stack-version">CSS3 · scoped components</div>
          </div>
          <div class="stack-card">
            <div class="stack-card-top">
              <img class="stack-icon-img" :src="htmlImg" alt="HTML5">
              <span class="stack-badge badge-lang">MARKUP</span>
            </div>
            <div class="stack-name">HTML5</div>
            <div class="stack-desc">Estrutura semântica com componentes Vue Single File Components (.vue).</div>
            <div class="stack-version">HTML5 · semântico</div>
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
            <div class="stack-desc">Runtime para Vite e toolchain de desenvolvimento.</div>
            <div class="stack-version">v20 LTS+</div>
          </div>
          <div class="stack-card">
            <div class="stack-card-top">
              <img class="stack-icon-img" :src="cloudflareImg" alt="Cloudflare">
              <span class="stack-badge badge-infra">HOSPEDAGEM</span>
            </div>
            <div class="stack-name">Cloudflare Pages</div>
            <div class="stack-desc">Hospedagem do site estático com deploy contínuo via GitHub.</div>
            <div class="stack-version">Pages · CDN Global</div>
          </div>
        </div>
      </section>

      <section class="doc-section" id="arquitetura">
        <div class="doc-section-header">
          <span class="doc-section-num">03</span>
          <h2 class="doc-section-title">Arquitetura</h2>
        </div>
        <p class="prose">O projeto utiliza <strong>Vite + Vue 3 + Vue Router</strong> com Single File Components (.vue) e composables para lógica reutilizável.</p>

        <div class="arch-box">
          <div class="arch-layer presentation">
            <span class="arch-layer-label">Apresentação</span>
            <span class="arch-layer-content">Vue SFC · Directives (v-for, v-bind, @event) · CSS3 Custom Properties · Scoped Styles</span>
          </div>
          <div class="arch-arrow">↕</div>
          <div class="arch-layer state">
            <span class="arch-layer-label">Estado</span>
            <span class="arch-layer-content">Vue 3 Composition API · ref() · onMounted() · provide/inject · reatividade declarativa</span>
          </div>
          <div class="arch-arrow">↕</div>
          <div class="arch-layer data">
            <span class="arch-layer-label">Dados</span>
            <span class="arch-layer-content">Arrays JS locais (certs, steps, team) · sem API externa · sem persistência</span>
          </div>
          <div class="arch-arrow">↕</div>
          <div class="arch-layer infra">
            <span class="arch-layer-label">Infra</span>
            <span class="arch-layer-content">Vite · Vue Router · Cloudflare Pages · Google Fonts · Canvas API nativa · Intersection Observer</span>
          </div>
        </div>

        <div class="callout">
          <p><strong>Recursos nativos utilizados:</strong> Canvas API (estrelas animadas), Intersection Observer API (animações de entrada na timeline), CSS Custom Properties dinâmicas (troca de tema sem re-render), mix-blend-mode (cursor).</p>
        </div>
      </section>

      <section class="doc-section" id="grupo">
        <div class="doc-section-header">
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
            <tr><td>Laisa</td><td><span class="role-chip">Líder</span></td><td>Coordenação geral, revisão de conteúdo e aprovação final</td></tr>
            <tr><td>Athos</td><td><span class="role-chip">Design / Dev</span></td><td>Arquitetura front-end, design system, implementação Vue e CSS</td></tr>
            <tr><td>Johann</td><td><span class="role-chip">Suporte Design</span></td><td>Auxílio na identidade visual, assets e revisão de UI</td></tr>
            <tr><td>Júlio</td><td><span class="role-chip">Apresentação</span></td><td>Roteiro de apresentação oral e slides de apoio</td></tr>
            <tr><td>Kayo</td><td><span class="role-chip">Pesquisa</span></td><td>Levantamento de normas técnicas e dados das certificações</td></tr>
            <tr><td>Eder</td><td><span class="role-chip">Pesquisa</span></td><td>Pesquisa sobre processos de qualificação e referências bibliográficas</td></tr>
            <tr><td>Bruna</td><td><span class="role-chip">Pesquisa</span></td><td>Pesquisa complementar e curadoria de fontes acadêmicas</td></tr>
          </tbody>
        </table>
      </section>

      <section class="doc-section" id="fontes">
        <div class="doc-section-header">
          <span class="doc-section-num">05</span>
          <h2 class="doc-section-title">Fontes e Referências</h2>
        </div>
        <p class="prose">Referências técnicas utilizadas para embasar o conteúdo sobre certificações de qualidade de componentes eletrônicos.</p>

        <div class="source-list">
          <div class="source-card">
            <div class="source-num">[01]</div>
            <div class="source-body">
              <div class="source-title">MIL-PRF-19500 — General Specification for Semiconductor Devices</div>
              <div class="source-meta">Defense Logistics Agency (DLA) · U.S. Department of Defense <span class="source-tag">Norma</span></div>
              <div class="source-url">https://landandmaritimeapps.dla.mil/programs/milspec/</div>
            </div>
          </div>
          <div class="source-card">
            <div class="source-num">[02]</div>
            <div class="source-body">
              <div class="source-title">AEC-Q100 Rev-H — Failure Mechanism Based Stress Test Qualification for Integrated Circuits</div>
              <div class="source-meta">Automotive Electronics Council (AEC) · 2014 <span class="source-tag">Norma</span></div>
              <div class="source-url">https://www.aecouncil.com/AECDocuments.html</div>
            </div>
          </div>
          <div class="source-card">
            <div class="source-num">[03]</div>
            <div class="source-body">
              <div class="source-title">AEC-Q101 Rev-D — Failure Mechanism Based Stress Test Qualification for Discrete Semiconductors</div>
              <div class="source-meta">Automotive Electronics Council (AEC) · 2015 <span class="source-tag">Norma</span></div>
              <div class="source-url">https://www.aecouncil.com/AECDocuments.html</div>
            </div>
          </div>
          <div class="source-card">
            <div class="source-num">[04]</div>
            <div class="source-body">
              <div class="source-title">IEC 60068 — Environmental Testing (Parts 1–3)</div>
              <div class="source-meta">International Electrotechnical Commission (IEC) <span class="source-tag">Norma</span></div>
              <div class="source-url">https://webstore.iec.ch/publication/1037</div>
            </div>
          </div>
          <div class="source-card">
            <div class="source-num">[05]</div>
            <div class="source-body">
              <div class="source-title">ISO 9001:2015 — Quality management systems — Requirements</div>
              <div class="source-meta">International Organization for Standardization (ISO) · 2015 <span class="source-tag">Norma</span></div>
              <div class="source-url">https://www.iso.org/standard/62085.html</div>
            </div>
          </div>
          <div class="source-card">
            <div class="source-num">[06]</div>
            <div class="source-body">
              <div class="source-title">IATF 16949:2016 — Quality Management System Requirements for Automotive Production</div>
              <div class="source-meta">International Automotive Task Force (IATF) · 2016 <span class="source-tag">Norma</span></div>
              <div class="source-url">https://www.iatfglobaloversight.org</div>
            </div>
          </div>
          <div class="source-card">
            <div class="source-num">[07]</div>
            <div class="source-body">
              <div class="source-title">ABNT NBR ISO 9001 — Sistemas de Gestão da Qualidade</div>
              <div class="source-meta">Associação Brasileira de Normas Técnicas (ABNT) <span class="source-tag">Norma BR</span></div>
              <div class="source-url">https://www.abnt.org.br</div>
            </div>
          </div>
          <div class="source-card">
            <div class="source-num">[08]</div>
            <div class="source-body">
              <div class="source-title">INMETRO — Certificação Compulsória de Produtos Eletroeletrônicos</div>
              <div class="source-meta">Instituto Nacional de Metrologia, Qualidade e Tecnologia (INMETRO) <span class="source-tag">Regulatório BR</span></div>
              <div class="source-url">https://www.gov.br/inmetro/pt-br</div>
            </div>
          </div>
          <div class="source-card">
            <div class="source-num">[09]</div>
            <div class="source-body">
              <div class="source-title">Reliability Engineering — Component Qualification Fundamentals</div>
              <div class="source-meta">Texas Instruments Application Report · SSZB007 <span class="source-tag">App Note</span></div>
              <div class="source-url">https://www.ti.com/lit/an/sszb007/sszb007.pdf</div>
            </div>
          </div>
          <div class="source-card">
            <div class="source-num">[10]</div>
            <div class="source-body">
              <div class="source-title">Cloudflare Pages Documentation</div>
              <div class="source-meta">Cloudflare, Inc. <span class="source-tag">Docs Técnicos</span></div>
              <div class="source-url">https://developers.cloudflare.com/pages/</div>
            </div>
          </div>
          <div class="source-card">
            <div class="source-num">[11]</div>
            <div class="source-body">
              <div class="source-title">Vue.js 3 Official Documentation</div>
              <div class="source-meta">Evan You et al. · vuejs.org <span class="source-tag">Docs Técnicos</span></div>
              <div class="source-url">https://vuejs.org/guide/introduction.html</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import vueImg from '../assets/Stack/vue.png'
import viteImg from '../assets/Stack/vite.png'
import jsImg from '../assets/Stack/js.png'
import cssImg from '../assets/Stack/css.png'
import htmlImg from '../assets/Stack/html.png'
import nodeImg from '../assets/Stack/nodejs.png'
import cloudflareImg from '../assets/Stack/cloudflare.png'

onMounted(() => {
  const sections = document.querySelectorAll('.doc-section')
  const links = document.querySelectorAll('.sidebar-link')
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        links.forEach(l => l.classList.remove('active'))
        const active = document.querySelector(`.sidebar-link[href="#${e.target.id}"]`)
        if (active) active.classList.add('active')
      }
    })
  }, { threshold: .35 })
  sections.forEach(s => obs.observe(s))
})
</script>

<style>
@import '../styles/docs.css';
</style>
