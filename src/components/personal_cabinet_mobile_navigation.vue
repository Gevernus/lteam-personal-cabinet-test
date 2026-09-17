<script setup>
import PersonalCabinetIcon from './personal_cabinet_icon.vue'

const links = [
  { label: 'Home', icon: 'home', active: true },
  { label: 'Documenti', icon: 'document', active: false },
  { label: 'Profilo', icon: 'user', active: false },
  { label: 'Assistenza', icon: 'headset', active: false },
]
</script>

<template>
  <nav class="personal-cabinet-mobile-navigation" aria-label="Navigazione mobile">
    <a
      v-for="link in links"
      :key="link.label"
      class="personal-cabinet-mobile-navigation__link"
      :class="{ 'personal-cabinet-mobile-navigation__link--active': link.active }"
      href="#main-content"
      :aria-current="link.active ? 'page' : undefined"
    >
      <PersonalCabinetIcon :name="link.icon" :size="18" />
      <span>{{ link.label }}</span>
    </a>
  </nav>
</template>

<style scoped>
.personal-cabinet-mobile-navigation {
  display: none;
}

@media (max-width: 767px) {
  .personal-cabinet-mobile-navigation {
    position: fixed;
    z-index: 4;
    right: 0;
    bottom: 0;
    left: 0;
    display: grid;
    min-height: 64px;
    padding-bottom: env(safe-area-inset-bottom);
    border-top: 1px solid var(--pc-line);
    background: rgb(255 255 255 / 97%);
    grid-template-columns: repeat(4, 1fr);
  }

  .personal-cabinet-mobile-navigation__link {
    display: flex;
    min-height: 62px;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 5px;
    color: var(--pc-ink-muted);
    font-size: 9px;
    font-weight: 650;
    text-decoration: none;
  }

  .personal-cabinet-mobile-navigation__link--active {
    color: var(--pc-primary-dark);
  }

  .personal-cabinet-mobile-navigation__link:focus-visible {
    outline: 3px solid var(--pc-focus);
    outline-offset: -3px;
  }
}
</style>
