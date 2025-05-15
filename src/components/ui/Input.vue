<script setup lang="ts">
defineProps<{
  label: string;
  placeholder: string;
}>();
</script>

<template>
  <label :for="label" class="text-sm font-medium text-slate-700">{{
    label
  }}</label>
  <input
    :placeholder="placeholder"
    class="placeholder:text-slate-300 text-xs text-slate-600 rounded-md border p-2"
  />
</template>
