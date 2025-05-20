<script setup lang="ts">
import Button from "./ui/Button.vue";
import Input from "./ui/Input.vue";
import Select from "./ui/Select.vue";
const emit = defineEmits(["toggleIsOpen"]);
</script>

<template>
  <div class="modal-wrapper">
    <div class="modal">
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

      <div class="buttons-wrapper">
        <Button
          text="Submit for Approval"
          @click="emit('toggleIsOpen')"
          class="w-1/2"
        />
        <Button
          text="Cancel"
          variant="secondary"
          @click="emit('toggleIsOpen')"
          class="w-1/2"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal-wrapper {
  @apply fixed inset-0 z-50 flex items-center justify-center bg-black/5 backdrop-blur-sm;
}
.modal {
  @apply bg-white rounded-lg p-6 max-w-md w-full flex-col flex gap-y-2 shadow-lg border border-pink-950/15;
}
.buttons-wrapper {
  @apply flex justify-between mt-2 gap-x-4 mr-1;
}
</style>
