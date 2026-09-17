<script setup>
import { ref } from 'vue'
import PersonalCabinetBalanceCard from './personal_cabinet_balance_card.vue'
import PersonalCabinetChecklist from './personal_cabinet_checklist.vue'
import PersonalCabinetHeader from './personal_cabinet_header.vue'
import PersonalCabinetMobileNavigation from './personal_cabinet_mobile_navigation.vue'
import PersonalCabinetProgressCard from './personal_cabinet_progress_card.vue'
import PersonalCabinetUserSummary from './personal_cabinet_user_summary.vue'

const emit = defineEmits(['open-commission'])
const balanceCard = ref(null)

const handleOpen = () => emit('open-commission')
const focusLauncher = () => balanceCard.value?.focusLauncher()

defineExpose({ focusLauncher })
</script>

<template>
  <div class="personal-cabinet-dashboard">
    <PersonalCabinetHeader />
    <main id="main-content" class="personal-cabinet-dashboard__main">
      <div class="personal-cabinet-dashboard__breadcrumb" aria-label="Breadcrumb">
        Piattaforma <span>/</span> <strong>Home</strong>
      </div>
      <PersonalCabinetUserSummary />
      <PersonalCabinetProgressCard />
      <div class="personal-cabinet-dashboard__grid">
        <PersonalCabinetBalanceCard ref="balanceCard" @open-commission="handleOpen" />
        <PersonalCabinetChecklist />
      </div>
      <section class="personal-cabinet-dashboard__personal" aria-label="Dati personali">
        <p>DATI PERSONALI</p>
        <dl>
          <div><dt>Cognome</dt><dd>Rossi</dd></div>
          <div><dt>Nome</dt><dd>Marco</dd></div>
        </dl>
      </section>
    </main>
    <PersonalCabinetMobileNavigation />
  </div>
</template>

<style scoped>
.personal-cabinet-dashboard {
  min-height: 100vh;
  background: #f5f7f7;
}

.personal-cabinet-dashboard__main {
  display: grid;
  width: min(100% - 48px, 1240px);
  margin-inline: auto;
  padding-block: 20px 90px;
  gap: 18px;
}

.personal-cabinet-dashboard__breadcrumb {
  color: var(--pc-ink-muted);
  font-size: 10px;
  text-align: right;
}

.personal-cabinet-dashboard__breadcrumb span {
  padding-inline: 7px;
}

.personal-cabinet-dashboard__breadcrumb strong {
  color: var(--pc-ink);
}

.personal-cabinet-dashboard__grid {
  display: grid;
  gap: 18px;
  grid-template-columns: minmax(300px, 0.9fr) minmax(420px, 1.35fr);
}

.personal-cabinet-dashboard__personal {
  display: none;
  padding: 16px;
  border: 1px solid var(--pc-line);
  border-radius: 10px;
  background: #ffffff;
}

.personal-cabinet-dashboard__personal p {
  margin: 0 0 12px;
  color: var(--pc-primary-dark);
  font-size: 9px;
  font-weight: 800;
  letter-spacing: 0.08em;
}

.personal-cabinet-dashboard__personal dl {
  display: grid;
  margin: 0;
  gap: 8px;
}

.personal-cabinet-dashboard__personal dl div {
  display: flex;
  justify-content: space-between;
}

.personal-cabinet-dashboard__personal dt,
.personal-cabinet-dashboard__personal dd {
  margin: 0;
  font-size: 10px;
}

.personal-cabinet-dashboard__personal dt {
  color: var(--pc-ink-muted);
}

.personal-cabinet-dashboard__personal dd {
  font-weight: 700;
}

@media (max-width: 767px) {
  .personal-cabinet-dashboard__main {
    width: min(100% - 24px, 540px);
    padding-block: 14px 90px;
    gap: 12px;
  }

  .personal-cabinet-dashboard__breadcrumb {
    display: none;
  }

  .personal-cabinet-dashboard__grid {
    grid-template-columns: 1fr;
  }

  .personal-cabinet-dashboard__personal {
    display: block;
    order: 5;
  }
}
</style>
