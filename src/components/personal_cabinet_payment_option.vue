<script setup>
import PersonalCabinetIcon from './personal_cabinet_icon.vue'

const props = defineProps({
  selected: {
    type: Boolean,
    default: false,
  },
  icon: {
    type: String,
    default: 'card',
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  selectedLabel: {
    type: String,
    default: 'Metodo di pagamento selezionato',
  },
})
</script>

<template>
  <div class="personal-cabinet-payment-option">
    <span class="personal-cabinet-payment-option__icon">
      <PersonalCabinetIcon
        class="personal-cabinet-payment-option__glyph"
        :name="props.icon"
        :size="20"
      />
    </span>
    <div>
      <strong>{{ props.title }}</strong>
      <p>{{ props.description }}</p>
    </div>
    <span class="personal-cabinet-payment-option__radio" :class="{ selected: props.selected }" aria-hidden="true"></span>
    <span v-if="props.selected" class="sr-only">{{ props.selectedLabel }}</span>
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

  .personal-cabinet-payment-option__glyph {
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
