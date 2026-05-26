# Registro da Conversa — 2026-05-26

## Resumo
Reformulação visual completa do site com redesign total da identidade visual. O tema anterior (espaço/sideral com rosa e navy) foi substituído por uma estética industrial/técnica de **laboratório de certificação de componentes eletrônicos**, inspirada em painéis de equipamentos de medição, osciloscópios e datasheets de componentes.

## Conceito de Design
**"Precision Lab"** — Visual de laboratório de teste e certificação:
- Fundo com grid técnico (como grade de osciloscópio)
- Formas de onda animadas no background (Canvas API)
- Cores: ciano (`#00E5FF`) como accent primário (medida/precisão), âmbar (`#FFAB00`) como accent secundário (alerta/status)
- Tipografia: DM Mono para dados técnicos e medições; Outfit para corpo
- Cantos retos, bordas precisas, marcadores de medição
- "Scanline" animada simulando varredura de oscilloscópio

## Arquivos Modificados

### src/styles/themes.css (reescrito)
- Novas paletas escuro e claro com tema técnico/industrial
- Dark: `--bg: #0A0C10`, `--accent: #00E5FF`, `--accent2: #FFAB00`, `--accent3: #FF5252`
- Light: `--bg: #F5F6F8`, `--accent: #007BFF`, `--accent2: #E65100`, `--accent3: #D32F2F`
- Novas variáveis: `--surface`, `--surface2`, `--grid-line`, `--wave-color`
- Removidas variáveis antigas: `--navy`, `--rose`, `--blush`, `--mauve1/2`, `--deep`, `--cursor*`, `--star-color`

### src/styles/base.css (reescrito)
- Cursor alterado de `none` (cursor customizado) para `crosshair` (cursor técnico)
- Transições simplificadas

### src/styles/home.css (atualizado)
- Divider usa `--accent` no centro

### src/styles/docs.css (reescrito)
- Sidebar com tipografia monoespaçada
- Cores atualizadas para `--accent`, `--accent2`, `--accent3`
- Links ativos com borda `--accent`
- Badges de stack com novos esquemas de cor
- Tabela de roles com borda `--accent`
- Scrollbar com accent

### src/components/Navbar.vue (reescrito)
- Visual de painel de equipamento: LED indicator, fontes monoespaçadas
- Brand "CBM-2026" com DM Mono + LED verde (accent)
- Theme toggle como botão técnico com indicador de estado
- Links centralizados com underline hover em accent

### src/components/HeroSection.vue (reescrito)
- Grid de fundo (osciloscópio)
- "Scanline" animada varrendo verticalmente (5s ease-in-out infinite)
- Moldura com cantos em `--accent` (estilo de frame de equipamento)
- Três formas de onda SVG sobrepostas (sine waves aninhadas)
- Tag "CH1" com separador — estilo canal de osciloscópio
- Título com highlight em âmbar (`--accent2`)
- Métricas inferior com badges MIL-PRF, AEC-Q, IEC 60068, ISO 9001
- Indicador de scroll minimalista

### src/components/IntroSection.vue (reescrito)
- Section head reformatado (número em DM Mono, label em âmbar)
- Cards de especificação técnica com labels monoespaçados
- Spec cards: label, value (DM Mono, accent), descrição
- Quote com borda accent

### src/components/CertsSection.vue (reescrito)
- Grid de cards com gap de 1px + borda externa (estilo grid de IC/datasheet)
- Cada card: "pin 1" marker (canto), LED indicator colorido
- Nome da certificação em DM Mono
- Tags como badges de compliance
- Hover escurece o card (surface2)

### src/components/ProcessSection.vue (reescrito)
- Timeline com marcadores quadrados (2px border-radius)
- Números em DM Mono
- Linhas tracejadas conectando steps
- Cards com hover border accent
- IntersectionObserver mantido

