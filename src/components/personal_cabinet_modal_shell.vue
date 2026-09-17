<script setup>
import { ref, useId } from 'vue'
import PersonalCabinetIconButton from './personal_cabinet_icon_button.vue'

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  eyebrow: {
    type: String,
    default: 'COMMISSIONE',
  },
})

const emit = defineEmits(['back', 'close'])
const titleId = useId()
const titleElement = ref(null)

const focusTitle = () => titleElement.value?.focus()
const handleBack = () => emit('back')
const handleClose = () => emit('close')
const handleKeydown = (event) => {
  if (event.key === 'Escape') {
    event.preventDefault()
    handleClose()
  }
}

defineExpose({ focusTitle })
</script>

<template>
  <div class="personal-cabinet-modal-shell" @keydown="handleKeydown">
    <section
      class="personal-cabinet-modal-shell__dialog"
      role="dialog"
      aria-modal="true"
      :aria-labelledby="titleId"
    >
      <header class="personal-cabinet-modal-shell__header">
        <PersonalCabinetIconButton label="Indietro" icon="arrow-left" @click="handleBack" />
        <PersonalCabinetIconButton label="Chiudi" icon="close" @click="handleClose" />
      </header>
      <div class="personal-cabinet-modal-shell__title">
        <p>{{ props.eyebrow }}</p>
        <h1 :id="titleId" ref="titleElement" tabindex="-1">{{ props.title }}</h1>
      </div>
      <slot />
      <footer class="personal-cabinet-modal-shell__legal">
        Concessione S.r.l. <span>•</span> Visa <span>•</span> Mastercard <span>•</span> SEPA
      </footer>
    </section>
  </div>
</template>

<style scoped>
.personal-cabinet-modal-shell {
  position: fixed;
  z-index: 20;
  inset: 0;
  display: grid;
  overflow-y: auto;
  padding: 30px 20px;
  background: rgb(20 40 45 / 52%);
  place-items: center;
}

.personal-cabinet-modal-shell__dialog {
  width: min(100%, 650px);
  padding: 18px 22px 14px;
  border: 1px solid rgb(255 255 255 / 70%);
  border-radius: 18px;
  background: #ffffff;
  box-shadow: 0 28px 75px rgb(10 36 42 / 26%);
}

.personal-cabinet-modal-shell__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 14px;
}

.personal-cabinet-modal-shell__title {
  margin-bottom: 16px;
}

.personal-cabinet-modal-shell__title p {
  margin: 0 0 5px;
  color: var(--pc-primary-dark);
  font-size: 9px;
  font-weight: 800;
  letter-spacing: 0.12em;
}

.personal-cabinet-modal-shell__title h1 {
  margin: 0;
  color: var(--pc-ink);
  font-size: 23px;
  letter-spacing: -0.025em;
  outline: none;
}

.personal-cabinet-modal-shell__legal {
  margin-top: 13px;
  color: var(--pc-ink-muted);
  font-size: 8px;
  text-align: center;
}

.personal-cabinet-modal-shell__legal span {
  padding-inline: 5px;
}

@media (max-width: 767px) {
  .personal-cabinet-modal-shell {
    align-items: start;
    padding: 72px 10px 88px;
  }

  .personal-cabinet-modal-shell__dialog {
    width: min(calc(100vw - 20px), 390px);
    padding: 13px 12px 11px;
    border-radius: 14px;
  }

  .personal-cabinet-modal-shell__header {
    margin-bottom: 8px;
  }

  .personal-cabinet-modal-shell__title {
    margin-bottom: 11px;
  }

  .personal-cabinet-modal-shell__title h1 {
    font-size: 19px;
  }
}

@media (max-width: 359px) {
  .personal-cabinet-modal-shell {
    padding-inline: 6px;
  }

  .personal-cabinet-modal-shell__dialog {
    width: min(calc(100vw - 12px), 390px);
    padding-inline: 9px;
  }
}
</style>
