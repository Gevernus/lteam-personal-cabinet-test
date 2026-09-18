<script setup>
import PersonalCabinetButton from './personal_cabinet_button.vue'
import PersonalCabinetIcon from './personal_cabinet_icon.vue'

const props = defineProps({
  model: {
    type: Object,
    required: true,
  },
})

const emit = defineEmits(['finish'])
const handleFinish = () => emit('finish')
</script>

<template>
  <div class="personal-cabinet-confirmation-content">
    <span class="personal-cabinet-confirmation-content__icon">
      <PersonalCabinetIcon name="check" :size="34" />
    </span>
    <h2>{{ props.model.title }}</h2>
    <p>{{ props.model.message }}</p>
    <PersonalCabinetButton block icon="home" icon-position="left" @click="handleFinish">
      {{ props.model.cta }}
    </PersonalCabinetButton>
  </div>
</template>

<style scoped>
.personal-cabinet-confirmation-content {
  display: grid;
  justify-items: center;
  padding: 22px 16px 8px;
  text-align: center;
}

.personal-cabinet-confirmation-content__icon {
  display: grid;
  width: 72px;
  height: 72px;
  margin-bottom: 18px;
  place-items: center;
  border-radius: 50%;
  background: var(--pc-surface-soft);
  color: var(--pc-primary);
}

.personal-cabinet-confirmation-content h2 {
  margin: 0 0 8px;
  color: var(--pc-ink);
  font-size: 22px;
}

.personal-cabinet-confirmation-content p {
  max-width: 430px;
  margin: 0 0 24px;
  color: var(--pc-ink-soft);
  font-size: 12px;
  line-height: 1.6;
}
</style>
