<script setup>
const props = defineProps({
  current: {
    type: Number,
    required: true,
    validator: (value) => value >= 1 && value <= 3,
  },
})

const steps = ['IBAN', 'COMMISSIONE', 'COORDINATE']
</script>

<template>
  <ol class="personal-cabinet-stepper" aria-label="Avanzamento pagamento">
    <li
      v-for="(step, index) in steps"
      :key="step"
      :class="{ 'personal-cabinet-stepper__step--current': index + 1 === props.current }"
      :aria-current="index + 1 === props.current ? 'step' : undefined"
    >
      {{ index + 1 }}. {{ step }}
    </li>
  </ol>
</template>

<style scoped>
.personal-cabinet-stepper {
  display: grid;
  height: 29px;
  overflow: hidden;
  margin: 0;
  border-radius: 8px;
  padding: 0;
  gap: 2px;
  grid-template-columns: repeat(3, 1fr);
  list-style: none;
}

.personal-cabinet-stepper li {
  display: grid;
  height: 29px;
  place-items: center;
  background: #f4f4f5;
  color: var(--pc-ink-muted);
  font-size: 11px;
  font-weight: 500;
  line-height: 13px;
  white-space: nowrap;
}

.personal-cabinet-stepper__step--current {
  background: var(--pc-primary) !important;
  color: #ffffff !important;
  font-weight: 600 !important;
}

@media (max-width: 767px) {
  .personal-cabinet-stepper {
    gap: 0;
  }
}

@media (max-width: 359px) {
  .personal-cabinet-stepper li {
    font-size: 9px;
  }
}
</style>
