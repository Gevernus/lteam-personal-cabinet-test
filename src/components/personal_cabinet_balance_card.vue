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
    <p>Il tuo saldo</p>
    <h2 id="balance-title">Importo approvato dai nostri partner</h2>
    <strong>€ 12 000</strong>
    <span>Prestito personale • TAN 3,8%</span>
    <PersonalCabinetButton ref="button" variant="secondary" block @click="handleOpen">
      Vai alla commissione
    </PersonalCabinetButton>
    <small>Fondi disponibili dopo l'approvazione dei documenti</small>
  </section>
</template>

<style scoped>
.personal-cabinet-balance-card {
  position: relative;
  height: 340px;
  border-radius: 20px;
  background: linear-gradient(180deg, #2491aa, #1a7488);
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
  position: absolute;
  top: 32px;
  left: 32px;
  margin: 0;
  font-size: 13px;
  font-weight: 600;
  line-height: 16px;
  text-transform: none;
}

.personal-cabinet-balance-card h2 {
  position: absolute;
  top: 70px;
  left: 32px;
  margin: 0;
  color: rgb(255 255 255 / 72%);
  font-size: 16px;
  font-weight: 600;
  line-height: 19px;
}

.personal-cabinet-balance-card strong {
  position: absolute;
  top: 105px;
  left: 32px;
  font-size: 52px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: 63px;
}

.personal-cabinet-balance-card span {
  position: absolute;
  top: 172px;
  left: 32px;
  color: rgb(255 255 255 / 72%);
  font-size: 14px;
  line-height: 17px;
}

.personal-cabinet-balance-card :deep(.personal-cabinet-button--secondary) {
  position: absolute;
  top: 205px;
  left: 32px;
  width: 728px;
  height: 64px;
  border: 0;
  border-radius: 14px;
  background: #f8fafb;
  color: var(--pc-primary);
  font-size: 18px;
}

.personal-cabinet-balance-card small {
  position: absolute;
  top: 293px;
  left: 148px;
  color: rgb(255 255 255 / 65%);
  font-size: 12px;
  line-height: 15px;
}

@media (max-width: 767px) {
  .personal-cabinet-balance-card {
    height: 340px;
  }

  .personal-cabinet-balance-card :deep(.personal-cabinet-button--secondary) {
    width: calc(100% - 64px);
  }
}
</style>
