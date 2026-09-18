<script setup>
import PersonalCabinetIconButton from './personal_cabinet_icon_button.vue'

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
  copyLabel: {
    type: String,
    default: '',
  },
})

const emit = defineEmits(['copy'])
const handleCopy = () => emit('copy', { label: props.label, value: props.value })
</script>

<template>
  <div class="personal-cabinet-detail-row">
    <dl>
      <dt>{{ props.label }}</dt>
      <dd>{{ props.value }}</dd>
    </dl>
    <PersonalCabinetIconButton
      v-if="props.copyLabel"
      class="personal-cabinet-detail-row__copy"
      :label="props.copyLabel"
      icon="copy"
      quiet
      :size="16"
      @click="handleCopy"
    />
  </div>
</template>

<style scoped>
.personal-cabinet-detail-row {
  position: relative;
  display: grid;
  height: 71px;
  align-items: start;
  grid-template-columns: 1fr 20px;
}

.personal-cabinet-detail-row:not(:last-of-type)::after {
  position: absolute;
  top: 55px;
  right: 0;
  left: 0;
  height: 1px;
  background: var(--pc-line);
  content: '';
}

.personal-cabinet-detail-row:last-of-type {
  height: 39px;
}

.personal-cabinet-detail-row dl,
.personal-cabinet-detail-row dt,
.personal-cabinet-detail-row dd {
  margin: 0;
}

.personal-cabinet-detail-row dt {
  margin-bottom: 4px;
  color: var(--pc-ink-muted);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.8px;
  line-height: 14px;
  text-transform: uppercase;
}

.personal-cabinet-detail-row dd {
  overflow-wrap: anywhere;
  color: var(--pc-ink);
  font-size: 16px;
  font-weight: 600;
  line-height: 21px;
}

.personal-cabinet-detail-row__copy {
  width: 20px;
  height: 20px;
  margin-top: 10px;
  color: var(--pc-primary);
}

@media (max-width: 767px) {
  .personal-cabinet-detail-row {
    height: 47px;
  }

  .personal-cabinet-detail-row:not(:last-of-type)::after {
    top: 39px;
  }

  .personal-cabinet-detail-row:last-of-type {
    height: 31px;
  }

  .personal-cabinet-detail-row dt {
    font-size: 10px;
    font-weight: 400;
    line-height: 12px;
  }

  .personal-cabinet-detail-row dd {
    font-size: 12px;
    line-height: 15px;
  }

  .personal-cabinet-detail-row__copy {
    margin-top: 6px;
  }
}

@media (max-width: 359px) {
  .personal-cabinet-detail-row dd {
    font-size: 10px;
  }
}
</style>
