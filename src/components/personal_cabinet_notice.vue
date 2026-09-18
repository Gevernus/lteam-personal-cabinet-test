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
    <PersonalCabinetIcon name="help-bold" :size="20" />
    <p><slot /></p>
  </aside>
</template>

<style scoped>
.personal-cabinet-notice {
  display: grid;
  height: 64px;
  align-items: center;
  gap: 10px;
  padding: 13px 14px;
  border: 1px solid var(--pc-primary);
  border-radius: 12px;
  background: #f4f4f5;
  color: var(--pc-primary);
  grid-template-columns: 20px 1fr;
}

.personal-cabinet-notice p {
  margin: 0;
  color: var(--pc-ink-muted);
  font-size: 13px;
  line-height: 18px;
}

.personal-cabinet-notice--compact {
  padding: 10px 12px;
}

@media (max-width: 767px) {
  .personal-cabinet-notice {
    height: 60px;
    padding: 11px 12px;
  }

  .personal-cabinet-notice p {
    font-size: 10px;
    line-height: 12px;
  }
}

@media (max-width: 359px) {
  .personal-cabinet-notice {
    height: auto;
    min-height: 60px;
  }
}
</style>
