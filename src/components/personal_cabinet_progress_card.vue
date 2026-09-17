<script setup>
import PersonalCabinetIcon from './personal_cabinet_icon.vue'

const steps = [
  { label: 'Simul.', complete: true },
  { label: 'Approva', complete: true },
  { label: 'Firma', complete: false },
]
</script>

<template>
  <section class="personal-cabinet-progress-card" aria-labelledby="progress-title">
    <div class="personal-cabinet-progress-card__header">
      <h2 id="progress-title">Passo 4 di 5</h2>
      <span>80%</span>
    </div>
    <ol>
      <li v-for="step in steps" :key="step.label" :class="{ complete: step.complete }">
        <span>
          <PersonalCabinetIcon v-if="step.complete" name="check" :size="17" />
        </span>
        <small>{{ step.label }}</small>
      </li>
    </ol>
  </section>
</template>

<style scoped>
.personal-cabinet-progress-card {
  padding: 18px 22px;
  border: 1px solid var(--pc-line);
  border-radius: 10px;
  background: #ffffff;
}

.personal-cabinet-progress-card__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 14px;
}

.personal-cabinet-progress-card h2 {
  margin: 0;
  font-size: 12px;
}

.personal-cabinet-progress-card__header > span {
  color: var(--pc-primary-dark);
  font-size: 11px;
  font-weight: 750;
}

.personal-cabinet-progress-card ol {
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
}

.personal-cabinet-progress-card li {
  position: relative;
  display: grid;
  flex: 1;
  justify-items: center;
  gap: 6px;
  color: var(--pc-ink-muted);
}

.personal-cabinet-progress-card li:not(:last-child)::after {
  position: absolute;
  top: 13px;
  left: 50%;
  width: 100%;
  height: 2px;
  background: var(--pc-line);
  content: '';
}

.personal-cabinet-progress-card li.complete:not(:last-child)::after {
  background: var(--pc-primary);
}

.personal-cabinet-progress-card li > span {
  position: relative;
  z-index: 1;
  display: grid;
  width: 28px;
  height: 28px;
  place-items: center;
  border: 2px solid var(--pc-line);
  border-radius: 50%;
  background: #ffffff;
}

.personal-cabinet-progress-card li.complete > span {
  border-color: var(--pc-primary);
  background: var(--pc-primary);
  color: #ffffff;
}

.personal-cabinet-progress-card small {
  font-size: 9px;
}
</style>
