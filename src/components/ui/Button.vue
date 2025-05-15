<script setup lang="ts">
withDefaults(
  defineProps<{
    text: string;
    variant?: "primary" | "secondary";
    disabled?: boolean;
    type?: "button" | "submit";
  }>(),
  {
    variant: "primary",
    disabled: false,
    type: "button",
  }
);

const variantClassMap = {
  primary: `
    bg-red-400
    hover:bg-red-500
    text-white
  `,
  secondary: `
    text-slate-700
    border-slate-300
    hover:bg-slate-200
  `,
};
</script>

<template>
  <button
    class="rounded-md border px-4 py-2 transition disabled:opacity-50 disabled:cursor-not-allowed"
    :class="[variantClassMap[variant]]"
  >
    {{ text }}
  </button>
</template>
