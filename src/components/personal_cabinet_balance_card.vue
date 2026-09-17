<script setup>
import { ref } from 'vue'
import PersonalCabinetButton from './personal_cabinet_button.vue'

const emit = defineEmits(['open-commission'])
const button = ref(null)

const handleOpen = () => emit('open-commission')
const focusLauncher = () => button.value?.focus()

defineExpose({ focusLauncher })
</script>

<template>
  <section class="personal-cabinet-balance-card" aria-labelledby="balance-title">
    <p>IL TUO SALDO</p>
    <h2 id="balance-title">IMPORTO APPROVATO DAI NOSTRI PARTNER</h2>
    <strong>€ 12 000</strong>
    <span>Prestito personale • TAN 3,8%</span>
    <PersonalCabinetButton ref="button" variant="secondary" block @click="handleOpen">
      Vai alla commissione
    </PersonalCabinetButton>
    <small>Fondi disponibili dopo l'accredito</small>
  </section>
</template>

<style scoped>
.personal-cabinet-balance-card {
  min-height: 264px;
  padding: 26px;
  border-radius: 12px;
  background: linear-gradient(135deg, #08778c, #1696ab);
  box-shadow: 0 15px 35px rgb(15 108 124 / 18%);
  color: #ffffff;
}

.personal-cabinet-balance-card p,
.personal-cabinet-balance-card h2,
.personal-cabinet-balance-card strong,
.personal-cabinet-balance-card span,
.personal-cabinet-balance-card small {
  display: block;
}

.personal-cabinet-balance-card p {
  margin: 0 0 18px;
  font-size: 10px;
  font-weight: 750;
  letter-spacing: 0.09em;
}

.personal-cabinet-balance-card h2 {
  margin: 0 0 4px;
  color: rgb(255 255 255 / 72%);
  font-size: 10px;
  font-weight: 650;
}

.personal-cabinet-balance-card strong {
  margin-bottom: 6px;
  font-size: clamp(34px, 4vw, 48px);
  letter-spacing: -0.04em;
}

.personal-cabinet-balance-card span {
  margin-bottom: 24px;
  color: rgb(255 255 255 / 72%);
  font-size: 11px;
}

.personal-cabinet-balance-card :deep(.personal-cabinet-button--secondary) {
  border-color: rgb(255 255 255 / 45%);
  background: rgb(255 255 255 / 92%);
}

.personal-cabinet-balance-card small {
  margin-top: 10px;
  color: rgb(255 255 255 / 65%);
  font-size: 9px;
  text-align: center;
}

@media (max-width: 767px) {
  .personal-cabinet-balance-card {
    min-height: 230px;
    padding: 22px;
  }
}
</style>
