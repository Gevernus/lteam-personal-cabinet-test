<template>
  <a class="personal-cabinet-logo" href="#main-content" aria-label="Avanti, vai al contenuto">
    <span class="personal-cabinet-logo__mark" aria-hidden="true">
      <i></i><i></i><i></i>
    </span>
    <span>Avanti</span>
  </a>
</template>

<style scoped>
.personal-cabinet-logo {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: var(--pc-ink);
  font-size: 24px;
  font-weight: 800;
  letter-spacing: -0.04em;
  text-decoration: none;
}

.personal-cabinet-logo__mark {
  position: relative;
  display: grid;
  width: 31px;
  height: 24px;
  align-content: center;
}

.personal-cabinet-logo__mark i {
  position: absolute;
  left: 0;
  width: 26px;
  height: 2px;
  border-radius: 2px;
  background: var(--pc-primary);
  transform-origin: left center;
}

.personal-cabinet-logo__mark i:nth-child(1) {
  transform: translateY(-6px) rotate(24deg);
}

.personal-cabinet-logo__mark i:nth-child(2) {
  width: 20px;
}

.personal-cabinet-logo__mark i:nth-child(3) {
  transform: translateY(6px) rotate(-24deg);
}

.personal-cabinet-logo:focus-visible {
  border-radius: 4px;
  outline: 3px solid var(--pc-focus);
  outline-offset: 3px;
}
</style>
