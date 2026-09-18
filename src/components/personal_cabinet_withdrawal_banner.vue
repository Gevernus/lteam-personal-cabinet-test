<script setup>
import PersonalCabinetIcon from './personal_cabinet_icon.vue'

const props = defineProps({
  model: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <section class="personal-cabinet-withdrawal-banner" :aria-label="props.model.label">
    <span class="personal-cabinet-withdrawal-banner__icon">
      <PersonalCabinetIcon name="lock" :size="20" />
    </span>
    <div>
      <strong>{{ props.model.title }}</strong>
      <p>{{ props.model.description }}</p>
      <label v-for="requirement in props.model.requirements" :key="requirement">
        <span></span>{{ requirement }}
      </label>
    </div>
  </section>
</template>

<style scoped>
.personal-cabinet-withdrawal-banner {
  display: flex;
  height: 124px;
  gap: 16px;
  padding: 16px 20px;
  border: 1px solid #c7e3ea;
  border-radius: 16px;
  background: var(--pc-surface-soft);
}

.personal-cabinet-withdrawal-banner__icon {
  display: grid;
  width: 44px;
  height: 44px;
  flex: none;
  place-items: center;
  border-radius: 50%;
  background: var(--pc-primary);
  color: #ffffff;
}

.personal-cabinet-withdrawal-banner strong {
  display: block;
  margin: 2px 0 8px;
  font-size: 14px;
}

.personal-cabinet-withdrawal-banner p,
.personal-cabinet-withdrawal-banner label {
  margin: 0;
  color: var(--pc-ink-muted);
  font-size: 12px;
}

.personal-cabinet-withdrawal-banner label {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 4px;
}

.personal-cabinet-withdrawal-banner label span {
  width: 16px;
  height: 16px;
  border: 1px solid var(--pc-primary);
  border-radius: 3px;
}

@media (max-width: 767px) {
  .personal-cabinet-withdrawal-banner {
    display: none;
  }
}
</style>
