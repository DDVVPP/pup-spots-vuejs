<script setup lang="ts">
import { ref } from "vue";
import AddASpotModal from "./AddASpotModal.vue";

const isOpen = ref(false);
const toggleIsOpen = () => {
  isOpen.value = !isOpen.value;
};
</script>

<template>
  <div className="add-a-spot-button-wrapper">
    <button @click="toggleIsOpen" className="add-a-spot-button">
      Add a spot
    </button>
  </div>

  <div v-if="isOpen === true">
    <AddASpotModal @toggleIsOpen="toggleIsOpen" />
  </div>
</template>

<style scoped>
.add-a-spot-button-wrapper {
  @apply absolute top-20 right-7 z-10 w-fit max-w-md max-sm:inset-x-6 max-sm:top-[140px] max-sm:mx-auto;
}
.add-a-spot-button {
  @apply font-medium p-3 px-4 leading-none rounded-xl border-pink-950 text-white bg-brand-corral shadow-[4px_4px_rgba(131,24,67,1)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px];
}
</style>
