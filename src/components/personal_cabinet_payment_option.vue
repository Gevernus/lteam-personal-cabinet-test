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
      <PersonalCabinetIcon name="wallet" :size="18" />
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
  align-items: start;
  gap: 12px;
  padding: 14px;
  border: 1px solid var(--pc-line);
  border-radius: 9px;
  grid-template-columns: auto 1fr auto;
}

.personal-cabinet-payment-option__icon {
  display: grid;
  width: 32px;
  height: 32px;
  place-items: center;
  border-radius: 7px;
  background: var(--pc-surface-soft);
  color: var(--pc-primary-dark);
}

.personal-cabinet-payment-option strong {
  display: block;
  margin-bottom: 4px;
  color: var(--pc-ink);
  font-size: 12px;
}

.personal-cabinet-payment-option p {
  margin: 0;
  color: var(--pc-ink-muted);
  font-size: 9px;
  line-height: 1.45;
}

.personal-cabinet-payment-option__radio {
  width: 17px;
  height: 17px;
  margin-top: 2px;
  border: 1px solid var(--pc-line);
  border-radius: 50%;
}

.personal-cabinet-payment-option__radio.selected {
  border: 5px solid var(--pc-primary);
}

@media (max-width: 479px) {
  .personal-cabinet-payment-option {
    padding: 10px;
  }

  .personal-cabinet-payment-option p {
    font-size: 8px;
  }
}
</style>
