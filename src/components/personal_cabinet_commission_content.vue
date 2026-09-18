<script setup>
import PersonalCabinetAmountBreakdown from './personal_cabinet_amount_breakdown.vue'
import PersonalCabinetButton from './personal_cabinet_button.vue'
import PersonalCabinetNotice from './personal_cabinet_notice.vue'
import PersonalCabinetPaymentOption from './personal_cabinet_payment_option.vue'
import PersonalCabinetStepper from './personal_cabinet_stepper.vue'

const emit = defineEmits(['advance'])
const handleAdvance = () => emit('advance')
</script>

<template>
  <div class="personal-cabinet-commission-content">
    <PersonalCabinetStepper :current="2" />
    <PersonalCabinetAmountBreakdown />
    <PersonalCabinetNotice>
      Il servizio gestisce la tua pratica di credito e garantisce il trasferimento al tasso agevolato. Il costo del servizio <strong>non è detraibile</strong> dal credito.
    </PersonalCabinetNotice>
    <PersonalCabinetPaymentOption />
    <PersonalCabinetButton block icon="arrow-right" @click="handleAdvance">
      Vai alle coordinate
    </PersonalCabinetButton>
  </div>
</template>

<style scoped>
.personal-cabinet-commission-content {
  display: grid;
  height: 520px;
  flex: none;
  gap: 24px;
}

.personal-cabinet-commission-content > :last-child {
  margin-top: 8px;
}

@media (max-width: 767px) {
  .personal-cabinet-commission-content {
    height: 488px;
    gap: 20px;
  }
}

@media (max-width: 359px) {
  .personal-cabinet-commission-content {
    height: auto;
  }
}
</style>
