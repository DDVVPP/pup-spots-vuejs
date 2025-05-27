<script setup lang="ts">
import { ref, type Ref } from "vue";
import { useForm, useField } from "vee-validate";

import type { AddASpotFormData } from "@/lib/types";
import { addSpotSchema, rawAddSpotSchema } from "@/lib/schemas";

import Button from "@/components/ui/Button.vue";
import TextInput from "@/components/ui/TextInput.vue";
import TextAreaInput from "@/components/ui/TextareaInput.vue";
import Select from "@/components/ui/Select.vue";
import useOutsideClick from "@/composables/useOutsideClick";
import useEscapeKey from "@/composables/useEscapeKey";

const modalRef = ref<Ref<HTMLDivElement | null> | null>(null);
useOutsideClick(modalRef, () => {
  emit("toggleIsOpen", false);
});
useEscapeKey(() => emit("toggleIsOpen", false));

const emit = defineEmits<{
  handleSubmit: [values: AddASpotFormData];
  toggleIsOpen: [isOpen: boolean];
}>();

const { handleSubmit, values } = useForm<AddASpotFormData>({
  validationSchema: addSpotSchema,
  validateOnMount: false,
  initialValues: rawAddSpotSchema.getDefault(),
});
const { value: name, errorMessage: nameError } =
  useField<AddASpotFormData["name"]>("name");
const { value: address, errorMessage: addressError } =
  useField<AddASpotFormData["address"]>("address");
const { value: notes, errorMessage: notesError } =
  useField<AddASpotFormData["notes"]>("notes");
const { value: category, errorMessage: categoryError } =
  useField<AddASpotFormData["category"]>("category");
const { value: badge } = useField<AddASpotFormData["badge"]>("badge");

const onSubmit = handleSubmit((values) => {
  emit("handleSubmit", values);
  emit("toggleIsOpen", false);
});
</script>

<template>
  <div class="modal-container">
    <form ref="modalRef" class="modal" @submit.prevent="onSubmit">
      <h1
        class="text-lg font-semibold text-brand-corral flex flex-col max-sm-smaller:text-base"
      >
        Add Pup Spot
        <span
          class="text-sm max-sm-smaller:text-xs text-gray-500 font-normal leading-tight"
        >
          Add to inputs below to submit a spot for approval. On submission, your
          pin will be marked 'pending', until it is approved.
        </span>
      </h1>

      <section class="scroll-controller overflow-y-auto">
        <section class="public-container">
          <TextInput
            label="Name"
            placeholder="Elysian Park"
            v-model="name"
            isRequired
            :errorMessage="nameError"
          />
          <TextInput
            label="Address"
            placeholder="1234 East Eleanore St., Glendale 20098"
            v-model="address"
            isRequired
            :errorMessage="addressError"
          />
          <Select
            label="Add a category"
            :options="[
              'Restaurants',
              'Bars',
              'Hikes',
              'Shops',
              'Parks',
              'Cafes',
            ]"
            v-model="category"
            isRequired
            :errorMessage="categoryError"
          />
        </section>

        <section class="private-container">
          <p
            class="text-sm max-sm-smaller:text-xs text-gray-500 font-normal leading-tight"
          >
            This section is private and will only be visible on your pins, in
            your app when logged in.
          </p>
          <div class="private-input-container">
            <TextAreaInput
              label="Notes"
              placeholder="Great views, green, coyotes around"
              v-model="notes"
              :errorMessage="notesError"
            />
            <Select
              label="Add a badge"
              :options="['Want to go', 'Not Keen', 'Loved it!']"
              v-model="badge"
            />
          </div>
        </section>
      </section>

      <section class="buttons-container">
        <Button text="Submit Spot" class="w-1/2" type="submit" />
        <Button
          text="Cancel"
          variant="secondary"
          @click="emit('toggleIsOpen', false)"
          class="w-1/2"
        />
      </section>
    </form>
  </div>
</template>

<style scoped>
.modal-container {
  @apply absolute inset-0 z-50 flex items-center justify-center bg-black/15 backdrop-blur-md;
}
.modal {
  /* --- Base styles --- */
  @apply bg-white rounded-2xl px-10 py-8 max-w-md w-full flex-col flex gap-y-7 shadow-lg border border-pink-950/20;
  /* --- Smaller screen adjustments --- */
  @apply max-sm-smaller:m-8  max-h-[90vh] max-sm-smaller:gap-y-5 max-sm-smaller:rounded-xl max-sm-smaller:px-8 max-sm-smaller:py-10;
}
.public-container {
  @apply gap-y-1 flex flex-col mr-2;
}
.private-container {
  @apply flex flex-col gap-y-2 mr-2 mt-2;
}
.private-input-container {
  @apply flex flex-col border border-pink-950/15 rounded-lg pb-6 gap-y-1 pt-4 px-6;
}
.buttons-container {
  /* --- Base styles --- */
  @apply flex justify-between my-2 gap-x-4 mr-1;
  /* --- Smaller screen adjustments --- */
  @apply max-sm-smaller:flex-col max-sm-smaller:gap-y-4;
}
</style>
