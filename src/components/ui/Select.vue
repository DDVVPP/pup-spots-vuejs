<script setup lang="ts">
import FieldError from "./FieldError.vue";

const props = defineProps<{
  label: string;
  options: string[];
  modelValue?: string[];
  errorMessage?: string;
  isRequired?: boolean;
}>();

const emit = defineEmits<{
  "update:modelValue": [value: string[]];
}>();

const toggleOption = (option: string) => {
  const current = props.modelValue ?? [];
  if (current.includes(option)) {
    emit(
      "update:modelValue",
      current.filter((item) => item !== option)
    );
  } else {
    emit("update:modelValue", [...current, option]);
  }
};
</script>

<template>
  <div class="flex flex-col gap-y-1">
    <label
      class="block text-sm max-sm-smaller:text-xs font-medium text-slate-700"
    >
      {{ label }}<span v-if="isRequired" class="font-normal"> (required)</span>
    </label>
    <div class="flex flex-col gap-y-1 pl-1">
      <label
        v-for="option in options"
        :key="option"
        class="flex items-center gap-x-2 max-sm-smaller:text-xs text-sm text-slate-700"
      >
        <input
          type="checkbox"
          :name="label"
          :value="option"
          :checked="modelValue?.includes(option)"
          @change="() => toggleOption(option)"
        />
        {{ option }}
      </label>
    </div>

    <FieldError :message="errorMessage" />
  </div>
</template>
