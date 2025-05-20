<script setup lang="ts">
defineProps<{
  label: string;
  options: string[];
}>();
</script>

<template>
  <div class="flex flex-col gap-y-1">
    <label
      :for="label"
      class="block text-sm max-sm-smaller:text-xs font-medium text-slate-700"
    >
      {{ label }}
    </label>
    <select
      :name="label"
      :id="label"
      class="border p-2 rounded-md w-full text-xs text-slate-700"
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
  </div>
</template>
