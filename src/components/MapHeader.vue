<script setup lang="ts">
import { Icon as PawPrintIcon } from "@iconify/vue";
</script>

<template>
  <header role="banner" className="map-header">
    <h1 className="text-xl text-brand-corral font-semibold leading-none">
      Pup Spots
    </h1>
    <PawPrintIcon
      icon="ph:paw-print-fill"
      width="26"
      height="26"
      color="#f73f79"
      class="ml-0.5"
    />
    <p className="text-xs text-slate-600 leading-tight text-center">
      A map of dog-friendly hangouts across LA
    </p>
  </header>
</template>

<style scoped>
.map-header {
  /* --- Base styles --- */
  @apply absolute top-6 right-6 z-10 w-fit max-w-md px-4 py-2
         bg-white/95 rounded-xl border-2 border-brand-corral shadow-md shadow-gray-300
         flex items-center gap-x-2;

  /* --- Smaller screen adjustments --- */
  @apply max-sm:flex-col max-sm:gap-y-1 max-sm:py-3
         max-sm:inset-x-6 max-sm:mx-auto;
}
</style>