### src/components/TeamSection.vue (reescrito)
- Cards estilo crachá de laboratório
- Avatar badge quadrado com initial
- Borda do badge muda para cor do membro no hover
- Role em DM Mono
- Link "Documentação" reformatado com seta animada

### src/components/AppFooter.vue (reescrito)
- Placa de especificação: nome do projeto + referência em DM Mono
- Links e autor em DM Mono
- Hover links em accent

### src/App.vue (atualizado)
- Removidos: `CustomCursor`, `StarsCanvas`
- Adicionado: `WaveCanvas`

### src/views/Home.vue (atualizado)
- Removida lógica de cursor (ref, event listeners)

### src/views/Docs.vue (inalterado no template)
- Apenas CSS atualizado via docs.css

### src/composables/useWave.js (novo)
- Canvas API que desenha 3 formas de onda senoidais animadas
- Frequências e amplitudes variadas para efeito de osciloscópio real
- Cor dinâmica baseada em `--accent`

### src/components/WaveCanvas.vue (novo)
- Canvas fullscreen em background (fixed, z-index: 0)

### src/composables/useTheme.js (atualizado)
- Cores dos dots atualizadas para nova paleta

## Reforma de Layout — Centralização (2026-05-26)

### src/styles/base.css (adicionado)
- Nova classe `.container`: `max-width: 1100px; margin: 0 auto; padding: 0 2rem` com breakpoint responsivo para 700px
- Usada como wrapper centralizador em todas as seções

### src/components/HeroSection.vue (centralizado)
- `.hero-content`: `margin: 0 auto; text-align: center`
- `.hero-tag`: `margin-left/right: auto` para centralizar
- `.hero-desc`: `margin-left/right: auto; max-width: 560px`
- `.hero-metrics`: `justify-content: center`

### src/components/IntroSection.vue (centralizado)
- Todo o conteúdo do `<section id="intro">` envolvido em `<div class="container">`

### src/components/CertsSection.vue (centralizado)
- Todo o conteúdo do `<section id="certs">` envolvido em `<div class="container">`

### src/components/ProcessSection.vue (centralizado)
- Todo o conteúdo do `<section id="processo">` envolvido em `<div class="container">`
- `.steps`: adicionado `margin: 0 auto` para centralizar a timeline

### src/components/TeamSection.vue (centralizado)
- Todo o conteúdo do `<section id="equipe">` envolvido em `<div class="container">`
- `.docs-link`: `margin-left/right: auto` para centralizar o link de documentação

### src/components/AppFooter.vue (centralizado)
- Footer content envolvido em `<div class="container">`

### src/styles/docs.css (centralizado)
- `main`: adicionado `margin: 0 auto` para centralizar o conteúdo da página de documentação

## Arquivos Removidos
- `src/components/CustomCursor.vue`
- `src/components/StarsCanvas.vue`
- `src/composables/useCursor.js`
- `src/composables/useStars.js`

## Arquivos Inalterados
- `src/data/content.js` — conteúdo preservado
- `src/router/index.js`
- `src/main.js`
- `src/views/Docs.vue` (template intacto)

## Decisões de Design
- **Estética industrial/lab**: Abandono completo do tema espacial/romântico anterior por uma identidade visual técnica e precisa
- **Ciano + Âmbar**: Ciano como cor primária de medição, âmbar como destaque para status/alerta
- **DM Mono em todo o layout técnico**: Números, labels, badges, nav — tudo em monoespaçado
- **Grid de osciloscópio**: Background sutil com linhas de grid 48px
- **Scanline animada**: Linha horizontal que varre verticalmente como feixe de CRT
- **Formas de onda**: 3 camadas de sine waves no hero + canvas animado no background
- **Sem cursor customizado**: Cursor `crosshair` nativo (mais limpo, mais técnico)
- **Cantos retos e frames**: Moldura com cantos em L no hero, cards sem border-radius
- **Conteúdo 100% preservado**: Todo texto, dados e estrutura de informação intactos
