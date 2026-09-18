<script setup>
const props = defineProps({
  model: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <section class="personal-cabinet-personal-data" :aria-label="props.model.title">
    <p>{{ props.model.title }}</p>
    <dl>
      <div v-for="row in props.model.rows" :key="row.label">
        <dt>{{ row.label }}</dt>
        <dd>{{ row.value }}</dd>
      </div>
    </dl>
  </section>
</template>

<style scoped>
.personal-cabinet-personal-data {
  height: 131px;
  padding: 24px;
  border: 1px solid var(--pc-line);
  border-radius: 16px;
  background: #ffffff;
}

.personal-cabinet-personal-data p {
  margin: 0 0 16px;
  color: var(--pc-ink);
  font-size: 15px;
  font-weight: 600;
}

.personal-cabinet-personal-data dl {
  display: grid;
  margin: 0;
  gap: 12px;
}

.personal-cabinet-personal-data dl div {
  display: flex;
  justify-content: space-between;
}

.personal-cabinet-personal-data dt,
.personal-cabinet-personal-data dd {
  margin: 0;
  font-size: 12px;
}

.personal-cabinet-personal-data dt {
  color: var(--pc-ink-muted);
}

.personal-cabinet-personal-data dd {
  font-weight: 600;
}

@media (max-width: 767px) {
  .personal-cabinet-personal-data {
    height: auto;
    padding: 16px;
  }
}
</style>
