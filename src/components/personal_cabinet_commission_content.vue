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
      Il servizio gestisce la tua pratica di credito e garantisce il trasferimento al tasso agevolato. Il costo del servizio non è detraibile dal credito.
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
  gap: 13px;
}

@media (max-width: 479px) {
  .personal-cabinet-commission-content {
    gap: 9px;
  }
}
</style>
