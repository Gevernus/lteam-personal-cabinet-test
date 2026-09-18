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
  variant: {
    type: String,
    default: 'commission',
    validator: (value) => ['commission', 'coordinates', 'confirmed'].includes(value),
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
      :class="`personal-cabinet-modal-shell__dialog--${props.variant}`"
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
        Connessione SSL&nbsp;&nbsp;·&nbsp;&nbsp;Visa&nbsp;&nbsp;·&nbsp;&nbsp;Mastercard&nbsp;&nbsp;·&nbsp;&nbsp;SEPA
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
  padding: 20px;
  background: rgb(26 35 50 / 45%);
  place-items: center;
}

.personal-cabinet-modal-shell__dialog {
  display: flex;
  width: min(100%, 681px);
  flex: none;
  flex-direction: column;
  gap: 24px;
  padding: 23px;
  border: 1px solid var(--pc-line);
  border-radius: 23px;
  background: #ffffff;
}

.personal-cabinet-modal-shell__dialog--commission {
  height: 761px;
}

.personal-cabinet-modal-shell__dialog--coordinates {
  position: relative;
  height: 858px;
  background: #fafafa;
  font-family: Geist, sans-serif;
}

.personal-cabinet-modal-shell__dialog--coordinates .personal-cabinet-modal-shell__title {
  height: 52px;
}

.personal-cabinet-modal-shell__dialog--coordinates .personal-cabinet-modal-shell__title p {
  margin-bottom: 4px;
  font-size: 11px;
  line-height: 14px;
}

.personal-cabinet-modal-shell__dialog--coordinates .personal-cabinet-modal-shell__title h1 {
  line-height: 34px;
}

.personal-cabinet-modal-shell__dialog--coordinates .personal-cabinet-modal-shell__legal {
  position: absolute;
  top: 800px;
  left: 24px;
  width: 633px;
  height: 16px;
  padding: 0;
  line-height: 16px;
}

.personal-cabinet-modal-shell__header {
  display: flex;
  height: 40px;
  flex: none;
  align-items: center;
  justify-content: space-between;
}

.personal-cabinet-modal-shell__title {
  height: 50px;
  flex: none;
}

.personal-cabinet-modal-shell__title p {
  margin: 0 0 4px;
  color: var(--pc-primary);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 1px;
  line-height: 15px;
}

.personal-cabinet-modal-shell__title h1 {
  margin: 0;
  color: var(--pc-ink);
  font-size: 26px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 31px;
  outline: none;
}

.personal-cabinet-modal-shell__legal {
  height: 23px;
  flex: none;
  padding-top: 8px;
  color: var(--pc-ink-muted);
  font-size: 12px;
  line-height: 15px;
  text-align: center;
}

.personal-cabinet-modal-shell__legal span {
  padding-inline: 5px;
}

@media (max-width: 767px) {
  .personal-cabinet-modal-shell {
    align-items: start;
    padding: 140px 20px 80px;
  }

  .personal-cabinet-modal-shell__dialog {
    width: min(100%, 350px);
    gap: 20px;
    padding: 15px;
  }

  .personal-cabinet-modal-shell__dialog--commission {
    height: 701px;
  }

  .personal-cabinet-modal-shell__dialog--coordinates {
    height: 713px;
    background: #ffffff;
    font-family: Inter, sans-serif;
  }

  .personal-cabinet-modal-shell__title h1 {
    font-size: 26px;
    line-height: 31px;
  }

  .personal-cabinet-modal-shell__dialog--coordinates .personal-cabinet-modal-shell__title {
    height: 46px;
  }

  .personal-cabinet-modal-shell__dialog--coordinates .personal-cabinet-modal-shell__title p {
    font-size: 11px;
    line-height: 13px;
  }

  .personal-cabinet-modal-shell__dialog--coordinates .personal-cabinet-modal-shell__title h1 {
    font-size: 24px;
    line-height: 29px;
  }

  .personal-cabinet-modal-shell__dialog--coordinates .personal-cabinet-modal-shell__legal {
    top: 659px;
    left: 16px;
    width: 318px;
    height: 15px;
    line-height: 15px;
  }
}

@media (max-width: 359px) {
  .personal-cabinet-modal-shell {
    padding: 32px 12px 72px;
  }

  .personal-cabinet-modal-shell__dialog {
    width: 100%;
    height: auto;
    min-height: 701px;
    padding-inline: 11px;
  }
}
</style>
