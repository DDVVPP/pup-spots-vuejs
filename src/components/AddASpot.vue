<script setup lang="ts"></script>

<template>
  <div
    className="absolute top-20 right-7 z-10 w-fit max-w-md max-sm:inset-x-6 max-sm:top-[140px] max-sm:mx-auto"
  >
    <button className="add-a-spot-button">Add a spot</button>
  </div>
</template>

<style scoped>
.add-a-spot-button {
  @apply font-medium p-3 px-4 leading-none rounded-xl border-pink-950 text-white bg-brand-corral shadow-[4px_4px_rgba(131,24,67,1)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px];
}
</style>
