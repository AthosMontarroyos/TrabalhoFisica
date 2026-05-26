<template>
  <section id="equipe">
    <div class="container">
      <div class="section-head">
        <span class="section-num">04</span>
        <div>
          <span class="section-label">GRUPO</span>
          <h2 class="section-title">Equipe</h2>
        </div>
      </div>

      <div class="team-grid">
        <div class="member" v-for="m in team" :key="m.name" :style="{'--m-color': m.color}">
          <div class="member-badge">
            <span class="member-initial">{{ m.name[0] }}</span>
          </div>
          <div class="member-info">
            <span class="member-name">{{ m.name }}</span>
            <span class="member-role">{{ m.role }}</span>
          </div>
        </div>
      </div>

      <router-link to="/docs" class="docs-link">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="18" height="18">
          <path d="M9 12h6M9 16h4M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"/>
        </svg>
        <span class="docs-link-text">
          <strong>Documentação</strong>
          <span>Linguagens · Frameworks · Fontes · Arquitetura</span>
        </span>
        <span class="docs-link-arrow">→</span>
      </router-link>
    </div>
  </section>
</template>

<script setup>
defineProps({ team: Array })
</script>

<style scoped>
#equipe { padding: 6rem 8vw; }

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

.team-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: .75rem;
}
@media(max-width:700px){ .team-grid { grid-template-columns: repeat(2, 1fr); } }
@media(max-width:450px){ .team-grid { grid-template-columns: 1fr; } }

.member {
  border: 1px solid var(--border);
  background: var(--surface);
  padding: 1.5rem 1rem;
  text-align: center;
  transition: border-color .25s;
}
.member:hover { border-color: var(--m-color, var(--accent)); }

.member-badge {
  width: 48px; height: 48px;
  margin: 0 auto .75rem;
  border: 1px solid var(--border);
  display: flex; align-items: center; justify-content: center;
  transition: border-color .25s;
}
.member:hover .member-badge {
  border-color: var(--m-color, var(--accent));
}
.member-initial {
  font-family: 'DM Mono', monospace;
  font-size: 1rem;
  font-weight: 500;
  color: var(--m-color, var(--text-secondary));
}

.member-name {
  display: block;
  font-size: .85rem;
  font-weight: 500;
  color: var(--text-primary);
  margin-bottom: .15rem;
}
.member-role {
  font-family: 'DM Mono', monospace;
  font-size: .6rem;
  color: var(--text-dim);
  letter-spacing: .05em;
}

.docs-link {
  display: inline-flex; align-items: center;
  gap: .75rem;
  margin-top: 2.5rem;
  margin-left: auto; margin-right: auto;
  border: 1px solid var(--border);
  background: var(--surface);
  padding: .9rem 1.25rem;
  text-decoration: none;
  color: var(--text-primary);
  transition: border-color .25s;
  max-width: 480px;
}
.docs-link:hover { border-color: var(--accent); }
.docs-link svg { color: var(--accent); flex-shrink: 0; }
.docs-link-text {
  display: flex; flex-direction: column;
  gap: .1rem; flex: 1;
}
.docs-link-text strong {
  font-size: .82rem;
  font-weight: 500;
}
.docs-link-text span {
  font-size: .68rem;
  color: var(--text-secondary);
}
.docs-link-arrow {
  font-family: 'DM Mono', monospace;
  font-size: 1rem;
  color: var(--accent);
  transition: transform .25s;
}
.docs-link:hover .docs-link-arrow { transform: translateX(4px); }
</style>
