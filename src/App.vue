<script setup>
import PersonalCabinetFlow from './components/personal_cabinet_flow.vue'
import { PERSONAL_CABINET_DEMO } from './data/personal_cabinet_demo.js'
</script>

<template>
  <div class="personal-cabinet-app">
    <PersonalCabinetFlow :model="PERSONAL_CABINET_DEMO" />
  </div>
</template>
