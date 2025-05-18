<script setup lang="ts">
import { onMounted, ref } from "vue";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

import { spotsData } from "@/lib/data/spotsData";
import { addMarker } from "@/lib/utils/addMarkerAndPopup";
import type { PopupRef } from "@/lib/types";
import { closePopup } from "@/lib/utils/closePopup";

const mapboxToken = import.meta.env.VITE_MAPBOX_TOKEN;
const mapContainer = ref<HTMLElement | null>(null);
const currentPopup: PopupRef = ref(null);

onMounted(() => {
  mapboxgl.accessToken = mapboxToken;
  if (!mapContainer.value) return;

  const map = new mapboxgl.Map({
    container: mapContainer.value,
    style: "mapbox://styles/dvanparijs/cm9rywpj900ht01rmfnwk0y30",
    center: [-118.2437, 34.0522], // Los Angeles
    zoom: 11,
  });

  map.on("load", () => {
    spotsData.forEach((spot) => {
      addMarker(spot, map, currentPopup);
    });
  });

  // Add Escape key listener once to close the current popup.
  // Avoids adding a new listener for every marker inside addMarker().
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closePopup(currentPopup);
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
