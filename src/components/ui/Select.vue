<script setup lang="ts">
defineProps<{
  label: string;
  options: string[];
}>();
</script>

<template>
  <label :for="label" class="block text-sm font-medium text-slate-700 mb-1">
    {{ label }}
  </label>
  <select
    :name="label"
    :id="label"
    class="border p-2 rounded-md w-full text-sm text-slate-700"
  >
    <option
      v-for="option in options"
      :key="option"
      :value="option"
      class="text-xs"
    >
      {{ option }}
    </option>
  </select>
</template>
