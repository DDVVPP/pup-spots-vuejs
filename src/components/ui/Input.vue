<script setup lang="ts">
defineProps<{
  label: string;
  placeholder: string;
  modelValue?: string | null;
}>();

defineEmits<{
  "update:modelValue": [value: string | null];
}>();
</script>

<template>
  <div class="flex flex-col gap-y-1">
    <label
      :for="label"
      class="text-sm max-sm-smaller:text-xs font-medium text-slate-700"
      >{{ label }}</label
    >
    <input
      :id="label"
      :placeholder="placeholder"
      class="placeholder:text-slate-300 text-xs text-slate-600 rounded-md border p-2"
      @input="
        $emit('update:modelValue', ($event.target as HTMLInputElement).value)
      "
      :value="modelValue"
    />
  </div>
</template>
