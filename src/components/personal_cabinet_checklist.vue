<script setup>
import PersonalCabinetIcon from './personal_cabinet_icon.vue'

const items = [
  { title: 'Simulazione completata', status: 'Completato', icon: 'chart', done: true },
  { title: 'Credito approvato', status: 'Completato', icon: 'lock', done: true },
  { title: 'Account creato', status: 'Completato', icon: 'user', done: true },
  { title: 'Documenti caricati', status: 'Step iniziato', icon: 'document', done: true },
  { title: 'Contratto firmato', status: 'In attesa', icon: 'document', done: false },
]
</script>

<template>
  <section class="personal-cabinet-checklist" aria-labelledby="checklist-title">
    <div class="personal-cabinet-checklist__header">
      <div>
        <p>COMPLETA TUTTI GLI STEP</p>
        <h2 id="checklist-title">Per il prelievo dei fondi, completa tutti gli step</h2>
      </div>
      <b>3 / 5 completati</b>
    </div>
    <ul>
      <li v-for="item in items" :key="item.title">
        <span class="personal-cabinet-checklist__icon">
          <PersonalCabinetIcon :name="item.icon" :size="17" />
        </span>
        <div>
          <strong>{{ item.title }}</strong>
          <small>{{ item.status }}</small>
        </div>
        <PersonalCabinetIcon :name="item.done ? 'check' : 'arrow-right'" :size="18" />
      </li>
    </ul>
    <div class="personal-cabinet-checklist__progress" aria-hidden="true">
      <i></i><i></i><i></i><i></i><i></i>
    </div>
  </section>
</template>

<style scoped>
.personal-cabinet-checklist {
  height: 516px;
  overflow: hidden;
  border: 1px solid var(--pc-line);
  border-radius: 16px;
  background: #ffffff;
}

.personal-cabinet-checklist__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 89px;
  padding: 20px 24px;
  border-bottom: 1px solid var(--pc-line);
}

.personal-cabinet-checklist__header p,
.personal-cabinet-checklist__header h2 {
  margin: 0;
}

.personal-cabinet-checklist__header p {
  margin-bottom: 5px;
  color: var(--pc-primary-dark);
  font-size: 9px;
  font-weight: 800;
  letter-spacing: 0.08em;
}

.personal-cabinet-checklist__header h2 {
  font-size: 12px;
}

.personal-cabinet-checklist__header b {
  padding: 7px 10px;
  border-radius: 16px;
  background: var(--pc-surface-soft);
  color: var(--pc-primary-dark);
  font-size: 9px;
  white-space: nowrap;
}

.personal-cabinet-checklist ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

.personal-cabinet-checklist li {
  display: grid;
  height: 76px;
  align-items: center;
  gap: 11px;
  padding: 12px 24px;
  border-bottom: 1px solid var(--pc-line-soft);
  grid-template-columns: auto 1fr auto;
  color: var(--pc-primary-dark);
}

.personal-cabinet-checklist li:last-child {
  border-bottom: 0;
}

.personal-cabinet-checklist__progress {
  display: flex;
  height: 42px;
  align-items: flex-start;
  gap: 4px;
  padding: 16px 24px;
}

.personal-cabinet-checklist__progress i {
  width: 80px;
  height: 6px;
  border-radius: 99px;
  background: var(--pc-line);
}

.personal-cabinet-checklist__progress i:nth-child(-n + 3) {
  background: var(--pc-primary);
}

.personal-cabinet-checklist__icon {
  display: grid;
  width: 32px;
  height: 32px;
  place-items: center;
  border-radius: 50%;
  background: var(--pc-primary);
  color: #ffffff;
}

.personal-cabinet-checklist strong,
.personal-cabinet-checklist small {
  display: block;
}

.personal-cabinet-checklist strong {
  color: var(--pc-ink);
  font-size: 11px;
}

.personal-cabinet-checklist small {
  margin-top: 2px;
  color: var(--pc-primary-dark);
  font-size: 9px;
}

@media (max-width: 767px) {
  .personal-cabinet-checklist__header {
    align-items: flex-start;
    gap: 10px;
    flex-direction: column;
  }

  .personal-cabinet-checklist__progress i {
    width: auto;
    flex: 1;
  }
}
</style>
