<script setup lang="ts">
defineProps<{
  message?: string;
}>();
</script>

<template>
  <p
    class="error-message"
    :class="{
      'opacity-100': message,
      'opacity-0': !message,
    }"
  >
    {{ message ?? " " }}
  </p>
</template>

<style scoped>
.error-message {
  @apply text-brand-corral text-sm max-sm-smaller:text-xs transition-opacity duration-200 ease-in min-h-5;
}
</style>
