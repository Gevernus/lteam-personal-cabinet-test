<script setup>
import PersonalCabinetIcon from './personal_cabinet_icon.vue'

defineProps({
  selected: {
    type: Boolean,
    default: true,
  },
})
</script>

<template>
  <div class="personal-cabinet-payment-option">
    <span class="personal-cabinet-payment-option__icon">
      <PersonalCabinetIcon name="card" :size="20" />
    </span>
    <div>
      <strong>Pagamento servizi</strong>
      <p>Per proseguire con la procedura di accredito del finanziamento è necessario effettuare il pagamento dei servizi.</p>
    </div>
    <span class="personal-cabinet-payment-option__radio" :class="{ selected }" aria-hidden="true"></span>
    <span class="sr-only">Metodo di pagamento selezionato</span>
  </div>
</template>

<style scoped>
.personal-cabinet-payment-option {
  display: grid;
  height: 59px;
  align-items: start;
  gap: 12px;
  grid-template-columns: 40px 1fr;
}

.personal-cabinet-payment-option__icon {
  display: grid;
  width: 40px;
  height: 40px;
  place-items: center;
  border-radius: 8px;
  background: var(--pc-surface-soft);
  color: var(--pc-primary);
}

.personal-cabinet-payment-option strong {
  display: block;
  margin-bottom: 4px;
  color: var(--pc-ink);
  font-size: 16px;
  font-weight: 600;
  line-height: 19px;
}

.personal-cabinet-payment-option p {
  margin: 0;
  color: var(--pc-ink-muted);
  font-size: 13px;
  line-height: 18px;
}

.personal-cabinet-payment-option__radio {
  display: none;
}

@media (max-width: 767px) {
  .personal-cabinet-payment-option {
    height: 55px;
    grid-template-columns: 22px 1fr;
  }

  .personal-cabinet-payment-option__icon {
    width: 22px;
    height: 22px;
    border-radius: 4.4px;
  }

  .personal-cabinet-payment-option__icon :deep(svg) {
    width: 11px;
    height: 11px;
  }

  .personal-cabinet-payment-option strong {
    font-size: 12px;
    line-height: 15px;
  }

  .personal-cabinet-payment-option p {
    font-size: 10px;
    line-height: 12px;
  }
}

@media (max-width: 359px) {
  .personal-cabinet-payment-option {
    height: auto;
    min-height: 55px;
  }
}
</style>
