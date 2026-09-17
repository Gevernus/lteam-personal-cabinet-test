<script setup>
import { ref } from 'vue'
import PersonalCabinetIcon from './personal_cabinet_icon.vue'

const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary', 'ghost'].includes(value),
  },
  icon: {
    type: String,
    default: '',
  },
  iconPosition: {
    type: String,
    default: 'right',
    validator: (value) => ['left', 'right'].includes(value),
  },
  block: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String,
    default: 'button',
  },
})

const emit = defineEmits(['click'])

const buttonElement = ref(null)

const focus = () => buttonElement.value?.focus()
const handleClick = (event) => emit('click', event)

defineExpose({ focus })
</script>

<template>
  <button
    ref="buttonElement"
    class="personal-cabinet-button"
    :class="[
      `personal-cabinet-button--${props.variant}`,
      { 'personal-cabinet-button--block': props.block },
    ]"
    :type="props.type"
    @click="handleClick"
  >
    <PersonalCabinetIcon
      v-if="props.icon && props.iconPosition === 'left'"
      :name="props.icon"
      :size="16"
    />
    <span><slot /></span>
    <PersonalCabinetIcon
      v-if="props.icon && props.iconPosition === 'right'"
      :name="props.icon"
      :size="16"
    />
  </button>
</template>

<style scoped>
.personal-cabinet-button {
  display: inline-flex;
  min-height: 42px;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 0 22px;
  border: 1px solid transparent;
  border-radius: 7px;
  font-size: 14px;
  font-weight: 650;
  line-height: 1;
  transition: background-color 160ms ease, border-color 160ms ease, transform 160ms ease;
}

.personal-cabinet-button:not(:disabled) {
  cursor: pointer;
}

.personal-cabinet-button:not(:disabled):active {
  transform: translateY(1px);
}

.personal-cabinet-button--block {
  width: 100%;
}

.personal-cabinet-button--primary {
  background: var(--pc-primary);
  color: #ffffff;
}

.personal-cabinet-button--primary:hover {
  background: var(--pc-primary-dark);
}

.personal-cabinet-button--secondary {
  border-color: var(--pc-primary);
  background: #ffffff;
  color: var(--pc-primary-dark);
}

.personal-cabinet-button--ghost {
  min-height: 36px;
  padding-inline: 12px;
  background: transparent;
  color: var(--pc-ink-soft);
}

.personal-cabinet-button:focus-visible {
  outline: 3px solid var(--pc-focus);
  outline-offset: 2px;
}

.personal-cabinet-button:disabled {
  background: #bdc8ca;
  color: #ffffff;
}

@media (prefers-reduced-motion: reduce) {
  .personal-cabinet-button {
    transition: none;
  }
}
</style>
