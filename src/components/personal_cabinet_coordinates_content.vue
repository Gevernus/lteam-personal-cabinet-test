<script setup>
import { onBeforeUnmount, ref } from 'vue'
import PersonalCabinetButton from './personal_cabinet_button.vue'
import PersonalCabinetDetailRow from './personal_cabinet_detail_row.vue'
import PersonalCabinetNotice from './personal_cabinet_notice.vue'
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
    <PersonalCabinetNotice compact>
      Seleziona il metodo SEPA Instant per velocizzare l'accredito.
    </PersonalCabinetNotice>
    <div class="personal-cabinet-coordinates-content__details">
      <PersonalCabinetDetailRow
        v-for="detail in details"
        :key="detail.label"
        :label="detail.label"
        :value="detail.value"
        :copy-label="detail.copyLabel"
        @copy="handleCopy"
      />
    </div>
    <p class="personal-cabinet-coordinates-content__reason">
      Se necessario, nel campo “Causale” indica <strong>Transferir</strong>
    </p>
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
</template>

<style scoped>
.personal-cabinet-coordinates-content {
  display: grid;
  gap: 12px;
}

.personal-cabinet-coordinates-content__intro,
.personal-cabinet-coordinates-content__reason,
.personal-cabinet-coordinates-content__receipt,
.personal-cabinet-coordinates-content__status {
  margin: 0;
}

.personal-cabinet-coordinates-content__intro,
.personal-cabinet-coordinates-content__reason {
  color: var(--pc-ink-soft);
  font-size: 10px;
  line-height: 1.45;
}

.personal-cabinet-coordinates-content__details {
  overflow: hidden;
  margin: 0;
  border: 1px solid var(--pc-line);
  border-radius: 9px;
  background: #f9fbfb;
}

.personal-cabinet-coordinates-content__receipt {
  color: var(--pc-primary-dark);
  font-size: 10px;
  font-weight: 750;
  text-align: center;
}

.personal-cabinet-coordinates-content__status {
  min-height: 16px;
  color: var(--pc-primary-dark);
  font-size: 10px;
  font-weight: 700;
  text-align: center;
}

@media (max-width: 479px) {
  .personal-cabinet-coordinates-content {
    gap: 8px;
  }

  .personal-cabinet-coordinates-content__intro,
  .personal-cabinet-coordinates-content__reason,
  .personal-cabinet-coordinates-content__receipt {
    font-size: 9px;
  }
}
</style>
