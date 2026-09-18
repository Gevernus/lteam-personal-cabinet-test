<script setup>
import { nextTick, onMounted, ref } from 'vue'
import PersonalCabinetCommissionContent from './personal_cabinet_commission_content.vue'
import PersonalCabinetConfirmationContent from './personal_cabinet_confirmation_content.vue'
import PersonalCabinetCoordinatesContent from './personal_cabinet_coordinates_content.vue'
import PersonalCabinetDashboard from './personal_cabinet_dashboard.vue'
import PersonalCabinetModalShell from './personal_cabinet_modal_shell.vue'

const dashboard = ref(null)
const modal = ref(null)
const modalOpen = ref(true)
const state = ref('commission')

const titles = {
  commission: 'Commissione da versare',
  coordinates: 'Coordinate di pagamento',
  confirmed: 'Pagamento confermato',
}

const focusDialog = async () => {
  await nextTick()
  modal.value?.focusTitle()
}

const openCommission = async () => {
  state.value = 'commission'
  modalOpen.value = true
  await focusDialog()
}

const closeModal = async () => {
  modalOpen.value = false
  state.value = 'commission'
  await nextTick()
  dashboard.value?.focusLauncher()
}

const handleBack = () => {
  if (state.value === 'coordinates') {
    state.value = 'commission'
    focusDialog()
    return
  }
  closeModal()
}

const handleAdvance = () => {
  state.value = 'coordinates'
  focusDialog()
}

const handleConfirm = () => {
  state.value = 'confirmed'
  focusDialog()
}

onMounted(focusDialog)
</script>

<template>
  <div class="personal-cabinet-flow">
    <div :aria-hidden="modalOpen ? 'true' : undefined" :inert="modalOpen">
      <PersonalCabinetDashboard ref="dashboard" @open-commission="openCommission" />
    </div>
    <PersonalCabinetModalShell
      v-if="modalOpen"
      ref="modal"
      :title="titles[state]"
      :variant="state"
      @back="handleBack"
      @close="closeModal"
    >
      <PersonalCabinetCommissionContent
        v-if="state === 'commission'"
        @advance="handleAdvance"
      />
      <PersonalCabinetCoordinatesContent
        v-else-if="state === 'coordinates'"
        @confirm="handleConfirm"
      />
      <PersonalCabinetConfirmationContent v-else @finish="closeModal" />
    </PersonalCabinetModalShell>
  </div>
</template>

<style scoped>
.personal-cabinet-flow {
  min-height: 100vh;
}
</style>
