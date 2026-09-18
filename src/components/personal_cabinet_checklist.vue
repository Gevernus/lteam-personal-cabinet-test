<script setup>
import { useId } from 'vue'
import PersonalCabinetIcon from './personal_cabinet_icon.vue'

const props = defineProps({
  model: {
    type: Object,
    required: true,
  },
})

const titleId = useId()
</script>

<template>
  <section
    class="personal-cabinet-checklist"
    :class="{ 'personal-cabinet-checklist--fixed': props.model.fixedLayout }"
    :aria-labelledby="titleId"
  >
    <div class="personal-cabinet-checklist__header">
      <div>
        <p>{{ props.model.eyebrow }}</p>
        <h2 :id="titleId">{{ props.model.title }}</h2>
      </div>
      <b>{{ props.model.completionLabel }}</b>
    </div>
    <ul>
      <li v-for="item in props.model.items" :key="item.title">
        <span class="personal-cabinet-checklist__icon">
          <PersonalCabinetIcon :name="item.icon" :size="17" />
        </span>
        <div>
          <strong>{{ item.title }}</strong>
          <small>{{ item.status }}</small>
        </div>
        <span
          class="personal-cabinet-checklist__status"
          :class="{ 'personal-cabinet-checklist__status--done': item.done }"
        >
          <PersonalCabinetIcon :name="item.done ? 'check-mark' : 'arrow-right'" :size="item.done ? 10 : 12" />
        </span>
      </li>
    </ul>
    <div class="personal-cabinet-checklist__progress" aria-hidden="true">
      <i
        v-for="(_, index) in props.model.items"
        :key="index"
        :class="{ 'personal-cabinet-checklist__progress--complete': index < props.model.completedSegments }"
      ></i>
    </div>
  </section>
</template>

<style scoped>
.personal-cabinet-checklist {
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
  border-radius: 99px;
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
  min-height: 76px;
  align-items: center;
  gap: 16px;
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
  width: auto;
  height: 6px;
  flex: 1;
  border-radius: 99px;
  background: var(--pc-line);
}

.personal-cabinet-checklist--fixed {
  height: 516px;
}

.personal-cabinet-checklist--fixed li {
  height: 76px;
}

.personal-cabinet-checklist__progress--complete {
  background: var(--pc-primary) !important;
}

.personal-cabinet-checklist__icon,
.personal-cabinet-checklist__status {
  display: grid;
  place-items: center;
  border-radius: 50%;
}

.personal-cabinet-checklist__icon {
  width: 44px;
  height: 44px;
  background: var(--pc-primary);
  color: #ffffff;
}

.personal-cabinet-checklist__status {
  width: 32px;
  height: 32px;
  background: var(--pc-surface-soft);
  color: var(--pc-ink-muted);
}

.personal-cabinet-checklist__status--done {
  width: 28px;
  height: 28px;
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
  .personal-cabinet-checklist li {
    gap: 12px;
  }

  .personal-cabinet-checklist__icon {
    width: 36px;
    height: 36px;
  }

  .personal-cabinet-checklist__status {
    width: 28px;
    height: 28px;
  }

  .personal-cabinet-checklist__status--done {
    width: 22px;
    height: 22px;
  }

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
