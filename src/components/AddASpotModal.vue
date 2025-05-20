<script setup lang="ts">
import Button from "./ui/Button.vue";
import Input from "./ui/Input.vue";
import Select from "./ui/Select.vue";
const emit = defineEmits(["toggleIsOpen"]);
</script>

<template>
  <div
    class="fixed inset-0 z-50 flex items-center justify-center bg-black/5 backdrop-blur-sm"
  >
    <div
      class="bg-white rounded-lg p-6 shadow-md max-w-md w-full flex-col flex gap-y-2"
    >
      <h1 class="text-lg font-semibold mb-2">Add Pup Spot</h1>
      <p class="text-sm text-gray-600">
        Add a title, description, and category for this pin..
      </p>
      <Input label="Title" placeholder="Elysian Park" />
      <Input label="Notes" placeholder="Great views, green, coyotes around" />
      <Select
        label="Choose a category"
        :options="['restaurants', 'bars', 'hikes', 'shops', 'parks', 'cafes']"
      />
      <Button text="Add Pin" />
      <Button text="Cancel" variant="secondary" />

      <button class="add-a-spot-button" @click="emit('toggleIsOpen')">
        Submit for Approval
      </button>
      <button class="add-a-spot-button" @click="emit('toggleIsOpen')">
        Cancel
      </button>
    </div>
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
