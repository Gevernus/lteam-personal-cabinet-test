<script setup>
import PersonalCabinetIcon from './personal_cabinet_icon.vue'

defineProps({
  compact: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <aside class="personal-cabinet-notice" :class="{ 'personal-cabinet-notice--compact': compact }">
    <PersonalCabinetIcon name="info" :size="18" />
    <p><slot /></p>
  </aside>
</template>

<style scoped>
.personal-cabinet-notice {
  display: grid;
  align-items: start;
  gap: 10px;
  padding: 13px 14px;
  border: 1px solid #afd8df;
  border-radius: 8px;
  background: #f5fcfd;
  color: var(--pc-primary-dark);
  grid-template-columns: auto 1fr;
}

.personal-cabinet-notice p {
  margin: 0;
  color: var(--pc-ink-soft);
  font-size: 10px;
  line-height: 1.45;
}

.personal-cabinet-notice--compact {
  padding: 10px 12px;
}

@media (max-width: 479px) {
  .personal-cabinet-notice {
    padding: 9px 10px;
  }

  .personal-cabinet-notice p {
    font-size: 9px;
  }
}
</style>
