# Certificação de Qualidade de Componentes Eletrônicos

Site estático desenvolvido para apresentação acadêmica do **Tema 04 — Classificação por Certificação de Qualidade de Componentes Eletrônicos** da disciplina de **Física (Que Haja Luz!)** do **3° Ano do CBM (Colégio Clovis Borges Miguel)**, 2026.

## Visão Geral

Aplicação web front-end com **Vue 3 + Vite** que apresenta normas internacionais de certificação de componentes eletrônicos — MIL-PRF, AEC-Q, IEC 60068, ISO 9001, entre outras — com visual inspirado em painéis de equipamentos de laboratório e osciloscópios.

## Stack

| Categoria | Tecnologia |
|-----------|-----------|
| Framework | Vue 3 (Composition API, SFC) |
| Build | Vite |
| Roteamento | Vue Router (SPA) |
| Estilo | CSS3 Custom Properties, Grid, Flex |
| Animação | Canvas API, CSS Animations, Intersection Observer |
| Hospedagem | Cloudflare Pages |

## Estrutura

```
src/
├── components/
│   ├── Navbar.vue        — Navbar fixa com links e toggle tema
│   ├── HeroSection.vue   — Hero com grid, scanline, formas de onda
│   ├── IntroSection.vue  — Seção "O que é Certificação?"
│   ├── CertsSection.vue  — Grid de certificações (cards com hover)
│   ├── ProcessSection.vue— Timeline de etapas de certificação
│   ├── TeamSection.vue   — Grid da equipe com link docs
│   ├── AppFooter.vue     — Footer com créditos e GitHub
│   └── WaveCanvas.vue    — Canvas animado com ondas no background
├── composables/
│   ├── useWave.js        — Lógica Canvas API para formas de onda
│   └── useTheme.js       — Definição dos temas
├── data/
│   └── content.js        — Dados estáticos (certs, steps, team)
├── styles/
│   ├── themes.css        — Variáveis CSS dos temas escuro e claro
│   ├── base.css          — Reset, tipografia, animações globais
│   ├── home.css          — Estilos da home page
│   └── docs.css          — Estilos da página de documentação
├── views/
│   ├── Home.vue          — Página inicial (seções empilhadas)
│   └── Docs.vue          — Documentação técnica do projeto
├── router/
│   └── index.js          — Rotas (/ e /docs)
├── App.vue               — Raiz: WaveCanvas + Navbar + router-view
└── main.js               — Entry point
```

## Design System

Tema **"Precision Lab"** — estética industrial de laboratório de certificação:

- **Cores**: Ciano (`#00E5FF`) como accent de medição, Âmbar (`#FFAB00`) como destaque
- **Tipografia**: DM Mono (dados técnicos), Outfit (corpo)
- **Background**: Grid de osciloscópio, formas de onda animadas (Canvas), scanline
- **Componentes**: Cantos retos, bordas precisas, indicadores LED, marcadores de medição

## Funcionalidades

- Tema escuro/claro com persistência em `localStorage`
- Animações de entrada via Intersection Observer
- Canvas animado com formas de onda senoidais
- Scanline de varredura no hero
- Cards com hover effects (elevação, glow, LED)
- Página de documentação com navegação por seções
- Responsivo para mobile

## Desenvolvimento

```bash
npm install
npm run dev      # Dev server com HMR
npm run build    # Build para produção
npm run preview  # Preview do build
```

## Licença

MIT
