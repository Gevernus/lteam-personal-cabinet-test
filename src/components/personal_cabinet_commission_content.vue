<script setup>
import PersonalCabinetAmountBreakdown from './personal_cabinet_amount_breakdown.vue'
import PersonalCabinetButton from './personal_cabinet_button.vue'
import PersonalCabinetNotice from './personal_cabinet_notice.vue'
import PersonalCabinetPaymentOption from './personal_cabinet_payment_option.vue'
import PersonalCabinetStepper from './personal_cabinet_stepper.vue'

const props = defineProps({
  model: {
    type: Object,
    required: true,
  },
  steps: {
    type: Array,
    required: true,
  },
})

const emit = defineEmits(['advance'])
const handleAdvance = () => emit('advance')
</script>

<template>
  <div class="personal-cabinet-commission-content">
    <PersonalCabinetStepper
      :current="props.model.currentStep"
      :steps="props.steps"
      :aria-label="props.model.stepperLabel"
    />
    <PersonalCabinetAmountBreakdown v-bind="props.model.amount" />
    <PersonalCabinetNotice>
      {{ props.model.notice.prefix }}<strong>{{ props.model.notice.emphasis }}</strong>{{ props.model.notice.suffix }}
    </PersonalCabinetNotice>
    <PersonalCabinetPaymentOption v-bind="props.model.paymentOption" />
    <PersonalCabinetButton block icon="arrow-right" @click="handleAdvance">
      {{ props.model.cta }}
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
