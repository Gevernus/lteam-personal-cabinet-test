<template>
  <main class="personal-cabinet-placeholder">
    <section class="personal-cabinet-placeholder__card">
      <p class="personal-cabinet-placeholder__eyebrow">Тестовое задание</p>
      <h1 class="personal-cabinet-placeholder__title">Экран личного кабинета</h1>
      <p class="personal-cabinet-placeholder__text">
        Каркас готов. Перед вёрсткой нужно выбрать конкретный desktop/mobile экран в Figma.
      </p>
    </section>
  </main>
</template>

<style scoped>
.personal-cabinet-placeholder {
  display: grid;
  min-height: 100vh;
  padding: 24px;
  place-items: center;
}

.personal-cabinet-placeholder__card {
  width: min(100%, 560px);
  padding: 32px;
  border: 1px solid #d8e5e7;
  border-radius: 16px;
  background: #ffffff;
  box-shadow: 0 16px 40px rgb(17 75 82 / 10%);
}

.personal-cabinet-placeholder__eyebrow {
  margin: 0 0 8px;
  color: #138997;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.personal-cabinet-placeholder__title {
  margin: 0;
  font-size: clamp(28px, 5vw, 42px);
}

.personal-cabinet-placeholder__text {
  margin: 16px 0 0;
  color: #52656a;
  line-height: 1.6;
}
</style>
