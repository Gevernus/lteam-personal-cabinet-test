<template>
  <a class="personal-cabinet-logo" href="#main-content" aria-label="Avanti, vai al contenuto">
    <span class="personal-cabinet-logo__mark" aria-hidden="true">
      <svg viewBox="0 0 48.15 37.57">
        <path class="personal-cabinet-logo__mark-primary" d="M48.15 17.37C32.79 7.69 23.6 4.14 6.54 0l29.78 17.37L5.71 37.57c17.63-5.93 26.79-10.6 42.44-20.2Z" />
        <path class="personal-cabinet-logo__mark-secondary" d="M16.84 10.23c5.24 2.34 8.09 3.83 12.8 7.14C18.22 24.51 11.71 28.23 0 34.6l23.93-17.23-7.09-7.14Z" />
      </svg>
    </span>
    <span>Avanti</span>
  </a>
</template>

<style scoped>
.personal-cabinet-logo {
  display: inline-flex;
  align-items: center;
  width: 152px;
  height: 39px;
  gap: 12px;
  color: #000000;
  font-size: 32px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: 39px;
  text-decoration: none;
}

.personal-cabinet-logo__mark,
.personal-cabinet-logo__mark svg {
  display: block;
  width: 48px;
  height: 38px;
}

.personal-cabinet-logo__mark-primary {
  fill: var(--pc-primary);
}

.personal-cabinet-logo__mark-secondary {
  fill: #245caa;
}

.personal-cabinet-logo:focus-visible {
  border-radius: 4px;
  outline: 3px solid var(--pc-focus);
  outline-offset: 3px;
}

@media (max-width: 767px) {
  .personal-cabinet-logo {
    width: 104px;
    height: 29px;
    gap: 6px;
    font-size: 22px;
    line-height: 27px;
  }

  .personal-cabinet-logo__mark,
  .personal-cabinet-logo__mark svg {
    width: 34px;
    height: 26px;
  }
}
</style>
