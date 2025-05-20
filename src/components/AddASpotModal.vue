<script setup lang="ts">
import type { AddASpotFormData } from "@/lib/types";
import Button from "./ui/Button.vue";
import Input from "./ui/Input.vue";
import Select from "./ui/Select.vue";
import { ref } from "vue";

const emit = defineEmits<{
  handleSubmit: [formData: AddASpotFormData];
  toggleIsOpen: [isOpen: boolean];
}>();

const formData = ref<AddASpotFormData>({
  name: "",
  address: "",
  notes: "",
  category: [],
  badge: [],
});

const submittedForm = () => {
  console.log("submitted");
  emit("handleSubmit", formData.value);
  formData.value = {
    name: "",
    address: "",
    notes: "",
    category: [],
    badge: [],
  };
  emit("toggleIsOpen", false);
};
</script>

<template>
  <div class="modal-container">
    <form class="modal" @submit.prevent="submittedForm">
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

      <section class="public-container">
        <Input
          label="Name"
          placeholder="Elysian Park"
          v-model="formData.name"
        />
        <Input
          label="Address"
          placeholder="1234 East Eleanore St., Glendale 20098"
          value="formData.value.address"
          v-model="formData.address"
        />
        <Select
          label="Add a category"
          :options="['Restaurants', 'Bars', 'Hikes', 'Shops', 'Parks', 'Cafes']"
          v-model="formData.category"
        />
      </section>

      <section class="private-container">
        <p
          class="text-sm max-sm-smaller:text-xs text-gray-500 font-normal leading-tight"
        >
          This section is private and will only be visible on your pins, in your
          app when logged in.
        </p>
        <div class="private-input-container">
          <Input
            label="Notes"
            placeholder="Great views, green, coyotes around"
            v-model="formData.notes"
          />
          <Select
            label="Add a badge"
            :options="['Want to go', 'Not Keen', 'Loved it!']"
            v-model="formData.badge"
          />
        </div>
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
  @apply fixed inset-0 z-50 flex items-center justify-center bg-black/15 backdrop-blur-md;
}
.modal {
  @apply bg-white rounded-2xl px-10 py-8 max-w-md w-full flex-col flex gap-y-7 shadow-lg border border-pink-950/20

  max-sm-smaller:m-8 overflow-y-auto max-h-[90vh] max-sm-smaller:gap-y-5 max-sm-smaller:rounded-xl max-sm-smaller:px-8 max-sm-smaller:py-7;
}
.public-container {
  @apply gap-y-3 flex flex-col;
}
.private-container {
  @apply flex flex-col gap-y-2 mt-2;
}
.private-input-container {
  @apply flex flex-col border border-pink-950/15 rounded-lg pb-6 pt-4 gap-y-3 px-6;
}
.buttons-container {
  @apply flex justify-between my-2 gap-x-4 mr-1

  max-sm-smaller:flex-col max-sm-smaller:gap-y-4;
}
</style>
