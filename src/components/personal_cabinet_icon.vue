<script setup>
import { computed } from 'vue'

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  size: {
    type: Number,
    default: 20,
  },
})

const iconViewBox = computed(() => {
  if (props.name === 'card' || props.name.startsWith('help')) return '0 0 20 20'
  if (props.name === 'copy') return '0 0 16 16'
  return '0 0 24 24'
})
</script>

<template>
  <svg
    class="personal-cabinet-icon"
    :class="`personal-cabinet-icon--${props.name}`"
    :width="props.size"
    :height="props.size"
    :viewBox="iconViewBox"
    fill="none"
    aria-hidden="true"
  >
    <template v-if="props.name === 'arrow-left'">
      <path d="M12 19 5 12l7-7M19 12H5" />
    </template>
    <template v-else-if="props.name === 'arrow-right'">
      <path d="m12 5 7 7-7 7M5 12h14" />
    </template>
    <template v-else-if="props.name === 'close'">
      <circle cx="12" cy="12" r="10" />
      <path d="m9 9 6 6m0-6-6 6" />
    </template>
    <template v-else-if="props.name === 'copy'">
      <rect x="1.333" y="1.333" width="9.334" height="9.334" rx="1.333" />
      <rect x="5.333" y="5.333" width="9.334" height="9.334" rx="1.333" />
    </template>
    <template v-else-if="props.name === 'info'">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 10v6M12 7.5v.1" />
    </template>
    <template v-else-if="props.name === 'help' || props.name === 'help-bold'">
      <circle cx="10" cy="10" r="9.25" />
      <text x="10" y="13.7" text-anchor="middle">?</text>
    </template>
    <template v-else-if="props.name === 'check'">
      <circle cx="12" cy="12" r="9" />
      <path d="m8 12 2.6 2.6L16.5 9" />
    </template>
    <template v-else-if="props.name === 'wallet'">
      <path d="M4 7.5A2.5 2.5 0 0 1 6.5 5H19v14H6.5A2.5 2.5 0 0 1 4 16.5z" />
      <path d="M4 8h15M15 12h4v4h-4a2 2 0 1 1 0-4Z" />
    </template>
    <template v-else-if="props.name === 'card'">
      <rect x="1.667" y="4.167" width="16.666" height="11.666" rx="1.667" />
      <path d="M1.667 8.333h16.666" />
    </template>
    <template v-else-if="props.name === 'document'">
      <path d="M7 3h7l4 4v14H7z" />
      <path d="M14 3v5h4M10 12h5M10 16h5" />
    </template>
    <template v-else-if="props.name === 'user'">
      <circle cx="12" cy="8" r="4" />
      <path d="M5 21a7 7 0 0 1 14 0" />
    </template>
    <template v-else-if="props.name === 'home'">
      <path d="m4 11 8-7 8 7v9h-6v-6h-4v6H4z" />
    </template>
    <template v-else-if="props.name === 'chat'">
      <path d="M21 11.25a8.25 8.25 0 0 1-12.3 7.2L3 20.35l1.9-5.7A8.25 8.25 0 1 1 21 11.25Z" />
    </template>
    <template v-else-if="props.name === 'headset'">
      <path d="M4 13v-2a8 8 0 0 1 16 0v2" />
      <path d="M4 13h3v6H5a1 1 0 0 1-1-1zm16 0h-3v6h2a1 1 0 0 0 1-1zM17 19c0 1-1.5 2-3 2" />
    </template>
    <template v-else-if="props.name === 'lock'">
      <rect x="5" y="10" width="14" height="11" rx="2" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3" />
    </template>
    <template v-else-if="props.name === 'chart'">
      <path d="M5 20V9m7 11V4m7 16v-7" />
    </template>
    <template v-else>
      <circle cx="12" cy="12" r="8" />
    </template>
  </svg>
</template>

<style scoped>
.personal-cabinet-icon {
  display: block;
  flex: 0 0 auto;
  stroke: currentcolor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 1.8;
}

.personal-cabinet-icon--arrow-left,
.personal-cabinet-icon--arrow-right {
  stroke-width: 1.33;
}

.personal-cabinet-icon--close,
.personal-cabinet-icon--card {
  stroke-width: 2;
}

.personal-cabinet-icon--copy,
.personal-cabinet-icon--help,
.personal-cabinet-icon--help-bold {
  stroke-width: 1.5;
}

.personal-cabinet-icon--help text,
.personal-cabinet-icon--help-bold text {
  fill: currentcolor;
  stroke: none;
  font-family: Geist, sans-serif;
  font-size: 11px;
  font-weight: 400;
}

.personal-cabinet-icon--help-bold text {
  font-family: Inter, sans-serif;
  font-weight: 700;
}
</style>
