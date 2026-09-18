<script setup>
import { ref } from 'vue'
import PersonalCabinetBalanceCard from './personal_cabinet_balance_card.vue'
import PersonalCabinetChecklist from './personal_cabinet_checklist.vue'
import PersonalCabinetHeader from './personal_cabinet_header.vue'
import PersonalCabinetProgressCard from './personal_cabinet_progress_card.vue'
import PersonalCabinetUserSummary from './personal_cabinet_user_summary.vue'
import PersonalCabinetWithdrawalBanner from './personal_cabinet_withdrawal_banner.vue'

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
        <p>Dati personali</p>
        <dl>
          <div><dt>Cognome</dt><dd>Intesa Sanpaolo S.p.A.</dd></div>
          <div><dt>Nome</dt><dd>Marco Rossi</dd></div>
        </dl>
      </section>
      <PersonalCabinetWithdrawalBanner class="personal-cabinet-dashboard__withdrawal" />
    </main>
  </div>
</template>

<style scoped>
.personal-cabinet-dashboard {
  min-height: 910px;
  background: #f8fafb;
}

.personal-cabinet-dashboard__main {
  position: relative;
  width: 100%;
  height: 799px;
}

.personal-cabinet-dashboard__breadcrumb {
  position: absolute;
  top: 21.5px;
  right: calc(50% - 648px);
  color: var(--pc-ink-muted);
  font-size: 14px;
  line-height: 17px;
  text-align: right;
}

.personal-cabinet-dashboard__breadcrumb span {
  padding-inline: 8px;
}

.personal-cabinet-dashboard__breadcrumb strong {
  color: var(--pc-ink);
}

.personal-cabinet-dashboard__main > :deep(.personal-cabinet-user-summary) {
  position: absolute;
  top: 10px;
  left: calc(50% - 648px);
  width: 200px;
}

.personal-cabinet-dashboard__main > :deep(.personal-cabinet-progress-card) {
  position: absolute;
  top: 80px;
  left: calc(50% - 648px);
  width: 792px;
  height: 130px;
}

.personal-cabinet-dashboard__grid {
  position: absolute;
  top: 242px;
  left: calc(50% - 648px);
  display: grid;
  width: 1296px;
  gap: 40px;
  grid-template-columns: 792px 464px;
}

.personal-cabinet-dashboard__personal {
  position: absolute;
  top: 80px;
  left: calc(50% + 184px);
  width: 464px;
  height: 131px;
  padding: 24px;
  border: 1px solid var(--pc-line);
  border-radius: 16px;
  background: #ffffff;
}

.personal-cabinet-dashboard__personal p {
  margin: 0 0 16px;
  color: var(--pc-ink);
  font-size: 15px;
  font-weight: 600;
}

.personal-cabinet-dashboard__personal dl {
  display: grid;
  margin: 0;
  gap: 12px;
}

.personal-cabinet-dashboard__personal dl div {
  display: flex;
  justify-content: space-between;
}

.personal-cabinet-dashboard__personal dt,
.personal-cabinet-dashboard__personal dd {
  margin: 0;
  font-size: 12px;
}

.personal-cabinet-dashboard__personal dt {
  color: var(--pc-ink-muted);
}

.personal-cabinet-dashboard__personal dd {
  font-weight: 600;
}

.personal-cabinet-dashboard__withdrawal {
  position: absolute;
  top: 614px;
  left: calc(50% - 648px);
  width: 792px;
}

@media (max-width: 1023px) and (min-width: 768px) {
  .personal-cabinet-dashboard__main {
    width: 138.8889%;
    transform: scale(0.72);
    transform-origin: top left;
  }
}

@media (max-width: 767px) {
  .personal-cabinet-dashboard {
    min-height: 1600px;
  }

  .personal-cabinet-dashboard__main {
    display: grid;
    width: min(100% - 32px, 540px);
    height: auto;
    margin-inline: auto;
    padding-block: 8px 90px;
    gap: 12px;
  }

  .personal-cabinet-dashboard__breadcrumb {
    display: none;
  }

  .personal-cabinet-dashboard__main > :deep(.personal-cabinet-user-summary) {
    position: absolute;
    top: -52px;
    left: 8px;
    width: 121px;
  }

  .personal-cabinet-dashboard__main > :deep(.personal-cabinet-progress-card),
  .personal-cabinet-dashboard__grid,
  .personal-cabinet-dashboard__personal {
    position: static;
    width: 100%;
  }

  .personal-cabinet-dashboard__grid {
    display: contents;
  }

  .personal-cabinet-dashboard__grid > :deep(.personal-cabinet-balance-card) {
    order: 3;
  }

  .personal-cabinet-dashboard__grid > :deep(.personal-cabinet-checklist) {
    order: 5;
  }

  .personal-cabinet-dashboard__personal {
    height: auto;
    padding: 16px;
    order: 4;
  }
}
</style>
