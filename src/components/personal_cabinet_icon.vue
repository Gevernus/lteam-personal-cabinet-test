<script setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
  size: {
    type: Number,
    default: 20,
  },
})
</script>

<template>
  <svg
    class="personal-cabinet-icon"
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    <template v-if="name === 'arrow-left'">
      <path d="m14.5 6-6 6 6 6" />
    </template>
    <template v-else-if="name === 'arrow-right'">
      <path d="m9.5 6 6 6-6 6" />
    </template>
    <template v-else-if="name === 'close'">
      <circle cx="12" cy="12" r="9" />
      <path d="m9 9 6 6M15 9l-6 6" />
    </template>
    <template v-else-if="name === 'copy'">
      <rect x="8" y="8" width="10" height="11" rx="2" />
      <path d="M15 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" />
    </template>
    <template v-else-if="name === 'info'">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 10v6M12 7.5v.1" />
    </template>
    <template v-else-if="name === 'help'">
      <circle cx="12" cy="12" r="9" />
      <path d="M9.8 9a2.3 2.3 0 1 1 3.3 2.1c-.8.4-1.1.9-1.1 1.9M12 16.5v.1" />
    </template>
    <template v-else-if="name === 'check'">
      <circle cx="12" cy="12" r="9" />
      <path d="m8 12 2.6 2.6L16.5 9" />
    </template>
    <template v-else-if="name === 'wallet'">
      <path d="M4 7.5A2.5 2.5 0 0 1 6.5 5H19v14H6.5A2.5 2.5 0 0 1 4 16.5z" />
      <path d="M4 8h15M15 12h4v4h-4a2 2 0 1 1 0-4Z" />
    </template>
    <template v-else-if="name === 'card'">
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <path d="M2 9h20M6 15h5" />
    </template>
    <template v-else-if="name === 'document'">
      <path d="M7 3h7l4 4v14H7z" />
      <path d="M14 3v5h4M10 12h5M10 16h5" />
    </template>
    <template v-else-if="name === 'user'">
      <circle cx="12" cy="8" r="4" />
      <path d="M5 21a7 7 0 0 1 14 0" />
    </template>
    <template v-else-if="name === 'home'">
      <path d="m4 11 8-7 8 7v9h-6v-6h-4v6H4z" />
    </template>
    <template v-else-if="name === 'headset'">
      <path d="M4 13v-2a8 8 0 0 1 16 0v2" />
      <path d="M4 13h3v6H5a1 1 0 0 1-1-1zm16 0h-3v6h2a1 1 0 0 0 1-1zM17 19c0 1-1.5 2-3 2" />
    </template>
    <template v-else-if="name === 'lock'">
      <rect x="5" y="10" width="14" height="11" rx="2" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3" />
    </template>
    <template v-else-if="name === 'chart'">
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
</style>
