<script setup>
import { ref, useId } from 'vue'
import PersonalCabinetBalanceCard from './personal_cabinet_balance_card.vue'
import PersonalCabinetChecklist from './personal_cabinet_checklist.vue'
import PersonalCabinetHeader from './personal_cabinet_header.vue'
import PersonalCabinetPersonalData from './personal_cabinet_personal_data.vue'
import PersonalCabinetProgressCard from './personal_cabinet_progress_card.vue'
import PersonalCabinetUserSummary from './personal_cabinet_user_summary.vue'
import PersonalCabinetWithdrawalBanner from './personal_cabinet_withdrawal_banner.vue'

const props = defineProps({
  model: {
    type: Object,
    required: true,
  },
})

const emit = defineEmits(['open-commission'])
const balanceCard = ref(null)
const mainId = useId()

const handleOpen = () => emit('open-commission')
const focusLauncher = () => balanceCard.value?.focusLauncher()

defineExpose({ focusLauncher })
</script>

<template>
  <div class="personal-cabinet-dashboard">
    <PersonalCabinetHeader :navigation="props.model.navigation" :main-id="mainId" />
    <main :id="mainId" class="personal-cabinet-dashboard__main">
      <div
        class="personal-cabinet-dashboard__breadcrumb"
        :aria-label="props.model.breadcrumbLabel"
      >
        {{ props.model.breadcrumb[0] }} <span>/</span> <strong>{{ props.model.breadcrumb[1] }}</strong>
      </div>
      <PersonalCabinetUserSummary
        class="personal-cabinet-dashboard__user"
        :user="props.model.user"
      />
      <PersonalCabinetProgressCard
        class="personal-cabinet-dashboard__progress"
        :model="props.model.progress"
      />
      <div class="personal-cabinet-dashboard__grid">
        <PersonalCabinetBalanceCard
          ref="balanceCard"
          class="personal-cabinet-dashboard__balance"
          :model="props.model.balance"
          @open-commission="handleOpen"
        />
        <PersonalCabinetChecklist
          class="personal-cabinet-dashboard__checklist"
          :model="props.model.checklist"
        />
      </div>
      <PersonalCabinetPersonalData
        class="personal-cabinet-dashboard__personal"
        :model="props.model.personalData"
      />
      <PersonalCabinetWithdrawalBanner
        class="personal-cabinet-dashboard__withdrawal"
        :model="props.model.withdrawal"
      />
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

.personal-cabinet-dashboard__user {
  position: absolute;
  top: 10px;
  left: calc(50% - 648px);
  width: 200px;
}

.personal-cabinet-dashboard__progress {
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

  .personal-cabinet-dashboard__user {
    position: absolute;
    top: -52px;
    left: 8px;
    width: 121px;
  }

  .personal-cabinet-dashboard__progress,
  .personal-cabinet-dashboard__grid,
  .personal-cabinet-dashboard__personal {
    position: static;
    width: 100%;
  }

  .personal-cabinet-dashboard__grid {
    display: contents;
  }

  .personal-cabinet-dashboard__balance {
    order: 3;
  }

  .personal-cabinet-dashboard__checklist {
    order: 5;
  }

  .personal-cabinet-dashboard__personal {
    order: 4;
  }
}
</style>
