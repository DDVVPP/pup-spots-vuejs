<script setup lang="ts">
import Button from "./ui/Button.vue";
import Input from "./ui/Input.vue";
import Select from "./ui/Select.vue";
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
    </div>
  </div>
</template>
