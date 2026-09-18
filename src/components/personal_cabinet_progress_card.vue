<script setup>
import PersonalCabinetIcon from './personal_cabinet_icon.vue'

const steps = [
  { label: 'Simul.', complete: true },
  { label: 'Approv.', complete: true },
  { label: 'Account', complete: true },
  { label: 'Docum.', complete: true },
  { label: 'Firma', complete: false },
]
</script>

<template>
  <section class="personal-cabinet-progress-card" aria-labelledby="progress-title">
    <div class="personal-cabinet-progress-card__header">
      <h2 id="progress-title">Passo 4 di 5</h2>
      <span>3 / 5 completati</span>
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
  padding: 20px 24px;
  border: 1px solid #e2edf0;
  border-radius: 16px;
  background: #ffffff;
}

.personal-cabinet-progress-card__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
}

.personal-cabinet-progress-card h2 {
  margin: 0;
  font-size: 13px;
  line-height: 16px;
}

.personal-cabinet-progress-card__header > span {
  color: var(--pc-primary-dark);
  font-size: 13px;
  font-weight: 500;
  line-height: 16px;
}

.personal-cabinet-progress-card ol {
  display: flex;
  justify-content: space-between;
  margin: 0;
  padding: 0;
  list-style: none;
}

.personal-cabinet-progress-card li {
  position: relative;
  display: grid;
  width: 108px;
  flex: none;
  justify-items: center;
  gap: 8px;
  color: var(--pc-ink-muted);
}

.personal-cabinet-progress-card li:not(:last-child)::after {
  position: absolute;
  top: 17px;
  left: 50%;
  width: 159px;
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
  width: 36px;
  height: 36px;
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
  font-size: 11px;
  font-weight: 600;
}

@media (max-width: 767px) {
  .personal-cabinet-progress-card {
    padding: 16px;
  }

  .personal-cabinet-progress-card li {
    width: 20%;
  }

  .personal-cabinet-progress-card li:not(:last-child)::after {
    top: 13px;
    width: 100%;
  }

  .personal-cabinet-progress-card li > span {
    width: 28px;
    height: 28px;
  }

  .personal-cabinet-progress-card small {
    font-size: 9px;
  }
}
</style>
