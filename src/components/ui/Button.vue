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
    bg-brand-corral
    border-none
    text-white
  `,
  secondary: `
    bg-white
    border-pink-950/30
    hover:bg-white
    text-slate-700
  `,
};
</script>

<template>
  <button
    class="rounded-md border px-4 py-2 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] shadow-[2px_2px_rgba(131,24,67,1)]"
    :class="[variantClassMap[variant]]"
  >
    {{ text }}
  </button>
</template>
