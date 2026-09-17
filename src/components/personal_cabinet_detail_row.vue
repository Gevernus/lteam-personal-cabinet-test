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
  display: grid;
  min-height: 57px;
  align-items: center;
  gap: 10px;
  padding: 8px 12px;
  border-bottom: 1px solid var(--pc-line-soft);
  grid-template-columns: 1fr auto;
}

.personal-cabinet-detail-row:last-child {
  border-bottom: 0;
}

.personal-cabinet-detail-row dl,
.personal-cabinet-detail-row dt,
.personal-cabinet-detail-row dd {
  margin: 0;
}

.personal-cabinet-detail-row dt {
  margin-bottom: 4px;
  color: var(--pc-ink-muted);
  font-size: 8px;
  font-weight: 750;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.personal-cabinet-detail-row dd {
  overflow-wrap: anywhere;
  color: var(--pc-ink);
  font-size: 12px;
  font-weight: 680;
}

@media (max-width: 479px) {
  .personal-cabinet-detail-row {
    min-height: 50px;
    padding: 6px 9px;
  }

  .personal-cabinet-detail-row dd {
    font-size: 10px;
  }
}
</style>
