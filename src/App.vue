<script setup lang="ts">
import MapboxMap from "./components/MapboxMap.vue";
import MapHeader from "./components/MapHeader.vue";
import AddASpot from "./components/AddASpot.vue";
</script>

<template>
  <main class="relative w-full h-screen">
    <MapHeader />
    <AddASpot />
    <MapboxMap />
  </main>
</template>
