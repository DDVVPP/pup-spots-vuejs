<script setup lang="ts">
import MapboxMap from "./components/MapboxMap.vue";
import MapHeader from "./components/MapHeader.vue";
</script>

<template>
  <main class="relative w-full h-screen">
    <MapHeader />
    <MapboxMap />
  </main>
</template>
