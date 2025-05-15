<script setup lang="ts">
import { onMounted, ref } from "vue";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

import { spotsData } from "@/lib/data/spotsData";
import { addMarker } from "@/lib/utils/addMarkerAndPopup";

const mapboxToken = import.meta.env.VITE_MAPBOX_TOKEN;
const mapContainer = ref<HTMLElement | null>(null);

onMounted(() => {
  mapboxgl.accessToken = mapboxToken;
  if (!mapContainer.value) return;

  const map = new mapboxgl.Map({
    container: mapContainer.value,
    style: "mapbox://styles/dvanparijs/cm9rywpj900ht01rmfnwk0y30",
    center: [-118.2437, 34.0522], // [lng, lat] → Los Angeles
    zoom: 11,
  });

  map.on("load", () => {
    spotsData.forEach((spot) => {
      addMarker(spot, map);
    });
  });
});
</script>

<template>
  <section
    aria-label="Interactive map of dog-friendly spots"
    ref="mapContainer"
    class="absolute inset-0 w-full h-full"
  />
</template>
