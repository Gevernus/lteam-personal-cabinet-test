<script setup>
import PersonalCabinetIcon from './personal_cabinet_icon.vue'
import PersonalCabinetLogo from './personal_cabinet_logo.vue'

const links = [
  { label: 'Home', icon: 'home', active: true },
  { label: 'Documenti', icon: 'document', active: false },
  { label: 'Profilo', icon: 'user', active: false },
]
</script>

<template>
  <header class="personal-cabinet-header">
    <div class="personal-cabinet-header__inner">
      <PersonalCabinetLogo />
      <nav class="personal-cabinet-header__nav" aria-label="Navigazione principale">
        <a
          v-for="link in links"
          :key="link.label"
          class="personal-cabinet-header__link"
          :class="{ 'personal-cabinet-header__link--active': link.active }"
          href="#main-content"
          :aria-current="link.active ? 'page' : undefined"
        >
          <PersonalCabinetIcon :name="link.icon" :size="15" />
          {{ link.label }}
        </a>
      </nav>
      <a class="personal-cabinet-header__support" href="mailto:assistenza@example.com">
        <PersonalCabinetIcon name="headset" :size="17" />
        <span>ASSISTENZA</span>
        <b aria-label="1 nuova notifica">1</b>
      </a>
    </div>
  </header>
</template>

<style scoped>
.personal-cabinet-header {
  position: relative;
  z-index: 2;
  border-bottom: 1px solid var(--pc-line);
  background: #ffffff;
}

.personal-cabinet-header__inner {
  display: grid;
  width: min(100% - 48px, 1320px);
  min-height: 68px;
  align-items: center;
  margin-inline: auto;
  grid-template-columns: 1fr auto 1fr;
}

.personal-cabinet-header__nav {
  display: flex;
  align-self: stretch;
}

.personal-cabinet-header__link {
  display: flex;
  min-width: 128px;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border-bottom: 3px solid transparent;
  color: var(--pc-ink-soft);
  font-size: 13px;
  font-weight: 650;
  text-decoration: none;
}

.personal-cabinet-header__link--active {
  border-bottom-color: var(--pc-primary);
  background: var(--pc-surface-soft);
  color: var(--pc-primary-dark);
}

.personal-cabinet-header__support {
  position: relative;
  display: inline-flex;
  min-height: 38px;
  align-items: center;
  justify-self: end;
  gap: 8px;
  padding-inline: 15px;
  border: 1px solid var(--pc-primary);
  border-radius: 6px;
  color: var(--pc-primary-dark);
  font-size: 11px;
  font-weight: 750;
  letter-spacing: 0.04em;
  text-decoration: none;
}

.personal-cabinet-header__support b {
  position: absolute;
  top: -8px;
  right: -7px;
  display: grid;
  width: 18px;
  height: 18px;
  place-items: center;
  border: 2px solid #ffffff;
  border-radius: 50%;
  background: #d75555;
  color: #ffffff;
  font-size: 9px;
}

.personal-cabinet-header a:focus-visible {
  outline: 3px solid var(--pc-focus);
  outline-offset: -3px;
}

@media (max-width: 767px) {
  .personal-cabinet-header__inner {
    width: min(100% - 28px, 540px);
    min-height: 60px;
    grid-template-columns: 1fr auto;
  }

  .personal-cabinet-header__nav,
  .personal-cabinet-header__support span {
    display: none;
  }

  .personal-cabinet-header__support {
    width: 38px;
    padding: 0;
    justify-content: center;
    border-radius: 50%;
  }
}
</style>
