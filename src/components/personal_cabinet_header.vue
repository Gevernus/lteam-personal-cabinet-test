<script setup>
import PersonalCabinetIcon from './personal_cabinet_icon.vue'
import PersonalCabinetLogo from './personal_cabinet_logo.vue'

const links = [
  { label: 'Home', shortLabel: 'Home', icon: 'home', active: true },
  { label: 'Documenti', shortLabel: 'Docs', icon: 'document', active: false },
  { label: 'Profilo', shortLabel: 'Profilo', icon: 'user', active: false },
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
          <PersonalCabinetIcon :name="link.icon" :size="18" />
          <span class="personal-cabinet-header__desktop-label">{{ link.label }}</span>
          <span class="personal-cabinet-header__mobile-label">{{ link.shortLabel }}</span>
        </a>
      </nav>
      <a class="personal-cabinet-header__support" href="mailto:assistenza@example.com">
        <PersonalCabinetIcon name="chat" :size="18" />
        <span>ASSISTENZA</span>
        <b aria-label="4 nuove notifiche">4</b>
      </a>
    </div>
  </header>
</template>

<style scoped>
.personal-cabinet-header {
  position: relative;
  z-index: 2;
  height: 111px;
  background: #ffffff;
}

.personal-cabinet-header__inner {
  position: relative;
  width: min(calc(100% - 64px), 1376px);
  top: 16px;
  height: 79px;
  margin-inline: auto;
}

.personal-cabinet-header__inner > :first-child {
  position: absolute;
  top: 20px;
  left: 40px;
}

.personal-cabinet-header__nav {
  position: absolute;
  top: 20.5px;
  left: 244px;
  display: flex;
  width: 660px;
  height: 38px;
  gap: 12px;
}

.personal-cabinet-header__link {
  display: flex;
  min-width: 0;
  flex: 1;
  align-items: center;
  justify-content: flex-start;
  gap: 12px;
  padding: 0 12px;
  border-radius: 8px;
  background: #f4f4f5;
  color: var(--pc-ink);
  font-size: 14px;
  font-weight: 400;
  text-decoration: none;
}

.personal-cabinet-header__mobile-label {
  display: none;
}

.personal-cabinet-header__link--active {
  background: var(--pc-surface-soft);
  color: var(--pc-primary);
  font-weight: 600;
}

.personal-cabinet-header__support {
  position: absolute;
  top: 20px;
  right: 40px;
  display: inline-flex;
  width: 156px;
  height: 39px;
  align-items: center;
  gap: 12px;
  padding: 0 12px;
  border-radius: 8px;
  background: var(--pc-primary);
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  text-transform: capitalize;
}

.personal-cabinet-header__support b {
  position: absolute;
  top: -10px;
  right: -11px;
  display: grid;
  width: 22px;
  height: 22px;
  place-items: center;
  border-radius: 50%;
  background: #d75555;
  color: #ffffff;
  font-size: 11px;
}

.personal-cabinet-header a:focus-visible {
  outline: 3px solid var(--pc-focus);
  outline-offset: -3px;
}

@media (max-width: 767px) {
  .personal-cabinet-header {
    height: 116px;
  }

  .personal-cabinet-header__inner {
    top: 0;
    width: 100%;
    height: 116px;
  }

  .personal-cabinet-header__inner > :first-child {
    top: 13.5px;
    left: 16px;
  }

  .personal-cabinet-header__nav {
    top: 66.5px;
    right: 24px;
    left: auto;
    display: flex;
    width: 178px;
    height: 27px;
    gap: 8px;
  }

  .personal-cabinet-header__link {
    height: 27px;
    justify-content: center;
    padding: 0 10px;
    border-radius: 8px;
    font-size: 12px;
  }

  .personal-cabinet-header__link :deep(svg),
  .personal-cabinet-header__desktop-label {
    display: none;
  }

  .personal-cabinet-header__mobile-label {
    display: inline;
  }

  .personal-cabinet-header__support {
    top: 12px;
    right: 16px;
    width: 124px;
    height: 32px;
    justify-content: flex-start;
    padding: 0 12px;
    font-size: 12px;
  }

  .personal-cabinet-header__support b {
    display: none;
  }
}
</style>
