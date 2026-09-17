<script setup>
import PersonalCabinetIcon from './personal_cabinet_icon.vue'

defineProps({
  label: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
  size: {
    type: Number,
    default: 18,
  },
  quiet: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['click'])

const handleClick = (event) => emit('click', event)
</script>

<template>
  <button
    class="personal-cabinet-icon-button"
    :class="{ 'personal-cabinet-icon-button--quiet': quiet }"
    type="button"
    :aria-label="label"
    @click="handleClick"
  >
    <PersonalCabinetIcon :name="icon" :size="size" />
  </button>
</template>

<style scoped>
.personal-cabinet-icon-button {
  display: inline-grid;
  width: 34px;
  height: 34px;
  flex: 0 0 auto;
  place-items: center;
  padding: 0;
  border: 1px solid var(--pc-line);
  border-radius: 50%;
  background: var(--pc-surface-soft);
  color: var(--pc-primary-dark);
  cursor: pointer;
  transition: border-color 160ms ease, background-color 160ms ease;
}

.personal-cabinet-icon-button:hover {
  border-color: var(--pc-primary);
  background: #ffffff;
}

.personal-cabinet-icon-button--quiet {
  border-color: transparent;
  background: transparent;
}

.personal-cabinet-icon-button:focus-visible {
  outline: 3px solid var(--pc-focus);
  outline-offset: 2px;
}

@media (prefers-reduced-motion: reduce) {
  .personal-cabinet-icon-button {
    transition: none;
  }
}
</style>
