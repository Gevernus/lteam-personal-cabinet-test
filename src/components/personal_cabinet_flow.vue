<script setup>
import { nextTick, onMounted, ref } from 'vue'
import PersonalCabinetCommissionContent from './personal_cabinet_commission_content.vue'
import PersonalCabinetConfirmationContent from './personal_cabinet_confirmation_content.vue'
import PersonalCabinetCoordinatesContent from './personal_cabinet_coordinates_content.vue'
import PersonalCabinetDashboard from './personal_cabinet_dashboard.vue'
import PersonalCabinetModalShell from './personal_cabinet_modal_shell.vue'

const props = defineProps({
  model: {
    type: Object,
    required: true,
  },
})

const dashboard = ref(null)
const modal = ref(null)
const modalOpen = defineModel('open', {
  type: Boolean,
  default: true,
})
const state = defineModel('state', {
  type: String,
  default: 'commission',
  validator: (value) => ['commission', 'coordinates', 'confirmed'].includes(value),
})

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
      <slot name="dashboard" :open-commission="openCommission">
        <PersonalCabinetDashboard
          ref="dashboard"
          :model="props.model.dashboard"
          @open-commission="openCommission"
        />
      </slot>
    </div>
    <PersonalCabinetModalShell
      v-if="modalOpen"
      ref="modal"
      :title="props.model.modal.titles[state]"
      :eyebrow="props.model.modal.eyebrow"
      :back-label="props.model.modal.backLabel"
      :close-label="props.model.modal.closeLabel"
      :legal="props.model.modal.legal"
      :variant="state"
      @back="handleBack"
      @close="closeModal"
    >
      <template v-if="state === 'commission'">
        <slot name="commission" :advance="handleAdvance" :model="props.model.commission">
          <PersonalCabinetCommissionContent
            :model="props.model.commission"
            :steps="props.model.steps"
            @advance="handleAdvance"
          />
        </slot>
      </template>
      <template v-else-if="state === 'coordinates'">
        <slot name="coordinates" :confirm="handleConfirm" :model="props.model.coordinates">
          <PersonalCabinetCoordinatesContent
            :model="props.model.coordinates"
            :steps="props.model.steps"
            @confirm="handleConfirm"
          />
        </slot>
      </template>
      <template v-else>
        <slot name="confirmation" :finish="closeModal" :model="props.model.confirmation">
          <PersonalCabinetConfirmationContent
            :model="props.model.confirmation"
            @finish="closeModal"
          />
        </slot>
      </template>
    </PersonalCabinetModalShell>
  </div>
</template>

<style scoped>
.personal-cabinet-flow {
  min-height: 100vh;
}
</style>
