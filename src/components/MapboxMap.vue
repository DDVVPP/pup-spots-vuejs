<script setup lang="ts">
import { onMounted, ref } from "vue";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import AddPinModal from "./AddPinModal.vue";

type Coordinates = {
  lng: number;
  lat: number;
};

const mapboxToken = import.meta.env.VITE_MAPBOX_TOKEN;
const mapContainer = ref<HTMLElement | null>(null);
const map = ref();

const selectedCoords = ref<Coordinates>();
const isOpen = ref(false);

onMounted(() => {
  mapboxgl.accessToken = mapboxToken;

  if (!mapContainer.value) return;

  map.value = new mapboxgl.Map({
    container: mapContainer.value,
    style: "mapbox://styles/dvanparijs/cm9rywpj900ht01rmfnwk0y30",
    center: [-118.2437, 34.0522], // [lng, lat] → Los Angeles
    zoom: 11,
  });

  map.value.on("click", (e: mapboxgl.MapMouseEvent) => {
    selectedCoords.value = e.lngLat;
    isOpen.value = true;
  });
});
</script>

<template>
  <div v-if="isOpen">
    <AddPinModal />
  </div>
  <section
    aria-label="Interactive map of dog-friendly spots"
    ref="mapContainer"
    class="absolute inset-0 w-full h-full"
  />
</template>
