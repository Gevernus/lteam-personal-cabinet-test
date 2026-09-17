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
  overflow: hidden;
  margin: 0;
  padding: 0;
  border: 1px solid var(--pc-line);
  border-radius: 4px;
  background: #ffffff;
  grid-template-columns: repeat(3, 1fr);
  list-style: none;
}

.personal-cabinet-stepper li {
  display: grid;
  min-height: 30px;
  place-items: center;
  color: var(--pc-ink-muted);
  font-size: 8px;
  font-weight: 750;
  letter-spacing: 0.05em;
  white-space: nowrap;
}

.personal-cabinet-stepper__step--current {
  background: var(--pc-primary);
  color: #ffffff !important;
}

@media (max-width: 479px) {
  .personal-cabinet-stepper li {
    min-height: 27px;
    font-size: 7px;
  }
}
</style>
