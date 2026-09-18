<script setup>
import { onBeforeUnmount, ref } from 'vue'
import PersonalCabinetButton from './personal_cabinet_button.vue'
import PersonalCabinetDetailRow from './personal_cabinet_detail_row.vue'
import PersonalCabinetPaymentMethod from './personal_cabinet_payment_method.vue'
import PersonalCabinetStepper from './personal_cabinet_stepper.vue'

const emit = defineEmits(['confirm'])
const copyStatus = ref('')
let feedbackTimer

const details = [
  { label: 'BENEFICIARIO', value: 'Indaco Salvatore', copyLabel: 'Copia beneficiario' },
  { label: 'IBAN', value: 'IT26 U020 0809 5000 0043 1003 095', copyLabel: 'Copia IBAN' },
  { label: 'SWIFT/BIC', value: 'UNCRITMMXXX', copyLabel: 'Copia SWIFT/BIC' },
  { label: 'IMPORTO', value: '37 €', copyLabel: 'Copia importo' },
]

const scheduleStatusClear = () => {
  window.clearTimeout(feedbackTimer)
  feedbackTimer = window.setTimeout(() => {
    copyStatus.value = ''
  }, 3000)
}

const handleCopy = async ({ label, value }) => {
  try {
    if (!navigator.clipboard?.writeText) {
      throw new Error('Clipboard API unavailable')
    }
    await navigator.clipboard.writeText(value)
    copyStatus.value = `${label === 'SWIFT/BIC' ? 'SWIFT/BIC' : label} copiato`
  } catch {
    copyStatus.value = `Copia manualmente: ${value}`
  }
  scheduleStatusClear()
}

const handleConfirm = () => emit('confirm')

onBeforeUnmount(() => window.clearTimeout(feedbackTimer))
</script>

<template>
  <div class="personal-cabinet-coordinates-content">
    <PersonalCabinetStepper :current="3" />
    <p class="personal-cabinet-coordinates-content__intro">
      Copia i dati, apri la tua banca e invia il bonifico.
    </p>
    <PersonalCabinetPaymentMethod />
    <div class="personal-cabinet-coordinates-content__data-block">
      <div class="personal-cabinet-coordinates-content__details">
        <PersonalCabinetDetailRow
          v-for="detail in details"
          :key="detail.label"
          :label="detail.label"
          :value="detail.value"
          :copy-label="detail.copyLabel"
          @copy="handleCopy"
        />
        <p class="personal-cabinet-coordinates-content__reason">
          Se necessario, nel campo "Causale" indichi <strong>"Transfer"</strong>
          <b class="personal-cabinet-coordinates-content__alert">!</b>
        </p>
      </div>
      <p class="personal-cabinet-coordinates-content__receipt">
        Invia la ricevuta al tuo consulente
      </p>
      <p class="personal-cabinet-coordinates-content__status" role="status" aria-live="polite">
        {{ copyStatus }}
      </p>
      <PersonalCabinetButton block icon="arrow-right" @click="handleConfirm">
        Conferma pagamento
      </PersonalCabinetButton>
    </div>
  </div>
</template>

<style scoped>
.personal-cabinet-coordinates-content {
  position: relative;
  height: 662px;
  flex: none;
  font-family: Geist, sans-serif;
}

.personal-cabinet-coordinates-content > :nth-child(1),
.personal-cabinet-coordinates-content > :nth-child(2),
.personal-cabinet-coordinates-content > :nth-child(3),
.personal-cabinet-coordinates-content > :nth-child(4) {
  position: absolute;
  width: 100%;
}

.personal-cabinet-coordinates-content > :nth-child(1) {
  top: 0;
  height: 30px;
}

.personal-cabinet-coordinates-content__intro {
  top: 54px;
  height: 22px;
  margin: 0;
  color: var(--pc-ink-muted);
  font-size: 15px;
  line-height: 22px;
}

.personal-cabinet-coordinates-content > :nth-child(3) {
  top: 100px;
}

.personal-cabinet-coordinates-content__data-block {
  top: 168px;
  height: 494px;
}

.personal-cabinet-coordinates-content__details {
  height: 342px;
  padding: 20px;
  border: 1px solid var(--pc-line);
  border-radius: 16px;
  background: #f4f4f5;
}

.personal-cabinet-coordinates-content__reason,
.personal-cabinet-coordinates-content__receipt,
.personal-cabinet-coordinates-content__status {
  margin: 0;
}

.personal-cabinet-coordinates-content__reason {
  height: 34px;
  margin-top: 16px;
  padding-top: 15px;
  border-top: 1px solid var(--pc-line);
  color: var(--pc-ink-muted);
  font-size: 13px;
  line-height: 18px;
}

.personal-cabinet-coordinates-content__alert {
  color: #dc2626;
}

.personal-cabinet-coordinates-content__receipt,
.personal-cabinet-coordinates-content__status,
.personal-cabinet-coordinates-content__data-block > :last-child {
  position: absolute;
  width: 100%;
}

.personal-cabinet-coordinates-content__receipt {
  top: 372px;
  color: var(--pc-primary);
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  text-align: center;
}

.personal-cabinet-coordinates-content__status {
  top: 394px;
  min-height: 14px;
  color: var(--pc-primary-dark);
  font-size: 10px;
  font-weight: 600;
  text-align: center;
}

.personal-cabinet-coordinates-content__data-block > :last-child {
  top: 410px;
}

@media (max-width: 767px) {
  .personal-cabinet-coordinates-content {
    height: 547px;
    font-family: Inter, sans-serif;
  }

  .personal-cabinet-coordinates-content > :nth-child(1) {
    height: 29px;
  }

  .personal-cabinet-coordinates-content__intro {
    top: 49px;
    font-size: 14px;
  }

  .personal-cabinet-coordinates-content > :nth-child(3) {
    top: 83px;
  }

  .personal-cabinet-coordinates-content__data-block {
    top: 147px;
    height: 400px;
  }

  .personal-cabinet-coordinates-content__details {
    height: 256px;
    padding: 16px;
  }

  .personal-cabinet-coordinates-content__reason {
    height: 52px;
    margin-top: 8px;
    padding-top: 7px;
    font-family: Geist, sans-serif;
    font-size: 13px;
    line-height: 18px;
  }

  .personal-cabinet-coordinates-content__receipt {
    top: 283px;
    font-size: 14px;
    line-height: 17px;
  }

  .personal-cabinet-coordinates-content__status {
    top: 302px;
  }

  .personal-cabinet-coordinates-content__data-block > :last-child {
    top: 312px;
  }
}

@media (max-width: 359px) {
  .personal-cabinet-coordinates-content__intro {
    font-size: 12px;
  }
}
</style>
