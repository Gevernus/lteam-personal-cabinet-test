<script setup>
import PersonalCabinetIcon from './personal_cabinet_icon.vue'

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    default: 'help',
  },
})
</script>

<template>
  <div class="personal-cabinet-payment-method">
    <span>{{ props.label }}</span>
    <PersonalCabinetIcon :name="props.icon" :size="20" />
  </div>
</template>

<style scoped>
.personal-cabinet-payment-method {
  display: flex;
  height: 44px;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: 1px solid var(--pc-primary);
  border-radius: 12px;
  background: var(--pc-surface-soft);
  color: var(--pc-primary);
  font-family: Geist, sans-serif;
  font-size: 15px;
  font-weight: 600;
  line-height: 20px;
}

@media (max-width: 767px) {
  .personal-cabinet-payment-method {
    font-family: Inter, sans-serif;
    font-size: 12px;
    line-height: 15px;
  }
}

@media (max-width: 359px) {
  .personal-cabinet-payment-method {
    font-size: 10px;
  }
}
</style>
