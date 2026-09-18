<script setup>
import { onBeforeUnmount, ref } from 'vue'
import PersonalCabinetButton from './personal_cabinet_button.vue'
import PersonalCabinetDetailRow from './personal_cabinet_detail_row.vue'
import PersonalCabinetPaymentMethod from './personal_cabinet_payment_method.vue'
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

const emit = defineEmits(['confirm'])
const copyStatus = ref('')
let feedbackTimer

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
    copyStatus.value = `${label} ${props.model.copyFeedback.successSuffix}`
  } catch {
    copyStatus.value = `${props.model.copyFeedback.manualPrefix} ${value}`
  }
  scheduleStatusClear()
}

const handleConfirm = () => emit('confirm')

onBeforeUnmount(() => window.clearTimeout(feedbackTimer))
</script>

<template>
  <div
    class="personal-cabinet-coordinates-content"
    :class="{ 'personal-cabinet-coordinates-content--fixed': props.model.fixedLayout }"
  >
    <PersonalCabinetStepper
      :current="props.model.currentStep"
      :steps="props.steps"
      :aria-label="props.model.stepperLabel"
    />
    <p class="personal-cabinet-coordinates-content__intro">{{ props.model.intro }}</p>
    <PersonalCabinetPaymentMethod v-bind="props.model.paymentMethod" />
    <div class="personal-cabinet-coordinates-content__data-block">
      <div class="personal-cabinet-coordinates-content__details">
        <PersonalCabinetDetailRow
          v-for="detail in props.model.details"
          :key="detail.label"
          :label="detail.label"
          :value="detail.value"
          :copy-label="detail.copyLabel"
          @copy="handleCopy"
        />
        <p class="personal-cabinet-coordinates-content__reason">
          {{ props.model.reason.prefix }}<strong>{{ props.model.reason.value }}</strong>
          <b class="personal-cabinet-coordinates-content__alert">{{ props.model.reason.alert }}</b>
        </p>
      </div>
      <p class="personal-cabinet-coordinates-content__receipt">{{ props.model.receipt }}</p>
      <p class="personal-cabinet-coordinates-content__status" role="status" aria-live="polite">
        {{ copyStatus }}
      </p>
      <PersonalCabinetButton block icon="arrow-right" @click="handleConfirm">
        {{ props.model.cta }}
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

.personal-cabinet-coordinates-content:not(.personal-cabinet-coordinates-content--fixed) {
  display: grid;
  height: auto;
  gap: 24px;
}

.personal-cabinet-coordinates-content:not(.personal-cabinet-coordinates-content--fixed) > *,
.personal-cabinet-coordinates-content:not(.personal-cabinet-coordinates-content--fixed) .personal-cabinet-coordinates-content__receipt,
.personal-cabinet-coordinates-content:not(.personal-cabinet-coordinates-content--fixed) .personal-cabinet-coordinates-content__status,
.personal-cabinet-coordinates-content:not(.personal-cabinet-coordinates-content--fixed) .personal-cabinet-coordinates-content__data-block > :last-child {
  position: static;
  width: 100%;
}

.personal-cabinet-coordinates-content:not(.personal-cabinet-coordinates-content--fixed) .personal-cabinet-coordinates-content__data-block,
.personal-cabinet-coordinates-content:not(.personal-cabinet-coordinates-content--fixed) .personal-cabinet-coordinates-content__details,
.personal-cabinet-coordinates-content:not(.personal-cabinet-coordinates-content--fixed) .personal-cabinet-coordinates-content__reason {
  height: auto;
}

.personal-cabinet-coordinates-content:not(.personal-cabinet-coordinates-content--fixed) .personal-cabinet-coordinates-content__data-block {
  display: grid;
  gap: 12px;
}
</style>
