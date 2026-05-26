<template>
  <section id="equipe">
    <p class="section-tag">04 — Grupo</p>
    <h2 class="section-title">Grupo</h2>
    <div class="team-grid">
      <div class="team-member" v-for="m in team" :key="m.name">
        <div class="member-avatar" :style="{background: m.color+'33', color: m.color, border:'1px solid '+m.color+'66'}">
          {{ m.name[0] }}
        </div>
        <div class="member-info">
          <span class="member-name">{{ m.name }}</span>
          <span class="member-role">{{ m.role }}</span>
        </div>
      </div>
    </div>

    <router-link to="/docs" class="docs-link">
      <span class="docs-link-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M9 12h6M9 16h4M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"/>
        </svg>
      </span>
      <span class="docs-link-body">
        <span class="docs-link-title">Documentação Técnica</span>
        <span class="docs-link-sub">Linguagens · Frameworks · Fontes · Arquitetura do projeto</span>
      </span>
      <span class="docs-link-arrow">→</span>
    </router-link>
  </section>
</template>

<script setup>
defineProps({ team: Array })
</script>

<style scoped>
.team-grid { display: flex; flex-wrap: wrap; gap: 1rem; margin-top: 2.5rem; }
.team-member {
  display: flex; align-items: center; gap: .8rem;
  border: 1px solid rgba(255,255,255,.06);
  background: var(--card-bg2);
  border-radius: 40px;
  padding: .6rem 1.2rem .6rem .7rem;
  transition: border-color .3s, background .5s;
}
.team-member:hover { border-color: var(--rose); }
.member-avatar {
  width: 36px; height: 36px;
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-size: .75rem; font-weight: 600;
}
.member-info { display: flex; flex-direction: column; }
.member-name { font-size: .85rem; color: var(--blush); font-weight: 400; transition: color .5s; }
.member-role {
  font-family: 'DM Mono', monospace;
  font-size: .6rem; letter-spacing: .12em; color: var(--text-dim);
}

.docs-link {
  display: flex; align-items: center; gap: 1.2rem;
  margin-top: 3rem;
  border: 1px solid rgba(255,255,255,.08);
  background: linear-gradient(to right, var(--card-bg1), transparent);
  border-radius: 8px;
  padding: 1.4rem 1.8rem;
  text-decoration: none;
  max-width: 540px;
  transition: border-color .3s, transform .3s;
  cursor: pointer;
}
.docs-link:hover { border-color: var(--rose); transform: translateX(6px); }
.docs-link-icon {
  width: 42px; height: 42px; flex-shrink: 0;
  border-radius: 6px;
  border: 1px solid var(--mauve1);
  display: flex; align-items: center; justify-content: center;
  color: var(--rose);
}
.docs-link-icon svg { width: 18px; height: 18px; }
.docs-link-body { display: flex; flex-direction: column; gap: .25rem; flex: 1; }
.docs-link-title {
  font-family: "DM Mono", monospace;
  font-size: .78rem; letter-spacing: .15em;
  color: var(--blush); font-weight: 400;
}
.docs-link-sub { font-size: .78rem; color: var(--text-dim); }
.docs-link-arrow { font-size: 1.1rem; color: var(--rose); transition: transform .3s; }
.docs-link:hover .docs-link-arrow { transform: translateX(4px); }
</style>
