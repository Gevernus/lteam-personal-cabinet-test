<script setup>
import { ref, useId } from 'vue'
import PersonalCabinetButton from './personal_cabinet_button.vue'

const props = defineProps({
  model: {
    type: Object,
    required: true,
  },
})

const emit = defineEmits(['open-commission'])
const button = ref(null)
const titleId = useId()

const handleOpen = () => emit('open-commission')
const focusLauncher = () => button.value?.focus()

defineExpose({ focusLauncher })
</script>

<template>
  <section class="personal-cabinet-balance-card" :aria-labelledby="titleId">
    <p>{{ props.model.eyebrow }}</p>
    <h2 :id="titleId">{{ props.model.title }}</h2>
    <strong>{{ props.model.amount }}</strong>
    <span>{{ props.model.description }}</span>
    <PersonalCabinetButton
      ref="button"
      class="personal-cabinet-balance-card__button"
      variant="secondary"
      block
      @click="handleOpen"
    >
      {{ props.model.cta }}
    </PersonalCabinetButton>
    <small>{{ props.model.footnote }}</small>
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

.personal-cabinet-balance-card__button {
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

  .personal-cabinet-balance-card__button {
    width: calc(100% - 64px);
  }
}
</style>
